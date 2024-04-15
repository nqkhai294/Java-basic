const getNewTodo = async(id) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (response && response.status !== 200) {
        throw new Error ('Something wrongs with status: '+ response.status);
        //reject
    }
    let data = await response.json(); 
    return data;
    //resolve
}

getNewTodo('1').then(data => {
    console.log('>>> get data: ', data);
}).catch(err => {
    console.log(err.message);
}) 