function addToPOS(id) {
	var scannedProduct = id;
	var posCart = [];
	var currency = localStorage.brandcurrency;
	var price = Number(localStorage.getItem("product"+scannedProduct+"price"));  // get selected product's price
	var name = localStorage.getItem("product"+scannedProduct+"name");  // get product name
	var qty = 1;  // get quantity
	var imageUrl = localStorage.getItem("product"+scannedProduct+"image1"); //get product image url

	var item = {productName: name, productPrice: price, productQty: qty, productImageUrl: imageUrl};
	
	if(localStorage.getItem("cartPOS") === null){
		//console.log("Cart doesn't exist: ");
		posCart.push(item);
	}else{
		posCart = JSON.parse(localStorage.getItem("cartPOS"));
		for (var i in posCart) {
			//console.log(posCart[i].productName);
			if(posCart[i].productName == name){
				posCart[i].productQty += qty; 
				saveCartPOS(posCart);
				addToCartPOSP(scannedProduct);
				//showPOSCart(posCart);
				return
	        }
	    }
		posCart.push(item);
	}    	
	saveCartPOS(posCart);
	//showPOSCart(posCart);
	addToCartPOSP(scannedProduct);
}

function addToCartPOSP(id) {
	var cartPOSP = [];
	var currency = localStorage.getItem("brandcurrency");
	var channel = "POS";
	var price = Number(localStorage.getItem("product"+id+"price"));  // get selected product's price
	var name = localStorage.getItem("product"+id+"name");  // get product name
	var qty = 1;  // get quantity
	var imageUrl = localStorage.getItem("product"+id+"image1"); //get product image url
	var itemPOSP = {SKU: name, priceTotal: price, quantity: qty, name: name, product: imageUrl, productAddMethod: channel};

	if(localStorage.getItem("cartPOSP") === null){
		cartPOSP.push(itemPOSP);
	}else{
		cartPOSP = JSON.parse(localStorage.getItem("cartPOSP"));
		for (var i in cartPOSP) {
			//console.log("cartPOSP: " + cartPOSP[i].name);
			if(cartPOSP[i].SKU == name){
				cartPOSP[i].quantity += qty; 
				saveCartPOSP(cartPOSP);
				return
	        }
	    }
		cartPOSP.push(itemPOSP);
	}    	
	saveCartPOSP(cartPOSP);
}

function saveCartPOSP(cartPOSP) {
	localStorage.setItem("cartPOSP", JSON.stringify(cartPOSP));
}

function saveCartPOS(cartPOS) {
	localStorage.setItem("cartPOS", JSON.stringify(cartPOS));
}

function showPOSCart(posCart) {
	var count = Object.keys(posCart).length;
	console.log("Show Cart - " + count + " items in cart.");
	for (var i in posCart) {
		var item = posCart[i];
		console.log("Product in Cart " + i + " - Name: " + item.productName + " - Price: " +  item.productPrice + " - Qty: " + item.productQty + " - URL: " + item.productUrl + " - Image: " + item.productImageUrl);
	}
}