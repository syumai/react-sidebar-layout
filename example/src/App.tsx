import { CSSProperties, useCallback, useMemo, useRef, useState } from "react";
import "./App.css";

interface ResizerProps {
  position: string;
  initialPos: number;
  setWidth: (width: number) => void;
}

function Resizer({
  position,
  initialPos,
  setWidth,
}: ResizerProps): JSX.Element {
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

  const { className, style } = useMemo(() => {
    const classNames = ["resizer"];
    const style: CSSProperties = {};
    if (position === "right") {
      classNames.push("resizer-right");
      style.right = xPos - 3;
    } else {
      classNames.push("resizer-left");
      style.left = xPos - 3;
    }
    return { className: classNames.join(" "), style };
  }, [position, xPos]);

  return <div ref={resizerCallbackRef} className={className} style={style} />;
}

function App(): JSX.Element {
  const [sidebarWidth, setSidebarWidth] = useState(150);
  const [secondaryViewWidth, setSecondaryViewWidth] = useState(150);
  return (
    <>
      <div className="layout">
        <div className="sidebar">{loremIpsum}</div>
        <Resizer
          position="left"
          initialPos={sidebarWidth}
          setWidth={setSidebarWidth}
        />
        <div className="primary-view">{loremIpsum}</div>
        <Resizer
          position="right"
          initialPos={secondaryViewWidth}
          setWidth={setSecondaryViewWidth}
        />
        <div className="secondary-view">{loremIpsum}</div>
      </div>
      <style>
        {`
        .layout {
          grid-template-columns: ${sidebarWidth}px 1fr ${secondaryViewWidth}px;
        }
        `}
      </style>
    </>
  );
}

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.
`;

export default App;
