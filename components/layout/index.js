const Layout = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: 'url("/dartscheibe2.jpeg")',
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
