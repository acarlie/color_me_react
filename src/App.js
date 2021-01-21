import React, { Component } from 'react';

/**
 * Data
 */
import { colors } from './data/colors.json';

/**
 * Styles
 */
import styles from './App.module.scss';
import utility from './styles/modules/Utility.module.scss';
import heading from './styles/modules/Heading.module.scss';
// import text from './styles/modules/Text.module.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            loader: '',
            wins: 0,
            guesses: 'A B C',
            remainingGuesses: 5,
            hint: 'The color family is purple',
            notification: 'You won the round'
        };
    }

    componentDidMount() {
    }

    render() {
        console.log(colors);
        return (
            <div>
                <header className={utility.sr_only}>
                    <h1>Color me</h1>
                </header>
                <main className={styles.main}>
                    <section className={utility.sr_only}>
                        <h2>About color me</h2>
                        <p>
                            Color me is a word guessing game. The words are all color names. A hint about the color family will be given at the beginning of each round. Use the input box to guess a letter, the blanks will fill as correct guesses are made. After the round is finished a new round will start until there are no puzzles remaining.
                        </p>
                    </section>
                    <section>
                        <h2 className={utility.sr_only}>The game</h2>

                        <div className={utility.sr_only} aria-live="polite" role="status">
                            Notification: {this.state.notification}
                        </div>
                        <div className={utility.sr_only} aria-live="polite" role="status">
                            Hint: {this.state.hint}
                        </div>

                        {/* <div id="loaderWrapper" class="fixed-wrap">
                            <div class="container-fullwidth">
                                <span id="loadText" class="inset">Loading</span>
                            </div>
                        </div>

                        <div id="finalWrapper" class="fixed-wrap">

                        </div> */}
                        <div class="container">
                            <div>
                                <h3 className={heading.main} aria-live="polite" role="status">
                                    Color Me
                                    <span>
                                        {/* Include letter component here */}
                                        {/* Letter component should read 'blank' for assistive tech */}
                                        _____
                                    </span>
                                    .
                                </h3>

                                <div className={styles.results}>
                                    <p><strong>Guesses Remaining: </strong>{this.state.remainingGuesses}</p>
                                    <p><strong>Wins: </strong>{this.state.wins}</p>
                                    <p><strong>Guesses: </strong>{this.state.guesses}</p>
                                </div>
                            </div>
                        </div>

                    </section>
                </main>
            </div>
        );
    }
}

export default App;
