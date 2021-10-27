import React from 'react';


const getInitialState = () => {
    try {
        const state = localStorage.getItem('appData');
        return state ? JSON.parse(state) : {}
    } catch (e) {
        return  {}
    }
}

const useLocalState = () => {
    const  [storedValue, setStoredValue] = React.useState(() => getInitialState());

    const setValue = (value) => {
        try {
            localStorage.setItem('appData', JSON.stringify(value));
            setStoredValue(value);
        } catch (e) {
            console.log(e)
        }
    }

    return [storedValue, setValue];
}

export default useLocalState;