import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from '../features/cart/CartSlice';
import { apiService } from '../api/apiService';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
