/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./components/button/button.js":
/*!*************************************!*\
  !*** ./components/button/button.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./components/button/button.scss");


/***/ }),

/***/ "./components/layout/layout_form_element/layout.js":
/*!*********************************************************!*\
  !*** ./components/layout/layout_form_element/layout.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.scss */ "./components/layout/layout_form_element/layout.scss");


/***/ }),

/***/ "./components/mixins/btn_additional/btn_additional.js":
/*!************************************************************!*\
  !*** ./components/mixins/btn_additional/btn_additional.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _btn_additional_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btn_additional.scss */ "./components/mixins/btn_additional/btn_additional.scss");


/***/ }),

/***/ "./components/mixins/button/button.js":
/*!********************************************!*\
  !*** ./components/mixins/button/button.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./components/mixins/button/button.scss");


/***/ }),

/***/ "./components/mixins/checkbox_buttons/checkbox_buttons.js":
/*!****************************************************************!*\
  !*** ./components/mixins/checkbox_buttons/checkbox_buttons.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox_buttons_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox_buttons.scss */ "./components/mixins/checkbox_buttons/checkbox_buttons.scss");

var checkboxBtnRectangleSmoke = document.querySelector('#checkbox_buttons__rectangle_smoke'),
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

checkboxBtnRectangleSmoke.addEventListener('click', function () {
  checkboxButtons(checkboxBtnRectangleSmoke, checkboxBtnPathSmoke1, checkboxBtnPathSmoke2);
});
checkboxBtnRectanglePets.addEventListener('click', function () {
  checkboxButtons(checkboxBtnRectanglePets, checkboxBtnPathPets1, checkboxBtnPathPets2);
});
checkboxBtnRectangleGuests.addEventListener('click', function () {
  checkboxButtons(checkboxBtnRectangleGuests, checkboxBtnPathGuests1, checkboxBtnPathGuests2);
});

/***/ }),

/***/ "./components/mixins/checkbox_list/checkbox_list.js":
/*!**********************************************************!*\
  !*** ./components/mixins/checkbox_list/checkbox_list.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox_list_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox_list.scss */ "./components/mixins/checkbox_list/checkbox_list.scss");

var checkboxBtnRectangleBreakfast = document.querySelector('#checkbox_list__rectangle_breakfast'),
    checkboxBtnRectangleDesk = document.querySelector('#checkbox_list__rectangle_desk'),
    checkboxBtnRectangleChair = document.querySelector('#checkbox_list__rectangle_chair'),
    checkboxBtnRectangleCrib = document.querySelector('#checkbox_list__rectangle_crib'),
    checkboxBtnRectangleTelevision = document.querySelector('#checkbox_list__rectangle_television'),
    checkboxBtnRectangleShampoo = document.querySelector('#checkbox_list__rectangle_shampoo'),
    checkboxBtnPathBreakfast1 = document.querySelector('#checkbox_list__path_breakfast1'),
    checkboxBtnPathBreakfast2 = document.querySelector('#checkbox_list__path_breakfast2'),
    checkboxBtnPathDesk1 = document.querySelector('#checkbox_list__path_desk1'),
    checkboxBtnPathDesk2 = document.querySelector('#checkbox_list__path_desk2'),
    checkboxBtnPathChair1 = document.querySelector('#checkbox_list__path_chair1'),
    checkboxBtnPathChair2 = document.querySelector('#checkbox_list__path_chair2'),
    checkboxBtnPathCrib1 = document.querySelector('#checkbox_list__path_crib1'),
    checkboxBtnPathCrib2 = document.querySelector('#checkbox_list__path_crib2'),
    checkboxBtnPathTelevision1 = document.querySelector('#checkbox_list__path_television1'),
    checkboxBtnPathTelevision2 = document.querySelector('#checkbox_list__path_television2'),
    checkboxBtnPathShampoo1 = document.querySelector('#checkbox_list__path_shampoo1'),
    checkboxBtnPathShampoo2 = document.querySelector('#checkbox_list__path_shampoo2'),
    checkboxListBtnPath = document.querySelector('.checkbox_list__btn_path'),
    checkboxListBtn = document.querySelector('#checkbox_list_btn'),
    checkboxListMenu = document.querySelector('.checkbox_list__menu');

function replacementAtbBtn(checkboxListMenu) {
  if (checkboxListMenu.classList.contains('is-hidden')) {
    checkboxListBtnPath.setAttribute("d", "M10.5938 0.578125L12 1.98438L6 7.98438L0 1.98438L1.40625 0.578125L6 5.17188L10.5938 0.578125Z");
  } else {
    checkboxListBtnPath.setAttribute("d", "M1.40625 7.42187L1.74709e-06 6.01562L6 0.0156231L12 6.01562L10.5938 7.42187L6 2.82812L1.40625 7.42187Z");
  }
}

function checkboxButtons(btnCheckbox, path1Checkbox, path2Checkbox) {
  btnCheckbox.classList.toggle('checkbox_lists__rectangle-off');
  btnCheckbox.classList.toggle('checkbox_list__rectangle-on');
  path1Checkbox.classList.toggle('checkbox_list__path-off');
  path2Checkbox.classList.toggle('checkbox_list__path-off');
}

checkboxListBtn.addEventListener('click', function () {
  checkboxListMenu.classList.toggle('is-hidden');
  replacementAtbBtn(checkboxListMenu);
});
checkboxBtnRectangleBreakfast.addEventListener('click', function () {
  checkboxButtons(checkboxBtnRectangleBreakfast, checkboxBtnPathBreakfast1, checkboxBtnPathBreakfast2);
});
checkboxBtnRectangleDesk.addEventListener('click', function () {
  checkboxButtons(checkboxBtnRectangleDesk, checkboxBtnPathDesk1, checkboxBtnPathDesk2);
});
checkboxBtnRectangleChair.addEventListener('click', function () {
  checkboxButtons(checkboxBtnRectangleChair, checkboxBtnPathChair1, checkboxBtnPathChair2);
});
checkboxBtnRectangleCrib.addEventListener('click', function () {
  checkboxButtons(checkboxBtnRectangleCrib, checkboxBtnPathCrib1, checkboxBtnPathCrib2);
});
checkboxBtnRectangleTelevision.addEventListener('click', function () {
  checkboxButtons(checkboxBtnRectangleTelevision, checkboxBtnPathTelevision1, checkboxBtnPathTelevision2);
});
checkboxBtnRectangleShampoo.addEventListener('click', function () {
  checkboxButtons(checkboxBtnRectangleShampoo, checkboxBtnPathShampoo1, checkboxBtnPathShampoo2);
});

/***/ }),

/***/ "./components/mixins/date_dropdown/date_dropdown.js":
/*!**********************************************************!*\
  !*** ./components/mixins/date_dropdown/date_dropdown.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_dropdown_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date_dropdown.scss */ "./components/mixins/date_dropdown/date_dropdown.scss");
/* harmony import */ var _node_modules_air_datepicker_dist_css_datepicker_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/air-datepicker/dist/css/datepicker.css */ "../node_modules/air-datepicker/dist/css/datepicker.css");
/* harmony import */ var air_datepicker_dist_js_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! air-datepicker/dist/js/datepicker */ "../node_modules/air-datepicker/dist/js/datepicker.js");
/* harmony import */ var air_datepicker_dist_js_datepicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(air_datepicker_dist_js_datepicker__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");



var myDatepickerPiev = $('#date_dropdown-datepicker').datepicker().data('datepicker'); // myDatepickerPiev.currentDate(new Date());

$('#date_dropdown-datepicker').datepicker({
  todayButton: true,
  clearButton: true,
  range: true,
  inline: true,
  onSelect: function onSelect(fd) {
    $("#date_dropdown-datepicker").val(fd.split("-")[0]);
    $("#date_dropdown-datepicker-next").val(fd.split("-")[1]);
  }
});
$('.datepicker--button[data-action="today"]').on('click', function () {
  myDatepickerPiev.hide();
});
$('#date_dropdown-datepicker-next').on('click', function () {
  myDatepickerPiev.show();
});
$('#date_dropdown-datepicker-next').on('focus', function () {
  myDatepickerPiev.show();
});
$('.date_dropdown__btn').on('click', function () {
  myDatepickerPiev.show();
});

/***/ }),

/***/ "./components/mixins/dropdown/dropdown.js":
/*!************************************************!*\
  !*** ./components/mixins/dropdown/dropdown.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.scss */ "./components/mixins/dropdown/dropdown.scss");

