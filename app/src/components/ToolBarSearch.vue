<template>
    <div class="viewcontent">
     <div class="viewheader py-1 px-4">
         <h1 class="fs-5 fw-semibold txt-black title-smb">Search</h1>
         <span class="fs-7 txt-dark-lighter fw-medium text">Type your text to search for a contact or a group to join.</span>
    </div>
    </div>
</template>

<script> 
export default {
     name: "BarSearch" 
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