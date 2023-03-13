import { put, takeLatest, all } from 'redux-saga/effects';
// function* fetchNews() {
//   const json = yield fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-21&sortBy=publishedAt&apiKey=df861cbe5f0b466996fff1ac1b60072e')
//         .then(response => response.json(), );    
//   yield put({ type: "NEWS_RECEIVED", json: json.articles, });
// }
function* actionWatcher() {
    //  yield takeLatest(1, 1)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}