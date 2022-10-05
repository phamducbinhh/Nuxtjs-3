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
    updateUser(user) {
      this.listUser = [user, ...this.listUser];
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
      <v-btn
        class="ma-2"
        :loading="loading2"
        :disabled="loading2"
        color="success"
        @click="showModal"
      >
        Add New User
        <template v-slot:loader>
          <span>Loading...</span>
        </template>
      </v-btn>
    </div>
    <div class="relative mt-5 overflow-x-auto shadow-md">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr class="text-center">
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">First Name</th>
            <th scope="col" class="px-6 py-3">Last Name</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700"
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
              <div class="flex justify-center">
                <div class="mr-2">
                  <v-btn tile color="success">
                    <v-icon left> mdi-pencil </v-icon>
                    Edit
                  </v-btn>
                </div>
                <div>
                  <v-btn tile color="error">
                    <v-icon left> mdi-pencil </v-icon>
                    Delete
                  </v-btn>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- modal---show -->
    <ModalUser
      v-if="isShowModal"
      @hideModal="hideModal"
      :updateUser="updateUser"
    />
    <!-- pagination -->
    <Pagination class="my-10" />
  </section>
</template>

<style lang="scss" scoped></style>
