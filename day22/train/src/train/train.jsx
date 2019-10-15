import React from 'react';
import './index.scss';
import Seat from '../seat/seat.jsx';

export default class Train extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSeat: null,
            seats: [
                {number: 1,
                status: "av"},
                {number: 2,
                status: "av"},
                {number: 3,
                status: "oc"},
                {number: 4,
                status: "av"},
                {number: 5,
                status: "oc"},
                {number: 6,
                status: "oc"},
                {number: 7,
                status: "av"},
                {number: 8,
                status: "av"},
            ],

        };
    }

    handleSelect = (numberOfSeat) => {
        this.setState({ selectedSeat: numberOfSeat });
    }

    render() {
        console.log(this.state.selectedSeat);
        return(
            <div className="train-carriage">
                {
                    this.state.seats.map(seat=>(
                        // { if (2 < 3) {console.log('juch'); }
                        <Seat 
                            key= {seat.number}
                            onSelect= {this.handleSelect}
                            number= {seat.number}
                            selected = {seat.number === this.state.selectedSeat}
                            status = {seat.status}   
                        />
                    ))

                    }
                    <button onClick={this.handleClick}>Reserve this seat</button>
            </div>
        );
    }
}