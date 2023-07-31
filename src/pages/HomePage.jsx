import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




function HomePage() {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        
          const fetchAllBeers= ()=>{
               
           fetch('https://ih-beers-api2.herokuapp.com/beers')
           .then(response=>{

            return   response.json()
           })
           .then(data=>{
            setBeers(data)
            console.log(data)
            
           })

          
           

          }  
          fetchAllBeers()

    }, [])
    



    return ( 
<>
        <div>
               <ul>
        <li>
            <Link to={'/'} >All Beers</Link>
        </li>
        <li>
            <Link to={'/random-beer'} >Random Beer</Link>
        </li>
        <li>
            <Link to={'/new-beer'} >New Beer</Link>
        </li>
    </ul>
        </div>



        <div className="flex-home">


               {beers.map(beer=>{


                return (
                   <>
         <div className="card" key={beer._id}>
            <Link to={`/beers/${beer._id}`} className="center">
                <img src={beer.image_url} alt={beer.name} height={180} />
                <h2>
                {beer.name}
                </h2>
            <i>{beer.tagline}</i> 
        
            <p>
            {beer.description}
            </p>
            </Link>
             </div>
                   </>
                )
               })}

        </div>
        </>
    )

}

export default HomePage;
