<?php

	session_start();

	$login = $_POST['email'];
	$pass = $_POST['senha'];
	$user_id = null;
	$user_perfil = null;

	$autenticado = false;

	$usuarios_app = array(
		array("email" => "admin@teste.com", "senha" => "123", "perfil" => "admin", "id" => 1),
		array("email" => "gestor@teste.com", "senha" => "123", "perfil" => "admin", "id" => 2),
		array("email" => "joao@teste.com", "senha" => "123", "perfil" => "user", "id" => 3),
		array("email" => "maria@teste.com", "senha" => "123", "perfil" => "user", "id" => 4),

	);

	foreach ($usuarios_app as $usuario) {
		if($usuario['email'] == $login & $usuario['senha'] == $pass){
			$autenticado = true;
			$user_id = $usuario['id'];
			$user_perfil = $usuario['perfil'];
		}
	}

	if($autenticado){
		$_SESSION['autenticado'] = 'SIM';
		$_SESSION['user_id'] = $user_id;
		$_SESSION['user_perfil'] = $user_perfil;
		
		
		header('Location: home.php');
	}else{
		$_SESSION['autenticado'] = 'NAO';
		header('Location: index.php?login=erro');
	}



?>