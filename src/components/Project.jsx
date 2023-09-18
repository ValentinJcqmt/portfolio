import './../css/components/Project.scss';
import clsx from "clsx";
import { useEffect, useState } from "react"

const MEDIA_CSS_TRANSITION_TIMING = 200;

export default function Project({
	title,
	subtitle,
	medias = [],
	mediaPosition = "right",
	children
}){
	const [currentMedia, setCurrentMedia] = useState();
	const [nextMedia, setNextMedia] = useState(false);
	const [animationClass, setAnimationClass] = useState(false);

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
	}, [currentMedia])

	return <div className={clsx("Project", "Project--mediaPosition-"+mediaPosition)}>
		<div className="Project__container">

			<div className="Project__content">

				<h3 className="Project__content__title">{title}</h3>

				{ subtitle && <p className="Project__content__subtitle">
					{subtitle}
				</p> }

				<div className="Project__content__text">
					{children}
				</div>

			</div>

			{ medias.length && <div className="Project__medias">
				<picture className={clsx("Project__medias__current", animationClass)}>
					<img src={currentMedia} />
				</picture>
	
				<div className='Project__medias__list'>
					{medias.map((media, i) => <picture key={i}
						className={clsx("Project__medias__list__item", currentMedia == media && 'current')}
						onClick={() => setNextMedia(media)}>
						<img src={media} />
					</picture>)}
				</div>
			</div> }


		</div>
	</div>
}