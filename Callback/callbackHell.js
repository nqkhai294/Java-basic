var  todos = (id, callback) => {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        var data = xmlhttp.responseText;
        callback(undefined, data);
        } else if(xmlhttp.readyState === 4 && xmlhttp.status !== 200) {
        callback("Something Error!", undefined);
    }
    }
   
    xmlhttp.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
    xmlhttp.send();
}

todos(1, (error, data) => {
    if (error) {
    console.log('>>> calling callback with Error: ', error);
    }
    if (data) {
        console.log('>>> calling callback with Data: ', data);
        todos(2, (error, data) => {
            if (error) {
                console.log('>>> calling callback with Error: ', error);
                }
                if (data) {
                    console.log('>>> calling callback with Data: ', data);
                }
        })
    }
})