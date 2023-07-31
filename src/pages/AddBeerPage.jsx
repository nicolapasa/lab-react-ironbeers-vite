import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {

const navigate= useNavigate()


const [name, setName] = useState('')

const [tagline, setTagline] = useState('')

const [description, setDescription] = useState('')

const [first_brewed, setFirst_brewed] = useState('')

const [brewers_tips, setBrewers_tips] = useState('')
const [attenuation_level, setAttenuation_levels] = useState(0)


const [contributed_by, setContributed_by] = useState('')

const handleSubmit=(event)=>{

event.preventDefault()

fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
        {name,
         tagline,
         description,
         first_brewed,
         brewers_tips,
         attenuation_level,
         contributed_by
        })
})
.then(response =>{ return response.json()})
.then(data => {
    console.log(data)
    navigate(`/beers/`)
    
});

}

    return(
        <>
        
         <form onSubmit={handleSubmit} className="form p-2 bg-slate-300">

          <label htmlFor="name">Name
           <input  type="text" value={name} name="name" onChange={(e)=>setName(e.target.value) }    />
           </label>
           <label htmlFor="tagline">tagline
           <input type="text" value={tagline} name="tagline" onChange={(e)=>setTagline(e.target.value) }    />
           </label>
           <label htmlFor="description">Description
           <textarea name="description" onChange={(e)=>setDescription(e.target.value) } >{description}</textarea>   
           </label>
          <label htmlFor="first_brewed">First brewed
           <input type="text" value={first_brewed} name="first_brewed" onChange={(e)=>setFirst_brewed(e.target.value) }    />
           </label>
           <label htmlFor="brewers_tips">brewers tips
           <input type="text" value={brewers_tips} name="brewers_tips" onChange={(e)=>setBrewers_tips(e.target.value) }    />
           </label>
           <label htmlFor="attenuation_level">attenuation level
           <input type="number" value={attenuation_level} name="attenuation_level" onChange={(e)=>setAttenuation_levels(e.target.value) }    />
           </label>
           <label htmlFor="contributed_by">contributed by
           <input type="text" value={contributed_by} name="contributed_by" onChange={(e)=>setContributed_by(e.target.value) }    />
           </label>
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Beer</button>
         </form>
        </>
    )

}

export default AddBeerPage;
