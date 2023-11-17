document.addEventListener("DOMContentLoaded", function () {
    const locationSelect = document.getElementById("locationSelect");
    const parkTypeSelect = document.getElementById("parkTypeSelect");
    const searchButton = document.getElementById("searchButton");
  
    loadDropdown(locationSelect, locationsArray);
    loadDropdown(parkTypeSelect, parkTypesArray);
    loadParksTable(nationalParksArray);
  
    searchButton.addEventListener("click", function () {
      filterParks();
    });
  });
  
  function loadDropdown(select, data) {
    const valueNone = new Option("None");
    select.appendChild(valueNone);
  
    for (const item of data) {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      select.appendChild(option);
    }
  }
  
  function loadParksTable(parks) {
    const table = document.getElementById("parksTable");
    table.innerHTML = "";
  
    const headerRow = table.insertRow();
    const headers = ["Name", "Location", "Phone", "Fax", "Address", "City", "State", "Zip Code"];
    for (const headerText of headers) {
      const header = document.createElement("th");
      header.textContent = headerText;
      headerRow.appendChild(header);
    }
  
    for (const park of parks) {
      const row = table.insertRow();
      const cellName = row.insertCell(0);
      const cellLocation = row.insertCell(1);
      const cellPhone = row.insertCell(2);
      const cellFax = row.insertCell(3);
      const cellAddress = row.insertCell(4);
      const cellCity = row.insertCell(5);
      const cellState = row.insertCell(6);
      const cellZipCode = row.insertCell(7);
  
      cellName.textContent = park.LocationName;
      cellLocation.textContent = park.State;
      cellPhone.textContent = park.Phone ? park.Phone : '';
      cellFax.textContent = park.Fax ? park.Fax : '';
      cellAddress.textContent = park.Address ? park.Address : '';
      cellCity.textContent = park.City ? park.City : '';
      cellState.textContent = park.State ? park.State : '';
      cellZipCode.textContent = park.ZipCode ? park.ZipCode : '';
    }
  }
  
  function filterParks() {
    const locationFilter = document.getElementById("locationSelect").value;
    const parkTypeFilter = document.getElementById("parkTypeSelect").value;
  
    let filteredParks;
  
    if (locationFilter === "None" && parkTypeFilter !== "None") {
      filteredParks = nationalParksArray.filter(function (park) {
        return park.LocationName.includes(parkTypeFilter);
      });
    } else if (locationFilter !== "None" && parkTypeFilter === "None") {
      filteredParks = nationalParksArray.filter(function (park) {
        return park.State === locationFilter;
      });
    } else if (locationFilter !== "None" && parkTypeFilter !== "None") {
      filteredParks = nationalParksArray.filter(function (park) {
        return (
          park.State === locationFilter &&
          park.LocationName.includes(parkTypeFilter)
        );
      });
    } else {
      filteredParks = nationalParksArray;
    }
  
    loadParksTable(filteredParks);
  }