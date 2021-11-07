export default function Feature({ title, icon }) {
    return (
        <li className="mt-6 lg:mt-0">
            <div className="flex">
                {icon}
                <span className="ml-4 text-base leading-6 font-medium text-gray-800 dark:text-gray-200">
                    {title}
                </span>
            </div>
        </li>
    );
}