 /** 
     * Valida que la cantidad de palabras este dentro del rango minimo
     *  y maximo
     * @param {string , int , int}
     * @returns {boolean}
     * @author Mario
     * */
    const cantidadPalabrasVal = (input, minimo, maximo) => {
        //Toma el string lo divide en tokens y cuenta los tokens
        let cantidad = String(input).split(/\s+/g).length ;
        if (cantidad >= minimo && cantidad <= maximo && input !== "") {
            return true;
        } else
            //console.log("La informacion es muy larga o muy corta");
            return false;
    }