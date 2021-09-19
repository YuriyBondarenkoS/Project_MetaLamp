import './checkbox_buttons.scss';

const checkboxBtnRectangleSmoke = document.querySelector('#checkbox_buttons__rectangle_smoke'),
    checkboxBtnRectanglePets = document.querySelector('#checkbox_buttons__rectangle_pets'),
    checkboxBtnRectangleGuests = document.querySelector('#checkbox_buttons__rectangle_guests'),
    checkboxBtnSvgSmoke = document.querySelector('#checkbox_buttons__svg_smoke'),
    checkboxBtnSvgPets = document.querySelector('#checkbox_buttons__svg_pets'),
    checkboxBtnSvgGuests = document.querySelector('#checkbox_buttons__svg_guests');

function checkboxButtons(btnCheckbox, svgCheckbox) {
    btnCheckbox.classList.toggle('checkbox_buttons__rectangle-off');
    btnCheckbox.classList.toggle('checkbox_buttons__rectangle-on');
    // svgCheckbox.classList.toggle('checkbox_buttons__svg-off');
    // svgCheckbox.classList.toggle('checkbox_buttons__svg-on');
}

checkboxBtnRectangleSmoke.addEventListener('click', () => {
    checkboxButtons(checkboxBtnRectangleSmoke, checkboxBtnSvgSmoke);
});

checkboxBtnRectanglePets.addEventListener('click', () => {
    checkboxButtons(checkboxBtnRectanglePets, checkboxBtnSvgPets);
});

checkboxBtnRectangleGuests.addEventListener('click', () => {
    checkboxButtons(checkboxBtnRectangleGuests, checkboxBtnSvgGuests);
});