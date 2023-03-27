
/* stampa i numeri da 1 a 100 con condizioni FIzzBuzz su 3 e 5 */
let containerHTML = document.querySelector(".container");

for(let i = 1; i<=100; i++){

    let createDiv = document.createElement('div'); /* create a div */

    if( i % 3 == 0 && i % 5 == 0 ){
        createDiv.className = 'box box-yellow'; /* add classes to the div */
        createDiv.innerHTML = 'FizzBuzz'; /* write in the div */
    } else if(i % 3 == 0){
        createDiv.className = 'box box-green'; /* add classes to the div */
        createDiv.innerHTML = 'Fizz'; /* write in the div */
    } else if(i % 5 == 0){
        createDiv.className = 'box box-blue'; /* add classes to the div */
        createDiv.innerHTML = 'Buzz'; /* write in the div */
    } else{
        createDiv.className = 'box'; /* add classes to the div */
        createDiv.innerHTML = i; /* write in the div */
    }

    containerHTML.append(createDiv); /* add the div with such classes to the container */
}
