import './range_slider.scss';

import '../../../../node_modules/ion-rangeslider/css/ion.rangeSlider.css';
import 'ion-rangeslider/js/ion.rangeSlider';

// Launch plugin
// $("#range").ionRangeSlider({
//     type: "double",
//     min: 0,
//     max: 1000,
//     from: 200,
//     to: 500
// });

// // Saving it's instance to var
// var slider = $("#range").data("ionRangeSlider");

// // Get values
// var from = slider.result.from;
// var to = slider.result.to;

$(".js-range-slider").ionRangeSlider({
    
    // console.log(onChange);
    onChange: function (data) {
        console.log(onChange);
        console.log(data.from);
    },

    onFinish: function (data) {
        console.log(data.to);
    },

});

var slider = $(".js-range-slider").data("ionRangeSlider");

console.log($(".js-range-slider").data());
console.log(slider);

var low = $(".js-range-slider").data().from;
var high = $(".js-range-slider").data().to;

console.log($(".js-range-slider").data());

console.log(low);
console.log(high);

// let slider = $("#range").data("ionRangeSlider");
    
// $("#range_slider__content").find(function (e) {
        		
//     let from = slider.range_slider__content.from,
//         to = slider.range_slider__content.to;

//     let resultString = "Result: from: " + from + " to: " + to;
//     $("#range_slider__content").html(resultString);
// });