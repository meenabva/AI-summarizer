import './App.css'
import SearchBar from './components/SearchBar'
import Summary from './components/Summary'

function App() {

  return (
   <>
   <h1 class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 dark:text-white">AI Summarizer</h1>
    <SearchBar />
    <Summary />
   </>
  )
}

export default App
