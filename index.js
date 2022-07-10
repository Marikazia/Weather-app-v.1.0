// api.openweathermap.org/data/2.5/weather?q=London

// Fetch API предоставляет интерфейс JavaScript для работы с запросами и ответами HTTP - почитать

// fetch('http://api.openweathermap.org/data/2.5/weather?q=Vienna,at&appid=bd65ebc574124aad3d2245acb435931d') 

// .then(function (resp) { return resp.json() })  // будет выполнено, когда fetch отработает
// // функция получит результат ответа fetch и преобразует в json формат - то есть
// // получит строку и преобразует в массив
// .then(function (data) { // выполнится после предыдущей функции и получит обработанные данные
//     console.log(data);


 
const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "1d72818f3ec58cf275fccaaad5b344e1"
}
function getWeather() {
	let ct = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${ct}&appid=${param.appid}`).then(weather => {
			return weather.json();
		}).then(showWeather);
}
function showWeather(data) {
	console.log(data);
    // document.querySelector('#city').onchange = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg';
    document.querySelector('.description').textContent = data.weather[0]['description'];
    document.querySelector('.img').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
	// здесь вы выводите на страницу
}
getWeather();
document.querySelector('#city').onchange = getWeather;




//----------------------Робочий------------------


// function getWeather() {
// 	let ct = document.querySelector('#city').value;
//     // fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
// 	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ct}&appid=bd65ebc574124aad3d2245acb435931d`)
//         .then(weather => {
// 			return weather.json();
// 		}).then(showWeather);
// }

// function showWeather(data) {
// 	console.log(data);
//     // document.querySelector('#city').onchange = data.name;
//     document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg';
//     document.querySelector('.description').textContent = data.weather[0]['description'];
//     document.querySelector('.img').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

// 	// здесь вы выводите на страницу
// }

// getWeather();
// document.querySelector('#city').onchange = getWeather;

// .catch(function () {
//     //catch any errors
// });


//------------------------------------------------------
















// // fetch('https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=1d72818f3ec58cf275fccaaad5b344e1')
// //     .then(function (resp) {return resp.json() }) //convert data to json
// //     .then(function (data) {
// //         console.log(data);
// //         console.log(data.name);
// //         console.log(data.sys);
// //         console.log(data.sys.country);
// //         document.querySelector('#city').textContent = data.name;
// //         document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) +'&deg'
// //         document.querySelector('.description').textContent = data.weather[0]['description'];
// //         document.querySelector('.img').innerHTML = `<img src="${data.weather[0][icon]}"`

// //     })

// const param = {
// 	"url" : "https://api.openweathermap.org/data/2.5/",
// 	"appid" : "1d72818f3ec58cf275fccaaad5b344e1"
// }

// function getWeather() {
//     const cityId = document.querySelector('#city').value;
//     fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`).then(weather => {
//         return weather.json();
//     }).then(showWeather).then(function (data) {
//             console.log(data);
//             document.querySelector('.container').innerHTML = data;
//             document.querySelector('#city').textContent = data.name;
//             document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg';
//             document.querySelector('.description').textContent = data.weather[0]['description'];
//             document.querySelector('.img').innerHTML = `<img src="${data.weather[0][icon]}"`;
//     }
// }
        
        
//         })
//         //     console.log(data.name);
//         //     console.log(data.sys);
//         //     console.log(data.sys.country);
//         //     document.querySelector('#city').textContent = data.name;
//         //     document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) +'&deg'
//         //     document.querySelector('.description').textContent = data.weather[0]['description'];
//         //     document.querySelector('.img').innerHTML = `<img src="${data.weather[0][icon]}"`
// }
// document.querySelector('.b-1').onclick = getWeather();
// document.querySelector('#city').onchange = getWeather;
// function showWeather(data) {
//     console.log(data);
// }
// // document.querySelector('.b-1').onclick = showWeather();

