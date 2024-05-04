import { useQuery } from "@tanstack/react-query";
import { getMessage } from "../../services/apiMessages";
import { useParams } from "react-router-dom";

export function useMessage() {
  const { messageId } = useParams();
  const { data, isLoading } = useQuery({
    queryFn: () => getMessage(messageId),
    queryKey: ["message", messageId],
  });
  return { data, isLoading };
}
