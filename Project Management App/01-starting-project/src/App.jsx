import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProject from "./Components/NoProjectSelected";
import ProjectSidebar from "./Components/ProjectsSidebar";
import SelectedProjects from "./Components/SelectedProject";

function App() {
  const [projectsState , setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: []
  })

   function handleSelectProject(id){
    setProjectsState(prevState => {
    return{
      ...prevState,
      selectedProject: id,
    }
  });
   }

   function handleDelete(){
     setProjectsState(prevState => {
    return{
      ...prevState,
      selectedProject: undefined,
      projects: prevState.projects.filter((project) => project.id !== prevState.selectedProject )
    }
  });
   }

 
function handleProjectAdd(){
  setProjectsState(prevState => {
    return{
      ...prevState,
      selectedProject: null,
    }
  });
}

function handleCancel () {
    setProjectsState(prevState => {
    return{
      ...prevState,
      selectedProject: undefined,
    }
  });
}

function handleAddTask(text){
   setProjectsState(prevState =>{
    const taskId = Math.random()
    const newTask = {
     text:text,
     projectId: prevState.selectedProject,
     id: taskId
    }
    return{
      ...prevState,
      selectedProject: undefined,
      tasks: [...prevState.tasks , newTask ]
    }
  })
   
}

function handleDeleteTask(id){
    setProjectsState(prevState => {
    return{
      ...prevState,
      tasks: prevState.tasks.filter(
        (task) => task.id !== id
       )
    }
  });
}

 function hatendleAddProject(projectData){
  setProjectsState(prevState =>{
    const projectId = Math.random()
    const newProject = {
     ...projectData,
     id: projectId
    }
    return{
      ...prevState,
      selectedProject: undefined,
      projects: [...prevState.projects , newProject ]
    }
  })
 }


const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProject)
let content = <SelectedProjects project={selectedProject} onDelete={handleDelete} onAddTask= {handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks} /> ;
if(projectsState.selectedProject === null){
  content = <NewProject onCancel={handleCancel} onAdd= {hatendleAddProject}/>
}else if(projectsState.selectedProject === undefined){
  content = <NoProject onStartAdd = {handleProjectAdd}/>
}

  return (
    <main className= "h-screen my-8 flex gap-8">
     <ProjectSidebar onSelect={handleSelectProject} onStartAdd = {handleProjectAdd} projects={projectsState.projects}/>
     {content}
    </main>
  );
}

export default App;
