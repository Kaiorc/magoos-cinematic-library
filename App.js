import React from "react"
import ReactDOM from "react-dom"
import SearchMovies from "./components/SearchMovies"

export default function App(){
    return (
        <div className="container">
            <h1 className="title">Magoo&apos;s Cinematic Library</h1>
            <SearchMovies />
        </div>
    )
}