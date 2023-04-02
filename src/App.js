import { useEffect, useState } from "react";
import KisiListe from "./KisiListe";
import Loading from "./Loading";

function App() {
  const [yukleniyor, yukleniyorGuncelle] = useState(true);

  console.count("Render oldu.")

  const kisiler = [
    { ad: 'Ahmet', yas: 25, cinsiyet: 'Erkek' },
    { ad: 'Ayşe', yas: 30, cinsiyet: 'Kadın' },
    { ad: 'Ali', yas: 18, cinsiyet: 'Erkek' },
    { ad: 'Fatma', yas: 22, cinsiyet: 'Kadın' },
    { ad: 'Mehmet', yas: 40, cinsiyet: 'Erkek' },
    { ad: 'Zeynep', yas: 28, cinsiyet: 'Kadın' },
    { ad: 'Hakan', yas: 35, cinsiyet: 'Erkek' },
    { ad: 'Aysel', yas: 27, cinsiyet: 'Kadın' },
    { ad: 'Emre', yas: 29, cinsiyet: 'Erkek' },
    { ad: 'Selin', yas: 24, cinsiyet: 'Kadın' }
  ];

  useEffect( ()=>{ 
    let zamanlayici = setTimeout(  ()=>{ yukleniyorGuncelle(false) } , 3000 ) 
  
    return ()=>{  clearTimeout(zamanlayici) }
  }, [] )

  return (
    <>
    { yukleniyor === true ? <Loading /> : <KisiListe kisiler={kisiler} /> }
    </>
  );
}

export default App;
