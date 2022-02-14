namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  //define transitions
  export let transition = {
    clock: {
      duration: 2,
      alpha: "./Images/Transitions/puzzle.png",   //Pfad zum Image der Transition 
      edge: 3,                                  //Härtegrad der Transition
    },
    curtains: {
      duration: 1,
      alpha: "./Images/Transitions/curtains.png",
      edge: 2,
    }
  };

  export let sound = {
  // music
    backgroundTheme: "./Sounds/Quiet.mp3",  //MP3 meist das beste Format für Browser

  // Sound
    clickGeräusch: "./Sounds/Click.mp3",  
    sleep: "./Sounds/Sleeping.wav",
  };

  // Backgrounds
  export let locations = {
    Schlafzimmer: {
      name: "Schreibtisch",
      background: "./Images/Background/Computer_Room.png",
    },
    Bed: {
      name: "Bett",
      background: "./Images/Background/Bed.png",
    },
    DreamStart: {
      name: "Blackscreen",
      background: "./Images/Background/Blackscreen.png",
    },
    Doorway: {
      name: "Traumtür",
      background: "./Images/Background/Door.png",
    },
    Writing: {
      name: "Warning",
      background: "./Images/Background/Writing_Dream.png"
    }
  };

  // Spielprozess speichern, Name des Spielers behalten
  export let dataForSave = {
    namePlayer: "",
    score: 0
  }

  export let characters = {
    narrator: {
      name: "???"
    },
    Protagonist: {
      name: "Haru", //CSS Gestaltungs Name
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        happy: "./Images/Characters/HaruChill.png",
      },
    ErsterZeuge: {
      name: "Harvey",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./Characters/Harvey/Angry.png",
        fear: "./Characters/Harvey/Fear.png",
        upset: "./Characters/Harvey/Upset.png",
        neutral: "./Characters/Harvey/Neutral.png",
      },
      }
    }
  }

  let inGameMenu = {
    save: "Save",
    load: "Load",
    close: "Close",
    turnUpVolume: "+",
    turndownVolume: "-",
    credits: "Credits",
    about: "About",
    open: "Open"
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
      case inGameMenu.close:
        gameMenu.close();
        break;
      case inGameMenu.open:
        gameMenu.open();
        break;
      case inGameMenu.credits:
        //showCredits();
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
      { scene: Intro, name: "Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}