import {useState, useRef, useEffect} from 'react'

function UseRefComponent() {
  const [isAdded, setisAdded] = useState("");
  const [showText, setShowText] = useState([])
 

  const TextValue = (e) => {
    setisAdded(e.target.value);
  };
  const fruitValue = (e) => {
    if (e.key === "Enter" && isAdded !== "") {
      setShowText([...showText, isAdded]);
      setisAdded("");
    }
  }
  
  const RemoveComponent = (index) => {
    setShowText(showText.filter((_, i) => i !== index));;
  };
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus()
    
  }, []);
  return (
    <div>
  
        <h1>{isAdded}</h1>
      <input
        type="text"
        value={isAdded}
        ref={inputRef}
        onChange={TextValue}
        onKeyDown={fruitValue}
      />
      {isAdded === "" && <p>No text added</p>}
    
      
      <h1>List of Fruits</h1>
      {showText !== "" && (<ul>
        {showText.map((value,index)=>(
        <li>
          <p>{value}</p>
          <button onClick={()=>RemoveComponent(index)}>Remove</button>
        </li>
        ))}
        
      </ul>)}
    </div>
  );
}

export default UseRefComponent
