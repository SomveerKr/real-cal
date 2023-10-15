const LocationAskingBtn = document.getElementById("show-advanced-cal");

document.addEventListener("DOMContentLoaded", ()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess);
    }else{
        console.log("Your browser not support");
    }
});

function onSuccess(position){
    let {latitude, longitude} = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=5d32b60cdc38485e8f631a92832296ae`)
    .then(response => response.json()).then(response =>{
        let allDetails = response.results[0].components;
        console.table(allDetails);
        let {county, postcode, country} = allDetails;
        console.log(`${county} ${postcode}, ${country}`)
    }).catch(()=>{
       console.log("Something went wrong")
    });
}

