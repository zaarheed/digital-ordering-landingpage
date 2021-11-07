import Link from "next/link";
import Feature from "./feature";
import features from "./features-list";

export default function Features() {
    return (
        <section id="features" className="max-w-screen-lg flex flex-col mx-auto space-y-4 px-4">
            <h3 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-center md:text-left">
                Included Features
            </h3>

            <p className="text-gray-600 text-center md:text-left">
                We give you everything you need to start taking orders online. When you're ready to go further
                you can&nbsp;
                <Link href="/pricing">
                    <a
                        className="border-b-2 border-yellow-500 border-dashed hover:text-yellow-500 cursor-pointer"
                    >
                        purchase additional add-ons
                    </a>
                </Link>
                &nbsp;for fixed weekly fees.
            </p>

            <div className="flex flex-row space-x-5">
                <ul className="md:grid md:grid-cols-3 gap-6">
                    {features.map(f => <Feature key={f.title} title={f.title} icon={f.icon} />)}
                </ul>
            </div>
        </section>
    );
}