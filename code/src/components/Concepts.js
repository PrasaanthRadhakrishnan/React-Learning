import './Concepts.css'
import Concept from './Concept'

const Concepts = (props) => {
    return (
        <ul id="concepts">
            <Concept items={props.items[0]}/>
            <Concept items={props.items[1]}/>
            <Concept items={props.items[2]}/>
        </ul>
    );

}

export default Concepts;