"use strict";
const heroVideo = document.querySelector(".video video");
const toggleBtn = document.querySelector(".video-control-btn");
const icon = toggleBtn?.querySelector("span");
if (toggleBtn && heroVideo && icon) {
    function updateVideoControl(isPaused) {
        icon.textContent = isPaused ? "play_arrow" : "pause";
        toggleBtn.setAttribute("aria-label", isPaused ? "Play background video" : "Pause background video");
    }
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
        heroVideo.pause();
        const videoSection = document.querySelector('.media .video');
        videoSection?.remove();
    }
    toggleBtn.addEventListener("click", function () {
        if (heroVideo.paused) {
            heroVideo.play()
                .then(() => {
                updateVideoControl(false);
            })
                .catch(() => {
                updateVideoControl(true);
            });
            return;
        }
        heroVideo.pause();
        updateVideoControl(true);
    });
}
