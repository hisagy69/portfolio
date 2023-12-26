document.addEventListener('DOMContentLoaded', () => {
  const headerBurger = document.querySelector('.header__burger');
  const headerMenu = document.querySelector('.header__menu');
  const body = document.querySelector('body');

  const headerBurgerHandler = () => {
    headerBurger.classList.toggle('header__burger_active');
    headerMenu.classList.toggle('header__menu_active');
    body.classList.toggle('lock');
  };
  const headerMenuHandler = (e) => {
    if (e.target.matches('.header__link') && headerMenu.classList.contains('header__menu_active')) {
      headerBurger.classList.remove('header__burger_active');
      headerMenu.classList.remove('header__menu_active');
      body.classList.remove('lock');
    }
  };
  headerBurger.addEventListener('click', headerBurgerHandler);
  headerMenu.addEventListener('click', headerMenuHandler);
  
  
  const modalAdd = () => {
    const modal = document.createElement('div');
    modal.classList.add('modal-call');
    modal.innerHTML = `
      <div class="modal-call__inner">
        <div class="modal-call__close"><span></span></div>
        <form class="modal-call__form">
          <input type="text" name="email" placeholder="Email Address" class="modal-call__input modal-call__input_email"/>
          <input type="text" name="message" placeholder="message" class="modal-call__input modal-call__input_message"/>
          <button class="modal-call__button">Subscribe</button>
        </form>
      </div>`;
    body.appendChild(modal);

    const modalCallHandler = (e) => {
      if (e.target.matches('.button-call') || e.target.matches('.modal-call__close')) {
        modal.classList.toggle('modal-call_active');
        body.classList.toggle('lock');
        return;
      }
      if (modal.classList.contains('modal-call_active') && !e.target.closest('.modal-call__inner')) {
        modal.classList.remove('modal-call_active');
        body.classList.remove('lock');
      }
    };
    document.addEventListener('click', modalCallHandler);
  };
  
  modalAdd();

  const moveAnimate = (position) => {
    let n = document.documentElement.scrollTop;
    let key = null;
    const animateShow = () => {
      if (document.documentElement.scrollTop < position) {
        n += 100;
      }
      document.documentElement.scrollTop = n;
      if (n >= position) {
        document.documentElement.scrollTop = position;
        cancelAnimationFrame(key);
        return;
      }
      key = requestAnimationFrame(animateShow);
    };
    key = requestAnimationFrame(animateShow);
  };

  const menuItemHandler = (e) => {
    if (e.target.matches('.header__link') && document.documentElement.offsetWidth > 992) {
      const section = document.querySelector(e.target.hash);
      const header = document.querySelector('.header');
      const position = section.offsetTop - header.offsetHeight;
      e.preventDefault();
      moveAnimate(position);
    }
  };
  headerMenu.addEventListener('click', menuItemHandler);
});