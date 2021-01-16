import "./Project.scss";
import Task from "../Task/Task";

export default function Project(props) {
  let project = props.projects[props.currentProject];
  console.log(props.projects)
  return (
    <div className='Project'>
      {project.tasks.map((elem, index) => {
        console.log(elem.text);
        return (
          <Task
            key={index}
            title={elem.title}
            defaultValue={elem.text}
            selectedTask={props.selectedTask}
            index={index}
            read={true}
            dis={true}
            saveTextarea={props.saveTextarea}
          />
        );
      })}
    </div>
  );
}
