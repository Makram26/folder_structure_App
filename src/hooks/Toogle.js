import { useState } from 'react';

const useToggle = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [toggle, setToggle] = useState(false);
    const toogleTrue = () => {
        setIsLoading(true);
    };

    const toggleFalse = () => {
        setIsLoading(false);
    };
    const togglePrevious = () => {
        setToggle((prev) => !prev);
    };

    return {
        isLoading,
        toogleTrue,
        toggleFalse,
        togglePrevious,
        toggle,
    };
};

export default useToggle;
