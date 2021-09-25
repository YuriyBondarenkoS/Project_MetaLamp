import './pagination.scss';

const paginationBtn1 = document.querySelector('#pagination_btn_1'),
    paginationBtn2 = document.querySelector('#pagination_btn_2'),
    paginationBtn3 = document.querySelector('#pagination_btn_3'),
    paginationBtn4 = document.querySelector('#pagination_btn_4'),
    paginationBtn5 = document.querySelector('#pagination_btn_5'),
    paginationBtnLast = document.querySelector('#pagination_btn_last'),
    paginationSignature = document.querySelector('.pagination__signature'),
    paginationBtnAll = document.querySelectorAll('.pagination__item');

function signaturePaginationNum(clickBtn1) {
    paginationSignature.innerHTML = `${(clickBtn1 - 1) * 12 + 1} – ${clickBtn1 * 12} из 100+ вариантов аренды`;
}

function clickLastPage(clickBtn1, clickBtn5, nowClickBtn) {
    if (clickBtn1 === (clickBtn5 - 4)) {

        paginationBtnAll.forEach(element => {
            element.classList.remove('pagination__item_start');
        });

        nowClickBtn.classList.add('pagination__item_start');
    }
}

paginationBtn1.addEventListener('click', () => {
    let clickBtn1 = Number(paginationBtn1.innerHTML),
        clickBtn5 = Number(paginationBtn5.innerHTML);
    
    clickLastPage(clickBtn1, clickBtn5, paginationBtn1);
});
      
paginationBtn2.addEventListener('click', () => {
    let clickBtn1 = Number(paginationBtn1.innerHTML),
        clickBtn2 = Number(paginationBtn2.innerHTML),
        clickBtn5 = Number(paginationBtn5.innerHTML);

    clickLastPage(clickBtn1, clickBtn5, paginationBtn2);
    
    if ((clickBtn2 + 4) < clickBtn5) {
        paginationBtn1.innerHTML = clickBtn2;
        paginationBtn2.innerHTML = (clickBtn2 + 1);
        paginationBtn3.innerHTML = (clickBtn2 + 2);
    } else if ((clickBtn2 + 4) === clickBtn5) {
        paginationBtn1.innerHTML = clickBtn2;
        paginationBtn2.innerHTML = (clickBtn2 + 1);
        paginationBtn3.innerHTML = (clickBtn2 + 2);
        paginationBtn4.innerHTML = (clickBtn2 + 3);
    }

    signaturePaginationNum(paginationBtn1.innerHTML);
});

paginationBtn3.addEventListener('click', () => {
    let clickBtn1 = Number(paginationBtn1.innerHTML),
        clickBtn3 = Number(paginationBtn3.innerHTML),
        clickBtn5 = Number(paginationBtn5.innerHTML);
    
    clickLastPage(clickBtn1, clickBtn5, paginationBtn3);

    if ((clickBtn3 + 4) < clickBtn5) {
        paginationBtn1.innerHTML = clickBtn3;
        paginationBtn2.innerHTML = (clickBtn3 + 1);
        paginationBtn3.innerHTML = (clickBtn3 + 2);
    } else if ((clickBtn3 + 4) === clickBtn5) {
        paginationBtn1.innerHTML = clickBtn3;
        paginationBtn2.innerHTML = (clickBtn3 + 1);
        paginationBtn3.innerHTML = (clickBtn3 + 2);
        paginationBtn4.innerHTML = (clickBtn3 + 3);
    }

    signaturePaginationNum(paginationBtn1.innerHTML);
});

paginationBtn4.addEventListener('click', () => {
    let clickBtn1 = Number(paginationBtn1.innerHTML),
        clickBtn5 = Number(paginationBtn5.innerHTML);
    
    clickLastPage(clickBtn1, clickBtn5, paginationBtn4);
});

paginationBtn5.addEventListener('click', () => {
    let clickBtn1 = Number(paginationBtn1.innerHTML),
        clickBtn5 = Number(paginationBtn5.innerHTML);
    
    clickLastPage(clickBtn1, clickBtn5, paginationBtn5);
});

paginationBtnLast.addEventListener('click', () => {
    let clickBtn5 = Number(paginationBtn5.innerHTML);
    paginationBtn1.innerHTML = (clickBtn5 - 4);
    paginationBtn2.innerHTML = (clickBtn5 - 3);
    paginationBtn3.innerHTML = (clickBtn5 - 2);
    paginationBtn4.innerHTML = (clickBtn5 - 1);

    signaturePaginationNum(paginationBtn1.innerHTML);
});