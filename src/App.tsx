import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("ar");
  }, []);

  return <div></div>;
};

export default App;
