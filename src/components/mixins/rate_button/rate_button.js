import './rate_button.scss';


const rateBtn1off = document.querySelector('#rate_btn__1'),
    rateBtn2off = document.querySelector('#rate_btn__2'),
    rateBtn3off = document.querySelector('#rate_btn__3'),
    rateBtn4off = document.querySelector('#rate_btn__4'),
    rateBtn5off = document.querySelector('#rate_btn__5'),
    rateBtn1on = document.querySelector('#rate_btn__1-on'),
    rateBtn2on = document.querySelector('#rate_btn__2-on'),
    rateBtn3on = document.querySelector('#rate_btn__3-on'),
    rateBtn4on = document.querySelector('#rate_btn__4-on'),
    rateBtn5on = document.querySelector('#rate_btn__5-on');

let star1ClickCounter = 0,
    star2ClickCounter = 0,
    star3ClickCounter = 0,
    star4ClickCounter = 0,
    star5ClickCounter = 0;

// rateBtn1off.addEventListener('click', () => {
//     star1ClickCounter = 1;
// });

// rateBtn2off.addEventListener('click', () => {
//     star2ClickCounter = 1;
// });

// rateBtn3off.addEventListener('click', () => {
//     star3ClickCounter = 1;
// });

// rateBtn4off.addEventListener('click', () => {
//     star4ClickCounter = 1;
// });

// rateBtn5off.addEventListener('click', () => {
//     star5ClickCounter = 1;
// });

rateBtn1off.addEventListener('mouseenter', () => {
    star1ClickCounter = 0;
    rateBtn1off.classList.add('rate_button__item-off');
    rateBtn1on.classList.remove('rate_button__item-off');
});

rateBtn1off.addEventListener('mouseleave', () => {
    if (star1ClickCounter === 0) {
        rateBtn1off.classList.remove('rate_button__item-off');
        rateBtn1on.classList.add('rate_button__item-off');
    }  
});

rateBtn2off.addEventListener('mouseenter', () => {
    star2ClickCounter = 0;
    rateBtn1off.classList.add('rate_button__item-off');
    rateBtn1on.classList.remove('rate_button__item-off');
    rateBtn2off.classList.add('rate_button__item-off');
    rateBtn2on.classList.remove('rate_button__item-off');
});

rateBtn2off.addEventListener('mouseleave', () => {
    if (star2ClickCounter === 0) {
        rateBtn1off.classList.remove('rate_button__item-off');
        rateBtn1on.classList.add('rate_button__item-off');
        rateBtn2off.classList.remove('rate_button__item-off');
        rateBtn2on.classList.add('rate_button__item-off');
    }
});

rateBtn3off.addEventListener('mouseenter', () => {
    star3ClickCounter = 0;
    rateBtn1off.classList.add('rate_button__item-off');
    rateBtn1on.classList.remove('rate_button__item-off');
    rateBtn2off.classList.add('rate_button__item-off');
    rateBtn2on.classList.remove('rate_button__item-off');
    rateBtn3off.classList.add('rate_button__item-off');
    rateBtn3on.classList.remove('rate_button__item-off');
});

rateBtn3off.addEventListener('mouseleave', () => {
    if (star3ClickCounter === 0) {
        rateBtn1off.classList.remove('rate_button__item-off');
        rateBtn1on.classList.add('rate_button__item-off');
        rateBtn2off.classList.remove('rate_button__item-off');
        rateBtn2on.classList.add('rate_button__item-off');
        rateBtn3off.classList.remove('rate_button__item-off');
        rateBtn3on.classList.add('rate_button__item-off');
    }
});

rateBtn4off.addEventListener('mouseenter', () => {
    star4ClickCounter = 0;
    rateBtn1off.classList.add('rate_button__item-off');
    rateBtn1on.classList.remove('rate_button__item-off');
    rateBtn2off.classList.add('rate_button__item-off');
    rateBtn2on.classList.remove('rate_button__item-off');
    rateBtn3off.classList.add('rate_button__item-off');
    rateBtn3on.classList.remove('rate_button__item-off');
    rateBtn4off.classList.add('rate_button__item-off');
    rateBtn4on.classList.remove('rate_button__item-off');
});

rateBtn4off.addEventListener('mouseleave', () => {
    if (star4ClickCounter === 0) {
        rateBtn1off.classList.remove('rate_button__item-off');
        rateBtn1on.classList.add('rate_button__item-off');
        rateBtn2off.classList.remove('rate_button__item-off');
        rateBtn2on.classList.add('rate_button__item-off');
        rateBtn3off.classList.remove('rate_button__item-off');
        rateBtn3on.classList.add('rate_button__item-off');
        rateBtn4off.classList.remove('rate_button__item-off');
        rateBtn4on.classList.add('rate_button__item-off');
    }
});

rateBtn5off.addEventListener('mouseenter', () => {
    star5ClickCounter = 0;
    rateBtn1off.classList.add('rate_button__item-off');
    rateBtn1on.classList.remove('rate_button__item-off');
    rateBtn2off.classList.add('rate_button__item-off');
    rateBtn2on.classList.remove('rate_button__item-off');
    rateBtn3off.classList.add('rate_button__item-off');
    rateBtn3on.classList.remove('rate_button__item-off');
    rateBtn4off.classList.add('rate_button__item-off');
    rateBtn4on.classList.remove('rate_button__item-off');
    rateBtn5off.classList.add('rate_button__item-off');
    rateBtn5on.classList.remove('rate_button__item-off');
});

rateBtn5off.addEventListener('mouseleave', () => {
    if (star5ClickCounter === 0) {
        rateBtn1off.classList.remove('rate_button__item-off');
        rateBtn1on.classList.add('rate_button__item-off');
        rateBtn2off.classList.remove('rate_button__item-off');
        rateBtn2on.classList.add('rate_button__item-off');
        rateBtn3off.classList.remove('rate_button__item-off');
        rateBtn3on.classList.add('rate_button__item-off');
        rateBtn4off.classList.remove('rate_button__item-off');
        rateBtn4on.classList.add('rate_button__item-off');
        rateBtn5off.classList.remove('rate_button__item-off');
        rateBtn5on.classList.add('rate_button__item-off');
    }
});