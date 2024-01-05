<?php
// session_start();
// echo $_POST['log_email'];
if (isset($_POST['log_email'])) {
    $email = $_POST['email'];
    $pasword = $_POST['password'];
    $valide = user::login($pasword,$email);

    if (is_int($valide) === true) {
         header('location: index.php?page=dashbord');
        echo 'valide';
        exit();
    } else {
        header('location: index.php?page=login');
        echo 'not valide';
        exit();
    }
}