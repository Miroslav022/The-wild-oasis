import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isloading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      navigate("/login", { replace: true });
      queryClient.removeQueries();
    },
    onError: () => toast.error("There is an error"),
  });
  return { logout, isloading };
}
