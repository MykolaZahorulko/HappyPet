import { useEffect } from 'react'

export const useLockBodyScroll = (isLocked) => {
	useEffect(() => {
		if (isLocked) {
			document.body.classList.add('_lock')
		} else {
			document.body.classList.remove('_lock')
		}
		return () => {
			document.body.classList.remove('_lock')
		}
	}, [isLocked])
}