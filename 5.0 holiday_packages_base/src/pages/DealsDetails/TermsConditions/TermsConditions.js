import './TermsConditions.style.css';

const TermsConditions = ({ title, description }) => {
    return (
        <div className='term-conditions-container'>
            <img src="assets/marker.png" alt="marker"></img>
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