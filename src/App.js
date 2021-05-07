import './App.css';
import React, {useState} from 'react';

function App(){
    const [news, setNews] = useState([]);


    return(
      <div>
        {/* Build up a form that connects to The news org API: https://newsapi.org/docs */}
        {/* The form only requires a text field so that the user can input the search criteria and a button for submission */}
        {/* On the submission of the form you must connect to the API, grab the information of the top headlines with the search criteria and update the array of news in the state*/}
      
        {/* Display the array of news in the page. Place, for each new, the title, the image and a description */}
      </div>
    )
}

export default App;
