import LoginCard from "../Components/LoginCard"
import SignupCard from "../Components/SignupCard"
import { useRecoilValue } from "recoil";
import authScreenAtom from "../atoms/authAtom";


const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);

  return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>;

  // return (
  //   <>
  //       <LoginCard />
  //   </>
  // )
}

export default AuthPage