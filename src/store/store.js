import * as api from "../api";
import * as types from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case types.LOGOUT_USER:
      return {
        ...state,
        user: null,
      };

    case types.GET_CARS:
      return {
        ...state,
        cars: action.payload.cars,
      };

    case types.GET_CAR:
      return { ...state, newCar: action.payload };

    case types.GET_THEME:
      return { ...state, theme: action.payload };

    case types.CREATE_CAR:
      return {
        ...state,
        cars: state.cars.concat(action.payload.car),
      };

    case types.ADD_FAVORITE_CAR:
      return {
        ...state,
        favoriteCar: state.favoriteCar.concat(action.payload),
      };

    case types.ADD_PARAMETER:
      return {
        ...state,
        newCar: {
          ...state.newCar,
          [action.payload.type]: action.payload.parameter,
        },
      };

    case types.CHANGE_THEM:
      return {
        ...state,
        them: action.payload,
      };

    case types.ADD_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.type]: action.payload.filter,
        },
      };
    case types.SET_FILTER:
      return { ...state, filters: action.payload.filters };

    case types.SET_CAR:
      return { ...state, newCar: action.payload };

    case types.SET_THEME:
      return { ...state, theme: action.payload };

    case types.DELETE_FILTER:
      return { ...state, filters: {} };

    case types.UPDATE_CAR:
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id === action.payload.car.id
            ? { ...car, ...action.payload.car }
            : car
        ),
      };

    case types.DELETE_CAR:
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload.carId),
      };

    case types.DELETE_FAVORITE_CAR:
      return {
        ...state,
        favoriteCar: action.payload
          ? state.favoriteCar.filter((car) => car.id !== action.payload)
          : state.favoriteCar,
      };

    default:
      return state;
  }
};

// export const loginUser = (login, password, dispatch) => {
//   return api.loginUser(login, password);
// };
//
// export const setAuth = (dispatch) => {
//   api.onAuth((user) => {
//     if (user) {
//       dispatch({
//         type: types.LOGIN_USER,
//         payload: {
//           user,
//         },
//       });
//     } else {
//       dispatch({ type: "LOGOUT_USER" });
//     }
//   });
// };

export const addFavoriteCar = (car, dispatch) => {
  console.log(car);
  return dispatch({
    type: types.ADD_FAVORITE_CAR,
    payload: car,
  });
};

export const deleteFavoriteCar = (carId, dispatch) =>
  dispatch({
    type: types.DELETE_FAVORITE_CAR,
    payload: carId,
  });

export const getCars = (dispatch) => {
  return api.getCars().then((cars) =>
    dispatch({
      type: types.GET_CARS,
      payload: {
        cars,
      },
    })
  );
};

export const getCar = (dispatch) => {
  return api.getCar().then((car) => {
    return dispatch({
      type: types.GET_CAR,
      payload: car[0],
    });
  });
};

export const getTheme = (dispatch) => {
  return api.getTheme().then((theme) => {
    return dispatch({
      type: types.GET_THEME,
      payload: theme[0].theme,
    });
  });
};

export const createCar = (data, dispatch) => {
  return api.createCar(data).then((todo) =>
    dispatch({
      type: types.CREATE_CAR,
      payload: {
        todo,
      },
    })
  );
};

export const deleteCar = (carId, dispatch) => {
  return api.deleteCar(carId).then(() =>
    dispatch({
      type: types.DELETE_CAR,
      payload: {
        carId,
      },
    })
  );
};

export const updateCar = (carId, data, dispatch) => {
  return api.updateCar(carId, data).then((car) =>
    dispatch({
      type: types.UPDATE_CAR,
      payload: {
        car,
      },
    })
  );
};

export const addParameter = (typeParameter, parameter, dispatch) =>
  dispatch({
    type: types.ADD_PARAMETER,
    payload: {
      type: typeParameter,
      parameter,
    },
  });

export const addFilter = (typeFilter, filter, dispatch) =>
  dispatch({
    type: types.ADD_FILTER,
    payload: {
      type: typeFilter,
      filter,
    },
  });

export const setCar = (data, dispatch) => {
  return api.setCar(data).then((car) => {
    return dispatch({
      type: types.SET_CAR,
      payload: car,
    });
  });
};

export const setTheme = (data, dispatch) => {
  return api.setTheme(data).then((theme) => {
    return dispatch({
      type: types.SET_THEME,
      payload: theme.theme,
    });
  });
};

export const setFilters = (filters, dispatch) =>
  dispatch({
    type: types.SET_FILTER,
    payload: {
      filters,
    },
  });

export const deleteFilter = (dispatch) =>
  dispatch({
    type: types.DELETE_FILTER,
  });

export const actions = {
  addFavoriteCar,
  deleteFavoriteCar,
  getTheme,
  setTheme,
  addParameter,
  addFilter,
  setFilters,
  deleteFilter,
  getCars,
  getCar,
  createCar,
  deleteCar,
  updateCar,
  setCar,
};
