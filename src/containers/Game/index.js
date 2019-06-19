import React, { Component } from 'react'

import Dice from '../../components/Dice'
import ScoreSheet from "../../components/ScoreSheet";

const NUM_DICE = 5
const NUM_ROLLS = 3
const MAX_POINTS_DIE = 6

const getRandomInt = () => Math.ceil(Math.random() * MAX_POINTS_DIE);

export default class Game extends Component {
	constructor(props) {
		super(props)

		this.state = {
			dice: Array.from(Array(5), getRandomInt),
			locked: Array(NUM_DICE).fill(false),
			rollsLeft: NUM_ROLLS,
			rotated: false,
			score: {
				ones: undefined,
				twos: undefined,
				threes: undefined,
				fours: undefined,
				fives: undefined,
				sixes: undefined
			}
		}
	}

	runRotation = () => {
		if (!this.state.rotated) {
			this.setState((st) => ({
				rotated: true,
				rollsLeft: st.rollsLeft - 1,
			}), () => {
				setTimeout(this.role, 1500)
			})
		}
	}

	doScore = (category, fnScore) => {
		this.setState((st) => ({
			locked: Array(NUM_DICE).fill(false),
			rollsLeft:NUM_ROLLS,
			score: {
				...st.score,
				[category]: fnScore(st.dice)
			}
		}))
		this.runRotation()
	}

	role = () => {
		this.setState((st) => ({
			dice: st.dice.map((d, idx) => (st.locked[idx] ? d : getRandomInt())),
			locked: st.rollsLeft < 1 ?  st.locked.fill(true) : st.locked,
			rotated: false
		}))
	}

	handleDieClick = (idx) => {
		if (this.state.rollsLeft > 0 && !this.state.rotated) {
			this.setState((st) => ({
				locked: [
					...st.locked.slice(0, idx),
					!st.locked[idx],
					...st.locked.slice(idx + 1)
				]
			}))
		}
	}

	componentDidMount() {
		this.runRotation()
	}

	render() {
		const { dice, rollsLeft, locked, rotated, score } = this.state

		return (
			<div className='App'>
				<header>
					<h1>Yahtzee</h1>
					<Dice
						dice={dice}
						locked={locked}
						disabled={rollsLeft === 0}
						handleClick={this.handleDieClick}
						rotated={rotated}
					/>
					<div>{rollsLeft}</div>
					<button
						onClick={this.runRotation}
						disabled={rollsLeft < 1}>
						Roll dice
					</button>
				</header>
				<ScoreSheet
					score={score}
					doScore={this.doScore}
				/>
			</div>
		)
	}
}