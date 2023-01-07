import {useState} from "react"

const Header = () => {
    const [searchText, setSearchText] = useState("")
    const search = () => {
        console.log("searching...")
    }
    return (
        <>
        <input
          value={searchText}
          onChange={(e)=> setSearchText(e.target.value)}
          placeholder="enter your search..."
        />
        <button
          onClick={search}
          >Search</button>
        </>
    )
}
export {Header}