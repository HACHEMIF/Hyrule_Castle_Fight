import { error, log, table } from "console";
import Players from "./interface";
import { it } from "node:test";
const readline = require('readline-sync');
const players = require('./players.json');
const enemies = require('./enemies.json');
const bosses = require('./bosses.json');

// on va écrire une fonction pour afficher le début de partie 
export function debutPartieIntro() {    
    console.log("Welcome to The Hyrule Castle. \nCan you save \x1b[95mPrincess Zelda\x1b[0m from the clutches of the powerful \x1b[91mGANNON\x1b[0m and his monsters?");
    // console.log("Before you set off to rescue the princess, you'll need to choose the character you're going to play.");
    // console.log("You play \x1b[92mLink\x1b[0m, the valiant hero who goes to rescue the princess."); pour le moment, l'user est Link, on essaiera de faire un random après
    
}

export const getInput = (question: string) => readline.question(`${question}\n`); // copié depuis Wordle

export function generateRandom(): number {
    const playerByRarity = Math.random();
    return playerByRarity;
}

export function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// on demande à l'user de choisir le joueur qu'il veut incarner
export function choosePlayer() {
    // on génère un nombre au hasard
    const numberPlayerRandom = generateRandom();
    
    // on va comparer avec la rarete du JSON
    for (const i of players) {
        if (numberPlayerRandom > 0 && numberPlayerRandom <= 0.5) {
            if (i.rarity == 1) { return i.name; }
        } else if (numberPlayerRandom > 0.5 && numberPlayerRandom <= 0.8) {
            if (i.rarity == 2) { return i.name; }
        } else if (numberPlayerRandom > 0.8 && numberPlayerRandom <= 0.95) {
            if (i.rarity == 3) { return i.name; }
        } else if (numberPlayerRandom > 0.95 && numberPlayerRandom <= 0.99) { 
            if (i.rarity == 4) { return i.name; }
        } else {
            if (i.rarity == 5) { return i.name; }
        } 
    }
}

export function randomEnemies(): string {
    const numberEnemyRandom = generateRandom();
    const tabEnemy: Players[] = []; // je rajoute ça, car plusieurs ennemis ont le même rarity

    for (const i of enemies) {
        if (numberEnemyRandom > 0 && numberEnemyRandom <= 0.5) {
            if (i.rarity == 1) { 
                tabEnemy.push(i);
            }
        } else if (numberEnemyRandom > 0.5 && numberEnemyRandom <= 0.8) {
            if (i.rarity == 2) { 
                tabEnemy.push(i);
            }
        } else if (numberEnemyRandom > 0.8 && numberEnemyRandom <= 0.95) {
            if (i.rarity == 3) { 
                tabEnemy.push(i);
            }
        } else if (numberEnemyRandom > 0.95 && numberEnemyRandom <= 0.99) { 
            if (i.rarity == 4) { 
                tabEnemy.push(i);
            }
        } else {
            if (i.rarity == 5) { 
                tabEnemy.push(i);
            }
        } 
    }
    if (tabEnemy.length > 1) {
        const unNombre = entierAleatoire(0, tabEnemy.length - 1);
        return tabEnemy[unNombre].name;
    } else if (tabEnemy.length == 1) {
        return tabEnemy[0].name;
    } else {
        console.error("Error");
    }
}

export function caracteristiquesPlayers(player: string) {
    const playerDetails: Players[] = []; // on va rentrer les caractéristiques dans cet array, pour pouvoir l'utiliser
    for (const player_s of players) {
        if (player_s.name == player) { playerDetails.push(player_s); }
    }
    return playerDetails;
}

export function hpPlayers(player: string) { // me renvoie le HP du joueur sélectionné
    const details = caracteristiquesPlayers(player);
    for (const iterator of details) { return iterator.hp }
}

export function strenghtPlayers(player: string) { // me renvoie le STR du joueur sélectionné
    const details = caracteristiquesPlayers(player);
    for (const iterator of details) { return iterator.str }
}

