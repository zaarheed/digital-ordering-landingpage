export default function Calculator({ onOrdersChange, onCommissionChange, onValueChange, onComplete }) {
    return (
        <form className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">


            <div className="relative">
                <label htmlFor="email" className="text-gray-700 text-xs text-center w-full">
                    Orders per week
                </label>
                <input
                    type="number"
                    className={`rounded-lg border-transparent flex-1 appearance-none border
                                border-gray-300 w-full py-2 px-4 bg-white text-gray-700
                                placeholder-gray-400 shadow-sm text-base focus:outline-none`}
                    name="orders"
                    placeholder="150"
                    onChange={({ target }) => onOrdersChange(+target.value)}
                    onBlur={onComplete}
                />
            </div>

            <div className="relative">
                <label htmlFor="email" className="text-gray-700 text-xs">
                    Avg. order value
                </label>
                <div className="flex relative">
                    <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                        £
                    </span>
                    <input
                        type="number"
                        className={`rounded-r-lg flex-1 appearance-none border border-gray-300
                                w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400
                                shadow-sm text-base focus:outline-none`}
                        name="commission"
                        placeholder="18"
                        onChange={({ target }) => onValueChange(+target.value)}
                        onBlur={onComplete}
                    />
                </div>
            </div>

            <div className="relative">
                <label htmlFor="commission" className="text-gray-700 text-xs">
                    Commission per order
                </label>
                <div className="flex relative">
                    <input
                        type="number"
                        className={`rounded-l-lg flex-1 appearance-none border border-gray-300
                                w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400
                                shadow-sm text-base focus:outline-none text-right`}
                        name="commission"
                        placeholder="28"
                        onChange={({ target }) => onCommissionChange(+target.value)}
                        onBlur={onComplete}
                        min="3"
                        max="100"
                    />
                    <span className="rounded-r-md inline-flex items-center px-3 bg-white border-t border-r border-b border-gray-300 text-gray-500 shadow-sm text-sm z-1">
                        %
                    </span>
                </div>
                
            </div>


        </form>
    );
}