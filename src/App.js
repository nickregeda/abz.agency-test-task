import './App.css';
import MainPageContainer from "./components/MainPage/MainPageContainer";
import {useEffect} from "react";

function App(props) {
    // useEffect(() => {
    //     props.getToken()
    // }, [])
    return (
        <MainPageContainer/>
    );
}

export default App;
