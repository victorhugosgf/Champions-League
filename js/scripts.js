$(document).ready(function() {
	var indexAtual = 0;
	var numImagens = $("#banners .container ul li").length;
  
	$("#trocar-imagem").click(function() {
	  $("#banners .container ul li").eq(indexAtual).fadeOut(400);
	  indexAtual = (indexAtual + 1) % numImagens;
	  $("#banners .container ul li").eq(indexAtual).fadeIn(400);
	}); 

});

	

  