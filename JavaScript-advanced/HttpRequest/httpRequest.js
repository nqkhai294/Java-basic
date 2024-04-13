var request = new XMLHttpRequest();

request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log('>>> check res: ', request.responseText);
    }
};

request.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
request.send();