
<?php
session_start();
unset($_SESSION['username']);
echo '<script>location.href="login.html"</script>';
?>