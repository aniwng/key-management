import React from 'react';
import FontAwesome from 'react-fontawesome';

import '../../styles/Search.css';

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit() {
        const value = this.state.value;
        fetch(`/api/search/${value}`, {method: 'POST'})
            .then(result => result.json())
            .then(json => {
                console.log(json);
            });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='input-group'>
                    <input
                        type='text'
                        id='searchKey'
                        className='form-control'
                        name='q'
                        placeholder='Search for a key...'
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <span className='input-group-btn'>
                <button type='Search' id='executeSearch' name='search' className='btn'>
                    <FontAwesome name='search' />
                </button>
                    </span>
                </div>
            </form>
        );
    }
}

export default SearchContainer;