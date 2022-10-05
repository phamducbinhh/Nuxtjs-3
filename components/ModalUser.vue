<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  emits: ["hideModal"],
  props: {
    updateUser: {
      type: Object,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      users: {
        name: "",
        job: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      const response = await axios.post(`https://reqres.in/api/users`, {
        name: this.users.name,
        job: this.users.job,
      });
      this.updateUser({
        first_name: response.data.name,
        id: response.data.id,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Update User Successfully",
        showConfirmButton: false,
        timer: 2000,
      });
      this.users.name = "";
      this.users.job = "";
      this.$emit("hideModal");
      try {
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<template>
  <div class="fixed top-0 left-0 z-10 w-full overflow-y-auto" id="modal">
    <div
      class="flex items-center justify-center px-4 pt-4 pb-20 text-center min-height-100vh sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-900 opacity-75" />
      </div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
        >&#8203;</span
      >
      <!-- form -->
      <form
        @submit.prevent="onSubmit"
        class="inline-block overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl align-center sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
          <label>Name</label>
          <input
            type="text"
            class="w-full p-2 mt-2 mb-3 bg-gray-100"
            v-model="users.name"
          />
          <label>Job</label>
          <input
            type="text"
            class="w-full p-2 mt-2 mb-3 bg-gray-100"
            v-model="users.job"
          />
        </div>
        <div class="px-4 py-3 text-right bg-gray-200">
          <button
            type="button"
            class="px-4 py-2 mr-2 text-white bg-gray-500 rounded hover:bg-gray-700"
            @click="$emit('hideModal')"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
