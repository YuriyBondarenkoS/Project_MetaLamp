import './checkbox_buttons.scss';

const checkboxBtnRectangleSmoke = document.querySelector('#checkbox_buttons__rectangle_smoke'),
    checkboxBtnRectanglePets = document.querySelector('#checkbox_buttons__rectangle_pets'),
    checkboxBtnRectangleGuests = document.querySelector('#checkbox_buttons__rectangle_guests'),
    checkboxBtnPathSmoke1 = document.querySelector('#checkbox_buttons__path_smoke1'),
    checkboxBtnPathSmoke2 = document.querySelector('#checkbox_buttons__path_smoke2'),
    checkboxBtnPathPets1 = document.querySelector('#checkbox_buttons__path_pets1'),
    checkboxBtnPathPets2 = document.querySelector('#checkbox_buttons__path_pets2'),
    checkboxBtnPathGuests1 = document.querySelector('#checkbox_buttons__path_guests1'),
    checkboxBtnPathGuests2 = document.querySelector('#checkbox_buttons__path_guests2');

function checkboxButtons(btnCheckbox, path1Checkbox, path2Checkbox) {
    btnCheckbox.classList.toggle('checkbox_buttons__rectangle-off');
    btnCheckbox.classList.toggle('checkbox_buttons__rectangle-on');
    path1Checkbox.classList.toggle('checkbox_buttons__path_off');
    path2Checkbox.classList.toggle('checkbox_buttons__path_off');
}

checkboxBtnRectangleSmoke.addEventListener('click', () => {
    checkboxButtons(checkboxBtnRectangleSmoke, checkboxBtnPathSmoke1, checkboxBtnPathSmoke2);
});

checkboxBtnRectanglePets.addEventListener('click', () => {
    checkboxButtons(checkboxBtnRectanglePets, checkboxBtnPathPets1, checkboxBtnPathPets2);
});

checkboxBtnRectangleGuests.addEventListener('click', () => {
    checkboxButtons(checkboxBtnRectangleGuests, checkboxBtnPathGuests1, checkboxBtnPathGuests2);
});