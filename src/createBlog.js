import { useState } from "react";


const CreateBlog = () => {
  let [title,setTitle]=useState('title');
  let [body,setBody]=useState('body');
  let [author,setAuthor]=useState('');
  let [isPending,setIsPending]=useState(false);
  function handleSubmit(e){
    e.preventDefault();
    let blog={title,body,author};
    setIsPending(true);
    fetch('http://localhost:8000/blogs',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(blog),

    }).then((res)=>{
      console.log(res);
      setTitle('');
      setBody('');
      setAuthor("");
      setIsPending(false);
    
    });
  }
    return ( 
        <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input 
            type="text" 
            required 
            value={title}
            onChange={(e)=>{
             setTitle(e.target.value);
            }}
          />
          <label>Blog body:</label>
          <textarea
            required
           value={body}
           onChange={(e)=>{
            setBody(e.target.value);
           }}
          ></textarea>
          <label>Blog author:</label>
          <select
          value={author}
          onChange={(e)=>{
            setAuthor(e.target.value);
          }}
          >
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
        { !isPending && <button>Add Blog</button>}
        { isPending && <button disabled>Adding Blog..</button>}

        </form>
      </div>
     );
}
 
export default CreateBlog;