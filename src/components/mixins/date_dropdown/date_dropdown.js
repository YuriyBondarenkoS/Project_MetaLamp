import './date_dropdown.scss';

import '../../../../node_modules/air-datepicker/dist/css/datepicker.css';
import 'air-datepicker/dist/js/datepicker';


let myDatepickerPiev = $('#date_dropdown-datepicker').datepicker().data('datepicker');
let myDatepickerNext = $('#date_dropdown-datepicker-next').datepicker().data('datepicker');

$('#date_dropdown-datepicker').datepicker({
    todayButton: true,
    clearButton: true,
    range: true,
    onSelect: function (fd, d, picker) { 
        $("#date_dropdown-datepicker").val(fd.split("-")[0]);
        $("#date_dropdown-datepicker-next").val(fd.split("-")[1]);
    }
});

$('.datepicker--button[data-action="today"]').on('click', () => {
    myDatepickerPiev.hide();
});

$('#date_dropdown-datepicker-next').on('click', () => {
    myDatepickerNext.destroy();
    myDatepickerPiev.show();
});

$('.date_dropdown__btn').on('click', () => {
    myDatepickerPiev.show();
});
