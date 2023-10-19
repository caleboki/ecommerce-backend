# Simple E-commerce Backend

This repository contains the backend for a simple e-commerce application built using Node.js, Express, and MongoDB.

## Prerequisites

- Docker and Docker Compose installed on your machine.
- Git (for cloning the repository).

## Getting Started

### 1. Clone the Repository

To get started, first clone this repository:

```bash
git clone https://github.com/caleboki/ecommerce-backend
cd e-commerce-backend
```

Replace `[URL_OF_YOUR_GIT_REPO]` with the actual URL of your Git repository.

### 2. Configuration

Navigate to the `backend` directory and create a `.env` file to store environment variables:

```bash
cd backend
touch .env
```

Open the `.env` file in your favorite text editor and add the following:

```
MONGO_URI=mongodb://mongo:27017/ecommerce
PORT=5000
```

This configuration sets up the MongoDB connection string and the port on which the backend server will run.

### 3. Build and Run the Application

Navigate back to the root directory and use Docker Compose to build and run the application:

```bash
cd ..
docker-compose up --build
```

This command will build the Docker images for the backend and the MongoDB database, and then start the containers.

### 4. Accessing the API

Once the application is running, you can access the API at:

```
http://localhost:5000/api/products
```

This endpoint will return a list of seeded products.

## Stopping the Application

To stop the application and the associated containers, press `CTRL + C` in the terminal where `docker-compose` is running. If you want to stop and remove all containers, you can use:

```bash
docker-compose down
```

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.
