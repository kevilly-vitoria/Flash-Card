// Flashcard flip on click or keyboard (Enter/Space)
function setupFlashcards() {
    const cards = document.querySelectorAll('.flashcard');
    cards.forEach(card => {
      // Mouse click
      card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
        card.setAttribute('aria-pressed', card.classList.contains('is-flipped'));
      });
  
      // Keyboard: Enter or Space
      card.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          card.classList.toggle('is-flipped');
          card.setAttribute('aria-pressed', card.classList.contains('is-flipped'));
        }
      });
  
      // Accessibility: remove flip on blur
      card.addEventListener('blur', () => {
        // option: keep flipped or not. Here: keep.
        // card.classList.remove('is-flipped');
        // card.setAttribute('aria-pressed', 'false');
      });
    });
  }
  window.addEventListener('DOMContentLoaded', setupFlashcards);