import "./App.css";
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button name="primary" />
        <Button name="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert name="error"/>
        <Alert name="warning"/>
        <Alert name="info"/>
        <Alert name="success"/>
      </div>
    </div>
  );
}

export default App;
