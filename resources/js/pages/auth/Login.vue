<template>
    <!-- <div class="container">
        <div class="card card-default">
            <div class="card-header">Connexion</div>
            <div class="card-body">
                <div class="alert alert-danger" v-if="has_error">
                    <p>error.</p>
                </div>
                <form autocomplete="off" @submit.prevent="login" v-if="!success" method="post">
                    <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.username }">
                        <label for="username">Username</label>
                        <input type="username" id="username" class="form-control" placeholder="Enter Username" v-model="username">
                        <span class="help-block" v-if="has_error && errors.username">{{ errors.username }}</span>
                    </div>
                    <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.password }">
                        <label for="password">Mot de passe</label>
                        <input type="password" id="password" class="form-control" v-model="password">
                        <span class="help-block" v-if="has_error && errors.password">{{ errors.password }}</span>
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
            </div>
        </div>
    </div> -->
    <div class="py-10 sm:py-0">
		<div class='flex h-screen items-center justify-center '>
			<div class="w-full lg:flex-none sm:w-2/4 xl:w-1/4 bg-light-normal rounded mx-8 shadow-lg ">
                <div class="my-2">
                    <div class="py-2 md:py-3 px-6">
                        <div class="flex flex-col items-center">
                            <div class="mt-6 text-blue">
                                {logo}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-blue w-1/3 rounded-r-full shadow">
                    <div class="ml-6 py-2">
                        <span class="text-white text-md font-bold">Sign In</span>
                    </div>
                </div>
                <div class="alert alert-danger" v-if="has_error && !success">
                    <p v-if="error == 'login_error'">Validation error (s), please see the message (s) below.</p>
                    <p v-else>Error, unable to login at the moment. If the problem persists, please contact an administrator.</p>
                </div>
                <div class="">
                    <div class="py-2 md:py-3 px-6">
                        <div class="">
                            <form class="text-left my-2" autocomplete="off" @submit.prevent="login" v-if="!success" method="post">
                                <div class="flex flex-col justify-center">
                                    <div class="mt-4" v-bind:class="{ 'has-error': has_error && errors.username }">
                                        <label for="username" class="block text-gray=hard">Username</label>
                                        <!-- <span class="text-gray-hard">Enter Email </span> -->
                                        <input type="username" id="username" class="bg-light-hard p-2 w-full rounded-sm" placeholder="Enter Username" v-model="username" required />
                                        <span class="text-sm font-light text-red-300" v-if="has_error && errors.username">{{ errors.username }}</span>
                                    </div>
                                    <div class="mt-4" v-bind:class="{ 'has-error': has_error && errors.password }">
                                        <label for="username" class="block text-gray=hard">Password</label>
                                        <input type="password" id="password" class="bg-light-hard p-2 w-full rounded-sm" v-model="password">
                                        <span class="text-sm font-light text-red-300" v-if="has_error && errors.password">{{ errors.password }}</span>
                                    </div>
                                    <button class="bg-blue flex justify-center text-white mt-6 py-2 rounded " >
                                        <h1 class="text-light-normal font-semibold text-center"> Sign in</h1>
                                    </button>
                                    <div class="mt-10 border-b border-blue"></div>
                                    <div class="mt-4 text-center"> <span class="text-gray-hard text-xs">Don't have an account ?<span class="text-blue font-bold">
                                        <a href="register">Sign Up</a></span></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	</div>
</template>
<script>
    // import Logo from '../../assets/logo.svg'
  export default {
    data() {
      return {
        username: '',
        password: '',
        has_error: false,
        error: '',
        errors: {},
        success: false
      }
    },
    mounted() {
      console.log('Login Mounted')
    },
    methods: {
      login() {
        // get the redirect object
        var redirect = this.$auth.redirect()
        var app = this
        this.$auth.login({
          params: {
            username: app.username,
            password: app.password
          },
          success: function(errors) {
              console.log('aerro')
            // handle redirection
            // const redirectTo = redirect ? redirect.from.name : this.$auth.user().role === 2 ? 'admin.dashboard' : 'dashboard'
            // this.$router.push({name: redirectTo})
          },
           error: function (res) {
               console.log(res)
            console.log(res.response.data.errors)
          },
          rememberMe: true,
          fetchUser: true
        })
      }
    }
  }
</script>
