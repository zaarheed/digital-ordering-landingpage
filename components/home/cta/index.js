import Link from "next/link";
import { useRouter } from "next/router";

export function Cta() {
    const router = useRouter();

    const scrollToDemoVideo = () => {
        const element = document.getElementById("demo-video");

        if (!element) {
            router.push("/#demo-video");
            return;
        }

        element.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
        });
    }

    return (
        <div className="bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Ready to get online?
                    <br />
                    <span className="text-candy-500 text-2xl sm:text-4xl">Create your store in 10 mins.</span>
                </h2>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center text-center">
                    <Link href="/pricing">
                        <a
                            className={`
                                shadow cursor-pointer flex items-center justify-center px-8
                                py-2 border border-transparent text-base leading-6 rounded-sm
                                text-white bg-candy-500 hover:bg-sunshine-500 hover:text-gray-900
                                focus:outline-none focus:shadow-outline transition duration-150
                                ease-in-out md:py-3 font-bold md:text-lg md:px-10
                            `}
                        >
                            See pricing
                        </a>
                    </Link>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a
                            className={`
                                w-full flex items-center justify-center px-8 py-2 border
                                border-transparent leading-6 rounded-sm text-gray-900
                                hover:bg-sunshine-500 focus:outline-none transition
                                duration-150 ease-in-out md:py-3 font-bold md:text-lg
                                md:px-10 cursor-pointer
                            `}
                            onClick={scrollToDemoVideo}
                        >
                            Watch video demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}