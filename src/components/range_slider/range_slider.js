import './range_slider.scss';

import '../../../node_modules/ion-rangeslider/css/ion.rangeSlider.css';
import 'ion-rangeslider/js/ion.rangeSlider';

$(".js-range-slider").ionRangeSlider({
    onChange: function (data) {
        rangePrice(data.from, data.to);
    },
    onFinish: function (data) {
        rangePrice(data.from, data.to);
    },
});

function rangePrice(from, to) {
    let resultString = `${from}₽ - ${to}₽`;
    $("#range_slider__content").html(resultString);
}