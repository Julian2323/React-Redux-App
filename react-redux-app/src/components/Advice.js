import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import {fetchRandomAdvice} from '../actions/index';

const Advice = (props) => {
    useEffect(()=> {
        props.fetchRandomAdvice();
    },[]);

    if(props.isFetching) {
        return <h2>fetching advice data</h2>;
    };
    return (
        <div className='container'>
            <h2>{props.adviceName}</h2>
            <button onClick={props.fetchRandomAdvice}>Get Some Advice</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        adviceName: state.adviceName
    };
};

export default connect(
    mapStateToProps,
    {fetchRandomAdvice: fetchRandomAdvice}
    )(Advice);