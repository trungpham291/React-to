import React from "react";
import PlanCard from "./PlanCard";

const PricingPage = () => {
    const plans = [
        {
            planName : "Basic",
            description: "Individual",
            price: 8,
            features: [
                { text : "Freature 1", disabled: false },
                { text : "Freature 2", disabled: false },
                { text : "Freature 3", disabled: true },
                // Add more feratures as needed
            ],
            
        },
        {
            planName : "Standard",
            description: "Small Business",
            price: 20,
            features: [
                { text : "Freature A", disabled: false },
                { text : "Freature B", disabled: false },
                { text : "Freature C", disabled: true },
            ],
            
        },
        {
            planName : "Premium",
            description: "Large Companies",
            price: 40,
            features: [
                { text : "Freature X", disabled: false },
                { text : "Freature Y", disabled: false },
                { text : "Freature Z", disabled: true },
            ],
            
        },
    ];

    return(
        <div className="container-fluid" style={{ background: 'liner-gradient(90deg, #00C9FF 0%, #92FE9D 100%)'}}>
            <div className="container p-5">
                <div className="row">
                    {plans.map((plan, index) => (
                        <div key={index} className="col-lg-4 col-md-12 mb-4">
                            <PlanCard {...plan} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingPage;