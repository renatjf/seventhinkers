<?
// aqui come�a o script
//pega as variaveis por POST
$nome      = $_POST["nome"];
$email   = $_POST["email"];
$telefone  = $_POST["telefone"];
$assunto   = $_POST["assunto"];
$mensagem  = $_POST["mensagem"];

$nomeEmpresa = "Seven Thinkers - Produ��es";

global $email; //fun��o para validar a vari�vel $email no script todo

$data      = date("d/m/y");                     //fun��o para pegar a data de envio do e-mail
$ip        = $_SERVER['REMOTE_ADDR'];           //fun��o para pegar o ip do usu�rio
$navegador = $_SERVER['HTTP_USER_AGENT'];       //fun��o para pegar o navegador do visitante
$hora      = date("H:i");                       //para pegar a hora com a fun��o date

//aqui envia o e-mail para voc�
// mail ("simonefreitas@seventhinkers.com.br",
mail ("contato@seventhinkers.com.br",                       //email aonde o php vai enviar os dados do form
      "$assunto",
      "Nome: $nome\nData: $data\nIp: $ip\nNavegador: $navegador\nHora: $hora\nE-mail: $email\nTelefone: $telefone\n\nMensagem: $mensagem",
      "From: $email"
     );

//aqui s�o as configura��es para enviar o e-mail para o visitante
$site   = "contato@seventhinkers.com.br";                    //o e-mail que aparecer� na caixa postal do visitante
$titulo = "Contato Portal Seven Thinkers";         //titulo da mensagem enviada para o visitante
$msg    = "Ol� $nome,\n\nObrigado por entrar em contato com a $nomeEmpresa.\nBreve entraremos em contato.\n\n$nomeEmpresa\nAvenida das Am�ricas n� 500\nSalas: 129 e 130 | Bloco 9\nShopping Downtown\nBarra da Tijuca / Rio de Janeiro, RJ\nTelefone: 21 - 2025-5721";


//aqui envia o e-mail de auto-resposta para o visitante
mail("$email",
     "$titulo",
     "$msg",
     "From: $site"
    );
echo "<p align=center><b>Ol� $nome,</b> recebemos sua mensagem.</p>";
echo "<p align=center>� com grande satisfa��o que a <b>$nomeEmpresa</b></p>";
echo "<p align=center>recebe voc� em nossa casa.</p>";
echo "<p align=center>Breve entraremos em contato.</p>";
echo "<p align=center>www.seventhinkers.com.br</p>";
?>
