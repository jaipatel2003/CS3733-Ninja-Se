import { createContext } from "react";

export class MoveType{
    constructor(dr,dc){
        this.deltar = dr;
        this.deltac = dc;
    }

        
    static parse(s) {
        if ((s === "down")  || (s === "Down"))   { return Down; }
        if ((s === "up")    || (s === "Up"))     { return Up; }
        if ((s === "left")  || (s === "Left"))   { return Left; }
        if ((s === "right") || (s === "Right"))  { return Right; }
        
        return NoMove;
    }
}


export const Down = new MoveType(1, 0, "down");
export const Up = new MoveType(-1, 0, "up");
export const Left = new MoveType(0, -1, "left");
export const Right = new MoveType(0, 1, "right");
export const NoMove = new MoveType(0, 0, "*");  // no move is possible



export class Coordinate{
    constructor(row, column){
        this.row = row;
        this.column = column;
    }

}

export class Cell{
    constructor(key, wall, row, column, door){
        this.key = key;
        this.wall = wall;
        this.row = row;
        this.column = column;
        this.width = 10;
        this.height = 10;
        this.door = door;
    }

    place(row, column){
        this.row = row;
        this.column = column;
    }


    *coordinates(){
        for(let r = 0; r < this.height; r++){
            for(let c = 0; c < this.width; c++){
                yield new Coordinate(this.row + r, this.column + c);
            }
        }
    }

        
    contains(coord) {
        let cs = [...this.coordinates()];   // javascript one liner.... turn all of those yield into a list.
        for (let c of cs) {
            if (c.row === coord.row && c.column === coord.column) { 
                return true; 
            } 
        }
        
        return false;
    }


    location(){
        return new Coordinate(this.row, this.column);
    }

    copy(){
        let c = new Cell(this.key, this.wall, this.row, this.column, this.door);
        c.place(this.row, this.column);
        return c;
    }
}

export class Configuration{
    constructor(numRows, numColumns, level){
        this.numColumns = numColumns;
        this.numRows = numRows;
        this.level = level;
    }

    initialize(cells){
        this.cells = cells.map(c => c.copy());
    }

    initializekeys(keys){
        this.keys = keys.map(k => k.copy())
    }

    initializeDoors(doors){
        this.doors = doors.map(d => d.copy())
    }

    initializeWalls(walls){
        this.walls = walls.map(w => w.copy())
    }

    initializeNinja(Ninja){
        this.Ninja = Ninja.map(n => n.copy())
    }

    clone(){
        let copy = new Configuration(this.numRows, this.numColumns, this.level);
        copy.cells = [];
        copy.doors = [];
        copy.keys = [];
        copy.Ninja = [];
        copy.walls = [];

        for (let c of this.cells) {
            let dup = c.copy();
            copy.cells.push(dup);
        }

        for (let d of this.doors) {
            let dups = d.copy();
            copy.doors.push(dups);
        }

        for (let k of this.keys) {
            let dupss = k.copy();
            copy.keys.push(dupss);
        }

        for (let n of this.Ninja) {
            let dupn = n.copy();
            copy.Ninja.push(dupn);
        }

        for (let w of this.walls) {
            let dupww = w.copy();
            copy.walls.push(dupww);
        }

        return copy;

    }

    adjacency(){
        for(let d of this.doors){

        if(this.Ninja[0].location().row === d.row && this.Ninja[0].location().column === d.column - 1){

        }
    }
}

    bruh(){
    for(let d of this.doors){
        if(d.row === this.Ninja[0].row && d.column === this.Ninja[0].column){
            this.Ninja[0].inventory = false;
            //console.log(d)
            var index = this.doors.indexOf(d);
            this.doors.splice(index,1)

            //this.doors.remove(d)
        }
    }
}




    
    pickupkey(){
        let alreadyhaskey = false;
        let oldkey = 0;
        if(this.Ninja[0].inventory !== false){
            alreadyhaskey = true;
            oldkey = this.Ninja[0].inventory
        }
        let f = this.Ninja[0]
        let moves = []
        let coord = f.location()
        for(let k of this.keys){
            if(parseInt(k.location().row) === coord.row && parseInt(k.location().column) === coord.column){
                //console.log('ello')
                this.Ninja[0].inventory = k
                var index = this.keys.indexOf(k);
                //console.log(index)
                this.keys.splice(index,1)
                //k.column = coord.column
                //k.row = coord.row
                //console.log(this.Ninja[0].inventory)
            }
        }
        if(alreadyhaskey === true){
            this.keys.push(oldkey)
        }
    }

