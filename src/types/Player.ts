import { Civ } from "./Civ"
import { DLC } from "./DLC"

export class Player {
    constructor (id: number, displayName: string, excludedDLCs: Array<DLC>) {
      this.id = id
      this.displayName = displayName
      this.excludedDLCs = excludedDLCs
      this.picks = new Array<Civ>()
      this.deathPick = false,
      this.finalPick = null
    }
    id: number;
    displayName: string;
    excludedDLCs: Array<DLC>;
    picks: Array<Civ>;
    deathPick: boolean;
    finalPick: Civ|null;
}