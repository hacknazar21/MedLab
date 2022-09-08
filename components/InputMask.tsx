import React, { useState, useEffect, useRef } from 'react';

const InputMask = (props:any) => {
    const [card, setCard] = useState('');
    const inputCard:React.MutableRefObject<HTMLInputElement> = useRef();

    const handleChange = (event) => {
        const cardValue = inputCard.current.value
            .replace(/\D/g, '')
            .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        inputCard.current.value = !cardValue[2]
            ? cardValue[1]
            : `+${cardValue[1]}(${cardValue[2]})${`${cardValue[3] ? `-${cardValue[3]}` : ''}`}${`${cardValue[4] ? `-${cardValue[4]}` : ''}`}${`${cardValue[5] ? `-${cardValue[5]}` : ''}`}`;
        const numbers = inputCard.current.value.replace(/(\D)/g, '');
        setCard(numbers);
        props.changeHandler('phone_number', numbers)
        // cardValue[0] - Transfer to Parent ???
    };

    useEffect(() => {
        handleChange('event');
    }, [card]);

    return (
        <>
            <input {...props} ref={inputCard} onChange={handleChange} />
        </>
    );
};

export default InputMask;