import React from 'react';
import FontAwesome from 'react-fontawesome';

import {Link} from 'react-router-dom';

import '../../styles/Action.css';

class ActionBlock extends React.Component {
    render() {
        return (
            <Link to='/create'>
                <div className='action-block'>
                    <div className='bg-icon'>
                        <FontAwesome name='plus-square-o'/>
                    </div>
                    <span className='title'>
                        Create
                    </span>
                </div>
            </Link>
        )
    }
}

export default ActionBlock;