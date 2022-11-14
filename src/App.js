import { useState,useEffect } from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './components/mainpage/Navbar';
import useFetch from './useFetch';
import Home from './components/mainpage/Home';
import Blogdetailed from './components/Blogdetailed';
import Form from './Form';
import './App.css';

function App() {
// const {allblogs,pending,error} = useFetch('http://localhost:8000/blogs');


// this 0useState is for triggering the useEffect function


// const handleDelete=(id)=>{
//   // alert(id);
//   var getIndex =0;
//   allblogs.forEach((blog)=>
//   {
//     if(blog.id == id){
//      getIndex = allblogs.indexOf(blog);
//      allblogs.splice(getIndex,1);
//     }
//   }
//   );
//   console.log(...allblogs,"remaining blogs");
//   newBlogs([...allblogs]);

// }
return(
  <Router>
  <div className="App">
  <Navbar/>
  <Switch>
  <Route exact path="/">
  <Home/>
  </Route>
  <Route exact path="/form">
  <Form/>
  </Route>
  <Route exact path="/details/:id">
  <Blogdetailed/>
  </Route>
  </Switch>
  </div>
  </Router>
)
  // return (
  //   <>
  //   <Navbar />
  //   {error&&<div>{error}</div>}
  //  {pending && <h1>Loading ...</h1>}
  //  {allblogs && <Blogdetails allblogs={allblogs} /*handleDelete={handleDelete}*/ />} 
  //   </>
  // );
}

export default App;
