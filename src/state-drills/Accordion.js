import { render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

class Accordion extends React.Component {
    state = {
        currentTab: null
    }
    handleButtonClick(index) {
        if(this.state.currentTab === index){
            this.setState({
                currentTab: null
            })
        }else{
            this.setState({
                currentTab: index
            })
        }
    }
    renderContent(index){
        if(this.state.currentTab === index){
            return (
            <p>{this.props.sections[index].content}</p>
            )
        }else{
            return null
        }
    }
    render(){
        const items = this.props.sections.map((section, index) => {
        return(
        <li key={index}>
            <button key={index} onClick={() => {this.handleButtonClick(index)}}>
                {section.title}
            </button>
            {this.renderContent(index)}
        </li>
        )
        })
        return (
            <div>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}

export default Accordion