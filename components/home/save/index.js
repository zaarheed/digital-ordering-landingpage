import Calculator from "./calculator";
import { calculate } from "./utils";
import commaNumber from "comma-number";
import { useEffect, useState } from "react";
import Modal from "../../shared/modal";
import ExplanationModal from "./explanation-modal";
import FomoModal from "./fomo-modal";

export default function Save() {
    const [orders, setOrders] = useState(null);
    const [value, setValue] = useState(null);
    const [commission, setCommission] = useState(null);
    const [showExplanationModal, setShowExplanationModal] = useState(false);
    const [showFomoModal, setShowFomoModal] = useState(false);
    const [save, setSave] = useState(34958);

    useEffect(() => {
        const calculated = calculate(orders, value, commission);
        if (!calculated) return;
        setSave(calculated);
    }, [orders, value, commission]);

    const handleCalculateShowFomoModal = () => {
        if (!orders || !value || !commission) return;

        if (orders < 100) return;

        if (value < 11) return;

        if (commission < 21) return;
        
        setShowFomoModal(true);
    }

    return (
        <div className="py-10 px-4">
            <div className="max-w-screen-lg sm:mx-auto relative rounded-lg block lg:flex items-center bg-white shadow-md" style={{minHeight: "14rem"}}>
                <div className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg" style={{minHeight: "14rem"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1" />
                    </svg>
                    <div className="absolute inset-0 w-full h-full bg-sunshine-500 opacity-100"></div>
                    <div className="flex flex-col absolute inset-0 w-full h-full flex items-center justify-center fill-current text-2xl text-gray-900 font-bold p-4">
                        You could save
                        <span className="text-6xl">£{commaNumber(save)}<span className="text-xs text-gray-800">/year</span></span>
                        <span className="flex flex-row items-center">
                            with Digital Ordering
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5 ml-1 opacity-60 hover:opacity-100 cursor-pointer"
                                onClick={() => setShowExplanationModal(true)}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <Modal show={showExplanationModal} size="sm" onClose={() => setShowExplanationModal(false)}>
                                <ExplanationModal />
                            </Modal>
                        </span>
                    </div>
                </div>
                
                <div className="w-full md:w-3/5 h-full flex items-center bg-white rounded-lg">
                    <div className="w-full p-8 sm:p-12 md:pr-12 md:pl-8 md:pb-6 md:pt-2">
                        <h4 className="text-gray-900 text-xl mb-4 text-center font-semibold">
                            Find out how much your business can &nbsp;
                            <span className="text-candy-500 underline">save</span>
                            &nbsp; below!
                        </h4>
                        <Calculator
                            onOrdersChange={setOrders}
                            onValueChange={setValue}
                            onCommissionChange={setCommission}
                            onComplete={handleCalculateShowFomoModal}
                        />
                    </div>

                    <Modal show={showFomoModal} size="sm" onClose={() => setShowFomoModal(false)}>
                        <FomoModal amount={`£${commaNumber(save)}`} />
                    </Modal>
                    
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                </div>
            </div>
        </div>
    );
}