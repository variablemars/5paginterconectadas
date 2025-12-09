
const form = document.getElementById('donationForm');
const mensaje = document.getElementById('mensaje');


form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const monto = parseFloat(document.getElementById('monto').value);
  const metodo = document.getElementById('metodo').value;


  if (!nombre || !email || !monto || monto <= 0 || !metodo) {
    mensaje.textContent = "Por favor, completa todos los campos correctamente.";
    mensaje.style.color = "#ffcc00"; 
    return;
  }

  mensaje.style.color = "#00ff00"; 
  mensaje.textContent = `¡Gracias, ${nombre}! Hemos recibido tu donación de €${monto.toFixed(2)} vía ${metodo === "tarjeta" ? "tarjeta de crédito" : metodo === "paypal" ? "PayPal" : "transferencia bancaria"}.`;


  form.reset();
});
