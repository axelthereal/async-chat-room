<template>
    <div class="chatbox card border-0" id="chatBoxVue" :toggled="toggledState">
        <!-- Message Box Header -->
        <div class="card-header py-2 border-0 bg-white px-4">
           <div class="cb-info py-1 d-flex justify-content-between align-items-center gap-1">
              <img src="../assets/cdn/rickandmorty.png" alt="" class="rounded-circle cursor-p" width="43" height="43" />
              <div class="cb-data cursor-p w-100 px-2 d-flex flex-column">
                <span class="cb-title fs-6 title-b txt-dark fw-medium">Rick and Morty</span>
                <span class="cb-status fs-7 txt-dark-lighter fw-normal text">Sanchez is typing...</span>
              </div>
              <div class="icons nowrap"> 
                <div class="d-flex txt-dark-light gap-4 fs-5 w-100">
                <i class="cursor-p bi bi-search"></i> 
                <i class="cursor-p bi bi-camera-video"></i> 
                <i class="cursor-p bi bi-telephone-plus"></i>
                <i class="cursor-p bi bi-layout-split" @click="toggleChatBoxState()"></i> 
                <i class="cursor-p bi bi-three-dots"></i>
                </div> 
              </div>
           </div>
        </div>
        <!-- Message-Box-Header -->

        <!-- Message Chat Content -->
        <div class="card-body chat-content border-0 p-4"> 
          <MessageItem />
        </div>
        <!-- */Message-Chat-Content -->

        <!-- Message Box Form -->
        <div class="card-footer py-2 border-0 bg-white px-4">
           <form class="chat-from my-2 formbx d-flex gap-3 align-items-center" action="" method="POST"> 
              <span class="icon-toggle cursor-p fs-4 bi bi-emoji-smile"></span>
              <span class="icon-toggle cursor-p fs-4 bi bi-file-plus"></span> 
             <div class="form-group w-100">
               <input type="text" placeholder="Type your message..." class="form-control fs-6 py-2 rounded-3 border-0 shadow-none" />
             </div>
             <div class="nowrap">
               <span class="icon-toggle cursor-p fs-4 bi bi-mic"></span> 
             </div>
           </form>
        </div>
        <!-- */Message-Box-Form -->
    </div>
</template>


<script>
import MessageItem from './MessageItem.vue';

 export default {
    name: "ChatBox",
    data(){
      return { 
        
      }
    },
    props: {
      toggledState: Boolean
    },
    methods: {
        toggleChatBoxState(){
          //this.toggledState = !this.toggledState;
          this.$emit('toggle-infobox-state');
        }
    },  
    components: { 
        MessageItem 
    }
}
</script>


<style>
  #chatBoxVue[toggled="false"]{
    width:49%;
    animation: toggleChatBoxUnShrink 0.5s ease-out 0s 1 normal forwards;
  }
  @keyframes toggleChatBoxUnShrink {
    0%{width:49%;} 
    100%{width:74%;}
  }
  #chatBoxVue[toggled="true"]{
    width:74%;
    animation: toggleChatBoxShrink 0.5s ease-in 0s 1 normal forwards; 
  }
  @keyframes toggleChatBoxShrink {
    0%{width:74%;} 
    100%{width:49%;}
  }
  #chatBoxVue{ 
    position: relative; 
    height: 100%;  
    background-color: transparent; 
  }

  #chatBoxVue .card-header{
     border-bottom:1px solid var(--bg-light-darker) !important;
  }
  #chatBoxVue .card-footer .form-control{
       background-color: var(--bg-light-dark);
       border:1px solid var(--bg-light-darker) !important;
  }
  #chatBoxVue .card-footer .form-control:focus{
       border:1px solid var(--bg-active) !important;
  }
  #chatBoxVue .bi:hover{
     color: var(--tc-active) !important;
  }
  #chatBoxVue .chat-content{
       overflow-y: scroll !important;
  }
  #chatBoxVue .chat-content::-webkit-scrollbar {
    display: none !important;
  }
  #chatBoxVue .chat-content{
  -ms-overflow-style: none !important;
  }
</style>