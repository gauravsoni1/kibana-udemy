import TermsConditions from "./TermsConditions/TermsConditions";
import TermsConditionsData from './TermsConditions/termsConditions.json'
import "./DealDetails.style.css";

const DealsDetails = () => {
    console.log(TermsConditionsData);

    return <div>
        <div>Banner</div>
        <div className="terms-conditions-section">
            {TermsConditionsData.map((item) => <TermsConditions title={item.title} description={item.description}></TermsConditions>)}
        </div>

        <div>Choose package section</div>
        <div>Fill form and book section</div>
    </div>
}

export default DealsDetails;

