class Operation {
    constructor(sign){
        this.sign = sign;
        this.selected = false;
    }
    clone(){
        var cloneOp = new Operation(this.sign);
        cloneOp.selected = this.selected;
        return cloneOp;
    }
}


export default Operation;