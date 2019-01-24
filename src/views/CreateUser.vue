<template>
  <div class="create-user">
    <CreateUser/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateUser from '@/components/CreateUser.vue'

export default {
  name: 'create-user',
  components: {
    CreateUser
  }
}
</script>
