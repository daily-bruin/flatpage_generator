// import React from 'react';
import React, { Component, PropTypes } from 'react';
import Page from './Page';
import Dashboard from './Dashboard';
import { Provider } from 'react-redux';

// Creates a App components that works as the base of the app.
class App extends React.Component {
    render() {
    	console.log('preloaded components from App.jsx' + this.props.preloaded_components);
        return (
            <div className="app-container editing">
				<Dashboard store={this.props.store} preloaded_components={this.props.preloaded_components} componentTypes={['header', 'subhead', 'image', 'quote', 'text section']} database_id={this.props.database_id}/>
				<Page store={this.props.store} />             
            </div>
        )
    }
};



export default App
