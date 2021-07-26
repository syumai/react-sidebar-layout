import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function Resizer({ position, initialPos, setWidth }) {
  const resizerRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [xPos, setXPos] = useState(initialPos);

  const mouseDownHandler = useCallback((e) => {
    setDragging(true);
  }, []);

  const mouseUpHandler = useCallback((e) => {
    setDragging(false);
  }, []);

  const mouseMoveHandler = useCallback(
    (e) => {
      if (!dragging) {
        return;
      }
      let nextXPos;
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
      node.addEventListener("mousedown", mouseDownHandler);
      node.addEventListener("mouseup", mouseUpHandler);
      document.addEventListener("mousemove", mouseMoveHandler);
    },
    [mouseDownHandler, mouseUpHandler, mouseMoveHandler]
  );

  const removeEventListeners = useCallback(
    (node) => {
      node.removeEventListener("mousedown", mouseDownHandler);
      node.removeEventListener("mouseup", mouseUpHandler);
      document.removeEventListener("mousemove", mouseMoveHandler);
    },
    [mouseDownHandler, mouseUpHandler, mouseMoveHandler]
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

  let classNames = ["resizer"];
  const style = {};
  if (position === "right") {
    classNames.push("resizer-right");
    style.right = xPos - 3;
  } else {
    classNames.push("resizer-left");
    style.left = xPos - 3;
  }
  return (
    <div
      ref={resizerCallbackRef}
      className={classNames.join(" ")}
      style={style}
    ></div>
  );
}

function App() {
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
