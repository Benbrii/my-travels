import React, {Component} from 'react';

class Avatar extends Component {

    render(){
        const {firstName, lastName, image} = this.props;
        return <div>
            <h1>{firstName} {lastName}</h1>
            <img src={image} />
        </div>
    }
}

export default Avatar;