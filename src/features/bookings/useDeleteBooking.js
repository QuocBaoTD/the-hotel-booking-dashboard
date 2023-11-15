import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";


export function useDeleteBooking() {

  const queryClient = useQueryClient();
  const { mutate: deletedBookings, isLoading: isDeleteBooking } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      toast.success(`Booking is successfully deleted `);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { deletedBookings, isDeleteBooking };
}
