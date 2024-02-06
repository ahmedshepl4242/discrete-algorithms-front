<template>
  <div class="container">
    <div class="title">
      <h1 style="color: rgb(0, 0, 0)">Prime Factorization of number</h1>
      <p style="color: rgb(17, 17, 17)">
        we know that any number compose of some of numbers multiply together,
        this page find all primes that number compose of them
      </p>
    </div>
    <div class="con2">
      <label>Enter The Number </label>
      <input type="number" v-model="a" /> <br />
      <div class="buttons">
        <button @click="findAllPrimeFactors(a, b)"><h>Find</h></button>
        <button @click="reset"><h>Reset</h></button>
      </div>
      <br />
      <div class="result" v-if="primes != null">
        <h3>The Number =</h3>
        <ul>
          <li v-for="(item, index) in primes" :key="index">
            <p>
              {{ item.value }}<sup>{{ item.pow }}</sup>
              <span style="margin-right: 5px" v-if="index != primes.length - 1">
                ×
              </span>
            </p>
          </li>
        </ul>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      a: Number,
      primes: null,
      product: Number,
      sum: Number,
      greatest: Number,
      numbers_of_primes: Number,

      //
    };
  },

  methods: {
    async findAllPrimeFactors() {
      // adding loading to the response

      const respone = await axios.post(
        "http://localhost:8080/api/factorization",
        null,
        {
          params: {
            number: this.a,
          },
        }
      );

      if (respone.status == 200) {
        const respone2 = await axios.get("http://localhost:8080/api/getPrimes");
        this.primes = respone2.data;
        console.log(respone2.data);
      }

      // dont do any thisng until i come back from resonse
    },

    reset() {
      this.a = Number;
      this.primes = null;
      this.product = Number;
      this.sum = Number;
      this.greatest = Number;
      this.numbers_of_primes = Number;
    },
  },
};
</script>

<style lang="scss" scoped>
/// made this div as in mid of page and center

.title p {
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
  background-color: rgb(228, 129, 165);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  padding-left: 30px;
  padding-right: 30px;
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
  margin-top: 10px;
  width: 20%;
  height: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  //   color: black;
  background: black;
}
button h {
  font-size: 20px;
  font-weight: bold;
  //   font-family: "Times New Roman", Times, serif;
  // font-style: italic;
  color: white;
}
button:hover{
  background: rgb(228, 129, 165);
  cursor: pointer;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  border-radius: 10px;
  
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-direction: row;
  width: 60%;
}
ul {
  display: flex;
  // justify-content: space-between;
  // align-items: space-between;
  flex-direction: row;
  // width: 100%;
  // remove style list
  list-style: none;
}
ul li {
  font-size: 20px;
}
.result {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  white-space: normal;
  // word-wrap: break-word;
  margin-top: 30px;
  margin-bottom: 10px;
  background-color: rgb(228, 129, 165);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
