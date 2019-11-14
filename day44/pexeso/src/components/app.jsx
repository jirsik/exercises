import React from 'react';

import './index.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: ['A', 'B', 'C' , 'D', 'E', 'F', 'G', 'H'],
        };
    }

    render() {
        let doubles = [];
        for (let i = 0; i < this.state.cards.length; i++) {
            doubles.push(this.state.cards[i]);
            doubles.push(this.state.cards[i]);
        }

        function shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        doubles = shuffle(doubles);

        let grid = [];
        
        let row = [];
        for (let i=0; i<16; i++) {
            row.push(doubles[i]);
            if((i+1) % 4 == 0) {
                grid.push(row);
                row = [];
            }            
        }
                
        return(
            <div className="flex">
            { grid.map(line => (
                <div className="row">
                {
                    line.map(card=>(
                        <div className="card">{card}</div>
                    ))
                }
                </div>
            ))}
            </div>
        )
    }
}