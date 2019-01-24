<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h1>List of users</h1>
                <router-link class="btn btn-secondary my-4" v-bind:to="{path: '/create-user'}">
                    Create User
                </router-link>
                <table class="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    </thead>
                    <tbody v-if="user_list">
                    <tr v-for="user in user_list.data" :key="user.id">
                        <td>{{user.id}}</td>
                        <td><img v-if="user.avatar" :src="user.avatar" alt="user.first_name">
                            <img v-else src="http://via.placeholder.com/250x250" alt="">
                        </td>
                        <td>{{user.first_name}}</td>
                        <td>{{user.last_name}}</td>
                        <td>
                            <!--<router-link class="btn btn-warning btn-xs" v-bind:to="{name: 'user-edit', params: {user_id: user.id}}">Edit</router-link>-->
                            <!--<router-link class="btn btn-danger btn-xs" v-bind:to="{name: 'user-delete', params: {user_id: user.id}}">Delete</router-link>-->
                            <button class="btn btn-danger btn-xs mx-4"
                                    @click="delete_user(user.id)">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div v-if="user_list">
                    <button class="btn btn-secondary mx-4" :disabled="user_list.page == 1"
                            @click="get_users(user_list.page-1)">Previous
                    </button>
                    <button class="btn btn-secondary mx-4" :disabled="user_list.page == user_list.total_pages"
                            @click="get_users(user_list.page+1)">Next
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {

        data() {
            return {
                user_list: null,
                currentPage: 1,
            }
        },
        methods: {
            get_users(pageNum) {
                axios.get(`https://reqres.in/api/users?page=${pageNum}`)
                    .then((response) => {
                        this.user_list = response.data;
                    })
                    .catch((error) => console.log(error.message))
            },
            delete_user(user_id){
                axios.delete(`https://reqres.in/api/users/${user_id}`)
                    .then((response) => {
                        console.log(response.status);
                    })
                    .catch((error) => console.log(error.message))
            }
        },
        mounted() {
            axios.get('https://reqres.in/api/users')
                .then((response) => {
                    this.user_list = response.data;
                })
                .catch((error) => console.log(error.message))
        },
        created() {
            // console.log(this.$route.query.page);
        }

    }

</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
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

    textarea {
        width: 600px;
        height: 200px;
    }
    .users_list a.btn.btn-secondary{
        color: #fff;
    }
</style>