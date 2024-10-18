import React from 'react';
import Header from './components/Header';
import Headerr from './components/Headerr';
import Headerrr from './components/Headerrr';
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
import Teams from './components/Teams'
import Test from './components/Test'


function App() {
  return (
    <div className="App">  
      <div><Baslik/><br/><br/><br/><br/><br/>  </div>
      <div id='Headerr'><Header/></div>  {/* Boşluk eklendi */}
      <div id='About' ><Headerr/><br/><br/></div> {/* Boşluk eklendi */}
      <div  ><About/> <br/><br/> </div>
      <div ><Headerrr/><br/><br/></div> {/* Boşluk eklendi */}
      <div id="Leylaa"><Services/><br/><br/></div> {/* Boşluk eklendi */}
      <div ><Headerrrrr/></div> {/* Boşluk eklendi */}
      <div id='Property' ><Kokooooo/><br/><br/></div> {/* Boşluk eklendi */}   
      <div ><Kokoo/><br/><br/></div> {/* Boşluk eklendi */}
      <div id='Brand' ><Koko/><br/><br/></div> {/* Boşluk eklendi */}
      <div ><Kokoooo/><br/><br/></div> {/* Boşluk eklendi */}
      <div id='Concept' ><Kokooo/><br/><br/></div> {/* Boşluk eklendi */}
      <div ><Leyla/><br/><br/></div> {/* Boşluk eklendi */}
      <div id='Hosp' ><Leylaa/><br/><br/></div> {/* Boşluk eklendi */}
      <div id='Sales' ><Leylaaa/><br/><br/></div> {/* Boşluk eklendi */}
      <div ><Leylaaaa/></div> {/* Boşluk eklendi */}
      <div id='Clients' ><Clients/> <hr/> </div> {/* Boşluk eklendi */}
      <div id='Partners' ><Partners/><br/><br/><br/><br/></div> {/* Boşluk eklendi */}
      <div id='Teams' ><Teams/><br/><br/><br/><br/></div> {/* Boşluk eklendi */}
      <div id='Test' ><Test/><br/><br/><br/><br/></div> {/* Boşluk eklendi */}
      <div id="Leylaaaaa" ><Leylaaaaa/><br/><br/></div> {/* Boşluk eklendi */}
    </div>
  );
}

export default App;
