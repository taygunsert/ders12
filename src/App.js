import { useState } from "react";
import C1 from "./C1";
import C2 from "./C2";

function App() {
  const [c1goster, c1gosterGuncelle] = useState(false)
  const [c2goster, c2gosterGuncelle] = useState(false)

  console.count("App")

  function c1Fonksiyonu() {
    c1gosterGuncelle(oncekiDeger => !oncekiDeger)
  }

  function c2Fonksiyonu() {
    c2gosterGuncelle(oncekiDeger => !oncekiDeger)
  }

  return (
    <>
      <button onClick={c1Fonksiyonu}>C1 göster/gizle</button>
      <button onClick={c2Fonksiyonu}>C2 göster/gizle</button>

      {c1goster === true ? <C1 /> : ""}
      {c2goster === true ? <C2 /> : ""}
    </>
  );
}

export default App;

