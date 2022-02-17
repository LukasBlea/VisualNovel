namespace Template {
  export async function Intro(): ƒS.SceneReturn {
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
    }
    let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)])  
    ƒS.Sound.fade(sound.backgroundTheme, 0.2, 2, true);
    await ƒS.Location.show(locations.Schlafzimmer);
    await ƒS.update(transition.wirbel.duration, transition.wirbel.alpha, transition.wirbel.edge);
    // await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(70, 100));                           // Happy Haru mit Koordinaten auf Screen
    await ƒS.update(0);                                                                                                                        // Sekunden
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
    console.log(dataForSave.backToLeyah);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
    await ƒS.Location.show(locations.Bed);
    await ƒS.update(transition.wet.duration, transition.wet.alpha, transition.wet.edge);
    await ƒS.update(0);   
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0005);
    ƒS.Sound.play(sound.sigh, 0.8, false);
    await signalDelay();
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0006);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0007);  
    ƒS.Sound.play(sound.sleep, 1, false); 
    await ƒS.Location.show(locations.DreamStart); 
    await signalDelay();
    await ƒS.update(transition.wirbel.duration, transition.wirbel.alpha, transition.wirbel.edge);
    await ƒS.update(0);    
    ƒS.Sound.fade(sound.backgroundTheme, 0, 1, false);
    ƒS.Sound.fade(sound.dream, 0.2, 2, true);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0008); 
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0009); 
    dataForSave.namePlayer = await ƒS.Speech.getInput();
    await ƒS.update(0); 
    await ƒS.Speech.tell(dataForSave.namePlayer, text.narrator.T0010 + dataForSave.namePlayer + " ...das ist mein Name. Oder das war er mal?");                                                                                                                        // Delayed Textbox?
    await ƒS.Speech.tell(dataForSave.namePlayer, text.narrator.T0011);                                                                            // Text ohne Anpassungen
    await ƒS.Speech.tell(dataForSave.namePlayer, text.narrator.T0012);     
    await ƒS.Speech.tell(dataForSave.namePlayer, text.narrator.T0013);    
    await ƒS.Speech.tell(dataForSave.namePlayer, text.narrator.T0014);  
    await ƒS.Speech.tell(dataForSave.namePlayer, " ...was sollte ich wohl tun?", true, "Player");        // CSS Klasse "Player"

    let firstDialougeElementOptions = {
      iSayGo: "Ich kann kaum was sehen, aber werde mich nach vorne wagen!",
      iSayWait: "Ich möchte nicht laufen...man kann gar nichts sehen!",
    };

    let firstDialougeElement = await ƒS.Menu.getInput(firstDialougeElementOptions, "FirstDecisions");

    switch (firstDialougeElement) {
      case firstDialougeElementOptions.iSayGo:
        return "TalkingToLeyah"
      case firstDialougeElementOptions.iSayWait:
        return "WoIstSchluessel"
    };
  }
}