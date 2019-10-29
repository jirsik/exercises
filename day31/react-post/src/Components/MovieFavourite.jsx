import React from 'react';

export default class MovieFavourite extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favourite: null,
            user: 1
        }
    }

    componentDidMount = () => {
        fetch(`http://www.laravel.test/api/movies/favorite?user_id=${this.state.user}&movie_id=${this.props.movie_id}`)

        
            .then(response => response.json())
            .then(json_data => {
                this.setState({
                    favourite: json_data.favourite,
                })
                console.log(this.state.favourite);
            })
        
    }

    handleSubmit = (event) => {
        // prevent the default event behaviour
        event.preventDefault();
     
        // do something else instead ...
        fetch(`http://www.laravel.test/api/movies/favorite/toggle`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "user_id": this.state.user,
                "movie_id": this.props.movie_id,                
            })
           
        })

        this.setState({
            favourite: !this.state.favourite
        })            
    }

    

    render() {
        let fav = (
            <span>not favourit</span>
        );
        if (this.state.favourite) {
            fav = (
                <span>favourit !!!!!!!!</span>
            );
        }
        return (
            <div>
                {fav} 
                <form action="" method="post" onSubmit={this.handleSubmit}>
                    <input type="submit" value="like" />
                </form>
            </div>
        )
        
    }
}