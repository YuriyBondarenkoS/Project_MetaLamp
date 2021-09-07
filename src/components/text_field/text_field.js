import './text_field.scss';

const input_text_field = document.getElementById('input_text_field');
input_text_field.onfocus = function() { form_text_field.classList.add('form_text_field-focus'); };

input_text_field.onblur = function() { form_text_field.classList.remove('form_text_field-focus'); };