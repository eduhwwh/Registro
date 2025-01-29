<?php
try {
    include 'conexao.php'; 

   
    $nome = $_POST['nome'];
    $email = $_POST['email'];

    $sql = "INSERT INTO registrar(nome, email) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    
    $stmt->bindParam(1, $nome);
    $stmt->bindParam(2, $email);
    
    $stmt->execute();

    echo "<script>alert('Cadastro realizado com sucesso!'); window.location.href='public/index.html';</script>";

} catch (Exception $erro) {
    echo "Erro ao cadastrar: " . $erro->getMessage();
}
?>
