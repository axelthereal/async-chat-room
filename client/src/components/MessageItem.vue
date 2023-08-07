<template> 
   <div class="msgitem d-flex mt-3 mb-4 gap-2 msg-received" id="msg-received">
   <div class="msg-image">
          <img src="../assets/images/user3.png" alt="" class="rounded-circle" width="41" height="41" />
        </div>
        <div class="msg-content d-flex flex-column gap-2">
          <div class="msg-info d-flex justify-content align-items-center gap-3">
           <span class="username fs-6 title-b txt-dark fw-medium">Ucher Gainst</span>  
           <span class="msgtime fs-7 text txt-dark-lighter fw-medium">17:30</span>
          </div>
          <div class="msg-texts-bx fs-8 text fw-medium bg-white py-2 px-3">
             My first message here !!!
          </div> 
        </div>
    </div>


    <div class="msgitem d-flex mt-3 mb-4 gap-2 msg-sent" id="msg-sent">
        <div class="msg-content d-flex flex-column gap-2">
          <div class="msg-info d-flex justify-content align-items-center gap-3">
           <span class="msgtime fs-7 text txt-dark-lighter fw-medium">17:30</span>
           <span class="username fs-6 title-b txt-dark fw-medium">Ucher Gainst</span>  
          </div>
          <div class="msg-texts-bx fs-8 text fw-medium py-2 px-3">
             My first message here !!!
          </div> 
        </div>
         <div class="msg-image">
          <img src="../assets/images/user2.png" alt="" class="rounded-circle" width="41" height="41" />
        </div>
    </div>

</template>


<style scoped>
  .msg-texts-bx{
     width: 100%;
  }
  #msg-received .msg-texts-bx{
     color: var(--tc-dark-grey);
     border:1px solid var(--bd-light);
     border-radius: 0px 25px 25px 20px;
  }
  #msg-sent .msg-texts-bx{
     color: var(--tc-light-dark);
     background-color: var(--bg-active);
     border:1px solid var(--bd-active);
     border-radius: 25px 0px 20px 25px;
  }
</style>

<script>
export default {
      name: "MessageItem"
}
</script>