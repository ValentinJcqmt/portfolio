import './../css/components/Projects.scss';
import Project from './Project';

/**
 * Refonte support (2023) : Laravel, React, gestion de rôle
 * CHGR (2023) : Laravel, React, génération de fichiers image, gestion de rôle
 * URD (2020) : WP, moteur de recherche, 9 post types, 6 taxonomies, recherche par date, recherche par langues (WPML)
 * St Jacques de la lande (2023) : WP, Accessibilité (typo dyslexie, taille de texte adaptative), eco-conception (le moins de scripts JS possible)
 * Mon Suivi IVG : WP, Questions/Réponses
 * Assia una : WP, intranet ? gmap ?
 * LHFT : WP, dépôts d'annonce
 * Place to paint : modification d'un fonctionnement déjà existant, transfert des oeuvres du site (post type WP) sur une table bdd optimisée
 */

export default function Projects(){
	return <section id="projects" className="Projects">
		<div className='Projects__container'>
			<h2 className='Projects__title'>
				Mes créations
			</h2>
			<Project title="Outil de ticketing"
				medias={[
					'https://ogden_images.s3.amazonaws.com/www.iamcountryside.com/images/sites/2/2022/02/13131252/AdobeStock_74466779-scaled-e1675118602223.jpeg',
					'https://ogden_images.s3.amazonaws.com/www.iamcountryside.com/images/sites/2/2022/02/13131252/AdobeStock_74466779-scaled-e1675118602223.jpeg',
					'https://ogden_images.s3.amazonaws.com/www.iamcountryside.com/images/sites/2/2022/02/13131252/AdobeStock_74466779-scaled-e1675118602223.jpeg',
					'https://ogden_images.s3.amazonaws.com/www.iamcountryside.com/images/sites/2/2022/02/13131252/AdobeStock_74466779-scaled-e1675118602223.jpeg',
					'https://ogden_images.s3.amazonaws.com/www.iamcountryside.com/images/sites/2/2022/02/13131252/AdobeStock_74466779-scaled-e1675118602223.jpeg',
				]}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet congue augue, sit amet ultrices massa. Pellentesque rutrum erat vitae scelerisque rhoncus. Donec eget vulputate justo. Sed eu vestibulum elit. Duis mattis tincidunt congue. Aliquam tincidunt metus imperdiet pharetra gravida. Mauris in condimentum sapien. Proin fermentum velit eget est iaculis, imperdiet posuere lectus placerat. Sed molestie nisl in maximus malesuada. Proin ut sem at arcu rhoncus feugiat ac ac massa. Aliquam consequat elit laoreet sapien suscipit tincidunt. Morbi at risus maximus, dictum mauris id, consequat sem. Duis bibendum blandit dui, at malesuada ante dictum a. Aliquam id interdum ante.
				</p>
				<p>
					Morbi a leo sapien. Mauris sit amet magna malesuada, sollicitudin lectus et, aliquam tellus. Ut justo eros, aliquam quis laoreet quis, posuere aliquet enim. Nulla non velit sed ipsum tempor sollicitudin. Pellentesque id urna id lectus maximus commodo in hendrerit orci. Vestibulum id interdum quam, nec malesuada nulla. Vestibulum iaculis iaculis blandit. Donec convallis aliquet orci et faucibus.
				</p>
				<p>
					Nulla facilisi. Vivamus fringilla ex non vulputate molestie. Pellentesque id hendrerit erat. Donec vestibulum tellus eu nulla scelerisque, non varius erat condimentum. Proin blandit massa at tellus hendrerit molestie. Curabitur sed sem consectetur, laoreet dolor id, interdum neque. Duis nulla turpis, sollicitudin non tempor et, fringilla et turpis. Integer fermentum, tortor eu imperdiet ultrices, erat lacus rutrum mauris, in ultrices risus sapien nec tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc quis venenatis eros, ac eleifend orci. Mauris sed vehicula tortor, sed tristique libero. Nunc a justo mauris. Mauris sed iaculis tellus. Integer molestie dapibus facilisis. Integer pretium nisi nec mauris cursus convallis. Pellentesque vestibulum tincidunt mauris, vitae pellentesque velit aliquam eget.
				</p>
			</Project>
			<Project title="Outil de ticketing"
				medias={[
					'https://ogden_images.s3.amazonaws.com/www.iamcountryside.com/images/sites/2/2022/02/13131252/AdobeStock_74466779-scaled-e1675118602223.jpeg',
					'https://ogden_images.s3.amazonaws.com/www.iamcountryside.com/images/sites/2/2022/02/13131252/AdobeStock_74466779-scaled-e1675118602223.jpeg',
					'https://ogden_images.s3.amazonaws.com/www.iamcountryside.com/images/sites/2/2022/02/13131252/AdobeStock_74466779-scaled-e1675118602223.jpeg',
					'https://ogden_images.s3.amazonaws.com/www.iamcountryside.com/images/sites/2/2022/02/13131252/AdobeStock_74466779-scaled-e1675118602223.jpeg',
					'https://ogden_images.s3.amazonaws.com/www.iamcountryside.com/images/sites/2/2022/02/13131252/AdobeStock_74466779-scaled-e1675118602223.jpeg',
				]}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet congue augue, sit amet ultrices massa. Pellentesque rutrum erat vitae scelerisque rhoncus. Donec eget vulputate justo. Sed eu vestibulum elit. Duis mattis tincidunt congue. Aliquam tincidunt metus imperdiet pharetra gravida. Mauris in condimentum sapien. Proin fermentum velit eget est iaculis, imperdiet posuere lectus placerat. Sed molestie nisl in maximus malesuada. Proin ut sem at arcu rhoncus feugiat ac ac massa. Aliquam consequat elit laoreet sapien suscipit tincidunt. Morbi at risus maximus, dictum mauris id, consequat sem. Duis bibendum blandit dui, at malesuada ante dictum a. Aliquam id interdum ante.
				</p>
				<p>
					Morbi a leo sapien. Mauris sit amet magna malesuada, sollicitudin lectus et, aliquam tellus. Ut justo eros, aliquam quis laoreet quis, posuere aliquet enim. Nulla non velit sed ipsum tempor sollicitudin. Pellentesque id urna id lectus maximus commodo in hendrerit orci. Vestibulum id interdum quam, nec malesuada nulla. Vestibulum iaculis iaculis blandit. Donec convallis aliquet orci et faucibus.
				</p>
				<p>
					Nulla facilisi. Vivamus fringilla ex non vulputate molestie. Pellentesque id hendrerit erat. Donec vestibulum tellus eu nulla scelerisque, non varius erat condimentum. Proin blandit massa at tellus hendrerit molestie. Curabitur sed sem consectetur, laoreet dolor id, interdum neque. Duis nulla turpis, sollicitudin non tempor et, fringilla et turpis. Integer fermentum, tortor eu imperdiet ultrices, erat lacus rutrum mauris, in ultrices risus sapien nec tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc quis venenatis eros, ac eleifend orci. Mauris sed vehicula tortor, sed tristique libero. Nunc a justo mauris. Mauris sed iaculis tellus. Integer molestie dapibus facilisis. Integer pretium nisi nec mauris cursus convallis. Pellentesque vestibulum tincidunt mauris, vitae pellentesque velit aliquam eget.
				</p>
			</Project>
		</div>
	</section>
}