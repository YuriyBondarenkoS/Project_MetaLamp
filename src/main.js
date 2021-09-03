import 'focus-visible';

import './theme/main.scss';

import './index.pug';

import './components/header/header.js';

import json from './assets/json.json';

// $('body').css('color', 'red');s

function add() {
    console.log('JSON', json);
}
add();