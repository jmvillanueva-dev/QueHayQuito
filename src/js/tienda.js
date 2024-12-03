let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 4;

loadMoreBtn.onclick = () => {
	let boxes = [...document.querySelectorAll(".box-container .box")]
	for(var i = currentItem; i < currentItem + 4;i++){
		boxes[i].style.display = 'inline-block';
	}
	currentItem += 4;
	if(currentItem >= boxes.length){
		loadMoreBtn.style.display = 'none'
	}
}

//Carrito
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){
	elementos1.addEventListener('click', comprarElemento);
	carrito.addEventListener('click', eliminarElemento);
	vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e){
	e.preventDefault();
	if(e.target.classList.contains('agregar-carrito')){
		const elemento = e.target.parentElement.parentElement;
		leerDatosElemento(elemento);
	}
}

function leerDatosElemento(elemento){
	const infoElemento = {
		imagen: elemento.querySelector('img').src,
		titulo: elemento.querySelector('h3').textContent,
		precio: elemento.querySelector('.precio').textContent,
		id: elemento.querySelector('a').getAttribute('data-id'),
	}

	insertarCarrito(infoElemento);
}

function insertarCarrito(elemento){
	const row = document.createElement('tr');
	row.innerHTML = `
		<td>
			<img src="${elemento.imagen}" width=100 height=150px >
		</td>
		<td>
			${elemento.titulo}
		</td>
		<td>
			${elemento.precio}
		</td>
		<td>
			<a herf="#" class="borrar" data-id="${elemento.id}"> X </a>
		</td>
	`;
	lista.appendChild(row);
}

function eliminarElemento(e){
	e.preventDefault();
	let elemento,
		elementoId;
	if(e.target.classList.contains('borrar')){
		e.target.parentElement.parentElement.remove();
		elemento = e.target.parentElement.parentElement;
		elementoId = elemento.querySelector('a').getAttribute('data-id')
	}
}

function vaciarCarrito(){
	while(lista.firstChild){
		lista.removeChild(lista.firstChild);
	}
	return false;
}

// Animacion letras

// Creamos una variable en la libreria Typed, donde configuraremos el texto que queremos mostrar en nuestra pagina web
const typed = new Typed('.typed', {
    // Objeto string con las plabras que vamos a mostrar y animar en nuestra pagina web
    strings: [
        'LEYENDAS',
        'CUENTOS', 
        'POESIAS', 
        'REVISTAS'
        ],
    // Propiedades para la ejecucion del texto
        // Velocidad de escritura in milisegundo
        typeSpeed: 60,
        // Tiempo de espera antes de borrar lo que se escribio
        backDelay: 400,
        // Tiempo de espera antes de empezar a escribir
        startDelay: 1000,
        // loop defide la animacion se va a repetir o no (True = Bucle) (False = 1 sola vez)
        loop: true,
});