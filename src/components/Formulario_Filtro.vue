<template>
        <br>
        <br>
        <h6>Filtra Por Numero De Factura</h6>
        <br>
        <Buscador_Factura @filtrar="filtrarFacturas" />
        <button @click="Filtrar" type="submit" class="btn btn-primary">Filtrar Facturas</button>
        <Tabla_Filtrada v-show="TablaF" :AlquileresFiltrados="AlquileresFiltrados" :Estado="Estado" />

</template>
<script>
import Buscador_Factura from './Buscador_Factura.vue';
import Tabla_Filtrada from './Tabla_Filtrada.vue';


export default {
    props:['filtrarFacturasProp'],
        components:{
            Buscador_Factura,
            Tabla_Filtrada
        },
    data: ()=>({
        Num_Fac:'',
        Des_Fac:'',
        Depo: '',
        Val_Fac:'',
        Urge:'',
        Alquileres:[],
        AlquileresFiltrados: [],
        Tabla:false,
        TablaF:false


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
            }
                this.Alquileres.push(Alquiler)
                localStorage.setItem("Alquileres", JSON.stringify(this.Alquileres))
                this.Num_Fac=''
                this.Des_Fac=''
                this.Depo=''
                this.Val_Fac=''
                this.Fecha
                this.Urge=false

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