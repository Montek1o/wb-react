export interface InventoryItem {
    id: number;
    name: string;
    type: 'potions' | 'equipment' | 'weapons';
    rarity: 'common' | 'rare' | 'epic';
    height: number;
    width: number;
    position: {
        x: number;
        y: number;
    };
}