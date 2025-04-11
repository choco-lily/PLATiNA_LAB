import { Ranking } from "./API/ranking";

const rank = new Ranking();
(async () => console.log(await rank.getRank(120403)))();
