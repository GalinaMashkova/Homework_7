function go()
{
    var name = document.getElementById('name').value
    var age = parseFloat(document. getElementById('age').value)
    
    var str = `Привет ${name}, вам ${age}!`;
    

    if (age >=18) {
        str = str + 'Вам можно проголосовать!'
    };
    
    document. getElementById('out'). innerText = str;
    document. getElementById('name'). value = ""
    console.log(`Привет ${name}, вам ${age}, Вам можно проголосовать!`);
}

function send()
{
    number = document.getElementById("number").value
              
    var str = `Вы проголосовали за - `;
              
    if (number == 1) {
        str = str + 'Британская кошка'
    };    
    if (number == 2) {
        str = str + 'Шотландская кошка'
    }
    if (number == 3) {
        str = str + 'Оба варианта'
    }
    if (number >= 4) {
        str = str + 'Ваш голос не принят'
    }
    document.getElementById('out1').innerText = str;
    console.log(`${str}`);           
}