<template>
    <div class="form-bx">
        <div @click="checkCurrentIndex()" class="d-flex justify-content-between align-items-center join-form rounded-pill">
          <button type="button" class="btn btn-default pe-1 border-0 shadow-none ps-3"><i class="bi bi-search"></i></button>
          <input v-model="searchq" type="search" class="form-control border-0 shadow-none fs-6 text fw-semibold txt-black" placeholder="Search...">
        </div> 
    </div>
</template>

<script>
  export default {
      name: 'SearchComponent',
      data(){
          return {
            searchq: ""
          }
      },
      props: {
          main: {
            type: Boolean,
            default: true,
          }
      },
      methods:{
         checkCurrentIndex(){
            if(this.main == false){
               this.searchq = "";
               this.$emit("set-active-view", 'search');
            }
         }
      }
  }
</script>

<style scoped>
  .join-form{
     background-color: var(--bg-light-dark);
     padding: 3px 0px 3px 0px;
     overflow: auto;
     border:1px solid var(--bg-light-darker);
  }
  .join-form input{
    background-color: transparent;
  }
</style>