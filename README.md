# Substantive Research App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Used technologies:

### `HTML, CSS, JavaScript, React`

## To run the App

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## App Structure

There are 3 components as presented on the diagram.

![Alt text](./diagram.jpg?raw=true "App Structure")

App fetches data through the API and passes json object results as a prop to InteractionList. 

In the InteractionList, it loops through array of the object's keys and pass as props title and value parametres to render each InteractionShow element.
 
The InteractionShow renders graph and generates a distinct colour creating a hexadecimal code based on title. 

## Future Plans

* sort interactions by quantity asc and desc (functionality)
* output data for selected period by date (functionality)
* use third-party library to render diagrams (aesthetic)
* add animated spinner, styled error message (aesthetic)