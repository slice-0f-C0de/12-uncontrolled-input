import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={"App"}>
            <Rating value={ratingValue} onClick={setRatingValue} />
            <UncontrolledRating onChange={() => {}}/>
            <Accordion titleValue={"Users"}
                       collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}} />
            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
        </div>
    );
}

type TitlePropsType = {
    title: string
}

function Title(props: TitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
