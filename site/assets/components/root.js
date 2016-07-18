import $ from 'jquery'
// import ImageLoaderFactory from '../../../node_modules/jquery-image-loader/dist/ImageLoader.js'


//pegando conteudo do json
$.getJSON(
	"/site/json/dados.json", 
	function(data){
		$('#textoHeader').html(data.textoHeader);
		$('#textoProjetos').html(data.textoProjetos);						
		$('#textoEstrutura').html(data.textoEstrutura);
		$('#textoAtendimento').html(data.textoAtendimento);		
		$('#dadosFooter').html(data.dadosFooter);																								
	}
	);

//ramdon imagem
var images = ['slide-1.jpg', 'slide-2.jpg', 'slide-3.jpg', 'slide-4.jpg', 'slide-5.jpg' ];
$('<img class="img-responsive rounded" src="site/img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#slide');

var estrutura = ['estrutura-1.jpg', 'estrutura-2.jpg', 'estrutura-3.jpg', 'estrutura-4.jpg', 'estrutura-5.jpg'];
$('<img class="img-responsive rounded" src="site/img/' + estrutura[Math.floor(Math.random() * estrutura.length)] + '">').appendTo('#imgEstrutura');




// $('#slide').css({'background-image': 'url(site/img/' + images[Math.floor(Math.random() * images.length)] + ')'});
//

//logos
$('.logo-header').load("./site/img/logo-header.svg");
$('.logo-mobile').load("./site/img/logo-header.svg");
$('.logo-mobile-header').load("./site/img/logo-header.svg");
$('.logo-footer').load("./site/img/logo-footer.svg");

//hover botoes

$('.box-botao .cx span').load("./site/img/seta-bt.svg");

//header
$('.header .box-botao').hover(function(){
	$('.header .box-botao .bg-bt').addClass('hoverBT');
	$('.header .box-botao .cx').css('zIndex', '10');
},function(){
	$('.header .box-botao .bg-bt').removeClass('hoverBT');
	$('.header .box-botao .cx').css('zIndex', '0');
});
//
//clientes

//amil
$('.clientes #amil').hover(function(){
	$('#amil .bg-bt').addClass('hoverBT');
	 $('.clientes #amil .cx').css('zIndex', '10');
},function(){
	$('#amil .bg-bt').removeClass('hoverBT');
	$('.clientes #amil .cx').css('zIndex', '0');	
});
$('.clientes #amil a').attr('href', 'http://www.amil.com.br');


//americas
$('.clientes #americas').hover(function(){
	$('#americas .bg-bt').addClass('hoverBT');
	 $('.clientes #americas .cx').css('zIndex', '10');
},function(){
	$('#americas .bg-bt').removeClass('hoverBT');
	$('.clientes #americas .cx').css('zIndex', '0');	
});
$('.clientes #americas a').attr('href', 'http://americasmedicalcity.com.br/');


//costagille
$('.clientes #costagille').hover(function(){
	$('#costagille .bg-bt').addClass('hoverBT');
	 $('.clientes #costagille .cx').css('zIndex', '10');
},function(){
	$('#costagille .bg-bt').removeClass('hoverBT');
	$('.clientes #costagille .cx').css('zIndex', '0');
});
$('.clientes #costagille a').attr('href', 'http://www.costagille.com/');


//ez
$('.clientes #ez').hover(function(){
	$('#ez .bg-bt').addClass('hoverBT');
	 $('.clientes #ez .cx').css('zIndex', '10');
},function(){
	$('#ez .bg-bt').removeClass('hoverBT');
	$('.clientes #ez .cx').css('zIndex', '0');	
});
$('.clientes #ez a').attr('href', 'http://www.ezcommerce.com.br/');

//coi
$('.clientes #coi').hover(function(){
	$('#coi .bg-bt').addClass('hoverBT');
	 $('.clientes #coi .cx').css('zIndex', '10');
},function(){
	$('#coi .bg-bt').removeClass('hoverBT');
	$('.clientes #coi .cx').css('zIndex', '0');	
});
$('.clientes #coi a').attr('href', 'http://www.grupocoi.com.br/');

