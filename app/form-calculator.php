<?php

$recepient = "zhilin_lesha@tut.by";
$sitename = "реконструкция.бел";
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: реконструкция.бел <postmaster@xn--e1agfaofleikm1b8h.xn--90ais>\r\n";

$message = '';
if(!empty($_POST['name-form'])){
	$message .= "Заявка с формы: " . $_POST['name-form'] . '</br>';
}
if(!empty($_POST['area'])){
	$message .= "Площадь дома в м2: " . $_POST['area'] . '</br>';
}
if(!empty($_POST['floor'])){
	$message .= "Количество этажей в доме: " . $_POST['floor'] . '</br>';
}
if(!empty($_POST['type-project'])){
	$message .= "Тип проекта: " . $_POST['type-project'] . '</br>';
}
if(!empty($_POST['reconstruction-1']) || !empty($_POST['reconstruction-2']) || !empty($_POST['reconstruction-3']) || !empty($_POST['reconstruction-4']) || !empty($_POST['reconstruction-5']) || !empty($_POST['reconstruction-6']) || !empty($_POST['reconstruction-7'])){
	$message .= 'Какая реконструкция планируется?' . '</br>';
	if(!empty($_POST['reconstruction-1'])){
		$message .= '- ' . $_POST['reconstruction-1'] . '; ';
	}
	if(!empty($_POST['reconstruction-2'])){
		$message .= '- ' $_POST['reconstruction-2'] . '; ';
	}
	if(!empty($_POST['reconstruction-3'])){
		$message .= '- ' $_POST['reconstruction-3'] . '; ';
	}
	if(!empty($_POST['reconstruction-4'])){
		$message .= '- ' $_POST['reconstruction-4'] . '; ';
	}
	if(!empty($_POST['reconstruction-5'])){
		$message .= '- ' $_POST['reconstruction-5'] . '; ';
	}
	if(!empty($_POST['reconstruction-6'])){
		$message .= '- ' $_POST['reconstruction-6'] . '; ';
	}
	if(!empty($_POST['reconstruction-7'])){
		$message .= '- ' $_POST['reconstruction-7'] . '; ';
	}
	$message .= '</br>';
}

$message .= "Ваш номер телефона: " . $_POST['phone'] . '</br>';

$pagetitle = "Новая заявка с нашего сайта " . $sitename;

if(mail($recepient, $pagetitle, $message, $headers)){
	echo 'Успешно отправлено!';
} else {
	echo 'Отправка не удалась!';
}