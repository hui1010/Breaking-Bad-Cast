import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/UI/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/UI/Search';


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  // To make request with axios
  useEffect(() => {
    const fetchItems = async () => {
      // setIsLoading(true)
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])//Leave the dependency empty, useEffect will fire right at the beginning; if it is not empty, useEffect will fire every time the dependency changes

  return (
    <div className="container">
        <Header />
        <Search getQuery={(q) => setQuery(q)}/>
        <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
