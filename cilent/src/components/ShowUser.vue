<template>
  <div>
    <h1> Show User</h1>
    <p>id : {{user.id }} </p>
    <p>ชื่อนามสกุล : {{user.name }} - {{user.lastname}}</p>
    <p>email : {{user.email}}</p>
    <p>password : {{user.password}}</p>
  </div>
</template>
<script>
import UserService from '@/services/UserService'

export default{
    data () {
      return {
        user: null,
      }
    },
    async created () {
      try{
      let userId = this.$route.params.userId
      this.user = (await UserService.show(userId)).data
      }
      catch (error) {
        console.log (error)
      }
  }
}
</script>
<style scoped>

</style>
