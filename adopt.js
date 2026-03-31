document.addEventListener("DOMContentLoaded", () => {
    loadPage(); //creat the html structure before load the page
});

async function loadPage(){

    try{
        //first - ask for the dog data
        const idDog = getDogIdFromURL();
        
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
                const h1 = document.getElementById("Adoption-title");
                        
                // and place the data at the correct places:
                img.src = informDog.first_image_url;
                img.alt = informDog.name;
                h1.textContent = "Adopt "+informDog.name + " <3";

                //hundle the form
                const adoptForm = document.getElementById("adoptForm");

                adoptForm.addEventListener("submit", async (e) => {
                
                    e.preventDefault();//prevent refresh

                    //take what the user wrote
                    const email = document.getElementById("email").value;
                    const fullName = document.getElementById("fullName").value;
                    const phone = document.getElementById("phone").value;
                    
                    //create an object to send
                    const formData = {
                        email: email,
                        fullName: fullName,
                        phone: phone
                    };

                    try {
                        //POST
                        const response = await fetch(`https://149b5824-3c07-4832-a151-01d4f8ed4820.mock.pstmn.io/dogs/${idDog}`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(formData)
                        });

                        if (response.ok) {
                            console.log("Data sent successfully");
                            window.location.href = `thankyou.html?id=${idDog}`;
                        } else {
                            console.error("Server returned an error");
                        }
                    } 
                    catch (error) {
                        console.error("Network error:", error);
                       
                    }
            });
        }

    } catch (error) {
        console.error("Failed to load adopt form:", error);
    }
}
// https://149b5824-3c07-4832-a151-01d4f8ed4820.mock.pstmn.io   


