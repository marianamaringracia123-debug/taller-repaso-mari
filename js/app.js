// =======================================================
// RETO 1: MODO OSCURO INTERACTIVO (CON PERSISTENCIA)
// =======================================================

// 1. SELECCIÓN DE ELEMENTOS DEL DOM
const btnTema = document.getElementById('btn-toggle-tema');
const body = document.body;

// 2. APLICAR EL ESTADO GUARDADO AL CARGAR LA PÁGINA
// Comprobamos si el usuario ya había elegido el modo oscuro antes
const temaGuardado = localStorage.getItem('tema');

if (temaGuardado === 'oscuro') {
    body.classList.add('tema-oscuro');
    if (btnTema) btnTema.textContent = "Modo Claro";
} else {
    body.classList.remove('tema-oscuro');
    if (btnTema) btnTema.textContent = "Modo Oscuro";
}

// 3. MANEJO DE EVENTOS
if (btnTema) {
    btnTema.addEventListener('click', () => {
        // Alterna la clase 'tema-oscuro' en el body
        body.classList.toggle('tema-oscuro');

        // Cambiar el texto del botón y GUARDAR la elección del usuario
        if (body.classList.contains('tema-oscuro')) {
            btnTema.textContent = "Modo Claro";
            localStorage.setItem('tema', 'oscuro'); // Guarda en la memoria del navegador
        } else {
            btnTema.textContent = "Modo Oscuro";
            localStorage.setItem('tema', 'claro');  // Guarda en la memoria del navegador
        }
    });
}


// =======================================================
// RETO 2: SALUDO DINÁMICO
// =======================================================

// 1. SELECCIÓN DEL CONTENEDOR
const textoSaludo = document.getElementById('saludo-tiempo-real');

// 2. LÓGICA DE TIEMPO
const horaActual = new Date().getHours();
let mensaje = "";

if (horaActual >= 6 && horaActual < 12) {
    mensaje = "¡Buenos días! Espero que tengas una excelente mañana.";
} else if (horaActual >= 12 && horaActual < 18) {
    mensaje = "¡Buenas tardes! Gracias por visitar mi perfil.";
} else {
    mensaje = "¡Buenas noches! Descubre mi trabajo.";
}

// 3. INYECCIÓN EN EL DOM
if (textoSaludo) {
    textoSaludo.textContent = mensaje;
}
