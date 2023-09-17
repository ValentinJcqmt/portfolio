import './../css/components/Project.scss';
import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react"

export default function Project({
	title,
	subtitle,
	medias = [],
	mediaPosition = "right",
	children
}){
	const [currentMedia, setCurrentMedia] = useState();
	const swiperRef = useRef();

	useEffect(() => {
		setCurrentMedia( medias.length ? medias[0] : null );
	}, []);

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
				<picture className="Project__medias__current">
					<img src={currentMedia} />
				</picture>
	
				<div className='Project__medias__list'>
					{medias.map((media, i) => <picture key={i}
						className={clsx("Project__medias__list__item", currentMedia == media && 'current')}
						onClick={() => setCurrentMedia(media)}>
						<img src={media} />
					</picture>)}
				</div>
			</div> }


		</div>
	</div>
}