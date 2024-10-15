import {useState} from 'react';
import html2canvas from 'html2canvas';
import './assets/style.css';
function App(){
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = (event) => {
    setLinea1(event.target.value)
  }
  const onChangeLinea2 = (event) => {
    setLinea2(event.target.value)
  }
  const onChangeImagen = (event) => {
    setImagen(event.target.value)
  }


  //funcion para exportar el meme
  const onClickExportar = () => { 
    html2canvas(document.querySelector('#meme')).then(function(canvas) {
      let img = canvas.toDataURL("image/png");
      let link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
      // document.body.appendChild(canvas);
  });
  }

  return(
    <div>
      <h1>Creador de memes</h1>
      <select onChange={onChangeImagen} name="" id="">
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br/>
      <input onChange={onChangeLinea1} type="text"  placeholder="linea 1"/> <br />
      <input onChange={onChangeLinea2} type="text" placeholder="linea 2"/> <br />
      <button onClick={onClickExportar} >Exportar</button>
      <div className='container-text' id='meme'>
        <span className='span1'>{linea1}</span>
        <span className='span2'>{linea2}</span>
        <img src={`/${imagen}.jpg`} alt="" />
      </div>
    </div>
  )  
}

export default App;