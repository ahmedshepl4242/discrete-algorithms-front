```html
<template>
  <div class="container">
    <h1>Chinese Remainder Theorem Solver</h1>
    <p>
      This solver allows you to solve a system of congruences of the form
      <br />
      <pre>

        ```  x = a_1 (mod m_1)
        x = a_2 (mod m_2)
        ... x = a_n (mod m_n) ``` where
        
        `m_1`, `m_2`, ..., `m_n` are pairwise coprime.
      </pre>
    </p>
    <form @submit.prevent>
      <div>
        <label for="equations">Enter Number of equations</label>
        <input type="number" id="equations" v-model="equation" />
        <button class="solve" @click.prevent="solve1()">Solve</button>
      </div>
     <h2 v-if="solution!=null"> The Solution is : <span style="color:rgb(0, 1, 0); font-size:40px; ">{{ solution }}</span></h2> 
      <div></div>
      <div class="variable" v-for="i in equation" :key="i">
        <div>
          <label for="a[i]"
            >a<sub>{{ i }}</sub></label
          >
          <input type="number" id="a[i]" v-model="a[i]" />
        </div>
        <div>
          <label for="m[i]"
            >m<sub>{{ i }}</sub></label
          >
          <input type="number" id="m[i]" v-model="m[i]" />
        </div>
      </div>
    </form>
    
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      equation: 1,
      variables: 1,
      a: [],
      m: [],
      solution: null,
    };
  },
  methods: {
    solve1(){
      if (this.equation < 1 || this.variables < 1) {
        alert("The number of equations and variables must be greater than 0.");
        return;
      }
      // Create a system of congruences.
      const equations = [];
      for (let i = 1; i <= this.equation; i++) {
        equations.push({a:this.a[i], m:this.m[i]});
      }
      // Solve the system.
      this.solve(equations);
      console.log(equations);


    },
    async solve(equations) {
      // Check that the number of equations and variables are valid.
      
      const res=await axios.post("https://discrete-algorithms-back.onrender.com/api/chine",equations,
        
      );
      
      if(res.status==200){
       
      const response=await axios.get("https://discrete-algorithms-back.onrender.com/api/getChines");
      console.log(response.data);
      if(this.data==0){
        this.solution="There is not a solution"
      }
      this.solution=response.data;

      }
      
    
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

/* // i want the form as card  has maximum size and  */
form {

  /* margin-top: 20px; */
  position: relative;
  max-height: 50vh;
  max-width: 150vh;
  overflow: auto;
  /* z-index: 1; */

}
input{
  width: 80%;
  height: 100%;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  outline: none;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family: sans-serif;
  background-color: white;  
  color: black;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);


}
.variable{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.solve{
  
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  outline: none;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family: sans-serif;
  background-color: white;  
  color: black;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  
}
.solve:hover{
  background-color: black;
  color: white;
  cursor: pointer;
}
</style>
```
