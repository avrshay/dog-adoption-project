document.addEventListener("DOMContentLoaded", () => {
    loadPage(); //creat the html structure before load the page
});

async function loadPage(){

    try{
        //first - ask for the dog data
        const idDog = getIdPage(); 
        
        if (!idDog) {
            console.error("No ID found in URL");
            return;
        }

        const data= await fetchDogById(idDog); //return an array (1 len)
        const informDog= data[0]; //take the data from the cell array

        console.log("Data from server:", informDog);

        if (informDog) {
                // find the elements at the card
                const img = document.getElementById("image");
                const h2 = document.getElementById("name");
                        
                // and place the data at the correct places:
                img.src = informDog.first_image_url;
                img.alt = informDog.name;
                h2.textContent = informDog.name + " <3";
        }

    } catch (error) {
        console.error("Failed to load thank you page:", error);
    }
}
// https://149b5824-3c07-4832-a151-01d4f8ed4820.mock.pstmn.io   


