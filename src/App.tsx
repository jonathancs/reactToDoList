import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { TasksContextProvider } from "./contexts/TasksContexts";

function App() {

  return (
    <>
      <TasksContextProvider>
        <Header/>
        <Tasks/>
      </TasksContextProvider>
    </>
  );
}

export default App;
