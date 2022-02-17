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
        let signalDelay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(3)]);
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0.2, 2, true);
        await Template.ƒS.Location.show(Template.locations.Schlafzimmer);
        await Template.ƒS.update(Template.transition.wirbel.duration, Template.transition.wirbel.alpha, Template.transition.wirbel.edge);
        await Template.ƒS.update(0);
        await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.standardLinks, Template.OOBrightToLeft());
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
        Template.ƒS.Character.hideAll();
        await Template.ƒS.Location.show(Template.locations.Bed);
        await Template.ƒS.update(Template.transition.wet.duration, Template.transition.wet.alpha, Template.transition.wet.edge);
        await Template.ƒS.update(0);
        await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.standardRechts, Template.OOBleftToRight());
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0005);
        Template.ƒS.Sound.play(Template.sound.sigh, 0.8, false);
        await signalDelay();
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0006);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0007);
        Template.ƒS.Sound.play(Template.sound.sleep, 1, false);
        Template.ƒS.Character.hideAll();
        await Template.ƒS.Location.show(Template.locations.DreamStart);
        await signalDelay();
        await Template.ƒS.update(Template.transition.wirbel.duration, Template.transition.wirbel.alpha, Template.transition.wirbel.edge);
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
            iSayWait: "Ich möchte nicht laufen...man kann gar nichts sehen!",
        };
        let firstDialougeElement = await Template.ƒS.Menu.getInput(firstDialougeElementOptions, "FirstDecisions");
        switch (firstDialougeElement) {
            case firstDialougeElementOptions.iSayGo:
                return "TalkingToLeyah";
            case firstDialougeElementOptions.iSayWait:
                return "WoIstSchluessel";
        }
        ;
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
          <td>Endcredits</td>\
          <td>Undertale - His Theme</td>\
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
    async function Finale() {
        // TRUE ENDING --> GOOD ENDING
        if (Template.dataForSave.amTheKey == true) {
            await Template.ƒS.Location.show(Template.locations.DoorCloseup);
            await Template.ƒS.update(Template.transition.blurr.duration, Template.transition.blurr.alpha, Template.transition.blurr.edge);
            await Template.ƒS.update(0);
            Template.ƒS.Sound.fade(Template.sound.depression, 0, 1, true);
            Template.ƒS.Sound.fade(Template.sound.histheme, 0.8, 2, true);
            let signalDelay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(3)]);
            await signalDelay();
            await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.standardRechts, Template.OOBleftToRight());
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Leyah hörst du das???");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Wir haben nicht mehr viel Zeit!");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Warum hast du's mir nicht gesagt Leyah?");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "DU HÄTTEST ES MIR NUR SAGEN MÜSSEN!");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Wenn ich gewusst hätte, dass diese Tür kein Schloss besitzt...");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Es tut mir leid " + Template.dataForSave.namePlayer + ". Du musstest von selbst drauf kommen.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Der Schlüssel war verloren...");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "...denn du wusstest nicht mehr was richtig oder falsch war.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Hätte ich dir verraten, dass du dich in einem Traum befindest, wärst du zu schnell aufgewacht.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Du musstest aus dir selbst heraus die Tür öffnen versteht du?");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Auf einmal hast du so stark an mir festgehalten, obwohl du es doch damals selbst beendet hattest " + Template.dataForSave.namePlayer + ".");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Es tut mir leid!! Du hättest niemals in alles reingezogen werden sollen! Es tut mir so leid...");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Dir muss nichts leid tun " + Template.dataForSave.namePlayer + ". Du hast dich so lange gequält und niemand hat gesehen wie sehr du darunter gelitten hast.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Verschwende nicht zwei weitere Jahre daran an mich zu denken...du musst doch deinen eigenen Weg finden. Genau wie ich.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Wir müssen einfach weitermachen...verstehst du?");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich verstehe-");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "...");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Leyah...ich lasse dich jetzt los ok? Ich versuche ohne dich Glücklich zu werden.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich öffne die Tür und lasse dich somit gehen...ok?");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Versprich mir, dass du aufhören wirst an mich zu denken. Du musst es mir versprechen, hörst du " + Template.dataForSave.namePlayer + "?");
            let finalQuestion = {
                iSayGo: "Ich verspreche es dir",
            };
            let fifthDialougeElement = await Template.ƒS.Menu.getInput(finalQuestion, "FirstDecisions");
            switch (fifthDialougeElement) {
                case finalQuestion.iSayGo:
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Ich danke dir " + Template.dataForSave.namePlayer + "!...schreite endlich voran in deinem Leben, ok? Ich werde schon zurechtkommen. Wir müssen jetzt ohne einander weitermachen.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Nein ich danke dir Leyah...danke für alles.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Gib auf dich Acht...<3");
                    await Template.ƒS.Location.show(Template.locations.OpenDoor);
                    await Template.ƒS.update(Template.transition.blurr.duration, Template.transition.blurr.alpha, Template.transition.blurr.edge);
                    await Template.ƒS.update(0);
                    Template.ƒS.Speech.hide();
                    let signalDelay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(60)]);
                    await signalDelay();
            }
        }
        // BAD ENDING --> ENDING BY SAYING "Ich will dir nicht helfen"
        if (Template.dataForSave.sayNoToLeyah == true) {
            await Template.ƒS.Location.show(Template.locations.DoorCloseup);
            await Template.ƒS.update(Template.transition.blurr.duration, Template.transition.blurr.alpha, Template.transition.blurr.edge);
            await Template.ƒS.update(0);
            Template.ƒS.Sound.fade(Template.sound.dream, 0, 0.5, false);
            Template.ƒS.Sound.fade(Template.sound.histheme, 0.4, 2, true);
            await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.standardRechts, Template.OOBleftToRight());
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "...........");
            let signalDelay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(3)]);
            await signalDelay();
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Du möchtest mir also nicht helfen?");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Ich verstehe...das ist wirklich traurig.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Verstehe mich nicht falsch.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Mir kann es egal sein, ob du mir helfen möchtest oder nicht.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Das ich in deinem Kopf bin macht mir nichts aus. Immerhin ist nichts von dem was du siehst real.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "In meinem Kopf? Nicht real?");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Aber du kannst so nicht weiterleben. Du musst loslassen.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Solange du mich in deinen Träumen wiederfinden kannst, wirst du nicht in der Lage sein wahres Glück im Leben zu finden.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Denn es bedeutet, dass du immer noch über das nachdenkst, was damals passiert ist.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "...");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Machs gut " + Template.dataForSave.namePlayer + ". Wir werden uns wiedersehen.");
            await Template.ƒS.Location.show(Template.locations.Doorway);
            await Template.ƒS.update(Template.transition.blurr.duration, Template.transition.blurr.alpha, Template.transition.blurr.edge);
            await Template.ƒS.update(2);
            await Template.ƒS.Location.show(Template.locations.Bed);
            await Template.ƒS.update(Template.transition.blurr.duration, Template.transition.blurr.alpha, Template.transition.blurr.edge);
            await Template.ƒS.update(0);
            Template.ƒS.Sound.fade(Template.sound.histheme, 0, 5, true);
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Nanu? ...Ich bin schon wieder wach?");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich habe schon wieder Tränen in den Augen?");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Es fühlt sich an als hätte ich eine unglaubliche Last auf mir liegen...");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich könnte einfach losheulen, jedesmal wenn ich aufwache.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ob das wohl normal ist?");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich frage mich, wann dieses Gefühl der leere endlich weichen wird.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Was könnte dieses Gefühl verursachen? Irgendwann muss ich auf eine Lösung kommen...");
            Template.ƒS.Character.hideAll();
            await Template.ƒS.Location.show(Template.locations.BadEnding);
            await Template.ƒS.update(Template.transition.blurr.duration, Template.transition.blurr.alpha, Template.transition.blurr.edge);
            await Template.ƒS.update(0);
            Template.ƒS.Speech.hide();
        }
    }
    Template.Finale = Finale;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function LeyahBackground() {
        await Template.ƒS.Location.show(Template.locations.DoorCloseup);
        await Template.ƒS.update(Template.transition.wet.duration, Template.transition.wet.alpha, Template.transition.wet.edge);
        await Template.ƒS.update(0);
        await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.standardLinks, Template.OOBrightToLeft());
        await Template.ƒS.update(0);
        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Etwas über mich erzählen?");
        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Du musst immer noch müde sein! Hahaha.");
        Template.ƒS.Sound.fade(Template.sound.laughing, 0.4, 1, false);
        let signalDelay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(3)]);
        await signalDelay();
        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Wissen tust du alles über mich.");
        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Du solltest versuchen dich daran zu erinnern, warum du mich hier eingesperrt hast.");
        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Ich glaube, dann wird dir vieles klar werden " + Template.dataForSave.namePlayer + ".");
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Das lässt sich so einfach sagen.");
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Woher soll ich denn alles über dich wissen?");
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Wir kennen uns doch erst seit ein paar Minuten...");
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "...Aber du meintest, dass ich hier schon öfter vorbeigekommen bin?");
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich kann mich nicht daran erinnern jemals hier gewesen zu sein.");
        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Es tut mir leid...ich kann dir nicht mehr sagen.");
        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Möchtest du mir trotzdem helfen und versuchen mich zu befreien?");
        if (Template.dataForSave.slowStart == false) {
            let leyahChoice = {
                iSayGo: "Ich werde mein bestes geben, das verspreche ich dir!",
                iSayNo: "Nein tut mir leid, ich werde dir nicht helfen."
            };
            let secondDialougeElement = await Template.ƒS.Menu.getInput(leyahChoice, "FirstDecisions");
            switch (secondDialougeElement) {
                case leyahChoice.iSayGo:
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Dankeschön, das freut mich wirklich!");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Hör zu, du musst dich umdrehen und zurück ins dunkle laufen.");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Laufe bis du ein blaues Licht siehst.");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Dort scheint ein Ort zu sein welcher dir helfen kann den Schlüssel zu finden.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Blaues Licht sagst du? Ich werde danach ausschau halten!");
                    Template.ƒS.Character.hideAll();
                    Template.dataForSave.talkedToLeyah = true;
                    return "WoIstSchluessel";
                case leyahChoice.iSayNo:
                    Template.dataForSave.sayNoToLeyah = true;
                    Template.ƒS.Character.hideAll();
                    return "Finale";
            }
        }
        else {
            let leyahChoice = {
                iSayGo: "Ich werde mein bestes geben, das verspreche ich dir!",
                iSayNo: "Nein tut mir leid, ich werde dir nicht helfen."
            };
            let secondDialougeElement = await Template.ƒS.Menu.getInput(leyahChoice, "FirstDecisions");
            switch (secondDialougeElement) {
                case leyahChoice.iSayGo:
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Dankeschön, das freut mich wirklich!");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Hör zu, du musst dich umdrehen und zurück ins dunkle laufen.");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Laufe bis du ein blaues Licht siehst.");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Dort scheint ein Ort zu sein welcher dir helfen kann den Schlüssel zu finden.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Blaues Licht sagst du? Ich werde danach ausschau halten!");
                    Template.dataForSave.talkedToLeyah = true;
                    return "WoIstSchluessel";
                case leyahChoice.iSayNo:
                    Template.dataForSave.sayNoToLeyah = true;
                    return "Finale";
            }
        }
    }
    Template.LeyahBackground = LeyahBackground;
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
    Template.sound = {
        // music
        backgroundTheme: "./Sounds/Quiet.mp3",
        dream: "./Sounds/Dream.mp3",
        keyroom: "./Sounds/Keyroom.mp3",
        depression: "./Sounds/Depression.mp3",
        ending: "./Sounds/Ending.mp3",
        histheme: "./Sounds/HisTheme.mp3",
        // Sound
        clickGeräusch: "./Sounds/Click.mp3",
        sleep: "./Sounds/Sleeping.mp3",
        crying: "./Sounds/Crying.wav",
        rumble: "./Sounds/Rumble.wav",
        laughing: "./Sounds/Laughing.mp3",
        breathing: "./Sounds/Heavy_breathing.wav",
        aha: "./Sounds/aha.mp3",
        sigh: "./Sounds/sigh.mp3", //Voiceline by me
    };
    // Backgrounds
    Template.locations = {
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
    Template.dataForSave = {
        namePlayer: "",
        score: 0,
        talkedToLeyah: false,
        backToLeyah: false,
        amTheKey: false,
        sayNoToLeyah: false,
        slowStart: false,
    };
    Template.characters = {
        narrator: {
            name: "???"
        },
        Leyah: {
            name: "Leyah",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
        },
        Protagonist: {
            name: Template.dataForSave.namePlayer,
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                huh: "./Images/Characters/huh.png",
                abscent: "./Images/Characters/abscent.png",
                thinking: "./Images/Characters/thinking.png",
                standardLinks: "./Images/Characters/standard_links.png",
                standardRechts: "./Images/Characters/standard_rechts.png",
            }
        }
    };
    function leftToRight() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(30, 100),
            },
            end: {
                translation: Template.ƒS.positionPercent(70, 100),
            },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.leftToRight = leftToRight;
    function rightToLeft() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(70, 100),
            },
            end: {
                translation: Template.ƒS.positionPercent(20, 100),
            },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.rightToLeft = rightToLeft;
    function ExitToLeftt() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(20, 100),
            },
            end: {
                translation: Template.ƒS.positionPercent(-40, 100),
            },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.ExitToLeftt = ExitToLeftt;
    function OOBrightToLeft() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(140, 100),
            },
            end: {
                translation: Template.ƒS.positionPercent(35, 100),
            },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.OOBrightToLeft = OOBrightToLeft;
    function OOBleftToRight() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(-45, 100),
            },
            end: {
                translation: Template.ƒS.positionPercent(65, 100),
            },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.OOBleftToRight = OOBleftToRight;
    function ExitToRight() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(70, 100),
            },
            end: {
                translation: Template.ƒS.positionPercent(120, 100),
            },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.ExitToRight = ExitToRight;
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
            { scene: Template.Intro, name: "Beginning" },
            { id: "WoIstSchluessel", scene: Template.WoIstSchluessel, name: "WoIstSchluessel" },
            { id: "TalkingToLeyah", scene: Template.TalkingToLeyah, name: "TalkingToLeyah" },
            { id: "LeyahBackground", scene: Template.LeyahBackground, name: "LeyahBackground" },
            { id: "SlowStart", scene: Template.SlowStart, name: "SlowStart" },
            { id: "Finale", scene: Template.Finale, name: "Finale" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SlowStart() {
        let signalDelay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(3)]);
        await Template.ƒS.Location.show(Template.locations.DreamStart);
        await Template.ƒS.update(Template.transition.lines.duration, Template.transition.lines.alpha, Template.transition.lines.edge);
        await Template.ƒS.update(0);
        Template.ƒS.Sound.fade(Template.sound.depression, 0, 1, true);
        Template.ƒS.Sound.fade(Template.sound.dream, 0.4, 2, true);
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich müsste schon ganz in der Nähe sein!");
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Wenn ich richtig liege, dann war das die Stimme einer Frau.");
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Hoffentlich hat sie keine Angst vor mir.");
        await Template.ƒS.Location.show(Template.locations.Doorway);
        await Template.ƒS.update(Template.transition.blurr.duration, Template.transition.blurr.alpha, Template.transition.blurr.edge);
        await Template.ƒS.update(0);
        await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.standardRechts, Template.OOBleftToRight());
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "A-aber...was ist denn das? Eine Tür?");
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Unheimlich...");
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Nanu? Ich höre hinter dieser Tür doch etwas?");
        Template.ƒS.Sound.play(Template.sound.crying, 1, false);
        await signalDelay();
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Bist du diejenige, die mir vorhin zugerufen hat? Und warum weinst du?");
        await Template.ƒS.Speech.tell(Template.characters.Leyah, "R-...Redest du mit mir?");
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ja das tue ich!");
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Deine Stimme sie...kommt mir so vertraut vor.");
        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Ich habe dich hier schon öfter gesehen. Immer bist du auf der Suche nach einem Schlüssel, hast aber keine Ahnung wo du ihn finden sollst.");
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Bin ich froh wenigstens nicht alleine hier sein zu müssen.");
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Schlüssel? Das ist jetzt schon das zweite mal, dass ich heute von einem Schlüssel gehört habe...");
        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Naja zugegeben, das ist nicht das erste mal, dass wir miteinander reden. Du hattest dir schonmal vorgenommen mich von dieser Tür zu befreien, indem du den zugehörigen Schlüssel findest.");
        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Weißt du...ich sitze schon recht lange hier. Dabei sollte ich eigentlich gar nicht mehr hier sein...");
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Oh, das tut mir leid. Ich wusste nicht, wie lange du hier schon festsitzt. Weißt du wer oder was dich dahinter verschlossen hat?");
        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Das weiß ich...aber die Antwort ist komplizierter als du es dir vorstellen kannst.");
        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Wir kennen uns schon länger.");
        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Ich bin hier eingesperrt, weil du es so möchtest.");
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Moment jetzt komme ich nicht mehr mit.");
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Du sitzt hier eingesperrt weil ich das möchte?");
        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Wenn das wirklich der Fall wäre, warum habe ich dann einen Schlüssel gesucht um deine Tür zu öffnen?");
        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Ich sagte doch es ist nicht so einfach...");
        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Du hast mich hier zwar eingesperrt, aber nicht weil du mir schaden wolltest. Nein...du wolltest mich vor langer Zeit wieder gehen lassen.");
        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Allerdings hast du vergessen, dass ich hier bin. Nicht nur mich hast du vergessen, sondern auch den Schlüssel um mich zu befreien.");
        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Jetzt bin ich hier...muss aber so schnell wie Möglich weg. Hörst du? Du musst mich UNBEDINGT gehen lassen!");
        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Möchtest du mir helfen und versuchen mich zu befreien?");
        let leyahChoice = {
            iSayGo: "Ich werde mein bestes geben, das verspreche ich dir!",
            iSayWait: "Könntest du mir vorher noch etwas mehr über dich erzählen?",
            iSayNothing: "Weißt du, was es mit dieser Steinfafel auf sich hat die ich vorher finden konnte?"
        };
        let secondDialougeElement = await Template.ƒS.Menu.getInput(leyahChoice, "FirstDecisions");
        switch (secondDialougeElement) {
            case leyahChoice.iSayGo:
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Dankeschön, das freut mich wirklich!");
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Hör zu, du musst dich umdrehen und zurück ins dunkle laufen.");
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Laufe bis du ein blaues Licht siehst.");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Hey ich war schon an einem blauen Licht! Dort konnte ich diese eigenartige Steintafel auffinden...");
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Es scheint ein Ort zu sein welcher dir helfen kann den Schlüssel zu finden.");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Aber...ich komme doch gerade von dort.");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Nun gut.");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich werde nocheinmal hingehen, allerdings glaube ich nicht, dass dies irgendwas tun wird.");
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Komme jederzeit hier her zurück wenn du nicht weiter weißt. Versuche jedoch aus eigenem Geist heraus eine Lösung zu finden...");
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Hörst du " + Template.dataForSave.namePlayer + "?");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich werde mein bestes geben!");
                Template.dataForSave.talkedToLeyah = true;
                Template.ƒS.Character.hideAll();
                return "WoIstSchluessel";
            case leyahChoice.iSayWait:
                Template.ƒS.Character.hideAll();
                return "LeyahBackground";
            case leyahChoice.iSayNothing:
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Eine Steintafel?");
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Nur du musst es sehen können, denn ich habe dich schon einmal darüber reden hören.");
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Man spricht bei diesem Mal von einer Verkörperung des inneren Wunsch des T-...");
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "T-...T-...Trainers.");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Die Verkörperung des inneren Wunsches des Trainers?");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Dir ist bewusst, dass ich nichts von dem verstanden habe was du mir versucht hast zu vermitteln, oder?");
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Tut mir Leid, ich stoße an meine Grenzen. Mehr kann ich dazu nicht sagen.");
                await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ein komisches Mädchen bist du...naja!");
                // Selbe Frage, jedoch ohne Option "Weißt du, was es mit diesem Stein auf sich hat den ich vorher finden konnte?" --> evtl. sehr unpraktisch gelößt but it
                await Template.ƒS.Speech.tell(Template.characters.Leyah, "Jetzt nochmal: Möchtest du mir helfen und versuchen mich zu befreien?");
                let leyahChoice2 = {
                    iSayGo: "Ich werde mein bestes geben, das verspreche ich dir!",
                    iSayWait: "Könntest du mir vorher noch etwas mehr über dich erzählen?",
                };
                let secondDialougeElement = await Template.ƒS.Menu.getInput(leyahChoice2, "FirstDecisions");
                switch (secondDialougeElement) {
                    case leyahChoice2.iSayGo:
                        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Dankeschön, das freut mich wirklich!");
                        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Hör zu, du musst dich umdrehen und zurück ins dunkle laufen.");
                        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Laufe bis du ein blaues Licht siehst.");
                        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Hey ich war schon an einem blauen Licht! Dort konnte ich diese seltsame Steintafel auffinden...");
                        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Es scheint ein Ort zu sein welcher dir helfen kann den Schlüssel zu finden.");
                        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Aber...ich komme doch gerade von dort.");
                        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Nun gut.");
                        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich werde nocheinmal hingehen, allerdings glaube ich nicht, dass dies irgendwas tun wird.");
                        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Komme jederzeit hier her zurück wenn du nicht weiter weißt. Versuche jedoch aus eigenem Geist heraus eine Lösung zu finden...");
                        await Template.ƒS.Speech.tell(Template.characters.Leyah, "Hörst du " + Template.dataForSave.namePlayer + "?");
                        await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich werde mein bestes geben!");
                        Template.dataForSave.talkedToLeyah = true;
                        Template.ƒS.Character.hideAll();
                        return "WoIstSchluessel";
                    case leyahChoice.iSayWait:
                        Template.ƒS.Character.hideAll();
                        return "LeyahBackground";
                }
        }
    }
    Template.SlowStart = SlowStart;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function TalkingToLeyah() {
        // PROTAGONIST RETURNS BACK TO LEYAH AFTER SEEING MONUMENT
        if (Template.dataForSave.backToLeyah == true) {
            await Template.ƒS.Location.show(Template.locations.DoorCloseup);
            Template.ƒS.Sound.fade(Template.sound.depression, 0, 1, true);
            Template.ƒS.Sound.fade(Template.sound.dream, 0.2, 2, false);
            await Template.ƒS.update(Template.transition.wet.duration, Template.transition.wet.alpha, Template.transition.wet.edge);
            await Template.ƒS.update(0);
            await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.standardLinks, Template.OOBrightToLeft());
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Hey Leyah, ich bin wieder da!");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Konntest du den Schlüssel finden?");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Nein den Schlüssel konnte ich leider nicht finden, allerdings eine Steintafel mit Schrift versehen...");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Weißt du irgendwas darüber?");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Diese Frage stellt du mir nicht das erste mal...");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Weißt du eigentlich wo wir hier sind?");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Naja also...ehrlich gesagt bin ich mir nicht sicher. Das einzige woran ich mich erinnern kann ist mich ins Bett gelegt zu haben...");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Moment...");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Sag mir nicht ich befinde mich in einem T-");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Doch genau so ist es. Du befindest dich momentan in deinem eigenen Traum. Die Steintafel die du gesehen hast, muss eine Manifestation deines Wunsches sein, den Schlüssel zu dieser Tür zu finden.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "In Träumen werden einem die tiefen und unerkundeten Ecken des eigenen Kopfes zur schau gestellt.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Dinge an die du unterbewusst denkst.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Sorgen die du hast.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Stress.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Glück.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Liebe.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Alles ist in Träumen vorzufinden.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Aber ich verstehe nicht Leyah, warum wirst du hier dann von mir festgehalten?");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Wir-...haben uns doch schon vor langer Zeit voneinander getrennt.");
            Template.ƒS.Sound.fade(Template.sound.rumble, 1, 2, true);
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "HEY!!");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Du darfst nicht zu sehr über dein schlafendes Ich nachdenken. Desto mehr du an die Realität und vergangenes denkst, umso einfacher wird es dir fallen aufzuwachen.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Hörst du das? Dein Bewusstsein versucht dich immer mehr aus dem Schlaf zu reißen!");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Wir sind nicht dazu gemacht um in Träumen zu denken und präsent zu sein. Träume sind da, um die tiefsten Wünsche und Bedürnisse eines selbst freien Raum zu lassen.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Wenn du ersteinmal aufgewacht bist, dauert es wieder eine lange Zeit bis wir die Möglichkeit haben uns zu treffen.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Aber ich habe so viele Fragen...!");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Leyah...jetzt da ich verstehe wer du bist...");
            let questionToLeyah = {
                iSayGo: "...verzeihst du mir, was ich dir damals angetan habe?",
                //  iSayWait: "...konntest du wieder Glücklich werden?",
            };
            let fourthDialougeElement = await Template.ƒS.Menu.getInput(questionToLeyah, "FirstDecisions");
            switch (fourthDialougeElement) {
                case questionToLeyah.iSayGo:
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "...");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Es sollte nicht darum gehen, ob ich dir verziehen habe.");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Du solltest für dich selbst herausfinden, ob du Glücklich bist.");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Bereust du was du getan hast?");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Immerhin warst du derjenige, welcher nicht mehr länger bei mir sein wollte.");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Hast du überhaupt versucht in anderen Menschen wieder Liebe zu suchen?");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Hoffst du darauf, dass irgendjemand angelaufen kommt und dir einen Tritt in den Arsch verpasst?");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "I-...Ich weiß nicht. Seitdem sich unsere Wege getrennt haben, bin ich einfach nur verloren.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Du warst meine erste Liebe. Ich wusste nicht, dass es so lange dauern wird, wieder auf den richtigen Pfad zu kommen.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Es fühlt sich so an als wäre alles umsonst. Nie wieder finde ich jemanden der mir so viel bedeuten wird.");
                    Template.ƒS.Sound.fade(Template.sound.rumble, 0, 0.5, true);
                    Template.ƒS.Sound.fade(Template.sound.rumble, 0.5, 2, true);
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Das magst du vielleicht glauben, aber die Realität sieht anders aus.");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Dieses tiefe Gefühl des Verlorenseins entsteht daraus, dass du immer noch an mir festhältst.");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Du erhoffst dir irgendwas daraus an den schmerzhaften Erinnerungen mit mir festzuhalten-");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Aber sie ziehen dich nur tiefer und tiefer in ein Loch hinein.");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Glaubst du nicht, dass ich täglich sehen kann wie du mit dir selbst am kämpfen bist?");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Damit muss schluss sein, hörst du?");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Lass mich aus diesem Zimmer gehen...lasse mich aus deinem Kopf verschwinden. Du brauchst mich hier nicht länger. Es ist längst genug Zeit vergangen um mich gehen zu lassen.");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Wir hatten so viele schöne Zeiten zusammen...");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Wie kann es sein, dass du nur noch an die schlechten denken kannst?");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Die Schuldgefühle die du dir machst, weil wir nicht mehr zusammen sein können, lassen mich nur noch trauriger werden.");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Bitte lass meinen Schmerz nicht umsonst gewesen sein...");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Es ist genug Zeit vergangen...");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Lass es einfach sein und gehe deinen Weg weiter. Mach dir nicht weiter sorgen um mich.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "L-...!!!");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "(Mein Körper gehorcht mir nicht mehr. Das kann doch nicht sein...ich erwache aus meinem Schlaf!)");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "(Ich habe ihr doch so viel zu sagen...)");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "(Nein...ich möchte noch nicht aufwachen...!!)");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "(Verdammt es wird heller...jetzt wache ich auf ohne mich bei ihr bedankt zu haben...)");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "(Die Zeit zusammen mit ihr hat mich so glücklich gemacht. Ich hoffe sie weiß das...sie macht sich doch so gerne vorwürfe.)");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "(Wenn ich ihr nur irgendwie hätte sagen können, weshalb ich nicht mehr länger bei ihr sein konnte.)");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "(Das ich mit mir selbst zu kämpfen hatte.)");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "(Meine Angst andere zu enttäuschen...)");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "(Sie hat mich eingenommen und niemand hatte mehr zugang zu mir.)");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "(Ich fühlte mich nicht mehr wie ein Mensch mit eigenen Bedürfnissen.)");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "(Nein...selbst jetzt fällt es mir noch schwer mich als einen Menschen zu sehen, der es Wert ist am Leben zu sein.)");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "(Jetzt ist alles zu spät. Ich muss in meinem nächsten Träumen hoffen, dass ich wieder meinen Weg zu ihr finden werde.)");
                    Template.ƒS.Character.hideAll();
                    await Template.ƒS.Location.show(Template.locations.BadEnding);
                    await Template.ƒS.update(Template.transition.blurr.duration, Template.transition.blurr.alpha, Template.transition.blurr.edge);
                    await Template.ƒS.update(0);
                    let signalDelay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(60)]);
                    await signalDelay();
                // case questionToLeyah.iSayWait:
                //  await ƒS.Speech.tell(characters.Leyah, "Und da ist es schon wieder.");
                //  await ƒS.Speech.tell(characters.Leyah, "Immer machst du dir nur sorgen um andere und achtest dabei nicht auf dich selbst.");
                //  await ƒS.Speech.tell(characters.Leyah, "Hast du jemals darüber nachgedacht, dass du anderen Leuten einen gefallen tust, wenn du dich um dich selbst sorgst?");
                //  await ƒS.Speech.tell(characters.Leyah, "Denn wenn es dir gut geht und du zufrieden bist...nur dann solltest du versuchen andere zu Lieben.");
                //  await ƒS.Speech.tell(characters.Leyah, "Deine Probleme werden Teil deines Partners.");
                //  await ƒS.Speech.tell(characters.Leyah, "Es ist unverantwortlich von dir, wenn du nicht auf dich selbst schaust und deine eigenen Probleme konfrontierst.");
                //   return "LeyahBackground"
            }
        }
        else {
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Nun gut...es fühlt sich an als würde ich mich in einem großen Raum befinden. Ich glaube ich kann mich fortbewegen, ohne irgendwo zu fallen oder mich zu stoßen.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Meine Augen gewöhnen sich langsam an die Dunkelheit...ich fange an besser sehen zu können!");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "A-aber...was ist denn das? Eine Tür?");
            await Template.ƒS.Location.show(Template.locations.Doorway);
            await Template.ƒS.update(Template.transition.lines.duration, Template.transition.lines.alpha, Template.transition.lines.edge);
            await Template.ƒS.update(0);
            await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.standardRechts, Template.OOBleftToRight());
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Unheimlich...");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Nanu? Ich höre hinter dieser Tür doch etwas?");
            Template.ƒS.Sound.play(Template.sound.crying, 1, false);
            let signalDelay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(3)]);
            await signalDelay();
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Wer bist du?? Und warum weinst du?");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "R-...Redest du mit mir?");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ja das tue ich!");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Deine Stimme sie...kommt mir so vertraut vor.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Ich habe dich hier schon öfter gesehen. Immer bist du auf der Suche nach einem Schlüssel, hast aber keine Ahnung wo du ihn finden sollst.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Bin ich froh wenigstens nicht alleine hier sein zu müssen. Du meinst ich bin auf der Suche nach einem Schlüssel?");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Naja zugegeben, das ist nicht das erste mal, dass wir miteinander reden. Du hattest dir schonmal vorgenommen mich von dieser Tür zu befreien, indem du den zugehörigen Schlüssel findest.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Weißt du...ich sitze schon recht lange hier. Dabei sollte ich eigentlich gar nicht mehr hier sein...");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Oh, das tut mir leid. Ich wusste nicht, dass du schon länger hinter dieser Tür festsitzt. Weißt du wer oder was dich dahinter verschlossen hat?");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Das weiß ich...aber die Antwort ist komplizierter als du es dir vorstellen kannst.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Wir kennen uns schon länger.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Ich bin hier eingesperrt, weil du es so möchtest.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Moment jetzt komme ich nicht mehr mit.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Du sitzt hier eingesperrt weil ich das möchte?");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Wenn das wirklich der Fall wäre, warum habe ich dann einen Schlüssel gesucht um deine Tür zu öffnen?");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Ich sagte doch es ist nicht so einfach...");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Du hast mich hier zwar eingesperrt, aber nicht weil du mir schaden wolltest. Nein...du wolltest mich vor langer Zeit wieder gehen lassen.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Allerdings hast du vergessen, dass ich hier bin. Nicht nur mich hast du vergessen, sondern auch den Schlüssel um mich zu befreien.");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Jetzt bin ich hier...muss aber so schnell wie Möglich weg. Hörst du? Du musst mich UNBEDINGT gehen lassen!");
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "Möchtest du mir helfen und versuchen mich zu befreien?");
            let leyahChoice = {
                iSayGo: "Ich werde mein bestes geben, das verspreche ich dir!",
                iSayWait: "Könntest du mir vorher noch etwas mehr über dich erzählen?",
                iSayNothing: "Nein tut mir leid, ich werde dir nicht helfen."
            };
            let secondDialougeElement = await Template.ƒS.Menu.getInput(leyahChoice, "FirstDecisions");
            switch (secondDialougeElement) {
                case leyahChoice.iSayGo:
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Dankeschön, das freut mich wirklich!");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Hör zu, du musst dich umdrehen und zurück ins dunkle laufen.");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Laufe bis du ein blaues Licht siehst.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ein blaues Licht? Ich verstehe...aber hier ist alles so dunkel! Woher weiß ich, dass mir nicht passieren wird?");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Mache dir keine Sorgen, dir wird nichts passieren. Es scheint ein Ort zu sein, welcher dir helfen kann den Schlüssel zu finden.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Nun gut.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Wenn du sagst, dass es ein wichtiger Ort ist, werde ich mich natürlich dorthin begeben! Vielleicht finden wir schon gleich den Schlüssel zu deiner Tür.");
                    await Template.ƒS.Speech.tell(Template.characters.Leyah, "Immer langsam " + Template.dataForSave.namePlayer + ". Versuche nicht zu überstürzen.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ein bisschen Hoffnung ist nie schlecht Leyah, merke dir das!");
                    Template.ƒS.Character.hideAll();
                    Template.dataForSave.talkedToLeyah = true;
                    return "WoIstSchluessel";
                case leyahChoice.iSayWait:
                    Template.ƒS.Character.hideAll();
                    return "LeyahBackground";
                case leyahChoice.iSayNothing:
                    Template.dataForSave.sayNoToLeyah = true;
                    return "Finale";
            }
        }
    }
    Template.TalkingToLeyah = TalkingToLeyah;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function WoIstSchluessel() {
        // Falls man vorher mit Leah schon geredet hat
        let signalDelay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(2)]);
        if (Template.dataForSave.talkedToLeyah == true) {
            Template.ƒS.Sound.fade(Template.sound.dream, 0, 2, false);
            Template.ƒS.Sound.fade(Template.sound.depression, 0.2, 2, true);
            await Template.ƒS.Location.show(Template.locations.WoIstSchluessel);
            await Template.ƒS.update(Template.transition.lines.duration, Template.transition.lines.alpha, Template.transition.lines.edge);
            await Template.ƒS.update(0);
            await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.standardLinks, Template.OOBrightToLeft());
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Es scheint so als hätte Leyah recht...ich sehe hier ein blaues Licht.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Allerdings ist diese Steintafel echt gruselig...sieht irgendwie verrückt aus.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Und es scheint wirklich nicht das erste mal zu sein, dass ich nach einem Schlüssel für ihre Tür gesucht habe.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Allerdings sieht es so aus, als würde sich der Schlüssel nicht hier befinden.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Wenn ich hier schon öfter war und gesucht habe...was soll diesmal anders sein?");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "...");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, ".........");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Komm schon " + Template.dataForSave.namePlayer + " du kannst nicht jetzt schon aufgeben. Sie verlässt sich auf dich.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ihr Geruch, ihre Stimme...alles an ihr kommt mir so vertraut vor.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich möchte sie nicht enttäuschen.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Womöglich wäre es schlau sie zu fragen, was es mit dieser Steintafel hier auf sich hat.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Sie sollte sich hier am besten auskennen. Immerhin hat sie schon viel Zeit hier verbringen müssen wie es scheint.");
            let askLeyah = {
                iSayGo: "Ich mache mich auf den Weg zurück zu ihrer Tür. Sie wird mir helfen können.",
                iSayWait: "Nein ich sollte mich nicht immer auf andere verlassen...",
            };
            let thirdDialougeElement = await Template.ƒS.Menu.getInput(askLeyah, "FirstDecisions");
            switch (thirdDialougeElement) {
                case askLeyah.iSayGo:
                    Template.dataForSave.backToLeyah = true;
                    Template.ƒS.Character.hideAll();
                    return "TalkingToLeyah";
                case askLeyah.iSayWait:
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich werde schon selbst eine Antwort finden.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Allerdings lässt sich doch die Frage stellen, wer das hier aufgestellt hat?");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Wenn ich immer auf der Suche nach ihrem Schlüssel bin, dann hatte ich bestimmt keine Zeit um hier ein kleines Denkmal zu errichten.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Das wäre ja zum lachen.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, ".....moment wo bin ich nochmal?");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Das kann doch nicht sein...");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich habe keinerlei Erinnerungen daran, wie ich hier hergekommen bin.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Dazu kommt, dass mir Leyah's stimme so bekannt vorkommt.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Dies hier ist ein Ort an dem ich sowohl glücklich als auch traurig bin. Ihre Präsenz löst so viele Emotionen in mir aus.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Außerdem...moment mal.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Wenn ich mich richtig Erinnere, dann hatte die Tür welche sie festhält kein Schlüsselloch...oder?");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ohne Schlüsselloch kann man auch keinen Schlüssel verwenden.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Hmmmmmmmmm.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Das ist vielleicht weit hergeholt, aber...");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "...habe ich jemals versucht einfach ihre Tür zu öffnen?");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Vielleicht bin ich ja der Schlüssel zu ihrer Tür und es gibt keinen physischen Schlüssel?");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich könnte sie also vielleicht...einfach gehen lassen?");
                    Template.ƒS.Sound.fade(Template.sound.breathing, 0.7, 1, true);
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "W-....Warum?");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Mein Bauch...alles in meinem Körper wehrt sich dagegen.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Warum löst dieser Gedanke so viel Panik in mir aus?");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "........");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Hahahahaha.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich erinnere mich...");
                    Template.ƒS.Sound.fade(Template.sound.breathing, 0, 1, false);
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ja.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Leyah war der Mensch, der mir alles in meinem Leben bedeutet hat.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Wenn sie hier ist, kann das nur bedeuten, das etwas nicht stimmt.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Wir haben uns schon seit Jahren nicht mehr gesehen.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich muss schnell zu ihr und ihre Tür öffnen.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Das sie hier gefangen ist scheint meine Schuld zu sein! Ich konnte sie immer noch nicht loslassen.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Damals nutzte ich diesen Ort, um mich noch ein paar mal mit ihr zu unterhalten und bei ihr zu sein.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Aber irgendwann verlor ich mich selbst. Ich wollte nicht mehr in die Realität zurück, da dieser Ort viel schöner war.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Damit muss jetzt Schluss sein-...");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Wenn ich sie nicht loslassen kann, dann wird sie hier auf ewig verweilen.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Und solange sie hier ist, werde ich nicht aufhören können an sie zu denken.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "...");
                    //await ƒS.Speech.tell(dataForSave.namePlayer, "Lang genug habe ich mir Schuld an allem gegeben.");
                    //await ƒS.Speech.tell(dataForSave.namePlayer, "Mir unterstellt, dass ich ein schlechter Mensch bin, da ich sie alleine lassen musste.");
                    //await ƒS.Speech.tell(dataForSave.namePlayer, "Dabei war ich selbst nur verloren und auf der Suche nach dem richtigen Weg...");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich muss sie schnell rauslassen. Sie kann und sollte nicht noch länger in meinem Kopf bleiben.");
                    Template.ƒS.Sound.fade(Template.sound.rumble, 1, 2, true);
                    await signalDelay();
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "I-...IRGENDETWAS PASSIERT HIER!");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich kann etwas hören...es wird langsam lauter und lauter");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ein ungutes Gefühl macht sich in mir breit...ich weiß, dass ich nicht viel länger hier bleiben kann.");
                    await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "ICH KOMME LEYAH! DU BIST GLEICH FREI!");
                    Template.ƒS.Character.hideAll();
                    Template.dataForSave.amTheKey = true;
                    return "Finale";
            }
        }
        else {
            // Stehengeblieben --> Monument zu "Wo ist Schlüssel" wird ohne Kontext entdeckt
            await Template.ƒS.Location.show(Template.locations.DreamStart);
            await Template.ƒS.update(Template.transition.lines.duration, Template.transition.lines.alpha, Template.transition.lines.edge);
            await Template.ƒS.update(0);
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Diese Dunkelheit erinnert mich an...an irgendetwas. Wie als wäre ich hier schon einmal gewesen. Jedoch war ich das letzte mal nicht alleine. Es war jemand mit mir hier.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Aber nanu? Warum werde ich auf einmal so furchtbar traurig? Ich kann es nicht sehen, aber wissen tue ich es ganz genau: Mir fließen Tränen von den Augen.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ja...ich bin mir ganz sicher. Immer wenn ich hier bin gibt es Trauer in mir. Es fühlt sich an als wäre ich kurz davor jemand wichtiges zu verlieren.");
            Template.ƒS.Sound.fade(Template.sound.dream, 0, 2, false);
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Oh meine Augen gewöhnen sich an die Dunkelheit...ich kann anfangen mehr zu erkennen!");
            Template.ƒS.Sound.fade(Template.sound.depression, 0.2, 2, true);
            await Template.ƒS.Location.show(Template.locations.WoIstSchluessel);
            await Template.ƒS.update(Template.transition.wet.duration, Template.transition.wet.alpha, Template.transition.wet.edge);
            await Template.ƒS.update(0);
            await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.standardLinks, Template.OOBrightToLeft());
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Wow, was ist das denn für ein Ort?");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Hier steht eine Steintafel.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Wo ist der Schlüssel???");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "......");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Wo bin ich hier nur gelandet...ich bin so verwirrt.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Dies ist wirklich ein seltsamer Ort.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Scheint als hätte jemand seine Schlüssel verloren.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Hahahaha.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Aber wieso eine Steintafel nehmen, auf dessen Steinafel man denselben Satz immer und immer wieder zeigt?");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "...Hier muss doch irgendjemand sein...");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "HALLO? IST HIER JEMAND?");
            let signalDelay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(2)]);
            await signalDelay();
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Nichts zu hören...wirklich eigenartig.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich sollte mich vielleicht auf die Suche nach diesem seltsamen Schlüssel machen.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ob man ihn in der Finsternis hier finden kann ist wohl eine andere Frage.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Selbst mit Schlüssel...ich weiß nicht wohin damit.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Naja eins nach dem anderen!");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Ich werde mich mal etwas mehr umsehen.");
            await signalDelay();
            await Template.ƒS.Speech.tell(Template.characters.Leyah, "H-...HALLOOOO?");
            await signalDelay();
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "Nanu? Da habe ich doch jemanden von weit weg rufen hören!");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "KEINE SORGE DU BIST NICHT ALLEINE.");
            await Template.ƒS.Speech.tell(Template.dataForSave.namePlayer, "ICH WERDE DEM KLANG DEINER STIMME FOLGEN, OK? ICH KOMME ZU DIR, DU MUSST KEINE ANGST HABEN.");
            Template.dataForSave.slowStart = true;
            Template.ƒS.Character.hideAll();
            return "SlowStart";
            // Protagonist hat zu diesem Zeitpunkt noch keine Ahnung von einem Schlüssel. Wie geht es hier weiter? Bogen zur ersten Begegnung mit Leyah?
        }
    }
    Template.WoIstSchluessel = WoIstSchluessel;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map