import Link from "next/link";

const includedFeatures = [
  "Fully customized, mobile-responsive website with homepage, menu and checkout",
  "Instant payouts to your Stripe account",
  "Full control over your menu and customer data through an Admin Dashboard",
  "Offer collection & delivery",
  "Integrate with your existing website, Instagram or Facebook page",
];

export default function Pricing() {
    return (
        <>
          <div className="bg-royal-500">
            <div className="mt-8 bg-white pb-8 sm:mt-12 sm:pb-10 lg:pb-14">
              <div className="relative">
                <div className="absolute inset-0 h-1/2 bg-royal-500"></div>
                <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                    <div className="bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12">
                      <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">
                        Pricing that's profitable for you
                      </h3>
                      <p className="mt-3 text-base leading-6 text-gray-500">
                          We charge zero commission on every order, and the money is available in your account immediately.
                          Keep all of your margin and take ownership of your customer relationships.
                    </p>
                      <div className="mt-8">
                        <div className="flex items-center">
                          <h4 className="flex-shrink-0 pr-4 text-sm leading-5 tracking-wider font-semibold uppercase text-royal-500">
                            What's included
                          </h4>
                          <div className="flex-1 border-t-2 border-gray-200"></div>
                        </div>
                        <ul className="mt-8 grid grid-cols-1 gap-y-3">
                          {includedFeatures.map(feature => (
                            <li key={feature} className="flex flex-row space-x-3 items-start lg:col-span-1">
                              <div className="flex-shrink-0">
                                <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-5 text-green-400"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                              </div>
                              <p className="text-sm leading-5 text-gray-700">
                                {feature}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                      <p className="text-base font-normal text-gray-600">
                        Start for free, then
                      </p>
                      <div className="mt-2 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900">
                        £15/week
                      </div>
                      <div className="mt-6">
                        <div className="rounded-md shadow">
                          <Link href="/pricing">
                            <a
                              className={`
                                w-full cursor-pointer flex items-center justify-center px-8 py-2
                                border border-transparent text-base leading-6 rounded-sm
                                text-white bg-candy-500 hover:bg-sunshine-500 hover:text-gray-900
                                focus:outline-none focus:shadow-outline transition duration-150
                                ease-in-out md:py-3 font-bold md:text-lg md:px-10
                              `}
                            >
                              Create your store
                            </a>
                          </Link>
                        </div>
                      </div>
                      <Link href="/pricing">
                        <a className="mt-2 text-sm font-light text-gray-500 hover:text-gray-700 underline cursor-pointer">
                          See all pricing options
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}