export function caracteristiquesBokoblin(enemy_s: string) {
    const enemyDetails: Players [] = [];
    for (const enemy of enemies) {
        if (enemy.name == enemy_s) { enemyDetails.push(enemy) }
    }
    return enemyDetails;
}

export function hpEnemy(enemy: string) { // me renvoie le HP du joueur sélectionné
    const details = caracteristiquesBokoblin(enemy);
    for (const iterator of details) { return iterator.hp }
}

export function strenghtEnemy(enemy: string) { // me renvoie le STR du joueur sélectionné
    const details = caracteristiquesBokoblin(enemy);
    for (const iterator of details) { return iterator.str }
}

export function bossGanon(bigBoss: string) {
    const bossDetails: Players [] = [];
    for (const boss of bosses) {
        if (boss.name == bigBoss) { bossDetails.push(boss); }
    }
    return bossDetails;
}

export function hpBoss(bigBoss: string) {
    const details = bossGanon(bigBoss);
    for (const iterator of details) { return iterator.hp }
}

export function strenghtBoss(bigBoss: string) {
    const details = bossGanon(bigBoss);
    for (const iterator of details) { return iterator.str }
}

try {
    debutPartieIntro();
    const joueur = choosePlayer();
    console.log(`You play \x1b[92m${joueur}\x1b[0m, the valiant hero who goes to rescue the princess.`);

    // on va créer les variables qu'on va utiliser dans la boucle, pour éviter d'avoir des noms à rallonge
    // caractéristiques du character
    let joueurDetailHp = hpPlayers(joueur);
    let joueurDetailStrenght = strenghtPlayers(joueur);
    let joueurHPconst = joueurDetailHp;

    // caractéristiques du enemy
    const enemy: string = randomEnemies();
    let enemyDetailHp = hpEnemy(enemy);
    let enemyDetailStrenght = strenghtEnemy(enemy);
    let enemyHPconst = enemyDetailHp;

    // caractéristiques de GANNON
    const bigBoss = "Ganon";
    let bossDetailHp = hpBoss(bigBoss);
    let bossDetailStrenght = strenghtBoss(bigBoss);
    let bossHPconst = bossDetailHp;
    
    console.log(`\nYou'll face Gannon's henchmen, the \x1b[91m${enemy}\x1b[0m. Watch out, they're ferocious.`);
        
    for (let f = 8; f <= 10; f++) {                   
            if (joueurDetailHp <= 0) { break; } // ainsi, on refait la même condition, et ça permet de sortir du for
            if (f > 9) {
                console.clear();
                console.log(`\nFélicitations d'être arrivé ici, vous allez affonter le Big Boss : \x1b[91m${bigBoss}\x1b[0m`);
                // console.log(`\n========== FIGHT ${f} ==========\n`); 
                // console.log(`\x1b[91m${bigBoss}\x1b[0m\n❤  ${'\x1b[92m▮\x1b[0m'.repeat(bossDetailHp)}${'\x1b[92m_\x1b[0m'.repeat(bossHPconst - bossDetailHp)} ${bossDetailHp} / ${bossHPconst}\n`);
                // console.log(`\x1b[92m${joueur}\x1b[0m\n❤  ${'\x1b[92m▮\x1b[0m'.repeat(joueurDetailHp)}${'\x1b[92m_\x1b[0m'.repeat(joueurHPconst - joueurDetailHp)} ${joueurDetailHp} / ${joueurHPconst}\n`);
                while (bossDetailHp >= 0 || joueurDetailHp >= 0) {
                    console.log(`\n========== FIGHT ${f} ==========\n`); 
                    console.log(`\x1b[91m${bigBoss}\x1b[0m\n❤  ${'\x1b[92m▮\x1b[0m'.repeat(bossDetailHp)}${'\x1b[92m_\x1b[0m'.repeat(bossHPconst - bossDetailHp)} ${bossDetailHp} / ${bossHPconst}\n`);
                    console.log(`\x1b[92m${joueur}\x1b[0m\n❤  ${'\x1b[92m▮\x1b[0m'.repeat(joueurDetailHp)}${'\x1b[92m_\x1b[0m'.repeat(joueurHPconst - joueurDetailHp)} ${joueurDetailHp} / ${joueurHPconst}\n`);
                    let commandes = getInput("Attack or Heal ?\n")

                    switch (Number(commandes)) {
                        case 1:
                            console.log(`\nYou attacked and dealt ${joueurDetailStrenght} damages.`);
                            bossDetailHp -= joueurDetailStrenght;
                            break;
                        case 2:
                            console.log(`\nYou used Heal!`);
                            joueurDetailHp += joueurHPconst * 0.5
                            if (joueurDetailHp > joueurHPconst) { joueurDetailHp = joueurHPconst; }
                            break;
                        default:
                            console.log("Wrong.\n");
                            continue;
                    }
                    joueurDetailHp -= bossDetailStrenght;
                    console.log(`\n${bigBoss} attacked and dealt ${enemyDetailStrenght} damages.\n`);

                    if (bossDetailHp <= 0 && joueurDetailHp <= 0) { console.log("You both died..."); break; }
                    if (bossDetailHp <= 0) { console.log(`Congrats !!! ${bigBoss} is dead!`); break; }
                    if (joueurDetailHp <= 0) { console.log("Aie... you died!"); break; }
                }
                break;
            }
            enemyDetailHp = enemyHPconst;
            while (enemyDetailHp >= 0 || joueurDetailHp >= 0) {
                console.log(`\n========== FIGHT ${f} ==========\n`);
                console.log(`\x1b[91m${enemy}\x1b[0m\n❤  ${'\x1b[92m▮\x1b[0m'.repeat(enemyDetailHp)}${'\x1b[92m_\x1b[0m'.repeat(enemyHPconst - enemyDetailHp)} ${enemyDetailHp} / ${enemyHPconst}\n`);
                console.log(`\x1b[92m${joueur}\x1b[0m\n❤  ${'\x1b[92m▮\x1b[0m'.repeat(joueurDetailHp)}${'\x1b[92m_\x1b[0m'.repeat(joueurHPconst - joueurDetailHp)} ${joueurDetailHp} / ${joueurHPconst}\n`);
                // d'abord j'attaque, puis après le switch, l'adversaire répond
                // if (f === 1) { console.log(`You encounter a ${enemy}.\n`); }
                let commande = getInput("Attack or Heal ?\n");

                switch (Number(commande)) {
                    case 1:
                        console.log(`\nYou attacked and dealt ${joueurDetailStrenght} damages.`);
                        enemyDetailHp -= joueurDetailStrenght;
                        break;
                    case 2:
                        console.log(`\nYou used Heal!`);
                        joueurDetailHp += joueurHPconst * 0.5
                        if (joueurDetailHp > joueurHPconst) { joueurDetailHp = joueurHPconst; }
                        break;
                    default:
                        console.log("Wrong.\n");
                        continue;
                }
                // peu importe si user utilise Attack ou Heal, Bokoblin répond 
                // et il ne répond qu'en attaquant, mais seulement quand user a rentré 1 ou 2, s'il a écrit autre chose, ça recommence
                joueurDetailHp -= enemyDetailStrenght;
                console.log(`\n${enemy} attacked and dealt ${enemyDetailStrenght} damages.\n`);
                
                if (enemyDetailHp <= 0 && joueurDetailHp <= 0) { console.log("You both died..."); break; }
                if (enemyDetailHp <= 0) { 
                    console.log(`${enemy} n°${f} died!`);
                    break;
                }
                if (joueurDetailHp <= 0) { console.log(`Aie... you died!`); break; } // doit faire ceci pour sortir du while, mais ne sort pas du for
                // i++;
            }
    }    

} catch (error) {
    console.error("Tu retrouves une erreur ici : ", error);
}