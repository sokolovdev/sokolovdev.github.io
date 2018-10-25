<?
if(isset($_POST['name'])&&isset($_POST['email'])&&isset($_POST['telegram'])&&isset($_POST['company'])&&isset($_POST['industry'])){ 
        $to = 'info@congresoblockchain.com'; 
        $subject = 'Hackathon registration';
        $message = '
                <html>
                    <head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Name: '.$_POST['name'].'</p>
                        <p>E-mail: '.$_POST['email'].'</p>
			<p>Telegram ID: '.$_POST['telegram'].'</p>
                        <p>Company: '.$_POST['company'].'</p> 
			<p>Industry: '.$_POST['industry'].'</p>                       
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: Hackathon Form\r\n"; 
        mail($to, $subject, $message, $headers); 
}
?>