import "./Task.scss";

export default function Task(props) {
  return (
    <div
      className='Task shadow-lg ' data-index={props.index}
      onClick={props.selectedTask}
    >
      <div className='Task-title'>
        <h2>{props.title}</h2>
      </div>
      <p className='Task-exit none'>EXIT</p>
      <div className='Task-text'>
        <textarea 
          onChange={props.saveTextarea}
          readOnly={props.read}
          disabled={props.dis}
          value={props.defaultValue}
          name=''
          id=''
          cols='300'
          rows='100'
        ></textarea>
      </div>
    </div>
  );
}
