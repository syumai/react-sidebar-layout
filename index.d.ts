import { ReactNode, SetStateAction } from "react";
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
    containerWidth: number;
    setContainerWidth: (callback: SetStateAction<number>) => void;
    zIndex?: number;
};
export declare const Resizer: ({ color, hoveredColor, transitionDuration, width, position, containerWidth, setContainerWidth, zIndex, }: ResizerProps) => JSX.Element;
/***
 * Layout components
 */
export declare type SidebarLayoutContainerProps = {
    className?: string;
    children: ReactNode;
};
export declare const Sidebar: ({ className, children, }: SidebarLayoutContainerProps) => JSX.Element;
export declare const PrimaryView: ({ className, children, }: SidebarLayoutContainerProps) => JSX.Element;
export declare const SecondaryView: ({ className, children, }: SidebarLayoutContainerProps) => JSX.Element;
export interface SidebarLayoutProps {
    className?: string;
    children: ReactNode;
    defaultSidebarWidth?: number;
    defaultSecondaryViewWidth?: number;
}
export declare const SidebarLayout: ({ className, children, defaultSidebarWidth, defaultSecondaryViewWidth, }: SidebarLayoutProps) => JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map