<template> 
   <div class="msgitem cursor-p d-flex mt-3 mb-4 gap-2 msg-received" id="msg-received">
   <div class="msg-image">
          <img src="../assets/images/user3.png" alt="" class="rounded-circle" width="41" height="41" />
   </div>
        <div class="msg-content d-flex flex-column gap-2">
          <div class="msg-info d-flex justify-content align-items-center gap-3">
           <span class="username fs-6 title-b txt-dark fw-medium">Ucher Gainst</span>  
           <span class="msgtime fs-7 text txt-dark-lighter fw-medium">17:30</span>
          </div>
          <div class="msg-texts-bx fs-7 text fw-light bg-white py-2 px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, libero delectus dolorum pariatur perspiciatis perferendis earum quidem voluptatibus est praesentium laborum sint non placeat consequatur a, aliquid voluptatum exercitationem animi?
          </div> 
        </div>
    </div>


    <div class="msgitem cursor-p d-flex justify-content-end mt-3 mb-4 gap-2 msg-sent" id="msg-sent">
        <div class="msg-content d-flex flex-column align-items-end gap-2">
          <div class="msg-info d-flex justify-content-end align-items-center gap-3">
           <span class="msgtime fs-7 text txt-dark-lighter fw-medium">17:30</span>
           <span class="username fs-6 title-b txt-dark fw-medium">Ucher Gainst</span>  
          </div>
          <div class="msg-texts-bx fs-7 text fw-light py-2 px-3">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nostrum fuga omnis voluptatibus neque libero pariatur quidem ducimus, placeat inventore consectetur non facere obcaecati quis reprehenderit repellendus beatae ab corporis?
          </div> 
        </div>
         <div class="msg-image">
          <img src="../assets/images/user2.png" alt="" class="rounded-circle" width="41" height="41" />
        </div>
    </div>

</template>


<style scoped>
  .msg-texts-bx{
     max-width: 70%;
     
  }
  #msg-received, #msg-sent {
    width:100%;
  }
  #msg-received .msg-texts-bx{
     color: var(--tc-dark-grey); 
     border-radius: 0px 18px 18px 15px;
  }
  #msg-sent .msg-texts-bx{
     color: var(--tc-light-dark);
     background-color: var(--bg-active-light); 
     border-radius: 18px 0px 15px 18px;
  }
  
</style>

<script>
export default {
      name: "MessageItem"
}
</script>