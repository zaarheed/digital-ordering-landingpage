import SignupForm from "./signup-form";

export default function Hero() {
    return (
        <div className="flex flex-col justify-center bg-royal-500 overflow-hidden py-20">
            <div className="max-w-screen-xl w-full mx-auto flex flex-col md:flex-row items-center">
                <div className="relative z-10 w-full md:w-7/12">
                    <div className="mx-auto max-w-screen-xl w-full px-4 sm:px-6 lg:px-8 text-center">
                        <div className="text-center sm:text-left flex flex-col space-y-5">
                            <h2 className="font-extrabold text-white text-4xl sm:text-5xl md:text-4xl lg:text-6xl">
                                Take online orders.<br />
                                <span className="text-white">Zero commission.</span>
                            </h2>

                            <p className="text-white font-light text-lg">
                                With <span className="underline">your own</span> website, mobile app and digital menu
                            </p>

                            <div className="sm:flex">
                                <div className="w-full max-w-lg flex flex-col">
                                    <SignupForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-5/12 p-6 hidden lg:flex">
                    <img src="/images/landing/hero.svg" alt="Screens" className="w-full object-contain z-10 mx-auto" />
                </div>
            </div>
        </div>
    )
}