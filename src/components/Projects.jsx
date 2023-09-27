import './../css/components/Projects.scss';
import Project from './Project';

export default function Projects(){
	return <section id="projects" className="Projects">
		<div className='Projects__container'>
			<h2 className='Projects__title'>
				Réalisations
			</h2>
			<Project title="Outil de ticketing"
				subtitle="Laravel, React"
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
					Le projet repose sur un développement backend Laravel et frontend React JS avec une gestion des routes via <b>react-router-dom</b>. Pour l'affichage et l'envoi de données, l'application React communique avec <b>l'API Laravel</b>.
				</p>
				<p>
					Les principales fonctionnalités du projet :
				</p>
				<ul>
					<li>Formulaire de dépôt de ticket : Formulaire React, envoi du formulaire sur l'API Laravel, validation du formulaire via une custom Request Laravel, gestion de réponse de retour de l'API, affichage de messages d'erreur et de validation.</li>
					<li>Système d'échange de messages texte via un éditeur Tiptap, incluant des pièces-jointes</li>
					<li><b>Gestion de rôles utilisateur</b> : Client pouvant déposer et lire ses tickets. Administrer pouvant lire tous les tickets et modifier leurs statuts</li>
					<li><b>Notifications mail</b> lors de nouveaux messages sur un ticket</li>
					<li>Liste de tickets avec <b>filtres dynamiques</b> : par projet, collaborateur assigné, statut de ticket, etc</li>
				</ul>
				<p>
					En plus du développement et du challenge technique de ce projet, j'ai pu me confronter à d'autres exercices liés au métier de chef de projet :
				</p>
				<ul>
					<li><b>Rédaction d'un cahier des charges détaillé</b></li>
					<li>Brief, échanges et validation de maquettes UI avec un graphiste</li>
					<li><b>Planification du projet</b> sur le planning de 4 développeurs</li>
				</ul>
			</Project>
			<Project title="Générateur de logos"
				subtitle="Laravel, React"
				mediaPosition="left"
				medias={[
					'projects/logo/create-icon.mp4',
					'projects/logo/create-logo.mp4',
					'projects/logo/list.mp4',
				]}>
				<p>
					Réalisation du développement, et aide à la conception d'une application comprenant : un générateur de logo en 2 étapes et un système de stockage et de gestion des logos créés.
					<br/>
					L'objectif était d'harmoniser la communication interne d'un client, notamment via la création et la gestion de logos pour différents pôles.
					<br/>
					En collaboration avec un chef de projet et un graphiste, j'ai participé à la conception du parcours utilisateur et de l'UX des différents écrans de l'application.
					<br/>
					Le projet a été réalisé avec <b>Laravel et React</b>. Laravel pour les échanges avec la base de données, la connexion utilisateur, et la communication via <b>API</b> avec le frontend. React pour le routing et le générateur de sigles et de logos.
					<br/>
				</p>
				<p>
					Les principales fonctionnalités de l'application :
				</p>
				<ul>
					<li><b>Générateur de sigle/icône :</b>
						<ul>
							<li>Une balise &lt;canvas&gt; divisée en 4 zones interactives</li>
							<li>Pour les administrateurs : <b>Enregistrement de l'icône en base de données</b></li>
							<li>Pour les non-administrateurs : Saisie d'un formulaire pour <b>demandes de validation d'icône par mail</b></li>
							<li><b>Affichage de messages d'erreur et surbrillance des zones erronées</b> lorsque l'icône n'est pas valide</li>
							<li>Vérification de l'unicité de chaque icône</li>
						</ul>
					</li>
					<li><b>Générateur de logo :</b>
						<ul>
							<li>Création de logos à partir d'icônes précédemment enregistrées</li>
							<li>Personnalisation des textes du logo,  avec <b>limite et décompte du nombre de caractères</b> et aperçu en temps réel</li>
							<li>Enregistrement de base de données des logos complets</li>
						</ul>
					</li>
					<li><b>Bibliothèque d'icônes et de logos :</b>
						<ul>
							<li>Actions au survol de chaque logo et icône. <b>Nombre d'actions limitées pour les non-administrateurs</b></li>
							<li>Téléchargement des logos : <b>génération des images PNG et SVG</b>, avec et sans fond blanc. <b>Génération et téléchargement d'un fichier compressé</b> comprenant l'ensemble des fichiers</li>
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
					<b>Système de questions dynamique, administrables</b> via un Custom Post Type Wordpress.
					<br/>
					Pour chaque question, administration des différentes bulles de réponses, et d'une liste de questions supplémentaire avec une sélection parmi les questions existantes.
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
					Réalisation d'un moteur de recherche sur un environnement Wordpress.
					<br/>
					Gestion d'URL : <b>slug d'archive de taxonomie</b> et paramètres d'url GET.
					<br/>
					Script Javascript lors de la modification d'un filtre pour réécrire, générer et rediriger sur l'URL avec les paramètres des filtres.
					<br/>
					Organisation des scripts du moteur de recherche dans une class PHP : Décomposition des paramètres d'url précédemment générés en Javascript, génération du tableau de paramètres WP_Query, exécution des différentes requêtes, tri et réorganisation des résultats pour l'affichage.
				</p>
				<p>
					Les filtres incluent la recherche textuelle, le filtrage sur <b>8 Cutom Post Type et 5 taxonomies</b>, par dates (dates d'événements et de publications selon les post types), par <b>langue (via plugin WPML)</b>
				</p>
			</Project>
			<Project title="Eco-conception et accessibilité"
				subtitle="Wordpress, Javascript, CSS"
				url="https://www.st-jacques.fr/"
				mediaPosition="right"
				medias={[
					'projects/ecoconception/homepage.png'
				]}>
				<p>
					Réalisation de la page d'accueil, le menu de navigation, et plusieurs gabarits de pages d'un site vitrine avec un enjeu d'<b>éco-conception</b> et d'<b>accessibilité</b>.
					<br/>
					Amélioration de l'accessibilité via des options de choix de typographie adaptée à la dyslexie, et de différentes tailles de typographie. Enregistrement des choix d'option d'accessibilités de l'utilisateur via des <b>cookies de navigation</b>.
					<br/>
					Pour répondre aux enjeux d'éco-conception du client, les images du sites uploadées par les administrateurs sont <b>automatiquement optimisées et générées au format webp</b>. L'espace de stockage a été optimisé en limitant le nombre de fichiers image générés par Wordpress.
					<br/>
					Afin d'<b>accélérer le temps de chargement du site et de réduire le poids des requêtes serveur</b>, le site a été conçu en minimisant la quantité d'animations javascript et CSS, réduisant ainsi l'utilisation des ressources du device de l'utilisateur. Par exemple : Menu de navigation sur 3 niveaux via des balises html &lt;summary&gt;, pas d'animations CSS sur des changements de couleurs ou filtres visuels
				</p>
			</Project>
			<Project title="Générations et utilisations de bons de réductions"
				subtitle="Laravel, Javascript"
				url="https://www.eaudubassinrennais-collectivite.fr/espace-doc/espace-interactif/maison-ecodo/"
				mediaPosition="left"
				medias={[
					'projects/vouchers/scan.jpg',
					'projects/vouchers/form.png'
				]}>
				<p>
					Réalisation d'une application <b>Laravel</b> permettant la création de bons de réduction.
					<br/>
					L'application est intégrée en iframe dans un site vitrine (après validation de 3 étapes), avec formulaire d'inscription. Envoi, validation et messages d'erreur du formulaire via <b>requêtes asynchrones Javascript</b>.
					<br/>
					<br/>
					Génération de bons d'achat sous forme de code aléatoire, vérification de la disponibilité du code généré avant de l'enregistrer.
					<br/>
					<b>Notifications mail</b> à l'utilisateur contenant son bon d'achat au format texte et <b>QR Code</b>.
					<br/>
					Les codes sont soumis à un délai de validité, calculé selon sa date de création. Mise en place d'emails de rappels quelques jours avant la date limite d'utilisation de chaque code.
					<br/>
					Création de page de validation de bons d'achat pour plusieurs enseignes/magasins permettant de valider ou non la validité des codes lors du passage en caisse.
					<br/>
					Validation du code au format texte ou via <b>lecteur de QR Code</b>
					<br/>
					Nombre de bons d'achat limité, avec <b>création d'une entrée API</b> sur l'application Laravel permettant au site vitrine de vérifier le nombre de bons d'achat disponibles avant d'afficher le formulaire. Calcul du nombre de bons d'achats disponibles selon le nombre de bons générés, utilisés et périmés.
				</p>
			</Project>
		</div>
	</section>
}