/** @format */

import "./ApearWin.scss";

export default function ApearWin(props) {
  let ApearWin = "";
  if (props.chek) {
    ApearWin = (
      <div className='ApearWin container shadow rounded '>
        <p className='ApearWin-text'>{props.title}</p>
        <input
          onInput={props.saveValueApearWin}
          className={"ApearWin-input"+props.option}
          type='text'
        />
        <button onClick={props.save} className='ApearWin-button'>
          {props.saveBtn}
        </button>
        <button onClick={props.closeApearWin} className='ApearWin-button'>
          Close
        </button>
      </div>
    );
  }
  return <>{ApearWin}</>;
}
