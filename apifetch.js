// let curr = 6;
// // fetch('https://jsonplaceholder.typicode.com/todos')
// //   .then(response => response.json())
// //   .then(json => console.log(json[curr]))
// const a = async()=>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data = await response.json();
//     const obj = JSON.parse(data);
// }
// a()
var count=0;
function countdo(){
   count++;
}

const users = fetch('https://jsonplaceholder.typicode.com/users').then(res => {
    return res.json();
})
.then(user  => {

    console.log(user[count])
    let header = document.querySelector('p');
    header.innerHTML = user[count].id + '<br>' + user[count].username+ '<br>' + user[count].email
})




