declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
        curtains: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        backgroundTheme: string;
        clickGeräusch: string;
        sleep: string;
    };
    let locations: {
        Schlafzimmer: {
            name: string;
            background: string;
        };
        Bed: {
            name: string;
            background: string;
        };
        DreamStart: {
            name: string;
            background: string;
        };
        Doorway: {
            name: string;
            background: string;
        };
        Writing: {
            name: string;
            background: string;
        };
    };
    let dataForSave: {
        namePlayer: string;
        score: number;
    };
    let characters: {
        narrator: {
            name: string;
        };
        Protagonist: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
            };
            ErsterZeuge: {
                name: string;
                origin: ƒ.ORIGIN2D;
                pose: {
                    angry: string;
                    fear: string;
                    upset: string;
                    neutral: string;
                };
            };
        };
    };
    let gameMenu: ƒS.Menu;
    let menu: boolean;
}
declare namespace Template {
    function Intro(): ƒS.SceneReturn;
}
