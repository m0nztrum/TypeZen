import { useEffect, useState } from 'react';

const MAX_TEST_WORDS = 20;
export const useWordList = (words: string[], count = MAX_TEST_WORDS) => {
    const [wordList, setWordList] = useState<string[]>([]);

    useEffect(() => {
        const getWords = () => {
            const selectedWords = words.slice(0, Math.min(count, words.length));
            setWordList(selectedWords);
        };

        getWords();
    }, [words, count]);

    return wordList;
};
