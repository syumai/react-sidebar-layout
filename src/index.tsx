import { ReactNode, useCallback, useRef, useState } from "react";
import styled from "styled-components";
import "./index.css";

/***
 * Resizer Component
 */

type ResizerStyleProps = {
  color?: string;
  hoveredColor?: string;
  transitionDuration?: number; // milli seconds
  width?: number;
};

type ResizerDynamicStyleProps = {
  left?: number;
  right?: number;
  width: number; // must not be optional as dynamic style
};

type ResizerProps = ResizerStyleProps & {
  position: string;
  initialPos: number;
  setWidth: (width: number) => void;
};

const ResizerDiv = styled.div<ResizerStyleProps & ResizerDynamicStyleProps>`
  background-color: ${(props) => props.color || "transparent"};
  width: ${(props) => props.width}px;
  left: ${(props) => `${props.left}px` || "initial"};
  right: ${(props) => `${props.right}px` || "initial"};
  transition: background-color ${(props) => props.transitionDuration || "300"}ms;
  &:hover {
    background-color: ${(props) => props.hoveredColor || "#1e90ff"};
  }
`;

export const Resizer = ({
  color,
  hoveredColor,
  transitionDuration,
  width = 4,
  position,
  initialPos,
  setWidth,
}: ResizerProps): JSX.Element => {
  const resizerRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [xPos, setXPos] = useState(initialPos);

  const pointerDownHandler = useCallback(() => {
    setDragging(true);
  }, []);

  const pointerUpHandler = useCallback(() => {
    setDragging(false);
  }, []);

  const pointerMoveHandler = useCallback(
    (e) => {
      if (!dragging) {
        return;
      }
      let nextXPos = 0;
      setXPos((prev) => {
        const movementX = e.movementX * (position === "right" ? -1 : 1);
        nextXPos = prev + movementX;
        return nextXPos;
      });
      setWidth(nextXPos);
    },
    [position, dragging, setWidth]
  );

  const addEventListeners = useCallback(
    (node) => {
      node.addEventListener("pointerdown", pointerDownHandler);
      node.addEventListener("pointerup", pointerUpHandler);
      document.addEventListener("pointermove", pointerMoveHandler);
    },
    [pointerDownHandler, pointerUpHandler, pointerMoveHandler]
  );

  const removeEventListeners = useCallback(
    (node) => {
      node.removeEventListener("pointerdown", pointerDownHandler);
      node.removeEventListener("pointerup", pointerUpHandler);
      document.removeEventListener("pointermove", pointerMoveHandler);
    },
    [pointerDownHandler, pointerUpHandler, pointerMoveHandler]
  );

  const resizerCallbackRef = useCallback(
    (node) => {
      // both of old and new node are null or undefined
      if (!resizerRef.current && !node) {
        return;
      }
      // nothing is changed
      if (resizerRef.current === node) {
        return;
      }
      // resizer is removed
      if (resizerRef.current && !node) {
        removeEventListeners(resizerRef.current);
        resizerRef.current = null;
        return;
      }
      // resizer is changed
      if (resizerRef.current && node) {
        removeEventListeners(resizerRef.current);
      }
      // resizer is changed or newly attached
      addEventListeners(node);
      resizerRef.current = node;
    },
    [addEventListeners, removeEventListeners]
  );

  return (
    <ResizerDiv
      ref={resizerCallbackRef}
      className="resizer"
      color={color}
      hoveredColor={hoveredColor}
      transitionDuration={transitionDuration}
      width={width}
      left={position === "left" ? xPos - width / 2 : undefined}
      right={position === "right" ? xPos - width / 2 : undefined}
    />
  );
};

/***
 * Layout compoentns
 */

type ChildrenProps = {
  children: ReactNode;
};

type ContainerProps = ChildrenProps & {
  className: string;
};

export const Sidebar = ({ children }: ChildrenProps) => (
  <Container className="sidebar">{children}</Container>
);

export const PrimaryView = ({ children }: ChildrenProps) => (
  <Container className="primary-view">{children}</Container>
);

export const SecondaryView = ({ children }: ChildrenProps) => (
  <Container className="secondary-view">{children}</Container>
);

const Container = ({ children, className }: ContainerProps): JSX.Element => (
  <div className={className}>{children}</div>
);

export interface SidebarLayoutProps extends ChildrenProps {
  defaultSidebarWidth?: number;
  defaultSecondaryViewWidth?: number;
}

type LayoutDynamicStyleProps = {
  sidebarWidth: number;
  secondaryViewWidth: number;
};

const LayoutDiv = styled.div<LayoutDynamicStyleProps>`
  grid-template-columns: ${(props) => props.sidebarWidth}px 1fr ${(props) =>
      props.secondaryViewWidth}px;
`;

export const SidebarLayout = ({
  defaultSidebarWidth = 150,
  defaultSecondaryViewWidth = 150,
  children,
}: SidebarLayoutProps): JSX.Element => {
  const [sidebarWidth, setSidebarWidth] = useState(defaultSidebarWidth);
  const [secondaryViewWidth, setSecondaryViewWidth] = useState(
    defaultSecondaryViewWidth
  );
  return (
    <>
      <LayoutDiv
        className="sidebar-layout"
        sidebarWidth={sidebarWidth}
        secondaryViewWidth={secondaryViewWidth}
      >
        <Resizer
          position="left"
          initialPos={sidebarWidth}
          setWidth={setSidebarWidth}
        />
        <Resizer
          position="right"
          initialPos={secondaryViewWidth}
          setWidth={setSecondaryViewWidth}
        />
        {children}
      </LayoutDiv>
    </>
  );
};
