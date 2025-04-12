import { Ranking } from "./API/ranking";
import { Character } from "./API/character";

const rank = new Ranking();
(async () => console.log(await rank.getRank(120403)))();

const character = new Character()
console.log(character.airing)