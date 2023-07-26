
<template>
    <div class="table-responsive">
        <h3>Todas Sus Facturas</h3>

        <table class="table table-dark">
            <thead>
                <tr>
                    <!-- <th>Id</th> -->
                    <th>#_Factura</th>
                    <th>Descripción_Factura</th>
                    <th>Deposito</th>
                    <th>Valor_Factura</th>
                    <th>Fecha Entrega</th>
                    <th>Foto</th>
                    <th>Urgente</th>
                    <th>Entregado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(alquiler, index) in Alquileres" :key="index">
                    <!-- <td>{{ index + 1 }}</td> -->
                    <td>{{alquiler.Num_Fac}}</td>
                    <td>{{alquiler.Des_Fac}}</td>
                    <td>{{alquiler.Depo}}</td>
                    <td>{{alquiler.Val_Fac}}</td>
                    <td>{{ alquiler.Fecha }}</td>
                    <td ><img :src="alquiler.imagen" alt=" imagen de {{ alquiler.Num_Fac }}" style="width: 150px;height:100px" @click="ampliarImagen(index)" ></td>
                    <td @click="Estado(alquiler, 'Urge')" :class="alquiler.Urge?'bg-success':'bg-danger'">{{ alquiler.Urge?"SI":"NO" }}</td>
                    <td @click="Estado(alquiler, 'Entregado')" :class="alquiler.Entregado?'bg-success':'bg-danger'">{{ alquiler.Entregado?"Entregado":"Por Entregar" }}</td>

                </tr>
            </tbody>
        </table> 
        <div v-if="imagenAmpliadaIndex !== null" class="zoom" @click="cerrarImagenAmpliada">
            <img :src="Alquileres[imagenAmpliadaIndex].imagen" alt="Imagen ampliada" @click.stop/>
        </div>   
    </div>
</template>
<script>
export default {
    props: ['Alquileres','Estado'],
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
    
}
</script>
