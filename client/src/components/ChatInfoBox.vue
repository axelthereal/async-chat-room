<template>
    <div class="chatboxinfo card border-0 bg-white" id="chatboxinfo">
        <!-- Info Box Header -->
        <div class="card-header py-2 border-0 bg-white  px-4">
            <div class="cb-info py-2 d-flex justify-content-between align-items-center gap-1">
              <div class="cb-data cursor-p w-100 px-2 d-flex flex-column">
                <span class="cb-title fs-6 text txt-dark-light fw-medium">Group Info</span> 
              </div>
              <div class="icons nowrap"> 
                <div class="txt-dark-lighter fs-5 w-100"> 
                <i class="cursor-p bi bi-x-circle"></i>
                </div> 
              </div>
           </div>
        </div>

         <!-- Info Box Content -->
        <div class="card-body infobox-content border-0 p-4">
          <div class="infobox-profile infobox-item py-3" align="center">
          <img src="../assets/cdn/spiderman.jpg" alt="" />
          <h3 class="fs-5 text fw-semibold mt-3 txt-dark">Rick and Morty</h3>
          <span class="fs-7"><span class="members txt-dark-lighter text">327 Members</span> <span class="txt-dark-lighter fs-8 fw-light mx-1">|</span> <span class="online txt-active text fw-semibold">17 Online</span></span>
          <p class="desc-txt mt-4 fs-7 text txt-dark-lighter fw-medium">
              This is simple group description to tell you how it should look like to be in the group
          </p>
          <div class="desc-txt mt-4 fs-7 text txt-dark-lighter fw-light d-flex flex-column">
             <span>Created by <span class="fw-semibold txt-dark-light cursor-p">@axelthereal</span></span>
             <span class="mt-1 fs-8 txt-dark-light">On 09/08/2023 at 02:35</span>
          </div>
          </div>

          <div class="groupmembersview infobox-item py-3 px-1 cursor-p txt-dark-light d-flex justify-content-between align-items-center">
               <span class="text fs-7 fw-medium">Group Members</span> 
                <i class="bi bi-people fs-5 txt-dark-lighter"></i> 
          </div>  
         
          <div class="groupmediaview infobox-item py-3 px-1 cursor-p txt-dark-light">
              <div class="header d-flex justify-content-between align-items-center">
                <span class="text fs-7 fw-medium">Media</span> 
                <i class="bi bi-collection-play fs-5 txt-dark-lighter"></i> 
              </div>
              <p class="desc-txt fs-8 text txt-dark-lighter fw-medium">
              Media, links, and docs shared in the group
              </p>
          </div>  

        </div>

    </div>
</template>

<script>
  export default {
      name: "ChatBoxInfo"
  }
</script>

<style scoped>
  #chatboxinfo{
    position: relative;
    min-width:100px; 
    width:25%;  
    height: 100%;  
    background-color: transparent; 
    border-left: 1px solid var(--bg-light-darker) !important;
  } 
  .infobox-profile img{
    width: 93px;
    height: 93px;
    border-radius: 50% !important;
    padding: 5px;
    border: 1px solid var(--bg-light-darker);
  }
  #chatboxinfo .infobox-item{ 
   border-bottom:1px solid var(--bd-light) !important;
  }
</style>