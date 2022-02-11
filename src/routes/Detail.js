import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({ toDo }) {
  const params = useParams();
  const toDoDetail = toDo.find(toDo => toDo.id === parseInt(params.id));

  return (
    <>
      <h2>{toDoDetail?.text}</h2>
      <h5>Created at : {toDoDetail?.id}</h5>
    </>

  )
}

const mapDispatchToProps = (state) => {
  return { toDo: state };
}

export default connect(mapDispatchToProps)(Detail);
