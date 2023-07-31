import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {

  const { beerId }=    useParams()

console.log(beerId)

  const [beer, setBeer] = useState({})

  useEffect(() => {
    

    const fetchOneBeers= ()=>{
               
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response=>{

         return   response.json()
        })
        .then(data=>{
         setBeer(data)
         console.log(data)
         
        })

       
        

       }  
       fetchOneBeers()
  
    
  }, [beerId])
  


    
    return (
                   <>
         <div className="card" key={beer._id}>
     
                <img src={beer.image_url} alt={beer.name} height={180} />
                <h2>
                {beer.name}     {beer.attenuation_level}
                </h2>
            <i>{beer.tagline}</i>  {beer.first_brewed}
        
            <p>
            {beer.description}
            </p>
           

           <small> {beer.contributed_by}  </small>
             </div>
                   </>
    )

}

export default BeerDetailsPage;
