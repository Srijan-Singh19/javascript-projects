function counter() {
    let count=0;
    return {
        increment(){
            count++;
            return count;
        },
        decrement() {
      count--;
      return count;
    },

    reset() {
      count = 0;
      return count;
    },

    getCount() {
      return count;
    }
  };
}

const countElem = document.getElementById("count");

document.getElementById("increment").addEventListener("click",()=>{
    countElem.textContent = counter().increment();
});
document.getElementById("decrement").addEventListener("click",()=>{
    countElem.textContent = counter().decrement();
});
document.getElementById("reset").addEventListener("click",()=>{
    countElem.textContent = counter().reset();
});
