import { DLC } from "./DLC"

export class Player {
    constructor (id: number, displayName: string, excludedDLCs: Array<DLC>) {
      this.id = id
      this.displayName = displayName
      this.excludedDLCs = excludedDLCs
    }
    id: number;
    displayName: string;
    excludedDLCs: Array<DLC>;
}