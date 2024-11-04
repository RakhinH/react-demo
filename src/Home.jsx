import BlogPreview from "./components/BlogPreview";
import useFetch from "./hooks/useFetch";

const Home = ({data, isError, isPending, handleDelete}) => { 

    

    return ( 
        <div className="content p-2">

            {isPending && (
            <div className="flex">
                <p>Loading</p>
                <p className="animate-bounce-1">.</p>
                <p className="animate-bounce-2">.</p>
                <p className="animate-bounce-3">.</p>
            </div>
            )}

            {data && data.map((p) => (
                <BlogPreview lesson={p} key={p.id} handleDelete={handleDelete}/>
            ))
            }

            {isError && <p>Soemthing went wrong</p>}

        </div>
     );
};
 
export default Home;