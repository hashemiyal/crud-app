
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    let {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
     
    return ( 
        <div className="home">
         {error && <span>{error}</span>}<br></br>
         {isPending && <span>Loading....</span>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
    
        </div>
     );

}
 
export default Home;