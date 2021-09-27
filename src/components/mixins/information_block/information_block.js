import './facilities_block.scss';

const checkboxBtnRectangleCorridor = document.querySelector('#rich_chkbox_btn__rectangle_corridor'),
    checkboxBtnRectangleInvalid = document.querySelector('#rich_chkbox_btns__rectangle_invalid'),
    checkboxBtnPathCorridor1 = document.querySelector('#rich_chkbox_btn__path_corridor1'),
    checkboxBtnPathCorridor2 = document.querySelector('#rich_chkbox_btn__path_corridor2'),
    checkboxBtnPathInvalid1 = document.querySelector('#rich_chkbox_btn__path_invalid1'),
    checkboxBtnPathInvalid2 = document.querySelector('#rich_chkbox_btn__path_invalid2');

function checkboxButtons(btnCheckbox, path1Checkbox, path2Checkbox) {
    btnCheckbox.classList.toggle('rich_chkbox_btn__rectangle-off');
    btnCheckbox.classList.toggle('rich_chkbox_btn__rectangle-on');
    path1Checkbox.classList.toggle('rich_chkbox_btn__path_off');
    path2Checkbox.classList.toggle('rich_chkbox_btn__path_off');
}

checkboxBtnRectangleCorridor.addEventListener('click', () => {
    checkboxButtons(checkboxBtnRectangleCorridor, checkboxBtnPathCorridor1, checkboxBtnPathCorridor2);
});

checkboxBtnRectangleInvalid.addEventListener('click', () => {
    checkboxButtons(checkboxBtnRectangleInvalid, checkboxBtnPathInvalid1, checkboxBtnPathInvalid2);
});