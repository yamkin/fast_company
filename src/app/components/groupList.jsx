import React from "react";
import PropTypes from "prop-types";

function GroupList({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) {
    if (Array.isArray(items)) {
        return items.map((item) => (
            <li
                className={
                    "list-group-item" + (item === selectedItem ? " active" : "")
                }
                key={item[valueProperty]}
                onClick={() => onItemSelect(item)}
                role="button"
            >
                {item[contentProperty]}
            </li>
        ));
    } else {
        return (
            <ul className="list-group">
                {Object.keys(items).map((item) => (
                    <li
                        key={items[item][valueProperty]}
                        className={
                            "list-group-item" +
                            (items[item] === selectedItem ? " active" : "")
                        }
                        onClick={() => onItemSelect(items[item])}
                        role="button"
                    >
                        {items[item][contentProperty]}
                    </li>
                ))}
            </ul>
        );
    }
}
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};
GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;