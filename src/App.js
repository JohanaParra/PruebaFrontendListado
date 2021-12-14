import './App.css';
import React from 'react';
import { connect } from 'react-redux';

import ListComponent from './module/lista/componets/ListComponent';

import {LoadList}  from './module/lista/accion/ListActions'; 

class App extends React.Component {

    componentDidMount() {    
        this.props.LoadList();
    }
      
    render() {
        return (
        <ListComponent
            list={this.props.state.list.list_data}
        />
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        state
    }
}

const mapActionsToProps = ( dispatch ) => {
    return {
    
        LoadList: () => {
          dispatch( LoadList() )
        },
    }
}

export default connect( mapStateToProps, mapActionsToProps )(App);