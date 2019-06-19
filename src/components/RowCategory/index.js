import React from 'react'

import './styles.css'

const RowCategory = (props) => {
	const { name, description, handleClick } = props

	return (
		<div className='RowCategory'
			onClick={handleClick}>
			<span>{name}</span>
			<span>{description}</span>
		</div>
	)
}

export default RowCategory