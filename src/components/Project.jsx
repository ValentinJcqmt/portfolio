import './../css/components/Project.scss';
import clsx from "clsx";
import { useCallback, useEffect, useState } from "react"
import Popup from './Popup';

const MEDIA_CSS_TRANSITION_TIMING = 200;

export default function Project({
	title,
	subtitle,
	medias = [],
	mediaPosition = "right",
	children,
	url
}){
	const [currentMedia, setCurrentMedia] = useState();
	const [nextMedia, setNextMedia] = useState(false);
	const [animationClass, setAnimationClass] = useState(false);
	const [popupContent, setPopupContent] = useState(false);
	const [displayPopup, setDisplayPopup] = useState(false);

	useEffect(() => {
		setCurrentMedia( medias.length ? medias[0] : null );
	}, []);

	useEffect(() => {
		setAnimationClass( prevState => nextMedia ? "loading" : prevState);
	}, [nextMedia])

	useEffect(() => {
		let animationTimeout;

		switch(animationClass){
			case "loading":
				animationTimeout = setTimeout(() => {
					setCurrentMedia(nextMedia);
				}, MEDIA_CSS_TRANSITION_TIMING)
				break;

			case "ending":
				animationTimeout = setTimeout(() => {
					setAnimationClass(false);
				}, MEDIA_CSS_TRANSITION_TIMING)
				break;
		}

		return () => clearTimeout(animationTimeout);
	}, [animationClass]);

	useEffect(() => {
		setAnimationClass(prevState => (prevState == "loading") && "ending");
	}, [currentMedia]);

	const renderCurrentMedia = useCallback(() => {
		if( !currentMedia ) return;
		
		switch( currentMedia?.split('.').pop() ){
			case 'mp4':
				return <video preload="metadata" src={currentMedia} autoPlay loop muted />

			default:
				return <picture>
					<img src={currentMedia} />
				</picture>
		}
	}, [currentMedia, animationClass]);

	const renderMediaThumbnail = useCallback(media => {
		switch( media?.split('.').pop() ){
			case 'mp4':
				return <video src={media} muted preload='metadata' />

			default:
				return <picture>
					<img src={media} />
				</picture>
		}
	}, [])

	const handleMediaClick = useCallback(() => {
		setPopupContent(renderCurrentMedia());
	}, [currentMedia])

	useEffect(() => {
		popupContent && setDisplayPopup(true);
	}, [popupContent]);

	const handlePopupClose = useCallback(() => {
		setDisplayPopup(false);
	}, []);

	useEffect(() => {
		if( !displayPopup ){
			let hidePopupTimeout = window.setTimeout(() => setPopupContent(false), 200);
			return () => clearTimeout(hidePopupTimeout);
		}
	}, [displayPopup]);

	return <>
		<div className={clsx("Project", "Project--mediaPosition-"+mediaPosition)}>
			<div className="Project__container">

				<div className="Project__content">

					<h3 className="Project__content__title">{title}</h3>

					{ subtitle && <p className="Project__content__subtitle">
						{subtitle}
					</p> }

					{ url && <a href={url} target="_blank" className='Project__content__url'>
						Voir le projet
					</a> }

					<div className="Project__content__text">
						{children}
					</div>

				</div>

				{ medias.length && <div className="Project__medias">
					<div className={clsx("Project__medias__current", animationClass)}
						onClick={handleMediaClick}>
						{ renderCurrentMedia() }
					</div>
		
					{ medias.length > 1 && <div className='Project__medias__list'>
						{medias.map((media, i) => <div key={i}
							className={clsx(
								"Project__medias__list__item",
								((currentMedia == media && (nextMedia == media || !nextMedia)) || nextMedia == media) && 'current'
							)}
							onClick={() => setNextMedia(media)}>
							{ renderMediaThumbnail(media) }
						</div>)}
					</div> }
				</div> }


			</div>
		</div>
		<Popup active={displayPopup}
			onClose={handlePopupClose}>
			{popupContent}
		</Popup>
	</>
}