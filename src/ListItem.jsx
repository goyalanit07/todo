import React from 'react';

export default function ListItem(props) {
  return <div>
    <li>{props.item} <button
      onClick={() => { props.delFn(props.id) }}
      className='delbutton' >Del</button> </li>
  </div>;
}
