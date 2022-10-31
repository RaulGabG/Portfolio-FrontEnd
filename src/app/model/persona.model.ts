export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    fechaNac: string;
    celular: string;
    correo: string;
    url_foto: string;
    mainSkill: string;
    acercaDe: string;

    constructor(nombre: string, apellido: string, fechaNac: string, celular: string, correo: string, url_foto: string, mainSkill: string, acercaDe: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNac = fechaNac;
        this.celular = celular;
        this.correo = correo;
        this.url_foto = url_foto;
        this.mainSkill = mainSkill;
        this.acercaDe = acercaDe;
    }
}