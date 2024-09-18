// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import userReducer from "../features/user/userSlice";

// export default configureStore({
//   reducer: {
//     user: userReducer,
//   },
//   middleware: getDefaultMiddleware({
//     serializableCheck: false,
//   }),
// });

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

// Configuring the store with middleware settings
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable the serializable check middleware
    }),
});

export default store;
