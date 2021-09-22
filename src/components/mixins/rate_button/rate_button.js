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
    rateBtn5on = document.querySelector('#rate_btn__5-on'),
    pathStar1 = document.querySelector('.rate_button__item');

let star1ClickCounter = 0,
    star2ClickCounter = 0,
    star3ClickCounter = 0,
    star4ClickCounter = 0,
    star5ClickCounter = 0;
    
    
rateBtn1off.addEventListener('mouseenter', () => {

    pathStar1.innerHTML = `<path id="rate_btn__1" d="M10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25Z" fill="url(#paint0_linear)"></path>`;
    rateBtn1off.before(pathStar1);
    rateBtn1off.remove();
    
    
    // star1ClickCounter = 0;
    // rateBtn1off.classList.add('rate_button__item-off');
    // rateBtn1on.classList.remove('rate_button__item-off');
});

rateBtn1off.addEventListener('mouseleave', () => {

    pathStar1.innerHTML = `<path id="rate_btn__1" d="M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z" fill="url(#paint0_linear)"></path>`;
    rateBtn1off.before(pathStar1);
    rateBtn1off.remove();

        // if (star1ClickCounter === 0) {
        //     rateBtn1off.classList.remove('rate_button__item-off');
        //     rateBtn1on.classList.add('rate_button__item-off');
        // }  
    });

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