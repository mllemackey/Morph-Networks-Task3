<template>
  <div class="users_list">
    <Users/>
  </div>
</template>

<script>
// @ is an alias to /src
import Users from '@/components/Users.vue'

export default {
  name: 'users',
  components: {
    Users
  }
}
</script>
