<?
// aqui começa o script
//pega as variaveis por POST
$nome      = $_POST["nome"];
$email   = $_POST["email"];
$telefone  = $_POST["telefone"];
$assunto   = $_POST["assunto"];
$mensagem  = $_POST["mensagem"];

global $email; //função para validar a variável $email no script todo

$data      = date("d/m/y");                     //função para pegar a data de envio do e-mail
$ip        = $_SERVER['REMOTE_ADDR'];           //função para pegar o ip do usuário
$navegador = $_SERVER['HTTP_USER_AGENT'];       //função para pegar o navegador do visitante
$hora      = date("H:i");                       //para pegar a hora com a função date

//aqui envia o e-mail para você
mail ("simonefreitas@seventhinkers.com.br",                       //email aonde o php vai enviar os dados do form
      "$assunto",
      "Nome: $nome\nData: $data\nIp: $ip\nNavegador: $navegador\nHora: $hora\nE-mail: $email\nTelefone: $telefone\n\nMensagem: $mensagem",
      "From: $email"
     );

//aqui são as configurações para enviar o e-mail para o visitante
$site   = "simonefreitas@seventhinkers.com.br";                    //o e-mail que aparecerá na caixa postal do visitante
$titulo = "Contato Portal Seventhinkers";         //titulo da mensagem enviada para o visitante
$msg    = "Olá $nome,\nobrigado por entrar em contato conosco, em breve entraremos em contato";

//aqui envia o e-mail de auto-resposta para o visitante
mail("$email",
     "$titulo",
     "$msg",
     "From: $site"
    );
echo "<p align=center><b>Olá $nome,</b> recebemos sua mensagem.</p>";
echo "<p align=center>É com grande satisfação que a <b>Seventhinkers</b></p>";
echo "<p align=center>recebe você em nossa casa.</p>";
echo "<br/>";
echo "<p align=center>Breve entraremos em contato.</p>";
?>
