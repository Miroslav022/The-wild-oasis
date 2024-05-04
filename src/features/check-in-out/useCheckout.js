import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, { status: "checked-out" }),
    onSuccess: () => {
      toast.success("Booking was successfully checked out");
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("Checking out has been rejected"),
  });
  return { checkout, isCheckingOut };
}
