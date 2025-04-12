import { ASSET_URL } from "../config";

type CharacterName = "airing" | "bambi" | "cake" | "roro" | "ena" | "label";
type ExpressionIndex = "default" | "2" | "3" | "4";

type CharacterMedia = {
    stand: string;
    voice: string;
    expressions: {
        [key in ExpressionIndex]: string;
    };
};

type CharacterMap = {
    [key in CharacterName]: CharacterMedia;
};

export class Character implements CharacterMap {
    airing: CharacterMedia;
    bambi: CharacterMedia;
    cake: CharacterMedia;
    roro: CharacterMedia;
    ena: CharacterMedia;
    label: CharacterMedia;

    constructor() {
        const buildMedia = (name: CharacterName): CharacterMedia => {
            const base = `${ASSET_URL}/characters/${name}`;

            return {
                stand: `${base}/stand.webm`,
                voice: `${base}/voice.ogg`,
                expressions: {
                    "default": `${base}/expressions/1.png`,
                    "2": `${base}/expressions/2.png`,
                    "3": `${base}/expressions/3.png`,
                    "4": `${base}/expressions/4.png`,
                },
            };
        };

        this.airing = buildMedia("airing");
        this.bambi = buildMedia("bambi");
        this.cake = buildMedia("cake");
        this.roro = buildMedia("roro");
        this.ena = buildMedia("ena");
        this.label = buildMedia("label");
    }
}

// code with ChatGPT