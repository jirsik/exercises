import React from 'react';

import Piece from './piece.jsx';
import './index.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            field: [
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ],
            player: 'X'
        };
    }

    // checkForLine = () =>{
    //     for (let i=0; i < 4 -3; i++){
    //         for (let j=0; j < 4-3; j++){
                
    //         }
    //     }
    // }

    changeField = (x, y, value) => {
        let array = this.state.field;
        if (array[y][x] == '') {
            array[y][x] = value;
            let player = (this.state.player == 'X')?'O':'X';
            this.setState({
                field : array,
                player: player
            });
        }
        
       
        
        
        console.log(x + ' ' + y + ' ' + value);
    }

    render() {
        return (
            <>
            {
                this.state.field.map((row, i)=>(
                    <div key={i} className="row">
                        {row.map((piece, j)=>(
                             <Piece
                                key = {j}
                                value = {piece}
                                x = {j}
                                y = {i}
                                player = {this.state.player}
                                onClick = {this.changeField}
                             />
                        ))}
                    </div>
                ))
                
            }
            </>
        )
    }

}