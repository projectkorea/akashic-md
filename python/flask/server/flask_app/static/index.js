function openModal() {
  document.getElementById('modal-background').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal-background').style.display = 'none';
}

function changeRoute(route, pageType) {
  let basePath = '/admin';

  if (pageType === 'profile') {
    basePath = '/admin/profile';
  }

  if (route === 'search') {
    const uid = document.getElementById('hSearch').value;
    return (window.location.href = `${basePath}/search?fbUid=${uid}`);
  }

  if (route) {
    return (window.location.href = `${basePath}/${route}`);
  }

  window.location.href = basePath;
}

function toggleAll() {
  const checkboxes = document.querySelectorAll('input[name="age_filter"]');
  const hAllAgeCheckbox = document.getElementById('hAllAgeCheckbox');

  checkboxes.forEach(function (checkbox) {
    if (checkbox !== hAllAgeCheckbox) {
      checkbox.checked = hAllAgeCheckbox.checked;
    }
  });
}

function initializeEventListeners() {
  const eventHandlers = {
    hFilterBtn: () => openModal(),
    hCloseBtn: () => closeModal(),
    hTitleBtn: () => changeRoute(),
    hProfileBtn: () => changeRoute('profile'),
    hChartBtn: () => changeRoute('chart'),
    hSearchBtn: (args) => changeRoute('search', args[0]),
    hAllAgeCheckbox: () => toggleAll(),
  };

  Object.entries(eventHandlers).forEach(([id, handler]) => {
    const element = document.getElementById(id);
    if (element) {
      const args = element.dataset.args ? JSON.parse(element.dataset.args) : null;
      element.addEventListener('click', () => handler(args));
    }
  });
}

initializeEventListeners();
