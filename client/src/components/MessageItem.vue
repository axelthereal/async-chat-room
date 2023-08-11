<template> 
   <div class="msgitem cursor-p d-flex mt-3 mb-4 gap-2 msg-received" id="msg-received">
   <div class="msg-image">
          <img src="../assets/images/user3.png" alt="" class="rounded-circle" width="41" height="41" />
   </div>
        <div class="msg-content d-flex flex-column gap-2">
          <div class="msg-info d-flex justify-content align-items-center gap-3 ms-2">
           <span class="username fs-6 title txt-dark">User Noname</span>  
           <span class="msgtime fs-7 text txt-dark-lighter fw-medium">17:30</span>
          </div>
          <div class="msg-texts-bx fs-7 text fw-light bg-white py-2 px-3 ms-2">
            Hello everyone, wasup bruh ?
          </div> 
        </div>
    </div>


    <div class="msgitem cursor-p d-flex justify-content-end mt-3 mb-4 gap-2 msg-sent" id="msg-sent">
        <div class="msg-content d-flex flex-column align-items-end gap-2">
          <div class="msg-info d-flex justify-content-end align-items-center gap-3 me-2">
           <span class="msgtime fs-7 text txt-dark-lighter fw-medium">17:30</span>
           <span class="username fs-6 title txt-dark fw-medium">User Noname again</span>  
          </div>
          <div class="msg-texts-bx fs-7 text py-2 px-3 me-2">
            Hey, am doing well thanks 
          </div> 
        </div>
         <div class="msg-image">
          <img src="../assets/images/user2.png" alt="" class="rounded-circle" width="41" height="41" />
        </div>
    </div>

</template>


<style scoped>
  #msg-received .msg-texts-bx, #msg-sent .msg-texts-bx {
     width: 100%;  
  }
  #msg-received, #msg-sent {
    width:60%;  
    min-width: 60%;
    } 
    #msg-received{
      float: left;
    }
    #msg-sent{
      float: right;
    }
  #msg-received .msg-texts-bx{
     color: var(--tc-dark-grey); 
     border-radius: 1px 20px 20px 20px;
     box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.05);
  }
  #msg-sent .msg-texts-bx{ 
     color: var(--tc-light-dark); 
     background-color: var(--bg-active);
     border-radius: 20px 2px 20px 20px;
     box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.05) !important;
  }
 
</style>

<script>
export default {
      name: "MessageItem"
}
</script>