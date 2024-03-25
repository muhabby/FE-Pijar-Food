import { useState, useEffect } from 'react'
import './App.css'
import Header from './component/Header'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState("Hallo")
  const [data, setData] = useState([])
  const [error, setError] = useState("")

  const changeTitle = () => {
    setTitle("Halo from button function")
  }
  const Reset = () => {
    setTitle("Hallo")
    setCount(0)
    setError("")
    setData([])
  }

  useEffect(() => {
    console.log("use effect")
    getUser()
  }, [])
  
  useEffect(() => {
    console.log("data change")
    console.log(data)
  }, [data])
  
  useEffect(() => {
    getUser()
  },[count])

  async function getUser() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/${count ? count : ""}`)
      setError("")
      setData(response.data)
      setData(count ? [response.data] : response.data)
    }
    catch(error) {
      console.error(error);
    }
  }

  return (
    <>
      <Header name={title} count={count}/>
      <h1>{title}</h1>
      <div style={{ backgroundColor: "red", display:"flex", flexDirection:"row", padding:"50px", gap:"50px" }}>
        <button onClick={() => setCount((count) => count + 1)}>
          User Number {count}
        </button>
        <button onClick={() => setTitle("Hallo from button")}>
          Change Title
        </button>
        <button onClick={changeTitle}>
          Change Title With Function
        </button>
        <button onClick={Reset}>
          Reset
        </button>
      </div>

      {!count ?
        // Show all users
        <div className="" style={{ backgroundColor: "skyblue", padding: "50px", display: "flex", flexDirection: "column", marginTop: "50px", justifyContent: 'center', alignItems: 'center' }}>
          {data.length ? data.map((item, index) => {
            return (
              <div key={index} className="">
                <h5 style={{color:'red'}}>{item.name}</h5>
              </div>
            )
          }) : null}
        
          {error ? <p style={{ backgroundColor: "red", color: "white", borderStyle: "solid", borderRadius: "10px", borderWidth: "2px", alignItems: 'center', display: 'flex', justifyContent: 'center', padding: "10px 20px" }}>{error}</p> : null}
        </div>
        :
        // Show detail users 
        <div className="" style={{ backgroundColor: "skyblue", padding: "50px", display: "flex", flexDirection: "column", marginTop: "50px", justifyContent: 'center', alignItems: 'center' }}>
          <div className="">
            <h5 style={{color:'red'}}>{data[0].name}</h5>
          </div>
        
          {error ? <p style={{ backgroundColor: "red", color: "white", borderStyle: "solid", borderRadius: "10px", borderWidth: "2px", alignItems: 'center', display: 'flex', justifyContent: 'center', padding: "10px 20px" }}>{error}</p> : null}
        </div>
      }
    </>
  )
}

export default App
