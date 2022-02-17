namespace Template {
  export async function WoIstSchluessel(): ƒS.SceneReturn {

// Falls man vorher mit Leah schon geredet hat
let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)])

    if (dataForSave.talkedToLeyah == true) {
      ƒS.Sound.fade(sound.dream, 0, 2, false);
      ƒS.Sound.fade(sound.depression, 0.2, 2, true);
      await ƒS.Location.show(locations.WoIstSchluessel);
      await ƒS.update(transition.lines.duration, transition.lines.alpha, transition.lines.edge);
      await ƒS.update(0);
      await signalDelay();
      await ƒS.Speech.tell(dataForSave.namePlayer, "Es scheint so als hätte Leyah recht...ich sehe hier ein blaues Licht.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Allerdings ist diese Steintafel echt gruselig...sieht irgendwie verrückt aus.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Und es scheint wirklich nicht das erste mal zu sein, dass ich nach einem Schlüssel für ihre Tür gesucht habe.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Allerdings sieht es so aus, als würde sich der Schlüssel nicht hier befinden.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Wenn ich hier schon öfter war und gesucht habe...was soll diesmal anders sein?");
      await ƒS.Speech.tell(dataForSave.namePlayer, "...");
      await ƒS.Speech.tell(dataForSave.namePlayer, ".........");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Komm schon " + dataForSave.namePlayer + " du kannst nicht jetzt schon aufgeben. Sie verlässt sich auf dich.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Ihr Geruch, ihre Stimme...alles an ihr kommt mir so vertraut vor.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Ich möchte sie nicht enttäuschen.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Womöglich wäre es schlau sie zu fragen, was es mit dieser Steintafel hier auf sich hat.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Sie sollte sich hier am besten auskennen. Immerhin hat sie schon viel Zeit hier verbringen müssen wie es scheint.");
      let askLeyah = {
        iSayGo: "Ich mache mich auf den Weg zurück zu ihrer Tür. Sie wird mir helfen können.",
        iSayWait: "Nein ich sollte mich nicht immer auf andere verlassen...",
      };
      let thirdDialougeElement = await ƒS.Menu.getInput(askLeyah, "FirstDecisions");
      switch (thirdDialougeElement) {
        case askLeyah.iSayGo:
          dataForSave.backToLeyah = true;
          return "TalkingToLeyah"
        case askLeyah.iSayWait:
          await ƒS.Speech.tell(dataForSave.namePlayer, "Ich werde schon selbst eine Antwort finden.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Allerdings lässt sich doch die Frage stellen, wer das hier aufgestellt hat?");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Wenn ich immer auf der Suche nach ihrem Schlüssel bin, dann hatte ich bestimmt keine Zeit um hier ein kleines Denkmal zu errichten.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Das wäre ja zum lachen.");
          await ƒS.Speech.tell(dataForSave.namePlayer, ".....moment wo bin ich nochmal?");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Das kann doch nicht sein...");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Ich habe keinerlei Erinnerungen daran, wie ich hier hergekommen bin.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Dazu kommt, dass mir Leyah's stimme so bekannt vorkommt.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Dies hier ist ein Ort an dem ich sowohl glücklich als auch traurig bin. Ihre Präsenz löst so viele Emotionen in mir aus.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Außerdem...moment mal.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Wenn ich mich richtig Erinnere, dann hatte die Tür welche sie festhält kein Schlüsselloch...oder?");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Ohne Schlüsselloch kann man auch keinen Schlüssel verwenden.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Hmmmmmmmmm.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Das ist vielleicht weit hergeholt, aber...");
          await ƒS.Speech.tell(dataForSave.namePlayer, "...habe ich jemals versucht einfach ihre Tür zu öffnen?");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Vielleicht bin ich ja der Schlüssel zu ihrer Tür und es gibt keinen physischen Schlüssel?");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Ich könnte sie also vielleicht...einfach gehen lassen?");
          ƒS.Sound.fade(sound.breathing, 0.7, 1, true);
          await ƒS.Speech.tell(dataForSave.namePlayer, "W-....Warum?");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Mein Bauch...alles in meinem Körper wehrt sich dagegen.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Warum löst dieser Gedanke so viel Panik in mir aus?");
          await ƒS.Speech.tell(dataForSave.namePlayer, "........");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Hahahahaha.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Ich erinnere mich...");
          ƒS.Sound.fade(sound.breathing, 0, 1, false);
          await ƒS.Speech.tell(dataForSave.namePlayer, "Ja.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Leyah war der Mensch, der mir alles in meinem Leben bedeutet hat.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Wenn sie hier ist, kann das nur bedeuten, das etwas nicht stimmt.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Wir haben uns schon seit Jahren nicht mehr gesehen.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Ich muss schnell zu ihr und ihre Tür öffnen.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Das sie hier gefangen ist scheint meine Schuld zu sein! Ich konnte sie immer noch nicht loslassen.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Damals nutzte ich diesen Ort, um mich noch ein paar mal mit ihr zu unterhalten und bei ihr zu sein.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Aber irgendwann verlor ich mich selbst. Ich wollte nicht mehr in die Realität zurück, da dieser Ort viel schöner war.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Damit muss jetzt Schluss sein-...");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Wenn ich sie nicht loslassen kann, dann wird sie hier auf ewig verweilen.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Und solange sie hier ist, werde ich nicht aufhören können an sie zu denken.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "...");
          //await ƒS.Speech.tell(dataForSave.namePlayer, "Lang genug habe ich mir Schuld an allem gegeben.");
          //await ƒS.Speech.tell(dataForSave.namePlayer, "Mir unterstellt, dass ich ein schlechter Mensch bin, da ich sie alleine lassen musste.");
          //await ƒS.Speech.tell(dataForSave.namePlayer, "Dabei war ich selbst nur verloren und auf der Suche nach dem richtigen Weg...");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Ich muss sie schnell rauslassen. Sie kann und sollte nicht noch länger in meinem Kopf bleiben.");
          ƒS.Sound.fade(sound.rumble, 1, 2, true);
          await signalDelay();
          await ƒS.Speech.tell(dataForSave.namePlayer, "I-...IRGENDETWAS PASSIERT HIER!");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Ich kann etwas hören...es wird langsam lauter und lauter");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Ein ungutes Gefühl macht sich in mir breit...ich weiß, dass ich nicht viel länger hier bleiben kann.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "ICH KOMME LEYAH! DU BIST GLEICH FREI!");
          dataForSave.amTheKey = true;
          return "Finale"
      }
    } else {

// Stehengeblieben --> Monument zu "Wo ist Schlüssel" wird ohne Kontext entdeckt
      await ƒS.Location.show(locations.DreamStart);
      await ƒS.update(transition.lines.duration, transition.lines.alpha, transition.lines.edge);
      await ƒS.update(0);
      await ƒS.Speech.tell(dataForSave.namePlayer, "Diese Dunkelheit erinnert mich an...an irgendetwas. Wie als wäre ich hier schon einmal gewesen. Jedoch war ich das letzte mal nicht alleine. Es war jemand mit mir hier.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Aber nanu? Warum werde ich auf einmal so furchtbar traurig? Ich kann es nicht sehen, aber wissen tue ich es ganz genau: Mir fließen Tränen von den Augen.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Ja...ich bin mir ganz sicher. Immer wenn ich hier bin gibt es Trauer in mir. Es fühlt sich an als wäre ich kurz davor jemand wichtiges zu verlieren.");
      ƒS.Sound.fade(sound.dream, 0, 2, false);
      await ƒS.Speech.tell(dataForSave.namePlayer, "Oh meine Augen gewöhnen sich an die Dunkelheit...ich kann anfangen mehr zu erkennen!");
      ƒS.Sound.fade(sound.depression, 0.2, 2, true);
      await ƒS.Location.show(locations.WoIstSchluessel);
      await ƒS.update(transition.wet.duration, transition.wet.alpha, transition.wet.edge);
      await ƒS.update(0);
      await ƒS.Speech.tell(dataForSave.namePlayer, "Wow, was ist das denn für ein Ort?");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Hier steht eine Steintafel.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Wo ist der Schlüssel???");
      await ƒS.Speech.tell(dataForSave.namePlayer, "......");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Wo bin ich hier nur gelandet...ich bin so verwirrt.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Dies ist wirklich ein seltsamer Ort.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Scheint als hätte jemand seine Schlüssel verloren.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Hahahaha.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Aber wieso eine Steintafel nehmen, auf dessen Steinafel man denselben Satz immer und immer wieder zeigt?");
      await ƒS.Speech.tell(dataForSave.namePlayer, "...Hier muss doch irgendjemand sein...");
      await ƒS.Speech.tell(dataForSave.namePlayer, "HALLO? IST HIER JEMAND?");
      let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)])
      await signalDelay();
      await ƒS.Speech.tell(dataForSave.namePlayer, "Nichts zu hören...wirklich eigenartig.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Ich sollte mich vielleicht auf die Suche nach diesem seltsamen Schlüssel machen.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Ob man ihn in der Finsternis hier finden kann ist wohl eine andere Frage.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Selbst mit Schlüssel...ich weiß nicht wohin damit.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Naja eins nach dem anderen!");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Ich werde mich mal etwas mehr umsehen.");
      await signalDelay();
      await ƒS.Speech.tell(characters.Leyah, "H-...HALLOOOO?");
      await signalDelay();
      await ƒS.Speech.tell(dataForSave.namePlayer, "Nanu? Da habe ich doch jemanden von weit weg rufen hören!");
      await ƒS.Speech.tell(dataForSave.namePlayer, "KEINE SORGE DU BIST NICHT ALLEINE.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "ICH WERDE DEM KLANG DEINER STIMME FOLGEN, OK? ICH KOMME ZU DIR, DU MUSST KEINE ANGST HABEN.");
      dataForSave.slowStart = true;
      return "SlowStart"

      // Protagonist hat zu diesem Zeitpunkt noch keine Ahnung von einem Schlüssel. Wie geht es hier weiter? Bogen zur ersten Begegnung mit Leyah?
    }
  }
}