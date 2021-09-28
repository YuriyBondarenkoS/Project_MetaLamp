import './text_field.scss';

const inputTextField = document.querySelector('.input_text_field'),
    // inputTextFieldFocus = document.querySelector('.input_text_field__focus'),
    formTextField = document.querySelector('.form_text_field');

inputTextField.onfocus = () => formTextField.classList.add('focus_text_field');
inputTextField.onblur = () => formTextField.classList.remove('focus_text_field');

// inputTextField.addEventListener('focus', (e) => {
//     // console.log(e.target);
//     e.target.classList.toggle('focus_text_field__focus');
//     e.target.classList.toggle('focus_text_field');
// });

// inputTextField.addEventListener('blur', (e) => {
//     // console.log(e.target);
//     e.target.classList.toggle('focus_text_field__focus');
//     e.target.classList.toggle('focus_text_field');
// });