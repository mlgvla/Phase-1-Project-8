// define variables
let form = document.getElementById('search');
//this is for the api
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com',
		'X-RapidAPI-Key': 'bfec5af1cfmshf4511437f8c9695p1f533cjsn634c4e1618d5'
	}
};

//function to get the value from the users 
function addCityandState(city, state)
{
  let url = `https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/${state}/city/${city}/0`
  return url
}

// call a listener for the form, after the submission start the fetch()
form.addEventListener('submit',function(e){
  e.preventDefault();
  //get the input from the users
  let City = document.getElementById('city').value;
  let State = document.getElementById('state').value;
  fetch(addCityandState(City,State), options)
	.then(response => response.json())
	.then(data => {
  
    let table = document.getElementById('table'); 
    console.log(data.restaurants)

    //convert the data to array
    let getData = Object.entries(data.restaurants); //is this necessary?
   
    for (const restaurant of data.restaurants) {
      let latitude = restaurant.latitude
      let longitude = restaurant.longitude
      let name = restaurant.restaurantName
      let hours = restaurant.hoursInterval
      let website = restaurant.website
      let zipCode = restaurant.zipCode
      let phone = restaurant.phone
      let address = restaurant.address

      console.log(latitude, longitude, name, hours, website, zipCode, phone, address)
    }
    // for loop to loop all the data available
    // for(let i=0;i<getData.length;i++){
    //   let latitude = JSON.stringify(getData[i][1].latitude);
    //   let longitude = JSON.stringify(getData[i][1].longitude);
    //   let Name = JSON.stringify(getData[i][1].restaurantName);
    //   let Hours = JSON.stringify(getData[i][1].hoursInterval);
    //   let website = JSON.stringify(getData[i][1].website);
    //   let zipCode = JSON.stringify(getData[i][1].zipCode);
    //   let phone = JSON.stringify(getData[i][1].phone);
    //   let address = JSON.stringify(getData[i][1].address);
    //   let html = `<thead>
    //  <tr class="table-info">
    //    <th scope="col">#</th>
    //    <th scope="col">Restaurant's name</th>
    //    <th scope="col">Restaurant's website link</th>
    //    <th scope="col">Hours</th>
    //    <th scope="col">Address</th>
    //    <th scope="col">Zip Code</th>
    //    <th scope="col">Phone Number</th>
    //    <th scope="col">Direction</th>
    //  </tr>
    //  </thead>
    //  <tbody>
    //  <tr class="table-light">
    //    <th scope="row">${i +1}</th>
    //    <td>${Name.replaceAll(Name[0],'')}</td>
    //    <td><p><a href="${website.replaceAll(website[0],'')}"target="_blank">${website.replaceAll(website[0],'')}></a></p></td>
    //    <td>${Hours.replaceAll(Hours[0],'')}</td>
    //    <td>${address.replaceAll(address[0],'')}</td>
    //    <td>${zipCode.replaceAll(zipCode[0],'')}</td>
    //    <td>${phone.replaceAll(phone[0],'')}</td>
    //    <td><p><a href="https://www.google.com/maps/place/${Name.replaceAll(Name[0],'')}/@${latitude.replaceAll(latitude[0],'')},${longitude.replaceAll(longitude[0],'')},17z" target="_blank">Link to Google Map!</a></p></td>
    //  </tr>
    //  </tbody
    //  `
    //  //this step = document.innerHTML
    //  table.insertAdjacentHTML("beforeend",html);
    // }
  })

	.catch(err => console.error(err));

})

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const Switch = document.getElementById('switchtoggle');

Switch.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});
