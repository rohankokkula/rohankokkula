import GridItem from './item';

const Grid = ({ gridClasses, gridItemClasses, arrow, data }) => {
    return (
        <div className={`grid ${gridClasses}`}>
            {data?.map(({ title, excerpt, category, slug }) => {
                return (
                    <GridItem
                        gridItemClasses={gridItemClasses}
                        arrow={arrow}
                        key={title}
                        title={title ?? 'Missing Title'}
                        excerpt={excerpt}
                        category={category ?? 'Botpress'}
                        slug={slug ?? '/'}
                    />
                );
            })}
        </div>
    );
};

export default Grid;
