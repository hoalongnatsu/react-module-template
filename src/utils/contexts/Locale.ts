import React from "react";

export default React.createContext({
  locale: "en",
  setLocaleContext: (locale: string) => {}
});
