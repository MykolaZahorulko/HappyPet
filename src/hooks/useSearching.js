import { useEffect, useState } from 'react'
import { useActions } from './useActions.js'
import Fuse from 'fuse.js'
export const useSearching = (searchData) => {
	const [searchBreed, setSearchBreed] = useState('')
	const { setFilteredBreeds } = useActions()
	
	useEffect(() => {
		if (!searchData) return
		
		const options = {
			keys: ['name'],
			threshold: 0.2,
			location: 1,
			isCaseSensitive: false,
			
		}
		
		const fuse = new Fuse(searchData, options)
		const result = searchBreed ? fuse.search(searchBreed) : searchData
		setFilteredBreeds(result.map(res => res.item || res))
	}, [searchBreed, searchData])
	
	const handleInputChange = (e) => setSearchBreed(e.target.value)
	
	return {
		searchBreed,
		handleInputChange
	}
}