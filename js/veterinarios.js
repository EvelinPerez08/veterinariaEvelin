const listaVeterinarios = document.getElementById('lista-veterinarios');
const pais = document.getElementById('pais');
const nombre = document.getElementById('nombre');
const identificacion = document.getElementById('identificacion');
const apellido = document.getElementById('apellido');
const form = document.getElementById('form');
const btnGuardar = document.getElementById('btn-guardar');
const indice = document.getElementById('indice');
const titulo = document.getElementById('exampleModalCenterTitle');
const modal = document.getElementById('exampleModalCenter');


let veterinarios=[
    {
        
        nombre: "Evelin",
        apellido: "Perez",
        pais: "Mexico",
        identificacion: "18080392"
    },
    {
         nombre: "Juan",
         apellido: "Perez",
         pais: "Colombia",
         identificacion: "13051262"
    }
];


function listarVeterinarios() {
    const htmlVeterinarios = veterinarios.map((veterinario, index)=>`<tr>
        <th scope="row">${index}</th>
        <td>${veterinario.identificacion}</td>
        <td>${veterinario.pais}</td>
        <td>${veterinario.nombre}</td>
        <td>${veterinario.apellido}</td>
        <td>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
            </div>
        </td>
      </tr>`).join("");
      listaVeterinarios.innerHTML = htmlVeterinarios;
      Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index)=>botonEditar.onclick = editar(index));
      Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index)=>botonEliminar.onclick = eliminar(index));
  }
  
  function enviarDatos(evento) {
    evento.preventDefault();
    const datos = {
      nombre: nombre.value,
      apellido: apellido.value,
      pais: pais.value,
      identificacion: identificacion.value
    };
    const accion = btnGuardar.innerHTML;
    switch(accion) {
      case 'Editar':
        veterinarios[indice.value] = datos;
        break;
      default:
        veterinarios.push(datos);
        break;
    }
    listarVeterinarias();
    resetModal();
  }
  
  function editar(index) {
    return function cuandoCliqueo() {
      btnGuardar.innerHTML = 'Editar'
      titulo.innerHTML = "Editar Veterinario";
      $('#exampleModalCenter').modal('toggle');
      const veterinario = veterinarios[index];
      indice.value = index;
      nombre.value = veterinario.nombre;
      apellido.value = veterinario.apellido;
      pais.value = veterinario.pais;
      identificacion.value = veterinario.identificacion;

      $("#btn-cerrar").on("click",function() {
        indice.value = '';
        nombre.value = '';
        apellido.value = '';
        pais.value = 'País';
        identificacion.value = 'Identificacion';
        btnGuardar.innerHTML = 'Crear'
        titulo.innerHTML = "Nueva Veterinario";
     });

    $("#btn-close1").on("click",function() {
      indice.value = '';
      nombre.value = '';
      apellido.value = '';
      pais.value = 'País';
      identificacion.value = 'Identificacion';
      btnGuardar.innerHTML = 'Crear'
      titulo.innerHTML = "Nueva Veterinario";
        });

    }

  }
  
  function resetModal() {
    indice.value = '';
    nombre.value = '';
    apellido.value = '';
    pais.value = 'País';
    identificacion.value = '';
    btnGuardar.innerHTML = 'Crear'
  }
  
  function eliminar(index) {

    return function clickEnEliminar() {
      $('#exampleModalCenter2').modal('toggle');
      const veterinario = veterinarios[index];
      indice.value = index;
      nombre.value = veterinario.nombre;
      apellido.value = veterinario.apellido;
      pais.value = veterinario.pais;
      identificacion.value = veterinario.identificacion;

      $("#btn-eliminar2").on("click",function() {
        veterinarios = veterinarios.filter((veterinario, indice)=>indice !== index);
        listarVeterinarios();
        indice.value = '';
        nombre.value = '';
        apellido.value = '';
        pais.value = 'País';
        identificacion.value = '';
        btnGuardar.innerHTML = 'Crear'
        titulo.innerHTML = "Nueva Veterinario";
        });

        $("#btn-cerrar2").on("click",function() {
          indice.value = '';
          nombre.value = '';
          apellido.value = '';
          pais.value = 'País';
          identificacion.value = '';
          btnGuardar.innerHTML = 'Crear'
          titulo.innerHTML = "Nueva Veterinario";
          });

          $("#btn-cerrar5").on("click",function() {
            indice.value = '';
            nombre.value = '';
            apellido.value = '';
            pais.value = 'País';
            identificacion.value = '';
            btnGuardar.innerHTML = 'Crear'
            titulo.innerHTML = "Nueva Veterinario";
          });
          
      }
  }
  
  listarVeterinarios();
  
  form.onsubmit = enviarDatos;
  btnGuardar.onclick = enviarDatos;