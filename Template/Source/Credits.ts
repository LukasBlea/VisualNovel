namespace Template {
  export function showCredits(): void {
    ƒS.Text.setClass("credits");
    let credits =
      "<h1>CREDITS</h1>\
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
    ƒS.Speech.hide();
    ƒS.Text.print(credits);
  }
}