import React from 'react'

import './styles.css'

import RowCategory from '../RowCategory'
import { ones, twos, threes, fours, fives, sixes } from "./rules/Rules";

const evalTotalScore = (score) => {
	let totalScore = 0;

	Object.values(score).forEach((points) => {
		if (points !== undefined) totalScore += points
	})

	return totalScore
}
const toUpperFirstLetter = word => word[0].toUpperCase() + word.slice(1)

const ScoreSheet = (props) => {
	const { score, doScore } = props

	return (
		<div className='ScoreSheet'>
			<section className='ScoreSheet-section'>
				<h2>Upper</h2>
				<RowCategory
					name={toUpperFirstLetter(ones.category)}
					description={ones.description}
					handleClick={evt => doScore(ones.category, ones.evalRoll.bind(ones))}
				/>
				<RowCategory
					name={toUpperFirstLetter(twos.category)}
					description={twos.description}
					handleClick={evt => doScore(twos.category, twos.evalRoll)}
				/>
				<RowCategory
					name={toUpperFirstLetter(threes.category)}
					description={threes.description}
					handleClick={evt => doScore(threes.category, threes.evalRoll)}
				/>
				<RowCategory
					name={toUpperFirstLetter(fours.category)}
					description={fours.description}
					handleClick={evt => doScore(fours.category, fours.evalRoll)}
				/>
				<RowCategory
					name={toUpperFirstLetter(fives.category)}
					description={fives.description}
					handleClick={evt => doScore(fives.category, fives.evalRoll)}
				/>
				<RowCategory
					name={toUpperFirstLetter(sixes.category)}
					description={sixes.description}
					handleClick={() => doScore(sixes.category, sixes.evalRoll)}
				/>
			</section>
			<section className='ScoreSheet-section'>
				<h2>Lower</h2>
			</section>
			<div>{evalTotalScore(score)}</div>
		</div>
	)
}

export default ScoreSheet