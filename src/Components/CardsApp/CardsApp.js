import img1 from '../Img/Solo.jpg';
import img2 from '../Img/Chew.jpg';
import img3 from '../Img/Jabba.jpg';
import Cards from './Cards';
import './StyleCards.css';

const GrupoCards = [
    {
      id:1,
      img:img1,
      title:'HAN SOLO',
      text: 'Han Solo tiene un encanto y una personalidad arrolladoras. Es el canalla que cae bien, el golfo que te saca una sonrisa aunque te acabe de robar. Es ese tipo sarcástico y egoísta que al final acaba salvando el día.',
    },
    {
      id:2,
      img:img2,
      title:'CHEWBACCA',
      text: 'Desafían a la autoridad y más si están nerviosos. Dudan de los demás y de sí mismos. Cuando sus inseguridades están al descubierto pueden tener reacciones emocionales explosivas. Siendo el mejor amigo de Han Solo.',
    },
    {
      id:3,
      img:img3,
      title:'JABBA',
      text: ' Jabba es un ser cruel y sádico que adora ver sufrir a los demás. Es lascivo, glotón y vicioso, y representa todo lo malo que se puede ser: codicioso, engreído, asqueroso y con una gran ambición, su ira puede ser terrible.',
    },
]

function CardsApp() {
  return(
      <div className='CardGruop'>
        {
          GrupoCards.map(tarjeta=>(
            <div key={tarjeta.id}>
              <Cards foto={tarjeta.img} titulo={tarjeta.title} infor={tarjeta.text}/>
            </div>
          ))
        }
      </div>
  )
}

export default CardsApp