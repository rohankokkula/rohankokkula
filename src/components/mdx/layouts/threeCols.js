const ThreeCols = ({ children }) => {
    return (
        <div className="grid gap-8 md:grid-cols-layout-2-3 lg:grid-cols-layout-3">{children}</div>
    );
};
export default ThreeCols;