var clickBtnDropdown = document.querySelector('.form__btn'),
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
var adultsNumber = 0;
var childNumber = 0;
var babyNumber = 0;
clickBtnDropdown.addEventListener('click', function (e) {
  dropdownMenu.classList.remove('is-hidden');
  formDropdown.classList.remove('form__dropdown');
  formDropdown.classList.add('form__dropdown_click');
  formBtnSvg.classList.add('form__dropdown-svg-click');
  formBtnSvg.classList.remove('form__dropdown-svg');
});
window.addEventListener('click', function (e) {
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

var sklonenie = function sklonenie(number, txt) {
  var cases = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [2, 0, 1, 1, 1, 2];
  return txt[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
};

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
  var allGuests = adultsNumber + childNumber + babyNumber;

  if (allGuests > 0) {
    dropdownFormClear.classList.add('visually-visible');
    dropdownFormClear.classList.remove('visually-hidden');
    formInputDropdown.placeholder = "".concat(allGuests, " ").concat(sklonenie(allGuests, ['гость', 'гостя', 'гостей']));
  } else {
    formInputDropdown.placeholder = "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0433\u043E\u0441\u0442\u0435\u0439";
    dropdownFormClear.classList.remove('visually-visible');
    dropdownFormClear.classList.add('visually-hidden');
  }
}

adultsGuestesBtnPlus.addEventListener('click', function () {
  adultsNumber += 1;
  addGuest(adultsNumber, adultsGuestesNumber, adultsBtnMinusSvg);
});
childGuestesBtnPlus.addEventListener('click', function () {
  childNumber += 1;
  addGuest(childNumber, childGuestesNumber, childBtnMinusSvg);
});
babyGuestesBtnPlus.addEventListener('click', function () {
  babyNumber += 1;
  addGuest(babyNumber, babyGuestesNumber, babyBtnMinusSvg);
});
adultsGuestesBtnMinus.addEventListener('click', function () {
  if (adultsNumber > 0) {
    adultsNumber -= 1;
    removeGuest(adultsNumber, adultsGuestesNumber, adultsBtnMinusSvg);
  }
});
childGuestesBtnMinus.addEventListener('click', function () {
  if (childNumber > 0) {
    childNumber -= 1;
    removeGuest(childNumber, childGuestesNumber, childBtnMinusSvg);
  }
});
babyGuestesBtnMinus.addEventListener('click', function () {
  if (babyNumber > 0) {
    babyNumber -= 1;
    removeGuest(babyNumber, babyGuestesNumber, babyBtnMinusSvg);
  }
});
dropdownFormClear.addEventListener('click', function () {
  formInputDropdown.placeholder = "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0433\u043E\u0441\u0442\u0435\u0439";
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

/***/ }),

/***/ "./components/mixins/dropdown_facilities/dropdown_facilities.js":
/*!**********************************************************************!*\
  !*** ./components/mixins/dropdown_facilities/dropdown_facilities.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_facilities_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown_facilities.scss */ "./components/mixins/dropdown_facilities/dropdown_facilities.scss");

var clickBtnDropdown = document.querySelector('.dropdown_facilities__form_btn'),
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
var adultsNumber = 0;
var childNumber = 0;
var babyNumber = 0;
clickBtnDropdown.addEventListener('click', function (e) {
  dropdownMenu.classList.remove('is-hidden');
  formDropdown.classList.remove('dropdown_facilities__form_dropdown');
  formDropdown.classList.add('dropdown_facilities__form_dropdown_click');
  formBtnSvg.classList.add('dropdown_facilities__form_dropdown_svg_click');
  formBtnSvg.classList.remove('dropdown_facilities__form_dropdown_svg');
});
window.addEventListener('click', function (e) {
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

var sklonenie = function sklonenie(number, txt) {
  var cases = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [2, 0, 1, 1, 1, 2];
  return txt[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
};

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
  var allGuests = adultsNumber + childNumber + babyNumber;
  var bedroom, bed, bathroom, comma1, comma2;

  if (allGuests > 0) {
    dropdownFormClear.classList.add('visually-visible');
    dropdownFormClear.classList.remove('visually-hidden');

    if (adultsNumber > 0) {
      bedroom = "".concat(adultsNumber, " ").concat(sklonenie(adultsNumber, ['спальня', 'спальни', 'спальней']));
    } else {
      bedroom = '';
    }

    if (childNumber > 0) {
      bed = "".concat(childNumber, " ").concat(sklonenie(childNumber, ['кровать', 'кровати', 'кроватей']));
    } else {
      bed = '';
    }

    if (babyNumber > 0) {
      bathroom = "".concat(babyNumber, " ").concat(sklonenie(babyNumber, ['ванная комната', 'ванные комнаты', 'ванных комнат']));
    } else {
      bathroom = '';
    }

    if (adultsNumber > 0 && childNumber > 0 || adultsNumber > 0 && babyNumber > 0) {
      comma1 = ', ';
    } else {
      comma1 = '';
    }

    if (childNumber > 0 && babyNumber > 0) {
      comma2 = ', ';
    } else {
      comma2 = '';
    }

    formInputDropdown.placeholder = "".concat(bedroom).concat(comma1).concat(bed).concat(comma2).concat(bathroom);
  } else {
    formInputDropdown.placeholder = "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u043F\u0430\u043B\u0435\u043D";
    dropdownFormClear.classList.remove('visually-visible');
    dropdownFormClear.classList.add('visually-hidden');
  }
}

adultsGuestesBtnPlus.addEventListener('click', function () {
  adultsNumber += 1;
  addGuest(adultsNumber, adultsGuestesNumber, adultsBtnMinusSvg);
});
childGuestesBtnPlus.addEventListener('click', function () {
  childNumber += 1;
  addGuest(childNumber, childGuestesNumber, childBtnMinusSvg);
});
babyGuestesBtnPlus.addEventListener('click', function () {
  babyNumber += 1;
  addGuest(babyNumber, babyGuestesNumber, babyBtnMinusSvg);
});
adultsGuestesBtnMinus.addEventListener('click', function () {
  if (adultsNumber > 0) {
    adultsNumber -= 1;
    removeGuest(adultsNumber, adultsGuestesNumber, adultsBtnMinusSvg);
  }
});
childGuestesBtnMinus.addEventListener('click', function () {
  if (childNumber > 0) {
    childNumber -= 1;
    removeGuest(childNumber, childGuestesNumber, childBtnMinusSvg);
  }
});
babyGuestesBtnMinus.addEventListener('click', function () {
  if (babyNumber > 0) {
    babyNumber -= 1;
    removeGuest(babyNumber, babyGuestesNumber, babyBtnMinusSvg);
  }
});
dropdownFormClear.addEventListener('click', function () {
  formInputDropdown.placeholder = "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u043F\u0430\u043B\u0435\u043D";
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

/***/ }),

/***/ "./components/mixins/filter_date_dropdown/filter_date_dropdown.js":
/*!************************************************************************!*\
  !*** ./components/mixins/filter_date_dropdown/filter_date_dropdown.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_date_dropdown_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter_date_dropdown.scss */ "./components/mixins/filter_date_dropdown/filter_date_dropdown.scss");
/* harmony import */ var _node_modules_air_datepicker_dist_css_datepicker_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/air-datepicker/dist/css/datepicker.css */ "../node_modules/air-datepicker/dist/css/datepicker.css");
/* harmony import */ var air_datepicker_dist_js_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! air-datepicker/dist/js/datepicker */ "../node_modules/air-datepicker/dist/js/datepicker.js");
/* harmony import */ var air_datepicker_dist_js_datepicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(air_datepicker_dist_js_datepicker__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");



var myDatepickerPiev = $('#filter_date_dropdown-datepicker').datepicker().data('datepicker');
$('#filter_date_dropdown-datepicker').datepicker({
  todayButton: true,
  clearButton: true,
  range: true,
  dateFormat: "d M"
});
$('.datepicker--button[data-action="today"]').on('click', function () {
  myDatepickerPiev.hide();
});
$('.filter_date_dropdown__btn').on('click', function () {
  myDatepickerPiev.show();
});

/***/ }),

/***/ "./components/mixins/information_block/information_block.js":
/*!******************************************************************!*\
  !*** ./components/mixins/information_block/information_block.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _information_block_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./information_block.scss */ "./components/mixins/information_block/information_block.scss");


/***/ }),

/***/ "./components/mixins/like_button/like_button.js":
/*!******************************************************!*\
  !*** ./components/mixins/like_button/like_button.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _like_button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./like_button.scss */ "./components/mixins/like_button/like_button.scss");

var likeBtn = document.querySelector('#like_button__button'),
    likeSvg = document.querySelector('#like_button__svg'),
    likeCounter = document.querySelector('#like_button__counter');
var likeClick = 0;
likeBtn.addEventListener('click', function () {
  likeClick += 1;
  document.getElementById("like_button__counter").innerHTML = likeClick;
  likeBtn.classList.toggle('like_button__button-off');
  likeSvg.classList.toggle('like_button__svg-off');
  likeCounter.classList.toggle('like_button__counter-off');
});

/***/ }),

/***/ "./components/mixins/link_main/link_main.js":
/*!**************************************************!*\
  !*** ./components/mixins/link_main/link_main.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _link_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link_main.scss */ "./components/mixins/link_main/link_main.scss");


/***/ }),

/***/ "./components/mixins/masked_text_field/masked_text_field.js":
/*!******************************************************************!*\
  !*** ./components/mixins/masked_text_field/masked_text_field.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _masked_text_field_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./masked_text_field.scss */ "./components/mixins/masked_text_field/masked_text_field.scss");
/* harmony import */ var _node_modules_air_datepicker_dist_css_datepicker_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/air-datepicker/dist/css/datepicker.css */ "../node_modules/air-datepicker/dist/css/datepicker.css");
/* harmony import */ var _node_modules_air_datepicker_dist_js_datepicker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/air-datepicker/dist/js/datepicker.js */ "../node_modules/air-datepicker/dist/js/datepicker.js");
/* harmony import */ var _node_modules_air_datepicker_dist_js_datepicker_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_air_datepicker_dist_js_datepicker_js__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");



var myDatepicker = $('#my-datepicker').datepicker().data('datepicker');
$('#my-datepicker').datepicker({
  todayButton: true,
  clearButton: true
});
$('.datepicker--button[data-action="today"]').on('click', function () {
  myDatepicker.hide();
}); // $('#my-datepicker').datepicker({clearButton: true});
// $( function() {
//     $("#my-datepicker").datepicker(
//         {inline: true}
//     );
//   } );
// $("#my-datepicker").datepicker({
//    inline: true
// });
// console.log($( "#my-dsatepicker" ));

/***/ }),

/***/ "./components/mixins/pagination/pagination.js":
/*!****************************************************!*\
  !*** ./components/mixins/pagination/pagination.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.scss */ "./components/mixins/pagination/pagination.scss");

var paginationBtn1 = document.querySelector('#pagination_btn_1'),
    paginationBtn2 = document.querySelector('#pagination_btn_2'),
    paginationBtn3 = document.querySelector('#pagination_btn_3'),
    paginationBtn4 = document.querySelector('#pagination_btn_4'),
    paginationBtn5 = document.querySelector('#pagination_btn_5'),
    paginationBtnLast = document.querySelector('#pagination_btn_last'),
    paginationSignature = document.querySelector('.pagination__signature'),
    paginationBtnAll = document.querySelectorAll('.pagination__item');

function signaturePaginationNum(clickBtn1) {
  console.log(clickBtn1);
  paginationSignature.innerHTML = "".concat((clickBtn1 - 1) * 12 + 1, " \u2013 ").concat(clickBtn1 * 12, " \u0438\u0437 100+ \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u0430\u0440\u0435\u043D\u0434\u044B");
}

function clickLastPage(clickBtn1, clickBtn5, nowClickBtn) {
  if (clickBtn1 === clickBtn5 - 4) {
    paginationBtnAll.forEach(function (element) {
      element.classList.remove('pagination__item_start');
    });
    nowClickBtn.classList.add('pagination__item_start');
  }
}

paginationBtn1.addEventListener('click', function (e) {
  var clickBtn1 = Number(paginationBtn1.innerHTML),
      clickBtn5 = Number(paginationBtn5.innerHTML),
      Btn1OneClick = e.target.innerHTML;
  clickLastPage(clickBtn1, clickBtn5, paginationBtn1);
  signaturePaginationNum(Btn1OneClick);
});
paginationBtn2.addEventListener('click', function (e) {
  console.log(e.target.innerHTML);
  var clickBtn1 = Number(paginationBtn1.innerHTML),
      clickBtn2 = Number(paginationBtn2.innerHTML),
      clickBtn5 = Number(paginationBtn5.innerHTML),
      Btn1OneClick = e.target.innerHTML;
  clickLastPage(clickBtn1, clickBtn5, paginationBtn2);

  if (clickBtn2 + 4 < clickBtn5) {
    paginationBtn1.innerHTML = clickBtn2;
    paginationBtn2.innerHTML = clickBtn2 + 1;
    paginationBtn3.innerHTML = clickBtn2 + 2;
  } else if (clickBtn2 + 4 === clickBtn5) {
    paginationBtn1.innerHTML = clickBtn2;
    paginationBtn2.innerHTML = clickBtn2 + 1;
    paginationBtn3.innerHTML = clickBtn2 + 2;
    paginationBtn4.innerHTML = clickBtn2 + 3;
  }

  signaturePaginationNum(Btn1OneClick);
});
paginationBtn3.addEventListener('click', function (e) {
  var clickBtn1 = Number(paginationBtn1.innerHTML),
      clickBtn3 = Number(paginationBtn3.innerHTML),
      clickBtn5 = Number(paginationBtn5.innerHTML),
      Btn1OneClick = e.target.innerHTML;
  clickLastPage(clickBtn1, clickBtn5, paginationBtn3);

  if (clickBtn3 + 4 < clickBtn5) {
    paginationBtn1.innerHTML = clickBtn3;
    paginationBtn2.innerHTML = clickBtn3 + 1;
    paginationBtn3.innerHTML = clickBtn3 + 2;
  } else if (clickBtn3 + 4 === clickBtn5) {
    paginationBtn1.innerHTML = clickBtn3;
    paginationBtn2.innerHTML = clickBtn3 + 1;
    paginationBtn3.innerHTML = clickBtn3 + 2;
    paginationBtn4.innerHTML = clickBtn3 + 3;
  }

  signaturePaginationNum(Btn1OneClick);
});
paginationBtn4.addEventListener('click', function (e) {
  var clickBtn1 = Number(paginationBtn1.innerHTML),
      clickBtn5 = Number(paginationBtn5.innerHTML),
      Btn1OneClick = e.target.innerHTML;
  clickLastPage(clickBtn1, clickBtn5, paginationBtn4);
  signaturePaginationNum(Btn1OneClick);
});
paginationBtn5.addEventListener('click', function (e) {
  var clickBtn1 = Number(paginationBtn1.innerHTML),
      clickBtn5 = Number(paginationBtn5.innerHTML),
      Btn1OneClick = e.target.innerHTML;
  clickLastPage(clickBtn1, clickBtn5, paginationBtn5);
  signaturePaginationNum(Btn1OneClick);
});
paginationBtnLast.addEventListener('click', function () {
  var clickBtn1 = Number(paginationBtn1.innerHTML),
      clickBtn5 = Number(paginationBtn5.innerHTML);
  paginationBtn1.innerHTML = clickBtn5 - 4;
  paginationBtn2.innerHTML = clickBtn5 - 3;
  paginationBtn3.innerHTML = clickBtn5 - 2;
  paginationBtn4.innerHTML = clickBtn5 - 1;
  signaturePaginationNum(paginationBtn1.innerHTML);
});

