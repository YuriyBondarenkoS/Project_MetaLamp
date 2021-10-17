import './radio_buttons.scss';

const maleBtnBall = document.querySelector('#male_buttons__ball'),
    femaleBtnBall = document.querySelector('#female_buttons__ball'),
    maleBtnCircle = document.querySelector('#male_buttons__circle'),
    femaleBtnCircle = document.querySelector('#female_buttons__circle'),
    btnGenderMale = document.querySelector('#radio_buttons__btn_male'),
    btnGenderFemale = document.querySelector('#radio_buttons__btn_female'),
    genderTextMale = document.querySelector('.radio_buttons__text_male'),
    genderTextFemale = document.querySelector('.radio_buttons__text_female');

function radioBtnGender() {
    maleBtnBall.classList.toggle('radio_buttons__ball-off');
    femaleBtnBall.classList.toggle('radio_buttons__ball-off');
    maleBtnCircle.classList.toggle('radio_buttons__circle-off');
    femaleBtnCircle.classList.toggle('radio_buttons__circle-off');
    genderTextMale.classList.toggle('radio_buttons__text_active');
    genderTextFemale.classList.toggle('radio_buttons__text_active');
}

btnGenderMale.addEventListener('click', () => {
    radioBtnGender();
});

btnGenderFemale.addEventListener('click', () => {
    radioBtnGender();
});

