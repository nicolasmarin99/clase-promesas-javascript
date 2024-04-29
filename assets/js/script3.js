//funcion para mostrar los digimones en cards

const mortrarDigimon = async ()=>{
    const digimonRow = document.getElementById('digimonRow');
    try{
        const digimones = await obtenerDigimonAsyncAwait();
        digimones.map((digimon)=> {
            const cardCol = document.createElement('div');
            cardCol.classList.add('col-sm-4');


            const card = document.createElement('img');
            cardImg.classList.add('card-img-top');
            cardImg.src = digimon.img;

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent=digimon.name;

            const cardText = document.createElement('p');
            cardText.classList.add('card-text');
            cardText.textContent = `nivel: ${digimon.level}`;

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            card.appendChild(cardImg);
            card.appendChild(cardBody);
            cardCol.appendChild(card);
            digimonRow(cardCol);
        });

    }catch(error){
        console.error('Error al obtener datos de digimon',error);
    }
}