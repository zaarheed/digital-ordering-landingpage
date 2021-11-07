import classNames from "classnames";

export default function Button({ title, selected, description, onClick }) {
    return (
        <button 
            className={
                classNames(
                    "box cursor-pointer focus:outline-none p-5 border-none relative rounded-lg w-full text-left outline-none box-active hover:opacity-100",
                    selected ? "bg-eggshell-400 opacity-100" : "opacity-50"
                )
            }
            onClick={() => onClick(title)}
        >
            <div className="text-lg text-gray-900 mb-2 leading-5 font-bold">
                {title}
            </div>
            <span className="text-gray-700">
                {description}
            </span>
        </button>
    );
}