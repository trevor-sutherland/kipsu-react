## About the App

This App uses React.js to make dynamic messages based on 3 dynamic dropdown forms and one custom message form. <br />

It takes in data from Guests.json, Message.json, and Companies.json to form a card.<br />

A greeting will display based on time of day.<br /> 

You can see the latest build at [https://trevor-sutherland.github.io/trevor-interview-code-project](https://trevor-sutherland.github.io/trevor-interview-code-project).

## Available Scripts

In the project directory, you can run:

### `npm install`

installs packages defined in package.json into node_modules

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run deploy`

This is a GitHub specific script to deploy to GitHub pages.<br />
It first builds the app for production to the `build` folder as seen above in 'npm run build'.<br />
A gh-pages branch is created to deploy to a GitHub pages target.<br /> 
Currently, the build folder deploys to [https://trevor-sutherland.github.io/trevor-interview-code-project/](https://trevor-sutherland.github.io/trevor-interview-code-project/).<br />


See the section from Facebook about GitHub pages [deployment](https://create-react-app.dev/docs/deployment/#github-pages) for more information.

## Process
### Design

I wanted to display a message based on user input. I thought dropdown forms for choosing guest, company, and message type would make it simple to generate meaningful messages.<br />

In the beginning, I used roomNumber for the selector for guests thinking about room service or cleaning, but I ended up going with guest ID. I thought this might make more sense for a broader use.<br /> 

I wasn't sure about custom message, but I thought it would be nice to just have buttons connected to the data. This way, a client could construct a message and input Guest and Company data quickly rather than having to look it up.

### Language

The browser interface is so portable and used by everyone, which is why I chose Javascript.<br />
I built the app using Reactjs because I wanted the data to dynamically change and update based on user input.<br />

### Correctness

I used various bug tests using console.log(), React Developer Tools, and the create-react-app [built-in tests](https://create-react-app.dev/docs/running-tests).<br />

Apart from that I used the npm start script to run the dev enviornment and constantly made sure my changes were running properly.

### Styling

I would like to have added dynamic styling based on Company or if the client still needed to choose a Guest, Company, or Message type.<br />

It would also be cool to implement sending the message, but I thought that was beyond the scope. 