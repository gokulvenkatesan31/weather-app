const apiKey="4be678d7892572285bd927c35289d48c";
let displayElement=document.querySelector(".js-display-card")

async function fetchApi(city){
    try{
        let response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`) 
        data= await response.json()
        console.log(data)
        displayWeater(data);
    }
    catch(error){    
        // displayError(error);
    }
}

function displayWeater(data){

    displayElement.innerHTML="";
    displayElement.style.display="none"

    let html=`
    <img class="img-size" src="https://dhanushkumardev.github.io/Weather-App/images/Rain.png">
    <h1 class="city">${data.name}</h1>
    <p class="temperature">${(data.main.temp-273.25).toFixed(1)}°</p>
    <p class="disc">climate: ${data.weather[0].main}</p>`
    displayElement.classList.toggle("haze-color")
    displayElement.innerHTML=html;
    displayElement.style.display="block"
}

document.querySelector(".js-submit").addEventListener("click",()=>{
    let city= document.querySelector(".js-input").value
    console.log(city)
    fetchApi(city)

})  