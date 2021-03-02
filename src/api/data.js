import React,{useState} from 'react'
import axios from "axios";
  


 export default () =>{
    const [results, setResults] = useState([]);
    
    const options = {
        method: 'GET',
        url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
        params: {query: 'Stockholm'},
        headers: {
          'x-rapidapi-key': '2a64fc735amsh767daaf4f59da46p18546ajsnf4eebebbeb00',
          'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
        }
      };
     
     
     axios.request(options).then(function (response) {
    console.log(response.data);
    setResults(response.data);
}).catch(function (error) {
	console.error(error);
});
return [results]
}