/***/ }),

/***/ "./components/mixins/radio_buttons/radio_buttons.js":
/*!**********************************************************!*\
  !*** ./components/mixins/radio_buttons/radio_buttons.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio_buttons_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio_buttons.scss */ "./components/mixins/radio_buttons/radio_buttons.scss");

var maleBtnBall = document.querySelector('#male_buttons__ball'),
    femaleBtnBall = document.querySelector('#female_buttons__ball'),
    maleBtnCircle = document.querySelector('#male_buttons__circle'),
    femaleBtnCircle = document.querySelector('#female_buttons__circle'),
    btnGenderMale = document.querySelector('.radio_buttons__btn_male'),
    btnGenderFemale = document.querySelector('.radio_buttons__btn_female');

function radioBtnGender() {
  // console.log(maleBtnBall.classList.toggle('radio_buttons__ball-off'));
  // console.log(femaleBtnBall.classList.toggle('radio_buttons__ball-off'));
  // console.log(maleBtnCircle.classList.toggle('radio_buttons__circle-off'));
  // console.log(femaleBtnCircle.classList.toggle('radio_buttons__circle-off'));
  maleBtnBall.classList.toggle('radio_buttons__ball-off');
  femaleBtnBall.classList.toggle('radio_buttons__ball-off');
  maleBtnCircle.classList.toggle('radio_buttons__circle-off');
  femaleBtnCircle.classList.toggle('radio_buttons__circle-off');
}

btnGenderMale.addEventListener('click', function () {
  radioBtnGender();
});
btnGenderFemale.addEventListener('click', function () {
  radioBtnGender();
});

/***/ }),

/***/ "./components/mixins/range_slider/range_slider.js":
/*!********************************************************!*\
  !*** ./components/mixins/range_slider/range_slider.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _range_slider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./range_slider.scss */ "./components/mixins/range_slider/range_slider.scss");
/* harmony import */ var _node_modules_ion_rangeslider_css_ion_rangeSlider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/ion-rangeslider/css/ion.rangeSlider.css */ "../node_modules/ion-rangeslider/css/ion.rangeSlider.css");
/* harmony import */ var ion_rangeslider_js_ion_rangeSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ion-rangeslider/js/ion.rangeSlider */ "../node_modules/ion-rangeslider/js/ion.rangeSlider.js");
/* harmony import */ var ion_rangeslider_js_ion_rangeSlider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ion_rangeslider_js_ion_rangeSlider__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");



$(".js-range-slider").ionRangeSlider({
  onChange: function onChange(data) {
    rangePrice(data.from, data.to);
  },
  onFinish: function onFinish(data) {
    rangePrice(data.from, data.to);
  }
});

function rangePrice(from, to) {
  var resultString = "".concat(from, "\u20BD - ").concat(to, "\u20BD");
  $("#range_slider__content").html(resultString);
}

/***/ }),

/***/ "./components/mixins/rate_button/rate_button.js":
/*!******************************************************!*\
  !*** ./components/mixins/rate_button/rate_button.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rate_button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rate_button.scss */ "./components/mixins/rate_button/rate_button.scss");

var rateBtn1 = document.querySelector("#rate_btn__1"),
    rateBtn2 = document.querySelector('#rate_btn__2'),
    rateBtn3 = document.querySelector('#rate_btn__3'),
    rateBtn4 = document.querySelector('#rate_btn__4'),
    rateBtn5 = document.querySelector('#rate_btn__5');
var star1ClickCounter = 0,
    star2ClickCounter = 0,
    star3ClickCounter = 0,
    star4ClickCounter = 0,
    star5ClickCounter = 0,
    arrRateBtn = [rateBtn1, rateBtn2, rateBtn3, rateBtn4, rateBtn5];

function starOn(idStar) {
  idStar.setAttribute("d", "M10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25Z");
}

function starOff(idStar) {
  if (idStar === rateBtn1 && star1ClickCounter === 0 || idStar === rateBtn2 && star2ClickCounter === 0 || idStar === rateBtn3 && star3ClickCounter === 0 || idStar === rateBtn4 && star4ClickCounter === 0 || idStar === rateBtn5 && star5ClickCounter === 0) {
    idStar.setAttribute("d", "M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z");
  }
}

function offClick() {
  star1ClickCounter = 0;
  star2ClickCounter = 0;
  star3ClickCounter = 0;
  star4ClickCounter = 0;
  star5ClickCounter = 0;
  starOffAll(5);
}

function starOffAll(numStar) {
  for (var i = 0; i < numStar; i++) {
    starOff(arrRateBtn[i]);
  }
}

function starOnAll(numStar) {
  for (var i = 0; i < numStar; i++) {
    starOn(arrRateBtn[i]);
  }
}

rateBtn1.addEventListener('click', function () {
  offClick();
  star1ClickCounter += 1;
  starOnAll(1);
});
rateBtn2.addEventListener('click', function () {
  offClick();
  star1ClickCounter += 1;
  star2ClickCounter += 1;
  starOnAll(2);
});
rateBtn3.addEventListener('click', function () {
  offClick();
  star1ClickCounter += 1;
  star2ClickCounter += 1;
  star3ClickCounter += 1;
  starOnAll(3);
});
rateBtn4.addEventListener('click', function () {
  offClick();
  star1ClickCounter += 1;
  star2ClickCounter += 1;
  star3ClickCounter += 1;
  star4ClickCounter += 1;
  starOnAll(4);
});
rateBtn5.addEventListener('click', function () {
  offClick();
  star1ClickCounter += 1;
  star2ClickCounter += 1;
  star3ClickCounter += 1;
  star4ClickCounter += 1;
  star5ClickCounter += 1;
  starOnAll(5);
});
rateBtn1.addEventListener('mouseenter', function () {
  starOnAll(1);
});
rateBtn2.addEventListener('mouseenter', function () {
  starOnAll(2);
});
rateBtn3.addEventListener('mouseenter', function () {
  starOnAll(3);
});
rateBtn4.addEventListener('mouseenter', function () {
  starOnAll(4);
});
rateBtn5.addEventListener('mouseenter', function () {
  starOnAll(5);
});
rateBtn1.addEventListener('mouseleave', function () {
  starOffAll(1);
});
rateBtn2.addEventListener('mouseleave', function () {
  starOffAll(2);
});
rateBtn3.addEventListener('mouseleave', function () {
  starOffAll(3);
});
rateBtn4.addEventListener('mouseleave', function () {
  starOffAll(4);
});
rateBtn5.addEventListener('mouseleave', function () {
  starOffAll(5);
});

/***/ }),

/***/ "./components/mixins/rich_chkbox_btn/rich_chkbox_btn.js":
/*!**************************************************************!*\
  !*** ./components/mixins/rich_chkbox_btn/rich_chkbox_btn.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rich_chkbox_btn_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rich_chkbox_btn.scss */ "./components/mixins/rich_chkbox_btn/rich_chkbox_btn.scss");

var checkboxBtnRectangleCorridor = document.querySelector('#rich_chkbox_btn__rectangle_corridor'),
    checkboxBtnRectangleInvalid = document.querySelector('#rich_chkbox_btns__rectangle_invalid'),
    checkboxBtnPathCorridor1 = document.querySelector('#rich_chkbox_btn__path_corridor1'),
    checkboxBtnPathCorridor2 = document.querySelector('#rich_chkbox_btn__path_corridor2'),
    checkboxBtnPathInvalid1 = document.querySelector('#rich_chkbox_btn__path_invalid1'),
    checkboxBtnPathInvalid2 = document.querySelector('#rich_chkbox_btn__path_invalid2');

function chkboxBtnRich(btnChkboxRich, path1ChkboxRich, path2ChkboxRich) {
  btnChkboxRich.classList.toggle('rich_chkbox_btn__rectangle_off');
  btnChkboxRich.classList.toggle('rich_chkbox_btn__rectangle_on');
  path1ChkboxRich.classList.toggle('rich_chkbox_btn__path_off');
  path2ChkboxRich.classList.toggle('rich_chkbox_btn__path_off');
}

checkboxBtnRectangleCorridor.addEventListener('click', function () {
  chkboxBtnRich(checkboxBtnRectangleCorridor, checkboxBtnPathCorridor1, checkboxBtnPathCorridor2);
});
checkboxBtnRectangleInvalid.addEventListener('click', function () {
  chkboxBtnRich(checkboxBtnRectangleInvalid, checkboxBtnPathInvalid1, checkboxBtnPathInvalid2);
});

/***/ }),

/***/ "./components/mixins/subscription_text_field/subscription_text_field.js":
/*!******************************************************************************!*\
  !*** ./components/mixins/subscription_text_field/subscription_text_field.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subscription_text_field_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscription_text_field.scss */ "./components/mixins/subscription_text_field/subscription_text_field.scss");

var subscriptInputFocus = document.querySelector('.subscription_text_field__input'),
    subscriptFormFocus = document.querySelector('.subscription_text_field__form');

subscriptInputFocus.onfocus = function () {
  return subscriptFormFocus.classList.add('focus-subscript-input');
};

subscriptInputFocus.onblur = function () {
  return subscriptFormFocus.classList.remove('focus-subscript-input');
};

/***/ }),

/***/ "./components/mixins/text_field/text_field.js":
/*!****************************************************!*\
  !*** ./components/mixins/text_field/text_field.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_field_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_field.scss */ "./components/mixins/text_field/text_field.scss");

var inputTextField = document.querySelector('.input_text_field'),
    // inputTextFieldFocus = document.querySelector('.input_text_field__focus'),
formTextField = document.querySelector('.form_text_field');

inputTextField.onfocus = function () {
  return formTextField.classList.add('focus_text_field');
};

inputTextField.onblur = function () {
  return formTextField.classList.remove('focus_text_field');
}; // inputTextField.addEventListener('focus', (e) => {
//     // console.log(e.target);
//     e.target.classList.toggle('focus_text_field__focus');
//     e.target.classList.toggle('focus_text_field');
// });
// inputTextField.addEventListener('blur', (e) => {
//     // console.log(e.target);
//     e.target.classList.toggle('focus_text_field__focus');
//     e.target.classList.toggle('focus_text_field');
// });

/***/ }),

/***/ "./components/mixins/toggle_btn/toggle_btn.js":
/*!****************************************************!*\
  !*** ./components/mixins/toggle_btn/toggle_btn.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle_btn_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle_btn.scss */ "./components/mixins/toggle_btn/toggle_btn.scss");

