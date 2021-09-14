import './date_dropdown.scss';

import '../../../../node_modules/air-datepicker/dist/css/datepicker.css';
import 'air-datepicker/dist/js/datepicker';


let myDatepicker = $('#date_dropdown-datepicker').datepicker().data('datepicker');

$('#date_dropdown-datepicker').datepicker({
    todayButton: true,
    clearButton: true,
});
$('.datepicker--button[data-action="today"]').on('click', () => {
    myDatepicker.hide();
});

// $('#my-datepicker').datepicker({clearButton: true});
// $( function() {
//     $("#my-datepicker").datepicker(
//         {inline: true}
//     );
//   } );
// $("#my-datepicker").datepicker({
//    inline: true
// });

// console.log($( "#my-dsatepicker" ));