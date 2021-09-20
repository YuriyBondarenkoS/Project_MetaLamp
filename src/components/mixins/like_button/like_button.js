import './like_button.scss';

const likeBtn = document.querySelector('#like_button__button'),
    likeSvg = document.querySelector('#like_button__svg'),
    likeCounter = document.querySelector('#like_button__counter');

let likeClick = 0;

likeBtn.addEventListener('click', () => {
    likeClick += 1;
    document.getElementById("like_button__counter").innerHTML = likeClick;
    likeBtn.classList.toggle('like_button__button-off');
    likeSvg.classList.toggle('like_button__svg-off');
    likeCounter.classList.toggle('like_button__counter-off');
});
