"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strenghtBoss = exports.hpBoss = exports.bossGanon = exports.strenghtEnemy = exports.hpEnemy = exports.caracteristiquesBokoblin = exports.strenghtPlayers = exports.hpPlayers = exports.caracteristiquesPlayers = exports.randomEnemies = exports.choosePlayer = exports.entierAleatoire = exports.generateRandom = exports.getInput = exports.debutPartieIntro = void 0;
var readline = require('readline-sync');
var players = require('./players.json');
var enemies = require('./enemies.json');
var bosses = require('./bosses.json');
// on va écrire une fonction pour afficher le début de partie 
function debutPartieIntro() {
    console.log("Welcome to The Hyrule Castle. \nCan you save \x1b[95mPrincess Zelda\x1b[0m from the clutches of the powerful \x1b[91mGANNON\x1b[0m and his monsters?");
    // console.log("Before you set off to rescue the princess, you'll need to choose the character you're going to play.");
    // console.log("You play \x1b[92mLink\x1b[0m, the valiant hero who goes to rescue the princess."); pour le moment, l'user est Link, on essaiera de faire un random après
}
exports.debutPartieIntro = debutPartieIntro;
var getInput = function (question) { return readline.question("".concat(question, "\n")); }; // copié depuis Wordle
exports.getInput = getInput;
function generateRandom() {
    var playerByRarity = Math.random();
    return playerByRarity;
}
exports.generateRandom = generateRandom;
function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.entierAleatoire = entierAleatoire;
// on demande à l'user de choisir le joueur qu'il veut incarner
function choosePlayer() {
    // on génère un nombre au hasard
    var numberPlayerRandom = generateRandom();
    // on va comparer avec la rarete du JSON
    for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
        var i = players_1[_i];
        if (numberPlayerRandom > 0 && numberPlayerRandom <= 0.5) {
            if (i.rarity == 1) {
                return i.name;
            }
        }
        else if (numberPlayerRandom > 0.5 && numberPlayerRandom <= 0.8) {
            if (i.rarity == 2) {
                return i.name;
            }
        }
        else if (numberPlayerRandom > 0.8 && numberPlayerRandom <= 0.95) {
            if (i.rarity == 3) {
                return i.name;
            }
        }
        else if (numberPlayerRandom > 0.95 && numberPlayerRandom <= 0.99) {
            if (i.rarity == 4) {
                return i.name;
            }
        }
        else {
            if (i.rarity == 5) {
                return i.name;
            }
        }
    }
}
exports.choosePlayer = choosePlayer;
function randomEnemies() {
    var numberEnemyRandom = generateRandom();
    var tabEnemy = []; // je rajoute ça, car plusieurs ennemis ont le même rarity
    for (var _i = 0, enemies_1 = enemies; _i < enemies_1.length; _i++) {
        var i = enemies_1[_i];
        if (numberEnemyRandom > 0 && numberEnemyRandom <= 0.5) {
            if (i.rarity == 1) {
                tabEnemy.push(i);
            }
        }
        else if (numberEnemyRandom > 0.5 && numberEnemyRandom <= 0.8) {
            if (i.rarity == 2) {
                tabEnemy.push(i);
            }
        }
        else if (numberEnemyRandom > 0.8 && numberEnemyRandom <= 0.95) {
            if (i.rarity == 3) {
                tabEnemy.push(i);
            }
        }
        else if (numberEnemyRandom > 0.95 && numberEnemyRandom <= 0.99) {
            if (i.rarity == 4) {
                tabEnemy.push(i);
            }
        }
        else {
            if (i.rarity == 5) {
                tabEnemy.push(i);
            }
        }
    }
    if (tabEnemy.length > 1) {
        var unNombre = entierAleatoire(0, tabEnemy.length - 1);
        return tabEnemy[unNombre].name;
    }
    else if (tabEnemy.length == 1) {
        return tabEnemy[0].name;
    }
    else {
        console.error("Error");
    }
}
exports.randomEnemies = randomEnemies;
function caracteristiquesPlayers(player) {
    var playerDetails = []; // on va rentrer les caractéristiques dans cet array, pour pouvoir l'utiliser
    for (var _i = 0, players_2 = players; _i < players_2.length; _i++) {
        var player_s = players_2[_i];
        if (player_s.name == player) {
            playerDetails.push(player_s);
        }
    }
    return playerDetails;
}
exports.caracteristiquesPlayers = caracteristiquesPlayers;
function hpPlayers(player) {
    var details = caracteristiquesPlayers(player);
    for (var _i = 0, details_1 = details; _i < details_1.length; _i++) {
        var iterator = details_1[_i];
        return iterator.hp;
    }
}
exports.hpPlayers = hpPlayers;
function strenghtPlayers(player) {
    var details = caracteristiquesPlayers(player);
    for (var _i = 0, details_2 = details; _i < details_2.length; _i++) {
        var iterator = details_2[_i];
        return iterator.str;
    }
}
exports.strenghtPlayers = strenghtPlayers;
function caracteristiquesBokoblin(enemy_s) {
    var enemyDetails = [];
    for (var _i = 0, enemies_2 = enemies; _i < enemies_2.length; _i++) {
        var enemy = enemies_2[_i];
        if (enemy.name == enemy_s) {
            enemyDetails.push(enemy);
        }
    }
    return enemyDetails;
}
exports.caracteristiquesBokoblin = caracteristiquesBokoblin;
function hpEnemy(enemy) {
    var details = caracteristiquesBokoblin(enemy);
    for (var _i = 0, details_3 = details; _i < details_3.length; _i++) {
        var iterator = details_3[_i];
        return iterator.hp;
    }
}
exports.hpEnemy = hpEnemy;
function strenghtEnemy(enemy) {
    var details = caracteristiquesBokoblin(enemy);
    for (var _i = 0, details_4 = details; _i < details_4.length; _i++) {
        var iterator = details_4[_i];
        return iterator.str;
    }
}
exports.strenghtEnemy = strenghtEnemy;
function bossGanon(bigBoss) {
    var bossDetails = [];
    for (var _i = 0, bosses_1 = bosses; _i < bosses_1.length; _i++) {
        var boss = bosses_1[_i];
        if (boss.name == bigBoss) {
            bossDetails.push(boss);
        }
    }
    return bossDetails;
}
exports.bossGanon = bossGanon;
function hpBoss(bigBoss) {
    var details = bossGanon(bigBoss);
    for (var _i = 0, details_5 = details; _i < details_5.length; _i++) {
        var iterator = details_5[_i];
        return iterator.hp;
    }
}
exports.hpBoss = hpBoss;
function strenghtBoss(bigBoss) {
    var details = bossGanon(bigBoss);
    for (var _i = 0, details_6 = details; _i < details_6.length; _i++) {
        var iterator = details_6[_i];
        return iterator.str;
    }
}
exports.strenghtBoss = strenghtBoss;
try {
    debutPartieIntro();
    var joueur = choosePlayer();
    console.log("You play \u001B[92m".concat(joueur, "\u001B[0m, the valiant hero who goes to rescue the princess."));
    // on va créer les variables qu'on va utiliser dans la boucle, pour éviter d'avoir des noms à rallonge
    // caractéristiques du character
    var joueurDetailHp = hpPlayers(joueur);
    var joueurDetailStrenght = strenghtPlayers(joueur);
    var joueurHPconst = joueurDetailHp;
    // caractéristiques du enemy
    var enemy = randomEnemies();
    var enemyDetailHp = hpEnemy(enemy);
    var enemyDetailStrenght = strenghtEnemy(enemy);
    var enemyHPconst = enemyDetailHp;
    // caractéristiques de GANNON
    var bigBoss = "Ganon";
    var bossDetailHp = hpBoss(bigBoss);
    var bossDetailStrenght = strenghtBoss(bigBoss);
    var bossHPconst = bossDetailHp;
    console.log("\nYou'll face Gannon's henchmen, the \u001B[91m".concat(enemy, "\u001B[0m. Watch out, they're ferocious."));
    for (var f = 8; f <= 10; f++) {
        if (joueurDetailHp <= 0) {
            break;
        } // ainsi, on refait la même condition, et ça permet de sortir du for
        if (f > 9) {
            console.clear();
            console.log("\nF\u00E9licitations d'\u00EAtre arriv\u00E9 ici, vous allez affonter le Big Boss : \u001B[91m".concat(bigBoss, "\u001B[0m"));
            // console.log(`\n========== FIGHT ${f} ==========\n`); 
            // console.log(`\x1b[91m${bigBoss}\x1b[0m\n❤  ${'\x1b[92m▮\x1b[0m'.repeat(bossDetailHp)}${'\x1b[92m_\x1b[0m'.repeat(bossHPconst - bossDetailHp)} ${bossDetailHp} / ${bossHPconst}\n`);
            // console.log(`\x1b[92m${joueur}\x1b[0m\n❤  ${'\x1b[92m▮\x1b[0m'.repeat(joueurDetailHp)}${'\x1b[92m_\x1b[0m'.repeat(joueurHPconst - joueurDetailHp)} ${joueurDetailHp} / ${joueurHPconst}\n`);
            while (bossDetailHp >= 0 || joueurDetailHp >= 0) {
                console.log("\n========== FIGHT ".concat(f, " ==========\n"));
                console.log("\u001B[91m".concat(bigBoss, "\u001B[0m\n\u2764  ").concat('\x1b[92m▮\x1b[0m'.repeat(bossDetailHp)).concat('\x1b[92m_\x1b[0m'.repeat(bossHPconst - bossDetailHp), " ").concat(bossDetailHp, " / ").concat(bossHPconst, "\n"));
                console.log("\u001B[92m".concat(joueur, "\u001B[0m\n\u2764  ").concat('\x1b[92m▮\x1b[0m'.repeat(joueurDetailHp)).concat('\x1b[92m_\x1b[0m'.repeat(joueurHPconst - joueurDetailHp), " ").concat(joueurDetailHp, " / ").concat(joueurHPconst, "\n"));
                var commandes = (0, exports.getInput)("Attack or Heal ?\n");
                switch (Number(commandes)) {
                    case 1:
                        console.log("\nYou attacked and dealt ".concat(joueurDetailStrenght, " damages."));
                        bossDetailHp -= joueurDetailStrenght;
                        break;
                    case 2:
                        console.log("\nYou used Heal!");
                        joueurDetailHp += joueurHPconst * 0.5;
                        if (joueurDetailHp > joueurHPconst) {
                            joueurDetailHp = joueurHPconst;
                        }
                        break;
                    default:
                        console.log("Wrong.\n");
                        continue;
                }
                joueurDetailHp -= bossDetailStrenght;
                console.log("\n".concat(bigBoss, " attacked and dealt ").concat(enemyDetailStrenght, " damages.\n"));
                if (bossDetailHp <= 0 && joueurDetailHp <= 0) {
                    console.log("You both died...");
                    break;
                }
                if (bossDetailHp <= 0) {
                    console.log("Congrats !!! ".concat(bigBoss, " is dead!"));
                    break;
                }
                if (joueurDetailHp <= 0) {
                    console.log("Aie... you died!");
                    break;
                }
            }
            break;
        }
        enemyDetailHp = enemyHPconst;
        while (enemyDetailHp >= 0 || joueurDetailHp >= 0) {
            console.log("\n========== FIGHT ".concat(f, " ==========\n"));
            console.log("\u001B[91m".concat(enemy, "\u001B[0m\n\u2764  ").concat('\x1b[92m▮\x1b[0m'.repeat(enemyDetailHp)).concat('\x1b[92m_\x1b[0m'.repeat(enemyHPconst - enemyDetailHp), " ").concat(enemyDetailHp, " / ").concat(enemyHPconst, "\n"));
            console.log("\u001B[92m".concat(joueur, "\u001B[0m\n\u2764  ").concat('\x1b[92m▮\x1b[0m'.repeat(joueurDetailHp)).concat('\x1b[92m_\x1b[0m'.repeat(joueurHPconst - joueurDetailHp), " ").concat(joueurDetailHp, " / ").concat(joueurHPconst, "\n"));
            // d'abord j'attaque, puis après le switch, l'adversaire répond
            // if (f === 1) { console.log(`You encounter a ${enemy}.\n`); }
            var commande = (0, exports.getInput)("Attack or Heal ?\n");
            switch (Number(commande)) {
                case 1:
                    console.log("\nYou attacked and dealt ".concat(joueurDetailStrenght, " damages."));
                    enemyDetailHp -= joueurDetailStrenght;
                    break;
                case 2:
                    console.log("\nYou used Heal!");
                    joueurDetailHp += joueurHPconst * 0.5;
                    if (joueurDetailHp > joueurHPconst) {
                        joueurDetailHp = joueurHPconst;
                    }
                    break;
                default:
                    console.log("Wrong.\n");
                    continue;
            }
            // peu importe si user utilise Attack ou Heal, Bokoblin répond 
            // et il ne répond qu'en attaquant, mais seulement quand user a rentré 1 ou 2, s'il a écrit autre chose, ça recommence
            joueurDetailHp -= enemyDetailStrenght;
            console.log("\n".concat(enemy, " attacked and dealt ").concat(enemyDetailStrenght, " damages.\n"));
            if (enemyDetailHp <= 0 && joueurDetailHp <= 0) {
                console.log("You both died...");
                break;
            }
            if (enemyDetailHp <= 0) {
                console.log("".concat(enemy, " n\u00B0").concat(f, " died!"));
                break;
            }
            if (joueurDetailHp <= 0) {
                console.log("Aie... you died!");
                break;
            } // doit faire ceci pour sortir du while, mais ne sort pas du for
            // i++;
        }
    }
}
catch (error) {
    console.error("Tu retrouves une erreur ici : ", error);
}
/*

let hpB = 40;
let hpBC = hpB;
let hpL = 80;
let hpLC = hpL;
let strL = 15;
let strB = 12;

let i = 1;
const command: number = 1;

export const getInput = (question: string) => readline.question(`${question}\n`);

// bien que le i est utilisé pour le FIGHT, il serait plus judicieux pour le FLOOR
for (let f = 1; f <= 9; f++) {
    if (hpL <= 0) { break; } // ainsi, on refait la même condition, et ça permet de sortir du for
    hpB = hpBC;
    while (hpB >= 0 || hpL >= 0) {
        console.log(`========== FIGHT ${f} ==========`);
        console.log(`\x1b[91mBokoblin\x1b[0m\nHP : ${'I'.repeat(hpB)}${'_'.repeat(hpBC - hpB)} ${hpB} / ${hpBC}\n`);
        console.log(`\x1b[92mLink\x1b[0m\nHP : ${'I'.repeat(hpL)}${'_'.repeat(hpLC - hpL)} ${hpL} / ${hpLC}\n`);
        // d'abord j'attaque, puis après le switch, l'adversaire répond
        if (f === 1) { console.log("You encounter a Bokoblin.\n"); }
        let commande = getInput("Attack or Heal ?\n");

        switch (Number(commande)) {
            case 1:
                console.log(`\nYou attacked and dealt ${strL} damages.`);
                hpB -= strL;
                break;
            case 2:
                console.log(`\nYou used Heal!`);
                hpL += hpLC * 0.5
                if (hpL > hpLC) { hpL = hpLC; }
                break;
            default:
                console.log("Wrong.\n");
                continue;
        }
        // peu importe si user utilise Attack ou Heal, Bokoblin répond
        // et il ne répond qu'en attaquant, mais seulement quand user a rentré 1 ou 2, s'il a écrit autre chose, ça recommence
        hpL -= strB;
        console.log(`\nBokoblin attacked and dealt ${strB} damages.\n`);

        if (hpB <= 0) { console.log(`Bokoblin n°${f} died!`); break; }
        if (hpL <= 0) { console.log(`Aie... you died!`); break; } // doit faire ceci pour sortir du while, mais ne sort pas du for
        // i++;
    }
}*/ 
