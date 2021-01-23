import React from 'react';
// import styles from './Letter.module.scss';
import heading from './../../styles/modules/Heading.module.scss';

function Letter(props) {
    return (
        <span className={heading.main} aria-label={props.guessed ? null : 'blank'}>
            {
                props.guessed &&
                props.letter
            }
            {
                !props.guessed &&
                '_'
            }
        </span>
    );
}

export default Letter;
