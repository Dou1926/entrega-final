class Buscador{
    constructor(datosingresados){
        this.informacion= datosingresados;
    }

    Busca(busquedausuario){
        const resultado =this.informacion.filter(entradaInput =>entradaInput.titulo.toloWerCase().inclues(busquedausuario))

        return resultado;
       
            
        }

    }
}