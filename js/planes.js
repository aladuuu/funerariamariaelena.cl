const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});

function showPopup(title, listContent, image) {
    Swal.fire({
      title: title,
      html: listContent,
      focusConfirm: false,
      showCloseButton: false,
      showConfirmButton: false,
      customClass: {
        popup: 'popup-planes'
      }
    });
  }
  
  const katy = `
    <ul>
      <li>Urna seleccionada</li>
      <li>Instalación y traslados</li>
      <li>Capilla de madera para velación</li>
      <li>4 Porta Cirios</li>
      <li>Cruz de madera (Opcional)</li>
      <li>Tarjetero de madera</li>
      <li>1 Libro de Condolencias</li>
      <li>4 Cirios de cera o eléctricos</li>
      <li>1 Cubre Urna 24 Rosas</li>
      <li>1 Pie de Urna 36 Rosas</li>
      <li>1 Corona de Rosas</li>
      <li>2 Canastas 24 Rosas c/u</li>
      <li>Servicio de Cafetería Premium</li>
      <li>Obituario y Condolencias Web</li>
      <li>Carroza Panorámica</li>
      <li>Carroza de Flores</li>
      <li>Vehículo de acompañamiento</li>
      <li>Expresión de Gracia Virtual</li>
      <li>Trámites Registro civil</li>
    </ul>
  `;
  
  const palladio = `
    <ul>
      <li>Urna seleccionada</li>
      <li>Instalación y traslados</li>
      <li>Capilla de madera para velación</li>
      <li>4 Porta Cirios</li>
      <li>Cruz de madera (Opcional)</li>
      <li>Tarjetero de madera</li>
      <li>1 Libro de Condolencias</li>
      <li>4 Cirios de cera o eléctricos</li>
      <li>1 Cubre Urna 24 Rosas</li>
      <li>1 Pie de Urna 36 Rosas</li>
      <li>1 Corona de Rosas</li>
      <li>2 Canastas 24 Rosas c/u</li>
      <li>Servicio de Cafetería Premium</li>
      <li>Obituario y Condolencias Web</li>
      <li>Carroza Panorámica</li>
      <li>Vehículo de acompañamiento</li>
      <li>Expresión de Gracia Virtual</li>
      <li>Trámites Registro civil</li>
    </ul>
  `;
  
  const montage = `
    <ul>
      <li>Urna seleccionada</li>
      <li>Instalación y traslados</li>
      <li>Capilla de madera para velación</li>
      <li>4 Porta Cirios</li>
      <li>Cruz de madera (Opcional)</li>
      <li>Tarjetero de madera</li>
      <li>1 Libro de Condolencias</li>
      <li>4 Cirios de cera o eléctricos</li>
      <li>1 Cubre Urna 24 Rosas</li>
      <li>1 Pie de Urna 36 Rosas</li>
      <li>1 Corona de Rosas</li>
      <li>2 Canastas 24 Rosas c/u</li>
      <li>Servicio de Cafetería Premium</li>
      <li>Obituario y Condolencias Web</li>
      <li>Carroza Panorámica</li>
      <li>Vehículo de acompañamiento</li>
      <li>Expresión de Gracia Virtual</li>
      <li>Trámites Registro civil</li>
    </ul>
  `;
  
  const antunez = `
    <ul>
      <li>Urna seleccionada</li>
      <li>Instalación y traslados</li>
      <li>Capilla de madera para velación</li>
      <li>4 Porta Cirios</li>
      <li>Cruz de madera (Opcional)</li>
      <li>Tarjetero de madera</li>
      <li>1 Libro de Condolencias</li>
      <li>4 Cirios de cera o eléctricos</li>
      <li>1 Cubre Urna 24 Rosas</li>
      <li>1 Pie de Urna 36 Rosas</li>
      <li>1 Corona de Rosas</li>
      <li>2 Canastas 24 Rosas c/u</li>
      <li>Servicio de Cafetería Premium</li>
      <li>Obituario y Condolencias Web</li>
      <li>Carroza Panorámica</li>
      <li>Vehículo de acompañamiento</li>
      <li>Expresión de Gracia Virtual</li>
      <li>Trámites Registro civil</li>
    </ul>
  `;
  
  const owen = `
    <ul>
      <li>Urna seleccionada</li>
      <li>Instalación y traslados</li>
      <li>Capilla de madera para velación</li>
      <li>4 Porta Cirios</li>
      <li>Cruz de madera (Opcional)</li>
      <li>Tarjetero de madera</li>
      <li>1 Libro de Condolencias</li>
      <li>4 Cirios de cera o eléctricos</li>
      <li>1 Cubre Urna 24 Rosas</li>
      <li>1 Pie de Urna 36 Rosas</li>
      <li>1 Corona de Rosas</li>
      <li>2 Canastas 24 Rosas c/u</li>
      <li>Servicio de Cafetería Premium</li>
      <li>Obituario y Condolencias Web</li>
      <li>Carroza Panorámica</li>
      <li>Vehículo de acompañamiento</li>
      <li>Expresión de Gracia Virtual</li>
      <li>Trámites Registro civil</li>
    </ul>
  `;