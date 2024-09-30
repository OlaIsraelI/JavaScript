//1. Produc Class to store id, name, and price of the product

class Product{
  constructor(id, name, price){
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

//2. ShoppingCartItem class to store product and it's quantity

class ShoppingCartItem{
  constructor(product, quantity){
    this.product = product; //instances of product
    this.quantity = quantity //Quantity of qunatities
  }

  //3. Method to calculate the total price of the items

  getTotalPrice(){
    return this.product.price * this.quantity;
  }
}

//4. ShoppingCart class to manage 

class ShoppingCart{
  constructor(){
    this.items = []; //Array to store ShoppingCartItem instances.
  }

  //5. Methos to Add Items to the Cart.

  addItem (product, quantity){
    const existingItem = this.items.find(item => item.product.id === product.id);

  if (existingItem){
    existingItem.quantity += quantity; //Increase quantity if item already exists
  } else{
    const newItem = new ShoppingCartItem(product, quantity);
    this.items.push(newItem); //Add New item to the Cart
  }
}

//6. Method to remove items from the cart

    removeItem(productId){
      this.items = this.items.filter(item => item.product.id !== productId);
}


//7. Method to get the total of items inside the Cart

  getTotal(){
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
}

//8. Method to display Cart Items

displayItems (){
  if(this.items.length === 0){
    console.log("The Cart is Empty");

    return ;
  }

  console.log("Shopping Cart Items: ");
  this.items.forEach(item => {
    console.log(`${item.product.name} (ID: ${item.product.id}) - Quantity: ${item.quantity} - Total Price: $${item.getTotalPrice().toFixed(2)}`);
  });

    console.log(`Total Amount: $${this.getTotal().toFixed(2)}`);
  }
}


//9. Testing the Ability of our Objects
//10. Create Product

const product1 = new Product (1, "Laptop", 999.99);
const product2 = new Product (2, "Smartphone", 499.99);
const product3 = new Product (3, "Tablet", 299.99);

//11. Create a Shopping Cart
const shoppingCart = new ShoppingCart();

//12. Add items to the Cart
shoppingCart.addItem(product1, 1); //Add 1 Laptop
shoppingCart.addItem(product2, 2); //Add 2 SmartPhones
shoppingCart.addItem(product3, 3); //Add 3 Tablets

//13. Display the Cart
shoppingCart.displayItems();

//14. Remove an Item from the Cart 
shoppingCart.removeItem(2); //Remove Smartphone by ID

//15. Display the Cart again to see the updated items
shoppingCart.displayItems();

