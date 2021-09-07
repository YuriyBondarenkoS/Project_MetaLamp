import 'focus-visible';

import './scss/main.scss';

import './index.pug';

import './components/header/header.js';
import './components/footer/footer.js';

import './components/layout/layout_header_footer/layout';
import './components/layout/layout_form_element/layout';
import './components/text_field/text_field.js';

import json from './assets/json.json';

// $('body').css('color', 'red');s

function add() {
    console.log('JSON', json);
}
add();