import './Home.css';

type 

const Greeting = ( props : GreetingProps ) => {
    return (
        <div>
            <h1> Hello, {props.name}</h1>
        </div>
    )
}

export default function Home() {
    return (
        <Greeting name="world"/>
    )
}