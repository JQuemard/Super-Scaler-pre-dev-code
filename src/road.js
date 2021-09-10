import polygon from "/src/polygon.js";
var canvas = document.getElementById("canvas");
export default class road extends polygon{

    constructor ()
    {   
        super("#000000");
        ///let DDZ = 4, DZ = 0, Z = 0; /// the forward of the road (normal)
        ///let DDX = 4, DX = 0, X = 0; /// the curve of the road (turns)
        ///let DDY = 4, DY = 0, Y = 0; /// the height of the road (hills)
        ///XYZ (XYZ) curves and can be represented as position.
        ///DXYZ (delta XYZ) changes linearly  and can be presented as the velocity of the position.
        ///DDXYZ (delta delta XYZ) remains constant and can be presented as the acceleration of the position.
        
        let segments = 21;



        this.polyList = [];

        for(let x = 0; x < segments; x++){
            this.polyList.push(new polygon('#222222', 0,0,0,0,0,0,0,0));
        }

    }

    draw(ctx)
    {
        ///draw each polygon in list    
        let DDZ=1; let DZ=0; let Z =0;
        let nx = canvas.width
        let ny = canvas.height;
        let staticY = 220;


        for(let i = 0; i < this.polyList.length; i++)
        {
            let color = '#222222'
            if(i % 2 == 0) 
            {
                color = '#303030'
            }

            let bLeft = [0,ny];
            let bRight= [nx,ny];
            if (i >= 1)
            {
                bLeft = (this.polyList[i-1]).xy1;
                bRight = (this.polyList[i-1]).xy2;
            }
            console.log(bLeft);
            console.log(bRight);

            
            this.polyList[i] = new polygon(color,0, ny - (staticY - Z), nx-0, ny - (staticY - Z), bRight[0], bRight[1], bLeft[0], bLeft[1])    

            DZ+=DDZ
            Z+=DZ

        }



        for (const object of this.polyList)
        {
            setTimeout(2000);
            object.draw(ctx);
        }
        
        stopcode
    }
}
