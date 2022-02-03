import dynamic from 'next/dynamic';

// Layouts
const ThreeCols = dynamic(() => import('./layouts/threeCols.js'));
const TwoCols = dynamic(() => import('./layouts/twoCols'));
// Compnents
const Main = dynamic(() => import('./main.js'));
const Sidebar = dynamic(() => import('./sidebar.js'));
const RelatedContent = dynamic(() => import('./relatedContent.js'));
// Media
const Iframe = dynamic(() => import('./media/iframe.js'));
const Img = dynamic(() => import('./media/img'));

export const MdxComponents = {
    ThreeCols: (props) => <ThreeCols {...props} />,
    TwoCols: (props) => <TwoCols {...props} />,
    Main: (props) => <Main {...props} />,
    Sidebar: (props) => <Sidebar {...props} />,
    RelatedContent: (props) => <RelatedContent {...props} />,
    Iframe: (props) => <Iframe {...props} />,
    Img: (props) => <Img {...props} />
};
