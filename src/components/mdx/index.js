import dynamic from 'next/dynamic';

// Layouts
const ThreeCols = dynamic(() => import('./layouts/threeCols.js'));
const TwoCols = dynamic(() => import('./layouts/twoCols.js'));
// Compnents
const Main = dynamic(() => import('./main'));
const Sections = dynamic(() => import('./sections'));
const Sidebar = dynamic(() => import('./elements/sidebar'));
const RelatedContent = dynamic(() => import('./elements/relatedContent'));
// Media
const Iframe = dynamic(() => import('./media/iframe.js'));
const Img = dynamic(() => import('./media/img.js'));

export const MdxComponents = {
    ThreeCols: (props) => <ThreeCols {...props} />,
    TwoCols: (props) => <TwoCols {...props} />,
    Main: (props) => <Main {...props} />,
    Sidebar: (props) => <Sidebar {...props} />,
    Sections: (props) => <Sections {...props} />,
    RelatedContent: (props) => <RelatedContent {...props} />,
    Iframe: (props) => <Iframe {...props} />,
    Img: (props) => <Img {...props} />
};
