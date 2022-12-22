import { Coordinate } from "../Model/Model";

var BOXSIZE = 70;
const OFFSET = 8;

export class Square{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    contains(x, y) {
        return x >= this.x && x <= (this.x + this.width) && y >= this.y && y <= (this.y + this.height);
    }
}

export function computeSquare(Cell){
    let c = Cell.location();
    return new Square(BOXSIZE*c.column, BOXSIZE*c.row, 
                         Cell.width*6, Cell.height*6);
  }





export function drawConfig(ctx, Configuration, showLabels, Ninja){
    ctx.shadowColor = 'black';

   // console.log(Configuration.Ninja[0])


    Configuration.cells.forEach(Cell =>{
        //console.log(Cell)
        //console.log(Cell.location())
        let square = computeSquare(Cell);

        ctx.fillStyle = 'white'



        ctx.fillRect(square.x, square.y, square.width, square.height)
    })

    Configuration.keys.forEach(Key =>{
        //console.log(Key.location())
        let keySquare = computeSquare(Key);
//
        ctx.fillStyle = Key.color;
//
        ctx.fillRect(keySquare.x + 20, keySquare.y + 20, keySquare.width, keySquare.height)
    })

    //if(Configuration.Ninja[0].inventory !== false){
    //    let keySquare = computeSquare(Configuration.Ninja[0].inventory);
    //    ctx.fillStyle = 'black'
    //    ctx.fillRect(keySquare.x + 20, keySquare.y + 20, keySquare.width, keySquare.height)
//
    //}

    //Configuration.keys.forEach(Key =>{
    //    if(Configuration.pickupkey()){
     //       let keySquare = computeSquare(Key);
     //       ctx.fillStyle = 'black';
     //       ctx.fillRect(keySquare.x, keySquare.y, keySquare.width, keySquare.height)
//
    //    }
    //})

    

    Configuration.doors.forEach(Door =>{
        //console.log(Door)
        let doorSquare = computeSquare(Door);

        ctx.fillStyle = 'black';

        ctx.fillRect(doorSquare.x, doorSquare.y, doorSquare.width, doorSquare.height)
    })


    Configuration.doors.forEach(Door =>{
        //console.log(Door)
        let doorSquare = computeSquare(Door);

        ctx.fillStyle = Door.color;

        ctx.fillRect(doorSquare.x + 5.5, doorSquare.y + 5.5, doorSquare.width/1.25, doorSquare.height/1.25)
    })

    Configuration.doors.forEach(Door =>{
        //console.log(Door)
        let doorSquare = computeSquare(Door);

        ctx.fillStyle = 'white';

        ctx.fillRect(doorSquare.x + 20, doorSquare.y + 20, doorSquare.width/3, doorSquare.height/3)
    })


    Configuration.walls.forEach(Wall =>{
        //console.log(Wall)
        //console.log(Wall.location())
        let wallSquare = computeSquare(Wall)

        ctx.fillStyle = 'black'

        ctx.fillRect(wallSquare.x, wallSquare.y, wallSquare.width, wallSquare.height)
    })

    Configuration.Ninja.forEach(Ninja =>{
        //console.log(Ninja)
        let ninjaSquare = computeSquare(Ninja)

        ctx.fillStyle = 'purple'

        ctx.fillRect(ninjaSquare.x, ninjaSquare.y, ninjaSquare.width, ninjaSquare.height)

        if(Ninja.inventory !== false){
            ctx.fillStyle = Ninja.inventory.color
            ctx.fillRect(ninjaSquare.x + 20, ninjaSquare.y + 20, ninjaSquare.width/3, ninjaSquare.height/3)
        }
    })

    Configuration.Ninja.forEach(Ninja =>{
     //   //console.log(Ninja)
        let ninjaSquare = computeSquare(Ninja)

        ctx.fillStyle = 'black'

        ctx.fillRect(ninjaSquare.x + 20, ninjaSquare.y + 5, ninjaSquare.width/3.5, ninjaSquare.height/3.5)

        if(Ninja.inventory !== false){
            ctx.fillStyle = Ninja.inventory.color
            ctx.fillRect(ninjaSquare.x + 20, ninjaSquare.y + 20, ninjaSquare.width/3, ninjaSquare.height/3)
        }

    })

    Configuration.Ninja.forEach(Ninja =>{
        //   //console.log(Ninja)
           let ninjaSquare = computeSquare(Ninja)
   
           ctx.fillStyle = 'black'
   
           ctx.fillRect(ninjaSquare.x + 26, ninjaSquare.y+10, ninjaSquare.width/12, ninjaSquare.height-25)
   
           if(Ninja.inventory !== false){
               ctx.fillStyle = Ninja.inventory.color
               ctx.fillRect(ninjaSquare.x + 20, ninjaSquare.y + 20, ninjaSquare.width/3, ninjaSquare.height/3)
           }
   
       })

       Configuration.Ninja.forEach(Ninja =>{
        //   //console.log(Ninja)
           let ninjaSquare = computeSquare(Ninja)
   
           ctx.fillStyle = 'black'
   
           ctx.fillRect(ninjaSquare.x+6, ninjaSquare.y + 30, ninjaSquare.width - 15, ninjaSquare.height/16)
   
           if(Ninja.inventory !== false){
               ctx.fillStyle = Ninja.inventory.color
               ctx.fillRect(ninjaSquare.x + 20, ninjaSquare.y + 20, ninjaSquare.width/3, ninjaSquare.height/3)
           }
   
       })

       Configuration.Ninja.forEach(Ninja =>{
        //   //console.log(Ninja)
           let ninjaSquare = computeSquare(Ninja)
   
           ctx.fillStyle = 'black'
   
           ctx.fillRect(ninjaSquare.x+16, ninjaSquare.y + 45, ninjaSquare.width - 40, ninjaSquare.height/16)
   
           if(Ninja.inventory !== false){
               ctx.fillStyle = Ninja.inventory.color
               ctx.fillRect(ninjaSquare.x + 20, ninjaSquare.y + 20, ninjaSquare.width/3, ninjaSquare.height/3)
           }
   
       })

       Configuration.Ninja.forEach(Ninja =>{
        //   //console.log(Ninja)
           let ninjaSquare = computeSquare(Ninja)
   
           ctx.fillStyle = 'black'
   
           ctx.fillRect(ninjaSquare.x + 35, ninjaSquare.y+45, ninjaSquare.width/12, ninjaSquare.height-50)
   
           if(Ninja.inventory !== false){
               ctx.fillStyle = Ninja.inventory.color
               ctx.fillRect(ninjaSquare.x + 20, ninjaSquare.y + 20, ninjaSquare.width/3, ninjaSquare.height/3)
           }
   
       })

       
       Configuration.Ninja.forEach(Ninja =>{
        //   //console.log(Ninja)
           let ninjaSquare = computeSquare(Ninja)
   
           ctx.fillStyle = 'black'
   
           ctx.fillRect(ninjaSquare.x+15, ninjaSquare.y+45, ninjaSquare.width/12, ninjaSquare.height-50)
   
           if(Ninja.inventory !== false){
               ctx.fillStyle = Ninja.inventory.color
               ctx.fillRect(ninjaSquare.x + 20, ninjaSquare.y + 20, ninjaSquare.width/3, ninjaSquare.height/3)
           }
   
       })

       Configuration.Ninja.forEach(Ninja =>{
        //   //console.log(Ninja)
           let ninjaSquare = computeSquare(Ninja)
   
           ctx.fillStyle = 'lightblue'
   
           ctx.fillRect(ninjaSquare.x+24, ninjaSquare.y+7, ninjaSquare.width/20, ninjaSquare.height-57)
   
           if(Ninja.inventory !== false){
               ctx.fillStyle = Ninja.inventory.color
               ctx.fillRect(ninjaSquare.x + 20, ninjaSquare.y + 20, ninjaSquare.width/3, ninjaSquare.height/3)
           }
   
       })

       Configuration.Ninja.forEach(Ninja =>{
        //   //console.log(Ninja)
           let ninjaSquare = computeSquare(Ninja)
   
           ctx.fillStyle = 'lightblue'
   
           ctx.fillRect(ninjaSquare.x+30, ninjaSquare.y+7, ninjaSquare.width/20, ninjaSquare.height-57)
   
           if(Ninja.inventory !== false){
               ctx.fillStyle = Ninja.inventory.color
               ctx.fillRect(ninjaSquare.x + 20, ninjaSquare.y + 20, ninjaSquare.width/3, ninjaSquare.height/3)
           }
   
       })

       Configuration.Ninja.forEach(Ninja =>{
        //   //console.log(Ninja)
           let ninjaSquare = computeSquare(Ninja)
   
           ctx.fillStyle = 'white'
   
           ctx.fillRect(ninjaSquare.x+27, ninjaSquare.y+12, ninjaSquare.width/20, ninjaSquare.height-57)
   
           if(Ninja.inventory !== false){
               ctx.fillStyle = Ninja.inventory.color
               ctx.fillRect(ninjaSquare.x + 20, ninjaSquare.y + 20, ninjaSquare.width/3, ninjaSquare.height/3)
           }
   
       })

       
       Configuration.Ninja.forEach(Ninja =>{
        //   //console.log(Ninja)
           let ninjaSquare = computeSquare(Ninja)
   
           ctx.fillStyle = 'lightblue'
   
           ctx.fillRect(ninjaSquare.x+31, ninjaSquare.y+17, ninjaSquare.width/20, ninjaSquare.height-57)
   
           if(Ninja.inventory !== false){
               ctx.fillStyle = Ninja.inventory.color
               ctx.fillRect(ninjaSquare.x + 20, ninjaSquare.y + 20, ninjaSquare.width/3, ninjaSquare.height/3)
           }
   
       })

       Configuration.Ninja.forEach(Ninja =>{
        //   //console.log(Ninja)
           let ninjaSquare = computeSquare(Ninja)
   
           ctx.fillStyle = 'lightblue'
   
           ctx.fillRect(ninjaSquare.x+29, ninjaSquare.y+17, ninjaSquare.width/20, ninjaSquare.height-57)
   
           if(Ninja.inventory !== false){
               ctx.fillStyle = Ninja.inventory.color
               ctx.fillRect(ninjaSquare.x + 20, ninjaSquare.y + 20, ninjaSquare.width/3, ninjaSquare.height/3)
           }
   
       })

       Configuration.Ninja.forEach(Ninja =>{
        //   //console.log(Ninja)
           let ninjaSquare = computeSquare(Ninja)
   
           ctx.fillStyle = 'lightblue'
   
           ctx.fillRect(ninjaSquare.x+27, ninjaSquare.y+17, ninjaSquare.width/20, ninjaSquare.height-57)
   
           if(Ninja.inventory !== false){
               ctx.fillStyle = Ninja.inventory.color
               ctx.fillRect(ninjaSquare.x + 20, ninjaSquare.y + 20, ninjaSquare.width/3, ninjaSquare.height/3)
           }
   
       })

       Configuration.Ninja.forEach(Ninja =>{
        //   //console.log(Ninja)
           let ninjaSquare = computeSquare(Ninja)
   
           ctx.fillStyle = 'lightblue'
   
           ctx.fillRect(ninjaSquare.x+25, ninjaSquare.y+17, ninjaSquare.width/20, ninjaSquare.height-57)
   
           if(Ninja.inventory !== false){
               ctx.fillStyle = Ninja.inventory.color
               ctx.fillRect(ninjaSquare.x + 20, ninjaSquare.y + 20, ninjaSquare.width/3, ninjaSquare.height/3)
           }
   
       })

       Configuration.Ninja.forEach(Ninja =>{
        //   //console.log(Ninja)
           let ninjaSquare = computeSquare(Ninja)
   
           ctx.fillStyle = 'lightblue'
   
           ctx.fillRect(ninjaSquare.x+23, ninjaSquare.y+17, ninjaSquare.width/20, ninjaSquare.height-57)
   
           if(Ninja.inventory !== false){
               ctx.fillStyle = Ninja.inventory.color
               ctx.fillRect(ninjaSquare.x + 20, ninjaSquare.y + 20, ninjaSquare.width/3, ninjaSquare.height/3)
           }
   
       })
       
       
       

    





}

export function redrawCanvas(model, canvasObj, appObj, Ninja) {
    const ctx = canvasObj.getContext('2d');
    if (ctx === null) { console.log('hi') }    // here for testing purposes...
    
    // clear the canvas area before rendering the coordinates held in state
    ctx.clearRect( 0,0, canvasObj.width, canvasObj.height);  

    //console.log(model.Configuration);
    if (model.Configuration) { 
        drawConfig(ctx, model.Configuration, model.showLabels, Ninja);
    }
}