

// Promise Example
const getData = () => {
    return new Promise((resolve, reject) => {
        resolve({name: 'Khai', age: '19'});
        reject('something wrongs');
    })
}

getData().then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
})


var todos = (id) => {
    
}