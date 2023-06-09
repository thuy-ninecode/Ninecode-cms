import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchTodoFailure, fetchTodoSuccess } from "./actions";
import { FETCH_TODO_REQUEST } from "./actionTypes";
import { ITodo } from "./types";

const getTodos = () =>
    axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchTodoSaga(): any {
    try {
        const response = yield call(getTodos);
        yield put(
            fetchTodoSuccess({
                todos: response.data,
            }),
        );
    } catch (e) {
        yield put(
            fetchTodoFailure({
                error: "",
            }),
        );
    }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* todoSaga() {
    yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;
