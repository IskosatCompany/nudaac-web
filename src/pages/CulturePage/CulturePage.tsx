import React from "react";
import { MiniDrawer } from "../../components/Drawer";
import { TabsValues } from "../../components/Drawer/Drawer";

const CulturePage = () => {
  return (
    <div>
      <MiniDrawer selectedTab={TabsValues.CULTURE} />
    </div>
  );
};

export default React.memo(CulturePage);
