import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState(null); // State for managing active section

  // Function to handle button click and toggle active section
  const handleClick = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <div className="app">
      <div className="brau">
        {/* Add your repeated background image here */}
        <a href="src/index.html" class="section-button">Acasa</a>
        <a href="src/icoane.html" class="section-button">Pictura pe sticlă</a>
        <a href="src/lazar.html" class="section-button">„Verșul lui Lazăr”</a>
        <a href="src/fbl.html" class='section-button'>„Tradiții unice</a>
        <a href="src/dsp.html" class='section-button'>Despre</a>
      
      </div>

      <div className="traditii-text">
        <h1>Tradiții românești</h1>
      </div>

      <div className="laz-text">
        <h1><b><i>Laz, un sat de poveste</i></b></h1>
      </div>

      <div className='scts'>
        <h1></h1>
      </div>

      <div className="content">
        <h2></h2>

        <div className="left-sidebar">
        </div>

        <div className="section-content">
          {!activeSection && (
            <>
               <p>Situat pe pitoreasca Vale a Sebeșului din județul Alba, satul Laz este o comoară ascunsă în peisajul fermecător al Munților Apuseni.<br /> Având o istorie bogată și o geografie încântătoare, acest mic colț de lume încântă privirile și inimile celor care îndrăznesc să-i calce pragul.</p>

<h2>Repere geografice:</h2>
<p>Relieful colinar și muntos conferă satului Laz o frumusețe aparte. Înconjurat de dealuri acoperite de păduri seculare și îmbăiat de izvoare cristaline, acest colț de rai își încântă locuitorii și vizitatorii<br /> cu peisaje desprinse din povești. Aici, verdele crud al naturii se îmbină armonios cu albastrul cerului și cu strălucirea soarelui, creând tablouri de o frumusețe ireală.</p>

<h2>Tradiție și cultură:</h2>
<p>În adâncurile istoriei sale, Lazul păstrează vii tradițiile și obiceiurile autentice, transmise din generație în generație.<br/> Viața păstrează aici o dimensiune arhetipală, iar sărbătorile religioase sau laice își găsesc aici locul. Dansurile tradiționale, portul popular și meșteșugurile tradiționale sunt mărturii vii ale unei culturi bogate și diversificate.</p>

<h2>Comunitate:</h2>
<p>Cu o populație caldă și primitoare, satul Laz își deschide brațele ca un vechi prieten. Aici, oamenii trăiesc în armonie cu natura și își păstrează obiceiurile străvechi chiar și în era modernă.<br /> Agricultura rămâne coloana vertebrală a economiei locale, iar munca pământului și creșterea animalelor constituie o tradiție transmisă din generație în generație.</p>

<h2>Turism:</h2>
<p>Pentru cei dornici de aventură și descoperire, satul Laz oferă o paletă bogată de activități în aer liber.<br /> Drumețiile pe potecile șerpuite ale munților, plimbările cu bicicleta prin zonele fermecătoare ale munților și explorarea satului și împrejurimilor sale sunt doar câteva dintre experiențele pe care orice iubitor de natură le poate trăi aici.</p>
            </>
          )}
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9343.415090401662!2d23.576658922336176!3d45.875032236335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474c23b56a0eb8b1%3A0xedaaeeae6c4a4957!2s517663%20Laz!5e0!3m2!1sen!2sro!4v1716038433337!5m2!1sen!2sro"
          width="600"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    

      <footer>
        <p><b><i>Website realizat de Pavel Oarga</i></b></p>
      </footer>
    </div>
  );
}

export default App;
