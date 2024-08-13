//todo в фоновом режиме запрос уходит на сервер с которого получим ответ

//*-------object XHR--------(XMLHttpRequest)

const url = 'https://jsonplaceholder.typicode.com/users';

function sendRequest (method, urlInside, body = null) {
	return new Promise ((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, urlInside);
		xhr.responseType = 'json' //что бы не писать JSON.parse( )
		xhr.setRequestHeader('Content-Type', 'application/json') //Нужен когда метод POST // Устанавливаем заголовок для POST-запросов
		xhr.onload = () => {
			if (xhr.status >= 400){
				reject(xhr.response)
			}else{
				resolve(xhr.response)
			}
		}
		
		xhr.onerror = () => {
			reject(xhr.response);
		}
		xhr.send(JSON.stringify(body));
	});
}

sendRequest('GET', url).then(arr => {
	console.log(arr)
}).catch(arr => {
	console.log(arr)
})

const body = {
	name: 'Denys',
	age: 26
}

sendRequest('POST', url, body).then(arr => {
	console.log(arr)
}).catch(arr => {
	console.log(arr)
})