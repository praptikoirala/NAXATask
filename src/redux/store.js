import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import dataReducer from './slice/data-slice';
import watcherSaga from './saga';

const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        data: dataReducer
    },
    middleware: [saga],
}) 

saga.run(watcherSaga);