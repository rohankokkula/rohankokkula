const ThreeCols = ({ children }) => {
    return (
        <div className="grid gap-6" style={{ gridTemplateColumns: '250px 1fr 250px' }}>
            {children}
        </div>
    );
};
export default ThreeCols;
