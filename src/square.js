import React, { Component} from 'react';



export default class Square extends React.Component {
    render() {
      return (
        <button className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
        </button>
      );
    }
   }


// export default class Square extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: null,
//             name: '',
//         };
//     }

//     InputName(name){
//         this.setState({
//             name : name,
//         })
//     }

//     changeState() {
//         this.setState({
//             value: 'X',
//         })
//     } 

//     render() {
//         return(
//         <div>
//             <input 
//                 value = {this.state.name}
//                 onChange = { e => this.InputName(e.target.value)}
//             />
//             <br />
//             <button 
//         onClick={() => this.changeState()}
//         >
//         {this.state.value}
//         </button>

//         <p> My name is {this.state.name}</p>
//         </div>
//         )
//     }
// } 

