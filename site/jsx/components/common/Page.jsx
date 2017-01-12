import React from 'react';
import Header from './Header';
import Subhead from './Subhead';
import Image from './Image';
import Quote from './Quote';
import TextSection from './TextSection';
import {connect} from 'react-redux';

// Super basic component that takes name and age and then prints it
class Page extends React.Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        authors: React.PropTypes.array.isRequired,
        coverPhoto: React.PropTypes.array.isRequired,
        subheading: React.PropTypes.string.isRequired,
        mainImages: React.PropTypes.array.isRequired,
        sideImages: React.PropTypes.array.isRequired,
        quotes: React.PropTypes.array.isRequired,
        text: React.PropTypes.string
    }
    constructor(props) {
        super(props);
    }
    render() {
    	let caption = "";
    	let src = "";
    	let credit ="";
    	var check1 = this.props.store.getState()._dashboard;
    	if (check1.caption !== undefined && check1.caption !== null){
    		 caption= check1.caption;
    		 credit = check1.credit;
    		 src = check1.src;
    	}

        return (
            <div className="Page">
                <p>
                	{this.props.store.getState()._dashboard}
                </p>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
	return {
		components: state._dashboard
	}
}

const ConnnectedPage = connect(mapStateToProps)(Page)

export default ConnnectedPage;
