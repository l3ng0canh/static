<?php
$data = $_SERVER["REMOTE_ADDR"] . " - " . $_SERVER['HTTP_USER_AGENT'];
file_put_contents('/var/www/BUG_tuhin1729_TRAILS.log', $data . "\n", FILE_APPEND);
?>
