import React, { Component } from 'react';

/**
 * Data
 */
import { colors } from './data/colors.json';

/**
 * Components
 */
import Letter from './components/Letter/Letter';

/**
 * Styles
 */
import styles from './App.module.scss';
import utility from './styles/modules/Utility.module.scss';
import heading from './styles/modules/Heading.module.scss';
import Modal from './components/Modal/Modal';
// import text from './styles/modules/Text.module.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hint: '',
            loaded: false,
            loader: '',
            notification: 'You won the round',
            remaining: 5,
            incorrectArr: [],
            correctArr: [],
            wins: 0,
            guess: '',
            puzzle: '',
            puzzleArr: [],
            puzzlesArr: []
        };
        this.modalRef = React.createRef();
    }

    componentDidMount() {
        this.setPuzzle(colors);
    }

    setPuzzle = (puzzlesArr) => {
        const num = Math.round(Math.random() * (puzzlesArr.length - 1));
        const { name, hint } = puzzlesArr[num];
        const puzzle = name.toLowerCase();
        const puzzleArr = [...new Set(puzzle.split(''))];
        const remaining = puzzlesArr.filter(x => x.name !== puzzle.name);
        this.setState({
            puzzle,
            puzzleArr,
            puzzlesArr: remaining,
            hint
        });
    }

    setUnique = (guess, arr) => {
        if (!arr.includes(guess)) {
            return arr.concat(guess);
        }

        return arr;
    }

    handleChange = (event) => {
        this.setState({
            guess: event.target.value.toLowerCase()
        });
    }

    finalWin = () => {
        // open win modal
    }

    win = () => {
        this.modalRef.current.openDialog();
        this.setState({
            wins: this.state.wins + 1
        });
        this.setPuzzle(this.state.puzzlesArr);
        this.reset();
    }

    lose = () => {
        // game over modal (full screen modal)
    }

    reset = () => {
        this.setState({
            remaining: 5,
            incorrectArr: [],
            correctArr: [],
            guess: ''
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const { guess } = this.state;

        if (this.state.puzzleArr.includes(guess)) {
            const correctArr = this.setUnique(guess, this.state.correctArr);

            if (correctArr.length === this.state.puzzleArr.length) {
                this.win();
            } else {
                this.setState({
                    correctArr,
                    guess: ''
                });
            }
        } else {
            const incorrectArr = this.setUnique(guess, this.state.incorrectArr);
            const remaining = this.state.incorrectArr.includes(guess) ? this.state.remaining : this.state.remaining - 1;

            if (remaining === -1) {
                console.log('Lose');
            } else {
                this.setState({
                    remaining,
                    incorrectArr,
                    guess: ''
                });
            }
        }
    }

    modalCloseHandler = () => {
        console.log('Modal close');
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
                        <Modal ref={this.modalRef} onClose={this.modalCloseHandler} title="Modal title" close="Close modal">
                            Content
                        </Modal>
                        <h2 className={utility.sr_only}>The game</h2>

                        <div className={utility.sr_only} aria-live="polite" role="status">
                            {
                                this.state.notification &&
                                `Notification: ${this.state.notification}`
                            }
                        </div>
                        <div aria-live="polite" role="status">
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
                                            this.state.puzzle &&
                                            this.state.puzzle.split('').map((letter, i) => {
                                                return <Letter key={i} letter={letter} guessed={this.state.correctArr.includes(letter)} />;
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
                                            this.state.incorrectArr.length > 0 &&
                                            this.state.incorrectArr.join(' ')
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
