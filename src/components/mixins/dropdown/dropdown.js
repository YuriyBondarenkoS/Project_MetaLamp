import './dropdown.scss';

const clickBtnDropdown = document.querySelector('.form__btn'),
    dropdownMenu = document.querySelector('.dropdown__menu'),
    formDropdown = document.querySelector('.form__dropdown'),
    formBtnSvg = document.querySelector('.form__dropdown-svg'),
    adultsGuestesBtnPlus = document.querySelector('.dropdown__adults-plus'),
    childGuestesBtnPlus = document.querySelector('.dropdown__cildren-plus'),
    babyGuestesBtnPlus = document.querySelector('.dropdown__baby-plus'),
    adultsGuestesBtnMinus = document.querySelector('.dropdown__adults-minus'),
    childGuestesBtnMinus = document.querySelector('.dropdown__children-minus'),
    babyGuestesBtnMinus = document.querySelector('.dropdown__baby-minus'),
    adultsGuestesNumber = document.querySelector('.number-adults'),
    childGuestesNumber = document.querySelector('.number-children'),
    babyGuestesNumber = document.querySelector('.number-baby'),
    adultsBtnMinusSvg = document.querySelector('.adults-minus-svg'),
    childBtnMinusSvg = document.querySelector('.children-minus-svg'),
    babyBtnMinusSvg = document.querySelector('.baby-minus-svg'),
    formInputDropdown = document.querySelector('.form__input_dropdown'),
    dropdownFormClear = document.querySelector('.dropdown__clear');

let adultsNumber = 0;
let childNumber = 0;
let babyNumber = 0;

clickBtnDropdown.addEventListener('click', (e) => {
    dropdownMenu.classList.remove('is-hidden');
    formDropdown.classList.remove('form__dropdown');
    formDropdown.classList.add('form__dropdown_click');
    formBtnSvg.classList.add('form__dropdown-svg-click');
    formBtnSvg.classList.remove('form__dropdown-svg');
});

window.addEventListener('click', (e) => {
    if (e.target.closest('.dropdown__apply')) {
        dropdownMenu.classList.add('is-hidden');
        formDropdown.classList.remove('form__dropdown_click');
        formDropdown.classList.add('form__dropdown');
        formBtnSvg.classList.remove('form__dropdown-svg-click');
        formBtnSvg.classList.add('form__dropdown-svg');
    } else if (!e.target.closest('.dropdown__menu') && !e.target.closest('.form__btn') && !e.target.closest('.form__input_dropdown')) {
        dropdownMenu.classList.add('is-hidden');
        formDropdown.classList.remove('form__dropdown_click');
        formDropdown.classList.add('form__dropdown');
        formBtnSvg.classList.remove('form__dropdown-svg-click');
        formBtnSvg.classList.add('form__dropdown-svg');
    }  
});

const sklonenie = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

function addGuest(Num, recordNum, colorBtn) {
    recordNum.innerHTML = Num;
    if (Num > 0) {
        colorBtn.style.opacity = 1;
    }
    numGuestsAll();
}

function removeGuest(Num, recordNum, colorBtn) {
    recordNum.innerHTML = Num;
    if (Num == 0) {
        colorBtn.style.opacity = 0.5;
    }
    numGuestsAll();
}

function numGuestsAll() {
    let allGuests = adultsNumber + childNumber + babyNumber;
    if (allGuests > 0) {
        dropdownFormClear.classList.add('visually-visible');
        dropdownFormClear.classList.remove('visually-hidden');
        formInputDropdown.placeholder = `${allGuests} ${sklonenie(allGuests, ['гость', 'гостя', 'гостей'])}`;
    } else {
        formInputDropdown.placeholder = `Сколько гостей`;
        dropdownFormClear.classList.remove('visually-visible');
        dropdownFormClear.classList.add('visually-hidden');
    }
}

adultsGuestesBtnPlus.addEventListener('click', () => {
    adultsNumber += 1;
    addGuest(adultsNumber, adultsGuestesNumber, adultsBtnMinusSvg);
});

childGuestesBtnPlus.addEventListener('click', () => {
    childNumber += 1;
    addGuest(childNumber, childGuestesNumber, childBtnMinusSvg);
});

babyGuestesBtnPlus.addEventListener('click', () => {
    babyNumber += 1;
    addGuest(babyNumber, babyGuestesNumber, babyBtnMinusSvg);
});

adultsGuestesBtnMinus.addEventListener('click', () => {
    if (adultsNumber > 0) {
        adultsNumber -= 1;
        removeGuest(adultsNumber, adultsGuestesNumber, adultsBtnMinusSvg);
    }
});

childGuestesBtnMinus.addEventListener('click', () => {
    if (childNumber > 0) {
        childNumber -= 1;
        removeGuest(childNumber, childGuestesNumber, childBtnMinusSvg);
    }
});

babyGuestesBtnMinus.addEventListener('click', () => {
    if (babyNumber > 0) {
        babyNumber -= 1;
        removeGuest(babyNumber, babyGuestesNumber, babyBtnMinusSvg);
    }
});

dropdownFormClear.addEventListener('click', () => {
    formInputDropdown.placeholder = `Сколько гостей`;
    adultsBtnMinusSvg.style.opacity = 0.5;
    childBtnMinusSvg.style.opacity = 0.5;
    babyBtnMinusSvg.style.opacity = 0.5;
    adultsGuestesNumber.innerHTML = 0;
    childGuestesNumber.innerHTML = 0;
    babyGuestesNumber.innerHTML = 0;
    dropdownFormClear.classList.remove('visually-visible');
    dropdownFormClear.classList.add('visually-hidden');
    guestNumber = 0;
});