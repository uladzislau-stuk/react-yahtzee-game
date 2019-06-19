import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles.css'

const Die = (props) => {
	const { val, idx, locked, disabled, rotated, handleClick } = props
	const icons = ['one', 'two', 'three', 'four', 'five', 'six']

	let classes = locked ? 'Die-locking' : 'Die-default'
	if (rotated) classes += ' Die-rolling'
	if (disabled) classes += ' Die-disabled'

	return (
		<span
			className='Die'
			onClick={() => handleClick(idx)}>
			<FontAwesomeIcon
				icon={`dice-${icons[val - 1]}`}
				size='5x'
				className={classes}
			/>
		</span>
	)
}

export default Die