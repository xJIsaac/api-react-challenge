import './App.css';
import React, {useState} from 'react';

function App(){
    const [drinks, setDrinks] = useState([]);


    return(
      <div>
        {/* Build up a form that connects to thecocktaildb API: https://www.thecocktaildb.com/api.php */}
        {/* The form only requires a text field so that the user can input the name of a drink and a button for submission */}
        {/* On the submission of the form you must connect to the API, grab the information with the search criteria and update the array of drinks in the state*/}
      
        {/* Display the array of drinks in the page. Place just the name of the drink and an image*/}
      </div>
    )
}

export default App;
