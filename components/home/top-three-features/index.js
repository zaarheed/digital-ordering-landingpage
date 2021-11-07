import { useState } from "react";
import Modal from "@/components/shared/modal";
import DeliveryExplanationModal from "./delivery-explanation-modal";
import SelfBrandedExplanationModal from "./self-branding-explanation-modal";

export default function TopThreeFeatures() {
    const [showSelfBrandedModal, setShowSelfBrandedModal] = useState(false);
    const [showDeliveryModal, setShowDeliverydModal] = useState(false);

    return (
        <section className="max-w-screen-lg flex flex-col mx-auto space-y-4 px-4">
            <h3 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-center">
                Take orders with 0% commission
            </h3>

            <div className="flex flex-col lg:flex-row lg:space-x-5 space-y-3 lg:space-y-0 px-4 lg:px-0">
                <div className="w-full lg:w-4/12 bg-eggshell-500 rounded-lg py-16 px-8 flex flex-col items-center space-y-2">
                    <img src="/images/landing/menu.svg" className="w-20 h-20" />
                    <p className="text-2xl font-medium">
                        #ShopLocal
                    </p>
                    <p className="text-base text-gray-900 text-center font-light">
                        Customers order from your &nbsp;
                        <span
                            className="border-b-2 border-yellow-500 border-dashed hover:text-yellow-500 cursor-pointer"
                            onClick={() => setShowSelfBrandedModal(true)}
                        >
                            self-branded menu
                        </span>. &nbsp;
                        We build and host it, you just send customers there
                    </p>
                    <Modal show={showSelfBrandedModal} size="sm" onClose={() => setShowSelfBrandedModal(false)}>
                        <SelfBrandedExplanationModal />
                    </Modal>
                </div>
                
                <div className="w-full lg:w-4/12 bg-eggshell-500 rounded-lg py-16 px-8 flex flex-col items-center space-y-2">
                    <img src="/images/landing/money.svg" className="w-20 h-20" />
                    <p className="text-2xl font-medium">
                        Get paid directly
                    </p>
                    <p className="text-base text-gray-900 text-center font-light">
                        Money is paid directly to your Stripe account, and transferred to your bank every 24 hours
                    </p>
                </div>

                <div className="w-full lg:w-4/12 bg-eggshell-500 rounded-lg py-16 px-8 flex flex-col items-center space-y-2">
                    <img src="/images/landing/delivery.svg" className="w-20 h-20" />
                    <p className="text-2xl font-medium">
                        Deliver without drivers
                    </p>
                    <p className="text-base text-gray-900 text-center font-light">
                        No drivers? No problem! Our dashboard will connect you with local delivery drivers for a flat fee.
                        &nbsp;
                        <span
                            className="border-b-2 border-yellow-500 border-dashed hover:text-yellow-500 cursor-pointer"
                            onClick={() => setShowDeliverydModal(true)}
                        >
                            Starting at £2.60/mile
                        </span>. &nbsp;
                        
                    </p>
                    <Modal show={showDeliveryModal} size="sm" onClose={() => setShowDeliverydModal(false)}>
                        <DeliveryExplanationModal />
                    </Modal>
                </div>
            </div>
            
        </section>
    );
}