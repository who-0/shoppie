import React from "react";
import Item from "./styles.component";

const ActivityItem = ({name,order=false,user=false,time}) => {
    return (
        <Item>
            <td>{name}</td>
            {order && (<td>order</td>)}
            {user && (<td>created</td>)}
            <td>{time}</td>
        </Item>
    )
}

export default ActivityItem;