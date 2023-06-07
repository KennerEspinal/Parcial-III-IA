// Obtener elementos del DOM
const playerElement = document.querySelector('.player');
const holeElement = document.querySelector('.hole');
const distanceInput = document.getElementById('distance');
const windInput = document.getElementById('wind');
const calculateButton = document.getElementById('calculate-button');
const fuzzyResultElement = document.getElementById('fuzzy-result');
const defuzzyResultElement = document.getElementById('defuzzy-result');

// Calcular movimiento difuso y actualizar posición de la bola
function calcularMovimientoDifuso() {
  // Obtener valores de entrada
  const distance = parseFloat(distanceInput.value);
  const wind = parseFloat(windInput.value);

  // Lógica difusa
  let fuzzyResult;
  if (distance <= 50 && wind <= 10) {
    fuzzyResult = 'Tiro Corto';
  } else if (distance <= 50) {
    fuzzyResult = 'Tiro Medio';
  } else {
    fuzzyResult = 'Tiro Largo';
  }

  // Defuzzificación
  let defuzzyResult;
  if (fuzzyResult === 'Tiro Corto') {
    defuzzyResult = 25;
  } else if (fuzzyResult === 'Tiro Medio') {
    defuzzyResult = 75;
  } else {
    defuzzyResult = 100;
  }

  // Actualizar resultado difuso y defuzzificado en el DOM
  fuzzyResultElement.textContent = fuzzyResult;
  defuzzyResultElement.textContent = defuzzyResult;

  // Animación de movimiento de la bola hacia el hoyo
  const animationId = requestAnimationFrame(moverBola);

  function moverBola() {
    // Actualizar la posición de la bola
    const currentPosition = parseFloat(playerElement.style.left) || 50;
    const newPosition = currentPosition + distance; // Ajusta la velocidad y dirección según tus necesidades

    // Verificar si la bola ha llegado al hoyo
    if (newPosition >= holeElement.offsetLeft) {
      // Detener la animación
      cancelAnimationFrame(animationId);
    } else {
      // Continuar moviendo la bola
      playerElement.style.left = newPosition + 'px';
      animationId = requestAnimationFrame(moverBola);
    }
  }
}

// Función de controlador de evento para el botón "Calcular Golpe"
function handleCalculateButtonClick() {
  calcularMovimientoDifuso();
}

// Asignar el controlador de evento al botón "Calcular Golpe"
calculateButton.addEventListener('click', handleCalculateButtonClick);
