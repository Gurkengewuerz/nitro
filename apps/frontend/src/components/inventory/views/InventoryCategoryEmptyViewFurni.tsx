import {FC} from "react";

import {Column, Grid, GridProps, Text} from "../../../common";

export interface InventoryCategoryEmptyViewFurniProps extends GridProps {
  title: string;
  desc: string;
}

export const InventoryCategoryEmptyViewFurni: FC<InventoryCategoryEmptyViewFurniProps> = props => {
  const {title = "", desc = "", children = null, ...rest} = props;

  return (
    <Grid {...rest}>
      <Column justifyContent="start" center size={6} overflow="hidden">
        <div className="empty-furniimage" />
      </Column>
      <Column justifyContent="center" size={6} overflow="hidden">
        <div className="bubble-inventory bubble-inventory-bottom-left">
          <Text fontSize={6} overflow="unset" truncate>
            {title}
          </Text>
          <Text overflow="auto" fontSize={6}>
            {" "}
            {desc}
          </Text>
        </div>
        <div className="empty-image" />
      </Column>
      {children}
    </Grid>
  );
};
