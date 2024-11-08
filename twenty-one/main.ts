// @ts-ignore
import { expect, test } from "https://maxime-pigeon.github.io/t/test.js";

type carte = { rang: number; famille: number; valeur: number };
type etat = { deck: carte[]; mainJoueur: carte[]; mainBanque: carte[] };

function creerEtat(): etat {
	const deckVide = [] as carte[];
	const mainVide = [] as carte[];

	return { deck: deckVide, mainJoueur: mainVide, mainBanque: mainVide };
}

function creerDeck(): carte[] {
	const nbRang = 13;
	const nbFamille = 4;
	const valeurSpeciale = 10;

	let deck = [] as carte[];

	for (let i = 1; i <= nbRang; i++) {
		let valeur = 0;

		switch (i) {
			case 1:
				valeur = 11;
				break;
			case 11:
			case 12:
			case 13:
				valeur = valeurSpeciale;
				break;
			default:
				valeur = i;
		}

		for (let j = 1; j <= nbFamille; j++) {
			const carte = { rang: i, famille: j, valeur: valeur };
			deck.push(carte);
		}
	}

	return deck;
}

function melangerDeck(deck: carte[]): carte[] {
	const deckMelange = [] as carte[];

	for (const carte of deck) {
		deckMelange.push(carte);
	}

	for (
		let indexCarteA = deckMelange.length - 1;
		indexCarteA >= 0;
		indexCarteA--
	) {
		const indexRandom = Math.floor(Math.random() * (indexCarteA + 1));

		const carteA = deckMelange[indexCarteA];
		const carteRandom = deckMelange[indexRandom];

		deckMelange[indexCarteA] = carteRandom;
		deckMelange[indexRandom] = carteA;
	}

	return deckMelange;
}

function creerNouvelEtat(
	deckRecu: carte[],
	mainJoueurRecu: carte[],
	mainBanqueRecu: carte[]
): etat {
	let nouvelEtat = creerEtat();
	nouvelEtat.deck = deckRecu;
	nouvelEtat.mainJoueur = mainJoueurRecu;
	nouvelEtat.mainBanque = mainBanqueRecu;

	return nouvelEtat;
}

function tirerCarte(etatRecu: etat, main: string): etat {
	const etatJoue = creerNouvelEtat(
		etatRecu.deck,
		etatRecu.mainJoueur,
		etatRecu.mainBanque
	);

	const carteTire = etatJoue.deck[0];
	etatJoue.deck.shift();
	if (main == "joueur") {
		etatJoue.mainJoueur.push(carteTire);
	} else if (main == "banque") {
		etatJoue.mainBanque.push(carteTire);
	}

	return etatJoue;
}

// jouer tour
// // evaluer so = 21, si oui, stop - gagne
// // evualuer si > 21, si oui stop - perd
// // <21, demander si veux nouvelle carte
// // // si phrase cle, stop -- fin tour
// // // sinon tire carte joueur, et redemande

// function evaluer score

// function tire 2 cartes banque
// // retirer 2 du deck, ajouter dans la main

function main(): void {
	const deckNeuf = creerDeck();
	const deckMelange = melangerDeck(deckNeuf);

	const etatInitial = creerNouvelEtat(deckMelange, [], []);

	const etatTire1 = tirerCarte(etatInitial, "joueur");
	console.log(etatTire1);
	const etatTire2 = tirerCarte(etatTire1, "joueur");
	console.log(etatTire2);

	//Tour: joueur

		// Joueur:  joue jusqu'a
		//	// win
		// // lose
		// // je m'y tien

	// Tour banque 
	const etatTire3 = tirerCarte(etatTire2, "banque");
	console.log(etatTire3);
		// banque : joue jusqu'a
		// // win
		// // lose
		// // >= 17

	// compare scores
	// // ex. joueur: 15, banque: 18 -- banque win 


}
main();
