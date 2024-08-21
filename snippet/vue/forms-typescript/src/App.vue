<script setup lang="ts">
import { reactive } from "vue";
import type { Submission } from "@patientprism/snippet-sdk";
import TitleBar from "./components/TitleBar.vue";

type Form = {
  firstName: string;
  lastName: string;
  email: string;
}

const form = reactive<Form>({
  firstName: "",
  lastName: "",
  email: "",
});

const submit = () => {
  const submission: Submission = {
    firstName: {
      type: "text",
      label: "First Name",
      value: form.firstName,
    },
    lastName: {
      type: "text",
      label: "Last Name",
      value: form.lastName,
    },
    email: {
      type: "email",
      label: "Email",
      value: form.email,
    },
  };

  window.$prism.submission.send(submission, "my-form-id");

  alert("Successfully sent the submission to the Prism SDK");
}
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <TitleBar msg="TS Submission Forms" />
    </div>
  </header>

  <main>
    <form @submit.prevent="submit">
      <div class="form-row">
        <label for="first-name">First Name: </label>
        <input id="first-name" type="text" formControlName="firstName" />
      </div>
      <div class="form-row">
        <label for="last-name">Last Name: </label>
        <input id="last-name" type="text" formControlName="lastName" />
      </div>
      <div class="form-row">
        <label for="email">Email: </label>
        <input id="email" type="email" formControlName="email" />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

main {
  display: flex;
  place-content: center;
  margin-top: 2rem;
}

.form-row {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 4px;
}

.form-row input {
  color: white;
  width: 300px;
  margin-left: 8px;
  border-radius: 4px;
  border: 1px solid #4d4d4d;
  padding: 4px;
  background-color: #202020;
}

button {
  background-color: hsla(160, 100%, 37%, 1);
  border: none;
  color: white;
  padding: 12px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 8px;
  width: 100%;
}
</style>
