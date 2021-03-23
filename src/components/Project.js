import React , {useState,useEffect} from 'react'
import {projects} from '../data/Projects'
export default function Project() {
const [Filter, setFilter] = useState(''); 
const [data, setdata] = useState(projects)
const filter = data.filter((item)=>item.category === Filter);


    return (
        
        <section className="panel b-red" id="3">
          <article className="panel__wrapper">
            <div className="panel__content">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <div className="projects-content">
                      <div className="heading">
                        <h4>Recent Projects</h4>
                        <select className="select" value={Filter} onChange={(e)=>setFilter(e.target.value)}>
                          <option selected disabled>Chọn Giá Trị</option>
                          <option value="reactjs">REACT JS</option>
                          <option value="php">PHP</option>
                          <option value="javascript">Javascript & JQUERY</option>
                          <option value="html">HTML & CSS</option>
                        </select>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="owl-carousel owl-theme projects-container">
                           {projects.map((project)=>{
                             return (
                              <div key={project.id}>
                              <div className="project-item">
                                <a href={project.img} data-lightbox="image-1"><img src={project.img} alt="App tour"/></a>
                                <div className="text-content">
                                  <h4>{project.title}</h4>
                                  <p>{project.content}</p>
                                  <div className="primary-button">
                                    <a href={project.link}>Discover More</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                             )
                           })}
                            
                            <div>
                            
              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
    )
}
