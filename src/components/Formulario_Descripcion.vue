
<template>
  <slot></slot>
    <div>
        <!-- <h4>Sistema Inventario Beta V.3.0</h4> -->
      <div class="formulario">
        <br>
        <h6>Registrar Nueva Factura</h6>
        <br>
        <form @submit.prevent="Alquiler_Registrado">
          <div>
            <label class="form-label"># De factura</label>
            <input v-model.trim="Num_Fac" type="number" class="form-control" required placeholder="# De factura 1312">
          </div>
          <div>
            <label class="form-label">Descripcion de la factura</label>
            <textarea v-model.trim="Des_Fac" class="form-control form-control-lg" placeholder="¿En que estado esta la factura, Se tiene que lavar, recoger ruedo, alistar, plancar etc.?"></textarea>          
          </div>
          <div>
            <label class="form-label">Deposito</label>
            <input v-model.trim="Depo" type="number" class="form-control" required placeholder="$131,200 Etc...">
          </div><div>
            <label class="form-label">Valor De La Factura</label>
            <input v-model.trim="Val_Fac" type="number" class="form-control" required placeholder="$131,200 Etc...">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-check-label" >Fecha Entrega</label>
            <input v-model.trim="Fecha" type="date" class="form-control" required >
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-check-label">Urgente...</label>
            <input v-model.trim="Urge" type="checkbox" class="form-check-input" >
          </div>
          <div class="mb-3">
            <h5 for="imagen">Foto Vestido:</h5>
            <input type="file" @change="Cargar_Imagen" accept="imagen/*" required>
          </div>
          
        <button type="submit" class="btn btn-primary">Guardar</button>
        <button @click="Ver_Tabla" type="submit" class="btn btn-primary">Mirar Facturas</button>
        
      </form>
      
      
</div>
<Tabla_Facturas v-show="Tabla" :Alquileres="Alquileres" :Estado="Estado" />
</div>


</template>
<script>
import Tabla_Facturas from './Tabla_Facturas.vue';
import Buscador_Factura from './Buscador_Factura.vue';
import Tabla_Filtrada from './Tabla_Filtrada.vue';


export default {
    props:['filtrarFacturasProp'],
        components:{
            Tabla_Facturas,
            Buscador_Factura,
            Tabla_Filtrada
        },
    data: ()=>({
        Num_Fac:'',
        Des_Fac:'',
        Depo: '',
        Val_Fac:'',
        Urge:false,
        Fecha:'',
        Alquileres:[],
        AlquileresFiltrados: [],
        Tabla:false,
        TablaF:false,
        imagen:null


    }),
    methods:{
        Alquiler_Registrado(){
            const Alquiler = {
                Num_Fac: this.Num_Fac,
                Des_Fac: this.Des_Fac,
                Depo: this.Depo ,
                Val_Fac: this.Val_Fac,
                Fecha: this.Fecha,
                Urge: this.Urge,
                imagen:this.imagen
            }
                this.Alquileres.push(Alquiler)
                localStorage.setItem("Alquileres", JSON.stringify(this.Alquileres))
                this.Num_Fac=''
                this.Des_Fac=''
                this.Depo=''
                this.Val_Fac=''
                this.Fecha
                this.Urge=false
                this.imagen=null

        },
         Cargar_Imagen(){
          const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  this.imagen = reader.result;
                }
                console.log(file);
              reader.readAsDataURL(file);
      }
        },
              Estado(alquiler, campo){
                    alquiler[campo] = !alquiler[campo] 

      },
      Ver_Tabla(){
        this.Tabla=!this.Tabla
      },
      Filtrar(){
        this.TablaF=!this.TablaF
      },
      filtrarFacturas(numeroFactura) {
      if (numeroFactura === '') {
        this.AlquileresFiltrados = [...this.Alquileres];
        // localStorage.setItem('alquileres', JSON.stringify(this.AlquileresFiltrados))
      } else {
        this.AlquileresFiltrados = this.Alquileres.filter(
          (alquiler) => alquiler.Num_Fac === numeroFactura
        );

    }}},watch: {
    Alquileres: {
      handler(newAlquileres) {
        // Guardar los datos en el Local Storage cada vez que se actualicen
        localStorage.setItem('alquileres', JSON.stringify(newAlquileres));
      },
      deep: true, // Observar cambios profundos en el objeto Alquileres
    },
  },

  created() {
  // Cargar datos del Local Storage al iniciar el componente (si existen)
  const storedAlquileres = localStorage.getItem('alquileres');
  if (storedAlquileres) {
    this.Alquileres = JSON.parse(storedAlquileres);

    // Convertir las imágenes almacenadas a formato base64
    this.Alquileres.forEach((alquiler) => {
      if (alquiler.imagen && typeof alquiler.imagen !== 'string') {
        // Si la imagen no es una cadena (formato base64), la convertimos
        const imageUrl = URL.createObjectURL(alquiler.imagen);
        alquiler.imagen = imageUrl;
      }
    });

    this.AlquileresFiltrados = [...this.Alquileres];
  }
},
}
</script>
<style>
button{
    margin: 5px;
}
</style>