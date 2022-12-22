//import { computeSquare } from "../Boundary/Boundary";


export function selectNinja(model, canvas, event){
        let selected = model.Configuration.Ninja[0];
        model.Configuration.select(selected)
        return model.copy();

}

export function moveNinja(model, direction) {
       // let g = model.Configuration.Ninja[0].location()
       // if(g.row == 0)

        model.Configuration.Ninja[0].move(direction);
        model.Configuration.bruh()
        model.updateMoveCount(+1);
        model.hasWon();
        return model.copy();
}

export function pickupkeyss(model, canvas, event){
        model.Configuration.pickupkey();
        model.updateMoveCount(+1);
        //model.
        return model.copy()
}





