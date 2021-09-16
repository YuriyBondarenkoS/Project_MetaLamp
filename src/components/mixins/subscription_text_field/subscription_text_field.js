import './subscription_text_field.scss';

const subscriptInputFocus = document.querySelector('.subscription_text_field__input'),
      subscriptFormFocus = document.querySelector('.subscription_text_field__form');

subscriptInputFocus.onfocus = () => subscriptFormFocus.classList.add('focus-subscript-input');
subscriptInputFocus.onblur = () => subscriptFormFocus.classList.remove('focus-subscript-input');
