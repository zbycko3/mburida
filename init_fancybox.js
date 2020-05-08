
/**
 * jQuery start
 */
$(document).ready(function() {
    function updateBox(a) {
        var url = $(a).attr('data-url');
        var suffix = $(a).attr('data-suffix');

        if (url && suffix) {
            var url1 = url;
            var url2 = url1 + suffix;

            var closeBtn = $('#fancybox-close');

            closeBtn.attr('target', '_blank')
                .attr('href', url1)
                .attr('rel', 'nofollow')
                .unbind('click')
                .click(function() {
                    _gaq.push(['_trackEvent', 'ComparePrices', 'Click', 'ComparePrices - Click - Strona produktu - zdjecie produktu']);
                    setTimeout(function() {location.assign(url2);}, 1000);
                    $.fancybox.close();
                });
        }
    }

    $("a.zoom-image").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': true,
        'autoScale': false,
        'hideOnContentClick': false,
        'hideOnOverlayClick': false,
        'enableEscapeButton': false,
        'onComplete': function(a) {updateBox(a)}
    });
});
