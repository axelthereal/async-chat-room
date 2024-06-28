<template>
    <div class="viewcontent">
        <div class="viewheader py-1 px-4">
         <h1 class="fs-5 fw-semibold txt-black title-smb">Contacts</h1>
         <span class="fs-7 txt-dark-lighter fw-medium text">View your saved contacts</span>
        </div>
       <div class="viewcontent list-group mx-0 px-0 rounded-0">
          <ContactItem />
       </div>
    </div>
</template>

<script>
import ContactItem from './ContactItem.vue';

export default {
     name: "ToolBarContacts",
     components: {
          ContactItem
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