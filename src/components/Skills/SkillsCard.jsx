import {portfolio} from '../../data/skills'
import "../../styles/components/SkillsCard.scss"
import { useNavigate } from "react-router-dom";


const SkillsCard = () => {

  let navigate = useNavigate();
  const initId = (id) => {
    navigate("/skills/" + id);
  };

  return (
    <div>
      <ul className="skills">
        {portfolio.map((skills) => (
          <li key={skills.id} className="skills__card">
            <div className='skills__card__img'>
              <img src={skills.logo} alt="logo du projet"/>
            </div>
            <p className='skills__card__description'>{skills.description}</p>
            <div className='skills__card__link' onClick={() => initId(skills.id)}> en savoir + </div> 
            <div className='skills__card__pictures'>
            <img
              className="skills__card__pictures__img"
              src={skills.cover}
              alt={`${skills.title} cover`}
            />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;