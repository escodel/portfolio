(() => {
  let navTrigger = document.querySelector('.nav-trigger');
  let navMenu = document.querySelector('.nav-list');
  let content = document.querySelector('main');
  let aboutSection = document.querySelector('.about-section');
  let about = document.querySelector('.about');
  let projectsSection = document.querySelector('.projects-section');
  let projects = document.querySelector('.projects');

  let isInViewPort = elem => {
    var bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

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
  content.addEventListener(
    'scroll',
    () => {
      if (isInViewPort(aboutSection)) {
        about.classList.add('animated', 'slideInRight', 'slow');
      }
      if (isInViewPort(projectsSection)) {
        projects.classList.add('animated', 'slideInLeft', 'slow');
      }
    },
    false
  );
})();
