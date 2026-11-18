document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-video-transcript]').forEach(function (panel, index) {
    var button = panel.querySelector('.video-transcript-toggle');
    var transcript = panel.querySelector('.video-transcript-transcript');
    var card = panel.querySelector('.video-transcript-card');
    var video = panel.querySelector('.video-transcript-video');
    var copyColumn = panel.querySelector('.video-transcript-copy-column');
    var cardColumn = panel.querySelector('.video-transcript-card-column');

    if (!button || !transcript || !card || !video || !copyColumn || !cardColumn) {
      return;
    }

    var transcriptId = transcript.id || 'video-transcript-panel-' + (index + 1);
    transcript.id = transcriptId;

    button.setAttribute('aria-controls', transcriptId);
    button.setAttribute('aria-expanded', 'false');
    transcript.setAttribute('aria-hidden', 'true');

    function openTranscript() {
      var cardHeight = card.offsetHeight;
      var videoWidth = video.getBoundingClientRect().width;

      card.style.setProperty('--video-transcript-card-height', cardHeight + 'px');
      card.style.setProperty('--video-transcript-video-width', videoWidth + 'px');

      copyColumn.hidden = true;

      cardColumn.classList.remove('col-5-lg');
      cardColumn.classList.add('col-12-lg');

      panel.classList.add('is-expanded');

      button.setAttribute('aria-expanded', 'true');
      transcript.setAttribute('aria-hidden', 'false');
      button.textContent = 'Close transcript';
    }

    function closeTranscript() {
      panel.classList.remove('is-expanded');

      copyColumn.hidden = false;

      cardColumn.classList.remove('col-12-lg');
      cardColumn.classList.add('col-5-lg');

      card.style.removeProperty('--video-transcript-card-height');
      card.style.removeProperty('--video-transcript-video-width');

      button.setAttribute('aria-expanded', 'false');
      transcript.setAttribute('aria-hidden', 'true');
      button.textContent = 'Show transcript';
    }

    button.addEventListener('click', function () {
      if (panel.classList.contains('is-expanded')) {
        closeTranscript();
      } else {
        openTranscript();
      }
    });

    window.addEventListener('resize', function () {
      if (!panel.classList.contains('is-expanded')) {
        return;
      }

      closeTranscript();
    });
  });
});