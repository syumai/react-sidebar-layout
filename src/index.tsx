import {
  CSSProperties,
  PointerEvent,
  ReactNode,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";

/***
 * Resizer Component
 */

type ResizerStyleProps = {
  color?: string;
  hoveredColor?: string;
  transitionDuration?: number; // milli seconds
  width?: number;
};

type ResizerProps = ResizerStyleProps & {
  position: string;
  containerWidth: number;
  setContainerWidth: (callback: SetStateAction<number>) => void;
  zIndex?: number;
};

const resizerStyle: CSSProperties = Object.freeze({
  position: "absolute",
  height: "100%",
  MozUserSelect: "none",
  WebkitUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none",
  cursor: "col-resize",
});

export const Resizer = ({
  color,
  hoveredColor,
  transitionDuration,
  width = 6,
  position,
  containerWidth,
  setContainerWidth,
  zIndex = 1000,
}: ResizerProps): JSX.Element => {
  const [dragging, setDragging] = useState(false);

  const pointerDownHandler = useCallback((e: PointerEvent) => {
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  const pointerUpHandler = useCallback((e: PointerEvent) => {
    setDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  }, []);

  const pointerMoveHandler = useCallback(
    (e: PointerEvent) => {
      if (!dragging) {
        return;
      }
      setContainerWidth(
        (prev) => prev + e.movementX * (position === "right" ? -1 : 1)
      );
    },
    [position, dragging, setContainerWidth]
  );

  const style: CSSProperties = useMemo(
    () => ({
      ...resizerStyle,
      width: `${width}px`,
      left: position === "left" ? `${containerWidth - width / 2}px` : "initial",
      right:
        position === "right" ? `${containerWidth - width / 2}px` : "initial",
      transition: `background-color ${transitionDuration || 300}ms`,
      zIndex: zIndex,
    }),
    [width, position, containerWidth, transitionDuration]
  );

  const resizerId = `react-sidebar-layout-resizer-${position}`;

  return (
    <>
      <div
        id={resizerId}
        style={style}
        onPointerDown={pointerDownHandler}
        onPointerMove={pointerMoveHandler}
        onPointerUp={pointerUpHandler}
      />
      <style>{`
      #${resizerId} {
        backgroundColor: ${color || "transparent"};
      }
      #${resizerId}:hover { background-color: ${
        hoveredColor || "#1e90ff"
      }; }`}</style>
    </>
  );
};

/***
 * Layout components
 */

export type SidebarLayoutContainerProps = {
  className?: string;
  children: ReactNode;
};

const gridAreaSidebar = "react-sidebar-layout-sidebar";
const gridAreaPrimaryView = "react-sidebar-layout-primary-view";
const gridAreaSecondaryView = "react-sidebar-layout-secondary-view";

const sidebarStyle: CSSProperties = Object.freeze({
  height: "100%",
  gridArea: gridAreaSidebar,
});
const primaryViewStyle: CSSProperties = Object.freeze({
  height: "100%",
  gridArea: gridAreaPrimaryView,
});
const secondaryViewStyle: CSSProperties = Object.freeze({
  height: "100%",
  gridArea: gridAreaSecondaryView,
});

export const Sidebar = ({
  className,
  children,
}: SidebarLayoutContainerProps): JSX.Element => (
  <div className={className} style={sidebarStyle}>
    {children}
  </div>
);
export const PrimaryView = ({
  className,
  children,
}: SidebarLayoutContainerProps): JSX.Element => (
  <div className={className} style={primaryViewStyle}>
    {children}
  </div>
);
export const SecondaryView = ({
  className,
  children,
}: SidebarLayoutContainerProps): JSX.Element => (
  <div className={className} style={secondaryViewStyle}>
    {children}
  </div>
);

export interface SidebarLayoutProps {
  className?: string;
  children: ReactNode;
  defaultSidebarWidth?: number;
  defaultSecondaryViewWidth?: number;
}

const sidebarLayoutStyle: CSSProperties = Object.freeze({
  position: "relative",
  display: "grid",
  width: "100%",
  height: "100%",
  gridTemplateAreas: `"${gridAreaSidebar} ${gridAreaPrimaryView} ${gridAreaSecondaryView}"`,
});

export const SidebarLayout = ({
  className,
  children,
  defaultSidebarWidth = 200,
  defaultSecondaryViewWidth = 200,
}: SidebarLayoutProps): JSX.Element => {
  const [sidebarWidth, setSidebarWidth] = useState(defaultSidebarWidth);
  const [secondaryViewWidth, setSecondaryViewWidth] = useState(
    defaultSecondaryViewWidth
  );
  const style: CSSProperties = useMemo(
    () => ({
      ...sidebarLayoutStyle,
      gridTemplateColumns: `${sidebarWidth}px 1fr ${secondaryViewWidth}px`,
    }),
    [sidebarWidth, secondaryViewWidth]
  );
  return (
    <div className={className} style={style}>
      <Resizer
        position="left"
        containerWidth={sidebarWidth}
        setContainerWidth={setSidebarWidth}
      />
      <Resizer
        position="right"
        containerWidth={secondaryViewWidth}
        setContainerWidth={setSecondaryViewWidth}
      />
      {children}
    </div>
  );
};
