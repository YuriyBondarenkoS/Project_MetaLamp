import './toggle_btn.scss';

const toggleBtn = document.querySelector('.toggle__button');


toggleBtn.addEventListener('click', (e) => {
    e.target.classList.toggle('toggle__button-off');
});
