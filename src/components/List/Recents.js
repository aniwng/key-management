import React from 'react';
import {Link} from 'react-router-dom';

class Recents extends React.Component {
    constructor() {
        super();
        this.state = { items: [] };
    }

    componentDidMount() {
        fetch(`/api/latest-keys`)
            .then(result => result.json())
            .then(json => {
                this.setState({items: json.items});
            });
    }

    render() {
        return (
            <div>
                <h4>Recent</h4>
                <ul>
                    { this.state.items.map(item => {
                        return <li key={item.registration_id}><Link to={'/key/' + item.registration_id}>{item.registration_id}</Link></li>})
                    }
                </ul>
            </div>
        )
    }
}

export default Recents;