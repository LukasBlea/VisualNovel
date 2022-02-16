namespace Template {
  export async function LeyahBackground(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.DoorCloseup);
    await ƒS.update(transition.wet.duration, transition.wet.alpha, transition.wet.edge);
    await ƒS.update(0);
    await ƒS.Speech.tell(characters.Leyah, "Etwas über mich erzählen?");
    await ƒS.Speech.tell(characters.Leyah, "Du musst immer noch müde sein! Hahaha.");
    ƒS.Sound.fade(sound.laughing, 0.4, 1, false);
    let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)])
    await signalDelay();
    await ƒS.Speech.tell(characters.Leyah, "Wissen tust du alles über mich.");
    await ƒS.Speech.tell(characters.Leyah, "Du solltest versuchen dich daran zu erinnern, warum du mich hier eingesperrt hast.");
    await ƒS.Speech.tell(characters.Leyah, "Ich glaube, dann wird dir vieles klar werden " + dataForSave.namePlayer + ".");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Das lässt sich so einfach sagen.");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Woher soll ich denn alles über dich wissen?");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Wir kennen uns doch erst seit ein paar Minuten...");
    await ƒS.Speech.tell(dataForSave.namePlayer, "...Aber du meintest, dass ich hier schon öfter vorbeigekommen bin?");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Ich kann mich nicht daran erinnern jemals hier gewesen zu sein.");
    await ƒS.Speech.tell(characters.Leyah, "Es tut mir leid...ich kann dir nicht mehr sagen.");
    await ƒS.Speech.tell(characters.Leyah, "Möchtest du mir trotzdem helfen und versuchen mich zu befreien?");
    if (dataForSave.slowStart == false) {
      let leyahChoice = {
        iSayGo: "Ich werde mein bestes geben, das verspreche ich dir!",
        iSayNo: "Nein tut mir leid, ich werde dir nicht helfen."
      };
      let secondDialougeElement = await ƒS.Menu.getInput(leyahChoice, "FirstDecisions");
      switch (secondDialougeElement) {
        case leyahChoice.iSayGo:
          await ƒS.Speech.tell(characters.Leyah, "Dankeschön, das freut mich wirklich!");
          await ƒS.Speech.tell(characters.Leyah, "Hör zu, du musst dich umdrehen und zurück ins dunkle laufen.");
          await ƒS.Speech.tell(characters.Leyah, "Laufe bis du ein blaues Licht siehst.");
          await ƒS.Speech.tell(characters.Leyah, "Dort scheint ein Ort zu sein welcher dir helfen kann den Schlüssel zu finden.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Blaues Licht sagst du? Ich werde danach ausschau halten!");
          dataForSave.talkedToLeyah = true;
          return "WoIstSchluessel"
        case leyahChoice.iSayNo:
          dataForSave.sayNoToLeyah = true;
          return "Finale"
      }
    } else {
      let leyahChoice = {
        iSayGo: "Ich werde mein bestes geben, das verspreche ich dir!",
        iSayNo: "Nein tut mir leid, ich werde dir nicht helfen."
      };
      let secondDialougeElement = await ƒS.Menu.getInput(leyahChoice, "FirstDecisions");
      switch (secondDialougeElement) {
        case leyahChoice.iSayGo:
          await ƒS.Speech.tell(characters.Leyah, "Dankeschön, das freut mich wirklich!");
          await ƒS.Speech.tell(characters.Leyah, "Hör zu, du musst dich umdrehen und zurück ins dunkle laufen.");
          await ƒS.Speech.tell(characters.Leyah, "Laufe bis du ein blaues Licht siehst.");
          await ƒS.Speech.tell(characters.Leyah, "Dort scheint ein Ort zu sein welcher dir helfen kann den Schlüssel zu finden.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Blaues Licht sagst du? Ich werde danach ausschau halten!");
          dataForSave.talkedToLeyah = true;
          return "WoIstSchluessel"
        case leyahChoice.iSayNo:
          dataForSave.sayNoToLeyah = true;
          return "Finale"
      }
    }
  }
}