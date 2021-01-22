import React, { Component } from 'react';
import styles from './Button.module.scss';

class Button extends Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
    }

    /**
     * setFocus can be accessed by parent to set focus on button
     */
    setFocus = () => {
        this.buttonRef.current.focus();
    }

    render() {
        return (
            <button id={this.props.id ? this.props.id : null} ref={this.buttonRef} className={`${styles.button} ${this.props.fullWidth ? styles.full_width : ''}`} onClick={this.props.handler}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;
