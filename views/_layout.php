<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./assets/pictures/chat.png" type="image/png">
    <link rel="stylesheet" href="<?= PATH ?>assets/css/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    <title><?= ucfirst($page) ?></title>

</head>
<body>
    <!--<h1><?= ucfirst($page) ?> View</h1>-->

    <main>
        <?php include_once 'views/' . $page . '_views.php'; ?>
    </main>

    <footer></footer>
    <script src="<?= PATH ?>assets/js/main.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha384-3+GrpLQ6sa02H+sgKwFfWV/Zz+FJtvbSMfO9fs/iTC6vqUOmeaLYKaFwEEXmO7Lb" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-yNeBV5I5IjOBObIFW8awM6gTPQ3JC3Y3C1g9M+K3JBWc7pc/Bp1UcF7BDmNfNdf1" crossorigin="anonymous"></script>
</body>
</html>