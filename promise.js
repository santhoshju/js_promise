function1 = (name1) =>{
    let index = document.querySelector('h1');
    index.innerHTML = name1;
}


function2 = () => {
    let index = document.querySelector('h1');
    index.innerHTML  = "function2 is called";
}

// imporant part of the call back function;
function mainfunction(variable) {
    console.log(variable);
    variable("saran")
}

mainfunction(name1 =>{
    let index = document.querySelector('h1');
    index.innerHTML = name1;
});


// for each in callback

arr =['santhodh','sound','paru','suba'];
 
arr.forEach(print);

function print(val){
    console.log(val);
}


var x = new Promise((resolve,reject) => {
    reject("test");

});
x.then(x => console.log("supccess",x));
x.catch(x => console.log("error",x));

