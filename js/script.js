

let button = document.getElementById('calculate');

button.addEventListener('click', function(){
    let km = parseInt(document.getElementById('km').value);
    let age = parseInt(document.getElementById('age').value);
    let name = document.getElementById('name').value;

    let price = km * 0.21;
    let message = ``;
    let discount_perc;

    if (age === 0) {
        discount_perc = '/';
       // message += `Il prezzo del biglietto è di: ${price}€`;

    }
    else if (age === 1){
        discount_perc = '20%';
        price = price * 0.8;
        //message += `Il costo del tuo biglietto è scontato del 20%.Il prezzo del biglietto è di: ${price}€`;
    }
    else{
        discount_perc = '40%';
        price = price * 0.6;
        //message += `Il costo del tuo biglietto è scontato del 40%.Il prezzo del biglietto è di: ${price}€`;
    }

    document.getElementById('price').innerText = message;
    document.getElementById('show-name').innerText = name;
    document.getElementById('show-km').innerText = km;
    document.getElementById('show-price').innerText = price.toFixed(2)+'€';
    document.getElementById('show-discount').innerText = discount_perc;

});