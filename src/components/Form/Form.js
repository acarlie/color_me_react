import React, { Component } from 'react';
import styles from './Form.module.scss';
import utility from './../../styles/modules/Utility.module.scss';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guess: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            guess: event.target.value.toLowerCase()
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.submitHandler(this.state.guess);
        this.setState({
            guess: ''
        });
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={(e) => this.onFormSubmit(e)} className={styles.form}>
                <label className={utility.sr_only} htmlFor="input">Guess a letter</label>
                <div className={styles.inset} style={this.props.dynamicStyles.inset}>
                    <input id="input" className={styles.input} type="text" placeholder="Guess a letter..." maxLength="1" value={this.state.guess} onChange={this.handleChange} />
                </div>
                <input className={utility.sr_only} type="submit" value="Submit guess" />
            </form>
        );
    }
}

export default Form;
