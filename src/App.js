import React, { Component } from 'react';

/**
 * Data
 */
import { colors } from './data/test-data.json';

/**
 * Components
 */
import Modal from './components/Modal/Modal';
import Game from './components/Game/Game';
import Form from './components/Form/Form';

/**
 * Styles
 */
import styles from './App.module.scss';
import utility from './styles/modules/Utility.module.scss';

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

    adjustRGB = (colorStr, change) => {
        const oldColorRGB = colorStr.split(',');
        const newColorRGB = [];
        oldColorRGB.forEach(function (i) {
            newColorRGB.push(Math.round(parseInt(i) * change));
        });
        return 'rgb(' + newColorRGB.toString() + ')';
    }

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

    onFormSubmit = (guess) => {
        if (this.state.puzzleArr.includes(guess)) {
            const correctArr = this.setUnique(guess, this.state.correctArr);

            this.setState({
                correctArr
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
                    incorrectArr
                });
            }
        }
    }

    render() {
        const dynamicStyles = {
            background: { background: `linear-gradient(to right, rgb(${this.state.colors.colorMain}), rgb(${this.state.colors.colorTwo}))` },
            heading: { textShadow: `2px 4px 8px ${this.state.colors.colorTwo ? this.adjustRGB(this.state.colors.colorTwo, 0.8) : 'rgb(' + this.state.colors.colorTwo + ')'}` },
            inset: {
                boxShadow: `1px 3px 16px rgb(${this.state.colors.colorTwo}) inset, -2px -2px 8px rgb(${this.state.colors.colorMain}), 2px 1px 2px rgb(${this.state.colors.colorMain})`,
                background: `rgba(${this.state.colors.colorTwo}, .25)`,
                color: this.state.colors.colorTwo ? this.adjustRGB(this.state.colors.colorTwo, 0.5) : 'rgba(0,0,0,.6)',
                '--dynamic-color-dark': this.state.colors.colorTwo ? this.adjustRGB(this.state.colors.colorTwo, 0.5) : 'rgba(0,0,0,.6)'
            },
            divider: {
                borderTop: `1.5px solid rgb(${this.state.colors.colorTwo})`
            }
        };

        return (
            <div>
                <header className={utility.sr_only}>
                    <h1>Color me</h1>
                </header>
                <main className={styles.main} style={{ ...dynamicStyles.background }}>
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
                        <Game
                            dynamicStyles={dynamicStyles}
                            puzzle={this.state.puzzle}
                            incorrectArr={this.state.incorrectArr}
                            correctArr={this.state.correctArr}
                            wins={this.state.wins}
                            remaining={this.state.remaining}>
                            <Form submitHandler={this.onFormSubmit} dynamicStyles={dynamicStyles}></Form>
                        </Game>

                    </section>
                </main>
            </div>
        );
    }
}

export default App;
