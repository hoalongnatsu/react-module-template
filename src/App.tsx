import React, { useEffect, useState } from "react";

import { HelmetProvider } from "react-helmet-async";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Resource from "@utils/helpers/resource";
import Routes from "@core/components/Init/Routes";
import configureStore from "@store/configureStore";
import { defaultResource } from "@core/contants/resource";

export const [store, persistor] = configureStore();

function App() {
  const [resource, setResource] = useState<any>(defaultResource);

  useEffect(() => {
    setResourceContext();
  }, []);

  const setResourceContext = () => {
    const authenticated = false;

    Resource.init(authenticated).then((resource) => {
      setResource(resource);
    });
  };

  return resource.initiated ? (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <div className="app">
            <Routes
              routes={resource.routes}
              authenticated={resource.authenticated}
            />
          </div>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  ) : (
    <div>Loading...</div>
  );
}

export default App;
