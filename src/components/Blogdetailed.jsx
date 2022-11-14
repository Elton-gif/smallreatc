import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const Blogdetailed = () => {
    const {id} = useParams();
    return(
        <div>
            <h1>Blog Details  of id -- {id}</h1>
        </div>
    )
}

export default Blogdetailed;