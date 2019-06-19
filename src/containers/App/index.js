import React, { Component } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

import Game from '../Game'

library.add( faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix )

export default class App extends Component {
	render() {
		return (
			<div className='App'>
				<Game />
			</div>
		);
	}
}