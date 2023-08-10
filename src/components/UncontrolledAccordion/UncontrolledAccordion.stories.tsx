import React, {useState} from "react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";


export default {
    title: "UncontrolledAccordion stories",
    component: UncontrolledAccordion
}

export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue={"Users"} />
}