const openModalBtn = document.querySelector('.open-modal-btn');
const closeModalBtn = document.querySelector('.close-modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

openModalBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('hidden');
});

modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.add('hidden');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modalOverlay.classList.add('hidden');
  }
});

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Reset Tabs
    tabButtons.forEach((tab) => {
      tab.classList.remove('active');
    });

    // Activate clicked tab
    button.classList.add('active');

    // Reset panels
    tabPanels.forEach((panel) => {
      panel.classList.remove('active');
    });

    // Show correct panel
    const target = button.dataset.tab;

    tabPanels.forEach((panel) => {
      if (panel.dataset.panel === target) {
        panel.classList.add('active');
      }
    });
  });
});
