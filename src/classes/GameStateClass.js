import Num from "./NumberClass";
import Operation from "./OperationClass";

class GameClass {

    constructor(numArr, goal) {
      let temparr = [0, 0, 0, 0, 0, 0];
      for (let i = 0; i < 6; i += 1) {
        temparr[i] = new Num(numArr[i],i);
      }
      this.numAr = numArr
      this.state = [...temparr]; // Use the spread operator to create a copy
      this.signs = [new Operation('+'), new Operation('-'),new Operation('*'),new Operation('/')]
      this.selectedValues = [-1,-1]
      this.selectedOp = ''
      this.prevGames = null
      this.currGame = null
      this.gameCount = 0
      this.endGoal = goal
    }
    clone(){
      var clonedGame = new GameClass(this.numAr,this.endGoal);
      let temp = []
      for (let i=0;i<6;i+=1){
          temp.push(this.state[i].clone())
      }
      let temp2 = []
      for (let i=0;i<4;i+=1){
          temp2.push(this.signs[i].clone())
      }
      clonedGame.state = [...temp];
      clonedGame.signs = [...temp2];
      clonedGame.selectedValues = [this.selectedValues[0],this.selectedValues[1]];
      clonedGame.selectedOp = this.selectedOp;
      clonedGame.prevGames = this.prevGames;
      clonedGame.currGame = this.currGame;
      clonedGame.gameCount = this.gameCount;
      clonedGame.endGoal = this.endGoal;
      return clonedGame;
    }
    display(){
      console.log("DISPLAYING!!")
      for(let i=0;i<6;i+=1){
          console.log(this.state[i].val,this.state[i].index)
      }
      for(let i=0;i<4;i+=1){
          console.log(this.signs[i].sign,this.signs[i].selected)
      }
    }
    getSelected(arr){
      let j = false;
      for(let i=0;i<arr.length;i+=1){
          j = (arr[i].selected | j);
      }
      return j;
    }
    // Num Clicked
    clickOnNum(index){
  
      if(this.getSelected(this.signs) && this.selectedValues[0]!=index){
          this.selectedValues[1] = index;
          this.doOperation();
      }
      else{
      if(this.getSelected(this.state)){
          for(let i=0;i<6;i+=1){
              this.state[i].selected = false;
          }
      }
      this.state[index].selected = true;
      this.selectedValues[0] = index;
      }
    }
  
    clickOnOp(val){
  
      if(this.getSelected(this.state)){
      let opKey = {'+':0,'-':1,'*':2,'/':3}
      if(this.getSelected(this.signs)){
          for(let i=0;i<4;i+=1){
              this.signs[i].selected = false;
          }
      }
      this.signs[opKey[val]].selected = true;
      this.selectedOp = val;
      }
    }
  
    doOperation(){
      if(this.selectedOp === '+'){
          this.state[this.selectedValues[0]].val+=this.state[this.selectedValues[1]].val;
          this.state[this.selectedValues[1]].val = 0;
      }
      if(this.selectedOp === '-'){
      this.state[this.selectedValues[0]].val-=this.state[this.selectedValues[1]].val;
      this.state[this.selectedValues[1]].val = 0;
      }
      if(this.selectedOp === '*'){
      this.state[this.selectedValues[0]].val*=this.state[this.selectedValues[1]].val;
      this.state[this.selectedValues[1]].val = 0;
      }
      if(this.selectedOp === '/'){
      this.state[this.selectedValues[0]].val/=this.state[this.selectedValues[1]].val;
      this.state[this.selectedValues[1]].val = 0;
      }

  
      this.deselectEverything();
      this.gameCount+=1
      this.prevGames = this.currGame.clone();
      this.currGame = this.clone();
    }
  
    deselectEverything(){
      for(let i=0;i<6;i+=1){
          this.state[i].selected = false;
      }
      for(let i=0;i<4;i+=1){
          this.signs[i].selected = false;
      }
      this.selectedValues = [-1,-1];
      this.selectedOp = '';
    }
    validateOp(index){
      if(this.selectedOp === null){
          return true;
      }
      if(this.selectedOp === '+' || this.selectedOp === '*'){
          return true;
      }
      if(this.selectedOp === '-'){
          if(this.state[this.selectedValues[0]].val<this.state[index].val){
              this.deselectEverything();
              return false;
          }
          return true;
      }
      if(this.selectedOp === '/'){
          if(this.state[this.selectedValues[0]].val<this.state[index].val){
              this.deselectEverything();
              return false;
          }
          if(this.state[index].val === 0){
              this.deselectEverything();
              return false;
          }
          if(this.state[this.selectedValues[0]].val%this.state[index].val != 0){
              this.deselectEverything()
              return false;
          }
          
          return true;
      }
  
      return true;
    }
  
    checkGoal(){
      for(let i=0;i<this.state.length;i+=1){
          if(this.state[i].val === this.endGoal){
              return true;
          }
      }
      return false;
    }
    
  
  }
  
  export default GameClass;