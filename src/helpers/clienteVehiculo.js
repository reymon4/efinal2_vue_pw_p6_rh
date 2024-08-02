import axios from "axios";

//Métodos de Consumo del API

const getByPlaca = async (url) => {
  const data = axios.get(`${url}`).then((r) => r.data);
  return data;
};
const save = async (vehiculo) => {
  const data = axios
    .post(`http://localhost:8080/API/v1.0/Concesionario/vehiculos`, vehiculo)
    .then((r) => r.data);
  return data;
};
const getAll = async () => {
  const data = axios
    .get(`http://localhost:8080/API/v1.0/Concesionario/vehiculos`)
    .then((r) => r.data);
  return data;
};
const deleteByPlaca = async (placa) => {
  console.log("ingresando al delete");
  const data = axios
    .delete(`http://localhost:8080/API/v1.0/Concesionario/vehiculos/${placa}`)
    .then((r) => r.data);
    console.log(data);
  return data;
};


export const getByPlacaFacade = async (url) => {
  return await getByPlaca(url);
};
export const getAllFacade = async () => {
  return await getAll();
};
export const deleteByPlacaFacade = async (placa) => {
  return await deleteByPlaca(placa);
};

export const saveFacade = async (vehiculo) => {
  return await save(vehiculo);
};
