<template>
  <div class="container">
    <div class="table">
      <h1>Tabla de Vehículos</h1>
      <div class="search">
        <button @click="consultar">Consultar</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ver</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="vehiculo in vehiculos" :key="vehiculo.placa">
            <td>{{ vehiculo.placa }}</td>
            <td>{{ vehiculo.marca }}</td>
            <td>{{ vehiculo.modelo }}</td>
            <td>
              <button @click="actionVer(vehiculo.links[0].href)">
                Ver
              </button>
            </td>
            <td>
              <button @click="borrar(vehiculo.placa)">Borrar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="message" v-if="borrado">
        <h3>¡Se ha borrado exitosamente el vehículo!</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllFacade, deleteByPlacaFacade } from "@/helpers/clienteVehiculo.js";

export default {

  data() {
    return {
      vehiculos: [],
      borrado: false,
    };
  },
  methods: {
    async consultar() {
      const response = await getAllFacade();
      this.vehiculos = response;
      console.log("Vehículos", this.vehiculos);
    },

    async borrar(placa) {
      console.log("Borrar", placa);
      await deleteByPlacaFacade(placa);
      this.consultar();
      this.borrado = true;
      console.log("Borrado");
    },
    actionVer(url) {
      this.$emit('selectVehi', url);
      this.borrado = false;
    }
  },
};
</script>

<style >


</style>
