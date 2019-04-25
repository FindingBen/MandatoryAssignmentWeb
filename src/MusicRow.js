import React from 'react'

class MusicRow extends React.Component{
  //button for viewing the ratings for movie on official website of movies.db
  viewMovie(){
    const url="https://www.themoviedb.org/movie/"+this.props.movie.id
    window.location.href=url
  }
render(){

    return <table key={this.props.movie.id}>
      <tbody>
        <tr>
          <td>
            <img alt="poster" width="120" src={this.props.movie.poster_src}></img>
          </td>
          <td>
          <h3>{this.props.movie.title}</h3>
          <p>{this.props.movie.overview}</p>
          {/* same case here when it comes to binding */}
          <input type="button" onClick={this.viewMovie.bind(this)} value="view"></input>
          </td>
        </tr>
      </tbody>
    </table>

}

}

export default MusicRow