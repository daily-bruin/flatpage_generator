import React from 'react';
import {createStore, combineReducers }from 'redux';

// currently keep track of one thing which is componnent rendering 


const dashboard_reducer = function(state = [], action) {
    console.log("intialized an empty array for state");
    switch (action.type) {
        case 'ADD_NEW_COMPONENT':
            return {
                ...state,
                message: action.value
            }
        default:
            return state;
    }
}

// const page_reducer = function(state = [], action) {
//     switch (action.type){
//         default:
//             return state;
//     }
// }

// const reducer = combineReducers({
//     dashboard: dashboard_reducer,
//     page: page_reducer,
// })

// let store_0 = createStore(reducer);

// store_0.dispatch({
//     type: 'ADD_NEW_COMPONENT',
// })

// store_0.dispatch({
//     type: 'ADD_IMAGE',
// })

// const addImage = function (src, credit, caption) {
//     return {
//         type: 'ADD_IMAGE',
//         src: src,
//         credit: credit,
//         caption: caption,
//     }
// }

// const addNewComponent = function (component) {
//     return{
//         type: 'ADD_NEW_COMPONENT',
//         component: component
//     }
// }
// const test_url = 'https://s-media-cache-ak0.pinimg.com/originals/14/37/10/143710e981aedc43f8091f066c645660.jpg';
// const test_credit = 'TEH INTERNET';
// const test_caption = 'Can I haz cupcake?';
// console.log(store_0.dispatch(addImage(test_url,test_credit,test_caption)));

class Dashboard extends React.Component {
    static propTypes = {
        componentTypes: React.PropTypes.array.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {selectedComponent: this.props.componentTypes[0]};
        // add syntatic sugar () => {} to prevent exessive bind calls 
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        var componentOptions = this.props.componentTypes.map(function(type, i){
          return (
            <option value={type.replace(/\s/g , "_")}>{type}</option>
          );
        });

        return (
          <div className="Dashboard">
            <form onSubmit={this.handleSubmit}>
                <div className='component-inputs'>
                    {this.showInputForComponentType(this.state.selectedComponent)}
                </div>
                <br/>
                <select value={this.state.selectedComponent} onChange={this.handleDropdownChange}>
                    {componentOptions}
                </select>
                <input type='submit'></input>
            </form>
          </div>
        );
    }

    handleDropdownChange(event) {
        this.setState({selectedComponent: event.target.value});
        // {this.showInputForComponentType(event.target.value)}
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.selectedComponent);
        event.preventDefault();
    }

    showInputForComponentType(componentType) {
        console.log('Dropdown changed: ' + componentType);
        switch(componentType) {
            case 'title':
                return(
                    <div><input type="text" name="title" autofocus="autofocus" value="title" className="form-control"/></div>
                );
                break;
            case 'author':
                return(
                    <div><input type="text" name="authors" required="required" autofocus="autofocus" value="author" className="form-control"/></div>
                );
                break;
            case 'image':
                return(
                    <div>
                        <input type="text" name="image" autofocus="autofocus" value="img" className="form-control"/>
                        <input type="text" name="credit" required="required" value="credit" className="form-control"/>
                        <input type="text" name="caption" required="required" value="caption" className="form-control"/>
                    </div>
                );
                break;
            case 'quote':
                return(
                    <div>
                        <input type="text" name="quote" required="required" value="quote" className="form-control"/>
                        <input type="text" name="quoteMaker" required="required" value="quote maker" className="form-control"/>
                    </div>
                );
                break;
            case 'text_section':
                return(
                    <div><textarea name="text" cols="90" rows="8"></textarea></div>
                );
                break;
            default:
                return(<p>nothing</p>);
                break;
        }
    }
};

export default Dashboard;
