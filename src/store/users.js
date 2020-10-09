// Action types
const ADD_USER = "UserAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved";

// Action Creators
export const addUser = (user) => ({
  type: ADD_USER,
  payload: {
    user: user.user,
  },
});

export const bugResolved = (id) => ({
  type: BUG_RESOLVED,
  payload: {
    id: id,
  },
});

export function bugRemoved(id) {
  return {
    type: BUG_REMOVED,
    payload: {
      id: id,
    },
  };
}

// Reducer

let lastId = 0;

function resolveBug(state) {}

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        {
          id: ++lastId,
          user: action.payload.user,
        },
      ];

    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    case BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );

    default:
      return state;
  }
}
