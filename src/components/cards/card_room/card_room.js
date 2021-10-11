import './card_room.scss';

const roomSliderItem = document.querySelectorAll('.card_room__slider_item'),
    roomBtnsBack = document.querySelector('.card_room__btns_back'),
    roomBtnsforward = document.querySelector('.card_room__btns_forward'),
    roomDots = document.querySelectorAll('.card_room__controls label');
let roomSliderIndex = 1;

showSliderRoom(roomSliderIndex);

function showSliderRoom(n) {
    if (n > roomSliderItem.length) {
        roomSliderIndex = 1;
    }

    if (n < 1) {
        roomSliderIndex = roomSliderItem.length;
    }

    roomSliderItem.forEach(item => item.style.display = 'none');
    roomDots.forEach(item => item.classList.remove('card_room__dots--active'));

    roomSliderItem[roomSliderIndex - 1].style.display = 'block';
    roomDots[roomSliderIndex - 1].classList.add('card_room__dots--active');
}

function plusRoomSlider(n) {
    showSliderRoom(roomSliderIndex += n);
}

roomBtnsBack.addEventListener('click', () => {
    plusRoomSlider(-1);
});

roomBtnsforward.addEventListener('click', () => {
    plusRoomSlider(1);
});