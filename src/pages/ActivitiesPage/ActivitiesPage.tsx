import { MiniDrawer } from "../../components/Drawer";
import { TabsValues } from "../../components/Drawer/Drawer";

const ActivitiesPage = () => {
  return (
    <div>
      <MiniDrawer selectedTab={TabsValues.ACTIVITY} />
    </div>
  );
};

export default ActivitiesPage;
