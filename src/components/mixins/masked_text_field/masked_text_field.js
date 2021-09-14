import './masked_text_field.scss';

import '../../../../node_modules/air-datepicker/dist/css/datepicker.css';
import '../../../../node_modules/air-datepicker/dist/js/datepicker.js';

// var $ = require('../../../node_modules/jquery/src/jquery.js');

let myDatepicker = $('#my-datepicker').datepicker().data('datepicker');

$('#my-datepicker').datepicker({
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