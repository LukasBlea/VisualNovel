declare namespace Template {
    function Intro(): ƒS.SceneReturn;
}
declare namespace Template {
    function showCredits(): void;
}
declare namespace Template {
    function Finale(): ƒS.SceneReturn;
}
declare namespace Template {
    function LeyahBackground(): ƒS.SceneReturn;
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
        wirbel: {
            duration: number;
            alpha: string;
            edge: number;
        };
        lines: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        backgroundTheme: string;
        dream: string;
        keyroom: string;
        depression: string;
        ending: string;
        histheme: string;
        clickGeräusch: string;
        sleep: string;
        crying: string;
        rumble: string;
        laughing: string;
        breathing: string;
        aha: string;
        sigh: string;
        door: string;
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
        WoIstSchluessel: {
            name: string;
            background: string;
        };
        DoorCloseup: {
            name: string;
            background: string;
        };
        GoodEnding: {
            name: string;
            background: string;
        };
        BadEnding: {
            name: string;
            background: string;
        };
        OpenDoor: {
            name: string;
            background: string;
        };
    };
    let dataForSave: {
        namePlayer: string;
        score: number;
        talkedToLeyah: boolean;
        backToLeyah: boolean;
        amTheKey: boolean;
        sayNoToLeyah: boolean;
        slowStart: boolean;
    };
    let characters: {
        narrator: {
            name: string;
        };
        Leyah: {
            name: string;
            origin: ƒ.ORIGIN2D;
        };
        Protagonist: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                huh: string;
                abscent: string;
                thinking: string;
                standardLinks: string;
                standardRechts: string;
            };
        };
    };
    function leftToRight(): ƒS.AnimationDefinition;
    function rightToLeft(): ƒS.AnimationDefinition;
    function ExitToLeftt(): ƒS.AnimationDefinition;
    function OOBrightToLeft(): ƒS.AnimationDefinition;
    function OOBleftToRight(): ƒS.AnimationDefinition;
    function ExitToRight(): ƒS.AnimationDefinition;
    let gameMenu: ƒS.Menu;
    let menu: boolean;
}
declare namespace Template {
    function SlowStart(): ƒS.SceneReturn;
}
declare namespace Template {
    function TalkingToLeyah(): ƒS.SceneReturn;
}
declare namespace Template {
    function WoIstSchluessel(): ƒS.SceneReturn;
}
