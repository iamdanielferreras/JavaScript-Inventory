
    const customerName = document.getElementById("customerName");
    const productName = document.getElementById("productName");
    const myP1 = document.getElementById("myP1");
    const myP2 = document.getElementById("myP2");
    let orders = [];

    function addOrder() {
       let customer =customerName.value;
       let product = productName.value; 

       myP1.textContent = `${customer}`;
       myP2.textContent = `${product}`;
       
    } 