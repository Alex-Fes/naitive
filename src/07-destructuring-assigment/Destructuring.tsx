import React from 'react';
import {ManType} from "./destructuring.test";




type PropsType ={
    title: string
    man: ManType
}

export const ManComponent: React.FC<PropsType> = ({title, man}) => {
    // const {title, man:{name}} = props;
    return( <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
    </div>)
}