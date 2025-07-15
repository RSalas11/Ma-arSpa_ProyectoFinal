let barramenu = document.querySelector('.barramenu');
let header = document.querySelector('header');
let section = document.querySelector('section');

barramenu.onclick = function(){
    header.classList.toggle('active')
    section.classList.toggle('active')
}
   
 document.querySelectorAll('.tarjeta-imagen').forEach(tarjeta => {
            tarjeta.addEventListener('click', function() {
                this.classList.toggle('tarjeta-activa');
            });
        });
        
const boton = document.querySelector('.secciondescuento a');
  const modal = document.getElementById('modalReserva');
  const cerrar = document.querySelector('.cerrar-modal');

  boton.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
  });

  cerrar.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

    