<template> 
    <div class="msgitem d-flex gap-2">
   <div class="msg-image">
          <img src="../assets/images/user3.png" alt="" class="rounded-circle" width="41" height="41" />
        </div>
        <div class="msg-content d-flex flex-column gap-2">
          <div class="msg-info d-flex justify-content align-items-center gap-3">
           <span class="username fs-6 title-b txt-dark fw-medium">Ucher Gainst</span>  
           <span class="msgtime fs-7 text txt-dark-lighter fw-medium">17:30</span>
          </div>
          <div class="msg-texts-bx bg-white p-3">
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