
function Blogdetails({allblogs,handleDelete}) {
    console.log(allblogs);
    var mapeach = allblogs.map((blog)=>{
        return(
            <div style={blogPreview} className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <button className={blog.id} onClick={(e)=>{
                    handleDelete(e.target.className)
                }} style={buttons}> Delete </button>
            </div>
        )
    })



    // renders the component
return(
    <div style={blogStyle}>
    {mapeach}
    </div>
)

}

//  styles

const blogStyle = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    with:'100%',

}

const blogPreview = {
    with:'40vh',
    padding:'10px',
    borderBottom:'1px solid black',
}
const buttons = {
    padding:'10px',
    outline:'none',
    border:'none',
    borderColor:'transparent',
    background:'#ff0041',
    borderRadius:'5px',
    cursor:'pointer',
    color:'white',
}
export default Blogdetails;