# react-sidebar-layout

## Example

https://syumai.github.io/react-sidebar-layout/example/build/

## Installation

```
npm install --save @syumai/react-sidebar-layout
# or
yarn add @syumai/react-sidebar-layout
```

## Usage

* import SidebarLayout, Sidebar, PrimaryView, SecondaryView components from this package.
* Use it in your application like below.
  - Sidebar / PrimaryView / SecondaryView are just a container component which can contain any contents.

```ts
import { PrimaryView, SecondaryView, Sidebar, SidebarLayout } from "react-sidebar-layout";

const SidebarContent = () => (
  <header><h1>Sidebar</h1></header>
);

const PrimaryViewContent = () => (
  <header><h1>Primary view</h1></header>
);

const SecondaryViewContent = () => (
  <header><h1>Secondary view</h1></header>
);

const App = (): JSX.Element => {
  return (
    <SidebarLayout defaultSidebarWidth={200} defaultSecondaryViewWidth={250}>
      <Sidebar><SidebarContent /></Sidebar>
      <PrimaryView><PrimaryViewContent /></PrimaryView>
      <SecondaryView><SecondaryViewContent /></SecondaryView>
    </SidebarLayout>
  );
};
```

### Customize Styles

* Components have its class name. Please write and attatch styles to its class name.
  - SidebarLayout: `.sidebar-layout`
  - Sidebar: `.sidebar-layout .sidebar`
  - PrimaryView: `.sidebar-layout .primary-view`
  - SecondaryView: `.sidebar-layout .secondary-view`

## Author

syumai

## License

MIT
