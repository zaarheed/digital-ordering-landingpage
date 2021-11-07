import BackgroundPattern from "./background-pattern";
import { SetupIcon, SellIcon, StarIcon, PhoneIcon } from "./icons";

export default function Overview() {
    return (
        <div id="overview" className="py-16 overflow-hidden lg:py-24">
            <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl text-white">
                <BackgroundPattern />
                <div className="relative">
                    <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                        We make online ordering simple
                    </h3>
                    <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
                        Our platform is <strong>better</strong>, <strong>faster</strong> and <strong>more profitable</strong> for you.
                    </p>
                </div>
                <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="relative">
                        <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:leading-9 md:pr-20">
                            Everything you need in a digital ordering service
                        </h4>
                        <ul className="mt-10">
                            <li>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-candy-500 text-sunshine-500">
                                            <PhoneIcon />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900 font-bold">
                                            Online and mobile ordering apps
                                        </h5>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Let customers order food and drink at their convenience
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="mt-10">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-candy-500 text-sunshine-500">
                                            <SetupIcon />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900 font-bold">
                                            Management dashboard
                                        </h5>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Total control over your platform. Processed orders in real-time as they're
                                            placed by customers
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="mt-10">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-candy-500 text-sunshine-500">
                                            <SellIcon />    
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900 font-bold">
                                            Order analytics and loyalty
                                        </h5>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Learn about your customers and use the insights to engage with them to
                                            drive repeat orders
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 relative lg:mt-0 z-10">
                        <video controls={false} autoPlay={true} muted={true} loop={true} playsInline={true} width="600" style={{ boxShadow: "rgba(160, 161, 188, 0.4) 0px 14px 24px 0px" }}>
                            <source src="/images/landing/dashboard.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <BackgroundPattern />
                <div className="relative mt-12 sm:mt-16 lg:mt-24">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
                        <div className="lg:col-start-2 md:pl-20">
                            <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:leading-9">
                                Who is this for?
                            </h4>
                            <ul className="mt-10">
                                <li>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sunshine-500 text-candy-500">
                                                <StarIcon />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h5 className="text-lg leading-6 font-medium text-gray-900 font-bold">
                                                Restaurants
                                            </h5>
                                            <p className="mt-2 text-base leading-6 text-gray-500">
                                                Takeaway, delivery and QR-enabled dine-in ordering all included.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-10">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sunshine-500 text-candy-500">
                                                <StarIcon />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h5 className="text-lg leading-6 font-medium text-gray-900 font-bold">
                                                Foodtrucks
                                            </h5>
                                            <p className="mt-2 text-base leading-6 text-gray-500">
                                                Let customers order ahead for collection, or use our drivers to deliver to them.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-10">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sunshine-500 text-candy-500">
                                                <StarIcon />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h5 className="text-lg leading-6 font-medium text-gray-900 font-bold">
                                                Cloud Kitchens
                                            </h5>
                                            <p className="mt-2 text-base leading-6 text-gray-500">
                                                Operate a delivery-only kitchen without the overheads of delivery drivers.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-10">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sunshine-500 text-candy-500">
                                                <StarIcon />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h5 className="text-lg leading-6 font-medium text-gray-900 font-bold">
                                                Home Kitchens
                                            </h5>
                                            <p className="mt-2 text-base leading-6 text-gray-500">
                                                Manage orders through a simple and easy-to-use dashboard with full support for pre-orders.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
                            <video controls={false} autoPlay={true} muted={true} loop={true} playsInline={true} width="600" className="mr-0 ml-auto" style={{ boxShadow: "rgba(160, 161, 188, 0.4) 0px 14px 24px 0px" }}>
                                <source src="/images/landing/storefront.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}