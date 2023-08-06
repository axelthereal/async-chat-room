<template>
    <div class="homeview"> 
       <div class="viewheader py-1 px-4">
         <h1 class="fs-5 fw-semibold txt-black title-smb">Messages</h1>
       </div>
       <div class="viewcontent list-group mx-0 px-0">
          <MessageListItem />
          <MessageListItem />
          <MessageListItem />
       </div>
    </div>
</template>

<script> 
import MessageListItem from './MessageListItem.vue';

export default {
     name: "BarHome",
     components: {
      MessageListItem
     }  
}
</script>

<style scoped>
  .viewcontent{
     position:static;
     overflow-y: scroll;
     width: 100%;
     height: 100vh;
  }
  .viewcontent::-webkit-scrollbar {
    display: none !important;
  }
  .viewcontent{
  -ms-overflow-style: none;
  }
</style>