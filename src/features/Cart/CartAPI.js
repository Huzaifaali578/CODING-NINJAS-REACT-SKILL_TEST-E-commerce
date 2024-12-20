
export function addTocart(cartProduct) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8081/cart', {
        method: "POST",
        body: JSON.stringify(cartProduct),
        headers: {"content-type": "application/json"}
      });
      if (!response.ok) {
        throw new Error("Product not added in the cart")
      }
      const data = await response.json()
      // // console.log("addtoCart",data)
      resolve({data})
    } catch (err) {
      reject(err)
    }
  }
  );
}

export function fetchCartItem() {
  return new Promise(async (resolve, reject) => {
    try {
      const response =await fetch("http://localhost:8081/cart");
      if (!response.ok) {
        throw new Error("Cart Item Not Found")
      };
      const data = await response.json();
      resolve({data})
    } catch (err) {
      reject(err)
    }
  })
}

export function updatecart(update) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8081/cart/'+ update.id , {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: {"content-type": "application/json"}
      });
      if (!response.ok) {
        throw new Error("Product not added in the cart")
      }
      const data = await response.json()
      // // console.log("addtoCart",data)
      resolve({data})
    } catch (err) {
      reject(err)
    }
  }
  );
}

export function RemoveFromcart(remove) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8081/cart/'+ remove.id , {
        method: "DELETE",
        body: JSON.stringify(remove),
        headers: {"content-type": "application/json"}
      });
      if (!response.ok) {
        throw new Error("Product not added in the cart")
      }
      const data = await response.json()
      // // console.log("addtoCart",data)
      resolve({data})
    } catch (err) {
      reject(err)
    }
  }
  );
}
