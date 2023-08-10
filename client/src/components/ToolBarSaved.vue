<template>
    <div class="viewcontent">
        <div class="viewheader py-1 px-4">
         <h1 class="fs-5 fw-semibold txt-black title-smb">Saved</h1>
         </div>
    </div>
</template>

<script>
export default {
     name: "BarSaved"
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