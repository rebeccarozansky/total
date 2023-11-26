class CurrentLevel{
    constructor(level){
        this.level = level;
    }
    clone(){
        var cloneLvl = new CurrentLevel();
        cloneLvl.level = this.level;
        return cloneLvl;     
    }
}

export default CurrentLevel;