import React from 'react';
import Header from './components/Header';
import Headerr from './components/Headerr';
import Headerrr from './components/Headerrr';
import Headerrrr from './components/Headerrrr';
import Headerrrrr from './components/Headerrrrr';
import Koko from './components/Koko';
import Kokoo from './components/Kokoo';
import Kokooo from './components/Kokooo';
import Kokoooo from './components/Kokoooo';
import Kokooooo from './components/Kokooooo';
import Leyla from './components/Leyla';
import Leylaa from './components/Leylaa';
import Leylaaa from './components/Leylaaa';
import Leylaaaa from './components/Leylaaaa';
import Leylaaaaa from './components/Leylaaaaa';
import About from './components/About'
import Baslik from './components/Baslik'
import Clients from './components/Clients';
import Partners from './components/Partners';
import Services from './components/Services';


function App() {
  return (
    <div className="App">  
      <div><Baslik/>  </div>
      <div ><Header/></div>  {/* Boşluk eklendi */}
      <div id='Headerr' ><Headerr/><br/><br/></div> {/* Boşluk eklendi */}
      <div id='About' ><About/> <br/><br/> </div>
      <div ><Headerrr/><br/><br/></div> {/* Boşluk eklendi */}
      <div ><Headerrrr/><br/><br/> </div> {/* Boşluk eklendi */}
      <div ><Headerrrrr/><br/><br/></div> {/* Boşluk eklendi */}
      <div id="Leylaa"><Services/><br/><br/></div> {/* Boşluk eklendi */}
      <div ><Koko/><br/><br/></div> {/* Boşluk eklendi */}
      <div ><Kokoo/><br/><br/></div> {/* Boşluk eklendi */}
      <div ><Kokooo/><br/><br/></div> {/* Boşluk eklendi */}
      <div ><Kokoooo/><br/><br/></div> {/* Boşluk eklendi */}
      <div ><Kokooooo/><br/><br/></div> {/* Boşluk eklendi */}
      <div ><Leyla/><br/><br/></div> {/* Boşluk eklendi */}
      <div  ><Leylaa/><br/><br/></div> {/* Boşluk eklendi */}
      <div ><Leylaaa/><br/><br/></div> {/* Boşluk eklendi */}
      <div ><Leylaaaa/></div> {/* Boşluk eklendi */}
      <div id='Clients' ><Clients/> <hr/> </div> {/* Boşluk eklendi */}
      <div id='Partners' ><Partners/><br/><br/><br/><br/></div> {/* Boşluk eklendi */}
      <div id="Leylaaaaa" ><Leylaaaaa/><br/><br/></div> {/* Boşluk eklendi */}
    </div>
  );
}

export default App;
