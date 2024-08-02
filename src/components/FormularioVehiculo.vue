<template>
  <div class="container">
    <div class="form">
      <h1>Formulario Vehículo</h1>

      <div class="form-group">
        <label for="placa">Placa</label>
        <input type="text" v-model="placa" @click="hiddenMessage" :disabled="!showButton"/>
      </div>
      <div class="form-group">
        <label for="marca">Marca</label>
        <input type="text" v-model="marca" @click="hiddenMessage" :disabled="!showButton"/>
      </div>
      <div class="form-group">
        <label for="modelo">Modelo</label>
        <input type="text" v-model="modelo" @click="hiddenMessage" :disabled="!showButton"/>
      </div>
      <div class="form-group">
        <label for="color">Color</label>
        <input type="text" v-model="color" @click="hiddenMessage" :disabled="!showButton"/>
      </div>
      <div class="form-group">
        <label for="precio">Precio</label>
        <input type="number" v-model="precio" @click="hiddenMessage" :disabled="!showButton"/>
      </div>
      
      <button @click="guardar" v-if="showButton">Guardar</button>
    </div>

    <h3 v-if="showMessage">{{ message }}</h3>
  </div>
</template>

<script>
import { getByPlacaFacade } from "../helpers/clienteVehiculo.js";
import { saveFacade } from "../helpers/clienteVehiculo.js";
export default {
  props: {
    selectVehi: {
      type: Object,
      required: true,
      default: null,
    },
  },

  data() {
    return {
      placa: null,
      marca:null,
      modelo:null,
      color:null,
      precio:null,
      showMessage: false,
      showButton: true,
      message: "¡Se ha guardado exitosamente el vehículo!",
    };
  },
  methods: {
    async guardar() {
      const vehiculo = {
        placa: this.placa,
        marca: this.marca,
        modelo: this.modelo,
        color: this.color,
        precio: this.precio,
      };
      console.log("Vehiculo", vehiculo);
      const data = await saveFacade(vehiculo);
      this.showMessage = true;
      this.reset();
    },
    reset() {
      this.placa = null;
      this.marca = null;
      this.modelo = null;
      this.color = null;
      this.precio = null;
    },
    async consultar(link) {
      const data = await getByPlacaFacade(link);
      this.placa = data.placa;
      this.marca = data.marca;
      this.modelo = data.modelo;
      this.color = data.color;
      this.precio = data.precio;
      this.showButton = false;
    },
    hiddenMessage() {
      this.showMessage = false;
    },
  },
  watch: {
    selectVehi: {
      handler(newVal) {
        if (newVal) {
          console.log("Datos recibidos en el form", newVal);
          this.consultar(newVal);
           this.showMessage = false;
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style>

</style>
