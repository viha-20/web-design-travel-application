
	var price1;
	var price2;
	var price3;
	var price4;
	var price5;
	var price6;
	var price7;
	var price8;
	var quantityArray =[];
	var productArray =[];
	var priceArray =[];
	var alertMessage =[];


function shopedProduct1(){
	price1=document.getElementById('product1').value*1500;	
	window.alert(document.getElementById('product1').value+" Coconut Shell Handmade bag is added to your cart Rs"+price1);
	quantityArray.push(document.getElementById('product1').value);
	productArray.push("Coconut Shell Handmade bag");
	priceArray.push(price1);
	
}

function shopedProduct2(){
	price2=document.getElementById('product2').value*10000.00;	
	window.alert(document.getElementById('product2').value+" Srilankan Traditional Mask is added to your cart Rs "+price2);
	quantityArray.push(document.getElementById('product2').value);
	productArray.push("Srilankan Traditional Mask");
	priceArray.push(price2);
}

function shopedProduct3(){
	price3=document.getElementById('product3').value*8000.00;	
	window.alert(document.getElementById('product3').value+" Coconut Shell Crafts is added to your cart. Rs"+price3);
	quantityArray.push(document.getElementById('product3').value);
	productArray.push("Coconut Shell Crafts");
	priceArray.push(price3);
}

function shopedProduct4(){
	price4=document.getElementById('product4').value*1250.00;	
	window.alert(document.getElementById('product4').value+" Coconut Shell Crafts is added to your cart. Rs"+price4);
	quantityArray.push(document.getElementById('product4').value);
	productArray.push("Coconut Shell Crafts");
	priceArray.push(price4);
}

function shopedProduct5(){
	price5=document.getElementById('product5').value*4000.00;	
	window.alert(document.getElementById('product5').value+" Coconut Shell HandMade added to your cart. Rs"+price5);
	quantityArray.push(document.getElementById('product5').value);
	productArray.push("Coconut Shell HandMade");
	priceArray.push(price5);
}

function shopedProduct6(){
	price6=document.getElementById('product6').value*7500.00;	
	window.alert(document.getElementById('product6').value+" Key Chain is added to your cart. Rs"+price6);
	quantityArray.push(document.getElementById('product6').value);
	productArray.push("Key Chain");
	priceArray.push(price6);
}

function shopedProduct7(){
	price7=document.getElementById('product7').value*3000.00;	
	window.alert(document.getElementById('product7').value+" Drop Earrings is added to your cart. Rs"+price7);
	quantityArray.push(document.getElementById('product7').value);
	productArray.push("Drop Earrings");
	priceArray.push(price7);
}

function shopedProduct8(){
	price8=document.getElementById('product8').value*65000.00;	
	window.alert(document.getElementById('product8').value+" Srilankan Wooden Peacock Mask is added to your cart. Rs"+price8);
	quantityArray.push(document.getElementById('product8').value);
	productArray.push("Srilankan Wooden Peacock Mask");
	priceArray.push(price8);
}


function validateForm(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var address = document.getElementById("address").value;
	var credit = document.getElementById("Cnumber").value;
	var mobile = document.getElementById("Mnumber").value;
	var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
	
	if(name.length < 3){
		alert("Name must be filled out");
		return false;
	}
	
	
	if(!email.match(mailformat)){
		alert("Email must be filled out");
		return false;
	}
	
	
	if(address==""){
		alert("Address must be filled out");
		return false;
	}

	if(credit==""){
		alert("Credit card number must be filled out");
		return false;
	}

	if(mobile.length < 9){
		alert("Mobile Number must be filled out");
		return false;
	}

	var totalPrice=0;
	var i;
	for(i = 0; i < productArray.length; i++){
		var tempString = quantityArray[i] + " x " + productArray[i] + " - Rs " + priceArray[i];
		alertMessage.push(tempString);
		totalPrice += priceArray[i];
	}
	
	
	window.alert("Customer name : "+document.getElementById('name').value + "\nCustomer Email : "+document.getElementById("email").value + "\nYour order summary : \n" + alertMessage.join("\n") + "\nYour total is Rs " + totalPrice.toString() + "\nThank you for shopping with VLTV Travels online shop.\nYour products will be delivered within soon.")

}
