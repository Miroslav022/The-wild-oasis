import { useQuery } from "@tanstack/react-query";
import { getAllMessages } from "../../services/apiMessages";
import { useSearchParams } from "react-router-dom";

export function useMessages() {
  //filter
  const [searchParams] = useSearchParams();
  let sortBy = !searchParams.get("sortBy")
    ? "created_at-desc"
    : searchParams.get("sortBy");
  const [field, direction] = sortBy.split("-");
  const sort = { field, direction };
  const { data: { messages, count } = {}, isLoading } = useQuery({
    queryKey: ["messages", sort],
    queryFn: () => getAllMessages(sort),
  });
  return { messages, count, isLoading };
}
