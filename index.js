
let networks = bcCompanies.networks
const citiesForCompanies = networks.reduce((companiesObj, Bccompany) => {
let companyName = Bccompany.company
let companies = Bccompany.location
let city = companies.city
let beforeObj = companiesObj[city] || []
return {...companiesObj,[city]: [...beforeObj,companyName]}
}, {})

const countryCodes = networks.reduce((companiesObj, Bccompany) => {
    let companyName = Bccompany.name
    let companies = Bccompany.location
    let latitude = companies.latitude
    let longitude = companies.longitude
    let countryCode = companies.country
    let beforeObj = companiesObj[countryCode] || []
    return {...companiesObj,[countryCode]: [...beforeObj,{"companyName" : companyName,"Latitude" : latitude, "Longitude" : longitude } ]}
    }, {})

const cities = {};
Object.keys(citiesForCompanies).sort().forEach(function(key) {
   cities[key] = citiesForCompanies[key];
});




// ex1 ui
$("#citiesDd").html(`<option selected> Select city</option>`+ getCitiesOptions(Object.keys(cities)))
$("#citiesDd").on("change",function(){
    console.log(this)
let companiesNames = cities[this.value] 
getCompanyNames(companiesNames)
})

/// ex1 functions
function getCitiesOptions(cities) {
    return cities.map(city => `<option value="${city}"> ${city} </option>`)
}

function getCompanyNames(companiesNames){
    $("#companiesNames").html("")
    companiesNames.forEach(companies =>{companies.forEach(function(company){ getCompany(company)}); })
        }
        function getCompany(company) {
        $("#companiesNames").append(`<li> ${company} </li>`)                
        }
    


//ex2


$("#countryC").html((getCountryNames(Object.keys(countryCodes))))
function getCountryNames(countryCodes){
  return  countryCodes.map(country => `<li><option value="${country}"  onclick = getLocation(this.value) >${(country)}</option>  </li>`)                
}

function getLocation(country) {
    let companyWithLocation =  countryCodes[country]
    $("#companiesLocations").html("")
    getCompanyLocation(companyWithLocation)
}

function getCompanyLocation(location){
    location.map(company =>  {
        console.log(company)
    $("#companiesLocations").append(`<li class="liBox"> <b>${company.companyName}</b>  <br> <b>Location- X:</b>${company.Latitude} <b>Y:</b> ${company.Longitude} </li>`)
    })
}
   
        
        
    





   

