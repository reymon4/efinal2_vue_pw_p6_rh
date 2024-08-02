<template>
  <tabla-vehiculos-vue @selectVehi="receiveVehi" ></tabla-vehiculos-vue>
  <formulario-vehiculo-vue :selectVehi="datos"  v-if="showForm"></formulario-vehiculo-vue>
</template>

<script>
import TablaVehiculosVue from "@/components/TablaVehiculos.vue";
import FormularioVehiculoVue from "@/components/FormularioVehiculo.vue";
export default {
  data() {
    return {
      datos: null,
      showForm: false,

    };
  },
  components: {
   TablaVehiculosVue,
    FormularioVehiculoVue

  },
  methods: {
    receiveVehi(data) {
      this.datos = data;
      console.log("Datos en la pag padre", this.datos);
      this.showForm = true;
    },
  },
};
</script>

<style></style>
