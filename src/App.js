import './App.css';
import React from 'react';

class App extends React.Component{
  state = {
    drinks : [],
    api_url : ""
  }

  render = () => {
    return(
      <div>
        {/* Build up a form that connects to thecocktaildb API */}
        {/* The form only requires a text field so that the user can input the name of a drink */}
        {/* On the submission of the form you must connect to the API, grab the information and update the array of drinks in the state*/}
      
        {/* Display the array of drinks in the page. Place just the name of the drink and an image*/}
      </div>
    )
  }
}

export default App;
