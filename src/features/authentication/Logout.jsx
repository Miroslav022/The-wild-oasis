import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import Spinner from "../../ui/Spinner";

function Logout() {
  const { logout, isLoading } = useLogout();
  function handleLogout() {
    logout();
  }
  return (
    <ButtonIcon onClick={handleLogout}>
      {isLoading ? <Spinner /> : <HiArrowRightOnRectangle />}
    </ButtonIcon>
  );
}

export default Logout;
