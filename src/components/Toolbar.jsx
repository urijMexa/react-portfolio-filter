import React from 'react';

function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props;

    return (
        <div className="toolbar">
            {filters.map((filter) => (
                <button
                    key={filter}
                    className={filter === selected ? 'toolbar-btn active' : 'toolbar-btn'}
                    onClick={() => onSelectFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}

export default Toolbar;
