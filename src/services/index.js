import { FarmanetAxios } from "../components/FarmanetAxios";

const OBTENER_COMUNAS = process.env.REACT_APP_METADATA_COMUNAS;
const OBTENER_FARMACIAS_TURNO = process.env.REACT_APP_METADATA_FARMACIAS_TURNO;

export async function obtenerComunas() {
    return FarmanetAxios.get(`${OBTENER_COMUNAS}`);
}

export async function obtenerFarmaciasTurno(formObj) {
    return FarmanetAxios.post(`${OBTENER_FARMACIAS_TURNO}`, formObj);
}