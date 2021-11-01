const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.	
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	nombre: false,
    apellido:false,
	correo: false,
    telefono: false,
	
}

const validarFormulario = (e) => {
	switch (e.target.name) {	
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;	
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
	}
}
/*
const validarFormulario = (e) => {
	switch (e.target.name) {	
		case "nombre":
			if(expresiones.nombre.test(e.target.value)){
				document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__nombre').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__nombre i').classList.add('fa-check-circle');
				document.querySelector('#grupo__nombre i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo');

			}else{
				document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__nombre').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__nombre i').classList.add('fa-times-circle');
				document.querySelector('#grupo__nombre i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo');

			}
			
		break;
		case "apellido":
			if(expresiones.apellido.test(e.target.value)){
				document.getElementById('grupo__apellido').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__apellido').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__apellido i').classList.add('fa-check-circle');
				document.querySelector('#grupo__apellido i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__apellido .formulario__input-error').classList.remove('formulario__input-error-activo');

			}else{
				document.getElementById('grupo__apellido').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__apellido').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__apellido i').classList.add('fa-times-circle');
				document.querySelector('#grupo__apellido i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__apellido .formulario__input-error').classList.add('formulario__input-error-activo');

			}
			
		break;
		case "telefono":
			if(expresiones.telefono.test(e.target.value)){
				document.getElementById('grupo__telefono').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__telefono').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__telefono i').classList.add('fa-check-circle');
				document.querySelector('#grupo__telefono i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__telefono .formulario__input-error').classList.remove('formulario__input-error-activo');

			}else{
				document.getElementById('grupo__telefono').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__telefono').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__telefono i').classList.add('fa-times-circle');
				document.querySelector('#grupo__telefono i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__telefono .error__telefono').classList.add('error__telefono-activo');

			}
		break;
		case "correo":
			if(expresiones.rcorreo.test(e.target.value)){
				document.getElementById('grupo__correo').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__correo').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__correo i').classList.add('fa-check-circle');
				document.querySelector('#grupo__correo i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__correo .formulario__input-error').classList.remove('formulario__input-error-activo');

			}else{
				document.getElementById('grupo__correo').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__correo').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__correo i').classList.add('fa-times-circle');
				document.querySelector('#grupo__correo i').classList.remove('fa-check-circle');
				document.querySelector('#grupo__correo .formulario__input-error').classList.add('formulario__input-error-activo');

			}
		break;
		case "mensaje":
			
		break;
	}
}
*/

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
	if(campos.nombre && campos.apellido && campos.correo && campos.telefono){
		formulario.reset();
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);
		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	}else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});