import {ChangeEvent, useEffect, useState} from "react";
import Inventory from "./components/Inventory/Inventory.tsx";
import {InventoryItem} from "./types/types.ts";
import './App.css';

const inventoryWidth = 12;
const inventoryHeight = 8;

function App() {
    const [inventoryData, setInventoryData] = useState<InventoryItem[]>([]);
    const [selectedFile, setSelectedFile] = useState<string>('items1.json');

    const validateInventory = (data: InventoryItem[]) => {
        if (!data  || !Array.isArray(data) || !data.length) {
            return false;
        }
        const placedItems = new Array(inventoryWidth * inventoryHeight).fill(false);

        for (let item of data) {
            if (!item || !item.position || !item.width || !item.height) {
                return false;
            }
            const startX = item.position.x;
            const startY = item.position.y;

            for (let y = startY; y < startY + item.height; y++) {
                for (let x = startX; x < startX + item.width; x++) {
                    const position = y * inventoryWidth + x;

                    if (x >= inventoryWidth || y >= inventoryHeight || placedItems[position]) {
                        return false;
                    }
                    placedItems[position] = true;
                }
            }
        }

        return true;
    };

    useEffect(() => {
        const loadInventory = async () => {
            try {
                const response = await fetch(`/${selectedFile}`);
                const data = await response.json();

                if (data && validateInventory(data)) {
                    setInventoryData(data);
                } else {
                    console.error('Ошибка');
                }
            } catch(e) {
                console.error(e);
            }
        }

        loadInventory();
    }, [selectedFile]);

    const handleFileChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedFile(event.target.value)
    }

    return (
        <>
            <h1 className='title'>Игровой инвентарь</h1>
            <select value={selectedFile} onChange={handleFileChange}>
                <option value="items1.json">Инвентарь 1</option>
                <option value="items2.json">Инвентарь 2</option>
                <option value="items3.json">Инвентарь 3</option>
            </select>
            <Inventory items={inventoryData} width={inventoryWidth} height={inventoryHeight}/>
        </>
    );
}

export default App;
