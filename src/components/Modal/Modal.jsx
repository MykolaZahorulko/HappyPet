import { useActions } from '../../hooks/useActions.js'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll.js'
import { useSelectorValue } from '../../hooks/useSelectorValue.js'
import styles from './Modal.module.scss'
const Modal = ({ children, className, title }) => {
	const { setModalState } = useActions()
	const { value: isModalActive } = useSelectorValue(state => state.isModalActive)
	useLockBodyScroll(isModalActive)
	
	
	return (
		<div className={`${styles.modal} ${isModalActive ? styles._active : ''} ${className}`}>
			<div className={`${styles.modal__content} ${isModalActive ? styles._active : ''}`} onClick={e => e.stopPropagation()}>
				<div className={styles.modal__title}>{title}</div>
				{children}
			</div>
		</div>
	)
}
export default Modal
