import './text_field.scss';

// const inputTextField = document.getElementById('input_text_field');
// inputTextField.onfocus = () => form_text_field.classList.add('form_text_field-focus');

// inputTextField.onblur = () => form_text_field.classList.remove('form_text_field-focus');

const input = document.getElementById('input');

input.onfocus = () => form.classList.add('focus');

input.onblur = () => form.classList.remove('focus');