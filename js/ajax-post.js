function call() {
    var msg = $('#lid-form').serialize();
    $.ajax({
        type: 'POST',
        url: 'http://new.infobot.pro/site-files/send.php',
        data: msg,
        jsonp: true,
        crossDomain: true,
        error: function (xhr, str) {
            alert('Сообщение отправлено. Наши менеджеры свяжутся с вами в ближайшее время.');
        }
    });
}

function crossDomainPost(myUrl, data) {
    var iframe = document.createElement("iframe");
    var uniqueString = "CHANGE_THIS_TO_SOME_UNIQUE_STRING";
    document.body.appendChild(iframe);
    iframe.style.display = "none";
    iframe.contentWindow.name = uniqueString;

    var form = document.createElement("form");
    form.target = uniqueString;
    form.action = myUrl;
    form.method = "POST";

    for (var n in data) {
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = n;
        input.value = data[n];
        form.appendChild(input);
    }

    document.body.appendChild(form);

    form.submit();
}

function ttscall() {
    var ttsmsg = $('#tts-call').serializeArray();

    var data = [];
    for (var i in ttsmsg) {
        data[ttsmsg[i].name] = ttsmsg[i].value;
    }
    
    crossDomainPost('http://bot.infobot.pro/inform/sitecall1.php', data);
    
    $('#modal_form_active').hide();
    $('#modal_form_done').show();
}
