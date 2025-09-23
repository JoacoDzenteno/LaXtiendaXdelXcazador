let cuentas = new Map([
  ["ig.lopezf@duocuc.cl", "12345"],
  ["usuariogenerico@gmail.com", "54321"]
])

const dominiosValidos = ["@duocuc.cl", "@gmail.com", "@profesor.duoc.cl"]

const regiones = ["Región Metropolitana de Santiago", "Región de Arica y Parinacota", "Región de Tarapacá", "Región de Antofagasta",
  "Región de Atacama", "Región de Coquimbo", "Región de Valparaíso", "Región de O'Higgins", "Región del Maule", "Región del Ñuble",
  "Región del Biobío", "Región de la Araucanía", "Región de los Ríos", "Región de los Lagos","Región de Aysén", "Región de Magallanes"]

const arica = ["Arica", "Camarones", "General Lagos", "Putre"]
const tarapaca = ["Alto Hospicio", "Camiña", "Colchane", "Huara", "Iquique", "Pica", "Pozo Almonte"]
const antofagasta = ["Antofagasta", "Calama", "María Elena", "Mejillones", "Ollagüe", "San Pedro de Atacama", "Sierra Gorda", "Taltal", "Tocopilla"]
const atacama = ["Alto del Carmen", "Caldera", "Chañaral", "Copiapó", "Diego de Almagro", "Freirina", "Huasco", "Tierra Amarilla", "Vallenar"]
const coquimbo = ["Andacollo", "Canela", "Combarbalá", "Coquimbo", "Illapel", "La Higuera", "La Serena", "Los Vilos", "Monte Patria", "Ovalle",
  "Paihuano", "Punitaqui", "Río Hurtado", "Salamanca", "Vicuña"]
const valparaiso = ["Algarrobo", "Cabildo", "Calle Larga", "Cartagena", "Casablanca", "Catemu", "Concón", "El Quisco", "El Tabo", "Hijuelas",
  "Isla de Pascua", "Juan Fernández", "La Calera", "La Cruz", "La Ligua", "Limache", "Llaillay", "Los Andes", "Nogales", "Olmué", "Panquehue",
  "Papudo", "Petorca", "Puchuncaví", "Putaendo", "Quillota", "Quilpué", "Quintero", "Rinconada", "San Antonio", "San Esteban", "San Felipe",
  "Santa María", "Santo Domingo", "Valparaíso", "Villa Alemana", "Viña del Mar", "Zapallar"]
const santiago = ["Alhué", "Buin", "Calera de Tango", "Cerrillos", "Cerro Navia", "Colina", "Conchalí", "Curacaví", "El Bosque", "El Monte",
  "Estación Central", "Huechuraba", "Independencia", "Isla de Maipo", "La Cisterna", "La Florida", "La Granja", "Lampa", "La Pintana", "La Reina",
  "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "María Pinto", "Melipilla", "Ñuñoa", "Padre Hurtado", "Paine",
  "Pedro Aguirre Cerda", "Peñaflor", "Peñalolén", "Pirque", "Providencia", "Pudahuel", "Puente Alto", "Quilicura", "Quinta Normal", "Recoleta",
  "Renca", "San Bernardo", "San Joaquín", "San José de Maipo", "San Miguel", "San Pedro", "San Ramón", "Santiago", "Talagante", "Tiltil", "Vitacura"]
const ohiggins = ["Chépica", "Chimbarongo", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "La Estrella", "Las Cabras", "Litueche", "Lolol",
  "Machalí", "Malloa", "Marchihue", "Mostazal", "Nancagua", "Navidad", "Olivar", "Palmilla", "Paredones", "Peralillo", "Peumo", "Pichidegua",
  "Pichilemu", "Placilla", "Pumanque", "Quinta de Tilcoco", "Rancagua", "Rengo", "Requínoa", "San Fernando", "Santa Cruz", "San Vicente"]
