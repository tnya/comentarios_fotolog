/*aquí va tu código*/

//Funcion que guarda los datos
function saveData(){
	var clave = document.getElementById("clave").value;// obtengo los valores ingresados
	var valor = document.getElementById("valor").value;

	localStorage.setItem(clave,valor);

	var commentContainer = document.getElementById("comments");/* "llamo" al espacio que cree en HTML para poder insertar mi cajita de comentarios */
	//para limpiar el contenedor
	commentContainer.innerHTML = "";

	for (i=0 ; i<localStorage.length ; i++){
		var name = localStorage.key(i);
		var comment = localStorage.getItem(name);

/* AQUI EMPIEZA EL DOM (la magia :O)*/

		//div contenedor de los comentarios
		var commentBox = document.createElement("div");/* este es mi div padre que adopta a todos los demas elementos de la cajita de comentarios */
		commentBox.classList.add("new-comment");

		//creando el usuario del comentario
		var user = document.createElement("h4");
		var username = document.createTextNode(nombre);
		user.appendChild(username);

		//creo el comentario
		var comment = document.createElement("p");
		var contentComment = document.createTextNode(comentario);
		comment.appendChild(contentComment);

		//Adoptando/relacionando el user y el comment con su div padre (commentBox)
		commentBox.appendChild(user);
		commentBox.appendChild(comment);

		//el contenedor mayor - el espacio creado en HTML - adopta al div de los comentarios
		commentContainer.appendChild(commentBox);
	}

//Funcion que limpia los comentarios
function clearContainer(){
	var commentContainer = document.getElementById("comments");
	commentContainer.innerHTML = "";
}

	//Limpiando los inputs
	document.getElementById("clave").value = "";
	document.getElementById("valor").value = "";
}

//Guardando los datos ingresados
(function guardar(){
	document.getElementById("guardar-datos").addEventListener("click",saveData);
	saveData();
})();
/* le digo al boton (llamandolo por su id) que ejecute la funcion que guarda mis datos (saveData) */

//Para borrar los datos
function deleteData(){
	window.localStorage.clear();
	clearContainer();
}

(function delete(){
	document.getElementById("limpiar-datos").addEventListener("click",deleteData);
})();

