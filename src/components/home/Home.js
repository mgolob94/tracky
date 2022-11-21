import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";
import Header from "../header/Header";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  return (
    <>
      <div className="box">
        <Header />
      </div>
      <div className="d-grid gap-2">
       
      </div>
    </>
  );
};
export default Home;
