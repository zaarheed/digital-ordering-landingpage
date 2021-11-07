export default function Why() {
    return (
        <section
            className="w-full max-w-5xl mx-auto px-4 flex flex-col-reverse space-y-4 space-y-reverse lg:space-y-0 lg:flex-row lg:space-x-4"
        >
            <div
                className="w-full lg:w-6/12"
            >
                <img
                    src="/images/landing/deliveroo-invoice.jpg" className="w-full"
                    title="Deliveroo invoice showing commission fees charged"
                    alt="Deliveroo invoice showing commission fees charged"
                />
            </div>
            <div
                className="w-full lg:w-6/12 flex flex-col space-y-3"
            >
                <p className="font-extrabold text-3xl sm:text-4xl w-full">
                    Why is this important?
                </p>
                <p className="font-normal text-gray-700">
                    Our friends over at&nbsp;
                    <a
                        href="https://www.the-olivegrove.co.uk"
                        target="_blank"
                        className="border-b-2 border-yellow-500 border-dashed hover:text-yellow-500 cursor-pointer"
                    >
                        The Olive Grove
                    </a>
                    &nbsp;said it best.
                </p>
                <p className="font-normal text-gray-700">
                    All food delivery apps have shady practises that aim to replace
                    your restaurant business with their own platforms.
                </p>
                <p className="font-normal text-gray-700">
                    Even when fees are advertised at 30%, that's only half the story.
                    This Deliveroo invoice shows total revenue from orders was £6,100
                    yet the restaurant that put in all the hard work received only £2,800!
                </p>
                <p className="font-normal text-gray-700">
                    We recommend restaurants set up their own website and digital menu to take
                    orders. This allows you to engage with customers, build relationships and
                    drive repeat orders - all with ZERO commission fees.
                </p>
                <p className="font-normal text-gray-700">
                    Check out out&nbsp;
                    <a
                        href="https://www.instagram.com/p/CNSlbFvDT2y"
                        className="border-b-2 border-yellow-500 border-dashed hover:text-yellow-500 cursor-pointer"
                    >
                        their Instagram post
                    </a>
                    &nbsp;and see for yourself!
                </p>
            </div>
        </section>
    );
}