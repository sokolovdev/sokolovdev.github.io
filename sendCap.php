<?
if(isset($_POST['name'])&&isset($_POST['email'])){ 
        $to = 'info@congresoblockchain.com'; 
        $subject = Capacitacion registration';
        $message = '
                <html>
                    <head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Name: '.$_POST['name'].'</p>
                        <p>E-mail: '.$_POST['email'].'</p>             
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: Capacitacion Form\r\n"; 
        mail($to, $subject, $message, $headers); 
}
?>