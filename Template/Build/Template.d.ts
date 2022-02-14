declare namespace Template {
    function Intro(): ƒS.SceneReturn;
}
declare namespace Template {
    function showCredits(): void;
}
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
        blurr: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wet: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        backgroundTheme: string;
        dream: string;
        clickGeräusch: string;
        sleep: string;
        crying: string;
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
        Leyah: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
            };
        };
    };
    let gameMenu: ƒS.Menu;
    let menu: boolean;
}
