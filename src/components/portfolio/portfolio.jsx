import React, {useEffect, useState} from "react";
import './portfolio.css';
import axios from "axios";
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import Next from "./next";
import {Button ,Spinner}from  'react-bootstrap'
import Question from "../question";
import PortfolioList from "./portfolio-list";
import { BsArrowLeft} from 'react-icons/bs';

const Portfolio = ({index, setIndex,view , setView})=>{

    const [projects, setProject] = useState([])
    
    const [index2, setIndex2] = useState({next:1,previous:0});
    const [loading,setLoading] = useState(true);

   useEffect(() => {
        const fetchData = async () => {
        const response = await axios.get(`https://intense-brushlands-67616.herokuapp.com/api/project`);
        setProject(response.data);
        console.log(response.data);
       
       
        setIndex2(
          {
            next:1,
            previous:response.data.length -1
          }
        )
        setLoading(false)
        }
        fetchData();
      },[setProject]);
  
       
      const NextFunc = ()=>
      { if (index < projects.length -1  ){setIndex((previous)=>{
        return  previous+1
        })
      }
      
          else{
              setIndex(0)
              
//////////////////////////////////////////////
          }
          if (index2.next < projects.length -1  ){setIndex2((prev)=>{
            return {
              ...prev,
               next:prev.next+1,
        
            }
            })
          }
          else{
            setIndex2((prev)=>{
              return {
                ...prev,
                 next:0
              }
              })
           ////////////////////////////////////////////// 

        }
        if (index2.previous < projects.length -1  ){setIndex2((prev)=>{
          return {
            ...prev,
             previous:prev.previous+1,
      
          }
          })
        }
        else{
          setIndex2((prev)=>{
            return {
              ...prev,
               previous:0
            }
            })
          //////////////////////////////////////////////

      }
    }
        
        const PreviousFunc = ()=>{
            if (index > 0){setIndex((previous)=>{
                return  previous -1
                })
               
            

              }
                  else{
                      setIndex(projects.length -1)
                  
                  }
     //////////////////////////////////////////////
        if (index2.next > 0){setIndex2((prev)=>{
          return {
            ...prev,
             next:prev.next- 1
          }
          })
        }
          else{
            setIndex2((prev)=>{
              return {
                ...prev,
                 next:prev.next+2
              }
              })
          }
     
      

      
          //////////////////////////////////////////////  
            if (index2.previous > 0){setIndex2((prev)=>{
              return {
                ...prev,
                 previous:prev.previous-1
              }
              })
             
          
    
            }
            else{
              setIndex2((prev)=>{
                return {
                  ...prev,
                   previous:projects.length -1
                }
                })
                console.log(index2.next,index2.previous)
            }
             
          
                
  }

   return(
     
     <div>
     {loading? <div id="divElement"> 
   
     <Spinner animation="grow" variant="danger" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="grow" variant="info" />
  <Spinner animation="grow" variant="primary" />
  <Spinner animation="grow" variant="dark" /></div> :
  <div id="contact">

  {view? 
 
    projects.length>1?
<div>
<div  onClick={()=>{
   setView(false)
}}>
<Button variant="light"><BsArrowLeft style={{marginRight:"10px" , fontSize:"45px",verticalAlign:"middle"}}/> Project List</Button>
</div>
 <div>
<div className="image1">
  <img src={projects[index].image1} alt={projects[index].title} />
</div>
<div className="details">
  <div className="page-1">
    <h2>{projects[index].title}</h2>
    <p>{projects[index].bookmark} </p>
    <p className="bookmark-2">  {projects[index].bookmark2}</p>
   <a href={projects[index].url} target="__blank"  style={{display:"block"}}> <Button variant="secondary" className="btn">Visit Website</Button></a> 
  </div>
  <div className="page-2">
    <h2>Project Background</h2>
    <p>{projects[index].projectBackground}</p>
    <div>
    <h3>Static Preview</h3>
    <img src={projects[index].image2} alt={projects[index].title} />
    </div>
  </div>
</div>

</div>
<div className="Next">
     <Next className="previous" NextFunc={PreviousFunc} BsChevron={BsChevronLeft}  index={index2.previous} name="Previous" projects={projects} />
     <Next className="next" NextFunc={NextFunc} BsChevron={BsChevronRight}   name="Next" index={index2.next} projects={projects} />
     

  </div> 
  <Question message="Interested in doing a project together?" name="contact me" link="/Contact" />      
</div>
     :"" :
     <PortfolioList projects={projects} setIndex={setIndex}  setView={setView}  />
}

  </div>
     }
     </div>

   )
}
export default Portfolio

