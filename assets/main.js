let a= Number(prompt('Введите стоимость товара'));
let b = Number(prompt('Введите вашу сумму'));


if(a==b){
    message = ('Покупка совершена');
}else{
    if(a <b){
        let x= b - a;
        message =('Покупка совершена. Сдача: '+ x +'р.');
    }else if(a > b){
        let x= a - b;
        message =('Для покупки не хватает: '+ x +'р.');
    }
}
let text = document.querySelector('.text')
text.textContent = message
text.style.background = '#6269AC'
text.style.padding='20px'
