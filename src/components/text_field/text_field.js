import './text_field.scss';

const inputTextField = document.querySelector('.input_text_field'),
    formTextField = document.querySelector('.form_text_field');

inputTextField.onfocus = () => formTextField.classList.add('focus_text_field');
inputTextField.onblur = () => formTextField.classList.remove('focus_text_field');
