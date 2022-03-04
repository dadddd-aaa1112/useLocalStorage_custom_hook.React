import React from 'react'

const GoodsItem = (props) => {
	const { title, price, id, addToCard } = props
	return (
		<div>
			<span>{title} </span>
			<span>{price}</span>
			<button onClick={() => addToCard(id)}>add to card</button>
		</div>
	)
}

export default GoodsItem
