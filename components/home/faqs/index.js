const faqs = [
    {
        question: "Pellentesque posuere hendrerit",
        answer: `Aenean in diam in lectus pretium suscipit id imperdiet
        nulla. Pellentesque posuere hendrerit velit, non ornare velit
        vulputate vitae. Mauris egestas erat eget massa fringilla, ac
        viverra nibh elementum. Vivamus congue fringilla lorem in blandit.
        Maecenas luctus, lectus id volutpat faucibus, quam diam tincidunt
        nunc, vel vehicula lectus libero quis nunc. Suspendisse vel odio
        tincidunt, venenatis quam eget, malesuada eros. Maecenas urna
        sapien, feugiat vitae augue ut, porta euismod odio.`
    },
    {
        question: "Pellentesque posuere hendreritie",
        answer: `Aenean in diam in lectus pretium suscipit id imperdiet
        nulla. Pellentesque posuere hendrerit velit, non ornare velit
        vulputate vitae. Mauris egestas erat eget massa fringilla, ac
        viverra nibh elementum. Vivamus congue fringilla lorem in blandit.
        Maecenas luctus, lectus id volutpat faucibus, quam diam tincidunt
        nunc, vel vehicula lectus libero quis nunc. Suspendisse vel odio
        tincidunt, venenatis quam eget, malesuada eros. Maecenas urna
        sapien, feugiat vitae augue ut, porta euismod odio.`
    },
    {
        question: "Pellentesque posueray hendrerit",
        answer: `Aenean in diam in lectus pretium suscipit id imperdiet
        nulla. Pellentesque posuere hendrerit velit, non ornare velit
        vulputate vitae. Mauris egestas erat eget massa fringilla, ac
        viverra nibh elementum. Vivamus congue fringilla lorem in blandit.
        Maecenas luctus, lectus id volutpat faucibus, quam diam tincidunt
        nunc, vel vehicula lectus libero quis nunc. Suspendisse vel odio
        tincidunt, venenatis quam eget, malesuada eros. Maecenas urna
        sapien, feugiat vitae augue ut, porta euismod odio.`
    },
];

export default function FAQs() {
    return (
        <div className="bg-eggshell-500 py-8 px-4">
            <div className="max-w-screen-md mx-auto flex flex-col space-y-5">
                <h3 className="text-2xl md:text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-center">
                    Frequently asked questions
                </h3>

                <div className="w-full">
                    {faqs.map(({ question, answer}) => (
                        <details key={question} className="p-4 focus:outline-none bg-eggshell-600 rounded-lg mb-2 font-medium">
                            <summary className="text-gray-500 focus:outline-none cursor-pointer hover:opacity-60">{question}</summary>
                            <div className="font-light p-3">{answer}</div>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
}