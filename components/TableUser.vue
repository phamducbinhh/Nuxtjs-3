<script>
import axios from "axios";
export default {
  data() {
    return {
      listUser: [],
      isShowModal: false,
    };
  },
  methods: {
    async getUserData() {
      try {
        const res = await axios.get("https://reqres.in/api/users?page=1");
        if (res && res.data && res.data.data) {
          this.listUser = res.data.data;
        }
      } catch (err) {
        console.log(err.message);
      }
    },

    showModal() {
      this.isShowModal = true;
    },

    hideModal() {
      this.isShowModal = false;
    },
    onSubmit() {
      console.log("onSubmit");
    },
  },
  mounted() {
    this.getUserData();
  },
};
</script>

<template>
  <section class="section-banner">
    <div class="flex items-center justify-between mt-5">
      <h1 class="text-2xl font-bold">List User</h1>
      <button
        type="button"
        class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        @click="showModal"
      >
        Add New User
      </button>
    </div>
    <div class="relative mt-5 overflow-x-auto shadow-md">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">First Name</th>
            <th scope="col" class="px-6 py-3">Last Name</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            v-for="user in listUser"
            :key="user.id"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ user.id }}
            </th>
            <td class="px-6 py-4">{{ user.email }}</td>
            <td class="px-6 py-4">{{ user.first_name }}</td>
            <td class="px-6 py-4">{{ user.last_name }}</td>
            <td class="px-6 py-4">
              <button
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- modal---show -->
    <div
      class="fixed top-0 left-0 z-10 w-full overflow-y-auto"
      id="modal"
      v-if="isShowModal"
    >
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
            <input type="text" class="w-full p-2 mt-2 mb-3 bg-gray-100" />
            <label>Job</label>
            <input type="text" class="w-full p-2 mt-2 mb-3 bg-gray-100" />
          </div>
          <div class="px-4 py-3 text-right bg-gray-200">
            <button
              type="button"
              class="px-4 py-2 mr-2 text-white bg-gray-500 rounded hover:bg-gray-700"
              @click="hideModal"
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
  </section>
</template>

<style lang="scss" scoped></style>
