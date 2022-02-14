import Header from '../components/header';

const Layout = ({ children, overflowX }) => {
    return (
        <>
            <Header />
            <main className={`${overflowX} main-content `}>{children}</main>
        </>
    );
};

export default Layout;
