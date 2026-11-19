const store = {
    name : "Noon" ,
    city : "Cairo",
    phone : "01012345678"
}


document.querySelector("#store_name").innerHTML = "Noon";
document.querySelector("#store_info").innerHTML = ` ${store.city}  | ${store.phone}`;


const cart = [
    {name : "galaxy Tab Ultra",
     price : 500,
     qty : 4  
    },
    {name : "apple MacBook",
     price : 700,
     qty : 5 
    },
    {name : "iphone 18 pro",
     price : 400,
     qty : 4  
    }
]
cart.push(
    {
        name : "headphones",
        price : 1500 ,
        qty : 6
    }
)
cart.unshift(
    {
        name : "Gift",
        price : 0 ,
        qty : 1
    }
)
cart.pop();
cart.shift();


const cart_list = document.querySelector("#cart");
cart_list.innerHTML = "";
for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const item_total = item.price * item.qty;
    cart_list.innerHTML += 
    ` <li> ${item.name.toUpperCase()}  - ${item.price} EGP  *  ${item.qty}  =  ${item_total} EGP </li> `
} 

document.querySelector("#count").innerHTML = `You have ${cart.length} items in your cart`;

let total = 0;
for (let i = 0 ; i < cart.length; i++) {
    total += cart[i].price * cart[i].qty;
}

document.querySelector("#total").innerHTML =
` Total : ${total.toFixed(2)} EGP`

const shippings = document.querySelector("#shipping");
if (total > 1000) {
    shippings.innerHTML = "shipping free got You !";
}
else{
    let Remaining = 1000 - total;
    shippings.innerHTML = `Add ${Remaining} EGP more for free shipping`;
}















