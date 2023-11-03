interface ILayout {
  children: JSX.Element;
}
function Layout({children}: ILayout) {
  return (
    <div>
      <div>nav</div>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
