import { useEffect, useState } from "react";

function App() {
  const [sayac, sayacGuncelle] = useState(0)
  const [ad, adGuncelle] = useState("Ad tanımsız")

  console.count("App")

  useEffect( ()=>{
    document.title = sayac
    console.count("Use effect çalıştı")
  }, [sayac] )

  function adFonksiyonu() {
    let zaman = new Date().getSeconds()
    adGuncelle("Ahmet Yılmaz: " + zaman)
  }

  return (
    <>
      <p>{sayac}</p>
      <button onClick={ ()=>{  sayacGuncelle( oncekiDeger=>oncekiDeger+1)  } }>Arttır</button>

      <p>Ad: {ad}</p>
      <button onClick={adFonksiyonu}>Ad Güncelle</button>
    </>
  );
}

export default App;