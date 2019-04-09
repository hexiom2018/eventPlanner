import React, { Component } from 'react';
import './FirstScreen.css';
import History from '../../history';
import Cattle from '../../assets/cattle.jpg'
class FirstScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const { all } = this.state
        return (
            <div className="main-div">
                <div className="first-div-after-main">
               <div className="picture-dic">
               <img src={Cattle} alt="Logo" className="cattle-image" />
               </div>
               <div className="tittle-div"></div>
               <div className="price-div"></div>
                
                </div>
                <div className="second-div-after-main">

                </div>
            </div>
        )
    }
}


const styless = {
    root: {
        flexGrow: 1,
    },
    form: {
        alignItems: 'center',
        borderWidth: 2
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

export default FirstScreen;

