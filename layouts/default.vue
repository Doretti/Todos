<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');
*,
*::before,
*::after {
  font-family: 'Rubik', sans-serif;
  box-sizing: border-box;
  margin: 0;
  transition: .2s all ease;
  text-decoration: none;
  color: #000;
}
.wrapper {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #c2d1e5;
}
.win {
  margin-top: 20px;
  width: 1000px;
  background-color: #fff;
  height: 90%;
  border-radius: 12px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.363);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.add, .close, .delete  {
  height: 35px;
  width: 100px;
  border-radius: 8px;
  font-size: 17px;
  cursor: pointer;
  margin: 0 2px;
  text-decoration: none;
  display: block;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add button, .close button, .delete button  {
  background-color: transparent;
  font-size: 17px;
  border: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.add {
  border: 2px solid #337bbe;
}

.close {
  border: 2px solid #7f33be;
}

.delete {
  border: 2px solid #be3333;
}

.title-input {
    height: 5%;
  }

  .inputs {
    padding: 8px;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .body-input {
    height: 94%;
    resize: none;
  }

  .title-input, .body-input {
    width: 100%;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    outline: none;
    padding: 5px;
  }

  .title-input::placeholder, .body-input::placeholder {
    color: #898989;
    font-size: 16px;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    padding: 5px;
    height: 5%;
  }

</style>
