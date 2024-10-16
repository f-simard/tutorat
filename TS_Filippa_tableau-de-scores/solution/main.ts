// @ts-ignore
import { expect, test } from "https://maxime-pigeon.github.io/t/test.js";

// declare que player est un objet avec 2 attributs: nom(string) et score(number)
type player = { name: string; score: number };

// declare que scoreboard est un objet avec 2 attribut: date de creation et tableaux de joueurs
type scoreboard = { created: Date; players: player[] };

// creer le scoreboard et retourne le scoreboard pour pouvoir ajouter des choses. il n'y a pas de joueurs donc on met un tableau vide
function newScoreboard(): scoreboard {
	const now = new Date();
	return { created: now, players: [] };
}

let echecs = newScoreboard();
// console.log('console echecs', echecs);
// let quilles = newScoreboard();
// console.log('console quilles', quilles);

// ajouter un joueur dans le scoreboard donnee, selonle nom et le score
// pas besoin de dire pcq on a un gabarit TS
function addPlayer(sb: scoreboard, name: string, score: number): scoreboard {
	const p = { name, score };
	// console.log('nouvelle personne', p);
	// console.log("scoreboard mise a jour", {
	// 	created: sb.created,
	// 	players: sb.players.concat([p]),
	// });

	//ajoute la nouvelle personne dans le tableau qui existe deja de personnes
	//concat fusionne. donc on fusionne les joueurs deja existant avec le nouveau joueurs
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
	return { created: sb.created, players: sb.players.concat([p]) };
}

echecs = addPlayer(echecs, "Max", 1);
// console.log(echecs);
echecs = addPlayer(echecs, "Annie", 2);
console.log(echecs);
// console.log(quilles);
echecs = addPlayer(echecs, "Tom", 1);
// console.log(echecs);

// test("should add a player to the scoreboard", () => {
//     const actual = addPlayer(newScoreboard(), "bob", 1).players;
//     const expected = [{ name: "bob", score: 1 }];
//     expect(actual).toBe(expected);
// });

// fonction qui retire un jour du scoreboard passé en parametre
// La fonction crée un tableau de joueurs vides. On passe au travers des joueurs du scoreboard avec une boucle.
// Si le nom est le meme que celui passé en parametre, on ignore et on va au prochain joueur, sinon, on ajoute le joueur au nouveau tableau (précédement vide)
function removePlayer(sb: scoreboard, name: string): scoreboard {
	//declare updatedPlayers de type tableau de player et on le commence vide

	console.log("sb:", sb);
	console.log(sb.created);

	const updatedPlayers: player[] = [];
	for (const p of sb.players) {
		console.log("nom evalue: ", p.name);
		// if (p.name === name) continue;
		// updatedPlayers.push(p);

		if(p.name === name){
			console.log('skip');
		} else {
			console.log('ajoute dans nouveau table')
		}
	}
	return { created: sb.created, players: updatedPlayers };
}

echecs = removePlayer(echecs, "Annie");

// test("should remove a player to the scoreboard", () => {
//     const sb = addPlayer(newScoreboard(), "bob", 1);
//     const actual = removePlayer(sb, "bob").players;
//     const expected: player[] = [];
//     expect(actual).toBe(expected);
// });

function updateScore(sb: scoreboard, name: string, score: number): scoreboard {
	let newSb = newScoreboard();
	newSb.created = new Date(sb.created); // pour garder la date originale
	for (const p of sb.players) {
		if (p.name === name) {
			newSb = addPlayer(newSb, p.name, score);
			continue;
		}
		newSb = addPlayer(newSb, p.name, p.score);
	}
	return newSb;
}

echecs = updateScore(echecs, "Max", 22);
console.log(echecs);

// test("should update a player's score", () => {
//     const sb = addPlayer(newScoreboard(), "bob", 1);
//     const actual = updateScore(sb, "bob", 2).players;
//     const expected = addPlayer(newScoreboard(), "bob", 2).players;
//     expect(actual).toBe(expected);
// });

// test("should not update the original scoreboard", () => {
//     const sb = addPlayer(newScoreboard(), "bob", 1);
//     updateScore(sb, "bob", 2);
//     const actual = sb.players;
//     const expected = addPlayer(newScoreboard(), "bob", 1).players;
//     expect(actual).toBe(expected);
// });

function applyMondayBonus(sb: scoreboard): scoreboard {
    const monday = 1;
    if (sb.created.getDay() !== monday) return sb;

    const bonus = 100;
    let newSb = newScoreboard();
    newSb.created = new Date(sb.created); // pour garder la date originale
    for (const p of sb.players) {
        newSb = addPlayer(newSb, p.name, p.score + bonus);
    }
    return newSb;
}

echecs = applyMondayBonus(echecs);
console.log(echecs);

// type stats = {
//     minimum: number;
//     maximum: number;
//     average: number;
// };

// function getStats(sb: scoreboard): stats {
//     return {
//         minimum: calcMinScore(sb),
//         maximum: calcMaxScore(sb),
//         average: calcAvgScore(sb),
//     };
// }

// function calcMinScore(sb: scoreboard): number {
//     let min = sb.players.length ? sb.players[0].score : 0;
//     for (const p of sb.players) {
//         if (p.score > min) continue;
//         min = p.score;
//     }
//     return min;
// }

// test("should calculate the minimum score", () => {
//     const sb = addPlayer(addPlayer(newScoreboard(), "bob", 1), "bobette", 3);
//     const actual = calcMinScore(sb);
//     const expected = 1;
//     expect(actual).toBe(expected);
// });

// function calcMaxScore(sb: scoreboard): number {
//     let max = 0;
//     for (const p of sb.players) {
//         if (p.score < max) continue;
//         max = p.score;
//     }
//     return max;
// }

// test("should calculate the maximum score", () => {
//     const sb = addPlayer(addPlayer(newScoreboard(), "bob", 1), "bobette", 3);
//     const actual = calcMaxScore(sb);
//     const expected = 3;
//     expect(actual).toBe(expected);
// });

// function calcAvgScore(sb: scoreboard): number {
//     let sum = 0;
//     for (const p of sb.players) sum += p.score;
//     return sum / sb.players.length;
// }

// test("should calculate the average score", () => {
//     const sb = addPlayer(addPlayer(newScoreboard(), "bob", 1), "bobette", 3);
//     const actual = calcAvgScore(sb);
//     const expected = 2;
//     expect(actual).toBe(expected);
// });
