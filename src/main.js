// import 'focus-visible';

import './index.pug';
import './scss/main.scss';

// import './components/header/header.js';
// import './components/footer/footer.js';

import './components/mixins/text_field/text_field.js';
import './components/mixins/dropdown/dropdown.js';
import './components/mixins/masked_text_field/masked_text_field.js';
import './components/layout/layout_form_element/layout';
// import './components/text_field/text_field.js';

// import './components/layout/layout_header_footer/layout';

import json from './assets/json.json';

window.addEventListener('DOMContentLoaded', () => {

    // $('body').css('color', 'red');s

    function add() {
        console.log('JSON', json);
    }
    add();
});