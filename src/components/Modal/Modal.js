import React, { Component } from 'react';
import styles from './Modal.module.scss';
import heading from './../../styles/modules/Heading.module.scss';
import Button from './../Button/Button';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
        this.buttonRef = React.createRef();
    }

    componentDidMount() {
        this.body = document.getElementsByTagName('body')[0];
    }

    openDialog = () => {
        this.setState({
            open: true
        }, () => {
            this.buttonRef.current.setFocus();
            this.setBodyStyle(true);
        });
    }

    closeDialog = () => {
        this.setState({
            open: false
        }, () => {
            this.props.onClose();
            this.setBodyStyle(false);
        });
    }

    closeHandler = (e) => {
        e.preventDefault();

        if (e.target.id === 'scrim' || e.target.id === 'close') {
            this.closeDialog();
        }
    }

    setBodyStyle = (isOpen) => {
        if (isOpen) {
            this.body.style.height = '100%';
            this.body.style.overflow = 'hidden';
        } else {
            this.body.style = '';
        }
    }

    render() {
        return (
            <div id="scrim" className={`${styles.scrim} ${this.state.open ? styles.open : styles.closed}`} onClick={(e) => this.closeHandler(e)}>
                <div id="dialog" role="dialog" aria-labelledby="title" aria-describedby="description" className={`${styles.modal} ${this.state.open ? styles.open : styles.closed}`}>
                    <h2 id="title" className={heading.small}>
                        {this.props.title}
                    </h2>
                    <p id="description" className={styles.desc}>
                        {this.props.children}
                    </p>
                    <div className={styles.footer}>
                        <Button id="close" onClick={(e) => this.closeHandler(e)} ref={this.buttonRef} fullWidth>{this.props.close}</Button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Modal;
