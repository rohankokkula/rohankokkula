import GridItem from './item';

const Grid = ({ gridClasses, gridItemClasses, arrow, data }) => {
    return (
        <div className={`grid ${gridClasses}`}>
            {data?.map(({ title, excerpt, slug }) => {
                return (
                    <GridItem
                        gridItemClasses={gridItemClasses}
                        arrow={arrow}
                        key={title}
                        title={title}
                        excerpt={excerpt}
                        slug={slug ?? '/'}
                    />
                );
            })}
        </div>
    );
};

export default Grid;
