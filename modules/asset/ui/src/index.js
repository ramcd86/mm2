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

    if (document.getElementById('header') && document.getElementById('logo')) {
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

  const handleGalleryGeneration = () => {
    if (document.querySelectorAll('.custom-gallery-widget').length > 0) {
      document.querySelectorAll('.custom-gallery-widget').forEach((gallery, index) => {
        const wrapper = document.querySelectorAll('.custom-gallery-widget__wrapper')[index];
        const prev = document.querySelectorAll('#prev')[index];
        const next = document.querySelectorAll('#next')[index];
        for (let i = 0; i < gallery.getElementsByTagName('img').length; i++) {
          const imageContainer = document.createElement('div');
          imageContainer.style.backgroundImage = `url('${gallery.getElementsByTagName('img')[i].currentSrc}')`;
          imageContainer.classList.add('custom-gallery-widget__slide');
          wrapper.appendChild(imageContainer);
        }
        prev.addEventListener('click', () => {
          wrapper.scrollLeft -= 270;
        });
        next.addEventListener('click', () => {
          wrapper.scrollLeft += 270;
          console.log('?');
        });
      });
    }
  };

  const handleImagesForLightBox = () => {
    const imageContainer = document.querySelector('.image-container');
    const imageClickFunction = (imageHtmlString) => {
      console.log(imageHtmlString);
    };
    document.querySelectorAll('.custom-image-widget').forEach(widgets => {

      const widgetImages = widgets.getElementsByTagName('img');

      console.log(widgetImages);
      for (let i = 0; i < widgetImages.length; i++) {
        widgetImages[i].addEventListener('click', () => imageClickFunction(widgetImages[i]));
        // console.log(widgetImages[i]);
        //   imageContainer.style.display = 'block';
        //   imageContainer.innerHTML = `
        //     <div class="image-container__wrapper">
        //         <img src="${widgetImages[i].currentSrc}">
        //     </div>
        //     <button class="image-container__close">Zurückweisen</button>
        // `;
        //   document.querySelector('.image-container__close').addEventListener('click', () => {
        //     imageContainer.innerHTML = '';
        //     imageContainer.style.display = 'none';
        //   });
        // });

      }
    });
  };

  handlePageStyling();
  handleSubnavLinkHighlighting();
  handleGalleryGeneration();
  handleImagesForLightBox();
};
