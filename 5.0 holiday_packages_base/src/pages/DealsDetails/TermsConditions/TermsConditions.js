import './TermsConditions.style.css';
import Marker from '../../../assets/marker.png';

const TermsConditions = ({ title, description }) => {
    return (
        <div className='term-conditions-container'>
            <img src={Marker} alt="marker"></img>
            <h5>{title}</h5>
            <hr></hr>
            <div className="term-conditions-details">
                {description.map(item => {
                    return (
                        <>
                            <span>{item}</span>
                            <hr></hr>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default TermsConditions;