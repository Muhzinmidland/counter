import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';

function App() {
  return (
    <>
      <div className='d-flex flex-column align-items-center justify-content-center w-100' style={{ height: "100vh" }}>
        <div className='d-flex flex-column align-items-center justify-content-center p-5 bg-light rounded'>
          <h2 className='text-dark fw-bold'>Counter Application</h2>
          <Counter />
          
        </div> 
      </div>
      
    </>
  );
}

export default App;
