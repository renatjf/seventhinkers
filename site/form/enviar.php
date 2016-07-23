<?
// aqui começa o script
//pega as variaveis por POST
$nome      = $_POST["nome"];
$email   = $_POST["email"];
$telefone  = $_POST["telefone"];
$assunto   = $_POST["assunto"];
$mensagem  = $_POST["mensagem"];

$nomeEmpresa = "Seven Thinkers - Produções";

global $email; //função para validar a variável $email no script todo

$data      = date("d/m/y");                     //função para pegar a data de envio do e-mail
$ip        = $_SERVER['REMOTE_ADDR'];           //função para pegar o ip do usuário
$navegador = $_SERVER['HTTP_USER_AGENT'];       //função para pegar o navegador do visitante
$hora      = date("H:i");                       //para pegar a hora com a função date

//aqui envia o e-mail para você
// mail ("simonefreitas@seventhinkers.com.br",
mail ("contato@seventhinkers.com.br",                       //email aonde o php vai enviar os dados do form
      "$assunto",
      "Nome: $nome\nData: $data\nIp: $ip\nNavegador: $navegador\nHora: $hora\nE-mail: $email\nTelefone: $telefone\n\nMensagem: $mensagem",
      "From: $email"
     );

//aqui são as configurações para enviar o e-mail para o visitante
$site   = "contato@seventhinkers.com.br";                    //o e-mail que aparecerá na caixa postal do visitante
$titulo = "Contato Portal Seven Thinkers";         //titulo da mensagem enviada para o visitante
$msg    = "Olá $nome,\n\nObrigado por entrar em contato com a $nomeEmpresa.\nBreve entraremos em contato.\n\n$nomeEmpresa\nAvenida das Américas nº 500\nSalas: 129 e 130 | Bloco 9\nShopping Downtown\nBarra da Tijuca / Rio de Janeiro, RJ\nTelefone: 21 - 2025-5721";


//aqui envia o e-mail de auto-resposta para o visitante
mail("$email",
     "$titulo",
     "$msg",
     "From: $site"
    );
echo "<p align=center><b>Olá $nome,</b> recebemos sua mensagem.</p>";
echo "<p align=center>É com grande satisfação que a <b>$nomeEmpresa</b></p>";
echo "<p align=center>recebe você em nossa casa.</p>";
echo "<p align=center>Breve entraremos em contato.</p>";
echo "<p align=center>www.seventhinkers.com.br</p>";
?>
