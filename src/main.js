// import 'focus-visible';


import './index.pug';
import './scss/main.scss';

// import './components/header/header.js';
// import './components/footer/footer.js';

<<<<<<< HEAD
import './components/text_field/text_field.js';
=======
import './components/layout/layout_header_footer/layout';
>>>>>>> 615be7ec1b31f5f15abee012ac178f815fd92a8e
import './components/layout/layout_form_element/layout';
import './components/text_field/text_field.js';

// import './components/layout/layout_header_footer/layout';

import json from './assets/json.json';

window.addEventListener('DOMContentLoaded', () => {

    // $('body').css('color', 'red');s

    function add() {
        console.log('JSON', json);
    }
    add();
});