var toggleBtn = document.querySelector('.toggle__button');
toggleBtn.addEventListener('click', function (e) {
  e.target.classList.toggle('toggle__button-off');
});

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! air-datepicker */ "../node_modules/air-datepicker/src/js/air-datepicker.js");
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(air_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.pug */ "./index.pug");
/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_pug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _components_button_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/button/button.js */ "./components/button/button.js");
/* harmony import */ var _components_mixins_checkbox_buttons_checkbox_buttons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mixins/checkbox_buttons/checkbox_buttons.js */ "./components/mixins/checkbox_buttons/checkbox_buttons.js");
/* harmony import */ var _components_mixins_checkbox_list_checkbox_list_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mixins/checkbox_list/checkbox_list.js */ "./components/mixins/checkbox_list/checkbox_list.js");
/* harmony import */ var _components_mixins_radio_buttons_radio_buttons_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mixins/radio_buttons/radio_buttons.js */ "./components/mixins/radio_buttons/radio_buttons.js");
/* harmony import */ var _components_mixins_toggle_btn_toggle_btn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/mixins/toggle_btn/toggle_btn.js */ "./components/mixins/toggle_btn/toggle_btn.js");
/* harmony import */ var _components_mixins_like_button_like_button_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/mixins/like_button/like_button.js */ "./components/mixins/like_button/like_button.js");
/* harmony import */ var _components_mixins_rate_button_rate_button_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/mixins/rate_button/rate_button.js */ "./components/mixins/rate_button/rate_button.js");
/* harmony import */ var _components_mixins_button_button_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/mixins/button/button.js */ "./components/mixins/button/button.js");
/* harmony import */ var _components_mixins_btn_additional_btn_additional_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/mixins/btn_additional/btn_additional.js */ "./components/mixins/btn_additional/btn_additional.js");
/* harmony import */ var _components_mixins_link_main_link_main_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/mixins/link_main/link_main.js */ "./components/mixins/link_main/link_main.js");
/* harmony import */ var _components_mixins_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/mixins/pagination/pagination.js */ "./components/mixins/pagination/pagination.js");
/* harmony import */ var _components_mixins_range_slider_range_slider_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/mixins/range_slider/range_slider.js */ "./components/mixins/range_slider/range_slider.js");
/* harmony import */ var _components_mixins_rich_chkbox_btn_rich_chkbox_btn_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/mixins/rich_chkbox_btn/rich_chkbox_btn.js */ "./components/mixins/rich_chkbox_btn/rich_chkbox_btn.js");
/* harmony import */ var _components_mixins_information_block_information_block_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/mixins/information_block/information_block.js */ "./components/mixins/information_block/information_block.js");
/* harmony import */ var _components_mixins_subscription_text_field_subscription_text_field_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/mixins/subscription_text_field/subscription_text_field.js */ "./components/mixins/subscription_text_field/subscription_text_field.js");
/* harmony import */ var _components_mixins_filter_date_dropdown_filter_date_dropdown_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/mixins/filter_date_dropdown/filter_date_dropdown.js */ "./components/mixins/filter_date_dropdown/filter_date_dropdown.js");
/* harmony import */ var _components_mixins_date_dropdown_date_dropdown_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/mixins/date_dropdown/date_dropdown.js */ "./components/mixins/date_dropdown/date_dropdown.js");
/* harmony import */ var _components_mixins_text_field_text_field_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/mixins/text_field/text_field.js */ "./components/mixins/text_field/text_field.js");
/* harmony import */ var _components_mixins_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/mixins/dropdown/dropdown.js */ "./components/mixins/dropdown/dropdown.js");
/* harmony import */ var _components_mixins_dropdown_facilities_dropdown_facilities_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/mixins/dropdown_facilities/dropdown_facilities.js */ "./components/mixins/dropdown_facilities/dropdown_facilities.js");
/* harmony import */ var _components_mixins_masked_text_field_masked_text_field_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/mixins/masked_text_field/masked_text_field.js */ "./components/mixins/masked_text_field/masked_text_field.js");
/* harmony import */ var _components_layout_layout_form_element_layout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/layout/layout_form_element/layout */ "./components/layout/layout_form_element/layout.js");
/* harmony import */ var _assets_json_json__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/json.json */ "./assets/json.json");



 // import './components/header/header.js';
// import './components/footer/footer.js';






















 // import './components/text_field/text_field.js';
// import './components/layout/layout_header_footer/layout';

 // var $ = require('../node_modules/jquery/src/jquery.js');
// window.addEventListener('DOMContentLoaded', () => {
//     // $('body').css('color', 'red');s
//     function add() {
//         console.log('JSON', json);
//     }
//     add();
// });

/***/ }),

