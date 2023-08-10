import React, {ChangeEvent, useRef, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {action} from "@storybook/addon-actions";

export default {
    title: "input"
}

export const UncontrolledInput = () => <input/>

export const ControlledInputWithFixedValue = () => <input value={"slice of code"}/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return <>
        <input onChange={onChange}/> - {value}
    </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef} id={"inputId"}/>
        <button onClick={save}> save</button>
        actual value: {value}</>
}
