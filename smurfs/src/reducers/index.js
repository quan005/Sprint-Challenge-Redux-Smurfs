/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  ADDING_SMURF,
  ADDING_SMURF_SUCCESS,
  ADDING_SMURF_FAILED,
  GET_SMURFS,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILED,
  UPDATE_SMURF,
  DELETE_SMURF
} from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default (state = initialState, action) => {
  switch (action.type) {

      case GET_SMURFS: {
          return {
            ...state,
            fetchingSmurfs: true
          }
      }

      case GET_SMURFS_SUCCESS: {
          return {
            ...state,
            fetchingSmurfs: false,
            smurfs: action.payload,
            error: null,
          }
      }

      case GET_SMURFS_FAILED: {
          return {
            ...state,
            fetchingSmurfs: false,
            error: action.payload
          }
      }

      case ADDING_SMURF: {
          return {
            ...state,
            addingSmurf: true
          }
      }

      case ADDING_SMURF_SUCCESS: {
        return {
          ...state,
          addingSmurf: false,
          smurfs: action.payload
        }
    }

    case ADDING_SMURF_FAILED: {
        return {
          ...state,
          addingSmurf: false,
          error: action.payload
        }
    }

      case UPDATE_SMURF: {
          return {
            ...state,
            friends: action.payload,
            fetchingFriends: false,
            error: null,
          }
      }

      case DELETE_SMURF: {
          return {
            ...state,
            fetchingFriends: false,
            error: null,
          }
      }

      default:
          return state;
  }
};