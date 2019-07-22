import React from 'react';
import { connect } from 'react-redux'
import {addSmurfs} from '../actions'
import styled from 'styled-components';

const FormDiv = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    Smurf = event => {
        event.preventDefault();
        const [name, age, height] = [
            this.state.name, 
            Number(this.state.age),
            this.state.height
        ]
        this.props.addSmurfs({name, age, height});
        this.setState({name: '', age: '', height: ''})
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value})
    }

    render() {

        return(
            <FormDiv onSubmit={this.Smurf}>
                <input className="input100" type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter your name" />
                <br />
                <input className="input100" type="number" name="age" value={this.state.age} onChange={this.handleChange} placeholder="Enter your age" />
                <br />
                <input className="input100" type="height" name="height" value={this.state.height} onChange={this.handleChange} placeholder="Enter your height" />
                <br />
                <button className="contact100-form-btn" type="submit">
                    Add Smurf
                </button>
            </FormDiv>
        );
    }
};

const mapDispatchToProps = {
    addSmurfs
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Form)