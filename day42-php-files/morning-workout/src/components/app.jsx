import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            loaded: false,
            data: []
        };

        this.url = 'https://classes.codingbootcamp.cz/api/attendance/coding-bootcamp/autumn-2019/2019-11-05';
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

    formatTime (time) {
        let date = new Date(time);
        return date.getHours() + ' : ' + (`0${date.getMinutes()}`).slice(-2); //adding 0 infront of minutes and then taking two last digits :)
    }

    render() {

        let content = (
            <div>
                Loading...
            </div>
        )
        if (!this.state.loading && this.state.loaded) {
            content = (
                <>
                    <h1>{this.state.data.date}</h1>
                    <ul>
                        {
                            this.state.data.attendance.map(student => (
                                <li key={student.id}>{student.name} (present since {this.formatTime(student.from)})</li>
                            ))
                        }
                    </ul>
                </>
                
                    
                                    // this.state.data.genres.map(genre => (
                                    //     <span>{genre}</span>
                                    // ))
                         
            )
        }
        
        return (
            <>
                { content }
            </>
        );
    }
}