    availablePickUp(){
        let f = this.Ninja[0]
        let coord = f.location()
        for(let k of this.keys){
            if(parseInt(k.location().row) === coord.row && parseInt(k.location().column) === coord.column){
                return true;
        }
    }
}

    availableMoves(model){
        let f = this.Ninja[0];
        let moves = [];
        let coord = f.location();
        //console.log(this.walls)
       // console.log(this.walls[0].location())
       //console.log(this.Ninja[0].inventory)
       //console.log(this.Ninja[0].inventory)
       //console.log(this.numColumns)
       //console.log(this.level)

        
        //LEFT
        let available = true;
        let g = new Coordinate(coord.row, coord.column - 1)

        //let f = this.Ninja[0]
        //let moves = []
        //let coord = f.location()

        //if(this.walls.length === 0){
        //    if(coord.column > 0 && coord.column < this.numColumns){
         //       available = true;
         //   }
         //   else{
          //      available = false
         //   }
        //    if(available){
         //       moves.push(Left)
         //    }
        //}

            for(let x of this.walls){
                //console.log('for-loop')
                //console.log(x.location())
                //console.log(g)
                if(coord.column <=0){
                    available = false;
                }
                if(parseInt(x.location().row) === g.row && parseInt(x.location().column) === g.column){
                    //console.log('available false');
                    available = false;
                }
                //else if(x.location() !== g){
                 //   console.log('available true')
                 //   available = true;
                    //moves.push(Left)
                //}
                
            }

        for(let d of this.doors){
           // console.log('for-loop')
            //console.log(x.location())
           // console.log(g)
            if(coord.column <=0){
                available = false;
            }
            if(parseInt(d.location().row) === g.row && parseInt(d.location().column) === g.column){
                //console.log('available false');
                available = false;
                if(d.color === f.inventory.color){
                    available = true;
                }
            }
            //if(d.color === f.inventory.color){
            //    available = true;
            //}
  
        }

    if(available){
        moves.push(Left)
    }













        //UPPPPPPPP
        //if(this.walls.length === 0){
        //    if(coord.row > 0 && coord.row < this.numRows){
         //       available = true;
         //   }
         //   else{
         //       available = false
          //  }
         ///   if(available){
         //       moves.push(Up)
         //    }
      //  }

        available = true;
        let s = new Coordinate(coord.row - 1, coord.column)
        //console.log(g)
        //let x = this.walls[0]
        //console.log(x.location())
            for(let x of this.walls){
               // console.log('for-loop')
                //console.log(x.location())
                //console.log(s)
                if(coord.row <=0){
                    available = false;
                }
                if(parseInt(x.location().row) === s.row && parseInt(x.location().column) === s.column){
                    //console.log('available false');
                    available = false;
                }
                //else if(x.location() !== g){
                 //   console.log('available true')
                 //   available = true;
                    //moves.push(Left)
                //}
                
            }

        
            for(let d of this.doors){
                //console.log('for-loop')
                //console.log(x.location())
               // console.log(h)
                if(coord.row <=0){
                    available = false;
                }
                if(parseInt(d.location().row) === s.row && parseInt(d.location().column) === s.column){
                    //console.log('available false');
                    available = false;
                    if(d.color === f.inventory.color){
                        available = true;
                    }
                }
                //else if(x.location() !== g){
                 //   console.log('available true')
                 //   available = true;
                    //moves.push(Left)
                //}
                
            }    

        if(available){
            moves.push(Up)
        }















        //available = false;
        //if(coord.row > 0){
        //    available = true;
        //}
        //if(available){
        //    moves.push(Up)
        //}

        //RIGHTTTT

        available = true;
        let h = new Coordinate(coord.row, coord.column + 1)
        //console.log(g)
        //let x = this.walls[0]
        //console.log(x.location())
            for(let x of this.walls){
                //console.log('for-loop')
                //console.log(x.location())
                //console.log(h)
                if(coord.column+1 >= this.numColumns){
                    available = false;
                }
                if(parseInt(x.location().row) === h.row && parseInt(x.location().column) === h.column){
                    //console.log('available false');
                    available = false;
                }
                //else if(x.location() !== g){
                 //   console.log('available true')
                 //   available = true;
                    //moves.push(Left)
                //}
                
            }

            for(let d of this.doors){
                //console.log('for-loop')
                //console.log(x.location())
                //console.log(h)
                if(coord.column+1 >= this.numColumns){
                    available = false;
                }
                if(parseInt(d.location().row) === h.row && parseInt(d.location().column) === h.column){
                    //console.log('available false');
                    available = false;
                    if(d.color === f.inventory.color){
                        available = true;
                    }
                }
                //else if(x.location() !== g){
                 //   console.log('available true')
                 //   available = true;
                    //moves.push(Left)
                //}
            }

            for(let k of this.keys){
                if(coord.column+1 >= this.numColumns){
                    available = false;
                }
                if(parseInt(k.location().row) === coord.row && parseInt(k.location().column) === coord.column){
                    //console.log('hi')
                    
                }
            }

        if(available){
            moves.push(Right)
        }














       // available = false;
       // if(coord.column+1 < this.numColumns){
       //     available = true;
       // }
       // if(available){
        //    moves.push(Right)
        //}

        //DOWNNNNNN
       // available = false;
       // if(coord.row+1 < this.numRows){
       //     available = true;
       // }
       // if(available){
       //     moves.push(Down)
       // }

        available = true;
        let q = new Coordinate(coord.row+1, coord.column)
        //console.log(g)
        //let x = this.walls[0]
        //console.log(x.location())
            for(let x of this.walls){
               // console.log('for-loop')
               // console.log(x.location())
               // console.log(q)
                if(coord.row+1 >= this.numRows){
                    available = false;
                }
                if(parseInt(x.location().row) === q.row && parseInt(x.location().column) === q.column){
                    //console.log('available false');
                    available = false;
                }
   
            }

            for(let d of this.doors){
                //console.log('for-loop')
                //console.log(x.location())
               // console.log(h)
                if(coord.row+1 >= this.numRows){
                    available = false;
                }
                if(parseInt(d.location().row) === q.row && parseInt(d.location().column) === q.column){
                    //console.log('available false');
                    available = false;
                    if(d.color === f.inventory.color){
                        available = true;
                    }
                }
                //else if(x.location() !== g){
                 //   console.log('available true')
                 //   available = true;
                    //moves.push(Left)
                //}
                
            } 
        if(available){
            moves.push(Down)
        }









        return moves;
    }
}



