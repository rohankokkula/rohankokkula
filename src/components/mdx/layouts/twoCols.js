const TwoCols = ({ children }) => {
    return (
        <div className="grid gap-6" style={{ gridTemplateColumns: '1fr 250px' }}>
            {children}
        </div>
    );
};
export default TwoCols;
