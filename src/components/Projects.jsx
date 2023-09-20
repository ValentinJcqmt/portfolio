import './../css/components/Projects.scss';
import Project from './Project';

export default function Projects(){
	return <section id="projects" className="Projects">
		<div className='Projects__container'>
			<h2 className='Projects__title'>
				Réalisations
			</h2>
			<Project title="Outil de ticketing"
				subtitle="Laravel, React, Projet complet"
				mediaPosition="right"
				medias={[
					'projects/ticketing/create-ticket.mp4',
					'projects/ticketing/back-office.png'
				]}>
				<ul>
					<li>Projet interne, gestion de tickets, connexion, roles utilisateurs, dépots de tickets, échanges de messages et de pièces jointes</li>
					<li>Développeur réferrent, conception et rédaction de specifications techniques</li>
					<li>Front et routing React, API Laravel, back-office laravel nova</li>
				</ul>
			</Project>
			<Project title="Générateur de logos"
				subtitle="Laravel, React, Projet complet"
				mediaPosition="left"
				medias={[
					'projects/logo/create-icon.mp4',
					'projects/logo/create-logo.mp4',
					'projects/logo/list.mp4',
				]}>
				<ul>
					<li>Projet interne client, harmonisation communication interne</li>
					<li>Front et routing React, API Laravel</li>
					<li>3 interfaces principales : générateur d'icone, générateur de logo (icone + lignes de texte), bibliothèque d'icones et de logos</li>
					<li>Générateur de logo sur balise canvas suivant plusieurs contraintes</li>
					<li>Stockage de seed et textes des logos en base de données</li>
					<li>Génération et téléchargement d'un dossier compressé comprenant les fichiers png et svg d'un logo</li>
				</ul>
			</Project>
			<Project title="Chatbot F.A.Q."
				subtitle="Wordpress, Javascript, PHP"
				url="https://monsuivi.ivginfo.com/desktop/"
				mediaPosition="right"
				medias={[
					'projects/chatbot/chatbot.mp4',
					'projects/chatbot/back-office.png',
				]}>
				<ul>
					<li>Administration d'un CPT de questions et réponses</li>
					<li>Récupération des réponses et listes de questions en ajax</li>
					<li>Animation d'affichage progressif</li>
				</ul>
			</Project>
			<Project title="Moteur de recherche"
				subtitle="Wordpress, PHP"
				url="https://www.urd.org/fr/page-de-recherche/"
				mediaPosition="left"
				medias={[
					'projects/moteur-recherche/form.png',
					'projects/moteur-recherche/results.png',
				]}>
				<ul>
					<li>Moteur de recherche sur environnement Wordpress</li>
					<li>Recherche parmis 8 CPT et X taxonomies, dates de publications, dates d'évènements (champs meta sur 1 CPT Evenement), multilangue (WPML)</li>
				</ul>
			</Project>
			<Project title="Eco-conception et accessibilité"
				subtitle="Wordpress, Javascript, CSS"
				url="https://www.st-jacques.fr/"
				mediaPosition="right"
				medias={[
					'projects/ecoconception/homepage.png'
				]}>
				<ul>
					<li>Réalisation de la page d'accueil, menu de navigation, et plusieurs gabarits de pages du site</li>
					<li>Options d'accessibilités : taille de typographie, typo dyslexie</li>
					<li>Enjeu d'éco-conception : optimisation d'images, le moins d'animations et de javascript possible, optimisation du stockage d'images wordpress (réduction du nombre d'images sizes)</li>
				</ul>
			</Project>
			<Project title="Module d'offres d'emploi"
				subtitle="Wordpress, PHP, CSS"
				url="https://www.liguehautsdefrancetennis.fr/offres-emploi/"
				mediaPosition="left"
				medias={[
					'projects/offres-emploi/list.png',
					'projects/offres-emploi/form.png'
				]}>
				<ul>
					<li>Gestion d'un CPT d'offre d'emploi : page liste par région</li>
					<li>Formulaire de dépôt d'offre accessible pour tous les visiteurs du site</li>
				</ul>
			</Project>
		</div>
	</section>
}