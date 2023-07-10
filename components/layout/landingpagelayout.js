const LayoutLanding = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: 'url("/dartscheibe2.jpeg")',
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default LayoutLanding;
