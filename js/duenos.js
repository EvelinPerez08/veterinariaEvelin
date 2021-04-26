const listaDuenos = document.getElementById('lista-duenos');
const pais = document.getElementById('pais');
const nombre = document.getElementById('nombre');
const identificacion = document.getElementById('identificacion');
const apellido = document.getElementById('apellido');
const form = document.getElementById('form');
const btnGuardar = document.getElementById('btn-guardar');
const indice = document.getElementById('indice');
const titulo = document.getElementById('exampleModalCenterTitle');
const modal = document.getElementById('exampleModalCenter');


let duenos=[
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

function listarDuenos() {
    const htmlDuenos = duenos.map((dueno, index)=>`<tr>
        <th scope="row">${index}</th>
        <td>${dueno.identificacion}</td>
        <td>${dueno.pais}</td>
        <td>${dueno.nombre}</td>
        <td>${dueno.apellido}</td>
        <td>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
            </div>
        </td>
      </tr>`).join("");
      listaDuenos.innerHTML = htmlDuenos;
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
        duenos[indice.value] = datos;
        break;
      default:
        duenos.push(datos);
        break;
    }
    listarDuenos();
    resetModal();
  }
  
  function editar(index) {
    return function cuandoCliqueo() {
      btnGuardar.innerHTML = 'Editar'
      titulo.innerHTML = "Editar Dueño"
      $('#exampleModalCenter').modal('toggle');
      const dueno = duenos[index];
      indice.value = index;
      nombre.value = dueno.nombre;
      apellido.value = dueno.apellido;
      pais.value = dueno.pais;
      identificacion.value = dueno.identificacion;


      $("#btn-cerrar").on("click",function() {
        indice.value = '';
        nombre.value = '';
        apellido.value = '';
        pais.value = 'País';
        identificacion.value = '';
        btnGuardar.innerHTML = 'Crear'
        titulo.innerHTML = "Nuevo Dueño";
     });

    $("#btn-close1").on("click",function() {
      indice.value = '';
      nombre.value = '';
      apellido.value = '';
      pais.value = 'País';
      identificacion.value = '';
      btnGuardar.innerHTML = 'Crear'
        titulo.innerHTML = "Nuevo Dueño";
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
      const dueno = duenos[index];
      indice.value = index;
      nombre.value = dueno.nombre;
      apellido.value = dueno.apellido;
      pais.value = dueno.pais;
      identificacion.value = dueno.identificacion;

      $("#btn-eliminar2").on("click",function() {
        duenos = duenos.filter((dueno, indice)=>indice !== index);
        listarDuenos();
        indice.value = '';
        nombre.value = '';
        apellido.value = '';
        pais.value = 'País';
        identificacion.value = '';
        titulo.innerHTML = "Nuevo Dueño";
        btnGuardar.innerHTML = 'Guardar';
        });

        $("#btn-cerrar2").on("click",function() {
           indice.value = '';
           nombre.value = '';
           apellido.value = '';
           pais.value = 'País';
           identificacion.value = '';
          titulo.innerHTML = "Nuevo Dueño";
          btnGuardar.innerHTML = 'Guardar';
          });

          $("#btn-cerrar5").on("click",function() {
            indice.value = '';
            nombre.value = '';
            apellido.value = '';
            pais.value = 'País';
            identificacion.value = '';
            btnGuardar.innerHTML = 'Crear'
              titulo.innerHTML = "Nuevo Dueño";
              });
          }
      }
    
  
  listarDuenos();
  
  form.onsubmit = enviarDatos;
  btnGuardar.onclick = enviarDatos;