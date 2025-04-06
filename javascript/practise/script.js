// console.log('Hello world');

// XMLHttpRequest
const rqst = new XMLHttpRequest();
rqst.open('GET', 'https://restcountries.com/v3.1/name/eesti');
rqst.send();

rqst.addEventListener('load', () => {
    let [data] = JSON.parse(rqst.responseText);
    console.log(data);
    console.log('The country is ' + data.name.common)

    let neighbors = [...data.borders];

    console.log('The borders informations is: ')
    for (let i = 0; i < neighbors.length; i++) {
        console.log(neighbors[i])
        const rqst2 = new XMLHttpRequest();
        rqst2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbors[i]}`);
        rqst2.send();
        rqst2.addEventListener('load', () => {
            let [neighbors_data] = JSON.parse(rqst2.responseText);
            console.log(neighbors_data.name.common);
        })
    }
})


// fetchAPI
let apicall = fetch('https://restcountries.com/v3.1/name/eesti')
    .then((response) => response.json())
    // .then((data) => console.log(data[0].borders[0]));
    .then((data) => {
        for (let i = 0; i < data[0].borders.length; i++) {
            fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[i]}`)
                .then((response) => response.json())
                .then(data => console.log(data[0].name.common)); // The returned value is the fulfilled value of a promise.
        }
    })
console.log(apicall)