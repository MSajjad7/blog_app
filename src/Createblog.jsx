import { useState } from "react";
import { useHistory } from "react-router-dom";

const Createblog = () => {
  const [title, setTitle] = useState("");
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title,body,author};
        setIsPending(true)
        fetch("http://localhost:8000/blogs",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        })
        .then(()=>{
            console.log("new Blog Added")
            setIsPending(false)
            // history.go(-1)  this way to go back the last page
            history.push('/')
        })

    }

    return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type="text" value={title} required onChange={e=>{
            setTitle(e.target.value)
        }}/>
        <label>Blog body:</label>
        <textarea value={body} required onChange={e=>{
            setBody(e.target.value)
        }}></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={e=>setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
        
      </form>
    </div>
  );
};

export default Createblog;
