import './calendar.scss';

import '../../../../node_modules/air-datepicker/dist/css/datepicker.css';
import 'air-datepicker/dist/js/datepicker';

$('#datepicker_card').datepicker({

    todayButton: true,
    clearButton: true,
    range: true,
});
