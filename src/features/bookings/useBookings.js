import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  //Filter
  let filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  //Sort
  let sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  //Pagination
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  console.log(currentPage);

  const {
    data: { data: bookings, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, currentPage],
    queryFn: () => getBookings({ filter, sortBy, currentPage }),
  });
  console.log(count);
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (currentPage < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, currentPage + 1],
      queryFn: () =>
        getBookings({ filter, sortBy, currentPage: currentPage + 1 }),
    });
  if (currentPage > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, currentPage - 1],
      queryFn: () =>
        getBookings({ filter, sortBy, currentPage: currentPage - 1 }),
    });
  return { bookings, isLoading, error, count };
}
