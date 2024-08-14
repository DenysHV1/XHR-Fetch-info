//todo method GET first variant 
// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then((users) => {
//       const markup = users.map((user) => {
// 				return `<li>
// 	          <p><b>Name</b>: ${user.name}</p>
// 	          <p><b>Email</b>: ${user.email}</p>
// 	          <p><b>Company</b>: ${user.company.name}</p>
// 	        </li>`;
//         })
//         .join("");

// 			userList.insertAdjacentHTML("beforeend", markup);
//     })
//     .catch((error) => console.log(error));
// });





//todo method GET second variant with _limit, _sort + callbacks
//? _limit, який контролює кількість елементів у відповіді;
//? _sort, який відповідає за порядок сортування об'єктів у масиві.

//* add const
// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// const searchParams = new URLSearchParams({
// 	_limit: 5,
// 	_sort: "name",
//   });
//   searchParams.toString()

//* add event
// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUsers(users))
//     .catch((error) => console.log(error));
// });

//* add fetch
// function fetchUsers() {
//   return fetch(
//     "https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name"
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

//*add markup 
// function renderUsers(users) {
//   const markup = users
//     .map((user) => {
//       return `
//           <li>
//             <p><b>Name</b>: ${user.name}</p>
//             <p><b>Email</b>: ${user.email}</p>
//             <p><b>Company</b>: ${user.company.name}</p>
//           </li>
//       `;
//     })
//     .join("");
//   userList.insertAdjacentHTML("beforeend", markup);
// }


//todo method GET 3 variant with / get 1 element by ID / GET gallery to markup

// const postId = 2;
// // add /${postId} to fetch params

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");
// const url = `https://jsonplaceholder.typicode.com/photos`;

//*fetch
// function getElements(urlIn){
// 	return fetch(urlIn).then(response => {
// 		if (!response.ok){
// 			console.error(response)
// 		}
// 		return response.json()
// 	})
// }

//* event in then
// getElements(url).then(arr => {
// 	fetchUsersBtn.addEventListener('click', ()=> {
// 		// renderUsers (arr)
// 		renderGallery(arr)
// 		console.log(arr)
// 	})
// })

//? choice variant GET from https://jsonplaceholder.typicode.com/posts
// function renderUsers(users) {
//   const markup = users.map((user) => {
//       return `<li id="${user.id}">
//             <p><b>Title</b>: ${user.title}</p>
//             <p><b>Body</b>: ${user.body}</p>
//           </li>`;
//     }).join("");
//   userList.insertAdjacentHTML("beforeend", markup);
// }

//? choice variant / GET from https://jsonplaceholder.typicode.com/photos
// function renderGallery(gallery){
// 	const markup = gallery.map(({albumId, id, title, url, thumbnailUrl}) => {
// 		return `<li id="${albumId}">
//              <p><b>Title</b>: ${title}</p>
//              <a href="${thumbnailUrl}"><img src="${url}"></a>
//            </li>`;
//      }).join("");
// 	 userList.insertAdjacentHTML("beforeend", markup);
// }



//todo correct POST when we will send {postToAdd} to https://jsonplaceholder.typicode.com/posts
const postToAdd = {
	title: "CRUD",
	body: "CRUD is awesome!",
  };
  
  const options = {
	method: "POST",
	body: JSON.stringify(postToAdd),
	headers: {
	  "Content-Type": "application/json; charset=UTF-8",
	},
  };
const url = 'https://jsonplaceholder.typicode.com/posts';

function postContent(urlInner, optionsInner){
	return fetch(urlInner, optionsInner).then(response => {
		if(!response.ok){
			throw new Error(response.status)
		}
		return response.json()
	})
}

postContent(url, options).then(value => console.log(value)).catch(err => console.log(err))




//todo  Change value of id property to update different https://jsonplaceholder.typicode.com/posts / method PATCH 
//? метод PATCH замінює в наявному ресурсі значення, які були передані в тілі запиту. Значення ресурсу, які не передавались, лишаться без змін;
//? метод PUT повністю замінює ресурс. Значення ресурсу, які не передавались, видаляються з ресурсу.

const postToUpdate = {
	id: 1,
	body: "CRUD is really awesome!",
  };
  
  const options1 = {
	method: "PATCH",
	body: JSON.stringify(postToUpdate),
	headers: {
	  "Content-Type": "application/json; charset=UTF-8",
	},
  };
const url1 = 'https://jsonplaceholder.typicode.com/posts'

function change(urlInner, optionsInner){
	return fetch(`${urlInner}/${postToUpdate.id}`, optionsInner).then(response => {
		if(!response.ok){
			throw new Error(response.status)
		}
		return response.json()
	})
}

change(url1, options1).then(value => console.log(value)).catch(err => console.log(err))

//todo DELETE
// const postIdToDelete = 1;
//if you need delete something - `https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {method: "DELETE",}