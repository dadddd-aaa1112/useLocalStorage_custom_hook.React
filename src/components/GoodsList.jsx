import { useLocalStorage } from '../hook/useLocalStorage'
import React, { useState, useEffect } from 'react'
import GoodsItem from './GoodsItem'
import goods from '../data/goods.json'

const GoodsList = () => {
	const [order, setOrder] = useLocalStorage([], 'order')

	const addToCard = (id) => {
		const newItem = goods.find((good) => good.id === id)

		setOrder([...order, newItem])
	}

	return (
		<>
			{goods.map((good) => (
				<GoodsItem
					title={good.title}
					key={good.id}
					price={good.price}
					addToCard={addToCard}
					id={good.id}
				/>
			))}
		</>
	)
}

export default GoodsList
