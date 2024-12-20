// A mock function to mimic making an async request for data
export function fetchProduct() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8081/products');
      if (!response.ok) {
        throw new Error("Product not found");
      }
      const data = await response.json();
      // // console.log(data);
      resolve({ data });
    } catch (err) {
      console.error("Error fetching products:", err.message);
      reject(err); // Ensure the promise rejects on errors
    }
  });
}
export function addNewProduct(product) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8081/products', {
        method: "POST",
        body: JSON.stringify(product),
        headers: { "Content-Type": "application/json" }
      });
      if (!response.ok) {
        throw new Error("Product not found");
      }
      const data = await response.json();
      // // console.log(data);
      resolve({ data });
    } catch (err) {
      console.error("Error fetching products:", err.message);
      reject(err); // Ensure the promise rejects on errors
    }
  });
}
export function updateProduct(product) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8081/products/'+ product.id, {
        method: "PATCH",
        body: JSON.stringify(product),
        headers: { "Content-Type": "application/json" }
      });
      if (!response.ok) {
        throw new Error("Product not found");
      }
      const data = await response.json();
      // // console.log(data);
      resolve({ data });
    } catch (err) {
      console.error("Error fetching products:", err.message);
      reject(err); // Ensure the promise rejects on errors
    }
  });
}
export function deleteProduct(product) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8081/products/'+ product.id, {
        method: "DELETE",
        body: JSON.stringify(product),
        headers: { "Content-Type": "application/json" }
      });
      if (!response.ok) {
        throw new Error("Product not found");
      }
      const data = await response.json();
      // // console.log(data);
      resolve({ data });
    } catch (err) {
      console.error("Error fetching products:", err.message);
      reject(err); // Ensure the promise rejects on errors
    }
  });
}
