import Calendar from "../../components/Calendar/Calendar";
import { MiniDrawer } from "../../components/Drawer";
import { TabsValues } from "../../components/Drawer/Drawer";

const SchedulePage = () => {
  return (
    <div>
      <Calendar />
      <MiniDrawer selectedTab={TabsValues.SCHEDULE} />
    </div>
  );
};

export default SchedulePage;
