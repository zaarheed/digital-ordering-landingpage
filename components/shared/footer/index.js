import Link from "next/link";

const links = [
    {
        id: "home",
        title: "Home",
        link: "/"
    },
    {
        id: "about",
        title: "Our Story",
        link: "/story"
    },
    {
        id: "pricing",
        title: "Pricing",
        link: "/pricing"
    },
    {
        id: "contact",
        title: "Contact",
        link: "/contact"
    }
];

const builtFor = [
    {
        id: "restaurants",
        title: "Restaurants",
        link: "restaurants"
    },
    {
        id: "bakeries-cafes",
        title: "Bakeries & Cafes",
        link: "bakeries-cafes"
    },
    {
        id: "convenience-stores-petrol-stations",
        title: "Convenience Stores & Petrol Stations",
        link: "convenience-stores-petrol-stations"
    },
    {
        id: "festivals",
        title: "Festivals",
        link: "festivals"
    },
    {
        id: "associations",
        title: "Associations",
        link: "associations"
    },
    {
        id: "corporate-caterers",
        title: "Corporate Caterers",
        link: "corporate-caterers"
    },
    {
        id: "food-halls",
        title: "Food Halls",
        link: "food-halls"
    },
    {
        id: "live-event-venue-stadiums-arenas",
        title: "Live Events, Venues, Stadiums & Arenas",
        link: "live-event-venue-stadiums-arenas"
    },
    {
        id: "aggregators",
        title: "Local Aggregators",
        link: "aggregators"
    },
    {
        id: "malls",
        title: "Shopping Malls",
        link: "malls"
    },
    {
        id: "theatres-events-shows",
        title: "Theatres, Events & Shows",
        link: "theatres-events-shows"
    }
];

export default function Footer() {
    return (
        <footer
            className="bg-eggshell-500 py-6 text-gray-600 w-full flex flex-col px-4"
        >
            <div className="flex flex-col w-full max-w-5xl mx-auto space-y-6">
                <div className="w-full flex flex-row space-x-4 text-md">
                    <div className="w-6/12 lg:w-4/12 flex flex-col lg:space-y-2 font-light">
                        <p className="uppercase font-semibold text-sm text-gray-400">
                            Digital Ordering
                        </p>
                        <ul className="">
                            {links.map(({ id, link, title }) => (
                                <li key={id} className="">
                                    <Link href={link}>
                                        <a
                                            title={title}
                                            className="hover:underline cursor-pointer"
                                        >
                                            {title}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-6/12 lg:w-4/12 flex flex-col lg:space-y-2 font-light">
                        <p className="uppercase font-semibold text-sm text-gray-400">
                            More Links
                        </p>
                        <ul className="">
                            {builtFor.filter((e, i) => i < 4).map(({ id, link, title }) => (
                                <li key={id} className="">
                                    <Link href={`/${link}`}>
                                        <a
                                            title={`See how Digital Ordering is being used at ${title}`}
                                            className="hover:underline cursor-pointer"
                                        >
                                            {title}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between container mx-auto text-sm">
                    <Link href="/">
                        <div className="bg-royal-500" style={{ width: 97, height: 30 }} />
                    </Link>
                    <div className="pr-4">
                        <span className="">© {(new Date()).getFullYear()} Digital Ordering</span>
                        &nbsp;•&nbsp;
                        <Link href="/">
                            <a className="hover:text-royal-500" >Terms &amp; Privacy Policy</a>
                        </Link>
                        &nbsp;•&nbsp;
                        <Link href="/contact">
                            <a className="hover:text-royal-500">Contact</a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}