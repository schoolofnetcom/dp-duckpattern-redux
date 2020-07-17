/**
 * REDUCER - export default
 * ACTION CREATOR - export function/ () =>
 * ACTION TYPES - "export" UPPERCASE
 * InitialState - dentro const, não export
 */

/* ACTION TYPES */
const ON_INCREMENT = 'ON_INCREMENT';
const ON_DECREMENT = 'ON_DECREMENT';

/* ACTION CREATORS */
export function onIncrement(value) {
  return { type: ON_INCREMENT, payload: { value } };
}

export function onDecrement(value) {
  return { type: ON_DECREMENT, payload: { value } };
}

/* REDUCERS */
const InitialState = 0;
export default function reducer(state = InitialState, action) {
  switch (action.type) {
    case ON_INCREMENT:
      return state + 1
    case ON_DECREMENT:
      return state - 1
    default:
      return state
  }
}