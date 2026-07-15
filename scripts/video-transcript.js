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

        const toggle = panel.querySelector(
            ".video-transcript-toggle"
        );

        const toggleLabel = panel.querySelector(
            ".video-transcript-toggle-label"
        );

        if (
            !container ||
            !copyColumn ||
            !cardColumn ||
            !card ||
            !transcript ||
            !toggle ||
            !toggleLabel
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

            toggleLabel.textContent = isOpen
                ? "Close transcript"
                : "Show transcript";
        }

        function showTranscript() {
            transcript.removeAttribute("hidden");
        }

        function hideTranscript() {
            transcript.setAttribute("hidden", "");
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
         * .video-transcript-panel is also a .row. In the DPL grid,
         * .row uses display: contents and therefore has no box to
         * measure. The container does have a real box, so use its
         * content edges inside its border and padding.
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

            const cardHeight =
                card.getBoundingClientRect().height;

            cardColumn.style.minHeight =
                toPixels(cardHeight);
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
                "--video-transcript-popover-width"
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

            cardColumn.style.removeProperty(
                "min-height"
            );

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

            /*
             * Set the exact grid bounds before moving the card
             * into the browser's top layer.
             */
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

                /*
                 * Wait for the browser to lay out the top-layer
                 * element before measuring its expanded height.
                 */
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
         * Handles closing with the button, Escape and native
         * Popover API light-dismiss.
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
            {
                passive: true
            }
        );

        if ("ResizeObserver" in window) {
            const resizeObserver = new ResizeObserver(
                scheduleNativeMeasurements
            );

            resizeObserver.observe(card);
        }

        hideTranscript();
        updateButton(false);
    });
})();