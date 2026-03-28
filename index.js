document.addEventListener("DOMContentLoaded", () => {
    loadPage(); //creat the html structure before load the page
});

async function loadPage(){
// load all the dogs at once
    try{
        //first - ask for the dogs data
        const dogs= await fetchAllDogs();

        //it returns all the dogs cards from the html that it found on the css file
        const dogsCards = document.querySelectorAll(".dogCard");      

        // fill the card for each dog with the json
        dogsCards.forEach((card, i) => {
            const dog = dogs[i]; //take the dog at the place i at the json and place it at the i card
            if (dog) {
                // find the elements at the card div
                const img = card.querySelector("img");
                const h2 = card.querySelector("h2");
                const link = card.querySelector("a");

                // and place the data at the correct places:
                img.src = dog.first_image_url;
                h2.textContent = dog.name;
                link.textContent = "More Info";
                link.href = `dog.html?id=${1+i}`; //open the correct dog when click
            }
        })
        ;

    } catch (error) {
        console.error("Failed to load dogs:", error);
    }
}
// https://149b5824-3c07-4832-a151-01d4f8ed4820.mock.pstmn.io   


