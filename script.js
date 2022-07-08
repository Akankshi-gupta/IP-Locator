//complete the below functions
// write code just below every comment that is guiding you :)

async function makeRequest(ip_address) {
  //generate url according to passed ip address https://ipapi.co/ip_address/json/ and store it variable called url
  const url = `https://ipapi.co/${ip_address}/json/`;

  // make HTTP GET request to that url and store it to variable called response
  let response = await fetch(url);
  let data = await response.json();
  return data;




  // convert response variable to JSON and store it to variable called data


  // return the variable data
}


async function fetchIp() {

  // grab the element you declared by ID ip_input in index.html and take it's value and store it to variable called ip_address
  let ip_address = document.getElementById("ip_input").value;

  // call the makeRequest(ip_address) and store it result to variable called data
  const data = await makeRequest(ip_address);


  // parse the ip from data and store it variable called ip
   const ip = data['ip']; 

  // parse the city from data and store it variable called city
  const city = data['city'];

  // parse the region from data and store it variable called region
  const region = data['region'];

  // parse the country_code from data and store it variable called country_code
  const country_code = data['country_code'];

  // parse the country_name from data and store it variable called country_name
  const country_name = data['country_name'];

  // parse the country_capital from data and store it variable called country_capital
  const country_capital = data['country_capital'];

  // parse the currency from data and store it variable called currency

  const currency = data['currency'];


  // grab the #ip id and set innert text to value of ip variable
  document.getElementById('ip').innerText = ip;

  // grab the #city id and set innert text to value of city variable
  document.getElementById('city').innerText = city;

  // grab the #region id and set innert text to value of region variable
  document.getElementById('region').innerText = region;

  // grab the #country_code id and set innert text to value of country_code variable
  document.getElementById('country_code').innerText = country_code;

  // grab the #country_name id and set innert text to value of country_name variable
  document.getElementById('country_name').innerText = country_name;

  // grab the #country_capital id and set innert text to value of country_name variable

  document.getElementById('country_capital').innerText = country_capital;
  // grab the #currency id and set innert text to value of currency variable
  document.getElementById('currency').innerText = currency;

  

}

