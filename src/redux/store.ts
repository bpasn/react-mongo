import InitialState from '../typing.initial';
import { createStore, compose, applyMiddleware, combineReducers, Action, } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { userReducer } from './reducer/user.reducer';

let initialState: InitialState = {
    userSignIn: {
        userInfo: localStorage.getItem('userInfo')
         ? JSON.parse(localStorage.getItem('userInfo')!) 
         : null
    } 

};
const reducer = combineReducers({
    userSignIn: userReducer
});
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
export type RootStore = ReturnType<typeof reducer>
//Inferred type: {posts:PostsState, comments: CommentsState , users:UsersState}
export type AppDispatch = typeof store.dispatch;
// export declare const useDispatch: <AppDispatch extends Dispatch<AnyAction> = Dispatch<AnyAction>>() => AppDispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default store;