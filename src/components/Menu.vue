<template>
    <div id="contenido">
        <h4>Sistema Inventario Beta V.2.6.0</h4>
        <button @click="Componente_Actual= 'Formulario_Descripcion'" class="btn btn-outline-success me-2" type="button">Facturas</button>
        <button @click="Componente_Actual= 'Formulario_Filtro'" class="btn btn-sm btn-outline-secondary" type="button">Filtrar Facturas</button>    
        <component :is="Componente_Actual"></component>
        <nav class="navbar bg-black-tertiary">
            <form class="container-fluid justify-content-start">
            </form>
        </nav>
    </div>
</template>
<script>
import Formulario_Descripcion from './Formulario_Descripcion.vue';
import Formulario_Filtro from './Formulario_Filtro.vue';
import Tabla_Facturas from './Tabla_Facturas.vue';
import Tabla_Filtrada from './Tabla_Filtrada.vue';


export default {
  components :{
    Formulario_Descripcion,
    Formulario_Filtro,
    Tabla_Facturas,
    Tabla_Filtrada
},
data:()=>({
    Componente_Actual: 'Formulario_Descripcion'
})
}       
</script>