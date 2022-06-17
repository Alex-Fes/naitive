import React, {ChangeEvent, MouseEvent} from "react";


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name)
    }
    const addUser = () => {
        console.log('add')
    }
    const onNameChanged = () => {
        console.log('name changed')
    }
    const onLostFocus = () => {
        console.log('lost focus')
    }
    const changeAge = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('change age' + event.currentTarget.value)
    }

    return <div><textarea onChange={onNameChanged} onBlur={onLostFocus}>  Fesenich </textarea>
        <input type="number" name="age" id="" onChange={changeAge}/>
    <button name='delete' onClick={deleteUser}>Delete</button>
    <button onClick={addUser}>Add</button>
    </div>
};

