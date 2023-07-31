import { useEffect, useState } from "react";

function RandomBeersPage() {


    
      const [beer, setBeer] = useState({})
    
      useEffect(() => {
        
    
        const fetchOneBeers= ()=>{
                   
            fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response=>{
    
             return   response.json()
            })
            .then(data=>{
             setBeer(data)
             console.log(data)
             
            })
    
           
            
    
           }  
           fetchOneBeers()
      
        
      }, [])
      
    
    
        
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

export default RandomBeersPage;
