const axios = require('axios');
let Planet = require('./planet');

let promesse = new Promise((resolve, reject) => {
    let planet = [] ;
    axios.get('https://swapi.co/api/planets/')
    .then((response) => {
        let resultas = response.data.results; 
        resultas.forEach(plan => {
            planet.push(new Planet(plan.name, plan.population));
        });
        resolve(planet);   
    })
    .catch(function (error) {
        console.log(error);
    })
});
promesse.then((data) => {
    console.log(data);
    console.log("La somme de Population : " + Planet.countPlanetsPopulation(data));    
});

