import React,{useState} from 'react';
import ListItem from './ListItem';

export default function App() {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);

    const onChangeFn=(e)=>{
        setText(e.target.value)
    }
    const onClickFn=()=>{
        setList([...list,text]);
        setText('')
    }
    const deleteFn=(id)=>{
        setList((olditem)=>{
            return(
                olditem.filter((arrEl,index)=>{
                    return index!==id;
                })
            )
        })
    }
    
    
  return <div className='cont'>
      <h2 >ToDo List</h2>
      <input type='text' value={text} placeholder='Enter item' onChange={onChangeFn} ></input>
      <button className='addbutton' onClick={onClickFn}>Add</button>

      {list.map((item,index)=>{
          return <ListItem key={index} id={index} item={item} delFn={deleteFn} />
      })}

  </div>;
}
