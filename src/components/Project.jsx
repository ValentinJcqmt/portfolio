import clsx from "clsx";
import { useEffect, useState } from "react"

export default function Project({
	title,
	subtitle,
	medias = [],
	children
}){
	const [currentMedia, setCurrentMedia] = useState();

	useEffect(() => {
		setCurrentMedia( medias.length ? medias[0] : null );
	}, [])

	return <div className="Project">
		<div className="Project__container">

			<div className="Project__content">

				<h3 className="Project__content__tile">{title}</h3>

				{ subtitle && <p className="Project__content__subtile">
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
				<div className="Project__medias__carousel swiper">
					{medias.map((media, i) => <picture key={i} className={clsx("Project__medias__carousel__item", currentMedia == media && 'current')}>
						<img src={media} />
					</picture>)}
				</div>
			</div> }


		</div>
	</div>
}