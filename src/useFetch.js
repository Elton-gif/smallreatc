import { useState,useEffect} from "react";

const useFetch = (url) => {
     var [allblogs,newBlogs] = useState(null);
        var [pending,done] = useState(true);
        var [error,setError] = useState(null);
      

    useEffect(()=>{
        const abortCont = new AbortController();
        setTimeout(()=>{
          
          fetch(url)
         .then((res)=>{
          console.log(res);
          if (res.ok) {
            return res.json();
            
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data=>{
            console.log(data,'my data');
            newBlogs(data);
          done(false);
        })
        .catch((error)=>{
            if (error.name === 'AbortError') {
              console.log('fetch aborted');
            }else {
                done(true);
                setError(error.message);
            
            }
         
        })
        
        },2000)
       
       console.log('use effect ran');
       return ()=>{
        abortCont.abort();
       console.log('clean up function we use abort controller')}
       
      },[url])

      return {allblogs,pending,error}
}

export default useFetch;