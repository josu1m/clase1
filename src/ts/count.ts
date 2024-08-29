import { ref, computed } from "vue"
//INCREMENTO
const count = ref<number>(0);

const increment = () => {
    count.value++;
}
const decrement = () => {
    count.value--;
}
//SUMA

const n1:number=10;
const n2:number=9;

// const suma=computed(()=>{
//     return n1+n2;
// })
function suma(){
    return n1+n2;
}

//PITAGORAS
const p1:number=4;
const p2:number=3;

const h=computed(()=>{
    return Math.sqrt(Math.pow(p1,2)+Math.pow(p2,2))
})

//exportaciones
export { count, increment, decrement, suma, h }