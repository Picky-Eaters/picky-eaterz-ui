import axios from 'axios';

// API flavor, set to 0 for local and 1 for remote.
const apiFlavor = 0;
const apiUrl = apiFlavor ?
  "https://picky-eaterz-backend-dot-picky-eaterz.appspot.com/" :
  "http://localhost:8080/";

/**
 * Creates a new group with the given parameters, and returns the new group ID.
 * 
 * @param {String} location - the location to search in.
 * @param {Number} price - from 1 to 4, the highest price to search for. 
 * @returns {String} The new group's ID.
 */
export async function createGroup(location, price) {
  const createUrl = "groups/create";
  const response = await axios.post(`${apiUrl}${createUrl}`, null, {
    "params": {
      location,
      price
    }
  });

  return response.data;
}

/**
 * Determines whether the given group exists.
 * 
 * @param {String} gid - the group ID to check for.
 * @returns {bool} Whether a group with the given ID exists.
 */
export async function checkExists(gid) {
  try {
    const groupUrl = `groups/${gid}`;
    await axios.get(`${apiUrl}${groupUrl}`);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Retrieves the restaurant information for a given group.
 * 
 * @param {String} gid - the group ID to get the restaurants for.
 * @returns {Object} A mapping of all of the restaurants from their IDs to their data.
 */
export async function getRestaurants(gid) {
  const groupUrl = `groups/${gid}`;
  const response = await axios.get(`${apiUrl}${groupUrl}`);

  console.log(response.data);
  return response.data;
}

/**
 * Subscribes to a stream of restaurant data from the given group.
 * 
 * @param {String} gid - the group ID of the group to subscribe to.
 * @param {Function} onUpdate - a callback that is triggered whenever the restaurants are updated.
 * @returns {Object} The EventSource object to be closed when completed.
 */
export async function getRealtimeRestaurants(gid, onUpdate) {
  const realtimeUrl = `groups/realtime/${gid}`;
  const eventSource = new EventSource(`${apiUrl}${realtimeUrl}`);

  eventSource.onmessage = e => {
    onUpdate(e.data);
  };

  return eventSource;
}

/**
 * Deletes the group with the given ID.
 * 
 * @param {String} gid - the group ID of the group to delete.
 */
export async function deleteGroup(gid) {
  const deleteUrl = `groups/${gid}`;
  axios.delete(`${apiUrl}${deleteUrl}`);
}

/**
 * Submits a vote for the restaurant with the given RID in the group with the given GID.
 * 
 * @param {*} gid - the group ID of the group to be acted on.
 * @param {*} rid - the restaurant ID of the restaurant to be acted on.
 */
export async function voteForRestaurant(gid, rid) {
  const voteUrl = `groups/${gid}/${rid}`;
  axios.put(`${apiUrl}${voteUrl}`);
}