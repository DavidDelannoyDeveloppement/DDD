'use strict';

// Navigation mobile et fermeture au clavier.
const boutonMenu = document.querySelector('.bouton-menu');
const navigationPrincipale = document.querySelector('#navigation');

boutonMenu?.addEventListener('click', () => {
	const estOuvert = boutonMenu.getAttribute('aria-expanded') !== 'true';
	boutonMenu.setAttribute('aria-expanded', String(estOuvert));
	navigationPrincipale.classList.toggle('ouverte', estOuvert);
});

boutonMenu?.addEventListener('keydown', evenement => {
	if (evenement.key === 'Escape') fermerMenu();
});

navigationPrincipale?.addEventListener('keydown', evenement => {
	if (evenement.key === 'Escape') fermerMenu();
});

function fermerMenu() {
	boutonMenu.setAttribute('aria-expanded', 'false');
	navigationPrincipale.classList.remove('ouverte');
	boutonMenu.focus();
}

// Le formulaire Google existant est chargé uniquement à la demande.
const boutonFormulaire = document.querySelector('#afficher-formulaire');

boutonFormulaire?.addEventListener('click', () => {
	const cadreFormulaire = document.createElement('iframe');
	cadreFormulaire.src = boutonFormulaire.dataset.formulaire;
	cadreFormulaire.title = 'Formulaire de contact David Delannoy Développement';
	cadreFormulaire.referrerPolicy = 'strict-origin-when-cross-origin';
	document.querySelector('#conteneur-formulaire').append(cadreFormulaire);
	boutonFormulaire.hidden = true;
});

const contexteContact = document.querySelector('#contexte-contact');
const objetDemande = new URLSearchParams(location.search).get('objet');

if (contexteContact && objetDemande === 'Gestion-commerciale') {
	contexteContact.textContent = 'Votre demande concerne l’application de gestion commerciale.';
}
