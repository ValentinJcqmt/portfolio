import { useCallback, useEffect, useState } from 'react';
import './../css/components/Hero.scss'
import clsx from 'clsx';
import Button from './Button';

const buttons = [
	{
		icon : "email",
		href : "mailto:valentinjacquement@gmail.com",
		target : null,
	},
	{
		icon : "linkedin",
		href : "https://www.linkedin.com/in/valentin-jacquement-621231283/",
		target : "_blank",
	},
	{
		icon : "github",
		href : "https://github.com/ValentinJcqmt",
		target : "_blank",
	},
	{
		icon : "instagram",
		href : "https://www.instagram.com/valentinjcqmt/",
		target : "_blank",
	},
]

function Hero(){

	const [animated, setAnimated] = useState(false);

	const handleAnimationTimeout = useCallback(() => {
		setAnimated(true);
	}, []);

	useEffect(() => {
		window.setTimeout(handleAnimationTimeout, 500);

		return () => window.clearTimeout(handleAnimationTimeout);
	}, [])

	return <section className="Hero">
		<div className='Hero__container'>

			<div className={clsx("Hero__text", !animated && 'beforeAnimation')}>
				<h1 className='Hero__text__title'>
					<span className={clsx(!animated && 'beforeAnimation')}>
						Valentin
					</span>
					<span className={clsx(!animated && 'beforeAnimation')}>
						JACQUEMENT
					</span>
				</h1>
				<p className={clsx('Hero__text__job', !animated && 'beforeAnimation')}>
					Développeur Web
				</p>
			</div>

			<div className="Hero__buttons">

				<div className='Hero__buttons__top'>
					<div className={clsx('Hero__buttons__top__container', !animated && 'beforeAnimation')}>
						<Button className='Hero__buttons__cv'
							href="/public/CV Valentin Jacquement.pdf"
							download={true}
							variants="light">
							Télécharger mon CV
						</Button>
					</div>
				</div>

				<div className={clsx('Hero__buttons__separator', !animated && 'beforeAnimation')}></div>

				<div className='Hero__buttons__bottom'>
					<div className={clsx('Hero__buttons__bottom__container', !animated && 'beforeAnimation')}>
						{ buttons.map(button => <Button
							icon={button.icon}
							href={button.href}
							target={button.target}
							variants={['light']}
						/>) }
					</div>
				</div>

			</div>

			{/* <div className='Hero__bottomDecoration'></div> */}
		</div>
	</section>
}

export default Hero;