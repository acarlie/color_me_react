import React, { Component } from 'react';

/**
 * Data
 */
import { colors } from './data/test-data.json';

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
            colors: {},
            puzzleArr: [],
            puzzlesArr: [],
            win: false
        };
        this.modalRef = React.createRef();
    }

    componentDidMount() {
        this.newGame(colors);
    }

    newGame = (arr) => {
        this.setState({
            ...this.setPuzzle(arr),
            remaining: 5,
            incorrectArr: [],
            correctArr: [],
            guess: '',
            win: false
        });
    }

    setPuzzle = (arr) => {
        const num = Math.round(Math.random() * (arr.length - 1));
        const { name, hint, colorMain, colorTwo } = arr[num];
        const puzzle = name.toLowerCase();
        const puzzleArr = [...new Set(puzzle.split(''))];
        const puzzlesArr = arr.filter(x => x.name !== puzzle);
        const colors = { colorMain, colorTwo };

        return { puzzle, puzzleArr, puzzlesArr, hint, colors };
    }

    // colorChange (color, change) {
    //     var oldColorRGB = color.split(',');
    //     var newColorRGB = [];
    //     oldColorRGB.forEach(function (i) {
    //       newColorRGB.push(Math.round(parseInt(i) * change));
    //     });
    //     return 'rgb(' + newColorRGB.toString() + ')';
    //   },
    //   styles (colorOne, colorTwo, colorThree, colorFour) {
    //     // main background
    //     this.body.style.background = 'linear-gradient(to right,' + colorOne + ',' + colorTwo + ')';
    //     // h1 text shadow
    //     this.headingText.style.textShadow = '2px 4px 6px ' + colorTwo;
    //     // result container
    //     this.resultsCont.style.boxShadow = '1px 3px 16px ' + colorTwo + ' inset, -2px -2px 8px ' + colorOne + ', 2px 1px 2px ' + colorOne;
    //     this.resultsCont.style.color = colorFour;
    //     this.resultsCont.style.backgroundColor = colorThree;
    //     // borders in result container
    //     this.border.forEach(function (i) {
    //       i.style.borderTop = '1.5px solid ' + colorTwo;
    //     });
    //   },

    setUnique = (guess, arr) => {
        if (!arr.includes(guess)) {
            return arr.concat(guess);
        }

        return arr;
    }

    finalWin = () => {
        this.setState({
            win: true
        }, () => {
            this.modalRef.current.openDialog();
        });
    }

    win = () => {
        this.setState({
            wins: this.state.wins + 1
        });
        this.newGame(this.state.puzzlesArr);
    }

    lose = () => {
        this.modalRef.current.openDialog();
    }

    resetGame = () => {
        this.setState({
            puzzlesArr: colors
        }, () => {
            this.newGame(this.state.puzzlesArr);
        });
    }

    handleChange = (event) => {
        this.setState({
            guess: event.target.value.toLowerCase()
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const { guess } = this.state;

        if (this.state.puzzleArr.includes(guess)) {
            const correctArr = this.setUnique(guess, this.state.correctArr);

            this.setState({
                correctArr,
                guess: ''
            });

            if (correctArr.length === this.state.puzzleArr.length) {
                if (this.state.puzzlesArr.length === 0) {
                    this.finalWin();
                } else {
                    this.win();
                }
            }
        } else {
            const incorrectArr = this.setUnique(guess, this.state.incorrectArr);
            const remaining = this.state.incorrectArr.includes(guess) ? this.state.remaining : this.state.remaining - 1;

            if (remaining === -1) {
                this.lose();
            } else {
                this.setState({
                    remaining,
                    incorrectArr,
                    guess: ''
                });
            }
        }
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
                        <Modal ref={this.modalRef} onClose={this.resetGame} title="Modal title" close="Close modal">
                            Content
                        </Modal>
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
                        <div className={styles.wrapper}>
                            <div className={styles.container}>
                                <h3 className={heading.main} aria-live="polite" role="status">
                                    <span className={styles.no_wrap}>
                                        Color Me
                                    </span>
                                    <span className={styles.no_wrap}>
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
                                    <input id="input" className={styles.input} type="text" placeholder="Guess a letter..." maxlength="1" value={this.state.guess} onChange={this.handleChange} />
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
