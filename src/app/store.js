import { configureStore } from "@reduxjs/toolkit";
import playgroundreducer from "../features/playground/playgroundslice";
import aireducer from "../features/ai/aislice";

export const store = configureStore({
    reducer:{
        playground: playgroundreducer,
        ai:aireducer
    }
})