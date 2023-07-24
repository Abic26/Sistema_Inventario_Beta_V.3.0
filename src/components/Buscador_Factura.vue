<template>
  <div class="mb-3">
    <label for="buscarFactura" class="form-label">Buscar por factura:</label>
    <input v-model.trim="buscarFactura" @input="filtrarFacturas" type="number" class="form-control" id="buscarFactura" placeholder="Ingrese el número de factura">
  </div>
</template>

<script>
export default {
  data() {
    return {
      buscarFactura: "",
    };
  },
  methods: {
    filtrarFacturas() {
      this.$emit("filtrar", this.buscarFactura);
    },
  },
};
</script>