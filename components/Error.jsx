import { useRouteError } from "react-router-dom"

export default function Error(){
    const error=useRouteError();
    return(
        <div>Something Went wrong. {error.status}</div>
    )
}