import { formatCurrency } from "../../utils/helpers";
import Stat from "../dashboard/Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar,
} from "react-icons/hi2";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  //1.
  const numBookings = bookings.length;

  //2.
  const sales = bookings.reduce((arr, curr) => arr + curr.totalPrice, 0);

  //3.
  const checkins = confirmedStays.length;

  //4.Occupation Rate =  num checkin nights / all avaiable Nights * 100
  const occupation =
    confirmedStays.reduce((arr, curr) => arr + curr.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="bookings"
        icon={<HiOutlineBriefcase />}
        color="blue"
        value={numBookings}
      />
      <Stat
        title="sales"
        icon={<HiOutlineBanknotes />}
        color="green"
        value={formatCurrency(sales)}
      />
      <Stat
        title="check ins"
        icon={<HiOutlineCalendar />}
        color="indigo"
        value={checkins}
      />
      <Stat
        title="occupancy rate"
        icon={<HiOutlineChartBar />}
        color="yellow"
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
