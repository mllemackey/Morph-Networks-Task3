<template id="user-edit">
  <div>
    <h2>Edit user</h2>
    <form v-on:submit="updateUser">
      <div class="form-group">
        <label for="edit-name">Name</label>
        <input class="form-control" id="edit-name" v-model="product.name" required/>
      </div>
      <div class="form-group">
        <label for="edit-description">Description</label>
        <textarea class="form-control" id="edit-description" rows="3" v-model="product.description"></textarea>
      </div>
      <div class="form-group">
        <label for="edit-price">Price, <span class="glyphicon glyphicon-euro"></span></label>
        <input type="number" class="form-control" id="edit-price" v-model="product.price"/>
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
      <router-link class="btn btn-default" v-bind:to="'/'">Cancel</router-link>
    </form>
  </div>
</template>

<script>
    import axios from "axios";
export default {
  name: 'UserEdit',
    data: function () {
        return {
            user_list: null
            }
    },
    methods: {
        updateUser: function () {
            axios.put('https://reqres.in/api/users', {
                first_name: 'morpheus',
                last_name: 'leader'
            }).then(function (response) {
                console.log(response);
            })
                .catch(function (error) {
                    console.log(error);
                });
            this.$router.push('/');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
