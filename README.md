# React SSR template

---

## Description
This is a starter template for building server-side rendered (SSR) applications using React. It provides a solid foundation to kickstart your project and take advantage of the benefits that SSR offers.


### Built With:

* [![React][React.js]][React-url]
* [![Webpack][Webpack.js]][Webpack-url]
* [![Express][Express.js]][Express-url]
* [![Eslint][Eslint]][Eslint-url]


[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Webpack.js]: https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=blackg
[Webpack-url]: https://webpack.js.org
[express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs
[Eslint]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
[Eslint-url]: https://eslint.org/

### Features

---
* **Server-side rendering**: Generates fully rendered HTML on the server before sending it to the client, improving performance and search engine optimization (SEO).
* **React**: Utilizes the popular JavaScript library, React, for building efficient and reusable user interfaces.
* **Webpack**: Bundles all your JavaScript and CSS files into a single bundle for optimized delivery to the browser.
* **SWC**: This is a powerful and efficient tool for analyzing, transforming, and optimizing JavaScript and TypeScript code. It stands for "Superfast Web Compiler" and is designed to enhance the development process by providing a wide range of features for working with JavaScript and TypeScript codebases.
* **Express**: Serves the SSR application and handles routing on the server side.
* **Hot Module Replacement (HMR)**: Allows automatic reload of changed components during development, speeding up the development process.
* **ESLint**: Enforces coding standards and identifies potential issues in your codebase.


## Getting Started

---
Follow the steps below to get started with this template:

1. Clone the repository:
 ```sh
 git clone https://github.com/edword03/react-ssr-template.git
 ```
2. Install the dependencies:
```sh
cd react-ssr-template
npm install
```
3. Start the development server:
```shell
npm run start:dev
```
This will launch the development server at http://localhost:9001 by default.
4. Build for production:
```shell
npm run build
```
This will generate the optimized bundle for production deployment.
5. Start the production server:
```shell
npm start:prod
```
This will start the production server using the optimized bundle generated in the previous step.

## Folder Structure

---
Here's an overview of the folder structure of this template:

* `src`: Contains the source code of your application.
  * `client`: Includes client-side specific code, such as entry point and React components.
  * `server`: Contains server-side specific code, including server configuration and rendering logic.
* `static`: Contains static assets that will be served by the server.
config: Configuration files for various tools used in the project.
* `dist`: Output directory where the optimized build is generated.

Feel free to modify the folder structure according to your project's needs.

## License

---
This template is open source and available under the [MIT License](https://github.com/edword03/react-ssr-template/blob/main/LICENSE). Feel free to use it for your own projects.
