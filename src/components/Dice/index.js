import React from 'react'
import uuid from 'uuid/v4'

import './styles.css'

import Die from '../Die'

const Dice = (props) => {
	const { dice, locked, disabled, rotated, handleClick } = props

	return (
		<div className='Dice'>
			{dice.map((val, idx) => (
				<Die
					val={val}
					idx={idx}
					key={uuid()}
					locked={locked[idx]}
					disabled={disabled}
					rotated={!locked[idx] && rotated}
					handleClick={handleClick}
				/>
			))}
		</div>
	)
}
export default Dice
