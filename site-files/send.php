<?php
 /* Здесь проверяется существование переменных */
 if (isset($_POST['lid-phone'])) {$phone = $_POST['lid-phone'];}


/* Сюда впишите свою эл. почту */
 $address = "lcd-swat@yandex.ru";

/* А здесь прописывается текст сообщения, \n - перенос строки */
 $sub = "from infobot.pro";
 $mes = "$sub \n\n Телефон: $phone \n";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
 $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:infobot.pro");
 if ($send == 'true')
 {
	echo ('<meta charset="utf-8"><div style="font-family: arial; font-size; 32px">Ваше сообщение отправлено</div><div style="font-family: arial">Мы ответим на него в ближайшее время. Вернитесь на <a href="/">главную</a></div>');

 }
 else 
 {
 echo "Сообщение не отправлено";
 }
?>
