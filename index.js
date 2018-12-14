(() => {
  let navTrigger = document.querySelector('.nav-trigger');
  let navMenu = document.querySelector('.nav-list');

  let openNav = () => {
    if (navMenu.classList.contains('slideInDown')) {
      navMenu.classList.add('slideOutUp');
      navMenu.classList.remove('slideInDown');
    } else {
      navMenu.classList.remove('slideOutUp');
      navMenu.classList.add('slideInDown');
    }
  };

  navTrigger.addEventListener('click', openNav);
})();
