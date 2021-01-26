import React from 'react';
import Letter from './../Letter/Letter';

/**
 * Styles
 */
import styles from './Game.module.scss';
import utility from './../../styles/modules/Utility.module.scss';
import heading from './../../styles/modules/Heading.module.scss';
import grid from './../../styles/modules/Grid.module.scss';

/**
 * @param {*} props
 * props.dynamicStyles: Dynamic styles object
 * props.puzzle: Current puzzle string
 * props.incorrectArr: Array of incorrect letters
 * props.correctArr: Array of correct letters
 * props.wins: Number of wins
 * props.remaining: Number of remaining guesses
 * props.children: Form component
 */

function Game(props) {
    return (
        <div className={styles.wrapper}>
            <div className={grid.container}>
                <div className={grid.heading}>
                    <h3 className={heading.main} style={props.dynamicStyles.heading} aria-live="polite" role="status">
                        <span className={styles.title}>Color Me</span>
                        <span className={styles.title}>
                            {
                                props.puzzle &&
                                props.puzzle.split('').map((letter, i) => {
                                    return <Letter key={i} letter={letter} guessed={props.correctArr.includes(letter)} />;
                                })
                            }
                            .
                        </span>
                    </h3>
                </div>
                <div className={grid.form}>
                    {/* Form */}
                    {props.children}

                    <div className={styles.guesses}>
                        <h4 className={utility.sr_only} style={{ color: props.dynamicStyles.inset.color }}>Guessed letters:</h4>
                        {
                            props.incorrectArr.length > 0 &&
                            props.incorrectArr.join(' ')
                        }
                    </div>
                </div>

                <div className={grid.stats} style={props.dynamicStyles.inset}>
                    <div className={styles.stat}><h4 className={`${heading.small} ${heading.inline}`}>Guesses: </h4> {props.remaining}/5</div>
                    <div className={styles.stat}><h4 className={`${heading.small} ${heading.inline}`}>Wins: </h4> {props.wins}</div>
                </div>
            </div>
        </div>
    );
}

export default Game;
