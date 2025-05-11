# ShoppyGlobe E-commerce Application

This is a simple e-commerce application built using Node.js, Express.js, MongoDB, and React.js. It allows users to create accounts, add products, view products, and place orders. The application also includes a payment gateway integration using Stripe.

## Features

- User registration and login
- Product creation and management
- Order management and tracking
- Payment integration with Stripe
- Admin dashboard for managing products and orders

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/ShoppyGlobe-E-commerce-Application.git
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:

```bash
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
JWT_SECRET=your-secret-key
STRIPE_PUBLIC_KEY=your-stripe-public-key
STRIPE_SECRET_KEY=your-stripe-secret-key
```

4. Start the server:

```bash
npm start
```

## Usage

To use the application, you can create an account by visiting the `/register` route. Once you're logged in, you can create products, view products, and place orders.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

