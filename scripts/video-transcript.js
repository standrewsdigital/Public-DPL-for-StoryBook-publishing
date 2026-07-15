"use strict";

(function () {
    const desktopQuery = window.matchMedia(
        "(min-width: 992px)"
    );

    const supportsPopover =
        "popover" in HTMLElement.prototype &&
        typeof HTMLElement.prototype.showPopover === "function" &&
        typeof HTMLElement.prototype.hidePopover === "function";

    const panels = document.querySelectorAll(
        "[data-video-transcript]"
    );

    panels.forEach(function (panel) {
        const container = panel.closest(".container");

        const copyColumn = panel.querySelector(
            ".video-transcript-copy-column"
        );

        const cardColumn = panel.querySelector(
            ".video-transcript-card-column"
        );

        const card = panel.querySelector(
            ".video-transcript-card"
        );

        const transcript = panel.querySelector(
            ".video-transcript-transcript"
        );

        const videoWrapper = panel.querySelector(
            ".video-wrapper"
        );

        const toggle = panel.querySelector(
            ".video-transcript-toggle"
        );

        if (
            !container ||
            !copyColumn ||
            !cardColumn ||
            !card ||
            !transcript ||
            !videoWrapper ||
            !toggle
        ) {
            return;
        }

        const videoPosition =
            panel.dataset.videoPosition || "right";

        const isCentered =
            videoPosition === "center" ||
            cardColumn.classList.contains("col-centered");

        let mode = "closed";
        let measurementFrame = null;

        card.dataset.videoPosition = videoPosition;

        panel.classList.toggle(
            "video-transcript-panel--centered",
            isCentered
        );

        function updateButton(isOpen) {
            toggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            toggle.textContent = isOpen
                ? "Close transcript"
                : "Show transcript";
        }

        function showTranscript() {
            transcript.removeAttribute("hidden");
            transcript.setAttribute("aria-hidden", "false");
        }

        function hideTranscript() {
            transcript.setAttribute("hidden", "");
            transcript.setAttribute("aria-hidden", "true");
        }

        function canUseNativePopover() {
            return (
                !isCentered &&
                desktopQuery.matches &&
                supportsPopover
            );
        }

        function getPixelValue(value) {
            const number = Number.parseFloat(value);

            return Number.isFinite(number) ? number : 0;
        }

        /*
         * The DPL .row uses display: contents, so it has no box
         * that can be measured. Position the popover against the
         * real content area of the nearest .container instead.
         */
        function getContainerContentBounds() {
            const rect = container.getBoundingClientRect();
            const styles = window.getComputedStyle(container);

            const left =
                rect.left +
                getPixelValue(styles.borderLeftWidth) +
                getPixelValue(styles.paddingLeft);

            const right =
                rect.right -
                getPixelValue(styles.borderRightWidth) -
                getPixelValue(styles.paddingRight);

            return {
                left,
                right,
                width: Math.max(0, right - left)
            };
        }

        function setCardProperty(name, value) {
            if (card.style.getPropertyValue(name) !== value) {
                card.style.setProperty(name, value);
            }
        }

        function toPixels(value) {
            return `${Math.round(value * 100) / 100}px`;
        }

        function updateNativePlacement() {
            const bounds = getContainerContentBounds();

            const top =
                cardColumn.getBoundingClientRect().top;

            setCardProperty(
                "--video-transcript-popover-left",
                toPixels(bounds.left)
            );

            setCardProperty(
                "--video-transcript-popover-top",
                toPixels(top)
            );

            setCardProperty(
                "--video-transcript-popover-width",
                toPixels(bounds.width)
            );
        }

        function updateNativeMeasurements() {
            measurementFrame = null;

            if (
                mode !== "native" ||
                !card.matches(":popover-open")
            ) {
                return;
            }

            updateNativePlacement();

            const videoHeight =
                videoWrapper.getBoundingClientRect().height;

            setCardProperty(
                "--video-transcript-media-height",
                toPixels(videoHeight)
            );

            const cardHeight =
                card.getBoundingClientRect().height;

            cardColumn.style.minHeight = toPixels(cardHeight);
        }

        function scheduleNativeMeasurements() {
            if (
                mode !== "native" ||
                measurementFrame !== null
            ) {
                return;
            }

            measurementFrame = requestAnimationFrame(
                updateNativeMeasurements
            );
        }

        function clearPopoverProperties() {
            [
                "--video-transcript-popover-left",
                "--video-transcript-popover-top",
                "--video-transcript-popover-width",
                "--video-transcript-media-height"
            ].forEach(function (property) {
                card.style.removeProperty(property);
            });
        }

        function cleanupNativePopover() {
            if (mode !== "native") {
                return;
            }

            if (measurementFrame !== null) {
                cancelAnimationFrame(measurementFrame);
                measurementFrame = null;
            }

            card.classList.remove(
                "is-popover-expanded"
            );

            hideTranscript();

            card.removeAttribute("popover");
            clearPopoverProperties();

            cardColumn.style.removeProperty("min-height");

            panel.classList.remove(
                "is-native-popover-open"
            );

            mode = "closed";
            updateButton(false);
        }

        function openNativePopover() {
            const closedHeight = Math.max(
                copyColumn.getBoundingClientRect().height,
                cardColumn.getBoundingClientRect().height
            );

            mode = "native";

            cardColumn.style.minHeight =
                toPixels(closedHeight);

            updateNativePlacement();

            panel.classList.add(
                "is-native-popover-open"
            );

            card.classList.add(
                "is-popover-expanded"
            );

            showTranscript();
            updateButton(true);

            card.setAttribute("popover", "auto");

            try {
                card.showPopover({
                    source: toggle
                });

                requestAnimationFrame(function () {
                    requestAnimationFrame(
                        scheduleNativeMeasurements
                    );
                });
            } catch (error) {
                card.classList.remove(
                    "is-popover-expanded"
                );

                card.removeAttribute("popover");
                clearPopoverProperties();

                cardColumn.style.removeProperty(
                    "min-height"
                );

                panel.classList.remove(
                    "is-native-popover-open"
                );

                mode = "closed";
                openInlineTranscript();
            }
        }

        function closeNativePopover() {
            if (
                mode === "native" &&
                card.matches(":popover-open")
            ) {
                card.hidePopover();
                return;
            }

            cleanupNativePopover();
        }

        function openInlineTranscript() {
            mode = "inline";

            showTranscript();

            panel.classList.add(
                "is-inline-expanded"
            );

            updateButton(true);
        }

        function closeInlineTranscript(options = {}) {
            panel.classList.remove(
                "is-inline-expanded"
            );

            hideTranscript();

            mode = "closed";
            updateButton(false);

            if (options.returnFocus) {
                toggle.focus();
            }
        }

        function openTranscript() {
            if (canUseNativePopover()) {
                openNativePopover();
            } else {
                openInlineTranscript();
            }
        }

        function closeTranscript(options = {}) {
            if (mode === "native") {
                closeNativePopover();
            } else if (mode === "inline") {
                closeInlineTranscript(options);
            }
        }

        toggle.addEventListener("click", function () {
            if (mode === "closed") {
                openTranscript();
            } else {
                closeTranscript();
            }
        });

        /*
         * Handles button closing, Escape and native
         * light-dismiss behaviour.
         */
        card.addEventListener("toggle", function (event) {
            if (event.newState === "open") {
                updateButton(true);
                scheduleNativeMeasurements();
                return;
            }

            cleanupNativePopover();
        });

        panel.addEventListener("keydown", function (event) {
            if (
                event.key !== "Escape" ||
                mode !== "inline"
            ) {
                return;
            }

            event.preventDefault();

            closeInlineTranscript({
                returnFocus: true
            });
        });

        function handleViewportChange() {
            if (
                mode === "native" &&
                !canUseNativePopover()
            ) {
                closeNativePopover();
            }
        }

        if (
            typeof desktopQuery.addEventListener === "function"
        ) {
            desktopQuery.addEventListener(
                "change",
                handleViewportChange
            );
        } else {
            desktopQuery.addListener(
                handleViewportChange
            );
        }

        window.addEventListener(
            "resize",
            scheduleNativeMeasurements
        );

        window.addEventListener(
            "scroll",
            scheduleNativeMeasurements,
            { passive: true }
        );

        if ("ResizeObserver" in window) {
            const resizeObserver = new ResizeObserver(
                scheduleNativeMeasurements
            );

            resizeObserver.observe(videoWrapper);
        }

        hideTranscript();
        updateButton(false);
    });
})();