import { useRouter } from "next/router";

export default function DeliveryExplanationModal({ onClose }) {
    const router = useRouter();

    const handleContinue = () => {
        onClose();
        router.push("/start");
    }

    return (
        <section className="flex flex-col w-full h-full justify-center py-4 px-6 md:px-16 bg-sunshine-500">
            <div className="w-full">
                <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-yellow-900 sm:text-2xl sm:leading-10 text-center">
                    I don't have my own drivers...
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-900">
                    No worries!<br />
                    <br />
                    We use <a href="https://www.stuart.com" title="Stuart on-demand delivery">Stuart</a>'s delivery drivers if you don't have
                    your own. In some areas of high demand, we operate our own fleet of delivery drivers too. Unlike other platforms, our drivers
                    go through regular training on how to handle and deliver food. We pay them a fixed day-rate for their time.<br />
                    <br />
                    We recommend you set a minimum order value and absorb the cost of delivery, or pass it to the customer. Our platform charges
                    for delivery start at £2.50/mile and we usually cover a radius of 3 miles.
                </p>
            </div>
            
            <footer className="flex flex-col w-full mt-4">
                <div className="flex flex-col md:flex-row justify-between space-y-1 md:space-y-0 md:space-x-2">
                    <button
                        type="button"
                        className="w-full md:w-4/12 px-4 py-2 bg-transparent border-2 border-candy-500 hover:text-white hover:bg-candy-500 transition-all duration-300 font-medium focus:outline-none text-candy-500 sm:text-sm sm:leading-5"
                        onClick={onClose}
                    >
                        Got it
                    </button>
                    <button
                        type="button"
                        className="w-full md:w-8/12 px-4 py-2 bg-candy-500 border-candy-500 text-white hover:bg-candy-700"
                        onClick={handleContinue}
                    >
                        Take me to sign up
                    </button>
                </div>
            </footer>
        </section>
    );
}