import React from 'react';

import MovieFavourite from './MovieFavourite.jsx';

export default class MovieReview extends React.Component {
    constructor(props) {
        super(props);

        this.movie_id = 127;

        this.state = {
            movie_data: null,
            text: 'test',
            number: 5
        }
    }

    componentDidMount = () => {
        fetch(`http://www.laravel.test/api/movie?id=${this.movie_id}`)
            .then(response => response.json())
            .then(json_data => {
                this.setState({
                    movie_data: json_data,
                })
            })
    }

    

    handleSubmit = (event) => {
        // prevent the default event behaviour
        event.preventDefault();
     
        // do something else instead ...
        fetch('http://www.laravel.test/api/review', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "movie_id": this.movie_id,
                "user_id": 2,
                "text": this.state.text,
                "rating": this.state.number
            })
        })
    }

    handleRateChange = (event) => {
        let number = Math.min(10, Math.max(0, event.target.value));
        this.setState({
            number: number
        })
    }

    //working for all but without special behaviour
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        let movie = 'loading...';
        if (this.state.movie_data !== null) {
            movie = (
                <div className="movie">
                    <h2>{this.state.movie_data.name}</h2>
                    <img src={this.state.movie_data.poster_url} alt={this.state.movie_data.name}/>
                </div>

            )
        }

        return(
            <>
                <MovieFavourite
                    movie_id= {this.movie_id}
                />
                <form action="" method="post" onSubmit={this.handleSubmit}>
                    {movie}
                    <label htmlFor="number">Rating 1-5: </label>
                    <br/>
                    <input type="number" name="number" value={this.state.number} onChange={this.handleRateChange}/>
                    <br/>
                    <label htmlFor="text">Comment: </label>
                    <br/>
                    <textarea name="text" value={this.state.text} onChange={this.handleChange}></textarea>
                    <br/>
                    <input type="submit" value="submit"/>
                </form>
            </>
        );
    }
}