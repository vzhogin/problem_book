import "./Nav.scss";

export default function Nav(props){

    let bg=''
    return (
      <div className='Nav-projects'>
        {props.nameProjects.map((elem, i) => {
          if(props.currentProject === i){
            bg='bgColor'
          }else{
            bg=''
          }
          return (
            <div
              key={i}
              className={'Nav-projects-project '+bg} 
              onClick={props.switchProject.bind(this, i)}
            >
              {elem}
            </div>
          );
        })}

        <i
          onClick={props.clickAddProj}
          className='Nav-projects-btnAdd fa fa-plus-square'
          aria-hidden='true'
        ></i>
      </div>
    );
  }
