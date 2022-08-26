
import './card.style.css'

const Card = ({monster}) => {

    const {id, name, email } = monster;
    const {zipcode } = monster.address;
      return (
        <div className="card-container" key={id}>
          <img
            src={`https://robohash.org/${id}?set=set${id}&size=180x180`}
            alt={`monster ${name}`}
          />
          <h1>{name}</h1>
          <p>{email}</p>
          <p>{zipcode}</p>
        </div>
      );
  
}    

export default Card;