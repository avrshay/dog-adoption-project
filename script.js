
async function fetchAllDogs() {
    try {
        const response = await fetch("https://149b5824-3c07-4832-a151-01d4f8ed4820.mock.pstmn.io/dogs");
        const dogs = await response.json();
        return dogs;
    } catch (error) {
        console.error("Error fetching all dogs:", error);
    }
}

async function fetchDogById(id) {
    try {
        const response = await fetch(`https://149b5824-3c07-4832-a151-01d4f8ed4820.mock.pstmn.io/dogs/${id}`);
        const dog = await response.json();
        return dog;
    } catch (error) {
        console.error("Error fetching dog by ID:", error);
    }
}