import { useHistory } from "react-router-dom";

function Button(){
    let History=useHistory();

    function handleClick(){{
        History.push("/Login")}
    }
    History.push("/Loggedout");
    return(
        <button type="button" onClick={handleClick}>
            Submit
        </button>
    )
}
export default Button