<template>
    <div class="container">
        <h2>Create New User</h2>
        <form v-on:submit="createUser">
            <div class="form-group">
                <label for="add-first_name">First Name</label>
                <input class="form-control" id="add-first_name" v-model="user.first_name" required/>
            </div>
            <div class="form-group">
                <label for="add-last_name">Last Name</label>
                <input class="form-control" id="add-last_name" v-model="user.last_name" required/>
            </div>
            <div class="form-group">
                <label for="add-email">Email</label>
                <input type="email" class="form-control" id="add-email" v-model="user.email">
            </div>
            <div class="form-group">
                <label for="add-phone">Phone</label>
                <input type="tel" class="form-control" id="add-phone" v-model="user.phone">
            </div>
            <div class="form-group">
                <label for="add-date_of_birth">Date of Birth</label>
                <input type="date" class="form-control" id="add-date_of_birth" v-model="user.date_of_birth"/>
            </div>
            <button type="submit" class="btn btn-primary">Create</button>
            <router-link class="btn btn-default" v-bind:to="'/users'">Cancel</router-link>
        </form>
    </div>
</template>

<script>
    import axios from "axios";

    export default {

        name: 'CreateUser',
        data: function () {
            return {
                user: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                    date_of_birth: '',
                }
            }
        },
        methods: {
            createUser() {

                axios.post('https://reqres.in/api/users', {
                    first_name: this.user.first_name,
                    last_name: this.user.last_name,
                    email: this.user.email,
                    phone: this.user.phone,
                    date_of_birth: this.user.date_of_birth,
                }).then((response) => {
                    alert(response.status);
                }).catch((error) => {
                    alert(error);
                });
                this.$router.push('/users');
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
