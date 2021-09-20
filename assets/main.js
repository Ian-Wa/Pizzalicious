
var pizzaSizePrice = {small: 650 , medium: 850, large: 1350};
var pizzaCrustPrice = {stuffed: 100, cheese: 150, cracker: 50};
var pizzaToppingsPrice = {pepperoni: 200, bacon: 250, sausage: 100};
var pizzaValues = [];
var sizePrice , crustPrice, toppingsPrice;

function Pizza(variety,size,crust,toppings){
    this.variety = variety;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}


$(document).ready(function(){
    $(".variety").change(function(){
        var variety = $(this).children("option:selected").val();
        pizzaValues.push(variety);
        console.log(variety);
        console.log(pizzaValues);
    }) 
    $(".size").change(function(){
        var size = $(this).children("option:selected").val();
        pizzaValues.push(size);
        console.log(size);
    }) 
    $(".crust").change(function(){
        var crust = $(this).children("option:selected").val();
        pizzaValues.push(crust);
        console.log(crust);
    })
    $("select.toppings").change(function(){
        var toppings = $(this).children("option:selected").val();
        pizzaValues.push(toppings);
        console.log(toppings);
    })

    // var order = new Pizza(pizzaValues);
    if (pizzaValues[1] === "small"){
        sizePrice = pizzaSizePrice[small]
    }else if (pizzaValues[1] === "medium"){
        sizePrice = pizzaSizePrice[medium]
    }else if (pizzaValues[1] === "large"){
        sizePrice = pizzaSizePrice[large]
    }
  
})
