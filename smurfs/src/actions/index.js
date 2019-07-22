import axios from 'axios'
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ADDING_SMURF = 'ADDING_SMURF'
export const ADDING_SMURF_SUCCESS = 'ADDING_SMURF_SUCCESS'
export const ADDING_SMURF_FAILED = 'ADDING_SMURF_FAILED'
export const GET_SMURFS = 'GET_SMURFS'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_FAILED = 'GET_SMURFS_FAILED'
export const UPDATE_SMURF = 'UPDATE_SMURF'
export const DELETE_SMURF = 'DELETE_SMURF'

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export function getSmurfs() {
  return(dispatch) => {
      dispatch({type: GET_SMURFS})

      axios
          .get("http://localhost:3333/smurfs")
          .then(res => {
              dispatch({
                  type: GET_SMURFS_SUCCESS,
                  payload: res.data
              })
          })
          .catch(err => {
              dispatch({
                  type: GET_SMURFS_FAILED,
                  payload: err
              })
          })
  }
}

export function addSmurfs(smurf) {
  return(dispatch) => {
      dispatch({type: ADDING_SMURF})

      axios
          .post("http://localhost:3333/smurfs", smurf)
          .then(res => {
              dispatch({
                  type: ADDING_SMURF_SUCCESS,
                  payload: res.data
              })
          })
          .catch(err => {
              dispatch({
                  type: ADDING_SMURF_FAILED,
                  payload: err
              })
          })
  }
}