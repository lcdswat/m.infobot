 $(document).ready(function() {
    var $variants = $('.variant');
    $variants.hide().first().show();

    $(document).ready(function() {
    var i = 1;
    setInterval(function() {
        $variants.fadeOut(500);
        $variants.hide();
        $($variants[i % $variants.length]).fadeIn(500);
        i++;
    }, 4000);

    });
});
