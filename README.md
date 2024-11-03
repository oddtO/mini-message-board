



## Deployment

* [See on koyeb](https://advisory-kristan-theodinproject-oddto-610b337d.koyeb.app/)


<!-- GETTING STARTED -->
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need `Node.js` and `npm` installed globally on your machine.
* [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/oddtO/mini-message-board.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Initialize database with schema and data (can use .env.local, .env.production or any other .env file)
   ```sh
   ENV_FILE=.env npm run dbinit
   ```
4. Run dev server on http://localhost:3000 (reads from .env file by default)
   ```sh
   npm run dev
   ```
5. Compile for production
   ```sh
   npm run build
   ```
















## Features

* Responsive design.
* See posted messages by everyone.
* See message content, author and date.
* Add new messages.





## Built With

#### Technologies

* Typescript
* Express
* NodeJS
* Postgresql
* SCSS
* HTML
* EJS
* Git






<!-- AUTHORS -->
## Author

* [Github](https://github.com/oddtO)
* [LinkedIn](https://www.linkedin.com/in/dmytro-yefimov-316690207/)
* [Dou](https://dou.ua/users/oddto/)
<p align="right">(<a href="#top">back to top</a>)</p>
