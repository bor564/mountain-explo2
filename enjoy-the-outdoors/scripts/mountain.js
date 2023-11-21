document.addEventListener("DOMContentLoaded", function () {
  // Get references to HTML elements
  
  const mountainSelect = document.getElementById("mountainSelect");
  const mountainInfoDiv = document.getElementById("mountainInfoDiv");

  window.onload = intit;

  function intit() {
    loadDropdown();
  }
  

  function displayMountainInfo() {
    const selectedMountain = mountainSelect.value;
    const mountain = mountainsArray.find((m) => m.name === selectedMountain);

    if (mountain) {
      const mountainInfo = `
              <h2>${mountain.name}</h2>
              <p>Description: ${mountain.desc}</p>
              <p>Elevation: ${mountain.elevation} feet</p>
              <p>Effort: ${mountain.effort}</p>
              <!-- Add more information as needed -->
  
              <!-- Optional: Display mountain image -->
              <img src="/enjoy-the-outdoors/images/${mountain.img}" alt="${mountain.name}">
          `;

      mountainInfoDiv.innerHTML = mountainInfo;
    } else {
      mountainInfoDiv.innerHTML = "<p>No information available for the selected mountain.</p>";
    }
  }

  function loadDropdown() {
    for (const mountain of mountainsArray) {
      let option = new Option(mountain.name);
      mountainSelect.appendChild(option);
    }
  }
  

  // Event listeners for dropdown changes

  mountainSelect.addEventListener("change", function () {
    displayMountainInfo();
  });
});

// Function to display information about the selected mountain
