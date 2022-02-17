namespace Template {
  export async function SlowStart(): ƒS.SceneReturn {
    let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)])
    await ƒS.Location.show(locations.DreamStart);
    await ƒS.update(transition.lines.duration, transition.lines.alpha, transition.lines.edge);
    await ƒS.update(0);
    ƒS.Sound.fade(sound.depression, 0, 1, true);
    ƒS.Sound.fade(sound.dream, 0.4, 2, true);
    await ƒS.Speech.tell(dataForSave.namePlayer, "Ich müsste schon ganz in der Nähe sein!");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Wenn ich richtig liege, dann war das die Stimme einer Frau.");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Hoffentlich hat sie keine Angst vor mir.");
    await ƒS.Location.show(locations.Doorway);
    await ƒS.update(transition.blurr.duration, transition.blurr.alpha, transition.blurr.edge);
    await ƒS.update(0);
    await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.standardRechts, OOBleftToRight()); 
    await ƒS.Speech.tell(dataForSave.namePlayer, "A-aber...was ist denn das? Eine Tür?");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Unheimlich...");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Nanu? Ich höre hinter dieser Tür doch etwas?");
    ƒS.Sound.play(sound.crying, 1, false);
    await signalDelay();
    await ƒS.Speech.tell(dataForSave.namePlayer, "Bist du diejenige, die mir vorhin zugerufen hat? Und warum weinst du?");
    await ƒS.Speech.tell(characters.Leyah, "R-...Redest du mit mir?");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Ja das tue ich!");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Deine Stimme sie...kommt mir so vertraut vor.");
    await ƒS.Speech.tell(characters.Leyah, "Ich habe dich hier schon öfter gesehen. Immer bist du auf der Suche nach einem Schlüssel, hast aber keine Ahnung wo du ihn finden sollst.");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Bin ich froh wenigstens nicht alleine hier sein zu müssen.");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Schlüssel? Das ist jetzt schon das zweite mal, dass ich heute von einem Schlüssel gehört habe...");
    await ƒS.Speech.tell(characters.Leyah, "Naja zugegeben, das ist nicht das erste mal, dass wir miteinander reden. Du hattest dir schonmal vorgenommen mich von dieser Tür zu befreien, indem du den zugehörigen Schlüssel findest.");
    await ƒS.Speech.tell(characters.Leyah, "Weißt du...ich sitze schon recht lange hier. Dabei sollte ich eigentlich gar nicht mehr hier sein...");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Oh, das tut mir leid. Ich wusste nicht, wie lange du hier schon festsitzt. Weißt du wer oder was dich dahinter verschlossen hat?");
    await ƒS.Speech.tell(characters.Leyah, "Das weiß ich...aber die Antwort ist komplizierter als du es dir vorstellen kannst.");
    await ƒS.Speech.tell(characters.Leyah, "Wir kennen uns schon länger.");
    await ƒS.Speech.tell(characters.Leyah, "Ich bin hier eingesperrt, weil du es so möchtest.");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Moment jetzt komme ich nicht mehr mit.");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Du sitzt hier eingesperrt weil ich das möchte?");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Wenn das wirklich der Fall wäre, warum habe ich dann einen Schlüssel gesucht um deine Tür zu öffnen?");
    await ƒS.Speech.tell(characters.Leyah, "Ich sagte doch es ist nicht so einfach...");
    await ƒS.Speech.tell(characters.Leyah, "Du hast mich hier zwar eingesperrt, aber nicht weil du mir schaden wolltest. Nein...du wolltest mich vor langer Zeit wieder gehen lassen.");
    await ƒS.Speech.tell(characters.Leyah, "Allerdings hast du vergessen, dass ich hier bin. Nicht nur mich hast du vergessen, sondern auch den Schlüssel um mich zu befreien.");
    await ƒS.Speech.tell(characters.Leyah, "Jetzt bin ich hier...muss aber so schnell wie Möglich weg. Hörst du? Du musst mich UNBEDINGT gehen lassen!");
    await ƒS.Speech.tell(characters.Leyah, "Möchtest du mir helfen und versuchen mich zu befreien?");
    let leyahChoice = {
      iSayGo: "Ich werde mein bestes geben, das verspreche ich dir!",
      iSayWait: "Könntest du mir vorher noch etwas mehr über dich erzählen?",
      iSayNothing: "Weißt du, was es mit dieser Steinfafel auf sich hat die ich vorher finden konnte?"
    };
    let secondDialougeElement = await ƒS.Menu.getInput(leyahChoice, "FirstDecisions");
    switch (secondDialougeElement) {
      case leyahChoice.iSayGo:
        await ƒS.Speech.tell(characters.Leyah, "Dankeschön, das freut mich wirklich!");
        await ƒS.Speech.tell(characters.Leyah, "Hör zu, du musst dich umdrehen und zurück ins dunkle laufen.");
        await ƒS.Speech.tell(characters.Leyah, "Laufe bis du ein blaues Licht siehst.");
        await ƒS.Speech.tell(dataForSave.namePlayer, "Hey ich war schon an einem blauen Licht! Dort konnte ich diese eigenartige Steintafel auffinden...");
        await ƒS.Speech.tell(characters.Leyah, "Es scheint ein Ort zu sein welcher dir helfen kann den Schlüssel zu finden.");
        await ƒS.Speech.tell(dataForSave.namePlayer, "Aber...ich komme doch gerade von dort.");
        await ƒS.Speech.tell(dataForSave.namePlayer, "Nun gut.");
        await ƒS.Speech.tell(dataForSave.namePlayer, "Ich werde nocheinmal hingehen, allerdings glaube ich nicht, dass dies irgendwas tun wird.");
        await ƒS.Speech.tell(characters.Leyah, "Komme jederzeit hier her zurück wenn du nicht weiter weißt. Versuche jedoch aus eigenem Geist heraus eine Lösung zu finden...");
        await ƒS.Speech.tell(characters.Leyah, "Hörst du " + dataForSave.namePlayer + "?");
        await ƒS.Speech.tell(dataForSave.namePlayer, "Ich werde mein bestes geben!");
        dataForSave.talkedToLeyah = true;
        ƒS.Character.hideAll();
        return "WoIstSchluessel"
      case leyahChoice.iSayWait:
        ƒS.Character.hideAll();
        return "LeyahBackground"
      case leyahChoice.iSayNothing:
        await ƒS.Speech.tell(characters.Leyah, "Eine Steintafel?");
        await ƒS.Speech.tell(characters.Leyah, "Nur du musst es sehen können, denn ich habe dich schon einmal darüber reden hören.");
        await ƒS.Speech.tell(characters.Leyah, "Man spricht bei diesem Mal von einer Verkörperung des inneren Wunsch des T-...");
        await ƒS.Speech.tell(characters.Leyah, "T-...T-...Trainers.");
        await ƒS.Speech.tell(dataForSave.namePlayer, "Die Verkörperung des inneren Wunsches des Trainers?");
        await ƒS.Speech.tell(dataForSave.namePlayer, "Dir ist bewusst, dass ich nichts von dem verstanden habe was du mir versucht hast zu vermitteln, oder?");
        await ƒS.Speech.tell(characters.Leyah, "Tut mir Leid, ich stoße an meine Grenzen. Mehr kann ich dazu nicht sagen.");
        await ƒS.Speech.tell(dataForSave.namePlayer, "Ein komisches Mädchen bist du...naja!");
    // Selbe Frage, jedoch ohne Option "Weißt du, was es mit diesem Stein auf sich hat den ich vorher finden konnte?" --> evtl. sehr unpraktisch gelößt but it
        await ƒS.Speech.tell(characters.Leyah, "Jetzt nochmal: Möchtest du mir helfen und versuchen mich zu befreien?");
        let leyahChoice2 = {
          iSayGo: "Ich werde mein bestes geben, das verspreche ich dir!",
          iSayWait: "Könntest du mir vorher noch etwas mehr über dich erzählen?",
        };
        let secondDialougeElement = await ƒS.Menu.getInput(leyahChoice2, "FirstDecisions");
        switch (secondDialougeElement) {
          case leyahChoice2.iSayGo:
            await ƒS.Speech.tell(characters.Leyah, "Dankeschön, das freut mich wirklich!");
            await ƒS.Speech.tell(characters.Leyah, "Hör zu, du musst dich umdrehen und zurück ins dunkle laufen.");
            await ƒS.Speech.tell(characters.Leyah, "Laufe bis du ein blaues Licht siehst.");
            await ƒS.Speech.tell(dataForSave.namePlayer, "Hey ich war schon an einem blauen Licht! Dort konnte ich diese seltsame Steintafel auffinden...");
            await ƒS.Speech.tell(characters.Leyah, "Es scheint ein Ort zu sein welcher dir helfen kann den Schlüssel zu finden.");
            await ƒS.Speech.tell(dataForSave.namePlayer, "Aber...ich komme doch gerade von dort.");
            await ƒS.Speech.tell(dataForSave.namePlayer, "Nun gut.");
            await ƒS.Speech.tell(dataForSave.namePlayer, "Ich werde nocheinmal hingehen, allerdings glaube ich nicht, dass dies irgendwas tun wird.");
            await ƒS.Speech.tell(characters.Leyah, "Komme jederzeit hier her zurück wenn du nicht weiter weißt. Versuche jedoch aus eigenem Geist heraus eine Lösung zu finden...");
            await ƒS.Speech.tell(characters.Leyah, "Hörst du " + dataForSave.namePlayer + "?");
            await ƒS.Speech.tell(dataForSave.namePlayer, "Ich werde mein bestes geben!");
            dataForSave.talkedToLeyah = true;
            ƒS.Character.hideAll();
            return "WoIstSchluessel"
          case leyahChoice.iSayWait:
            ƒS.Character.hideAll();
            return "LeyahBackground"
        }
    }
  }
}
