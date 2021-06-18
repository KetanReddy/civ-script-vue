export class DLC {
    constructor (id: number, displayName: string) {
      this.id = id
      this.displayName = displayName

    }
    id: number;
    displayName: string;
}

export const DLCs: Array<DLC>  = [
    {
        id: 1,
        displayName: "Aztec Civilization Pack"
    },
    {
        id: 2,
        displayName: "Poland Civilization & Scenario Pack"
    },
    {
        id: 3,
        displayName: "Australia Civilization & Scenario Pack"
    },
    {
        id: 4,
        displayName: "Persia and Macedon Civilization & Scenario Pack"
    },
    {
        id: 5,
        displayName: "Nubia Civilization & Scenario Pack"
    },
    {
        id: 6,
        displayName: "Khmer and Indonesia Civilization & Scenario Pack"
    },
    {
        id: 7,
        displayName: "Maya & Gran Colombia Pack"
    },
    {
        id: 8,
        displayName: "Ethiopia Pack"
    },
    {
        id: 9,
        displayName: "Byzantium & Gaul Pack"
    },
    {
        id: 10,
        displayName: "Babylon Pack"
    },
    {
        id: 11,
        displayName: "Vietnam & Kublai Khan Pack"
    },
    {
        id: 12,
        displayName: "Portugal Pack"
    }  
]