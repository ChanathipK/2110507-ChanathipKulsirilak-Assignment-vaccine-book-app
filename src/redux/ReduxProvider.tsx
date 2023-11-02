"use client"
import { store } from "@/redux/store";
import { Provider as ReactReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export default function ReduxProvider({children}: {children: React.ReactNode}) {

    let reduxPersistor = persistStore(store);

    return (
        <ReactReduxProvider store={store}>
            <PersistGate loading={null} persistor={reduxPersistor}>
                {children}
            </PersistGate>
        </ReactReduxProvider>
    );
}