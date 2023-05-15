import { useContext, useEffect, useState } from 'react';
import './styles.css'
import { ThemeContext } from '../../App';

//hooks:
//useState
//useReducer -> complex state

const Search = (props) => {
 console.log(props);
 const {theme} = useContext(ThemeContext)
 const {getDataFromSearchComponent, apiCalledSuccess, setApiCalledSuccess} = props;

   const [inputValue, setInputValue] = useState('') //initial value

   const handleInputvalue = (event)=>{
    const {value} = event.target;
    //set the updated state
    setInputValue(value)
   }

   console.log(inputValue);
   
   const  handleSubmit = (event) => {
   event.preventDefault()
   getDataFromSearchComponent(inputValue)
   }

   useEffect(()=>{

   if(apiCalledSuccess){
    setInputValue('')
    setApiCalledSuccess(false)
   }
   },[apiCalledSuccess, setApiCalledSuccess])

    return (
        <form onSubmit={handleSubmit} className="Search">
            <input name="Search" onChange={handleInputvalue} value={inputValue} placeholder="Search Recipes" id="Search"/>
            <button style={theme ? {backgroundColor : "#12343b"} : {}} type="submit">Search</button>
        </form>

    );
};
export default Search;