const initialState = {
  forms: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log(action);
  console.log(state);
  switch (type) {
    case 'PUBLISH':
      return { ...state, forms: [...state.forms, { ...payload }] };
    default:
      return state;
  }
}
