import React from 'react'
import {connect} from 'react-redux'
import SmurfsList from './SmurfsList'
import Form from './Form';
import {getSmurfs} from '../actions'
import './App.css'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import styled from 'styled-components';


const Wrapper = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


class App extends React.Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if (this.props.fetchingSmurfs) {
      return <p>Smurfs Loading...</p>
    }

    return (
      <Wrapper>
        <h1>Smurf Village</h1>
        <SmurfsList smurfs={this.props.smurfs} />
        <Form />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

const mapDispatchToProps = {
  getSmurfs: getSmurfs
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
