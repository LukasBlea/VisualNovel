namespace Template {
  export async function Finale(): ƒS.SceneReturn {

  // TRUE ENDING --> GOOD ENDING

    if (dataForSave.amTheKey == true) {
      await ƒS.Location.show(locations.DoorCloseup); 
      await ƒS.update(transition.blurr.duration, transition.blurr.alpha, transition.blurr.edge);
      await ƒS.update(0);  
      ƒS.Sound.fade(sound.depression, 0, 1, true);
      ƒS.Sound.fade(sound.ending, 0.8, 2, true);
      await ƒS.Speech.tell(dataForSave.namePlayer, "Leyah hörst du das???");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Wir haben nicht mehr viel Zeit!");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Warum hast du's mir nicht gesagt Leyah?");
      await ƒS.Speech.tell(dataForSave.namePlayer, "DU HÄTTEST ES MIR NUR SAGEN MÜSSEN!");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Wenn ich gewusst hätte, dass diese Tür kein Schloss besitzt...");
      await ƒS.Speech.tell(characters.Leyah, "Es tut mir leid " + dataForSave.namePlayer + ". Du musstest von selbst drauf kommen.");
      await ƒS.Speech.tell(characters.Leyah, "Der Schlüssel war verloren...");
      await ƒS.Speech.tell(characters.Leyah, "...denn du wusstest nicht mehr was richtig oder falsch war.");
      await ƒS.Speech.tell(characters.Leyah, "Hätte ich dir verraten, dass du dich in einem Traum befindest, wärst du zu schnell aufgewacht.");
      await ƒS.Speech.tell(characters.Leyah, "Du musstest aus dir selbst heraus die Tür öffnen versteht du?");
      await ƒS.Speech.tell(characters.Leyah, "Auf einmal hast du so stark an mir festgehalten, obwohl du es doch damals selbst beendet hattest " + dataForSave.namePlayer + ".");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Es tut mir leid!! Du hättest niemals in alles reingezogen werden sollen! Es tut mir so leid...");
      await ƒS.Speech.tell(characters.Leyah, "Dir muss nichts leid tun " + dataForSave.namePlayer + ". Du hast dich so lange gequält und niemand hat gesehen wie sehr du darunter gelitten hast.");
      await ƒS.Speech.tell(characters.Leyah, "Verschwende nicht zwei weitere Jahre daran an mich zu denken...du musst doch deinen eigenen Weg finden. Genau wie ich.");
      await ƒS.Speech.tell(characters.Leyah, "Wir müssen einfach weitermachen...verstehst du?");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Ich verstehe-");
      await ƒS.Speech.tell(dataForSave.namePlayer, "...");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Leyah...ich lasse dich jetzt los ok? Ich versuche ohne dich Glücklich zu werden.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Ich öffne die Tür und lasse dich somit gehen...ok?");
      await ƒS.Speech.tell(characters.Leyah, "Versprich mir, dass du aufhören wirst an mich zu denken. Du musst es mir versprechen, hörst du " + dataForSave.namePlayer + "?");
      let finalQuestion = {
        iSayGo: "Ich verspreche es dir",
      };
      let fifthDialougeElement = await ƒS.Menu.getInput(finalQuestion, "FirstDecisions");
      switch (fifthDialougeElement) {
        case finalQuestion.iSayGo:
          await ƒS.Speech.tell(characters.Leyah, "Ich danke dir " + dataForSave.namePlayer + "!...schreite endlich voran in deinem Leben, ok? Ich werde schon zurechtkommen. Wir müssen jetzt ohne einander weitermachen.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Nein ich dake dir Leyah...danke für alles.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Gib auf dich Acht...<3");
          await ƒS.Location.show(locations.OpenDoor); 
          await ƒS.update(transition.blurr.duration, transition.blurr.alpha, transition.blurr.edge);
          await ƒS.update(0); 
          ƒS.Speech.hide();
          let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(60)])   
          await signalDelay();
      }
    }

  // BAD ENDING --> ENDING BY SAYING "Ich will dir nicht helfen"

  if (dataForSave.sayNoToLeyah == true) {
    await ƒS.Location.show(locations.DoorCloseup); 
    await ƒS.update(transition.blurr.duration, transition.blurr.alpha, transition.blurr.edge);
    await ƒS.update(0); 
    ƒS.Sound.fade(sound.dream, 0, 0.5, false);
    ƒS.Sound.fade(sound.ending, 0.4, 2, true);
    await ƒS.Speech.tell(characters.Leyah, "Du möchtest mir also nicht helfen?");
    await ƒS.Speech.tell(characters.Leyah, "Ich verstehe...das ist wirklich traurig.");
    await ƒS.Speech.tell(characters.Leyah, "Verstehe mich nicht falsch.");
    await ƒS.Speech.tell(characters.Leyah, "Mir kann es egal sein, ob du mir helfen möchtest oder nicht.");
    await ƒS.Speech.tell(characters.Leyah, "Das ich in deinem Kopf bin macht mir nichts aus. Immerhin ist nichts von dem ganzen hier real.");
    await ƒS.Speech.tell(dataForSave.namePlayer, "In meinem Kopf? Nichts real?");
    await ƒS.Speech.tell(characters.Leyah, "Aber du kannst so nicht weiterleben. Du musst loslassen.");
    await ƒS.Speech.tell(characters.Leyah, "Solange du mich in deinen Träumen wiederfinden kannst, wirst du nicht in der Lage sein wahres Glück im Leben zu finden.");
    await ƒS.Speech.tell(characters.Leyah, "Denn es bedeutet, dass du immer noch über das nachdenkst, was damals passiert ist.");
    await ƒS.Speech.tell(characters.Leyah, "...");
    await ƒS.Speech.tell(characters.Leyah, "Machs gut " + dataForSave.namePlayer + ". Wir werden uns wiedersehen.");
    ƒS.Sound.fade(sound.ending, 0, 5, true);
    await ƒS.Location.show(locations.Doorway); 
    await ƒS.update(transition.blurr.duration, transition.blurr.alpha, transition.blurr.edge);
    await ƒS.update(2); 
    await ƒS.Location.show(locations.Bed); 
    await ƒS.update(transition.blurr.duration, transition.blurr.alpha, transition.blurr.edge);
    await ƒS.update(0); 
    ƒS.Sound.fade(sound.ending, 0, 2, true);
    ƒS.Sound.fade(sound.backgroundTheme, 0.35, 2, true);
    await ƒS.Speech.tell(dataForSave.namePlayer, "Nanu? Ich bin schon wieder wach?");
    await ƒS.Speech.tell(dataForSave.namePlayer, "A-...aber warum bin ich denn so schrecklich traurig?");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Es fühlt sich an als hätte ich eine unglaubliche Last in mir...");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Ich könnte einfach losheulen, jedesmal wenn ich aufwache.");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Ob das wohl normal ist? Erzählen möchte ich auch niemandem davon...ist ja peinlich.");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Ich frage mich, wann dieses tiefe Gefühl der leere endlich weichen wird.");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Was könnte dieses Gefühl verursachen? Irgendwann muss ich auf eine Lösung kommen...");
    await ƒS.Location.show(locations.BadEnding); 
    await ƒS.update(transition.blurr.duration, transition.blurr.alpha, transition.blurr.edge);
    await ƒS.update(0); 
    ƒS.Speech.hide();
  }
  }
}