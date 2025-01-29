<?php
try {
    include 'conexao.php'; 

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST['email'];

        $sqlVerificar = "SELECT * FROM registrar WHERE email = ?";
        $stmtCheck = $conn->prepare($sqlVerificar);
        $stmtCheck->bindParam(1, $email);
        $stmtCheck->execute();

        if ($stmtCheck->rowCount() > 0) {
            
            $sql = "DELETE FROM registrar WHERE email = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(1, $email);
            $stmt->execute();

            echo "<script>alert('Inscrição cancelada com sucesso!'); window.location.href='../public/index.html';</script>";
        } else {
            echo "<script>alert('E-mail não encontrado!'); window.location.href='cancelar.html';</script>";
        }
    }
} catch (Exception $erro) {
    echo "Erro ao cancelar inscrição: " . $erro->getMessage();
}
?>
