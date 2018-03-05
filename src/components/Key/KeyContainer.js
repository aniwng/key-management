import React from 'react';

import Key from './Key';

class KeyContainer extends React.Component {
    constructor() {
        super();
        this.state = { key: {} };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`/api/keys/${id}`)
            .then(result => {return result.json()})
            .then(result => {
                this.setState({key: result.items});
            });
    }

    render() {
        const p = this.state.key.props || [];
        return (
            <Key id={this.state.key.registration_id} p={p}/>
        );
    }
}

export default KeyContainer;