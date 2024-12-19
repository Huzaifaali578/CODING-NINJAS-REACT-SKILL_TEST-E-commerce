# React E-Commerce App with Tailwind CSS

This is a fully functional e-commerce application built using React and styled with Tailwind CSS. The application provides a seamless shopping experience, including product listing, cart management, and checkout features. It interacts with a backend API powered by json-server for data management.

Features

1. Product Display
<ul>
<li>Dynamic Product Listing: Fetch and display products from the backend.</li>
<li>Product Details Page:View detailed information about each product.
including price, description, and images.</li>
</ul>

2. Cart Management
<ul>
<li>Add to Cart: Add products to the shopping cart.</li>
<li>Update Quantity: Increase or decrease the quantity of products directly from the cart.</li>
<li>Remove Items: Remove items from the cart.</li>
<li>Real-time Updates: The cart UI updates dynamically based on user actions.</li>
</ul>

3. Checkout
<ul>
<li>Cart Summary: Displays the total price and item breakdown.</li>
<li>Proceed to Checkout Button: Navigates users to the next step in the purchasing process.</li>
<ul>

4. Responsive Design
<ul>
<li>Tailwind CSS: Provides a responsive and mobile-friendly design for all components.</li>
<ul>

5. Backend Integration
<ul>
<li>JSON Server: Acts as a mock API to manage products and cart data.</li>
<ul>
 
 Tech Stack
 
 Frontend
React: JavaScript library for building user interfaces.
Tailwind CSS: Utility-first CSS framework for styling.

 Backend
JSON Server: Lightweight server to simulate API endpoints.

 State Management
Redux Toolkit: Simplified state management and asynchronous operations.

## Installation and Setup

### Prerequisites

Node.js installed on your machine.

### Steps to Run the Application

Clone the Repository:

git clone https://github.com/your-username/react-ecommerce-app.git

cd react-ecommerce-app

Install Dependencies:

npm install

Start the Backend Server:

npx json-server --watch db.json --port 5000

Start the Frontend:

npm start

Access the Application:

Open http://localhost:3000 in your browser.
