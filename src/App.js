import React, { Component } from 'react';

/**
 * Data
 */
// import { colors } from './data/colors.json';

/**
 * Components
 */
import Letter from './components/Letter/Letter.js';

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
            guesses: [],
            hint: 'The color family is purple',
            loaded: false,
            loader: '',
            notification: 'You won the round',
            remaining: 5,
            wins: 0,
            guess: '',
            puzzle: 'lavender'
        };
    }

    componentDidMount() {

    }

    handleChange = (event) => {
        this.setState({
            guess: event.target.value
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        const guesses = this.state.guesses.concat(this.state.guess);
        const remaining = this.state.puzzle.includes(this.state.guess) ? this.state.remaining : this.state.remaining - 1;
        this.setState({
            guesses,
            guess: '',
            remaining: remaining
        });
    }

    render() {
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
                            {
                                this.state.notification &&
                                `Notification: ${this.state.notification}`
                            }
                        </div>
                        <div className={utility.sr_only} aria-live="polite" role="status">
                            {
                                this.state.hint &&
                                `Hint: ${this.state.hint}`
                            }
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
                                        {
                                            this.state.puzzle.split('').map((letter, i) => {
                                                return <Letter key={i} letter={letter} guessed={this.state.guesses.includes(letter)} />;
                                            })
                                        }
                                    </span>
                                    .
                                </h3>
                                <form onSubmit={(e) => this.onFormSubmit(e)}>
                                    <label className={utility.sr_only} for="input">Guess a letter</label>
                                    <input id="input" type="text" placeholder="Guess a letter..." maxlength="1" value={this.state.guess} onChange={this.handleChange} />
                                    <input className={utility.sr_only} type="submit" value="Submit guess" />
                                </form>

                                <div className={styles.results}>
                                    <p><strong>Guesses Remaining: </strong>{this.state.remaining}</p>
                                    <p><strong>Wins: </strong>{this.state.wins}</p>
                                    <p><strong>Guesses: </strong>
                                        {
                                            this.state.guesses.length > 0 &&
                                            this.state.guesses.filter((letter) => {
                                                return !this.state.puzzle.includes(letter);
                                            })
                                        }
                                    </p>
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