export class Ninja{
    constructor(inventory, row, column){
        this.inventory = inventory;
        this.row = row;
        this.column = column;
        this.height = 10;
        this.width = 10;
    }

    move(direction) {
        this.row += direction.deltar;
        this.column += direction.deltac;
        //console.log(Configuration.doors[0])
        if(this.inventory !== false){
            this.inventory.row += direction.deltar;
            this.inventory.column += direction.deltac;
        }

    }

    place(row, column){
        this.row = row;
        this.column = column;
    }


    *coordinates(){
        for(let r = 0; r < this.height; r++){
            for(let c = 0; c < this.width; c++){
                yield new Coordinate(this.row + r, this.column + c);
            }
        }
    }

        
    contains(coord) {
        let cs = [...this.coordinates()];   // javascript one liner.... turn all of those yield into a list.
        for (let c of cs) {
            if (c.row === coord.row && c.column === coord.column) { 
                return true; 
            } 
        }
        
        return false;
    }

    
    location(){
        return new Coordinate(this.row, this.column);
    }

    copy(){
        let c = new Ninja(this.inventory, this.row, this.column);
        c.place(this.row, this.column);
        return c;
    }





}

export class Key{
    constructor(exists, color, row, column){
        this.exists = exists;
        this.row = row;
        this.column = column;
        this.color = color;
        this.height = 3;
        this.width = 3;
    }

    place(row, column){
        this.row = row;
        this.column = column;
    }

    *coordinates(){
        for(let r = 0; r < this.height; r++){
            for(let c = 0; c < this.width; c++){
                yield new Coordinate(this.row + r, this.column + c);
            }
        }
    }

        
    contains(coord) {
        let cs = [...this.coordinates()];   // javascript one liner.... turn all of those yield into a list.
        for (let c of cs) {
            if (c.row === coord.row && c.column === coord.column) { 
                return true; 
            } 
        }
        
        return false;
    }


    location(){
        return new Coordinate(this.row, this.column);
    }

    copy(){
        let c = new Key(this.exists, this.color, this.row, this.column);
        c.place(this.row, this.column);
        return c;
    }
}



export class Wall{
    constructor(exists, row, column){
        this.exists = exists;
        this.row = row;
        this.column = column;
        this.height = 10;
        this.width = 10;
    }

    place(row, column){
        this.row = row;
        this.column = column;
    }

