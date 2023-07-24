<template>
    <div class="table-responsive">
        <h3>Bucar Por # De Factura</h3>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>#_Factura</th>
            <th>Descripción_FacturaF</th>
            <th>Deposito</th>
            <th>Valor_Factura</th>
            <th>Urgente</th>
            <th>Entregado</th>
          </tr>
        </thead>
        <tbody v-if="AlquileresFiltrados.length > 0">
          <tr v-for="(alquiler, index) in AlquileresFiltrados" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ alquiler.Num_Fac }}</td>
            <td>{{ alquiler.Des_Fac }}</td>
            <td>{{ alquiler.Depo }}</td>
            <td>{{ alquiler.Val_Fac }}</td>
            <td
              @click="Estado(alquiler, 'Urge')" 
              :class="alquiler.Urge ? 'bg-success' : 'bg-danger'"
            >{{ alquiler.Urge ? "SI" : "NO" }}</td>
            <td
              @click="Estado(alquiler, 'Entregado')" 
              :class="alquiler.Entregado ? 'bg-success' : 'bg-danger'"
            >{{ alquiler.Entregado ? "Entregado" : "Por Entregar" }}</td>
          </tr>
        </tbody>
            <tbody v-else>
                    <tr  class="text-center">
                        <th colspan="12">No hay datos</th>
                    </tr>
            </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: ['AlquileresFiltrados','Estado'],
  };
  </script>
