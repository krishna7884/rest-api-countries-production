import { useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
// import { useOutletContext } from 'react-router-dom'
// import { ThemeContext } from '../contexts/ThemeContext'
import useWindowSize from '../hooks/useWindowSize'
import { useTheme } from '../hooks/useTheme'

export default function Home() {
  const [query, setQuery] = useState('')
  //const isDark=useOutletContext();
  // const [isDark]=useContext(ThemeContext)--alternative is below
  const[isDark]=useTheme();
  // console.log(useWindowSize());
  return (
    <main className={`${isDark?'dark':''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery}/>
      </div>
       <CountriesList query={query} />
    </main>
  )
}