/*global window, $ */

(function() {
    var ShrinkText = window.ShrinkText = window.ShrinkText || {};

    ShrinkText.Shrink = function(textToShrink, maxLength) {
        if (textToShrink && textToShrink.length <= maxLength - 3) { return textToShrink; }

        var html, chunk, text;

        html = $('<span/>');

        chunk = $('<span/>', {
            style: 'cursor: pointer;'
        }).html(textToShrink.substring(0, maxLength - 3) + '...');

        text = $('<span/>', {
            style: 'display: none; cursor: pointer;'
        }).html(textToShrink);

        $(chunk).click(function() {
            $(chunk).hide();
            $(text).show();
        });

        $(text).click(function() {
            $(text).hide();
            $(chunk).show();
        });

        return html.append(chunk).append(text);
    };
}());



