import React from 'react';
import Image from '../components/common/Image';
import Quote from '../components/common/Quote';


export function  _dashboard(state = [], action) {
    switch (action.type) {
        case 'ADD_NEW_COMPONENT':
            return {
                ...state,
                message: action.value
            }
        case 'ADD_IMAGE':
            console.log('In add image dispatch');
            const image = <Image
                                url={action.src}
                                credit={action.credit}
                                caption={action.caption}
                            />;
            return [
                ...state,
                image
            ];
        case 'ADD_QUOTE':
            const quote = <Quote quote={action.quote} quoteMaker={action.quoteMaker}/>;
            return [
                ...state,
                quote
            ];
        default:
            return state;
    }
}