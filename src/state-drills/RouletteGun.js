import React from 'react';

class RouletteGun extends React.Component{
    
    state = {
        chamber: null,
        spinningTheChamber: false,
    };
    static defaultProps = {
        bulletInChamber: 8
    };  
    pullingTheTrigger =() =>{
        console.log('pulling the trigger ran')
        this.setState({
            spinningTheChamber: true
        })
        let timeout =setTimeout(() => {
            const random = Math.floor(Math.random()*8)+1;
            this.setState({
                chamber: random,
                spinningTheChamber: false
            })
        },2000)
    };
    render(){
        if(this.state.spinningTheChamber === true){
            return(
                <div>
                    <p>Spinning the chamber and pulling the trigger...</p>
                    <button onClick={this.pullingTheTrigger}>Pull the trigger!</button>
                </div>
            )
       }else if(this.state.spinningTheChamber === false){
            if(this.state.chamber === this.props.bulletInChamber){
                return(
                    <div>
                        <p>BANG!!!</p>
                        <button onClick={this.pullingTheTrigger}>Pull the trigger!</button>
                    </div>
                )
            }
            else if(this.state.chamber != this.props.bulletInChamber){
                return(
                    <div>
                        <p>You're Safe!</p>
                        <button onClick={this.pullingTheTrigger}>Pull the trigger!</button>
                    </div>
                )
            }
       }
    }
}

export default RouletteGun;