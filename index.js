/*
 console.log(username); 
username = prompt("what is your username:");
username = Elert("what is your username:");
document.getElementById("mySubmit").onclick = function(){ }
document.getElementById("myH1").textContent = `Welcome ${username}`;
let price = document.getElementById("price").value;

subResult.textContent = `You are Subcribed`;
mySubmit.onclick = function(){
price = Number(price);

if (condition) {
    // This code runs if the condition is TRUE
} else {
    // This code runs if the condition is FALSE
}
*/
    const customerName = document.getElementById("customerName");
    const productName = document.getElementById("productName");
    const myP1 = document.getElementById("myP1");
    const myP2 = document.getElementById("myP2");

    const myName = document.getElementById("myName");
    const myProduct = document.getElementById("myProduct");
    const myStatus = document.getElementById("myStatus");
    let orders = [];

    let isPaid = true;
    let paid;
    function addOrder() {
        
       let customer =customerName.value.trim();
       let product = productName.value.trim(); 
    if (customer === "" || product === ""){

        myP1.textContent = "Please Enter a Customer Name and Procuct name";
        myP1.style.color = "red";
       return;
    }  
   
    orders.push({
        customer: customer,
        product: product,
       
    });
    customerName.value = "";
    productName.value = "";
       displayOrders() 
    } 
    
    function displayOrders() {
    // I-clear ang display area para hindi mag-duplicate ang listahan
    myP2.innerHTML = "<h3>Order List:</h3>";

    orders.forEach((order, index) => {
        // Ternary Operator: shortcut sa if-else (Senior Dev style!)
        let currentStatus = order.status ? "✅ Paid" : "❌ Pending";
        
        // I-display ang listahan na may kasamang index
        myP2.innerHTML += `
           <div class="div1">
        <table>
            <tr>
                <th>Name</th>
                <th>Product</th>
                 <th>Status</th>
            </tr>
            <tr>
                <td id="myName">  ${order.customer}</td><br>
                <td id="myProduct">${order.product}</td>
                <td id="myStatus">${currentStatus}</td>
            </tr>
        </table>
    </div>
        `;
       
    });
}
