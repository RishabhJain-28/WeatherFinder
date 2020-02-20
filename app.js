const ui = new UI();
const storage = new Storage();
const weatherLocation = storage.getLocationData();
//const cityz = 'london',statez = 'uk';
const weather = new Weather(weatherLocation.city,weatherLocation.state);

document.addEventListener('DOMContentLoaded',getWeather);

document.getElementById('w-change-btn').addEventListener('click',(e)=>{

    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    weather.changeLocation(city,state);
    storage.setLocationData(city,state);
    getWeather();
    //close modal
    $('#locModal').modal('hide');
});

function getWeather(){
    weather.getWeather().then(data =>{
        console.log(data);
        ui.paint(data);

    })
    .catch(err => console.log( err ));
}
