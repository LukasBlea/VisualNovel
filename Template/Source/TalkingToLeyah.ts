namespace Template {
  export async function TalkingToLeyah(): ƒS.SceneReturn {

    // PROTAGONIST RETURNS BACK TO LEYAH AFTER SEEING MONUMENT

    if (dataForSave.backToLeyah == true) {
      await ƒS.Location.show(locations.DoorCloseup);
      ƒS.Sound.fade(sound.depression, 0, 1, true);
      ƒS.Sound.fade(sound.dream, 0.2, 2, false);
      await ƒS.update(transition.wet.duration, transition.wet.alpha, transition.wet.edge);
      await ƒS.update(0);
      await ƒS.Speech.tell(dataForSave.namePlayer, "Hey Leyah, ich bin wieder da!");
      await ƒS.Speech.tell(characters.Leyah, "Konntest du den Schlüssel finden?");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Nein den Schlüssel konnte ich leider nicht finden, allerdings ein Grabmal mit inschriften...");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Weißt du irgendwas darüber?");
      await ƒS.Speech.tell(characters.Leyah, "Diese Frage stellt du mir nicht das erste mal...");
      await ƒS.Speech.tell(characters.Leyah, "Weißt du eigentlich wo wir hier sind?");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Naja also...ehrlich gesagt bin ich mir nicht sicher. Das einzige woran ich mich erinnern kann ist mich ins Bett gelegt zu haben...");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Moment...");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Sag mir nicht ich befinde mich in einem T-");
      await ƒS.Speech.tell(characters.Leyah, "Doch genau so ist es. Du befindest dich momentan in deinem eigenen Traum. Das Grabmal...beziehungsweise die Steintafel des Mals das du gesehen hast muss eine Manifestation deines Wunsches sein, den Schlüssel zu dieser Tür zu finden.");
      await ƒS.Speech.tell(characters.Leyah, "In Träumen werden einem die tiefen und unerkundeten Ecken des eigenen Kopfes zur schau gestellt.");
      await ƒS.Speech.tell(characters.Leyah, "Dinge an die du unterbewusst denkst.");
      await ƒS.Speech.tell(characters.Leyah, "Sorgen die du hast.");
      await ƒS.Speech.tell(characters.Leyah, "Stress.");
      await ƒS.Speech.tell(characters.Leyah, "Glück.");
      await ƒS.Speech.tell(characters.Leyah, "Liebe.");
      await ƒS.Speech.tell(characters.Leyah, "Alles ist in Träumen vorzufinden.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Aber ich verstehe nicht Leyah, warum wirst du hier dann von mir festgehalten?");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Wir-...haben uns doch schon vor langer Zeit voneinander getrennt.");
      ƒS.Sound.fade(sound.rumble, 1, 2, true);
      await ƒS.Speech.tell(characters.Leyah, "HEY!!");
      await ƒS.Speech.tell(characters.Leyah, "Du darfst nicht zu sehr über dein schlafendes Ich nachdenken. Desto mehr du an die Realität und vergangenes denkst, umso einfacher wird es dir fallen aufzuwachen.");
      await ƒS.Speech.tell(characters.Leyah, "Hörst du das? Dein Bewusstsein versucht dich immer mehr aus dem Schlaf zu reißen!");
      await ƒS.Speech.tell(characters.Leyah, "Wir sind nicht dazu gemacht um in Träumen zu denken und präsent zu sein. Träume sind da, um die tiefsten Wünsche und Bedürnisse eines selbst freien Raum zu lassen.");
      await ƒS.Speech.tell(characters.Leyah, "Wenn du ersteinmal aufgewacht bist, dauert es wieder eine lange Zeit bis wir die Möglichkeit haben uns zu treffen.");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Aber ich habe so viele Fragen...!");
      await ƒS.Speech.tell(dataForSave.namePlayer, "Leyah...jetzt da ich verstehe wer du bist...");
      let questionToLeyah = {
        iSayGo: "...verzeihst du mir, was ich dir damals angetan habe?",
        //  iSayWait: "...konntest du wieder Glücklich werden?",
      };
      let fourthDialougeElement = await ƒS.Menu.getInput(questionToLeyah, "FirstDecisions");
      switch (fourthDialougeElement) {
        case questionToLeyah.iSayGo:
          await ƒS.Speech.tell(characters.Leyah, "...");
          await ƒS.Speech.tell(characters.Leyah, "Es sollte nicht darum gehen, ob ich dir verziehen habe.");
          await ƒS.Speech.tell(characters.Leyah, "Du solltest für dich selbst herausfinden, ob du Glücklich bist.");
          await ƒS.Speech.tell(characters.Leyah, "Bereust du was du getan hast?");
          await ƒS.Speech.tell(characters.Leyah, "Immerhin warst du derjenige, welcher nicht mehr länger bei mir sein wollte.");
          await ƒS.Speech.tell(characters.Leyah, "Hast du überhaupt versucht in anderen Menschen wieder Liebe zu suchen?");
          await ƒS.Speech.tell(characters.Leyah, "Hoffst du darauf, dass irgendjemand angelaufen kommt und dir einen Tritt in den Arsch verpasst?");
          await ƒS.Speech.tell(dataForSave.namePlayer, "I-...Ich weiß nicht. Seitdem sich unsere Wege getrennt haben, bin ich einfach nur verloren.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Du warst meine erste Liebe. Ich wusste nicht, dass es so lange dauern wird, wieder auf den richtigen Pfad zu kommen.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "Es fühlt sich so an als wäre alles umsonst. Nie wieder finde ich jemanden der mir so viel bedeuten wird.");
          ƒS.Sound.fade(sound.rumble, 0, 0.5, true);
          ƒS.Sound.fade(sound.rumble, 0.5, 2, true);
          await ƒS.Speech.tell(characters.Leyah, "Das magst du vielleicht glauben, aber die Realität sieht anders aus.");
          await ƒS.Speech.tell(characters.Leyah, "Dieses tiefe Gefühl des Verlorenseins entsteht daraus, dass du immer noch an mir festhältst.");
          await ƒS.Speech.tell(characters.Leyah, "Du erhoffst dir irgendwas daraus an den schmerzhaften Erinnerungen mit mir festzuhalten-");
          await ƒS.Speech.tell(characters.Leyah, "Aber sie ziehen dich nur tiefer und tiefer in ein Loch hinein.");
          await ƒS.Speech.tell(characters.Leyah, "Glaubst du nicht, dass ich täglich sehen kann wie du mit dir selbst am kämpfen bist?");
          await ƒS.Speech.tell(characters.Leyah, "Damit muss schluss sein, hörst du?");
          await ƒS.Speech.tell(characters.Leyah, "Lass mich aus diesem Zimmer gehen...lasse mich aus deinem Kopf verschwinden. Du brauchst mich hier nicht länger. Es ist längst genug Zeit vergangen um mich gehen zu lassen.");
          await ƒS.Speech.tell(characters.Leyah, "Wir hatten so viele schöne Zeiten zusammen...");
          await ƒS.Speech.tell(characters.Leyah, "Wie kann es sein, dass du nur noch an die schlechten denken kannst?");
          await ƒS.Speech.tell(characters.Leyah, "Die Schuldgefühle die du dir machst, weil wir nicht mehr zusammen sein können, lassen mich nur noch trauriger werden.");
          await ƒS.Speech.tell(characters.Leyah, "Bitte lass meinen Schmerz nicht umsonst gewesen sein...");
          await ƒS.Speech.tell(characters.Leyah, "Es ist genug Zeit vergangen...");
          await ƒS.Speech.tell(characters.Leyah, "Lass es einfach sein und gehe deinen Weg weiter. Mach dir nicht weiter sorgen um mich.");
          await ƒS.Speech.tell(dataForSave.namePlayer, "L-...!!!");
          await ƒS.Speech.tell(dataForSave.namePlayer, "(Mein Körper gehorcht mir nicht mehr. Das kann doch nicht sein...ich erwache aus meinem Schlaf!)");
          await ƒS.Speech.tell(dataForSave.namePlayer, "(Ich habe ihr doch so viel zu sagen...)");
          await ƒS.Speech.tell(dataForSave.namePlayer, "(Nein...ich möchte noch nicht aufwachen...!!)");
          await ƒS.Speech.tell(dataForSave.namePlayer, "(Verdammt es wird heller...jetzt wache ich auf ohne mich bei ihr bedankt zu haben...)");
          await ƒS.Speech.tell(dataForSave.namePlayer, "(Die Zeit zusammen mit ihr hat mich so glücklich gemacht. Ich hoffe sie weiß das...sie macht sich doch so gerne vorwürfe.)");
          await ƒS.Speech.tell(dataForSave.namePlayer, "(Wenn ich ihr nur irgendwie hätte sagen können, weshalb ich nicht mehr länger bei ihr sein konnte.)");
          await ƒS.Speech.tell(dataForSave.namePlayer, "(Das ich mit mir selbst zu kämpfen hatte.)");
          await ƒS.Speech.tell(dataForSave.namePlayer, "(Meine Angst andere zu enttäuschen...)");
          await ƒS.Speech.tell(dataForSave.namePlayer, "(Sie hat mich eingenommen und niemand hatte mehr zugang zu mir.)");
          await ƒS.Speech.tell(dataForSave.namePlayer, "(Ich fühlte mich nicht mehr wie ein Mensch mit eigenen Bedürfnissen.)");
          await ƒS.Speech.tell(dataForSave.namePlayer, "(Nein...selbst jetzt fällt es mir noch schwer mich als einen Menschen zu sehen, der es Wert ist am Leben zu sein.)");
          await ƒS.Speech.tell(dataForSave.namePlayer, "(Jetzt ist alles zu spät. Ich muss in meinem nächsten Träumen hoffen, dass ich wieder meinen Weg zu ihr finden werde.)");
          await ƒS.Location.show(locations.BadEnding); 
          await ƒS.update(transition.blurr.duration, transition.blurr.alpha, transition.blurr.edge);
          await ƒS.update(0); 
          ƒS.Speech.hide();
        // case questionToLeyah.iSayWait:
        //  await ƒS.Speech.tell(characters.Leyah, "Und da ist es schon wieder.");
        //  await ƒS.Speech.tell(characters.Leyah, "Immer machst du dir nur sorgen um andere und achtest dabei nicht auf dich selbst.");
        //  await ƒS.Speech.tell(characters.Leyah, "Hast du jemals darüber nachgedacht, dass du anderen Leuten einen gefallen tust, wenn du dich um dich selbst sorgst?");
        //  await ƒS.Speech.tell(characters.Leyah, "Denn wenn es dir gut geht und du zufrieden bist...nur dann solltest du versuchen andere zu Lieben.");
        //  await ƒS.Speech.tell(characters.Leyah, "Deine Probleme werden Teil deines Partners.");
        //  await ƒS.Speech.tell(characters.Leyah, "Es ist unverantwortlich von dir, wenn du nicht auf dich selbst schaust und deine eigenen Probleme konfrontierst.");
        //   return "LeyahBackground"
      }
    } else {
    await ƒS.Speech.tell(dataForSave.namePlayer, "Nun gut...es fühlt sich an als würde ich mich in einem großen Raum befinden. Ich glaube ich kann mich fortbewegen, ohne irgendwo zu fallen oder mich zu stoßen.");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Meine Augen gewöhnen sich langsam an die Dunkelheit...ich fange an besser sehen zu können!");
    await ƒS.Speech.tell(dataForSave.namePlayer, "A-aber...was ist denn das? Eine Tür?");
    await ƒS.Location.show(locations.Doorway);
    await ƒS.update(transition.blurr.duration, transition.blurr.alpha, transition.blurr.edge);
    await ƒS.update(0);
    await ƒS.Speech.tell(dataForSave.namePlayer, "Unheimlich...");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Nanu? Ich höre hinter dieser Tür doch etwas?");
    ƒS.Sound.play(sound.crying, 1, false);
    let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)])
    await signalDelay();
    await ƒS.Speech.tell(dataForSave.namePlayer, "Wer bist du?? Und warum weinst du?");
    await ƒS.Speech.tell(characters.Leyah, "R-...Redest du mit mir?");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Ja das tue ich!");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Deine Stimme sie...kommt mir so vertraut vor.");
    await ƒS.Speech.tell(characters.Leyah, "Ich habe dich hier schon öfter gesehen. Immer bist du auf der Suche nach einem Schlüssel, hast aber keine Ahnung wo du ihn finden sollst.");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Bin ich froh wenigstens nicht alleine hier sein zu müssen. Du meinst ich bin auf der Suche nach einem Schlüssel?");
    await ƒS.Speech.tell(characters.Leyah, "Naja zugegeben, das ist nicht das erste mal, dass wir miteinander reden. Du hattest dir schonmal vorgenommen mich von dieser Tür zu befreien, indem du den zugehörigen Schlüssel findest.");
    await ƒS.Speech.tell(characters.Leyah, "Weißt du...ich sitze schon recht lange hier. Dabei sollte ich eigentlich gar nicht mehr hier sein...");
    await ƒS.Speech.tell(dataForSave.namePlayer, "Oh, das tut mir leid. Ich wusste nicht, dass du schon länger hinter dieser Tür festsitzt. Weißt du wer oder was dich dahinter verschlossen hat?");
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
      iSayNothing: "Nein tut mir leid, ich werde dir nicht helfen."
    };
    let secondDialougeElement = await ƒS.Menu.getInput(leyahChoice, "FirstDecisions");
    switch (secondDialougeElement) {
      case leyahChoice.iSayGo:
        await ƒS.Speech.tell(characters.Leyah, "Dankeschön, das freut mich wirklich!");
        await ƒS.Speech.tell(characters.Leyah, "Hör zu, du musst dich umdrehen und zurück ins dunkle laufen.");
        await ƒS.Speech.tell(characters.Leyah, "Laufe bis du ein blaues Licht siehst.");
        await ƒS.Speech.tell(dataForSave.namePlayer, "Ein blaues Licht? Ich verstehe...aber hier ist alles so dunkel! Woher weiß ich, dass mir nicht passieren wird?");
        await ƒS.Speech.tell(characters.Leyah, "Mache dir keine Sorgen, dir wird nichts passieren. Es scheint ein Ort zu sein, welcher dir helfen kann den Schlüssel zu finden.");
        await ƒS.Speech.tell(dataForSave.namePlayer, "Nun gut.");
        await ƒS.Speech.tell(dataForSave.namePlayer, "Wenn du sagst, dass es ein wichtiger Ort ist, werde ich mich natürlich dorthin begeben! Vielleicht finden wir schon gleich den Schlüssel zu deiner Tür.");
        await ƒS.Speech.tell(characters.Leyah, "Immer langsam " + dataForSave.namePlayer + ". Versuche nicht zu überstürzen.");
        await ƒS.Speech.tell(dataForSave.namePlayer, "Ein bisschen Hoffnung ist nie schlecht Leyah, merke dir das!");
        dataForSave.talkedToLeyah = true;
        return "WoIstSchluessel"
      case leyahChoice.iSayWait:
        return "LeyahBackground"
      case leyahChoice.iSayNothing:
        dataForSave.sayNoToLeyah = true;
        return "Finale"
    }
  }
  }
}
