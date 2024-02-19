This respository (repo) contains a basic boilerplate of a website. It includes both parts of the website, the server code (Javascript running on NodeJS) and the website code (HTML, CSS and Javascript running in the browser). Note - DO NOT use this repo as the basis for your project as your teacher could look back in the git history and see my contributions. Copy and paste anything you want to use from this repo in to your project.

# Starting
- [Install NodeJS](https://nodejs.org/en)
- [Clone the repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to your machine
- Open a terminal/command prompt and change your directory to the newly downloaded repo's directory
- Run the command in your terminal - `npm i`
  - This will install the 3 open source pages used in the boilerplate.
    - [nodemon](https://www.npmjs.com/package/nodemon) - This is a useful tool that automatically restarts your server code every time you change a .js file
    - [express](https://expressjs.com/) - This is a basic web server framework. It helps with setting up code to handle receiving and responding to HTTP requests, whether it's a file like .html, or an API request that responds with [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
    - [multer](https://www.npmjs.com/package/multer) - This is a package which helps the server code handle [multipart/form-data](https://varaprasadh.medium.com/what-the-heck-is-multipart-form-data-8df091d598b5) HTTP requests which are the type of request you need to use to send files and are a bit complicated and not worth doing yourself.
- Once your packages are installed, run the command in your terminal - `npm run start`. This will start your webserver.
- Open a web browser tab to http://localhost:4000/

# How it works

## Server
- `index.js` is the entry point for the server, it uses the `express` package to create a webserver and configures a few basic things like how to return the client files (index.html etc), when to send a 404 and what code is going to handle `/api` web requests. You shouldn't need to change much in here.
- `api.js` is the main file for the webserver, this file creates a router which handles every web request made to `/api`, e.g. `GET /api/hello`, `POST /api/data`, `DELETE /api/file/id` etc. The `api.js` has a couple examples for how to wire a particular HTTP request to a handler - a function which performs the process for that request e.g. making a [make a web request to openai vision API ](https://platform.openai.com/docs/guides/vision)

## Client
- `index.html` this is your main html file that the user receives when navigating to http://localhost:4000/ - it includes the styles.css and main.js files.
- `main.js` this is your main Javascript file for the client side of the app, this file can be used to setup click handlers on buttons and make API web requests to the server
- `styles.css` this is your main stylesheet file, enter css in this to style the page and make it easy to use
- `404.html` this is a 404 page, this page is delivered to the user if they enter a path to something that doesn't exist, e.g http://localhost:4000/asdlaslk


