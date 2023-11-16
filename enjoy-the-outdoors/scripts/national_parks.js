document.addEventListener("DOMContentLoaded", function () {
  // Get references to HTML elements
  const locationSelect = document.getElementById("locationSelect");
  const parkTypeSelect = document.getElementById("parkTypeSelect");
  const parksTable = document.getElementById("parksTable");
  const searchButton = document.getElementById("searchButton");

  // Populate location dropdown
  loadDropdown(locationSelect, locationsArray);

  // Populate park type dropdown
  loadDropdown(parkTypeSelect, parkTypesArray);

  // Load parks into the table
  loadParksTable(nationalParksArray);

  //Event listeners for dropdown changes
  searchButton.addEventListener("click", function () {
    filterParks();
  });
});

// Function to load dropdown with data
function loadDropdown(select, data) {
  data.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    select.appendChild(option);
  });
}

// Function to load parks into the table
function loadParksTable(parks) {
  const tableBody = document.getElementById("parksTableBody");
  tableBody.innerHTML = "";

  parks.forEach((park) => {
    const row = tableBody.insertRow();
    const cellName = row.insertCell(0);
    const cellLocation = row.insertCell(1);
    const cellType = row.insertCell(2);

    cellName.textContent = park.Name;
    cellLocation.textContent = park.State;
    cellType.textContent = park.LocationName;
  });
}

// Function to filter parks based on dropdown selections
function filterParks() {
  const locationFilter = document.getElementById("locationSelect").value;
  const parkTypeFilter = document.getElementById("parkTypeSelect").value;

  const filteredParks = nationalParksArray.filter((park) => {
    const locationMatch = locationFilter === "All" || park.State === locationFilter;
    const typeMatch = parkTypeFilter === "All" || park.LocationName.includes(parkTypeFilter);

    return locationMatch && typeMatch;
  });

  loadParksTable(filteredParks);
}
