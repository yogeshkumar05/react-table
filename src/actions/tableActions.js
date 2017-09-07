import store from './../store'
import data from '../common/data.json';

export function fetchStreamingData(page) {
 let count=0;
 let i=page*10;
 let result=[];
 while(count<=10)
  {
    result.unshift(data.data[i]);
    count++;
    i--;
  }

      store.dispatch({ type: "FETCH_STREAM_FULFILLED", payload: result})
}

export function updateData(data)
{
  store.dispatch({ type: "UPDATE_DATA", payload: data })
}

export function getInitialData()
{
    let result=data.data;
    store.dispatch({ type: "GET_INITIAL_DATA", payload: result })
}
