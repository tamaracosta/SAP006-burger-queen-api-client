import React from 'react';
import * as S from './InputStyle';

const Input = ({label, id, ...props}) => {

    return (
        <S.Container>
            <S.Label htmlFor={id}>{label}</S.Label>
            <S.InputStyle id={id} {...props}/>
        </S.Container>
    )
}

export default Input
