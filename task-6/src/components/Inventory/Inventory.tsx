import {FC} from 'react';
import { InventoryItem } from '../../types/types.ts';
import Item from "../Item/Item.tsx";
// import Cell from "../Cell/Cell.tsx";
import './Inventory.css';

interface InventoryProps {
    items: InventoryItem[];
    width: number;
    height: number;
}

const Inventory: FC<InventoryProps> = ({items, width, height}) => {
    const gridTemplateColumns = `repeat(${width}, 50px)`;
    const gridTemplateRows = `repeat(${height}, 50px)`;
    const inventoryStyle = {
        display: 'grid',
        gridTemplateColumns: gridTemplateColumns,
        gridTemplateRows: gridTemplateRows,
        width: 'fit-content',
    }

    return (
        <div className='inventory' style={inventoryStyle}>
            {items.map(item => (
                <Item key={item.id} item={item}/>
            ))}
        </div>
    );
};

export default Inventory;