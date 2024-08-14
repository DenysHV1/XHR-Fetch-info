//todo в фоновом режиме запрос уходит на сервер с которого получим ответ

//*-------fetch()--------


// method POST
// const url1 = 'https://jsonplaceholder.typicode.com/users';

// const body = {
// 	name: 'Denys',
// 	age: 26
// }

// function sendRequest1 (method, urlInside, body = null) {
// 	return fetch(urlInside, {
// 		method: method,
// 		body: JSON.stringify(body),
// 		headers: {
// 			'Content-Type': 'application/json'
// 		}
// 	}).then(response => {
// 		// return response.text()
// 		if(response.ok){
// 			return response.json()
// 		}else{
// 			return response.json().catch(err => {
// 				console.log(`Error ${err}`)
// 			})
// 		}
// 	})
// }

// sendRequest1('POST', url1, body).then(arr => {
// 	console.log(arr)
// }).catch(arr => {
// 	console.log(arr)
// })



// method GET
// const url = 'https://jsonplaceholder.typicode.com/users';

// function sendRequest (urlInside){
// return fetch(urlInside).then(response => {
// 	if(response.ok){
// 		return response.json();
// 	}else{
// 		throw new Error(response.status);
// 	}
// })
// }

// sendRequest(url).then(data =>{console.log(data)}).catch(error => {console.log(error)});


// fetch(url).then(response =>{return console.log(response.json())})