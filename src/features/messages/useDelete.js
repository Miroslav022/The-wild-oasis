import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteMessage } from "../../services/apiMessages";
import toast from "react-hot-toast";

export function useDelete() {
  const queryClient = useQueryClient();
  const { mutate: deleteMessage } = useMutation({
    mutationFn: (id) => {
      console.log(id);
      DeleteMessage(id);
    },
    onSuccess: () => {
      toast.success("The message has been successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["messages"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return deleteMessage;
}
