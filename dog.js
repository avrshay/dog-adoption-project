window.addEventListener("DOMContentLoaded", loadPage); //Loading all page elements before displaying them

async function loadPage(){
// all the elements we need from dog.html
    const title=document.getElementById("nameDog");
    const image= document.getElementById("dogImage");
    const name= document.getElementById("Name");
    const breed= document.getElementById("Breed");
    const age= document.getElementById("Age");
    const sex= document.getElementById("Sex");
    const houseTrained= document.getElementById("HouseTrained");
    const vaccinated= document.getElementById("Vaccinated");
    const story= document.getElementById("Story");
    const buttonAdopt= document.getElementById("buttonAdopt");
    const buttonNext= document.getElementById("next-bth");
    const buttonPrev= document.getElementById("prev-bth");
    const buttonBackAll= document.getElementById("buttonBackAll");
    try{

        const idDog= getDogIdFromURL();

        const inform= await fetchDogById(idDog);
        const informDog= inform[0];
        const imageDog=informDog.first_image_url;
        const nameDog= informDog.name;
        const ageDog= informDog.age;
        const breedDog= informDog.breed;
        const sexDog= informDog.sex;
        const house_trainedDog= informDog.house_trained;
        const vaccinatedDog= informDog.vaccinated;
        const storyDog= informDog.story;

        //Placing the appropriate values in the elements
        image.src=imageDog;
        image.alt= "the"+ nameDog +"image";
        title.textContent= nameDog+" Details"
        name.textContent= "Name: "+nameDog;
        breed.textContent= "Breed: "+breedDog;
        age.textContent= "Age: "+ageDog;
        sex.textContent= "Sex: "+sexDog;
        houseTrained.textContent="house trained: "+ formatBoolean(house_trainedDog);
        vaccinated.textContent="vaccinated: " + formatBoolean(vaccinatedDog);
        story.textContent="Story:"+storyDog;
        buttonAdopt.href= `adopt.html?id=${idDog}`;
        if(idDog<6){
        buttonNext.style.display= "inline-block";
        const nextDog=idDog+1;
        buttonNext.href= "dog.html?id="+nextDog;
        }
        if(idDog>1){
        buttonPrev.style.display= "inline-block";
        const prevDog=idDog-1;
        buttonPrev.href= "dog.html?id="+prevDog;        }
    }
    catch(error){
    console.error("error",error)}
}


