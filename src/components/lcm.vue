<template>
  <div class="container">
    <div class="title">
      <h2>Lowest Common Multiple</h2>
      <p>This page calculate the Lowest common multiple of two numbers</p>
    </div>
    <div class="con2">
      <label>Enter The First Number </label>
      <input type="number" v-model="a" /> <br />
      <label>Enter The Second Number </label>
      <input type="number" v-model="b" /> <br />

      <button @click="lcm1(a, b)"><h>Calculate</h></button>
      <p v-if="lcm_value != null">
        The Lowest Common Multiple is : <span>{{ lcm_value }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gcd_value: null,
      lcm_value: null,
      a: Number,
      b: Number,
      //
    };
  },

  methods: {
    lcm1(a, b) {
      this.gcd2(a, b);
      this.lcm_value = (a * b) / this.gcd_value;
      return;
    },
    gcd1(a, b) {
      if (b == 0) {
        this.gcd_value = a;
        return;
      }
      return this.gcd1(b, a % b);
    },
    gcd2(a, b) {
      if (a == null || b == null || a == "" || b == "") {
        alert("Please Enter The Number");
        return;
      }

      this.gcd1(a, b);
    },
  },
};
</script>

<style lang="scss" scoped>
/// made this div as in mid of page and center

p {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;

  margin-bottom: 50px;
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
}
.con2 {
  display: flex;
  //   justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 80%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 50%;
  margin-top: 30px;
  margin-bottom: 10px;
  background-color: rgb(184, 231, 108);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  //   padding: 20px;
}

label {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  //   font-family: "Times New Roman", Times, serif;
  font-style: italic;
}
input {
  margin-top: 20px;
  width: 40%;
  height: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 5px;
  font-size: 20px;
}
button {
  margin-top: 20px;
  width: 20%;
  height: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  //   color: black;
  background: black;
}

button:hover {
  
  background: rgb(184, 231, 108);
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  //   padding: 20px;
}

button:hover h {
  color: black;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  //   padding: 20px;
  
}

button h {
  font-size: 20px;
  font-weight: bold;
  //   font-family: "Times New Roman", Times, serif;
  font-style: italic;
  color: white;
}
span {
  font-size: 40px;
  font-weight: bold;
  //   font-family: "Times New Roman", Times, serif;
  font-style: italic;
  color: red;
}
</style>
