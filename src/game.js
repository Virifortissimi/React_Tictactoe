import React from 'react';
import Board from './board';


export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}



// export default class Element extends React.Component {
//     constructor(props) {
//         super(props);
//             this.state = {
//                 date: new Date().toLocaleTimeString(),
//                 lastDate : new Date().toLocaleTimeString()
//             };
//             this.changeLastDate = this.changeLastDate.bind(this);
//         }
        
//         componentDidMount() {
//             setInterval(this.tick, 1000 );    
//         }

//         tick = () => {
//             this.setState({
//                 date: new Date().toLocaleTimeString()
//             })
//         }

//         changeLastDate() {
//             this.setState({
//                 date: this.state.lastDate
//             })
//         } 

//         render () {
//             return (
//                 <div>
//                     <h1>Hello, world!</h1>
//                     <h2> It is {this.state.date} </h2>
//                     <button 
//                         onClick={this.changeLastDate}
                        
//                     >
//                     Change to Last Date
//                     </button>
//                 </div>               
//             );
//         }

// }
  
  
  

