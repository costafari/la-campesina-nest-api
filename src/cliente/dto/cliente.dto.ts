// import { Precios } from "src/precios/precios";

export class ClienteDTO {
    
    id: string;
	nombres: string;
    apellidos: string;
    nombreEmpresa: string;	
    nombreContacto: string;
    direccion: string;
    telefonoFijo: string;
    telefonoFijo2: string;
    telefonoMovil: string;
    telefonoMovil2: string;
    email: string;
    sitioWeb: string;
    notas: string;
    activo: boolean;
    // precios: Precios[];
}