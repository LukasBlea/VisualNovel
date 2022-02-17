namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  //define transitions
  export let transition = {
    clock: {
      duration: 2,
      alpha: "./Images/Transitions/puzzle.png",   //Pfad zum Image der Transition 
      edge: 3,                                    //Härtegrad der Transition
    },
    curtains: {
      duration: 1,
      alpha: "./Images/Transitions/curtains.png",
      edge: 2,
    },
    blurr: {
      duration: 1,
      alpha: "./Images/Transitions/blurr.png",
      edge: 2,
    },
    wet: {
      duration: 1,
      alpha: "./Images/Transitions/wet.jpg",
      edge: 2,
    },
    wirbel: {
      duration: 1,
      alpha: "./Images/Transitions/wirbel.jpg",
      edge: 2,
    },
    lines: {
      duration: 1,
      alpha: "./Images/Transitions/lines.jpg",
      edge: 2,
    }
  };

  export let sound = {
    // music
    backgroundTheme: "./Sounds/Quiet.mp3",       //MP3 meist das beste Format für Browser
    dream: "./Sounds/Dream.mp3",
    keyroom: "./Sounds/Keyroom.mp3",
    depression: "./Sounds/Depression.mp3",
    ending: "./Sounds/Ending.mp3",
    histheme: "./Sounds/HisTheme.mp3",

    // Sound
    clickGeräusch: "./Sounds/Click.mp3",
    sleep: "./Sounds/Sleeping.mp3",               //Voiceline by me (but not proud)
    crying: "./Sounds/Crying.wav",
    rumble: "./Sounds/Rumble.wav",
    laughing: "./Sounds/Laughing.mp3",
    breathing: "./Sounds/Heavy_breathing.wav",   //Voiceline by me
    aha: "./Sounds/aha.mp3",
    sigh: "./Sounds/sigh.mp3",                    //Voiceline by me
  };

  // Backgrounds
  export let locations = {
    Schlafzimmer: {
      name: "Schreibtisch",
      background: "./Images/Background/Computer_Room.png"
    },
    Bed: {
      name: "Bett",
      background: "./Images/Background/Bed.png"
    },
    DreamStart: {
      name: "Blackscreen",
      background: "./Images/Background/Blackscreen.png"
    },
    Doorway: {
      name: "Traumtür",
      background: "./Images/Background/Door.png"
    },
    WoIstSchluessel: {
      name: "WoIstSchluessel",
      background: "./Images/Background/WoIstSchluessel.png"
    },
    DoorCloseup: {
      name: "DoorCloseup",
      background: "./Images/Background/Door_closeup.png"
    },
    GoodEnding: {
      name: "GoodEnding",
      background: "./Images/Background/GoodEnding.png"
    },
    BadEnding: {
      name: "BadEnding",
      background: "./Images/Background/BadEnding.png"
    },
    OpenDoor: {
      name: "OpenDoor",
      background: "./Images/Background/OpenDoor.png"
    },
  };

  // Spielprozess speichern, Name des Spielers behalten
  export let dataForSave = {
    namePlayer: "",
    score: 0,
    talkedToLeyah: false,
    backToLeyah: false,
    amTheKey: false,
    sayNoToLeyah: false,
    slowStart: false,
  }

  export let characters = {
    narrator: {
      name: "???"
    },
    Leyah: {
      name: "Leyah",                                               //CSS Gestaltungs Name
      origin: ƒS.ORIGIN.BOTTOMCENTER,
    }
  }

  let inGameMenu = {
    save: "Save",
    load: "Load",
    credits: "Credits",
  };

  export let gameMenu: ƒS.Menu;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenu.save:
        await ƒS.Progress.save();
        break;
      case inGameMenu.load:
        await ƒS.Progress.load();
        break;
      case inGameMenu.credits:
        showCredits();
        break;
    }
  }
  export let menu: boolean = true;

  document.addEventListener("keydown", hndKeypress);
  async function hndKeypress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menu == true) {
          console.log("Close");
          gameMenu.close();
          menu = false;
        }
        else {
          console.log("Open");
          gameMenu.open();
          menu = true;
        }
        break;
    }
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu =
      ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");

    let scenes: ƒS.Scenes = [
      { scene: Intro, name: "Beginning" },
      { id: "WoIstSchluessel", scene: WoIstSchluessel, name: "WoIstSchluessel" },
      { id: "TalkingToLeyah", scene: TalkingToLeyah, name: "TalkingToLeyah" },
      { id: "LeyahBackground", scene: LeyahBackground, name: "LeyahBackground" },
      { id: "SlowStart", scene: SlowStart, name: "SlowStart" },
      { id: "Finale", scene: Finale, name: "Finale" }

    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}