import "./styles.css"

function App() {
  return (
    <div className="calculator-grid">
      <div className='output'>
        <div className="previous-operation"></div> 
        <div className="curr-operation"></div>
      </div>

      <button className="spanTwo"> AC</button>
      <button> DEL </button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>/</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="spanTwo">=</button>
    </div>
  );
}

export default App;
