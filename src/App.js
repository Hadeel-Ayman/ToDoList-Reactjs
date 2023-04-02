import ErrorBoundary from "./components/ErrorBoundry";
import Home from "./pages/todoHome";

function App() {
  return (
    <ErrorBoundary>
      
      <Home />
    </ErrorBoundary>
  );
}

export default App;
