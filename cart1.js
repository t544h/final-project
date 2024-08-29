var btnplus =document.getElementsByClassName("fa-plus-circle")
console.log(btnplus[0]);
var btnminus= document.getElementsByClassName('fa-minus-circle')

var quantity=document.getElementsByClassName('quantity')
console.log(quantity[0]);

var total= document.getElementsByClassName('total')
console.log(total[0]);
var price = document.getElementsByClassName('unit-price')

var heart=document.getElementsByClassName('fa-heart')
console.log(heart[0]);

var deletecard = document.getElementsByClassName('fa-trash-alt')
var card = document.getElementsByClassName('card')
console.log(card);
for (let i = 0; i < card.length; i++) {

    btnplus[i].addEventListener('click',function add() {
    
        quantity[i].innerHTML= parseInt(quantity[i].textContent)+ 1
        total[0].innerHTML= parseInt(total[0].textContent)+ parseInt(price[i].textContent)
    })
    
    btnminus[i].addEventListener('click',function minus() {
        if (parseInt(quantity[i].textContent)>=1) {
            quantity[i].innerHTML= parseInt(quantity[i].textContent)-1
            total[0].innerHTML= parseInt(total[0].textContent)- parseInt(price[i].textContent)
        }
    
    })
    
    heart[i].addEventListener('click', function like() {
      console.log( heart[i].style.color); 
        if (heart[i].style.color=='red') {
         
            heart[i].style.color='black'}
        else { heart[i].style.color='red'}
    })
    
    
    deletecard[i].addEventListener('click',function del() {
        total[0].innerHTML= parseInt(total[0].textContent)- parseInt(price[i].textContent)*parseInt(quantity[i].textContent)
       console.log(i);
        card[i].style.display='none'
    })
    
}





