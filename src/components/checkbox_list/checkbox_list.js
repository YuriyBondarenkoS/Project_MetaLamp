import './checkbox_list.scss';

const checkboxBtnRectangleBreakfast = document.querySelector('#checkbox_list__rectangle_breakfast'),
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

checkboxListBtn.addEventListener('click', () => {
    checkboxListMenu.classList.toggle('is-hidden');
    replacementAtbBtn(checkboxListMenu);
});

checkboxBtnRectangleBreakfast.addEventListener('click', () => {
    checkboxButtons(checkboxBtnRectangleBreakfast, checkboxBtnPathBreakfast1, checkboxBtnPathBreakfast2);
});

checkboxBtnRectangleDesk.addEventListener('click', () => {
    checkboxButtons(checkboxBtnRectangleDesk, checkboxBtnPathDesk1, checkboxBtnPathDesk2);
});

checkboxBtnRectangleChair.addEventListener('click', () => {
    checkboxButtons(checkboxBtnRectangleChair, checkboxBtnPathChair1, checkboxBtnPathChair2);
});

checkboxBtnRectangleCrib.addEventListener('click', () => {
    checkboxButtons(checkboxBtnRectangleCrib, checkboxBtnPathCrib1, checkboxBtnPathCrib2);
});

checkboxBtnRectangleTelevision.addEventListener('click', () => {
    checkboxButtons(checkboxBtnRectangleTelevision, checkboxBtnPathTelevision1, checkboxBtnPathTelevision2);
});

checkboxBtnRectangleShampoo.addEventListener('click', () => {
    checkboxButtons(checkboxBtnRectangleShampoo, checkboxBtnPathShampoo1, checkboxBtnPathShampoo2);
});