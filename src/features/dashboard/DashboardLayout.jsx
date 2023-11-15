import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useRecentBooking } from "./useRecentBooking";
import { useRecentStay } from "./useRecentStay";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: isLoadingBooking, bookings } = useRecentBooking();
  const {
    isLoading: isLoadingStaying,
    confirmStays,
    numDays,
  } = useRecentStay();
  const { cabins, isLoading: isLoadingCabins } = useCabins();

  if (isLoadingBooking || isLoadingStaying || isLoadingCabins)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmStays}
        cabinCount={cabins.length}
        numDays={numDays}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
