# Client Flow Application

This is a Full Stack Web application utilizing Angular with Typescript for the client side and Laravel and Eloquent for the server side. The client-side application uses Angular version 17 while the server side uses Laravel version 10.

## 1. Angular Front End

The front-end application implements various components such as:

- **Login Component**
- **Registration Component**
- **Dashboard Component**

### Services Implemented

- **Auth Service:** 
  - Provides functionalities like login, logout, register, and other minimal functionalities necessary to authenticate the user using a token generated from the server side and stored on the client's local storage.

- **Auth-Guard Service:** 
  - Implements functionality to protect routes such as the dashboard route which hosts our contact form. Users will not be able to access the dashboard route or submit a contact form if they are not logged in.

- **Guest-Guard Service:** 
  - Works contrary to the auth-guard service, preventing the login page from being unnecessarily displayed when a user is logged. It also prevents the registration page from being displayed likewise.

## Setup

The front-end application can be set up by following these steps:

1. Clone the repository via:
   ```bash
   git clone [repo link]
   ```

2. Run npm install to install dependencies:
   ```bash
   npm install
   ```

3. Run npm start to spin up a local development server on `http://localhost:4200/`:
   ```bash
   npm start
   ```

4. Run npm build to build the application:
   ```bash
   npm build
   ```

5. Ensure that the base URL is correctly set in the constants file located in the `src/app/service` folder to access backend services.

Feel free to reach out if you encounter any issues or have any questions!

# Other Commands:

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
