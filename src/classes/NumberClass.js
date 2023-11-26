class Num {
    constructor(val,index){
    this.val = val;
    this.selected = false;
    this.index = index;
    }
    clone(){
        var cloneNum = new Num(this.val,this.index);
        cloneNum.selected = this.selected;
        return cloneNum;
    }
}

export default Num;