document.addEventListener('DOMContentLoaded', function() {
    const btnClasificar = document.getElementById('btn-clasificar');
    const resultado = document.getElementById('resultado');
  
    btnClasificar.addEventListener('click', function() {
      const texto = document.getElementById('texto').value;
  
      // Realizar el procesamiento del texto y cálculo de spam
      const spamScore = clasificarSpam(texto);
      const esSpam = determinarSiEsSpam(spamScore);
  
      // Mostrar el resultado en pantalla
      mostrarResultado(spamScore, esSpam);
    });
  
    function clasificarSpam(texto) {
      // Aquí puedes implementar tus reglas y lógica difusa para clasificar el spam
  
      // A modo de ejemplo, calcularé un grado de spam aleatorio entre 0 y 1
      const spamScore = Math.random();
  
      return spamScore;
    }
  
    function determinarSiEsSpam(spamScore) {
      // Establecer un umbral para determinar si es spam o no
      const umbral = 0.5;
  
      return spamScore >= umbral;
    }
  
    function mostrarResultado(spamScore, esSpam) {
      let mensaje = '';
  
      if (esSpam) {
        mensaje = 'Es spam';
      } else {
        mensaje = 'No es spam';
      }
  
      resultado.innerHTML = `
        <div class="alert alert-info" role="alert">
          Grado de spam: ${spamScore.toFixed(2)}<br>
          ${mensaje}
        </div>
      `;
    }
  });
  