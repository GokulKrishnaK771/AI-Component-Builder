import { configureStore } from "@reduxjs/toolkit";
import playgroundreducer from "../features/playground/playgroundslice";

export const store = configureStore({
    reducer:{
        playground: playgroundreducer,
    }
})