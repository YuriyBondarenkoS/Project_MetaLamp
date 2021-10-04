import './calendar.scss';

import '../../../../node_modules/air-datepicker/dist/css/datepicker.css';
import 'air-datepicker/dist/js/datepicker';

// let myDatepickerCard = $('#datepicker_card').datepicker().data('datepicker');
    console.log('#datepicker_card');

$('#datepicker_card').datepicker({

    todayButton: true,
    clearButton: true,
    range: true,
});

// $('.datepicker--button[data-action="today"]').on('click', () => {
//     myDatepickerCard.hide();
// });

// $('.filter_date_dropdown__btn').on('click', () => {
//     myDatepickerCard.show();
// });