//hospitalys
$('.clientes #hospitalys').hover(function(){
	$('#hospitalys .bg-bt').addClass('hoverBT');
	 $('.clientes #hospitalys .cx').css('zIndex', '10');
},function(){
	$('#hospitalys .bg-bt').removeClass('hoverBT');
	$('.clientes #hospitalys .cx').css('zIndex', '0');	
});
$('.clientes #hospitalys a').attr('href', 'http://www.hospitalys.com.br/');


//petrobras
$('.clientes #petrobras').hover(function(){
	$('#petrobras .bg-bt').addClass('hoverBT');
	 $('.clientes #petrobras .cx').css('zIndex', '10');
},function(){
	$('#petrobras .bg-bt').removeClass('hoverBT');
	$('.clientes #petrobras .cx').css('zIndex', '0');	
});
$('.clientes #petrobras a').attr('href', 'https://www.petrobras.com.br/');

//correios
$('.clientes #correios').hover(function(){
	$('#correios .bg-bt').addClass('hoverBT');
	 $('.clientes #correios .cx').css('zIndex', '10');
},function(){
	$('#correios .bg-bt').removeClass('hoverBT');
	$('.clientes #correios .cx').css('zIndex', '0');	
});
$('.clientes #correios a').attr('href', 'https://www.correios.com.br/');


//nestle nutrition
$('.clientes #nestle-nutri').hover(function(){
	$('#nestle-nutri .bg-bt').addClass('hoverBT');
	 $('.clientes #nestle-nutri .cx').css('zIndex', '10');
},function(){
	$('#nestle-nutri .bg-bt').removeClass('hoverBT');
	$('.clientes #nestle-nutri .cx').css('zIndex', '0');	
});
$('.clientes #nestle-nutri a').attr('href', 'https://www.nestlenutrition.com.br/');


//nestle
$('.clientes #nestle').hover(function(){
	$('#nestle .bg-bt').addClass('hoverBT');
	 $('.clientes #nestle .cx').css('zIndex', '10');
},function(){
	$('#nestle .bg-bt').removeClass('hoverBT');
	$('.clientes #nestle .cx').css('zIndex', '0');	
});
$('.clientes #nestle a').attr('href', 'https://www.nestle.com.br/');

//nestle-health
$('.clientes #nestle-health').hover(function(){
	$('#nestle-health .bg-bt').addClass('hoverBT');
	 $('.clientes #nestle-health .cx').css('zIndex', '10');
},function(){
	$('#nestle-health .bg-bt').removeClass('hoverBT');
	$('.clientes #nestle-health .cx').css('zIndex', '0');	
});
$('.clientes #nestle-health a').attr('href', 'https://www.nestlehealthscience.com.br/');

//norte-a-sul
$('.clientes #norte-a-sul').hover(function(){
	$('#norte-a-sul .bg-bt').addClass('hoverBT');
	 $('.clientes #norte-a-sul .cx').css('zIndex', '10');
},function(){
	$('#norte-a-sul .bg-bt').removeClass('hoverBT');
	$('.clientes #norte-a-sul .cx').css('zIndex', '0');	
});
$('.clientes #norte-a-sul a').attr('href', 'http://www.norteasulcorretora.com.br/');

//pro-cardiaco
$('.clientes #pro-cardiaco').hover(function(){
	$('#pro-cardiaco .bg-bt').addClass('hoverBT');
	 $('.clientes #pro-cardiaco .cx').css('zIndex', '10');
},function(){
	$('#pro-cardiaco .bg-bt').removeClass('hoverBT');
	$('.clientes #pro-cardiaco .cx').css('zIndex', '0');	
});
$('.clientes #pro-cardiaco a').attr('href', 'http://www.hospitalprocardiaco.com.br/');

//rede-dor-sao-luiz
$('.clientes #rede-dor-sao-luiz').hover(function(){
	$('#rede-dor-sao-luiz .bg-bt').addClass('hoverBT');
	 $('.clientes #rede-dor-sao-luiz .cx').css('zIndex', '10');
},function(){
	$('#rede-dor-sao-luiz .bg-bt').removeClass('hoverBT');
	$('.clientes #rede-dor-sao-luiz .cx').css('zIndex', '0');	
});
$('.clientes #rede-dor-sao-luiz a').attr('href', 'http://www.rededor.com.br/');

