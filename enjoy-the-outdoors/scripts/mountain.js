document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const locationSelect = document.getElementById('locationSelect');
    const parkTypeSelect = document.getElementById('parkTypeSelect');
    const parksTable = document.getElementById('parksTable');
    const mountainSelect = document.getElementById('mountainSelect');
    const mountainInfoDiv = document.getElementById('mountainInfo');

window.onload = intit;

function intit(){
    loadDropdown()
}
function moutainDataStorage(){
    rightDivcontainer.innerHTML = "";

    leftDivContainer.innerHTML="";
    for (const mountain of mountainsArray) {
        if (mountain.name == mountainSelect.value) {  // Fix: Change mountainSelectList to mountainSelect
            const mountainTitle = document.createElement("h2");
            mountainTitle.innerText = mountain.name;
    
            const mountainSubData = document.createElement("h5");
            mountainSubData.innerText = `Effort Level: ${mountain.effort} Elevation: ${mountain.elevation} ft.`;
            mountainSubData.className = "text-white-50";
    
            const horizontalRule = document.createElement("hr");
    
            const mountainDescription = document.createElement("p");
            mountainDescription.innerHTML = mountain.desc;
    
            // Appending the elements
            rightDivContainer.appendChild(mountainTitle);
            rightDivContainer.appendChild(mountainSubData);
            rightDivContainer.appendChild(horizontalRule);
            rightDivContainer.appendChild(mountainDescription);
    
            const mountainImg = document.createElement("img")
            mountainImg.src = "imgs/" + mountain.img;
            mountainImg.className = "w-100 rounded"
            leftDivContainer.appendChild(mountainImg);
        }
    }
    
}  

    function loadDropdown(){
        for (const mountain of mountainsArray) {
            let option = new Option(mountain.name)
            mountainSelect.appendChild(option);
        }
    }
    // Populate location dropdown

    // Event listeners for dropdown changes
    locationSelect.addEventListener('change', function () {
        filterParks();
    });

    parkTypeSelect.addEventListener('change', function () {
        filterParks();
    });

    mountainSelect.addEventListener('change', function () {
        displayMountainInfo();
    });
});

// Function to display information about the selected mountain
function displayMountainInfo() {
    const selectedMountain = mountainSelect.value;
    const mountain = mountainsArray.find(m => m.name === selectedMountain);

    if (mountain) {
        const mountainInfo = `
            <h2>${mountain.name}</h2>
            <p>Description: ${mountain.desc}</p>
            <p>Elevation: ${mountain.elevation} feet</p>
            <p>Effort: ${mountain.effort}</p>
            <!-- Add more information as needed -->

            <!-- Optional: Display mountain image -->
            <img src="images/${mountain.img}" alt="${mountain.name}">
        `;

        mountainInfoDiv.innerHTML = mountainInfo;
    } else {
        mountainInfoDiv.innerHTML = '<p>No information available for the selected mountain.</p>';
    }
}

