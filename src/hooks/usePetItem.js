import { useEffect, useState } from 'react'
import { useSelectorValue } from './useSelectorValue.js'

export const usePetItem = (pet) => {
	const { value: searchingFor } = useSelectorValue((state) => state.searchingFor)
	const [imageError, setImageError] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	
	const imageUrl = pet.reference_image_id
		? `https://cdn2.the${searchingFor}api.com/images/${pet.reference_image_id}.jpg`
		: null
	
	useEffect(() => {
		const resetLoading = setTimeout(() => setIsLoading(false), 5000)
		const img = new Image()
		img.src = imageUrl
		
		img.onload = () => {
			setIsLoading(false)
		}
		
		img.onerror = () => {
			setImageError(true)
		}
		
		return () => {
			clearTimeout(resetLoading)
			img.onload = null
			img.onerror = null
		}
	}, [imageUrl])
	
	
	return {
		searchingFor,
		imageError,
		isLoading,
		imageUrl
	}
}
