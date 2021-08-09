import { ReactNode } from "react";
import "./index.css";
/***
 * Resizer Component
 */
declare type ResizerStyleProps = {
    color?: string;
    hoveredColor?: string;
    transitionDuration?: number;
    width?: number;
};
declare type ResizerProps = ResizerStyleProps & {
    position: string;
    initialPos: number;
    setWidth: (width: number) => void;
};
export declare const Resizer: ({ color, hoveredColor, transitionDuration, width, position, initialPos, setWidth, }: ResizerProps) => JSX.Element;
/***
 * Layout components
 */
declare type ChildrenProps = {
    children: ReactNode;
};
export declare const Sidebar: ({ children }: ChildrenProps) => JSX.Element;
export declare const PrimaryView: ({ children }: ChildrenProps) => JSX.Element;
export declare const SecondaryView: ({ children }: ChildrenProps) => JSX.Element;
export interface SidebarLayoutProps extends ChildrenProps {
    defaultSidebarWidth?: number;
    defaultSecondaryViewWidth?: number;
}
export declare const SidebarLayout: ({ defaultSidebarWidth, defaultSecondaryViewWidth, children, }: SidebarLayoutProps) => JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map