import './filter_date_dropdown.scss';

import '../../../../node_modules/air-datepicker/dist/css/datepicker.css';
import 'air-datepicker/dist/js/datepicker';


let myDatepickerPiev = $('#filter_date_dropdown-datepicker').datepicker().data('datepicker');

$('#filter_date_dropdown-datepicker').datepicker({
    todayButton: true,
    clearButton: true,
    range: true,
    dateFormat: "d M"
});

$('.datepicker--button[data-action="today"]').on('click', () => {
    myDatepickerPiev.hide();
});

// $('#date_dropdown-datepicker-next').on('click', () => {
//     myDatepickerPiev.show();
// });

$('.filter_date_dropdown__btn').on('click', () => {
    myDatepickerPiev.show();
});
