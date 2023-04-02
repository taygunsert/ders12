import { useEffect, useState } from "react";

function App() {
  const [pencereBoyutu, pencereBoyutuGuncelle] = useState({
    genislik: window.innerWidth,
    yukseklik: window.innerHeight,
  });

  // useEffect( ()=>{ console.count("Useeffect çalıştı") } , [] )

  useEffect( ()=> {
    
    function boyutlandirmaKodu() {
      pencereBoyutuGuncelle({
        genislik: window.innerWidth,
        yukseklik: window.innerHeight,
      });
    }

    window.addEventListener("resize", boyutlandirmaKodu);

    return () => {
      window.removeEventListener("resize", boyutlandirmaKodu);
    };

  } )


  return (
    <div>
      <p>Pencere genişliği: {pencereBoyutu.genislik}</p>
      <p>Pencere yüksekliği: {pencereBoyutu.yukseklik}</p>
    </div>
  );
}

export default App;
