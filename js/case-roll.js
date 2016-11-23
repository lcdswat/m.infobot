$(document).ready(function () {

    (function () {
        var $cases = $('.case');
        var $foreground = $('.container-foreground');
        var $background = $('.container-background');

        var showCase = function (current, prev) {
            $cases.detach();
            var $case = $($cases[current]);
            $foreground.append($case);
            $case.fadeIn();
            if (prev !== null) {
                var $prevCase = $($cases[prev]);
                $background.append($prevCase);
                $prevCase.fadeOut();
            }
        };

        var currentCase = 0;

        showCase(currentCase, null);

        $('#arrow-left').click(function () {
            var prevCase = currentCase;
            currentCase--;
            if (currentCase < 0) {
                currentCase = $cases.length - 1;
            }
            showCase(currentCase, prevCase);
        });

        $('#arrow-right').click(function () {
            var prevCase = currentCase;
            currentCase++;
            if (currentCase > $cases.length - 1) {
                currentCase = 0;
            }
            showCase(currentCase, prevCase);
        });

    }());



});


