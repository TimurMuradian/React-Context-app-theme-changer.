import ThemeProvider from './context/Theme/ThemeProvider';
import SwitchTheme from './components/SwitchTheme';
import TodoList from "./components/TodoList";

function App() {

  return (
    <ThemeProvider>
    <SwitchTheme/>
    <TodoList />
    </ThemeProvider>
  )
}

export default App;
