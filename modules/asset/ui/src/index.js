export default () => {
  const handlePageStyling = () => {
    const urlSegments = window.location.pathname.split('/');
    const pageBase = document.getElementById('pageBase');
    if (pageBase && urlSegments) {
      if (urlSegments[1] === '') {
        pageBase.classList.add('home');
      } else {
        pageBase.classList.add(`${urlSegments[1]}`);
      }
    }

    if (window.location.pathname === '/') {
      document.getElementById('header').classList.remove('mm-index__header--mod');
      document.getElementById('logo').classList.remove('mm-index__logo--mod');
      document.getElementById('header').classList.add('mm-index__header');
      document.getElementById('logo').classList.add('mm-index__logo');
    } else {
      document.getElementById('header').classList.add('mm-index__header--mod');
      document.getElementById('logo').classList.add('mm-index__logo--mod');
      document.getElementById('header').classList.remove('mm-index__header');
      document.getElementById('logo').classList.remove('mm-index__logo');
    }

  };

  const handleSubnavLinkHighlighting = () => {
    const subNavLinks = document.querySelectorAll('.subnav-items');
    if (subNavLinks && subNavLinks.length > 0) {
      subNavLinks.forEach((navLink) => {
        console.log(navLink.href);
        if (navLink.href === window.location.href) {
          navLink.classList.add('selected-subnav-item');
        }
      });
    }
  };

  handlePageStyling();
  handleSubnavLinkHighlighting();
};
