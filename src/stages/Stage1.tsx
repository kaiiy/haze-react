type RawCell = "S" | "G" | "O" | "X"
type RawCells = RawCell[][]
const rawCellsConverter = (rawCells: RawCells): Cells => {
    const cells = rawCells.map((row) => row.map((cell) => {
        if (cell === "S") return { type: "white", text: "S" }
        else if (cell === "G") return { type: "white", text: "G" }
        else if (cell === "O") return { type: "white" }
        else if (cell === "X") return { type: "black" }
    }))

    // FIXME: type guard
    return cells
}


interface CellBase {
    type: "white" | "black",
    text?: string,
}

interface NormalCell extends CellBase {
    type: "white",
}

interface WallCell extends CellBase {
    type: "black"
}
interface SpecialCell extends CellBase {
    type: "white",
    text: string
}


type Cells = CellBase[][];

interface Vec2 {
    x: number;
    y: number;
}

class Board {
    private size: Vec2;
    private cells: Cells;
    private startPos: Vec2;
    private goalPos: Vec2;
    private currentPos: Vec2;

    constructor(cells: Cells) {
        this.cells = cells
        this.size = this.calInitSize()
        this.startPos = this.findStartPos()
        this.goalPos = this.findGoalPos()
        this.currentPos = this.startPos
    }

    // Initialize
    private calInitSize = (): Vec2 => {
        const x = this.cells.length
        const y = this.cells[0].length
        this.cells.forEach((row) => {
            if (row.length !== y) throw new Error("Invalid cells")
        })
        return { x, y }
    }
    private findSpecialPos = (type: "S" | "G"): Vec2 => {
        const pos = this.cells.map((row, x) => row.map((cell, y) => {
            if (cell.type == "white" && cell.text === type) return { x, y }
        })).flat()
        if (pos.length !== 1) throw new Error(`Found multiple ${type}`)
        if (pos[0] === undefined) throw new Error(`Not found ${type}`)
        return pos[0]
    }
    private findStartPos = (): Vec2 => this.findSpecialPos("S");
    private findGoalPos = (): Vec2 => this.findSpecialPos("G");
}


const RAW_CELLS: RawCells = [
    ["S", "O", "O", "X"],
    ["O", "X", "O", "O"],
    ["X", "G", "X", "O"],
    ["O", "O", "O", "O"],
]

const main = () => {
    const cells = rawCellsConverter(RAW_CELLS)
    const board = new Board(cells)
}

export const Stage1 = () => {
    return (
        <>
            <div className="absolute abs-center box-font-size text-center box-border w-40vh h-40vh line-40vh"
                border="~ solid black"
            >
                S
            </div>
        </>
    );
}