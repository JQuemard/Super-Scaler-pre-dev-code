export default class audioHandler{

   


    constructor (srcin){   
         this.src = srcin;    
    }

    play()
    {
        let sound = new Audio();
        sound.src = this.src;
        sound.play();

    }


}
