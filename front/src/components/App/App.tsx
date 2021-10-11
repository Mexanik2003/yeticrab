import './App.css';
import Tasks from "../Tasks/Tasks";
import {useState} from "react";
import NavPanel from "../NavPanel/NavPanel";

function App() {
    const [adminFlag, setAdmin] = useState(false)

    function setAdminFlag() {
        setAdmin(!adminFlag);
    }

    return (
    <div>
        <header>
            <NavPanel
                setAdminFlag={setAdminFlag}
                adminFlag={adminFlag}
            />
        </header>
        <main>
            <Tasks
                adminFlag={adminFlag}
            />
        </main>

    </div>
  );
}

export default App;
