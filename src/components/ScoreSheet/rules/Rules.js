class Rules {
	constructor(params) {
		Object.assign(this, params)
	}
	count(dice, val) {
		return dice.filter(die => die === val).length
	}
}

class TotalDieFace extends Rules {
	// TODO: Why context is disappeared for using evalRoll() {}
	evalRoll(dice) {
		return this.val * this.count(dice, this.val)
	}
	// evalRoll = dice => {
	// 	return this.val * this.count(dice, this.val)
	// }
}

const ones = new TotalDieFace({ category: 'ones', val: 1, description: '1 point per 1' })
const twos = new TotalDieFace ({ category: 'twos', val: 2, description: '2 point per 2' })
const threes = new TotalDieFace ({ category: 'threes', val: 3, description: '3 point per 3' })
const fours = new TotalDieFace ({ category: 'fours', val: 4, description: '4 point per 4' })
const fives = new TotalDieFace ({ category: 'fives', val: 5, description: '5 point per 5' })
const sixes = new TotalDieFace ({ category: 'sixes', val: 6, description: '6 point per 6' })

export { ones, twos, threes, fours, fives, sixes }
