import './dropdown_facilities.scss';

const clickBtnDropdown = document.querySelector('.dropdown_facilities__form_btn'),
    dropdownMenu = document.querySelector('.dropdown_facilities__menu'),
    formDropdown = document.querySelector('.dropdown_facilities__form_dropdown'),
    formBtnSvg = document.querySelector('.dropdown_facilities__form_dropdown_svg'),
    adultsGuestesBtnPlus = document.querySelector('.dropdown_facilities__adults-plus'),
    childGuestesBtnPlus = document.querySelector('.dropdown_facilities__cildren-plus'),
    babyGuestesBtnPlus = document.querySelector('.dropdown_facilities__baby-plus'),
    adultsGuestesBtnMinus = document.querySelector('.dropdown_facilities__adults-minus'),
    childGuestesBtnMinus = document.querySelector('.dropdown_facilities__children-minus'),
    babyGuestesBtnMinus = document.querySelector('.dropdown_facilities__baby-minus'),
    adultsGuestesNumber = document.querySelector('.dropdown_facilities__number-adults'),
    childGuestesNumber = document.querySelector('.dropdown_facilities__number-children'),
    babyGuestesNumber = document.querySelector('.dropdown_facilities__number-baby'),
    adultsBtnMinusSvg = document.querySelector('.dropdown_facilities__adults-minus-svg'),
    childBtnMinusSvg = document.querySelector('.dropdown_facilities__children-minus-svg'),
    babyBtnMinusSvg = document.querySelector('.dropdown_facilities__baby-minus-svg'),
    formInputDropdown = document.querySelector('.dropdown_facilities__form_input_dropdown'),
    dropdownFormClear = document.querySelector('.dropdown_facilities__clear');

let adultsNumber = 0;
let childNumber = 0;
let babyNumber = 0;

clickBtnDropdown.addEventListener('click', (e) => {
    dropdownMenu.classList.remove('is-hidden');
    formDropdown.classList.remove('dropdown_facilities__form_dropdown');
    formDropdown.classList.add('dropdown_facilities__form_dropdown_click');
    formBtnSvg.classList.add('dropdown_facilities__form_dropdown_svg_click');
    formBtnSvg.classList.remove('dropdown_facilities__form_dropdown_svg');
});

window.addEventListener('click', (e) => {
    if (e.target.closest('.dropdown_facilities__apply')) {
        dropdownMenu.classList.add('is-hidden');
        formDropdown.classList.remove('dropdown_facilities__form_dropdown_click');
        formDropdown.classList.add('dropdown_facilities__form_dropdown');
        formBtnSvg.classList.remove('dropdown_facilities__form_dropdown_svg_click');
        formBtnSvg.classList.add('dropdown_facilities__form_dropdown_svg');
    } else if (!e.target.closest('.dropdown_facilities__menu') && !e.target.closest('.dropdown_facilities__form_btn') && !e.target.closest('.dropdown_facilities__form_input_dropdown')) {
        dropdownMenu.classList.add('is-hidden');
        formDropdown.classList.remove('dropdown_facilities__form_dropdown_click');
        formDropdown.classList.add('dropdown_facilities__form_dropdown');
        formBtnSvg.classList.remove('dropdown_facilities__form_dropdown_svg_click');
        formBtnSvg.classList.add('dropdown_facilities__form_dropdown_svg');
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
    let bedroom, bed, bathroom, comma1, comma2;
    if (allGuests > 0) {
        dropdownFormClear.classList.add('visually-visible');
        dropdownFormClear.classList.remove('visually-hidden');
        if (adultsNumber > 0) {
            bedroom = `${adultsNumber} ${sklonenie(adultsNumber, ['спальня', 'спальни', 'спальней'])}`;
        } else {
            bedroom = '';
        }
        if (childNumber > 0) {
            bed = `${childNumber} ${sklonenie(childNumber, ['кровать', 'кровати', 'кроватей'])}`;
        } else {
            bed = '';
        }
        if (babyNumber > 0) {
            bathroom = `${babyNumber} ${sklonenie(babyNumber, ['ванная комната', 'ванные комнаты', 'ванных комнат'])}`;
        } else {
            bathroom = '';
        }
        if ((adultsNumber > 0 && childNumber > 0) || (adultsNumber > 0 && babyNumber > 0)) {
            comma1 = ', ';
        } else {
            comma1 = '';
        }
        if (childNumber > 0 && babyNumber > 0) {
            comma2 = ', ';
        } else {
            comma2 = '';
        }
        formInputDropdown.placeholder = `${bedroom}${comma1}${bed}${comma2}${bathroom}`;
    } else {
        formInputDropdown.placeholder = `Сколько спален`;
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
    adultsNumber = 0;
    childNumber = 0;
    babyNumber = 0;
});