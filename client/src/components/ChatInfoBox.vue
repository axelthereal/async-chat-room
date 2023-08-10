<template>
    <div class="chatboxinfo card border-0 bg-white" id="chatboxinfo">
        <!-- Info Box Header -->
        <div class="card-header py-2 border-0 bg-white sticky-top px-4">
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
          <h3 class="fs-5 title fw-semibold mt-3 txt-dark">Rick and Morty</h3>
          <span class="fs-7"><span class="members txt-dark-lighter text">327 Members</span> <span class="txt-dark-lighter fs-8 fw-light mx-1">|</span> <span class="online txt-active text fw-semibold">17 Online</span></span>
          <p class="desc-txt mt-4 fs-7 text txt-dark-lighter fw-medium">
              This is simple group description to tell you how it should look like to be in the group
          </p>
          
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
             <!-- Nav pills -->
<ul class="nav nav-tabs mx-0 border-0 gap-0 rounded-pill p-1 d-flex justify-content-between align-items-center" id="nav-tab" role="tablist">
  <li class="nav-item d-flex align-items-center">
    <a class="nav-link active rounded rounded-pill fs-8 text txt-dark-light fw-semibold" data-bs-toggle="tab" data-bs-target="#mediaProfile" role="tab" aria-controls="mediaProfile" aria-selected="true" href="#mediaProfile">Media</a>
  </li>
  <li class="nav-item d-flex align-items-center">
    <a class="nav-link rounded rounded-pill fs-8 text txt-dark-light fw-semibold" data-bs-toggle="tab" data-bs-target="#filesProfile" role="tab" aria-controls="filesProfile" aria-selected="true" href="#filesProfile">Files</a>
  </li>
  <li class="nav-item d-flex align-items-center">
    <a class="nav-link rounded rounded-pill fs-8 text txt-dark-light fw-semibold"  data-bs-toggle="tab" data-bs-target="#linksProfile" role="tab" aria-controls="linksProfile" aria-selected="true" href="#linksProfile">Links</a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content border-0" id="nav-tabContent">
  <div class="tab-pane d-flex justify-content-between py-2 container fade active show flex-wrap" id="mediaProfile" role="tabpanel" aria-labelledby="mediaProfile-tab">
   
   <span class="mediafile rounded-3 cursor-p m-1 ms-0">
   <img src="../assets/cdn/ironman.jpg" alt="" srcset="">
   </span>

   
   <span class="mediafile rounded-3 cursor-p m-1 ms-0">
   <img src="../assets/cdn/ironman.jpg" alt="" srcset="">
   </span>

      
   <span class="mediafile rounded-3 cursor-p m-1 ms-0">
   <img src="../assets/cdn/ironman.jpg" alt="" srcset="">
   </span>
   

  </div>
  <div class="tab-pane py-2 container fade active" id="filesProfile" role="tabpanel" aria-labelledby="filesProfile-tab">
  <p>Nothing to show...</p>
  </div>
  <div class="tab-pane py-2 container fade active" id="linksProfile" role="tabpanel" aria-labelledby="linksProfile-tab">
    <p>Nothing to show...</p>
  </div>
</div>

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
  #chatboxinfo .groupmediaview .nav-tabs {
       background-color: var(--bg-light-darker);
  }
  #chatboxinfo .groupmediaview .nav-tabs .nav-item{
    width: 30%;
  }
  #chatboxinfo .groupmediaview .nav-tabs .nav-item a{
    border: 1px solid var(--bd-light) !important;
  }
  #chatboxinfo .groupmediaview .nav-tabs .nav-item a.active{
    color: var(--tc-active) !important;
    background-color: var(--bg-light) !important;
  }
  #chatboxinfo .tab-content .mediafile{
     position: relative;
     width:30%;
     height:50px;
     background-color: green;
     display: block; 
     overflow: hidden;
  }
  #chatboxinfo .tab-content .mediafile img{
     position: absolute;
     top: 0;
     left: 0;
     object-fit: cover;
     width:100%;
     height:100%;
  }
  #chatboxinfo{ 
  overflow-y: scroll;
  height: 100%;
  } 
  #chatboxinfo::-webkit-scrollbar {
    display: none !important;
  }
  #chatboxinfo{
  -ms-overflow-style: none;
  }
</style>