//samaritano
$('.clientes #samaritano').hover(function(){
	$('#samaritano .bg-bt').addClass('hoverBT');
	 $('.clientes #samaritano .cx').css('zIndex', '10');
},function(){
	$('#samaritano .bg-bt').removeClass('hoverBT');
	$('.clientes #samaritano .cx').css('zIndex', '0');	
});
$('.clientes #samaritano a').attr('href', 'http://www.hsamaritano.com.br/');

//santa-lucia
$('.clientes #santa-lucia').hover(function(){
	$('#santa-lucia .bg-bt').addClass('hoverBT');
	 $('.clientes #santa-lucia .cx').css('zIndex', '10');
},function(){
	$('#santa-lucia .bg-bt').removeClass('hoverBT');
	$('.clientes #santa-lucia .cx').css('zIndex', '0');	
});
$('.clientes #santa-lucia a').attr('href', 'http://www.hmsantalucia.com.br/');


//para o titulo no scroll

$(window).scroll(function () {

	var posicaoTopProjetos = $("#textoProjetos").offset();
	var posicaoTopClientes = $(".clientes").offset();
	var posicaoTopEstrutura = $(".estrutura").offset();
	// console.log(posicaoTextoProjetos.top);


if ($(this).scrollTop() > posicaoTopEstrutura.top) {

		$('.projetos').addClass('cores-estrutura');
		$('.projetos').removeClass('sem-cores-estrutura');		
		
	} 
	else {
		$('.projetos').addClass('sem-cores-estrutura');
		$('.projetos').removeClass('cores-estrutura');
	}


if ($(this).scrollTop() > posicaoTopProjetos.top) {	

		// $('.projetos h1').css({
		// 	position: 'fixed',
		// 	top: '0',
		// 	right: '160px'
		// });

		$('.clientes').addClass('gradiente-clientes');
		$('.clientes').removeClass('fundo-clientes');

		$('.projetos').addClass('sem-cores-estrutura');
		$('.projetos').removeClass('cores-estrutura');
	 	

	if ($(this).scrollTop() > posicaoTopClientes.top) {

		$('.projetos h1').css({
			position: 'relative',
			top: '0',
			right: '0'
		});
		
	} 
} 

else{

	// $('.projetos h1').css({
	// 	position: 'relative',
	// 	top: '0',
	// 	right: '0'
	// });

	$('.clientes').addClass('fundo-clientes');
	$('.clientes').removeClass('gradiente-clientes');

}
});


//links menu

//servicos
$('.header #servicos').click(function(){
	var target = $('.estrutura').offset().top + 1;
    $('html,body').animate({
        scrollTop: target
    }, 500);	

});

//projetos
$('.header #projetos').click(function(){
	var target = $('.projetos').offset().top + 1;
    $('html,body').animate({
        scrollTop: target
    }, 500);	

});

//clientes
$('.header #clientes').click(function(){
	var target = $('.clientes').offset().top + 1;
    $('html,body').animate({
        scrollTop: target
    }, 500);	

});

//atendimento
$('.header #atendimento').click(function(){
	var target = $('.atendimento').offset().top + 1;
    $('html,body').animate({
        scrollTop: target
    }, 500);	

});

//servicos
$('.footer #servicos').click(function(){
	var target = $('.header').offset().top - 1;
    $('html,body').animate({
        scrollTop: target
    }, 500);	

});

//projetos
$('.footer #projetos').click(function(){
	var target = $('.projetos').offset().top - 1;
    $('html,body').animate({
        scrollTop: target
    }, 500);	

});

//eventos
$('.footer #eventos').click(function(){
	var target = $('.eventos').offset().top - 1;
    $('html,body').animate({
        scrollTop: target
    }, 500);	

});

//clientes
$('.footer #clientes').click(function(){
	var target = $('.clientes').offset().top - 1;
    $('html,body').animate({
        scrollTop: target
    }, 500);	

});

//atendimento
$('.footer #atendimento').click(function(){
	var target = $('.atendimento').offset().top - 1;
    $('html,body').animate({
        scrollTop: target
    }, 500);	

});

/*social*/

$('.social #facebook a').load("./site/img/facebook.svg");
$('.social #instagram a').load("./site/img/instagram.svg");

$('.social #facebook a').attr('href', 'https://www.facebook.com/Seventhinkers/');
$('.social #instagram a').attr('href','https://www.instagram.com/seven_thinkers/');














