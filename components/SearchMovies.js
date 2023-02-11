import React from "react"
import Card from "./Card"

export default function SearchMovies(){
    
    const [allResults, setAllResults] = React.useState([])
    
    const [query, setQuery] = React.useState("")
    
    const newQuery = ""
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=7f2a07e4ac0661693a55471b0646934b&language=en-US&query=${query}&page=1&include_adult=false`
    
    let cards = ""
    
    function handleChange(event) {
        const {name, value} = event.target
        setQuery(value)
    }
    
    function handleSubmit(event) {
        // Impede que a página seja recarregada
        event.preventDefault()
        getResults()
        // console.log("submitting")
        console.log(allResults)
    }
    
    function getResults(){
        fetch(url)
            .then(response => response.json())
            .then(data => setAllResults(data.results))
    }
     
    React.useEffect(() => {
        getResults()
    }, [query])
    
    if(allResults != undefined){
        cards = allResults.map(item => {
            return(
                <Card
                    key={item.id}
                    title={item.title}    
                    poster={item.poster_path}
                    release={item.release_date}
                    rating={item.vote_average}
                    description={item.overview}     
                />
            )
        })
    }
    
    return(
        <>
            <form className="form" onSubmit={handleSubmit}>
                <label className="label" htmlFor="query"> Movie Name </label>
                <input
                    className="input"
                    type="text"
                    name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query}
                    onChange={handleChange}
                />
                <button className="form--submit" type="submit">
                    Search
                </button>
            </form>
            <div className="cards">
                {allResults && cards}
            </div>
        </>
    )
}