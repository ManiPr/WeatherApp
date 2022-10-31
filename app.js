let searchBoxInput=document.querySelector('.search-box')

let apiData = {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=',
    key: '8a23e6ebd788309e64451d3b637fc706'
}

function feth(){
    fetch(`${apiData.url}${searchBoxInput.value}&&appid=${apiData.key}`).
    then(res => res.json())
    .then(data => {
        showData(data)
    })
}
function showData (data) {
    let tempElem = document.querySelector('.temp')
    let cityElem = document.querySelector('.city')
    let dateElem = document.querySelector('.date')
    let weatherElem = document.querySelector('.weather')
    let tempsElem = document.querySelector('.hi-low')
    if(data.message==='city not found'){
        tempElem.innerHTML ='There is no country' 
        cityElem.innerHTML = '--'
        tempsElem.innerHTML = '--'
        dateElem.innerHTML = '--'
        weatherElem.innerHTML = '--'
    }
    else{
       
        cityElem.innerHTML = `${data.name}, ${data.sys.country}`
    
      
        dateElem.innerHTML = showDate()
    
       
        tempElem.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c`
    
       
        weatherElem.innerHTML = `${data.weather[0].main}`
    
      
        tempsElem.innerHTML = `${Math.floor(data.main.temp_min - 273.15)}°c / ${Math.floor(data.main.temp_max - 273.15)}°c`
    }

}
function showDate () {
    
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let now = new Date()

    let day = days[now.getDay()]
    let month = months[now.getMonth()]
    let year = now.getFullYear()
    let date = now.getDate()
    
    return `${day} ${date} ${month} ${year}`

}

searchBoxInput.addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
        feth()
    }
})