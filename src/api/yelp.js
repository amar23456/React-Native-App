
import axios from "axios";

export default axios.create = {
 
    baseURL:'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB'  ,
    
    headers: {
      
      'x-rapidapi-key': '2a64fc735amsh767daaf4f59da46p18546ajsnf4eebebbeb00',
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
    }
};



//    try {
         
   //     const response = await yelp.get('/',{
          
   //          params: 
   //          {
   //             query: searchTerm
   //          }
             
   //        })
   //       console.log('search')
       
   //     setResults(response.data)
   //       }
   //     catch (err){
   //       console.log('error')
   //       setErrorMessage('Something went wrong');
   //   }
  }

  


