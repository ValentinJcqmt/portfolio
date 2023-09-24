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
				<p>
					Réalisation d'un outil ticketing basé sur <b>Laravel et React</b>.
					<br/>
					J'ai été en charge de ce projet de la <b>conception du cahier des charges</b>, jusqu'à sa mise en ligne, en passant par la validation des maquettes UX/UI et le développement du projet.
					<br/>
					Le projet repose sur un développement back sur Laravel et front en React JS. Le système de routing de pages est géré par <b>react-router-dom</b>. L'application React échange les données (affichage de données, envois de formulaires) <b>via une API Laravel</b>.
				</p>
				<p>
					Les fonctionnalités principales du projet :
				</p>
				<ul>
					<li>Formulaire de dépôt de ticket : Formulaire React, envoi du formulaire sur l'API Laravel, validation du formulaire via une custom Request Laravel, gestion de réponse de retour de l'API, affichage de messages d'erreur et de validation.</li>
					<li>Système d'échange de messages textes via un éditeur Tiptap, échanges de pièces-jointes associées à chaque message</li>
					<li><b>Gestion de rôles utilisateur</b> : Utilisateur "client" pouvant déposer et lire les tickets qu'il a déposé. Utilisateur "collaborateur" pouvant lire tous les tickets et les administrer</li>
					<li><b>Notifications mail</b> lors de nouveaux messages sur un ticket</li>
					<li>Liste de tickets avec <b>filtres dynamiques</b> : par projet, par collaborateur assigné, par statut de ticket, etc</li>
				</ul>
				<p>
					En plus du développement et du challenge technique de ce projet, j'ai pu me confronter à d'autres exercices liés au métier de chef de projet :
				</p>
				<ul>
					<li><b>Rédaction d'un cahier des charges complet</b></li>
					<li>Brief, échanges et validation de maquettes UI en collaboration avec un graphiste</li>
					<li><b>Planification du projet</b> sur le planning de 4 développeurs</li>
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
				<p>
					Réalisation du développement, et aide à la conception d'une application comprenant : un générateur de logo en 2 étapes et un système de stockage et de gestion des logos créés.
					<br/>
					L'objectif du projet était d'harmoniser la communication interne d'un client, notament via ce générateur de logo permettant de gérer la création et la gestion des logos d'une grande quantité de pôles différents.
					<br/>
					En collaboration avec un chef de projet et un graphiste, j'ai pu aider sur la conception du parcours utilisateur et de l'UX des différents écrans de l'application.
					<br/>
					Le projet a été réalisé en <b>Laravel et React</b>. Laravel pour les échanges avec la base de données (models pour les sigles et pour les logos) via des <b>entrées API</b>, et la connexion utilisateur. Et React pour le routing des URL des différents écrans et le générateur de sigles et de logos.
					<br/>
				</p>
				<p>
					Les principales fonctionnalités de l'application sont divisées sur 3 écrans principaux :
				</p>
				<ul>
					<li><b>Générateur de sigle/icône :</b>
						<ul>
							<li>Une balise &lt;canvas&gt; divisée en 4 zones. Sélection d'une zone au clic, puis choix de différentes options de création sur le panneau d'actions tel que le <b>choix de couleur, de la forme, de la rotation ou génération d'un icône complet aléatoire.</b></li>
							<li>Pour les administrateurs : <b>Enregistrement de l'icône en base de données, sous forme de seed</b></li>
							<li>Pour les non-administrateurs : Saisie d'un formulaire pour envoyer une <b>demande de validation d'icône par mail</b> aux administrateurs</li>
							<li><b>Affichage de messages d'erreur et surbrillance des zones erronées</b> de l'icône lorsque l'icône n'est pas valide (trop de fois la même couleur ou la même forme)</li>
							<li>Lors de la création et de l'enregistrement, vérification en base de données qu'un icône identique n'existe pas</li>
						</ul>
					</li>
					<li><b>Générateur de logo :</b>
						<ul>
							<li>Création d'un logo à partir d'un icône précédement enregistré</li>
							<li>Choix des textes du logo, ligne par ligne, avec <b>limite et décompte du nombre de caractères</b> pour chaque ligne</li>
							<li><b>Aperçu du logo final</b> sur une balise &lt;canvas&gt; avec <b>positionnement du texte, couleur et taille de typographie selon le nombre de lignes saisies</b></li>
							<li>Enregistrement de base de données du logo complet : Lignes de textes saisies et <b>relation de table avec l'ID de l'icône utilisé</b></li>
						</ul>
					</li>
					<li><b>Bibliothèque d'icônes et de logos :</b>
						<ul>
							<li>Bibliothèque séparée en 2 onglets pour les administrateurs. Pas d'onglet pour les non-administrateurs car accès uniquement à la bibliothèque de logo</li>
							<li>Actions au survol de chaque logo et icône. <b>Nombre d'actions limitées pour les non-administrateurs</b></li>
							<li>Téléchargement des logos : Pour chaque logo, génération du logo sur une balise &lt;canvas&gt; masquée, puis <b>génération des images PNG et SVG</b> au format base64, avec et sans fond blanc. <b>Génération et téléchargement d'un fichier compressé</b> comprenant l'ensemble des fichiers triés par dossiers</li>
						</ul>
					</li>
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
				<p>
					<b>Système de questions dynamiques, administrables</b> via un Custom Post Type Wordpress.
					<br/>
					Pour chaque question, administration des différentes bulles de réponses, et d'une liste de questions supplémentaire avec une sélection parmis les questions existantes.
					<br/>
					Animation de l'affichage des questions et réponses sous forme de chatbot en Javascript
					<br/>
					Chargement des réponses et des suites de questions via des <b>requêtes ajax.</b>
				</p>
			</Project>
			<Project title="Moteur de recherche"
				subtitle="Wordpress, PHP"
				url="https://www.urd.org/fr/page-de-recherche/"
				mediaPosition="left"
				medias={[
					'projects/moteur-recherche/form.png',
					'projects/moteur-recherche/results.png',
				]}>
				<p>
					Développement d'un moteur de recherche sur un environnement Wordpress.
					<br/>
					Gestion d'URL : <b>slug d'archive de taxonomie</b> lorsqu'une seule taxonomie est sélectionnée dans le filtre, sinon paramètres d'url GET.
					<br/>
					Script Javascript lors de la modification d'un filtre pour réécrire, générer et rediriger sur l'URL avec les paramètres des filtres.
					<br/>
					Organisation des scripts du moteur de recherche dans une class PHP : Décomposition des paramètres d'url précédement générés en Javascript, génération du tableau de paramètres WP_Query, exécution des différentes query, tri et réorganisation des résultats des différentes query pour l'affichage.
				</p>
				<p>
					Possibilités de filtres :
				</p>
				<ul>
					<li>Recherche textuelle</li>
					<li>Filtre sur <b>8 Cutom Post Type et 5 taxonomies</b></li>
					<li>Filtre par date : dates d'évènements sur un CPT "Evenements" (<b>champs meta Wordpress</b>), et <b>date de publication</b> pour les autres CPT</li>
					<li>Filtre par <b>langue (via plugin WPML)</b></li>
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