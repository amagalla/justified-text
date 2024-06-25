# Justified Text Application

Hello, thank you for checking out my Justified Text application. This application will justify text for you by providing a specific length.

## Technologies Used

- Node.js
- Express.js
- TypeScript
- React
- Webpack
- Swagger
- Mocha
- Chai
- Docker
- Docker-compose

## Install Dependencies


1. Install dependencies:
   ```sh
   npm i
   ```

2. Frontend and Backend files are in the `App` directory:

- Frontend: `client` directory
- Backend: `lib` directory

## Run with Docker

1. Run the application with Docker:
    ```sh
    npm run serve
    ```
- React run on `http://localhost:8080`
- Server at `http://localhost:3000`


## Run it locally on Development

1. To run the application locally:

    ```sh
    npm run app
    ```
- React run on `http://localhost:8080`
- Server at `http://localhost:3000`

## Use Swagger UI
1. Run the server through Docker or Locally

2. Go to `http://localhost:3000/admin/swagger

3. Run values through Swagger UI

## Run Mocha Test

1. To run the test:
    ```sh
    npm run test
    ```

## Launch for Production

1. To build and run as production

    ```sh
    npm run start
    ```

This will build React through Webpack and compile Typescript to Javascript.

You can see and interact with the Frontend at `http://localhost:3000`