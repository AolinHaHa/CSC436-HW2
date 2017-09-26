class Set {
    constructor() {
      this.set = {};
    }

    add(str) {
      if (typeof str != 'string'){
        console.log('only string allowed to add');
      }
      else{
        if (!this.set[str]) {
          this.set[str] = true;
          console.log(str + '\' successfully added')
        } 
        else {
          console.log(str + '\' existed')
        }
      }
    }

    remove(str){
      if (typeof str != 'string'){
        console.log('only strings are allowed to remove');
      }else{
        if (this.set[str]){
          delete this.set[str];
          console.log(str + '\' removed successfully')
        }else{
          console.log('value not found')
        }
      }
    }
    
    print() {
      console.log(Object.keys(this.set));
    }

  }

