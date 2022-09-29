import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const notify = () => {
        toast("Congratulations! Your Exercise Completed.");
    };
    return (
        <div>
            <Header></Header>
            <Main notify={notify}></Main>
        </div>
    );
}

export default App;
