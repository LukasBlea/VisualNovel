"use strict";
var Template;
(function (Template) {
    async function Intro() {
        let text = {
            narrator: {
                //Awake
                T0000: "Nanu? Ich habe schon wieder den ganzen Tag in meinem Zimmer verbracht...",
                T0001: "Würde ja gerne anders. Etwas erleben, neue Leute kennenlernen, aber irgendwas in mir hindert mich daran...es ist nicht einfach.",
                T0002: "Ich werde mich wohl schlafen legen...habe sonst nichts besseres zu tun und es wird schon spät.",
                T0003: "Im Schlaf kann ich immerhin eine Welt erleben, die nicht diese hier ist. Eine Welt, in der ich geschützt bin.",
                T0004: "Die Realität fühlt sich so leer an. Keiner der mich wirklich sieht. Keiner der realisiert wie zerbrochen ich bin.",
                T0005: "Vielleicht kann ich heute Nacht wieder in meinem Schlaf-...",
                T0006: "..........",
                T0007: "Nein...ich sollte mich einfach hinlegen.",
                //Asleep
                T0008: "Es ist so dunkel hier...ich kann nicht sehen!",
                T0009: "Wo-...Wo bin ich? Und wer bin ich?                         ",
                T0010: "Achja ich erinnere mich!    ",
                T0011: "Vor langer Zeit habe ich diesen Namen das letzte mal gehört. Oder war das erst vor kurzem?",
                T0012: "Es kommt mir so vor, als hätte man mich vergessen.",
                T0013: "Es fühlt sich an, als wäre dies hier ein unglaublich einsamer Ort.",
                T0014: "Ich kann ein leichtes Licht am Horizont erkennen.",
            },
        };
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0.2, 2, true);
        await Template.ƒS.Location.show(Template.locations.Schlafzimmer);
        await Template.ƒS.update(Template.transition.wet.duration, Template.transition.wet.alpha, Template.transition.wet.edge);
        // await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(70, 100));                           // Happy Haru mit Koordinaten auf Screen
        await Template.ƒS.update(0); // Sekunden
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
        await Template.ƒS.Location.show(Template.locations.Bed);
        await Template.ƒS.update(Template.transition.wet.duration, Template.transition.wet.alpha, Template.transition.wet.edge);
        await Template.ƒS.update(0);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0005);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0006);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0007);
        Template.ƒS.Sound.play(Template.sound.sleep, 1, false);
        let signalDelay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(3)]);
        await signalDelay();
        await Template.ƒS.Location.show(Template.locations.DreamStart);
        await Template.ƒS.update(Template.transition.blurr.duration, Template.transition.blurr.alpha, Template.transition.blurr.edge);
        await Template.ƒS.update(0);
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0, 1, false);
        Template.ƒS.Sound.fade(Template.sound.dream, 0.2, 2, true);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0008);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0009);
        Template.dataForSave.namePlayer = await Template.ƒS.Speech.getInput();
        await Template.ƒS.update(0);
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, text.narrator.T0010 + Template.dataForSave.namePlayer + " ...das ist mein Name. Oder das war er mal?"); // Delayed Textbox?
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, text.narrator.T0011); // Text ohne Anpassungen
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, text.narrator.T0012);
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, text.narrator.T0013);
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, text.narrator.T0014);
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, " ...was sollte ich wohl tun?", true, "Player"); // CSS Klasse "Player"
        let firstDialougeElementOptions = {
            iSayGo: "Ich kann kaum was sehen, aber werde mich nach vorne wagen!",
            iSayWait: "Ich traue mich nicht weiter zu gehen.",
            iSayNothing: "..."
        };
        let firstDialougeElement = await Template.ƒS.Menu.getInput(firstDialougeElementOptions, "individualCSSClass_Textbox");
        switch (firstDialougeElement) {
            case firstDialougeElementOptions.iSayGo:
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Nun gut...es fühlt sich an als würde ich mich in einem großen Raum befinden. Ich glaube ich kann mich fortbewegen, ohne irgendwo zu fallen oder mich zu stoßen.");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Meine Augen gewöhnen sich langsam an die Dunkelheit...ich fange an besser sehen zu können!");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "A-aber...was ist denn das? Eine Tür?");
                await Template.ƒS.Location.show(Template.locations.Doorway);
                await Template.ƒS.update(Template.transition.blurr.duration, Template.transition.blurr.alpha, Template.transition.blurr.edge);
                await Template.ƒS.update(0);
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Unheimlich...");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Nanu? Ich höre hinter dieser Tür doch etwas?");
                Template.ƒS.Sound.play(Template.sound.crying, 1, false);
                await signalDelay();
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Wer bist du?? Und warum weinst du?");
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "R-...Redest du mit mir?");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ja das tue ich!");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Deine Stimme sie...kommt mir so vertraut vor.");
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Ich habe dich hier schon öfter gesehen. Immer bist du auf der Suche nach einem Schlüssel, hast aber keine Ahnung wo du ihn finden kannst.");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Bin ich froh wenigstens nicht alleine hier sein zu müssen. Du meinst ich bin auf der Suche nach einem Schlüssel?");
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Naja zugegeben, das ist nicht das erste mal, dass wir miteinander reden. Du hattest dir vorgenommen mich von dieser Tür zu befreien.");
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Weißt du...ich sitze schon recht lange hier. Dabei sollte ich eigentlich gar nicht mehr hier sein...");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Oh, das tut mir leid. Ich wusste nicht, dass du schon so lange hinter dieser Tür eingesperrt bist. Weißt du wer oder was dich dahinter verschlossen hat?");
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Das weiß ich...aber die Antwort ist komplizierter als du es dir vorstellen kannst.");
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Wir kennen uns schon länger. Ich bin hier eingesperrt, weil du es so möchtest.");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Moment jetzt komme ich nicht mehr mit.");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Du sitzt hier eingesperrt weil ICH das so möchte? Wenn ich das wirklich möchte, warum habe ich dann die letzten male einen Schlüssel gesucht um deine Tür zu öffnen?");
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Ich sagte doch es ist nicht so einfach...");
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Du hast mich hier zwar eingesperrt, aber nicht weil du mir schaden wolltest. Nein...du wolltest mich vor langer Zeit wieder gehen lassen.");
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Allerdings hast du vergessen, dass ich hier bin. Nicht nur mich hast du vergessen, sondern auch den Schlüssel um mich frei zu lassen.");
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Jetzt bin ich hier...muss aber so schnell wie Möglich weg. Hörst du? Du musst mich UNBEDINGT gehen lassen!");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Tut mir leid, ich weiß nicht wie das alles passieren konnte. Ich werde mich sofort daran setzen dich zu befreien.");
                break;
            case firstDialougeElementOptions.iSayWait:
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Diese Dunkelheit erinnert mich an...an irgendetwas. Wie als wäre ich hier schon einmal gewesen. Jedoch war ich das letzte mal nicht alleine. Es war jemand mit mir hier.");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Aber nanu? Warum werde ich auf einmal so furchtbar traurig? Ich kann es nicht sehen, aber wissen tue ich es ganz genau: Mir fließen Tränen von den Augen.");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ja...ich bin mir ganz sicher. Immer wenn ich hier bin, fühle ich eine tiefe Trauer in mir. Es fühlt sich an als würde ich jemanden wichtiges verlieren.");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Oh meine Augen gewöhnen sich immer mehr an die Dunkelheit...auf einmal kann ich eine Wand hinter mir erkennen! Da steht doch irgendwas geschrieben...");
                await Template.ƒS.Location.show(Template.locations.Writing);
                await Template.ƒS.update(Template.transition.curtains.duration, Template.transition.curtains.alpha, Template.transition.curtains.edge);
                await Template.ƒS.update(0);
                break;
            case firstDialougeElementOptions.iSayNothing:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "...........................");
                break;
        }
        ;
        // Ton ausfaden/ausblenden
        Template.ƒS.Sound.fade(Template.sound.dream, 0, 2, false);
    }
    Template.Intro = Intro;
})(Template || (Template = {}));
var Template;
(function (Template) {
    function showCredits() {
        Template.ƒS.Text.setClass("credits");
        let credits = "<h1>CREDITS</h1>\
      <table>\
        <tr>\
          <td>Story</td>\
          <td>Lukas Blea</td>\
        </tr>\
        <tr>\
          <td>Hintergründe</td>\
          <td>Lukas Blea</td>\
        </tr>\
        <tr>\
          <td>Musik</td>\
          <td>www.elements.envato.com/de</td>\
        </tr>\
        <tr>\
          <td>Soundeffekte</td>\
          <td>www.elements.envato.com/de</td>\
        </tr>\
      </table>\
      ";
        Template.ƒS.Speech.hide();
        Template.ƒS.Text.print(credits);
    }
    Template.showCredits = showCredits;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    //define transitions
    Template.transition = {
        clock: {
            duration: 2,
            alpha: "./Images/Transitions/puzzle.png",
            edge: 3, //Härtegrad der Transition
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
        }
    };
    Template.sound = {
        // music
        backgroundTheme: "./Sounds/Quiet.mp3",
        dream: "./Sounds/Dream.mp3",
        // Sound
        clickGeräusch: "./Sounds/Click.mp3",
        sleep: "./Sounds/Sleeping.wav",
        crying: "./Sounds/Crying.wav"
    };
    // Backgrounds
    Template.locations = {
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
    Template.dataForSave = {
        namePlayer: "",
        score: 0
    };
    Template.characters = {
        narrator: {
            name: "???"
        },
        Leyah: {
            name: "Leyah",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/HaruChill.png",
            },
        }
    };
    let inGameMenu = {
        save: "Save",
        load: "Load",
        credits: "Credits",
    };
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenu.load:
                await Template.ƒS.Progress.load();
                break;
            case inGameMenu.credits:
                Template.showCredits();
                break;
        }
    }
    Template.menu = true;
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (Template.menu == true) {
                    console.log("Close");
                    Template.gameMenu.close();
                    Template.menu = false;
                }
                else {
                    console.log("Open");
                    Template.gameMenu.open();
                    Template.menu = true;
                }
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        Template.gameMenu =
            Template.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        let scenes = [
            { scene: Template.Intro, name: "Beginning" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map