/***/ "./components/button/button.scss":
/*!***************************************!*\
  !*** ./components/button/button.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/layout/layout_form_element/layout.scss":
/*!***********************************************************!*\
  !*** ./components/layout/layout_form_element/layout.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/btn_additional/btn_additional.scss":
/*!**************************************************************!*\
  !*** ./components/mixins/btn_additional/btn_additional.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/button/button.scss":
/*!**********************************************!*\
  !*** ./components/mixins/button/button.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/checkbox_buttons/checkbox_buttons.scss":
/*!******************************************************************!*\
  !*** ./components/mixins/checkbox_buttons/checkbox_buttons.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/checkbox_list/checkbox_list.scss":
/*!************************************************************!*\
  !*** ./components/mixins/checkbox_list/checkbox_list.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/date_dropdown/date_dropdown.scss":
/*!************************************************************!*\
  !*** ./components/mixins/date_dropdown/date_dropdown.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/dropdown/dropdown.scss":
/*!**************************************************!*\
  !*** ./components/mixins/dropdown/dropdown.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/dropdown_facilities/dropdown_facilities.scss":
/*!************************************************************************!*\
  !*** ./components/mixins/dropdown_facilities/dropdown_facilities.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/filter_date_dropdown/filter_date_dropdown.scss":
/*!**************************************************************************!*\
  !*** ./components/mixins/filter_date_dropdown/filter_date_dropdown.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/information_block/information_block.scss":
/*!********************************************************************!*\
  !*** ./components/mixins/information_block/information_block.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/like_button/like_button.scss":
/*!********************************************************!*\
  !*** ./components/mixins/like_button/like_button.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/link_main/link_main.scss":
/*!****************************************************!*\
  !*** ./components/mixins/link_main/link_main.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/masked_text_field/masked_text_field.scss":
/*!********************************************************************!*\
  !*** ./components/mixins/masked_text_field/masked_text_field.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/pagination/pagination.scss":
/*!******************************************************!*\
  !*** ./components/mixins/pagination/pagination.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/radio_buttons/radio_buttons.scss":
/*!************************************************************!*\
  !*** ./components/mixins/radio_buttons/radio_buttons.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/range_slider/range_slider.scss":
/*!**********************************************************!*\
  !*** ./components/mixins/range_slider/range_slider.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/rate_button/rate_button.scss":
/*!********************************************************!*\
  !*** ./components/mixins/rate_button/rate_button.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/rich_chkbox_btn/rich_chkbox_btn.scss":
/*!****************************************************************!*\
  !*** ./components/mixins/rich_chkbox_btn/rich_chkbox_btn.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/subscription_text_field/subscription_text_field.scss":
/*!********************************************************************************!*\
  !*** ./components/mixins/subscription_text_field/subscription_text_field.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/text_field/text_field.scss":
/*!******************************************************!*\
  !*** ./components/mixins/text_field/text_field.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/mixins/toggle_btn/toggle_btn.scss":
/*!******************************************************!*\
  !*** ./components/mixins/toggle_btn/toggle_btn.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./index.pug":
/*!*******************!*\
  !*** ./index.pug ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../node_modules/pug-runtime/index.js */ "../node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (action) {pug_mixins["textField"] = pug_interp = function(action, text, Email, titleLeft, titleRight){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"buttons__form_text_field\"\u003E \u003Cdiv class=\"buttons__form_text_field_header\"\u003E\u003Cdiv class=\"buttons__text_field_header-left\"\u003E\u003Ch3\u003E" + (pug.escape(null == (pug_interp = titleLeft) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"buttons__text_field_header-right\"\u003E" + (pug.escape(null == (pug_interp = titleRight) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cform" + (" class=\"form_text_field\""+pug.attr("action", action, true, true)) + "\u003E\u003Cinput" + (" class=\"input_text_field\""+pug.attr("type", text, true, true)+pug.attr("placeholder", Email, true, true)) + "\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["dropdown"] = pug_interp = function(action, text, Email, titleLeft){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"buttons__form_text_field\"\u003E \u003Cdiv class=\"buttons__form_text_field_header\"\u003E\u003Cdiv class=\"buttons__text_field_header-left\"\u003E\u003Ch3\u003E" + (pug.escape(null == (pug_interp = titleLeft) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cform" + (" class=\"form__dropdown\""+" id=\"form_text_field\""+pug.attr("action", action, true, true)) + "\u003E\u003Cinput" + (" class=\"form__input_dropdown\""+" id=\"input_text_field\""+pug.attr("type", text, true, true)+pug.attr("placeholder", Email, true, true)) + "\u003E\u003Cbutton class=\"form__btn\" style=\"backraund-image\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\u003E\u003Csvg width=\"12\" height=\"8\" viewbox=\"0 0 12 8\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath class=\"form__dropdown-svg\" d=\"M10.5938 0.578125L12 1.98438L6 7.98438L0 1.98438L1.40625 0.578125L6 5.17188L10.5938 0.578125Z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown__menu is-hidden\" id=\"dropdown__menu\"\u003E\u003Cdiv class=\"dropdown__guests\"\u003E\u003Cdiv class=\"dropdown__family-members\"\u003E\u003Cdiv class=\"dropdown__family-item\"\u003Eвзрослые\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown__family-item\"\u003Eдети\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown__family-item\"\u003Eмладенцы\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown__buttons\"\u003E\u003Cdiv class=\"dropdown__buttons-item\"\u003E\u003Cbuttons class=\"dropdown__adults-minus\"\u003E \u003Csvg width=\"30\" height=\"30\" viewbox=\"0 0 30 30\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cg class=\"adults-minus-svg\" opacity=\"0.38\"\u003E\u003Cpath d=\"M0.5 15C0.5 6.99187 6.99187 0.5 15 0.5C23.0081 0.5 29.5 6.99187 29.5 15C29.5 23.0081 23.0081 29.5 15 29.5C6.99187 29.5 0.5 23.0081 0.5 15Z\" stroke=\"#1F2041\" stroke-opacity=\"0.25\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M12.6435 15.564H17.3595V16.68H12.6435V15.564Z\" fill=\"#1F2041\" fill-opacity=\"0.5\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbuttons\u003E\u003Cdiv class=\"dropdown__number-guests number-adults\"\u003E0\u003C\u002Fdiv\u003E\u003Cbuttons class=\"dropdown__adults-plus\"\u003E \u003Csvg width=\"30\" height=\"31\" viewbox=\"0 0 30 31\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M0.5 15.5576C0.5 7.54949 6.99187 1.05762 15 1.05762C23.0081 1.05762 29.5 7.54949 29.5 15.5576C29.5 23.5657 23.0081 30.0576 15 30.0576C6.99187 30.0576 0.5 23.5657 0.5 15.5576Z\" stroke=\"#1F2041\" stroke-opacity=\"0.25\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M18.9132 15.7976H15.5652V19.0736H14.4312V15.7976H11.0832V14.7356H14.4312V11.4416H15.5652V14.7356H18.9132V15.7976Z\" fill=\"#1F2041\" fill-opacity=\"0.5\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbuttons\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown__buttons-item\"\u003E\u003Cbuttons class=\"dropdown__children-minus\"\u003E \u003Csvg width=\"30\" height=\"30\" viewbox=\"0 0 30 30\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cg class=\"children-minus-svg\" opacity=\"0.38\"\u003E\u003Cpath d=\"M0.5 15C0.5 6.99187 6.99187 0.5 15 0.5C23.0081 0.5 29.5 6.99187 29.5 15C29.5 23.0081 23.0081 29.5 15 29.5C6.99187 29.5 0.5 23.0081 0.5 15Z\" stroke=\"#1F2041\" stroke-opacity=\"0.25\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M12.6435 15.564H17.3595V16.68H12.6435V15.564Z\" fill=\"#1F2041\" fill-opacity=\"0.5\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbuttons\u003E\u003Cdiv class=\"dropdown__number-guests number-children\"\u003E0\u003C\u002Fdiv\u003E\u003Cbuttons class=\"dropdown__cildren-plus\"\u003E \u003Csvg width=\"30\" height=\"31\" viewbox=\"0 0 30 31\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M0.5 15.5576C0.5 7.54949 6.99187 1.05762 15 1.05762C23.0081 1.05762 29.5 7.54949 29.5 15.5576C29.5 23.5657 23.0081 30.0576 15 30.0576C6.99187 30.0576 0.5 23.5657 0.5 15.5576Z\" stroke=\"#1F2041\" stroke-opacity=\"0.25\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M18.9132 15.7976H15.5652V19.0736H14.4312V15.7976H11.0832V14.7356H14.4312V11.4416H15.5652V14.7356H18.9132V15.7976Z\" fill=\"#1F2041\" fill-opacity=\"0.5\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbuttons\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown__buttons-item\"\u003E\u003Cbuttons class=\"dropdown__baby-minus\"\u003E \u003Csvg width=\"30\" height=\"30\" viewbox=\"0 0 30 30\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cg class=\"baby-minus-svg\" opacity=\"0.38\"\u003E\u003Cpath d=\"M0.5 15C0.5 6.99187 6.99187 0.5 15 0.5C23.0081 0.5 29.5 6.99187 29.5 15C29.5 23.0081 23.0081 29.5 15 29.5C6.99187 29.5 0.5 23.0081 0.5 15Z\" stroke=\"#1F2041\" stroke-opacity=\"0.25\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M12.6435 15.564H17.3595V16.68H12.6435V15.564Z\" fill=\"#1F2041\" fill-opacity=\"0.5\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbuttons\u003E\u003Cdiv class=\"dropdown__number-guests number-baby\"\u003E0\u003C\u002Fdiv\u003E\u003Cbuttons class=\"dropdown__baby-plus\"\u003E \u003Csvg width=\"30\" height=\"31\" viewbox=\"0 0 30 31\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M0.5 15.5576C0.5 7.54949 6.99187 1.05762 15 1.05762C23.0081 1.05762 29.5 7.54949 29.5 15.5576C29.5 23.5657 23.0081 30.0576 15 30.0576C6.99187 30.0576 0.5 23.5657 0.5 15.5576Z\" stroke=\"#1F2041\" stroke-opacity=\"0.25\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M18.9132 15.7976H15.5652V19.0736H14.4312V15.7976H11.0832V14.7356H14.4312V11.4416H15.5652V14.7356H18.9132V15.7976Z\" fill=\"#1F2041\" fill-opacity=\"0.5\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbuttons\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown__input_guests\"\u003E \u003Cbuttons class=\"dropdown__clear visually-hidden\"\u003Eочистить\u003C\u002Fbuttons\u003E\u003Cbuttons class=\"dropdown__apply\"\u003Eприменить\u003C\u002Fbuttons\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["date_dropdown"] = pug_interp = function(titlePrev, titleNext){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"date_dropdown\"\u003E\u003Cdiv class=\"date_dropdown__prev\"\u003E\u003Cdiv class=\"date_dropdown__header\"\u003E" + (pug.escape(null == (pug_interp = titlePrev) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cform" + (" class=\"date_dropdown__form\""+pug.attr("action", action, true, true)) + "\u003E\u003Cinput class=\"date_dropdown__input\" id=\"date_dropdown-datepicker\" type=\"text\" data-range=\"true\" data-multiple-dates-separator=\" - \" placeholder=\"ДД.ММ.ГГГГ\" data-language=\"ru\"\u003E\u003Cbutton class=\"date_dropdown__btn\" style=\"backraund-image\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\u003E\u003Csvg width=\"12\" height=\"8\" viewbox=\"0 0 12 8\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath class=\"date_dropdown__svg\" d=\"M10.5938 0.578125L12 1.98438L6 7.98438L0 1.98438L1.40625 0.578125L6 5.17188L10.5938 0.578125Z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"date_dropdown__next\"\u003E\u003Cdiv class=\"date_dropdown__header\"\u003E" + (pug.escape(null == (pug_interp = titleNext) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cform" + (" class=\"date_dropdown__form\""+pug.attr("action", action, true, true)) + "\u003E\u003Cinput class=\"date_dropdown__input\" id=\"date_dropdown-datepicker-next\" type=\"text\" placeholder=\"ДД.ММ.ГГГГ\" data-language=\"ru\"\u003E\u003Cbutton class=\"date_dropdown__btn\" style=\"backraund-image\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\u003E\u003Csvg width=\"12\" height=\"8\" viewbox=\"0 0 12 8\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath class=\"date_dropdown__svg\" d=\"M10.5938 0.578125L12 1.98438L6 7.98438L0 1.98438L1.40625 0.578125L6 5.17188L10.5938 0.578125Z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["filter_date_dropdown"] = pug_interp = function(title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"filter_date_dropdown\"\u003E\u003Cdiv class=\"filter_date_dropdown__header\"\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cform" + (" class=\"filter_date_dropdown__form\""+pug.attr("action", action, true, true)) + "\u003E\u003Cinput class=\"filter_date_dropdown__input\" id=\"filter_date_dropdown-datepicker\" type=\"text\" data-range=\"true\" data-multiple-dates-separator=\" - \" placeholder=\"ДД.ММ - ДД.ММ\" data-language=\"ru\"\u003E\u003Cbutton class=\"filter_date_dropdown__btn\" style=\"backraund-image\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\u003E\u003Csvg width=\"12\" height=\"8\" viewbox=\"0 0 12 8\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath class=\"filter_date_dropdown__svg\" d=\"M10.5938 0.578125L12 1.98438L6 7.98438L0 1.98438L1.40625 0.578125L6 5.17188L10.5938 0.578125Z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["subscription_text_field"] = pug_interp = function(title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"subscription_text_field\"\u003E\u003Cdiv class=\"subscription_text_field__header\"\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cform" + (" class=\"subscription_text_field__form\""+pug.attr("action", action, true, true)) + "\u003E\u003Cinput class=\"subscription_text_field__input\" type=\"text\" data-range=\"true\" placeholder=\"Email\" data-language=\"ru\"\u003E\u003Cbutton class=\"subscription_text_field__btn\" style=\"backraund-image\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\u003E\u003Csvg width=\"17\" height=\"18\" viewbox=\"0 0 17 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z\" fill=\"#BC9CFF\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["masked_text_field"] = pug_interp = function(titleLeft){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"buttons__form_text_field\"\u003E \u003Cdiv class=\"buttons__form_text_field_header\"\u003E\u003Cdiv class=\"buttons__text_field_header-left\"\u003E\u003Ch3\u003E" + (pug.escape(null == (pug_interp = titleLeft) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cform" + (" class=\"form__dropdown\""+" id=\"form_text_field\""+pug.attr("action", action, true, true)) + "\u003E\u003Cinput class=\"datepicker-here\" id=\"my-datepicker\" type=\"text\" placeholder=\"ДД.ММ.ГГГГ\" data-language=\"ru\"\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["checkbox_buttons"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"checkbox_buttons\"\u003E\u003Cdiv class=\"checkbox_buttons__title\"\u003ECheckbox Buttons\u003C\u002Fdiv\u003E\u003Cdiv class=\"checkbox_buttons__items\"\u003E";
const db_chbox_btn_arr = [
{
chbox_btn_id_btn: 'checkbox_buttons__rectangle_smoke',
chbox_btn_id_path1: 'checkbox_buttons__path_smoke1',
chbox_btn_id_path2: 'checkbox_buttons__path_smoke2',
chbox_btn_cont_item: 'Можно курить'
},
{
chbox_btn_id_btn: 'checkbox_buttons__rectangle_pets',
chbox_btn_id_path1: 'checkbox_buttons__path_pets1',
chbox_btn_id_path2: 'checkbox_buttons__path_pets2',
chbox_btn_cont_item: 'Можно с питомцами'
},
{
chbox_btn_id_btn: 'checkbox_buttons__rectangle_guests',
chbox_btn_id_path1: 'checkbox_buttons__path_guests1',
chbox_btn_id_path2: 'checkbox_buttons__path_guests2',
chbox_btn_cont_item: 'Можно пригласить гостей (до 10 человек)'
}
]
// iterate db_chbox_btn_arr
;(function(){
  var $$obj = db_chbox_btn_arr;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var val_chbox_btn = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"checkbox_buttons__item\"\u003E\u003Cbutton" + (" class=\"checkbox_buttons__rectangle-off\""+pug.attr("id", val_chbox_btn.chbox_btn_id_btn, true, true)) + "\u003E\u003Csvg width=\"10\" height=\"11\" viewbox=\"0 0 10 11\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath" + (" class=\"checkbox_buttons__path_off\""+pug.attr("id", val_chbox_btn.chbox_btn_id_path1, true, true)+" d=\"M1.46439 4.40768L5.70703 8.65032L4.29282 10.0645L0.0501771 5.82189L1.46439 4.40768Z\" fill=\"url(#paint0_linear)\"") + "\u003E\u003C\u002Fpath\u003E\u003Cpath" + (" class=\"checkbox_buttons__path_off\""+pug.attr("id", val_chbox_btn.chbox_btn_id_path2, true, true)+" d=\"M8.53546 2.99347L9.94967 4.40768L4.29282 10.0645L2.8786 8.65032L8.53546 2.99347Z\" fill=\"url(#paint1_linear)\"") + "\u003E\u003C\u002Fpath\u003E\u003Cdefs\u003E\u003Clineargradient id=\"paint0_linear\" x1=\"7.82835\" y1=\"2.28636\" x2=\"2.1715\" y2=\"7.94321\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003Clineargradient id=\"paint1_linear\" x1=\"7.82835\" y1=\"2.28636\" x2=\"2.1715\" y2=\"7.94321\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003C\u002Fdefs\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"checkbox_buttons__title_item\"\u003E" + (null == (pug_interp = val_chbox_btn.chbox_btn_cont_item) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var val_chbox_btn = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"checkbox_buttons__item\"\u003E\u003Cbutton" + (" class=\"checkbox_buttons__rectangle-off\""+pug.attr("id", val_chbox_btn.chbox_btn_id_btn, true, true)) + "\u003E\u003Csvg width=\"10\" height=\"11\" viewbox=\"0 0 10 11\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath" + (" class=\"checkbox_buttons__path_off\""+pug.attr("id", val_chbox_btn.chbox_btn_id_path1, true, true)+" d=\"M1.46439 4.40768L5.70703 8.65032L4.29282 10.0645L0.0501771 5.82189L1.46439 4.40768Z\" fill=\"url(#paint0_linear)\"") + "\u003E\u003C\u002Fpath\u003E\u003Cpath" + (" class=\"checkbox_buttons__path_off\""+pug.attr("id", val_chbox_btn.chbox_btn_id_path2, true, true)+" d=\"M8.53546 2.99347L9.94967 4.40768L4.29282 10.0645L2.8786 8.65032L8.53546 2.99347Z\" fill=\"url(#paint1_linear)\"") + "\u003E\u003C\u002Fpath\u003E\u003Cdefs\u003E\u003Clineargradient id=\"paint0_linear\" x1=\"7.82835\" y1=\"2.28636\" x2=\"2.1715\" y2=\"7.94321\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003Clineargradient id=\"paint1_linear\" x1=\"7.82835\" y1=\"2.28636\" x2=\"2.1715\" y2=\"7.94321\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003C\u002Fdefs\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"checkbox_buttons__title_item\"\u003E" + (null == (pug_interp = val_chbox_btn.chbox_btn_cont_item) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["checkbox_list"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"checkbox_list\"\u003E\u003Cdiv class=\"checkbox_list__header\"\u003E\u003Cdiv class=\"checkbox_list__title\"\u003Eexpandable checkbox list\u003C\u002Fdiv\u003E\u003Cbutton class=\"checkbox_list__btn\" id=\"checkbox_list_btn\"\u003E\u003Csvg width=\"12\" height=\"8\" viewbox=\"0 0 12 8\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath class=\"checkbox_list__btn_path\" d=\"M10.5938 0.578125L12 1.98438L6 7.98438L0 1.98438L1.40625 0.578125L6 5.17188L10.5938 0.578125Z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"checkbox_list__menu is-hidden\"\u003E";
const db_arr = [
{
id_btn: 'checkbox_list__rectangle_breakfast',
id_path1: 'checkbox_list__path_breakfast1',
id_path2: 'checkbox_list__path_breakfast2',
content_item: 'Завтрак'
},
{
id_btn: 'checkbox_list__rectangle_desk',
id_path1: 'checkbox_list__path_desk1',
id_path2: 'checkbox_list__path_desk2',
content_item: 'Письменный стол'
},
{
id_btn: 'checkbox_list__rectangle_chair',
id_path1: 'checkbox_list__path_chair1',
id_path2: 'checkbox_list__path_chair2',
content_item: 'Стул для кормления'
},
{
id_btn: 'checkbox_list__rectangle_crib',
id_path1: 'checkbox_list__path_crib1',
id_path2: 'checkbox_list__path_crib2',
content_item: 'Кроватка'
},
{
id_btn: 'checkbox_list__rectangle_television',
id_path1: 'checkbox_list__path_television1',
id_path2: 'checkbox_list__path_television2',
content_item: 'Телевизор'
},
{
id_btn: 'checkbox_list__rectangle_shampoo',
id_path1: 'checkbox_list__path_shampoo1',
id_path2: 'checkbox_list__path_shampoo2',
content_item: 'Шампунь'
},
]
// iterate db_arr
;(function(){
  var $$obj = db_arr;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var val = $$obj[pug_index1];
pug_html = pug_html + "\u003Cdiv class=\"checkbox_list__item\"\u003E\u003Cbutton" + (" class=\"checkbox_list__rectangle-off\""+pug.attr("id", val.id_btn, true, true)) + "\u003E\u003Csvg width=\"10\" height=\"11\" viewbox=\"0 0 10 11\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath" + (" class=\"checkbox_list__path-off\""+pug.attr("id", val.id_path1, true, true)+" d=\"M1.46439 4.40768L5.70703 8.65032L4.29282 10.0645L0.0501771 5.82189L1.46439 4.40768Z\" fill=\"url(#paint0_linear)\"") + "\u003E\u003C\u002Fpath\u003E\u003Cpath" + (" class=\"checkbox_list__path-off\""+pug.attr("id", val.id_path2, true, true)+" d=\"M8.53546 2.99347L9.94967 4.40768L4.29282 10.0645L2.8786 8.65032L8.53546 2.99347Z\" fill=\"url(#paint1_linear)\"") + "\u003E\u003C\u002Fpath\u003E\u003Cdefs\u003E\u003Clineargradient id=\"paint0_linear\" x1=\"7.82835\" y1=\"2.28636\" x2=\"2.1715\" y2=\"7.94321\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003Clineargradient id=\"paint1_linear\" x1=\"7.82835\" y1=\"2.28636\" x2=\"2.1715\" y2=\"7.94321\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003C\u002Fdefs\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"checkbox_list__title_item\"\u003E" + (null == (pug_interp = val.content_item) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var val = $$obj[pug_index1];
pug_html = pug_html + "\u003Cdiv class=\"checkbox_list__item\"\u003E\u003Cbutton" + (" class=\"checkbox_list__rectangle-off\""+pug.attr("id", val.id_btn, true, true)) + "\u003E\u003Csvg width=\"10\" height=\"11\" viewbox=\"0 0 10 11\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath" + (" class=\"checkbox_list__path-off\""+pug.attr("id", val.id_path1, true, true)+" d=\"M1.46439 4.40768L5.70703 8.65032L4.29282 10.0645L0.0501771 5.82189L1.46439 4.40768Z\" fill=\"url(#paint0_linear)\"") + "\u003E\u003C\u002Fpath\u003E\u003Cpath" + (" class=\"checkbox_list__path-off\""+pug.attr("id", val.id_path2, true, true)+" d=\"M8.53546 2.99347L9.94967 4.40768L4.29282 10.0645L2.8786 8.65032L8.53546 2.99347Z\" fill=\"url(#paint1_linear)\"") + "\u003E\u003C\u002Fpath\u003E\u003Cdefs\u003E\u003Clineargradient id=\"paint0_linear\" x1=\"7.82835\" y1=\"2.28636\" x2=\"2.1715\" y2=\"7.94321\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003Clineargradient id=\"paint1_linear\" x1=\"7.82835\" y1=\"2.28636\" x2=\"2.1715\" y2=\"7.94321\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003C\u002Fdefs\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"checkbox_list__title_item\"\u003E" + (null == (pug_interp = val.content_item) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["radio_buttons"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"radio_buttons\"\u003E\u003Cdiv class=\"radio_buttons__title\"\u003Eradio buttons\u003C\u002Fdiv\u003E\u003Cdiv class=\"radio_buttons__gender\"\u003E \u003Cdiv class=\"radio_buttons__male\"\u003E\u003Cbutton class=\"radio_buttons__btn_male\"\u003E\u003Csvg width=\"20\" height=\"20\" viewbox=\"0 0 20 20\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Crect id=\"male_buttons__circle\" x=\"0.5\" y=\"0.5\" width=\"19\" height=\"19\" rx=\"9.5\" fill=\"white\" stroke=\"#BC9CFF\"\u003E\u003C\u002Frect\u003E\u003Csvg id=\"male_buttons__ball\" width=\"20\" height=\"16\" viewbox=\"0 -4 12 16\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Crect width=\"12\" height=\"12\" rx=\"6\" fill=\"url(#paint0_linear)\"\u003E\u003C\u002Frect\u003E\u003Cdefs\u003E\u003Clineargradient id=\"paint0_linear\" x1=\"6\" y1=\"0\" x2=\"6\" y2=\"12\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003C\u002Fdefs\u003E\u003C\u002Fsvg\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"radio_buttons__text\"\u003EМужчина\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"radio_buttons__female\"\u003E\u003Cbutton class=\"radio_buttons__btn_female\"\u003E\u003Csvg width=\"20\" height=\"20\" viewbox=\"0 0 20 20\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Crect class=\"radio_buttons__circle-off\" id=\"female_buttons__circle\" x=\"0.5\" y=\"0.5\" width=\"19\" height=\"19\" rx=\"9.5\" fill=\"white\" stroke=\"#BC9CFF\"\u003E\u003C\u002Frect\u003E\u003Csvg class=\"radio_buttons__ball-off\" id=\"female_buttons__ball\" width=\"20\" height=\"16\" viewbox=\"0 -4 12 16\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Crect width=\"12\" height=\"12\" rx=\"6\" fill=\"url(#paint0_linear)\"\u003E\u003C\u002Frect\u003E\u003Cdefs\u003E\u003Clineargradient id=\"paint0_linear\" x1=\"6\" y1=\"0\" x2=\"6\" y2=\"12\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003C\u002Fdefs\u003E\u003C\u002Fsvg\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"radio_buttons__text\"\u003EЖенщина\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["toggle"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"toggle\"\u003E\u003Cdiv class=\"toggle__title\"\u003Etoggle\u003C\u002Fdiv\u003E\u003Cdiv class=\"toggle__item\"\u003E\u003Cdiv class=\"toggle__button\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"toggle__text\"\u003EПолучать спецпредложения\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"toggle__item\"\u003E\u003Cdiv class=\"toggle__button\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"toggle__text\"\u003EПолучать спецпредложения\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["like_button"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"like_button\"\u003E\u003Cdiv class=\"like_button__title\"\u003Elike button\u003C\u002Fdiv\u003E\u003Cdiv class=\"like_button__button\" id=\"like_button__button\"\u003E\u003Csvg width=\"16\" height=\"16\" viewbox=\"-4 -2 14 9\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M5.03906 6.73438C5.66406 6.17448 6.1263 5.7513 6.42578 5.46484C6.72526 5.17839 7.05078 4.83984 7.40234 4.44922C7.75391 4.05859 7.99479 3.71354 8.125 3.41406C8.26823 3.11458 8.33984 2.82161 8.33984 2.53516C8.33984 2.11849 8.19661 1.77344 7.91016 1.5C7.63672 1.22656 7.29167 1.08984 6.875 1.08984C6.54948 1.08984 6.24349 1.18099 5.95703 1.36328C5.68359 1.54557 5.49479 1.77995 5.39062 2.06641H4.60938C4.50521 1.77995 4.3099 1.54557 4.02344 1.36328C3.75 1.18099 3.45052 1.08984 3.125 1.08984C2.70833 1.08984 2.35677 1.22656 2.07031 1.5C1.79688 1.77344 1.66016 2.11849 1.66016 2.53516C1.66016 2.82161 1.72526 3.11458 1.85547 3.41406C1.9987 3.71354 2.24609 4.05859 2.59766 4.44922C2.94922 4.83984 3.27474 5.17839 3.57422 5.46484C3.8737 5.7513 4.33594 6.17448 4.96094 6.73438L5 6.77344L5.03906 6.73438ZM6.875 0.25C7.52604 0.25 8.06641 0.471354 8.49609 0.914062C8.9388 1.35677 9.16016 1.89714 9.16016 2.53516C9.16016 2.91276 9.08854 3.28385 8.94531 3.64844C8.80208 4 8.53516 4.39714 8.14453 4.83984C7.76693 5.28255 7.42188 5.65365 7.10938 5.95312C6.79688 6.2526 6.29557 6.71484 5.60547 7.33984L5 7.88672L4.39453 7.35938C3.49609 6.55208 2.84505 5.94661 2.44141 5.54297C2.05078 5.13932 1.6862 4.66406 1.34766 4.11719C1.00911 3.57031 0.839844 3.04297 0.839844 2.53516C0.839844 1.89714 1.05469 1.35677 1.48438 0.914062C1.92708 0.471354 2.47396 0.25 3.125 0.25C3.88021 0.25 4.50521 0.542969 5 1.12891C5.49479 0.542969 6.11979 0.25 6.875 0.25Z\" fill=\"#1F2041\" fill-opacity=\"0.25\"\u003E\u003C\u002Fpath\u003E\u003Cpath id=\"like_button__svg\" d=\"M4.93026 7.88672L4.3248 7.33984C3.63469 6.71484 3.13339 6.2526 2.82089 5.95312C2.50839 5.65365 2.15683 5.28255 1.7662 4.83984C1.3886 4.39714 1.12818 4 0.984952 3.64844C0.841723 3.28385 0.770108 2.91276 0.770108 2.53516C0.770108 1.89714 0.984952 1.35677 1.41464 0.914062C1.85735 0.471354 2.40422 0.25 3.05526 0.25C3.81047 0.25 4.43547 0.542969 4.93026 1.12891C5.42506 0.542969 6.05006 0.25 6.80526 0.25C7.45631 0.25 7.99667 0.471354 8.42636 0.914062C8.86907 1.35677 9.09042 1.89714 9.09042 2.53516C9.09042 3.04297 8.92115 3.57031 8.58261 4.11719C8.24407 4.66406 7.87297 5.13932 7.46933 5.54297C7.0787 5.94661 6.43417 6.55208 5.53573 7.35938L4.93026 7.88672Z\" fill=\"url(#paint0_linear)\"\u003E\u003C\u002Fpath\u003E\u003Cdefs\u003E\u003Clineargradient id=\"paint0_linear\" x1=\"4.93026\" y1=\"-6\" x2=\"4.93026\" y2=\"14\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003C\u002Fdefs\u003E\u003C\u002Fsvg\u003E\u003Cdiv class=\"like_button__counter\" id=\"like_button__counter\"\u003E1 \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["rate_button"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"rate_button\"\u003E\u003Cdiv class=\"rate_button__title\"\u003Erate button\u003C\u002Fdiv\u003E\u003Cdiv class=\"rate_button__rating\"\u003E\u003Cdiv class=\"rate_button__items-off\"\u003E\u003Csvg class=\"rate_button__item\" width=\"20\" height=\"19\" viewbox=\"0 0 20 19\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath id=\"rate_btn__1\" d=\"M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z\" fill=\"url(#paint0_linear)\"\u003E\u003C\u002Fpath\u003E\u003Cdefs\u003E\u003Clineargradient id=\"paint0_linear\" x1=\"10\" y1=\"-2\" x2=\"10\" y2=\"22\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003C\u002Fdefs\u003E\u003C\u002Fsvg\u003E\u003Csvg class=\"rate_button__item\" width=\"20\" height=\"19\" viewbox=\"0 0 20 19\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath id=\"rate_btn__2\" d=\"M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z\" fill=\"url(#paint0_linear)\"\u003E\u003C\u002Fpath\u003E\u003Cdefs\u003E\u003Clineargradient id=\"paint0_linear\" x1=\"10\" y1=\"-2\" x2=\"10\" y2=\"22\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003C\u002Fdefs\u003E\u003C\u002Fsvg\u003E\u003Csvg class=\"rate_button__item\" width=\"20\" height=\"19\" viewbox=\"0 0 20 19\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath id=\"rate_btn__3\" d=\"M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z\" fill=\"url(#paint0_linear)\"\u003E\u003C\u002Fpath\u003E\u003Cdefs\u003E\u003Clineargradient id=\"paint0_linear\" x1=\"10\" y1=\"-2\" x2=\"10\" y2=\"22\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003C\u002Fdefs\u003E\u003C\u002Fsvg\u003E\u003Csvg class=\"rate_button__item\" width=\"20\" height=\"19\" viewbox=\"0 0 20 19\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath id=\"rate_btn__4\" d=\"M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z\" fill=\"url(#paint0_linear)\"\u003E\u003C\u002Fpath\u003E\u003Cdefs\u003E\u003Clineargradient id=\"paint0_linear\" x1=\"10\" y1=\"-2\" x2=\"10\" y2=\"22\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003C\u002Fdefs\u003E\u003C\u002Fsvg\u003E\u003Csvg class=\"rate_button__item\" width=\"20\" height=\"19\" viewbox=\"0 0 20 19\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath id=\"rate_btn__5\" d=\"M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z\" fill=\"url(#paint0_linear)\"\u003E\u003C\u002Fpath\u003E\u003Cdefs\u003E\u003Clineargradient id=\"paint0_linear\" x1=\"10\" y1=\"-2\" x2=\"10\" y2=\"22\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003C\u002Fdefs\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["button"] = pug_interp = function(text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cbutton class=\"button__default\"\u003E\u003Cdiv class=\"button__default_text\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv" + (pug.attrs(pug.merge([{"class": "button__default_svg"},attributes]), true)) + "\u003E\u003Csvg" + (pug.attrs(pug.merge([{"width": "18","height": "18","viewbox": "0 0 18 18","fill": "none","xmlns": "http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg"},attributes]), true)) + "\u003E\u003Cpath" + (pug.attrs(pug.merge([{"d": "M9 0.984375L17.0156 9L9 17.0156L7.59375 15.6094L13.1719 9.98438H0.984375V8.01562H13.1719L7.59375 2.39062L9 0.984375Z","fill": "white"},attributes]), true)) + "\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbutton\u003E";
};
pug_mixins["btn_additional"] = pug_interp = function(text, btnAdditionalClassPath){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cbutton" + (pug.attrs(attributes, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003Csvg class=\"btn_additional__svg\" width=\"99\" height=\"44\" viewBox=\"0 0 99 44\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath" + (pug.attr("class", pug.classes([btnAdditionalClassPath], [true]), false, true)+" d=\"M1 22C1 10.402 10.402 1 22 1H77C88.598 1 98 10.402 98 22C98 33.598 88.598 43 77 43H22C10.402 43 1 33.598 1 22Z\" stroke=\"url(#paint0_linear)\" stroke-width=\"2\"") + "\u003E\u003C\u002Fpath\u003E\u003Cdefs\u003E\u003Clineargradient id=\"paint0_linear\" x1=\"49.5\" y1=\"0\" x2=\"49.5\" y2=\"44\" gradientUnits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003C\u002Fdefs\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E";
};
pug_mixins["link_main"] = pug_interp = function(text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca" + (pug.attrs(attributes, true)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
};
pug_mixins["pagination"] = pug_interp = function(text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"pagination\"\u003E\u003Cdiv class=\"pagination__main\"\u003E \u003Cbutton class=\"pagination__item pagination__item_start\" id=\"pagination_btn_1\"\u003E1\u003C\u002Fbutton\u003E\u003Cbutton class=\"pagination__item\" id=\"pagination_btn_2\"\u003E2\u003C\u002Fbutton\u003E\u003Cbutton class=\"pagination__item\" id=\"pagination_btn_3\"\u003E3\u003C\u002Fbutton\u003E\u003Cbutton class=\"pagination__item\" id=\"pagination_btn_4\"\u003E...\u003C\u002Fbutton\u003E\u003Cbutton class=\"pagination__item\" id=\"pagination_btn_5\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\u003Cbutton class=\"pagination__item pagination__item_last\" id=\"pagination_btn_last\"\u003E\u003Csvg class=\"pagination__svg\" width=\"18\" height=\"18\" viewbox=\"0 0 18 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M9 0.984375L17.0156 9L9 17.0156L7.59375 15.6094L13.1719 9.98438H0.984375V8.01562H13.1719L7.59375 2.39062L9 0.984375Z\" fill=\"white\"\u003E              \u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"pagination__signature\"\u003E1 – 12 из 100+ вариантов аренды\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["dropdown_facilities"] = pug_interp = function(action, text, Email, titleLeft){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"dropdown_facilities__form_text_field\"\u003E \u003Cdiv class=\"dropdown_facilities__form_text_field_header\"\u003E\u003Cdiv class=\"dropdown_facilities__text_field_header-left\"\u003E\u003Ch3\u003E" + (pug.escape(null == (pug_interp = titleLeft) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cform" + (" class=\"dropdown_facilities__form_dropdown\""+" id=\"form_text_field\""+pug.attr("action", action, true, true)) + "\u003E\u003Cinput" + (" class=\"dropdown_facilities__form_input_dropdown\""+" id=\"input_text_field\""+pug.attr("type", text, true, true)+pug.attr("placeholder", Email, true, true)) + "\u003E\u003Cbutton class=\"dropdown_facilities__form_btn\" style=\"backraund-image\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\u003E\u003Csvg width=\"12\" height=\"8\" viewbox=\"0 0 12 8\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath class=\"dropdown_facilities__form_dropdown_svg\" d=\"M10.5938 0.578125L12 1.98438L6 7.98438L0 1.98438L1.40625 0.578125L6 5.17188L10.5938 0.578125Z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown_facilities__menu is-hidden\" id=\"dropdown__menu\"\u003E\u003Cdiv class=\"dropdown_facilities__guests\"\u003E\u003Cdiv class=\"dropdown_facilities__family-members\"\u003E\u003Cdiv class=\"dropdown_facilities__family-item\"\u003Eспальни\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown_facilities__family-item\"\u003Eкровати\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown_facilities__family-item\"\u003Eванные комнаты\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown_facilities__buttons\"\u003E\u003Cdiv class=\"dropdown_facilities__buttons-item\"\u003E\u003Cbuttons class=\"dropdown_facilities__adults-minus\"\u003E \u003Csvg width=\"30\" height=\"30\" viewbox=\"0 0 30 30\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cg class=\"dropdown_facilities__adults-minus-svg\" opacity=\"0.38\"\u003E\u003Cpath d=\"M0.5 15C0.5 6.99187 6.99187 0.5 15 0.5C23.0081 0.5 29.5 6.99187 29.5 15C29.5 23.0081 23.0081 29.5 15 29.5C6.99187 29.5 0.5 23.0081 0.5 15Z\" stroke=\"#1F2041\" stroke-opacity=\"0.25\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M12.6435 15.564H17.3595V16.68H12.6435V15.564Z\" fill=\"#1F2041\" fill-opacity=\"0.5\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbuttons\u003E\u003Cdiv class=\"dropdown_facilities__number-guests dropdown_facilities__number-adults\"\u003E0\u003C\u002Fdiv\u003E\u003Cbuttons class=\"dropdown_facilities__adults-plus\"\u003E \u003Csvg width=\"30\" height=\"31\" viewbox=\"0 0 30 31\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M0.5 15.5576C0.5 7.54949 6.99187 1.05762 15 1.05762C23.0081 1.05762 29.5 7.54949 29.5 15.5576C29.5 23.5657 23.0081 30.0576 15 30.0576C6.99187 30.0576 0.5 23.5657 0.5 15.5576Z\" stroke=\"#1F2041\" stroke-opacity=\"0.25\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M18.9132 15.7976H15.5652V19.0736H14.4312V15.7976H11.0832V14.7356H14.4312V11.4416H15.5652V14.7356H18.9132V15.7976Z\" fill=\"#1F2041\" fill-opacity=\"0.5\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbuttons\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown_facilities__buttons-item\"\u003E\u003Cbuttons class=\"dropdown_facilities__children-minus\"\u003E \u003Csvg width=\"30\" height=\"30\" viewbox=\"0 0 30 30\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cg class=\"dropdown_facilities__children-minus-svg\" opacity=\"0.38\"\u003E\u003Cpath d=\"M0.5 15C0.5 6.99187 6.99187 0.5 15 0.5C23.0081 0.5 29.5 6.99187 29.5 15C29.5 23.0081 23.0081 29.5 15 29.5C6.99187 29.5 0.5 23.0081 0.5 15Z\" stroke=\"#1F2041\" stroke-opacity=\"0.25\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M12.6435 15.564H17.3595V16.68H12.6435V15.564Z\" fill=\"#1F2041\" fill-opacity=\"0.5\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbuttons\u003E\u003Cdiv class=\"dropdown_facilities__number-guests dropdown_facilities__number-children\"\u003E0\u003C\u002Fdiv\u003E\u003Cbuttons class=\"dropdown_facilities__cildren-plus\"\u003E \u003Csvg width=\"30\" height=\"31\" viewbox=\"0 0 30 31\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M0.5 15.5576C0.5 7.54949 6.99187 1.05762 15 1.05762C23.0081 1.05762 29.5 7.54949 29.5 15.5576C29.5 23.5657 23.0081 30.0576 15 30.0576C6.99187 30.0576 0.5 23.5657 0.5 15.5576Z\" stroke=\"#1F2041\" stroke-opacity=\"0.25\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M18.9132 15.7976H15.5652V19.0736H14.4312V15.7976H11.0832V14.7356H14.4312V11.4416H15.5652V14.7356H18.9132V15.7976Z\" fill=\"#1F2041\" fill-opacity=\"0.5\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbuttons\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown_facilities__buttons-item\"\u003E\u003Cbuttons class=\"dropdown_facilities__baby-minus\"\u003E \u003Csvg width=\"30\" height=\"30\" viewbox=\"0 0 30 30\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cg class=\"dropdown_facilities__baby-minus-svg\" opacity=\"0.38\"\u003E\u003Cpath d=\"M0.5 15C0.5 6.99187 6.99187 0.5 15 0.5C23.0081 0.5 29.5 6.99187 29.5 15C29.5 23.0081 23.0081 29.5 15 29.5C6.99187 29.5 0.5 23.0081 0.5 15Z\" stroke=\"#1F2041\" stroke-opacity=\"0.25\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M12.6435 15.564H17.3595V16.68H12.6435V15.564Z\" fill=\"#1F2041\" fill-opacity=\"0.5\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbuttons\u003E\u003Cdiv class=\"dropdown_facilities__number-guests dropdown_facilities__number-baby\"\u003E0\u003C\u002Fdiv\u003E\u003Cbuttons class=\"dropdown_facilities__baby-plus\"\u003E \u003Csvg width=\"30\" height=\"31\" viewbox=\"0 0 30 31\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M0.5 15.5576C0.5 7.54949 6.99187 1.05762 15 1.05762C23.0081 1.05762 29.5 7.54949 29.5 15.5576C29.5 23.5657 23.0081 30.0576 15 30.0576C6.99187 30.0576 0.5 23.5657 0.5 15.5576Z\" stroke=\"#1F2041\" stroke-opacity=\"0.25\"\u003E\u003C\u002Fpath\u003E\u003Cpath d=\"M18.9132 15.7976H15.5652V19.0736H14.4312V15.7976H11.0832V14.7356H14.4312V11.4416H15.5652V14.7356H18.9132V15.7976Z\" fill=\"#1F2041\" fill-opacity=\"0.5\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbuttons\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown_facilities__input_guests\"\u003E \u003Cbuttons class=\"dropdown_facilities__clear visually-hidden\"\u003Eочистить\u003C\u002Fbuttons\u003E\u003Cbuttons class=\"dropdown_facilities__apply\"\u003Eприменить\u003C\u002Fbuttons\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["range_slider"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"range_slider\"\u003E\u003Cdiv class=\"range_slider__header\"\u003E\u003Cdiv class=\"range_slider__title\"\u003E\u003Ch3\u003ERange Slider\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"range_slider__content\" id=\"range_slider__content\"\u003E5000₽ - 10000₽\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"range_slider__slider\"\u003E\u003Cinput class=\"js-range-slider\" type=\"single\" name=\"my_range\" value=\"\" data-type=\"double\" data-min=\"0\" data-max=\"16000\" data-from=\"5000\" data-to=\"10000\" data-grid=\"false\" data-postfix=\" &amp;#8381\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["rich_chkbox_btn"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"rich_chkbox_btn\"\u003E\u003Cdiv class=\"rich_chkbox_btn__title\"\u003Erich Checkbox Buttons\u003C\u002Fdiv\u003E\u003Cdiv class=\"rich_chkbox_btn__items\"\u003E";
const db_rich_ch_btn_arr = [
{
rich_ch_btn_id_btn: 'rich_chkbox_btn__rectangle_corridor',
rich_ch_btn_id_path1: 'rich_chkbox_btn__path_corridor1',
rich_ch_btn_id_path2: 'rich_chkbox_btn__path_corridor2',
rich_ch_btn_tit_item: 'Широкий коридор',
rich_ch_btn_content: 'Ширина коридоров в номере не менее 91 см.'
},
{
rich_ch_btn_id_btn: 'rich_chkbox_btns__rectangle_invalid',
rich_ch_btn_id_path1: 'rich_chkbox_btn__path_invalid1',
rich_ch_btn_id_path2: 'rich_chkbox_btn__path_invalid2',
rich_ch_btn_tit_item: 'Помощник для инвалидов',
rich_ch_btn_content: 'На 1 этаже вас встретит специалист  и проводит до номера.'
},
]
// iterate db_rich_ch_btn_arr
;(function(){
  var $$obj = db_rich_ch_btn_arr;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var val_rich_ch_btn = $$obj[pug_index2];
pug_html = pug_html + "\u003Cdiv class=\"rich_chkbox_btn__item\"\u003E\u003Cbutton" + (" class=\"rich_chkbox_btn__rectangle_off\""+pug.attr("id", val_rich_ch_btn.rich_ch_btn_id_btn, true, true)) + "\u003E\u003Csvg width=\"10\" height=\"11\" viewbox=\"0 0 10 11\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath" + (" class=\"rich_chkbox_btn__path_off\""+pug.attr("id", val_rich_ch_btn.rich_ch_btn_id_path1, true, true)+" d=\"M1.46439 4.40768L5.70703 8.65032L4.29282 10.0645L0.0501771 5.82189L1.46439 4.40768Z\" fill=\"url(#paint0_linear)\"") + "\u003E\u003C\u002Fpath\u003E\u003Cpath" + (" class=\"rich_chkbox_btn__path_off\""+pug.attr("id", val_rich_ch_btn.rich_ch_btn_id_path2, true, true)+" d=\"M8.53546 2.99347L9.94967 4.40768L4.29282 10.0645L2.8786 8.65032L8.53546 2.99347Z\" fill=\"url(#paint1_linear)\"") + "\u003E\u003C\u002Fpath\u003E\u003Cdefs\u003E\u003Clineargradient id=\"paint0_linear\" x1=\"7.82835\" y1=\"2.28636\" x2=\"2.1715\" y2=\"7.94321\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003Clineargradient id=\"paint1_linear\" x1=\"7.82835\" y1=\"2.28636\" x2=\"2.1715\" y2=\"7.94321\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003C\u002Fdefs\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"rich_chkbox_btn__title_item\"\u003E" + (null == (pug_interp = val_rich_ch_btn.rich_ch_btn_tit_item) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"rich_chkbox_btn__content\"\u003E" + (null == (pug_interp = val_rich_ch_btn.rich_ch_btn_content) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var val_rich_ch_btn = $$obj[pug_index2];
pug_html = pug_html + "\u003Cdiv class=\"rich_chkbox_btn__item\"\u003E\u003Cbutton" + (" class=\"rich_chkbox_btn__rectangle_off\""+pug.attr("id", val_rich_ch_btn.rich_ch_btn_id_btn, true, true)) + "\u003E\u003Csvg width=\"10\" height=\"11\" viewbox=\"0 0 10 11\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath" + (" class=\"rich_chkbox_btn__path_off\""+pug.attr("id", val_rich_ch_btn.rich_ch_btn_id_path1, true, true)+" d=\"M1.46439 4.40768L5.70703 8.65032L4.29282 10.0645L0.0501771 5.82189L1.46439 4.40768Z\" fill=\"url(#paint0_linear)\"") + "\u003E\u003C\u002Fpath\u003E\u003Cpath" + (" class=\"rich_chkbox_btn__path_off\""+pug.attr("id", val_rich_ch_btn.rich_ch_btn_id_path2, true, true)+" d=\"M8.53546 2.99347L9.94967 4.40768L4.29282 10.0645L2.8786 8.65032L8.53546 2.99347Z\" fill=\"url(#paint1_linear)\"") + "\u003E\u003C\u002Fpath\u003E\u003Cdefs\u003E\u003Clineargradient id=\"paint0_linear\" x1=\"7.82835\" y1=\"2.28636\" x2=\"2.1715\" y2=\"7.94321\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003Clineargradient id=\"paint1_linear\" x1=\"7.82835\" y1=\"2.28636\" x2=\"2.1715\" y2=\"7.94321\" gradientunits=\"userSpaceOnUse\"\u003E\u003Cstop stop-color=\"#BC9CFF\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u003E\u003C\u002Fstop\u003E\u003C\u002Flineargradient\u003E\u003C\u002Fdefs\u003E\u003C\u002Fsvg\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"rich_chkbox_btn__title_item\"\u003E" + (null == (pug_interp = val_rich_ch_btn.rich_ch_btn_tit_item) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"rich_chkbox_btn__content\"\u003E" + (null == (pug_interp = val_rich_ch_btn.rich_ch_btn_content) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["information_block"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"information_block\"\u003E";
const db_info_bl_arr = [
{
info_bl_tit: 'Комфорт',
info_bl_cont: 'Шумопоглощающие стены'
},
{
info_bl_tit: 'Удобство',
info_bl_cont: 'Окно в каждой из спален'
},
]
// iterate db_info_bl_arr
;(function(){
  var $$obj = db_info_bl_arr;
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var val_info_bl = $$obj[pug_index3];
pug_html = pug_html + "\u003Cdiv class=\"information_block__item\"\u003E\u003Cdiv class=\"information_block__img\"\u003E \u003C\u002Fdiv\u003E\u003Cdiv class=\"information_block__text\"\u003E\u003Cdiv class=\"information_block__title\"\u003E" + (null == (pug_interp = val_info_bl.info_bl_tit) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"information_block__content\"\u003E" + (null == (pug_interp = val_info_bl.info_bl_cont) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var val_info_bl = $$obj[pug_index3];
pug_html = pug_html + "\u003Cdiv class=\"information_block__item\"\u003E\u003Cdiv class=\"information_block__img\"\u003E \u003C\u002Fdiv\u003E\u003Cdiv class=\"information_block__text\"\u003E\u003Cdiv class=\"information_block__title\"\u003E" + (null == (pug_interp = val_info_bl.info_bl_tit) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"information_block__content\"\u003E" + (null == (pug_interp = val_info_bl.info_bl_cont) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"ru\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Clink rel=\"shortcut icon\" href=\"images\u002FGroup.png\" type=\"image\u002Fx-icon\"\u003E\u003Clink rel=\"stylesheet\"\u003E\u003Ctitle\u003ETOXIN\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"wrapper\"\u003E\u003Cdiv class=\"container\"\u003E \u003Cdiv class=\"buttons\"\u003E \u003Cdiv class=\"buttons__text-field\"\u003E";
pug_mixins["textField"]('action', 'text', 'Email', 'text field', 'default');
pug_mixins["textField"]('action', 'text', 'This is pretty awesome', 'text field', 'Hover / Focus');
pug_mixins["dropdown"]('action', 'text', 'Сколько гостей', 'dropdown', '');
pug_mixins["masked_text_field"]('masked text field');
pug_mixins["date_dropdown"]('date Dropdown', 'date Dropdown');
pug_mixins["filter_date_dropdown"]('filter date Dropdown');
pug_mixins["subscription_text_field"]('subscription text field');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"buttons__checkbox\"\u003E ";
pug_mixins["checkbox_buttons"]();
pug_mixins["radio_buttons"]();
pug_mixins["toggle"]();
pug_mixins["like_button"]();
pug_mixins["rate_button"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"buttons__buttons\"\u003E\u003Cdiv class=\"buttons__buttons_renge_slider\"\u003E";
pug_mixins["range_slider"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"buttons__buttons_buttons\"\u003E \u003Ch3\u003Ebuttons\u003C\u002Fh3\u003E\u003Cdiv class=\"buttons__buttons_item\"\u003E\u003Cdiv class=\"buttons__btn_1\"\u003E";
pug_mixins["btn_additional"].call({
attributes: {"class": "btn_additional__default"}
}, 'click me', 'btn_additional__path_off');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"buttons__btn_2\"\u003E";
pug_mixins["btn_additional"].call({
attributes: {"class": "btn_additional__default"}
}, 'click me', 'btn_additional__path_off');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"buttons__buttons_item\"\u003E\u003Cdiv class=\"buttons__btn_transparent_1\"\u003E";
pug_mixins["btn_additional"].call({
attributes: {"class": "btn_additional__transparent"}
}, 'click me');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"buttons__btn_transparent_2\"\u003E";
pug_mixins["btn_additional"].call({
attributes: {"class": "btn_additional__transparent"}
}, 'click me');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"buttons__buttons_item\"\u003E\u003Cdiv class=\"buttons__buttons_link_1\"\u003E";
pug_mixins["link_main"].call({
attributes: {"class": "link_main__default"}
}, 'click me');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"buttons__buttons_link_2\"\u003E";
pug_mixins["link_main"].call({
attributes: {"class": "link_main__default"}
}, 'click me');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"buttons__buttons_item\"\u003E";
pug_mixins["button"].call({
attributes: {"class": "button__default_pathOn"}
}, 'перейти к оплате');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"buttons__buttons_item buttons__buttons_pagination\"\u003E\u003Ch3\u003Epagination\u003C\u002Fh3\u003E\u003Cdiv class=\"buttons__pagination\"\u003E";
pug_mixins["pagination"].call({
attributes: {"class": "pagination__default_pathOn"}
}, '15');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown\"\u003E \u003Cdiv class=\"dropdown__block1\"\u003E";
pug_mixins["dropdown_facilities"]('action', 'text', 'Сколько спален', 'dropdown', '');
pug_mixins["dropdown_facilities"]('action', 'text', 'Сколько спален', 'dropdown', '');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown__block2\"\u003E";
pug_mixins["dropdown"]('action', 'text', 'Сколько гостей', 'dropdown', '');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown__block3\"\u003E";
pug_mixins["dropdown"]('action', 'text', 'Сколько гостей', 'dropdown', '');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"checkbox\"\u003E \u003Cdiv class=\"checkbox__block1\"\u003E ";
pug_mixins["checkbox_list"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"checkbox__block2\"\u003E ";
pug_mixins["rich_chkbox_btn"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"checkbox__block3\"\u003E \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"comments\"\u003E \u003Cdiv class=\"comments__block1\"\u003E ";
pug_mixins["information_block"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"comments__block2\"\u003E \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"action" in locals_for_with?locals_for_with.action:typeof action!=="undefined"?action:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "?16ca":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./assets/json.json":
/*!**************************!*\
  !*** ./assets/json.json ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"title":"This is json file"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_air-datepicker_dist_js_datepicker_js-node_modules_air-datepicker_src_js_-2ff550"], () => (__webpack_require__("./main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map