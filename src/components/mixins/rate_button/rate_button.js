import './rate_button.scss';


const rateBtn1 = document.querySelector("#rate_btn__1"),
    rateBtn2 = document.querySelector('#rate_btn__2'),
    rateBtn3 = document.querySelector('#rate_btn__3'),
    rateBtn4 = document.querySelector('#rate_btn__4'),
    rateBtn5 = document.querySelector('#rate_btn__5');

let star1ClickCounter = 0,
    star2ClickCounter = 0,
    star3ClickCounter = 0,
    star4ClickCounter = 0,
    star5ClickCounter = 0,
    arrRateBtn = [rateBtn1, rateBtn2, rateBtn3, rateBtn4, rateBtn5];

function starOn(idStar) {
    idStar.setAttribute("d", "M10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25Z");
}

function starOff(idStar) {

    if((idStar === rateBtn1 && star1ClickCounter === 0) || (idStar === rateBtn2 && star2ClickCounter === 0) || (idStar === rateBtn3 && star3ClickCounter === 0) || (idStar === rateBtn4 && star4ClickCounter === 0) || (idStar === rateBtn5 && star5ClickCounter === 0)) {
        idStar.setAttribute("d", "M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z");
    }
}

function offClick() {
    star1ClickCounter = 0;
    star2ClickCounter = 0;
    star3ClickCounter = 0;
    star4ClickCounter = 0;
    star5ClickCounter = 0;
    starOffAll(5);
}

function starOffAll(numStar) {
    for (let i = 0; i < numStar; i++) {
        starOff(arrRateBtn[i]);
    }
}

function starOnAll(numStar) {
    for (let i = 0; i < numStar; i++) {
        starOn(arrRateBtn[i]);
    }
}

rateBtn1.addEventListener('click', () => {
    offClick();
    star1ClickCounter += 1;
    starOnAll(1);
});

rateBtn2.addEventListener('click', () => {
    offClick();
    star1ClickCounter += 1;
    star2ClickCounter += 1;
    starOnAll(2);
});

rateBtn3.addEventListener('click', () => {
    offClick();
    star1ClickCounter += 1;
    star2ClickCounter += 1;
    star3ClickCounter += 1;
    starOnAll(3);
});
 
rateBtn4.addEventListener('click', () => {
    offClick();
    star1ClickCounter += 1;
    star2ClickCounter += 1;
    star3ClickCounter += 1;
    star4ClickCounter += 1;
    starOnAll(4);
});

rateBtn5.addEventListener('click', () => {
    offClick();
    star1ClickCounter += 1;
    star2ClickCounter += 1;
    star3ClickCounter += 1;
    star4ClickCounter += 1;
    star5ClickCounter += 1;
    starOnAll(5);
});
 
rateBtn1.addEventListener('mouseenter', () => {
    starOnAll(1);
});

rateBtn2.addEventListener('mouseenter', () => {
    starOnAll(2);
});

rateBtn3.addEventListener('mouseenter', () => {
    starOnAll(3);
});

rateBtn4.addEventListener('mouseenter', () => {
    starOnAll(4);
});

rateBtn5.addEventListener('mouseenter', () => {
    starOnAll(5);
});

rateBtn1.addEventListener('mouseleave', () => {
    starOffAll(1);
});

rateBtn2.addEventListener('mouseleave', () => {
    starOffAll(2);
});

rateBtn3.addEventListener('mouseleave', () => {
    starOffAll(3);
});

rateBtn4.addEventListener('mouseleave', () => {
    starOffAll(4);
});

rateBtn5.addEventListener('mouseleave', () => {
    starOffAll(5);
});