const maule = ["Cauquenes", "Chanco", "Colbún", "Constitución", "Curepto", "Curicó", "Empedrado", "Hualañe", "Licantén", "Linares", "Longaví", "Maule",
  "Molina", "Parral", "Pelarco", "Pelluhue", "Pencahue", "Rauco", "Retiro", "Río Claro", "Romeral", "Sagrada Familia", "San Clemente", "San Javier",
  "San Rafael", "Talca", "Teno", "Vichuquén", "Villa Alegre", "Yerbas Buenas"]
const nuble = ["Bulnes", "Chillán", "Chillán Viejo", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto",
  "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"]
const biobio = ["Alto Biobío", "Antuco", "Arauco", "Cabrero", "Cañete", "Chiguayante", "Concepción", "Contulmo", "Coronel", "Curanilahue", "Florida",
  "Hualpén", "Hualqui", "Laja", "Lebu", "Los Alamos", "Los Angeles", "Lota", "Mulchén", "Nacimiento", "Negrete", "Penco", "Quilaco", "Quilleco",
  "San Pedro de la Paz", "San Rosendo", "Santa Bárbara", "Santa Juana", "Talcahuano", "Tirúa", "Tomé", "Tucapel", "Yumbel"]
const araucania = ["Angol", "Carahue", "Cholchol", "Collipulli", "Cunco", "Curacautín", "Curarrehue", "Ercilla", "Freire", "Galvarino", "Gorbea",
  "Lautaro", "Loncoche", "Lonquimay", "Los Sauces", "Lumaco", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón",
  "Purén", "Renaico", "Saavedra", "Temuco", "Teodoro Schmidt", "Toltén", "Traiguén", "Victoria", "Vilcún", "Villarrica"]
const rios = ["Corral", "Futrono", "Lago Ranco", "Lanco", "La Unión", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "Río Bueno", "Valdivia"]
const lagos = ["Ancud", "Calbuco", "Castro", "Chaitén", "Chonchi", "Cochamó", "Curaco de Vélez", "Dalcahue", "Fresia", "Frutillar", "Futaleufú",
  "Hualaihué", "Llanquihue", "Los Muermos", "Maullín", "Osorno", "Palena", "Puerto Montt", "Puerto Octay", "Puerto Varas", "Puqueldón", "Purranque",
  "Puyehue", "Queilén", "Quellón", "Quemchi", "Quinchao", "Río Negro", "San Juan de la Costa", "San Pablo"]
const aysen = ["Aysén", "Chile Chico", "Cisnes", "Cochrane", "Coyhaique", "Guaitecas", "Lago Verde", "O'Higgins", "Río Ibáñez", "Tortel"]
const magallanes = ["Antártica", "Cabo de Hornos", "Laguna Blanca", "Natales", "Porvenir", "Primavera", "Punta Arenas", "Río Verde", "San Gregorio",
  "Timaukel", "Torres del Paine"]

const comunasPorRegion = {
  "Región Metropolitana de Santiago": santiago,
  "Región de Arica y Parinacota": arica,
  "Región de Tarapacá": tarapaca,
  "Región de Antofagasta": antofagasta,
  "Región de Atacama": atacama,
  "Región de Coquimbo": coquimbo,
  "Región de Valparaíso": valparaiso,
  "Región de O'Higgins": ohiggins,
  "Región del Maule": maule,
  "Región del Ñuble": nuble,
  "Región del Biobío": biobio,
  "Región de la Araucanía": araucania,
  "Región de los Ríos": rios,
  "Región de los Lagos": lagos,
  "Región de Aysén": aysen,
  "Región de Magallanes": magallanes
}

