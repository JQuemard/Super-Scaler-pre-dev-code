export default class polygon{

   


    constructor (color, x1, y1, x2, y2, x3, y3, x4, y4){   
        this.xy1 = [x1, y1]
        this.xy2 = [x2, y2]
        this.xy3 = [x3, y3]
        this.xy4 = [x4, y4]
        this.color = color
    }



    draw(ctx){ ///draws the polygon
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.xy1[0], this.xy1[1]);
        ctx.lineTo(this.xy2[0], this.xy2[1]);
        ctx.lineTo(this.xy3[0], this.xy3[1]);
        ctx.lineTo(this.xy4[0], this.xy4[1]);
        ctx.closePath();
        ctx.fill();
    }

    polymorph(x1, y1, x2, y2, x3, y3, x4, y4)
    {
        this.xy1 = [x1, y1];
        this.xy2 = [x2, y2];
        this.xy3 = [x3, y3];
        this.xy4 = [x4, y4];
    }

}
