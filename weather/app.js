document.addEventListener('DOMContentLoaded',()=>{

    let long;
    let lat;
    let tempIcon=document.getElementById('temp-icon');
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long =position.coords.longitude;
            lat=position.coords.latitude;
           

            const proxy='https://cors-anywhere.herokuapp.com/';
          const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a200fa17d2de56e1fc0366f78a6ebea9`;


          fetch(api)
          .then(response => response.json())
    .then(data => {
        // Log data to the console
        console.log(data);


        //get temperature,timezone,description from data
        const temperature=Math.round(data.main.temp-273);
   
        const{name}=data;
        const {id,main}=data.weather[0];
        console.log(temperature);
        console.log(main);
        console.log(name);
        console.log(id);
        document.querySelector('.temperature-degree').innerHTML =temperature;
        document.querySelector('.timezone').innerHTML =name;
        document.querySelector('.temperature-description').innerHTML =main;
        // display temperature on screen 

        if(id<232){
            tempIcon.src='/images/thunderstorm.svg';
            
            
        }else if(id<321){
            tempIcon.src='./images/drizzle.svg';

        }else if(id<531){
            tempIcon.src='./images/rain.svg';
        }else if(id<622){
            tempIcon.src='./images/snow.svg';
        }else if(id<781){
            tempIcon.src='./images/sunny.svg';
        }else if(id>804){
            tempIcon.src='./images/clear.svg';
        }
        




              
          });

        });
       


    }

});