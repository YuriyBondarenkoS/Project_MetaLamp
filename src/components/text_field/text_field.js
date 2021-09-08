import './text_field.scss';

<<<<<<< HEAD
const input_text_field = document.getElementById('input_text_field');
const form_text_field = document.getElementById('form_text_field');
input_text_field.onfocus = () => form_text_field.classList.add('focus_text_field');
input_text_field.onblur = () => form_text_field.classList.remove('focus_text_field');
=======
// const inputTextField = document.getElementById('input_text_field');
// inputTextField.onfocus = () => form_text_field.classList.add('form_text_field-focus');
>>>>>>> 615be7ec1b31f5f15abee012ac178f815fd92a8e

// inputTextField.onblur = () => form_text_field.classList.remove('form_text_field-focus');

const input = document.getElementById('input');

input.onfocus = () => form.classList.add('focus');

input.onblur = () => form.classList.remove('focus');