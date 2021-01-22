import React from 'react';
import styles from './Letter.module.scss';

function Letter(props) {
    return (
        <span className={styles.letter} aria-label={props.guessed ? null : 'blank'}>
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