document.addEventListener("DOMContentLoaded", function() {

  const loginForm = document.getElementById("Login");
  if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault()
      const correo = document.getElementById("correo").value.trim()
      const contrasena = document.getElementById("contraseña").value

      const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
      if (!correoValido) {
        alert("El correo no tiene un formato válido.")
        return
      }

      const dominioValido = dominiosValidos.some(dominio => correo.endsWith(dominio));
      if (!dominioValido) {
        alert("El correo debe pertenecer a un dominio válido: " + dominiosValidos.join(", "))
        return
      }

      if (!validarContrasena(contrasena)) {
        alert("La contraseña debe tener entre 4 a 10 caracteres.")
        return
      }

      if (!cuentas.has(correo) || cuentas.get(correo) !== contrasena) {
        alert("Correo o contraseña incorrectos.")
        return
      }

      alert("Login exitoso.")
    })
  }

  const registroForm = document.getElementById("Registro");
  if (registroForm) {
    registroForm.addEventListener("submit", function(event) {
      event.preventDefault()
      const rut = document.getElementById("rut").value.trim()
      const nombre = document.getElementById("nombre").value.trim()
      const apellidos = document.getElementById("apellidos").value.trim()
      const correo = document.getElementById("correo").value.trim()
      const direccion = document.getElementById("direccion").value.trim()
      const contrasena = document.getElementById("contraseña").value

      if (!validarRut(rut)) {
        alert("El RUT ingresado no es válido. Debe ser sin puntos ni guion y tener entre 7 y 9 caracteres.")
        return
      }
      if (!validarNombre(nombre)) {
        alert("El nombre debe contener solo letras, máximo 50 caracteres.")
        return
      }
      if (!validarApellidos(apellidos)) {
        alert("Los apellidos deben contener solo letras, máximo 100 caracteres.")
        return
      }
      if (!validarCorreo(correo)) {
        alert("El correo no tiene un formato válido, máximo 100 caracteres y debe terminar en un dominio permitido.")
        return
      }
      if (!validarDireccion(direccion)) {
        alert("La dirección debe tener entre 5 y 300 caracteres.")
        return
      }
      if (!validarContrasena(contrasena)) {
        alert("La contraseña debe tener entre 4 y 10 caracteres.")
        return
      }

      alert("Registro exitoso.")
    })

    mostrarRegiones()
    document.getElementById("region").addEventListener("change", mostrarComunas)
  }
})

function mostrarRegiones() {
  const select = document.getElementById("region")

  regiones.forEach(region => {
    const opcion = document.createElement("option")
    opcion.value = region
    opcion.textContent = region
    select.appendChild(opcion)
  })
}

function mostrarComunas() {
  const regionSeleccionada = document.getElementById("region")
  const comunaSeleccionada = document.getElementById("comuna")

  const region = regionSeleccionada.value
  comunaSeleccionada.innerHTML = "<option value=''>Seleccione una comuna</option>"

  if (!region || !comunasPorRegion[region]) {
    comunaSeleccionada.disabled = true
    return
  }

  const comunas = comunasPorRegion[region]

  comunas.forEach(comuna => {
    const opcion = document.createElement("option")
    opcion.value = comuna
    opcion.textContent = comuna
    comunaSeleccionada.appendChild(opcion)
  })

  comunaSeleccionada.disabled = false;
}

function validarRut(rut) {
  const rutSinPuntosGuion = /^[0-9]{7,8}[0-9kK]$/
  const reverseRut = rut.split('').reverse().slice(1, rut.length)
  const values = [2, 3, 4, 5, 6, 7]
  let counter = 0
  let total = 0
  reverseRut.forEach((char) => {
    total += parseInt(char) * values[counter%6]
    counter++
  })
  const dv = 11 - (total % 11)
  const dvEsperado = dv == 11 ? '0' : dv == 10 ? 'K' : dv.toString()
  const valido = dvEsperado == rut[rut.length-1].toUpperCase()
  return rutSinPuntosGuion.test(rut) && rut.length >= 7 && rut.length <= 9 && valido
}

function validarNombre(nombre) {
  const nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,50}$/.test(nombre)
  return nombreValido && nombre.length <= 50
}

function validarApellidos(apellidos) {
  const apellidosValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,100}$/.test(apellidos)
  return apellidosValido && apellidos.length <= 100
}

function validarCorreo(correo) {
  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo) && correo.length <= 100
  const dominioValido = dominiosValidos.some(dominio => correo.endsWith(dominio))
  return correoValido && dominioValido
}

function validarDireccion(direccion) {
  return direccion.length >= 5 && direccion.length <= 300
}

function validarContrasena(contrasena) {
  return contrasena.length >= 4 && contrasena.length <= 10
}
