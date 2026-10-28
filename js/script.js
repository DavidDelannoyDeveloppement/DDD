'use strict';

// Navigation mobile et fermeture au clavier.
const boutonMenu = document.querySelector('.bouton-menu');
const navigationPrincipale = document.querySelector('#navigation');

boutonMenu?.addEventListener('click', () => {
	const estOuvert = boutonMenu.getAttribute('aria-expanded') !== 'true';
	boutonMenu.setAttribute('aria-expanded', String(estOuvert));
	navigationPrincipale?.classList.toggle('ouverte', estOuvert);
});

boutonMenu?.addEventListener('keydown', evenement => {
	if (evenement.key === 'Escape') fermerMenu();
});

navigationPrincipale?.addEventListener('keydown', evenement => {
	if (evenement.key === 'Escape') fermerMenu();
});

function fermerMenu() {
	if (!boutonMenu || !navigationPrincipale) return;
	boutonMenu.setAttribute('aria-expanded', 'false');
	navigationPrincipale.classList.remove('ouverte');
	boutonMenu.focus();
}

// Conserver la continuité des liens directs vers la gestion commerciale.
const contexteContact = document.querySelector('#contexte-contact');
const lienEnvoyerEmail = document.querySelector('#lien-envoyer-email');
const objetDemande = new URLSearchParams(window.location.search).get('objet');

const contextesContact = {
	'Gestion-commerciale': {
		texte: 'Votre demande concerne une application de gestion commerciale.',
		objet: 'Demande - application de gestion commerciale'
	},
	'Renfort-administratif': {
		texte: 'Votre demande concerne une prestation de renfort administratif à distance.',
		objet: 'Demande - renfort administratif à distance'
	}
};

const contexteSelectionne = contextesContact[objetDemande];
if (contexteSelectionne) {
	if (contexteContact) contexteContact.textContent = contexteSelectionne.texte;
	if (lienEnvoyerEmail) {
		lienEnvoyerEmail.href = `mailto:daviddelannoydeveloppement@gmail.com?subject=${encodeURIComponent(contexteSelectionne.objet)}`;
	}
}
