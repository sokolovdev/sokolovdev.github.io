<?
if(isset($_POST['name'])&&isset($_POST['email'])&&isset($_POST['telegram'])&&isset($_POST['company'])&&isset($_POST['industry'])){ 
        $to = 'info@congresoblockchain.com'; 
        $subject = '������ �� �����������';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>���: '.$_POST['name'].'</p>
                        <p>E-mail: '.$_POST['email'].'</p>
			<p>Telegram ID: '.$_POST['telegram'].'</p>
                        <p>��������: '.$_POST['company'].'</p> 
			<p>���������: '.$_POST['industry'].'</p>                       
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: ����������� <from@example.com>\r\n"; 
        mail($to, $subject, $message, $headers); 
}
?>