    *coordinates(){
        for(let r = 0; r < this.height; r++){
            for(let c = 0; c < this.width; c++){
                yield new Coordinate(this.row + r, this.column + c);
            }
        }
    }

    contains(coord) {
        let cs = [...this.coordinates()];   // javascript one liner.... turn all of those yield into a list.
        for (let c of cs) {
            if (c.row === coord.row && c.column === coord.column) { 
                return true; 
            } 
        }
        
        return false;
    }

    

    location(){
        return new Coordinate(this.row, this.column);
    }

    copy(){
        let c = new Wall(this.exists, this.row, this.column);
        c.place(this.row, this.column);
        return c;
    }




}

export class Door{
    constructor(exists, color, row, column){
        this.exists = exists;
        this.row = row;
        this.column = column;
        this.color = color;
        this.height = 10;
        this.width = 10;
    }

    place(row, column){
        this.row = row;
        this.column = column;
    }

    *coordinates(){
        for(let r = 0; r < this.height; r++){
            for(let c = 0; c < this.width; c++){
                yield new Coordinate(this.row + r, this.column + c);
            }
        }
    }

    contains(coord) {
        let cs = [...this.coordinates()];   // javascript one liner.... turn all of those yield into a list.
        for (let c of cs) {
            if (c.row === coord.row && c.column === coord.column) { 
                return true; 
            } 
        }
        
        return false;
    }


    location(){
        return new Coordinate(this.row, this.column);
    }

    copy(){
        let c = new Door(this.exists, this.color, this.row, this.column);
        c.place(this.row, this.column);
        return c;
    }



}

export default class Model {
    // info is going to be JSON-encoded puzzle
    constructor(info) {
        this.initialize(info);
        this.info = info;
    }
    
    initialize(info) {
        let numRows = parseInt(info.Configuration.numRows);
        let numColumns = parseInt(info.Configuration.numColumns);
        let level = parseInt(info.Configuration.level)
        let row = info.Ninja.row
        let column = info.Ninja.column
        let inventory = info.Ninja.inventory
        this.victory = false;
        this.numMoves = 0;
        this.key = "None"
        this.Configuration = new Configuration(numRows, numColumns, level);
        this.Ninja = new Ninja(inventory, row, column)
        this.xyz = "None"
        this.level = level;
        
        var allCells = [];
        for (let c of info.cells) {
                allCells.push(new Cell(c.key, c.wall, parseInt(c.row), parseInt(c.column), c.door));
        }

        var allKeys = [];
        for (let k of info.keys){
            allKeys.push(new Key(k.exists, k.color, parseInt(k.row), parseInt(k.column)))
        }

        var allDoors = [];
        for (let d of info.doors){
            allDoors.push(new Door(d.exists, d.color, parseInt(d.row), parseInt(d.column)))
        }

        var allWalls = [];
        for (let w of info.walls){
            allWalls.push(new Wall(w.exists, w.row, w.column))
        }

        var allNinja = [];
        for (let n of info.Ninja){
            allNinja.push(new Ninja(n.inventory, n.row, n.column))
        }
        
        //for (let loc of info.locations) {
        //    let coord = new Coordinate (parseInt(loc.location.row), parseInt(loc.location.column));
        //    
        //    let idx = allPieces.findIndex(piece => (piece.label === loc.piece));
        //    allPieces[idx].place(coord.row, coord.column);
        //}
        
        this.Configuration = new Configuration(numRows, numColumns, level)
        this.Ninja = new Ninja(inventory, row, column)
        this.Configuration.initialize(allCells);
        this.Configuration.initializekeys(allKeys);
        this.Configuration.initializeDoors(allDoors)
        this.Configuration.initializeWalls(allWalls);
        this.Configuration.initializeNinja(allNinja)

        this.key = "None";
    }
    
    updateMoveCount(delta) {
        this.numMoves += delta;
    }

    //updateKey(){
      //  this.key = 
    //}

    
    numberMoves() {
        return this.numMoves;
    }

    hasWon(){
        if(this.Configuration.doors.length === 0){
            this.victory = true;
            return this.victory
        }
    }

    
    copy() {
        let c = new Model(this.info);                 
        c.Configuration = this.Configuration.clone();
        c.numMoves = this.numMoves;
        return c;
    }

    available(direction){
        let allMoves = this.Configuration.availableMoves();
        return allMoves.includes(direction);
    }

    canpickup(){
        return this.Configuration.availablePickUp();
    }
}