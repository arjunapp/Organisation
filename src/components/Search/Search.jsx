import './Search.css'

/* 
    The search component.
*/
const Search = ({searchValue, handleChange})=>{ 
    return (
            <input type="text" placeholder="Search" 
            className='search' aria-label="Search"
            value={searchValue} onChange={(e)=>handleChange(e.target.value)}/>
    )
}
export default Search;