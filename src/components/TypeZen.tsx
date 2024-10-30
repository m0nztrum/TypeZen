import { wordsList } from '../words';
import { useWordList } from '../hooks';

export const TypeZen = () => {
    const wordList = useWordList(wordsList, 15);
    return (
        <div className="mt-32 flex flex-col items-center justify-center p-5 text-sky-50">
            <div>
                <h1 className="mb-3 text-3xl">TIMER</h1>
                <p>01</p>

                <div className="mt-5 bg-gray-700 p-4 text-xl font-semibold text-sky-200">
                    {wordList.map((word) => (
                        <span key={word} className="mr-2">
                            {word}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
