import {FC, useEffect, useMemo, useRef} from "react";

import {Column, ColumnProps} from "..";
import {GetLocalStorage, SetLocalStorage, WindowSaveOptions, WindowSaveScreenOptions} from "../../api";
import {DraggableWindow, DraggableWindowPosition, DraggableWindowProps} from "../draggable-window";
import {NitroCardContextProvider} from "./NitroCardContext";

export interface NitroCardViewProps extends DraggableWindowProps, ColumnProps {
  theme?: string;
}

export const NitroCardView: FC<NitroCardViewProps> = props => {
  const {
    theme = "primary",
    uniqueKey = null,
    handleSelector = ".drag-handler",
    windowPosition = DraggableWindowPosition.CENTER,
    disableDrag = false,
    overflow = "hidden",
    position = "relative",
    gap = 0,
    classNames = [],
    ...rest
  } = props;
  const elementRef = useRef<HTMLDivElement>();

  const getClassNames = useMemo(() => {
    const newClassNames: string[] = ["nitro-card", "rounded", "shadow"];

    newClassNames.push(`theme-${theme || "primary"}`);

    if (classNames.length) newClassNames.push(...classNames);

    return newClassNames;
  }, [theme, classNames]);

  useEffect(() => {
    if (!uniqueKey || !elementRef || !elementRef.current) return;

    const screen = `${window.innerWidth}x${window.innerHeight}`;
    const localStorage = GetLocalStorage<WindowSaveScreenOptions>(`nitro.windows.${uniqueKey}`);
    const windowOptions = localStorage?.[screen] as WindowSaveOptions;
    const element = elementRef.current;

    if (windowOptions && windowOptions.size && windowOptions.size.width > 0 && windowOptions.size.height > 0) {
      element.style.width = `${windowOptions.size.width}px`;
      element.style.height = `${windowOptions.size.height}px`;
    }

    const observer = new ResizeObserver(event => {
      const screen = `${window.innerWidth}x${window.innerHeight}`;
      const newStorage = {...GetLocalStorage<Partial<WindowSaveScreenOptions>>(`nitro.windows.${uniqueKey}`)} as WindowSaveScreenOptions;
      newStorage[screen] = newStorage?.[screen] || ({} as WindowSaveOptions);
      newStorage[screen].size = {width: element.offsetWidth, height: element.offsetHeight};
      SetLocalStorage<WindowSaveScreenOptions>(`nitro.windows.${uniqueKey}`, newStorage);
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [uniqueKey]);

  return (
    <NitroCardContextProvider value={{theme}}>
      <DraggableWindow uniqueKey={uniqueKey} handleSelector={handleSelector} windowPosition={windowPosition} disableDrag={disableDrag}>
        <Column innerRef={elementRef} overflow={overflow} position={position} gap={gap} classNames={getClassNames} {...rest} />
      </DraggableWindow>
    </NitroCardContextProvider>
  );
};
