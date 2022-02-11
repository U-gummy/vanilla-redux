import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import ToDo from './ToDo'


function Home({ toDos, addToDo }) {
  const [text, setText] = useState('');

  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setText('');
    addToDo(text);
  }
  return (
    <>
      <h1>Home</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
      </form>
      <ul>
        {toDos.map((toDo) => {
          console.log('toDo: ', toDo);
          return <ToDo {...toDo} key={toDo.id} />
        })}
      </ul>
    </>
  )
}
const mapStateToProps = (state) => {
  return { toDos: state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
