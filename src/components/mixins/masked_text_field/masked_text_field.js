import './masked_text_field.scss';

import '../../../../node_modules/air-datepicker/dist/css/datepicker.css';
import '../../../../node_modules/air-datepicker/dist/js/datepicker.js';

// var $ = require('../../../node_modules/jquery/src/jquery.js');

$('#my-datepicker').datepicker({inline: true});
// $( function() {
//     $("#my-datepicker").datepicker(
//         {inline: true}
//     );
//   } );
// $("#my-datepicker").datepicker({
//    inline: true
// });

console.log($( "#my-datepicker" ));