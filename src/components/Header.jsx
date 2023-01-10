import {useState} from "react"

const Header = ({list, setProducts}) => {
    const [searchText, setSearchText] = useState("")
    const search = () => {
        console.log("searching...", searchText)
        const newList = list.filter( item => item.title === searchText)
        setProducts(newList)
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