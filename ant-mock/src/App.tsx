import React, { useState, useEffect, FC } from "react";
import axios from "axios";

const App: FC = () => {
  const [ title, setTitle ] = useState('')
  const postData = {
    title: 'my title',
    body: 'hello man'
  }
  useEffect(() => {
    axios.post('http://jsonplaceholder.typicode.com/posts', postData)
      .then(resp => {
        
      })
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
      </header>
    </div>
  )
}

export default App;