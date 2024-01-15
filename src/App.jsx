import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccessToken } from "./store/auth/auth.slice";
import { Footer } from "./views/Footer/footer";
import { Header } from "./views/Header/Header";
import { Main } from "./views/Main/Main";

export const App = () => {
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, accessToken]);
  return (
    <>
      <Header />
      {!loading && accessToken ? <Main /> : <div>Загрузка...</div>}
      <Footer />
    </>
  );
};

export default App;
