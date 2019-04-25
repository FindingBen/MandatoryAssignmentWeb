import React, { Component } from 'react';
import './App.css';
import MusicRow from './MusicRow.js';
import $ from 'jquery';

class App extends Component {
 constructor(props){
   super(props)
   this.state={}

this.searchInput("avengers")//the term avenger here is just simple word, when you start a app these movies will be there first.
 }

 searchInput(searchTerm){
   console.log("search")
   //api key from movie db
   const url='https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=' + searchTerm;
   $.ajax({
url:url,
success:(searchResult)=>{
  console.log('success')
  console.log(searchResult)
  const results=searchResult.results
  console.log(results[0])
var movieRows=[]
//for each loop for movie objects,in here i also declared a movie poster path.
  results.forEach(movie => {
    movie.poster_src= "https://image.tmdb.org/t/p/w185" + movie.poster_path
    console.log(movie.poster_path)
    const movies=<MusicRow key={movie.id} movie={movie}/>
    movieRows.push(movies)
  });
this.setState({rows:movieRows})
},
error:(xhr,status,err)=>{
  console.error('fail')
}
   })
 
}
//search function
searchChangeHandler(event){
  console.log(event.target.value)
  const boundObject=this
  const searchTerm=event.target.value
  //this is bind function, its pretty complicated I found some solution on stackoverflow 
  //but waht it does basicly it just binds this specific object,in this case searchTerm which is being used down 
  //in render method
  boundObject.searchInput(searchTerm)
  
 }

  render() {
    return (
      <div className="app">
        <div className="musicApp">
        <header className="musicHeader">
          <h1>MovieHQ |</h1>
        </header>
        {/* as I sad before here I bind the function for searhing */}
        <input onChange={this.searchChangeHandler.bind(this)}
         placeholder="search" >
        </input>
        </div>
        {this.state.rows}
      </div>
    );
  }
}
 

export default App;
