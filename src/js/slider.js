window.addEventListener('load', function(){
	new Glider(document.querySelector('.bares'), {
		slidesToScroll: 1,	
		dots: '.carousel__indicadores',
		draggable: true,
		arrows: {
			prev: '#leftBares',
			next: '#rightBares'
		}
	});
});

window.addEventListener('load', function(){
	new Glider(document.querySelector('.museo'), {
		slidesToScroll: 1,	
		dots: '#indicadoresMuseo',
		draggable: true,
		arrows: {
			prev: '#leftMuseo',
			next: '#rightMuseo'
		}
	});
});

window.addEventListener('load', function(){
	new Glider(document.querySelector('.parque'), {
		slidesToScroll: 1,	
		dots: '#indicadoresParque',
		draggable: true,
		arrows: {
			prev: '#leftParque',
			next: '#rightParque'
		}
	});
});

window.addEventListener('load', function(){
	new Glider(document.querySelector('.discoteca'), {
		slidesToScroll: 1,	
		dots: '#indicadoresDiscoteca',
		draggable: true,
		arrows: {
			prev: '#leftDiscoteca',
			next: '#rightDiscoteca'
		}
	});
});

window.addEventListener('load', function(){
	new Glider(document.querySelector('.restaurante'), {
		slidesToScroll: 1,	
		dots: '#indicadoresRestaurante',
		draggable: true,
		arrows: {
			prev: '#leftRestaurante',
			next: '#rightRestaurante'
		}
	});
});