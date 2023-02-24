import React from "react";
import { MiniDrawer } from "../../components/Drawer";
import { TabsValues } from "../../components/Drawer/Drawer";

const ResumePage = () => {
  return (
    <div>
      <MiniDrawer selectedTab={TabsValues.RESUME} />
    </div>
  );
};

export default React.memo(ResumePage);
