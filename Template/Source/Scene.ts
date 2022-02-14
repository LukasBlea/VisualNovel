namespace Template {
  export async function Intro(): ƒS.SceneReturn {
    let text = {
      narrator: {
        //Awake
        T0000: "Nanu? Ich habe schon wieder den ganzen Tag in meinem Zimmer verbracht...",
        T0001: "Würde ja gerne anders. Etwas erleben, neue Leute kennenlernen, aber irgendetwas in mir hindert mich daran...es ist nicht einfach.",
        T0002: "Ich werde mich wohl schlafen legen...habe sonst nichts besseres zu tun und es wird schon spät.",
        T0003: "Im Schlaf kann ich immerhin eine Welt erleben, die nicht diese hier ist. Eine Welt, in der ich geschützt bin.",
        T0004: "Die Realität fühlt sich so leer an. Keiner der mich wirklich sieht. Keiner der realisiert wie zerbrochen ich bin.",
        T0005: "Vielleicht kann ich heute Nacht wieder in meinem Schlaf-...",
        T0006: "..........",
        T0007: "Nein...ich sollte mich einfach hinlegen.",
        //Asleep
        T0008: "Es ist so dunkel hier...ich kann nicht sehen!",
        T0009: "Wo-...Wo bin ich? Und wer bin ich?                         ",
        T0010: "Achja ich erinnere mich!",
        T0011: "Vor langer Zeit habe ich diesen Namen das letzte mal gehört. Oder war das erst vor kurzem?",
        T0012: "Es kommt mir so vor, als hätte man mich vergessen.",
        T0013: "Es fühlt sich an, als wäre dies hier ein unglaublich einsamer Ort.",
        T0014: "Ich kann ein leichtes Licht am Horizont erkennen.", 
      },
    }
    ƒS.Sound.fade(sound.backgroundTheme, 0.2, 2, true);
    await ƒS.Location.show(locations.Schlafzimmer);
    await ƒS.update(transition.curtains.duration, transition.curtains.alpha, transition.curtains.edge);
    // await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(70, 100));                           // Happy Haru mit Koordinaten auf Screen
    await ƒS.update(0);                                                                                                                        // Sekunden
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0005);
    await ƒS.Location.show(locations.Bed);
    await ƒS.update(transition.curtains.duration, transition.curtains.alpha, transition.curtains.edge);
    await ƒS.update(0);   
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0006);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0007);  
    ƒS.Sound.play(sound.sleep, 1, false);
    let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)])   
    await signalDelay();
    await ƒS.Location.show(locations.DreamStart); 
    await ƒS.update(transition.curtains.duration, transition.curtains.alpha, transition.curtains.edge);
    await ƒS.update(0);    
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
    await ƒS.Character.hide(characters.Protagonist);

    let firstDialougeElementOptions = {
      iSayGo: "Ich kann kaum was sehen, aber werde mich nach vorne wagen!",
      iSayWait: "Ich traue mich nicht weiter zu gehen.",
      iSayNothing: "..."
    };

    let firstDialougeElement = await ƒS.Menu.getInput(firstDialougeElementOptions, "individualCSSClass_Textbox");

    switch (firstDialougeElement) {
      case firstDialougeElementOptions.iSayGo:
        await ƒS.Speech.tell(dataForSave.namePlayer, "Nun gut...es fühlt sich an als würde ich mich in einem großen Raum befinden. Ich glaube ich kann mich ohne zu große Sorge fortbewegen.");
        await ƒS.Speech.tell(dataForSave.namePlayer, "Meine Augen gewöhnen sich langsam an die Dunkelheit...ich fange an besser sehen zu können!");
        await ƒS.Speech.tell(dataForSave.namePlayer, "A-aber...was ist denn das? Eine Tür?");
        await ƒS.Location.show(locations.Doorway); 
        await ƒS.update(transition.curtains.duration, transition.curtains.alpha, transition.curtains.edge);
        await ƒS.update(0);    
        await ƒS.Speech.tell(dataForSave.namePlayer, "Unheimlich...");
        break;
      case firstDialougeElementOptions.iSayWait:
        await ƒS.Speech.tell(dataForSave.namePlayer, "Diese Dunkelheit erinnert mich allerdings an...an irgendetwas. Wie als wäre ich hier schon einmal gewesen. Jedoch war ich das letzte mal nicht alleine. Es war jemand mit mir hier.");
        await ƒS.Speech.tell(dataForSave.namePlayer, "Aber nanu? Warum werde ich auf einmal so furchtbar traurig? Ich kann es nicht sehen, aber wissen tue ich es ganz genau: Mir fließen Tränen von den Augen.");
        await ƒS.Speech.tell(dataForSave.namePlayer, "Ja...ich bin mir ganz sicher. Immer wenn ich hier bin, fühle ich eine tiefe Trauer in mir. Es fühlt sich an als würde ich jemanden wichtiges verlieren.");
        await ƒS.Speech.tell(dataForSave.namePlayer, "Es gibt nicht viele Menschen die mir großes Bedeutet haben, aber ein bis zwei würden mir natürlich einfallen...");
        await ƒS.Speech.tell(dataForSave.namePlayer, "Oh meine Augen gewöhnen sich immer mehr an die Dunkelheit...auf einmal kann ich eine Wand hinter mir erkennen! Da steht doch irgendwas geschrieben...");
        await ƒS.Location.show(locations.Writing); 
        await ƒS.update(transition.curtains.duration, transition.curtains.alpha, transition.curtains.edge);
        await ƒS.update(0);    
        break;
      case firstDialougeElementOptions.iSayNothing:
        await ƒS.Speech.tell(characters.narrator, "..........................."); 
        
        break;   
    };
      // Ton ausfaden/ausblenden
      ƒS.Sound.fade(sound.backgroundTheme, 0, 2, false);
  }
}