const obtenerDigimonAsyncAwait = async() => {
    try{
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');

        if (!response.ok){
            throw new Error('hubo un problema al obtener los datos del digimon');
        }

        const data = await response.json();
        return data;
    }   catch (error){
        throw error;
    }
 }

    //ejemplo de uso
    (async function(){
        try {
            const data = await obtenerDigimonAsyncAwait();
            console.log('Datos de digimon obtenido con exito',data);
        } catch (error){
            console.error('error al obtener datos de digimon',error);
        }
})();