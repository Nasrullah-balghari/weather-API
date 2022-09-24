

const apiKey = "b4e837db0964fe4849a22a767a1076c2"
let input = document.getElementById('userValue')

input.addEventListener("keypress", (event) => {
    let weatherDetail = document.getElementById('showDetails')
    let userValue = input.value
    if(event.key === "Enter"){        
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userValue}&appid=${apiKey}`)
         .then(res => res.json())
         .then( data => 
            {weatherDetail.innerHTML = `   <div class="temrpature">   
                                                        <p class="city">${data.name}</p>
                                                        <p class="city">${data.weather[0].description}</p>                                                     
                                                        <h1 class="tem">29<sup class="sup">0</sup> C</h1>
                                           </div>
                                         <div class="weatherCheak ">
                                            <img src=${data.weather[0].description === "clear sky" ? "./images/img1.png": "./images/img2.png"
                                        } alt="weather" class="weatherImg">
                                         </div>

            `}

            
         )
    }
})