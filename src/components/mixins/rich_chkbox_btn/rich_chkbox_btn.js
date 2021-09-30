import './rich_chkbox_btn.scss';

const checkboxBtnRectangleCorridor = document.querySelector('#rich_chkbox_btn__rectangle_corridor'),
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

checkboxBtnRectangleCorridor.addEventListener('click', () => {
    chkboxBtnRich(checkboxBtnRectangleCorridor, checkboxBtnPathCorridor1, checkboxBtnPathCorridor2);
});

checkboxBtnRectangleInvalid.addEventListener('click', () => {
    chkboxBtnRich(checkboxBtnRectangleInvalid, checkboxBtnPathInvalid1, checkboxBtnPathInvalid2);
});