<?php
    $acao = $_GET['acao'];

    if ($acao == 'cadastrarCli') {
        $nome = $_POST['nome'];
        $email = $_POST['email'];

        include 'views/inscricao.php';

    }
?>
