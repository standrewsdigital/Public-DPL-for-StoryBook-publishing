"use strict";
const transcripts = document.querySelectorAll('.video-transcript');
transcripts.forEach(function (transcript, index) {
    const button = transcript.previousElementSibling;
    transcript.id = `video-transcript-${index}`;
    transcript.style.setProperty('position-anchor', `--video-transcript-${index}`);
    if (button && button.nodeName === "BUTTON") {
        button.setAttribute('aria-controls', `video-transcript-${index}`);
        button.setAttribute('popovertarget', `video-transcript-${index}`);
        transcript.addEventListener('toggle', (e) => {
            if (e.newState === 'open') {
                button.textContent = "Close transcript";
            }
            else {
                button.textContent = "Open transcript";
            }
        });
    }
    const figureParent = transcript.parentElement;
    if (figureParent && figureParent.nodeName === "FIGURE") {
        figureParent.style.setProperty('anchor-name', `--video-transcript-${index}`);
    }
});
