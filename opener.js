/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/

$(document).ready(function () {
    "use strict";
    
    var first = false, second = false, third = false;
    
    $('.emailopener').click(function () {
        if (first === false) {
            $('#contactus').slideDown(300);
            first = true;
        } else {
            $('#contactus').slideUp(300);
            first = false;
        }
    });
    
    $('.introopener').click(function () {
        if (second === false) {
            $('#special').slideDown(300);
            second = true;
        } else {
            $('#special').slideUp(300);
            second = false;
        }
    });
    
    $('.hosts').click(function () {
        if (third === false) {
            $('#hosting').slideDown(300);
            third = true;
        } else {
            $('#hosting').slideUp(300);
            third = false;
        }
    });
});