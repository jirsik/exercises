import React from 'react';
import './index.scss';

export default class MovieOfTheWeek extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            loaded: false,
            data: []
        };

        this.url = 'http://www.laravel.test/api/movie/of_the_week';
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        if (this.url) {
            this.setState({ 
                loading: true,
                loaded: false,
                data: []
            })

            fetch(this.url)
                .then(response => response.json())
                .then(data => {
                    this.setState({ 
                        loaded: true,
                        data: data
                    })
                })
                .finally(this.setState({
                    loading: false
                }));
        }
    }

    render() {

        let content = (
            <div className="message">
                <div className="loader"><div></div><div></div><div></div><div></div></div>
                Loading
            </div>
        )
        if (!this.state.loading && this.state.loaded) {
            content = (
                <>
                    <div className="movie">

                        <img src={this.state.data.poster_url} alt={this.state.data.name} />

                        <div>

                            <h3>{this.state.data.name}</h3>

                            <div className="year">{this.state.data.year}</div>

                            <div className="genres">
                                {
                                    this.state.data.genres.map(genre => (
                                        <span>{genre}</span>
                                    ))
                                }
                            </div>

                            <div className="starring">
                                <h4>Starring:</h4>

                                <div>
                                    {
                                        this.state.data.cast.map(star => (
                                            <span>{star}</span>
                                        ))
                                    }
                                    
                                </div>
                            </div>

                        </div>

                    </div>
                </>
            )
        }
        
        return (
            <section className="weekly-movie">

                <h2>Movie of the week</h2>

                { content }

            </section>
        );
    }
}