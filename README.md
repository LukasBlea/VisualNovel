# FUDGE_Story
A FUDGE module for the easy development of interactive stories, visual novels and simple adventure games


# Abgabe
- [Spielbare Visual Novel "I can't stop crying in my sleep"](https://lukasblea.github.io/VisualNovel/Template/Template.html)
- [Quellcode](https://github.com/LukasBlea/VisualNovel/tree/main/Template/Source)
- [Konzept-Dokument](https://lukasblea.github.io/VisualNovel/Template/Konzeption.pdf)
- [WinRar: Konzept + Projektordner](https://github.com/LukasBlea/VisualNovel/blob/main/Alles.rar)

## Bewertungskriterien
© Prof. Dipl.-Ing. Jirka R. Dell'Oro-Friedl, HFU

| Nr | Bezeichnung           | Beschreibung | Erfüllt |
|---:|:----------------------|:-------------|:--------|
|    | Titel                 | I can't stop crying in my sleep |
|    | Name                  | Lukas Blea                      |
|    | Matrikelnummer        | 260610                          |
|  1 | Konzeption            | Eckdaten, Inhaltsangabe, Diagramm mit dem gesamten Text und Steckbriefe der Charaktere befinden sich als separate Dokumente im Ordner. | Vorhanden (Siehe Konzeptions PDF). |
|  2 | Charakter-Konzept     | Steckbrief der Charaktere mit Archetypenzuteilung: Protagonist Seed, Annie the wind, Mable the dog, Crow, Ralph the ant. | Protagonist & Leyah als "Der Liebende" und "Der Betreuer". |
|  3 | Auswahlmöglichkeiten  | Der/ die Spieler_in entscheidet durch seine/ ihre Entscheidungen über den Verlauf der Geschichte. Je nach Entscheidung, ändern sich die Texte, Bilder und Geräusche. | Diagramme in der Konzeption: Abgeänderter Text und extra Dialog-optionen bei Leyah durch vorzeitiges entdecken des Raums mit der Steintafel. |
|  4 | Branching narratives  | Der/ die Spieler_in beeinflusst durch seine Entscheidungen den Verlauf der Geschichte. Dabei gibt es mehrere Pfade, die entweder wieder zusammenführen oder zu unterschiedliche Enden führen. | :x: |
|  5 | Transitions           | Die ursprünglich gedachten Transitions wurden aufgrund von technischen Problemen entfernt. Stattdessen gibt es zwischen den Szenen einen Fade-Effekt.| Es wurden mehrere, verschiedene Transitions angewandt. |
|  6 | Novel-Pages           | Novel-Pages wurden am Anfang der Novel für die Vollbildempfehlung verwendet, sowie im Menü für die Credits und Shortcuts. | Novel-Pages in den Credits vorhanden. |
|  7 | Audio                 | Hintergrund Musik und Soundeffekte, sowie selbst-erstelltes Voice-Over. | Audio ist stark in die VN miteingebunden. Drei Soundeffekte wurden von mir selbst eingesprochen. |
|  8 | GUI                   | Menü mit den Funktionen: Save, Load, Credits, Shortcuts, lauter und leiser. | Der Nutzer kann sich durch ein kleines aber feines Menü navigieren.|
|  9 | Input-Feld(er)        | Der/die Spieler_in muss den Namen des Hauptcharakters (Seed) eingeben. | Input-Feld um seinen eigenen Namen anzugeben. Name des Spielers wird während des Spielens angezeigt. |
| 10 | Punkteverteilungssystem     | Ein Punktesystem kann bei den unterschiedlichsten Situationen zum Einsatz kommen. So können Punkte vergeben, abgezogen, berechnet und das Ergebnis ausgewertet werden. Gibt es hierfür ein geregeltes Schema, das die Punkteverteilung für das Verhalten des Spielers festlegt oder ähnliche Regeln? | :x: | 
| 11 | Inventory- und Item-System  | Das Inventarsystem übernimmt das Management von hinzugefügten, konsumierbaren sowie nicht-konsumierbaren Items. Wird dieses System genutzt? Welche Items gibt es und was für Eigenschaften werden diesen zugeschrieben? Wozu existieren sie? | :x: |
| 12 | Animation             | Einige Charaktere sliden ins Bild und wieder heraus + Samen fliegen durch die Luft und Regen fällt. | Animierte Posen des Protagonisten. Swipes von Links nach Rechts & Rechts nach Links. |
| 13 | Styling               | Alle relevanten Elemente sind mithilfe von CSS gestylt (Auswahlmöglichkeiten, Menü, Text, Novel Pages etc.) | Yessss. |          
| 14 | Enden                 | Es gibt zwei verschiedene Enden. | Es gibt drei verschiedene Enden. Zwei sind in der "Ending.ts" und ein weiteres Ende in der "TalkingToLeyah.ts". |
<br>

##  Abgabeformat

* Die Konzeption soll als .pdf-Dokument abgegeben werden.
* Platziere einen Link in der Readme-Datei deines VisualNovel-Repositories auf Github auf die fertige und in Github-Pages lauffähige Anwendung.
* Platziere ebenso Links zu den Stellen in deinem Repository, an denen der Quellcode und das Konzept-Dokument zu finden sind.
* Stelle zudem auf diese Art dort auch ein gepacktes Archiv zur Verfügung, welches folgende Daten enthält
  * Das Konzept-Dokument 
  * Die Projektordner inklusive aller erforderlichen Dateien, also auch Bild- und Audiodaten