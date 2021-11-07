import { useRouter } from "next/router";

export default function SelfBrandedExplanationModal({ onClose }) {
    const router = useRouter();

    const handleContinue = () => {
        onClose();
        router.push("/start");
    }

    return (
        <section className="flex flex-col w-full h-full justify-center py-4 px-6 md:px-16 bg-sunshine-500">
            <div className="w-full">
                <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-yellow-900 sm:text-2xl sm:leading-10 text-center">
                    What is a self-branded menu?
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-900">
                    We put the power in your hands.<br />
                    <br />
                    Our platform gives you a self-branded microsite and menu so your customers can order directly from you. We don't show
                    any of our own branding on your platform. We build, run and maintain it - but you sell it as if it's your own.<br />
                    <br />
                    This is important to us because unlike other platforms, we are here to make online ordering sustainable and profitable.
                    Our customers pay us for the quality of our service and refer us to their friends. We don't need to advertise.
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