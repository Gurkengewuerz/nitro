import {HabboClubLevelEnum, MouseEventType} from "@nitro/renderer";
import {FC, MouseEvent, useMemo, useState} from "react";

import {IPurchasableOffer, Offer, ProductTypeEnum} from "../../../../../api";
import {Base, LayoutAvatarImageView, LayoutGridItem, LayoutGridItemProps} from "../../../../../common";
import {useCatalog, useInventoryFurni} from "../../../../../hooks";

interface CatalogGridOfferViewProps extends LayoutGridItemProps {
  offer: IPurchasableOffer;
  selectOffer: (offer: IPurchasableOffer) => void;
}

export const CatalogGridOfferView: FC<CatalogGridOfferViewProps> = props => {
  const {offer = null, selectOffer = null, itemActive = false, ...rest} = props;
  const [isMouseDown, setMouseDown] = useState(false);
  const {requestOfferToMover = null} = useCatalog();
  const {isVisible = false} = useInventoryFurni();

  const iconUrl = useMemo(() => {
    if (offer.pricingModel === Offer.PRICING_MODEL_BUNDLE) {
      return null;
    }

    return offer.product.getIconUrl(offer);
  }, [offer]);

  const onMouseEvent = (event: MouseEvent) => {
    switch (event.type) {
      case MouseEventType.MOUSE_DOWN:
        selectOffer(offer);
        setMouseDown(true);
        return;
      case MouseEventType.MOUSE_UP:
        setMouseDown(false);
        return;
      case MouseEventType.ROLL_OUT:
        if (!isMouseDown || !itemActive || !isVisible) return;

        requestOfferToMover(offer);
        return;
    }
  };

  const product = offer.product;

  if (!product) return null;

  return (
    <LayoutGridItem
      itemImage={iconUrl}
      itemCount={offer.pricingModel === Offer.PRICING_MODEL_MULTI ? product.productCount : 1}
      itemUniqueSoldout={product.uniqueLimitedItemSeriesSize && !product.uniqueLimitedItemsLeft}
      itemUniqueNumber={product.uniqueLimitedItemSeriesSize}
      itemActive={itemActive}
      onMouseDown={onMouseEvent}
      onMouseUp={onMouseEvent}
      onMouseOut={onMouseEvent}
      {...rest}>
      {offer.clubLevel !== HabboClubLevelEnum.NO_CLUB && <Base className="icon icon-hc_mini position-absolute top-0 end-1" />}
      {offer.product.productType === ProductTypeEnum.ROBOT && <LayoutAvatarImageView figure={offer.product.extraParam} headOnly={true} direction={3} />}
    </LayoutGridItem>
  );
};
