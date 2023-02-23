import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
    return (
        <div>
            <h1>My Todos</h1>
            
            <Todo text='Learn with React 1' />
            <Todo text='Learn with React 2' />

            <Modal />
            <Backdrop />
        </div>
    );
}

export default App;
