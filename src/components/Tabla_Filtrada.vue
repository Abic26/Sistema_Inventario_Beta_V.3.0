<template>
    <div class="table-responsive">
        <h3>Bucar Por # De Factura</h3>
      <table class="table table-dark">
        <thead>
          <tr>
            <!-- <th>Id</th> -->
            <th>#_Factura</th>
            <th>Descripción_FacturaF</th>
            <th>Deposito</th>
            <th>Valor_Factura</th>
            <th>Fecha Entrega</th>
            <th>Foto</th>
            <th>Urgente</th>
            <th>Entregado</th>
          </tr>
        </thead>
        <tbody v-if="AlquileresFiltrados.length > 0">
          <tr v-for="(alquiler, index) in AlquileresFiltrados" :key="index">
            <!-- <td>{{ index + 1 }}</td> -->
            <td>{{ alquiler.Num_Fac }}</td>
            <td>{{ alquiler.Des_Fac }}</td>
            <td>{{ alquiler.Depo }}</td>
            <td>{{ alquiler.Val_Fac }}</td>
            <td>{{ alquiler.Fecha }}</td>
            <td ><img :src="alquiler.imagen" alt=" imagen de {{ alquiler.Num_Fac }}" style="width: 150px;height:100px" @click="ampliarImagen(index)" ></td>
            <td @click="Estado(alquiler, 'Urge')" :class="alquiler.Urge?'bg-success':'bg-danger'">{{ alquiler.Urge?"SI":"NO" }}</td>
            <td
              @click="Estado(alquiler, 'Entregado')" 
              :class="alquiler.Entregado ? 'bg-success' : 'bg-danger'"
            >{{ alquiler.Entregado ? "Entregado" : "Por Entregar" }}</td>
          </tr>
        </tbody>
            <tbody v-else>
                    <tr  class="text-center">
                        <th colspan="12">La Factura Que Busca No Existe</th>
                    </tr>
            </tbody>
      </table>
      <div v-if="imagenAmpliadaIndex !== null" class="zoom" @click="cerrarImagenAmpliada">
            <img :src="AlquileresFiltrados[imagenAmpliadaIndex].imagen" alt="Imagen ampliada" @click.stop/>
        </div> 
    </div>
  </template>
  
  <script>
  export default {
    props: ['AlquileresFiltrados','Estado'],
    data: ()=>({
        imagenAmpliadaIndex: null,
    }),methods: {
        ampliarImagen(index) {
            this.imagenAmpliadaIndex = index;
  },
        cerrarImagenAmpliada() {
              this.imagenAmpliadaIndex = null;
  },
},
  };
  </script>
