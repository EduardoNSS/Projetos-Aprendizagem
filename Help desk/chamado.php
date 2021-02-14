

<?php
	session_start();
	$id = $_SESSION['user_id'];
	$titulo = str_replace('#', '$', $_POST['titulo']);
	$categoria = str_replace('#', '$', $_POST['categoria']);
	$descricao = str_replace('#', '$', $_POST['descricao']);

	$texto = $id.'#'.$titulo.'#'.$categoria.'#'.$descricao.PHP_EOL;

	$file = fopen('chamados.hd', 'a');
	fwrite($file, $texto);
	fclose($file);

	header('Location: abrir_chamado.php');
?>
