/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {
        // Magnific popup script
        var blogImages = $('.main-post-content img');
        for (var i = 0; i < blogImages.length; i++) {
            blogImages[i].setAttribute('href', blogImages[i].src);
        }

        // Magnific popup init
        $('.main-post-content img').magnificPopup({
            type: 'image',
            // other options
            gallery:{
                enabled:true
            }
        });

        // Add target=_blank to links
        var linkTags = $('.main-post-content a');
        for (var i = 0; i < linkTags.length; i++) {
            linkTags[i].setAttribute('target', '_blank');
        }
        // HighlightBlock
        $('.main-post-content pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });
})(jQuery);

