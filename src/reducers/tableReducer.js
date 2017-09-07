export default function reducer(state = {
  data: [],
  error: null,
  initialData:[]
}, action) {

  switch (action.type) {
    case "GET_INITIAL_DATA":
    {    
      
      return Object.assign({}, state, { initialData: action.payload })
    }
   
    case "FETCH_STREAM_FULFILLED": {
      return Object.assign({}, state, { data: action.payload});
    }

    case "UPDATE_DATA":
    {
      return Object.assign({}, state, { data: action.payload})
    }
  }
  return state
}






