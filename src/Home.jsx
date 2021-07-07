import "./index.css";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  const {data:blogs,isPending,error} = useFetch("http://localhost:8000/blogs")
  
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((item) => item.id !== id);
  //   setblogs(newBlogs);
  // };

  
  return (
    <>
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        {/* <BlogList blogs={blogs.filter((blog)=>blog.author=="mario")} title="Mario Blogs"/> */}
      </div>
    </>
  );
};

export default Home;
