import { useCallback, useEffect } from 'react';
import '../css/components/Popup.scss';
import clsx from 'clsx';

export default function Popup({children, onClose, active}){

	const handlePopupClick = useCallback(e => {
		if( e.target.classList.contains('Popup') || e.target.classList.contains('Popup__close') ){
			onClose();
		}
	}, []);

	function handleKeyPress(e){
		active && e.keyCode == 27 && onClose()
	};

	useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);
		return () => window.removeEventListener('keydown', handleKeyPress);
	}, [active])

	return <section className={clsx("Popup", active && 'active')} onClick={handlePopupClick}>
		<div className="Popup__container">
			<button className='Popup__close' title="Fermer"></button>
			{ children && <div className="Popup__content">
				{children}
			</div> }
		</div>
	</section>
}