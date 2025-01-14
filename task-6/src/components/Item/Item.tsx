import {FC} from 'react';
import {InventoryItem} from "../../types/types.ts";
import './Item.css';

interface ItemProps {
    item: InventoryItem;
}

const Item: FC<ItemProps> = ({item}) => {
    const itemClasses = `item item-${item.rarity} item-${item.type}`;

    return (
        <div className={itemClasses} style={{
            gridArea: `${item.position.y + 1} / ${item.position.x + 1} / span ${item.height} / span ${item.width}`,
        }}>
            {item.name}
        </div>
    );
};

export default Item;