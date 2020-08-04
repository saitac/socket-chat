class Persona {

    constructor(id, nombre, sala) {
        this.id = id;
        this.nombre = nombre;
        this.sala = sala;
    }
}

class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregaPersona(id, nombre, sala) {
        let persona = new Persona(id, nombre, sala);
        this.personas.push(persona);
        return this.personas;
    }

    getPersona(id) {
        // let persona = this.personas.find( (persona) => persona.id === id );
        let persona = this.personas.filter(persona => {
            return persona.id === id;
        })[0];
        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => {
            return persona.sala === sala;
        });
        return personasEnSala;
    }

    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);
        this.personas = this.personas.filter(persona => persona.id !== id);
        return personaBorrada;
    }

}

module.exports = {
    Usuarios
};