import './text_field.scss';

const input_text_field = document.querySelector('.input_text_field');
const form_text_field = document.querySelector('.form_text_field');

input_text_field.onfocus = () => form_text_field.classList.add('focus_text_field');
input_text_field.onblur = () => form_text_field.classList.remove('focus_text_field');