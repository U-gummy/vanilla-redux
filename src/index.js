import { createStore } from "redux";

/**********************/
/* COUNTER */
/**********************/
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1
    case MINUS:
      return count - 1

    default:
      return count;
  }
}

const countStore = createStore(countModifier);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
}

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);


/**********************/
/* TODO LIST */
/**********************/
const form = document.getElementById("form");
const input = document.querySelector("#form input");
const list = document.getElementById("list");

const addToDo = (text) => {
  return { type: "ADD_TODO", text };
}

const deleteTodo = (id) => {
  return { type: "DELEATE_TODO", id };
}

const reduser = (state = [], action) => {
  console.log('action: ', action);
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { text: action.text, id: Date.now() }];
    case "DELEATE_TODO":
      return state.filter((toDo)=> toDo.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(reduser);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
}
const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(id));
}


const paintToDo = () => {
  const toDos = store.getState();
  list.innerText = '';
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.id = toDo.id;
    li.innerText = toDo.text;
    btn.innerText = 'DEL';
    list.appendChild(li);
    li.appendChild(btn);
    btn.addEventListener('click', dispatchDeleteTodo);
  })
}

store.subscribe(paintToDo);


const handleSubmit = (e) => {
  e.preventDefault();
  dispatchAddToDo(input.value);
  input.value = '';
}

form.addEventListener('submit', handleSubmit);