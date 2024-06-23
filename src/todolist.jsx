import React ,{useState} from "react";

function TodoList(){
    const [tasks , setTasks] = useState(["eat" ,"sleep" ,"repeat"])
    const [newTask , setNewTask]=useState("")

    function handleInputChange(e){
        setNewTask(e.target.value)
    }
    
     function addTask(){
        if(newTask){
        setTasks(t=>[...t , newTask])
        setNewTask("")
        }
      }

    function deleteTask(index){
        setTasks(t=>t.filter((_,i)=> i!=index))
        
    }

    function moveTaskUp(index){
        if(index>0){
            const updatedTasks =[...tasks];
            [updatedTasks[index] ,updatedTasks[index-1]] = 	[updatedTasks[index-1],updatedTasks[index]]
             setTasks(updatedTasks)

            }
    }

    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks =[...tasks];
            [updatedTasks[index] ,updatedTasks[index+1]] = 	[updatedTasks[index+1],updatedTasks[index]]
             setTasks(updatedTasks)

            }
    }

    return(
        <div className="to-do-list">
        <h1>To-Do-List</h1><hr /><br/>
        <div>
            <input type="text" placeholder="enter a task..." value={newTask} onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>Add Task</button>
            <ol>
                {tasks.map((task , index)=><li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={()=>deleteTask(index)}>🗑</button>
                    <button className="move-button" onClick={()=>moveTaskUp(index)}>☝</button>
                    <button className="move-button" onClick={()=>moveTaskDown(index)}>👇</button>

                    </li>)}
            </ol>
        </div>
        </div>

    )
}

export default TodoList