import '../../node_modules/focus-visible/dist/focus-visible';

import $ from 'jquery';

import '../scss/main.scss';
import '../pug/puges/index.pug';
import json from '../assets/json.json';

// $('body').css('color', 'red');s

function add() {
    console.log('JSON', json);
}
add();