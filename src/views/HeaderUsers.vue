<template>
  <nav>
    <h2>User</h2>
    <router-link
      to="/"
      active-class="link--active"
      exact
      class="link"
    >Home</router-link>
    <router-link
      :to="{
        name: 'users-id-profile',
        params: {id: 1},
        hash: '#next-user'
      }"
      active-class="link--active"
      exact
      class="link"
    >Users</router-link>
  </nav>
</template>

<style scoped>
.link {
  margin-right: 10px;
}

.link--active {
  margin-right: 20px;
}
</style>