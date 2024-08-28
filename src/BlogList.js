
const BlogList = (props) => {
    let blogs=props.blogs;
    let title=props.title;
    // let handlclick=props.handlclick;
    return (
        <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((blog)=>{
         return  (
           <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written By:{blog.author}</p>
            <p>{blog.body}</p>
            {/* <button onClick={()=>{handlclick(blog.id)}} style={{backgroundColor:'#f1356d',fontSize:'16px'}} >Delete</button> */}
           </div>
          )
        })}
       </div>
    );
}
 
export default BlogList;