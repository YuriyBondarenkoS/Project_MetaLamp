import './dropdown.scss';

const clickGuests = document.querySelector('.dropdown-toggle');

clickGuests.addEventListener('click', (e) => {
    e.target.classList.add('.is-show');
});