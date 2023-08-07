<template>
    <div class="msgitem d-flex align-items-center gap-2">
        <div class="msg-image">
          <img src="../assets/images/user3.png" alt="" class="rounded-circle" width="41" height="41" />
        </div>
        <div class="msg-content w-100">
          <div class="msg-info d-flex gap-2">
           <span class="username">Ucher Gainst</span> 
           <span>.</span>
           <span class="msgtime">17:30</span>
          </div>
          <div class="msg-texts-bx">
             My first message here !!!
          </div>
        </div>
    </div>
</template>


<style scoped>

</style>

<script>
export default {
      name: "MessageItem"
}
</script>