import React from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Create from './components/Create/Create';
import KeyContainer from './components/Key/KeyContainer';

import { Route, Switch } from 'react-router';

import './styles/App.css';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Main}/>
                        <Route exact path='/create' component={Create}/>
                        <Route exact path='/key/:id' component={KeyContainer}/>
                    </Switch>
                </div>
            </div>
        );
    }
}