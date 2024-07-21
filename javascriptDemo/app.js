
const form = document.getElementById("form");
const body = document.getElementById("body");


function loadTableData() {
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    storedData.forEach(data => {
        const tr = document.createElement("tr");
        const tdEmail = document.createElement("td");
        const tdCity = document.createElement("td");
        const tdAddress = document.createElement("td");

        tdEmail.textContent = data.email;
        tdCity.textContent = data.city;
        tdAddress.textContent = data.address;

        tr.appendChild(tdEmail);
        tr.appendChild(tdCity);
        tr.appendChild(tdAddress);

        body.appendChild(tr);
    });
}


function saveFormData(email, address, city) {
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    storedData.push({ email, address, city });
    localStorage.setItem('formData', JSON.stringify(storedData));
}


form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = e.target.inputEmail4.value;
    const address = e.target.inputAddress.value;
    const city = e.target.inputCity.value;

    saveFormData(email, address, city);

    const tr = document.createElement("tr");
    const tdEmail = document.createElement("td");
    const tdCity = document.createElement("td");
    const tdAddress = document.createElement("td");

    tdEmail.textContent = email;
    tdCity.textContent = city;
    tdAddress.textContent = address;

    tr.appendChild(tdEmail);
    tr.appendChild(tdCity);
    tr.appendChild(tdAddress);

    body.appendChild(tr);


    form.reset();
});


window.onload = loadTableData;


/*
const form = document.getElementById("form");
const body = document.getElementById("body");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("submitted");

  let email = e.target.inputEmail4.value;
  let address = e.target.inputAddress.value;
  let city = e.target.inputCity.value;

  const tr = document.createElement("tr");


  let emailTd = document.createElement("td");
  emailTd.textContent = email;
  tr.appendChild(emailTd);

 
  let addressTd = document.createElement("td");
  addressTd.textContent = address;
  tr.appendChild(addressTd);


  let cityTd = document.createElement("td");
  cityTd.textContent = city;
  tr.appendChild(cityTd);


  body.appendChild(tr);

  
  form.reset();
});
*/