<template>
    <div class="component-container p-5" id="createNewGroup" :is-active="isActive">

        <div class="component col-lg-3 mx-auto my-5 rounded-2">
            <div class="comp-header px-4 py-3 w-100 d-flex flex-column">
                <span class="fs-4 title fw-medium txt-dark">Create a new chat group</span>
                <span class="fs-7 text fw-light txt-dark-light">Start a new group conversation by creating a new chat group and inviting your contacts</span>
            </div>
            <div class="comp-body px-4 pb-3 pt-0 w-100">
        <form method="POST">
         <div class="form-group py-2">
          <label for="" class="mb-2 fs-6 fw-medium text txt-dark-light">Group Name </label>
            <input
              type="text"
              name="grpname"
              id="grpname"
              class="form-control shadow-none fs-7 text py-2 rounded-3"
              placeholder="Enter a your group's name"
            />
          </div>

          <div class="form-group py-2">
          <label for="" class="mb-2 fs-6 fw-medium text txt-dark-light">Group Description </label>
            <textarea
              type="text"
              name="grpdesc"
              id="grpdesc"
              class="form-control shadow-none fs-7 text py-2 rounded-3"
              placeholder="Enter a short description for your group"
            ></textarea>
          </div>

          <button type="button" class="btn btn-default btn-active text-white w-100 my-2 py-2 fs-7 text rounded-3 d-flex justify-content-center gap-3 align-items-center" btn-state="pending"> Create <span class="load-spinner"></span></button>


          
        <button type="button" class="btn btn-default my-2 btn-outlined w-100 rounded-3" @click="$emit('toggle-popup', false)">
        <span class="fs-7 fw-semibold text txt-dark">Cancel</span> 
        </button>

       </form>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    name: "CreateGroupComponent", 
    props: {
        isActive: Boolean
    } 
}
</script>


<style scoped>
  .component-container[is-active="false"]{
    display:none;
  }
  .component-container[is-active="true"]{
    display:block;
  }
  .component-container{
    position:fixed;
    top: 0;
    left:0;
    width:100%;
    height:100%;
    z-index:9999px !important;
    background-color:#040A1292;
  }

  .component{
     background-color: var(--bg-light);
  }

  .form-control:focus {
     border:1px solid var(--bd-active) !important;
    }


    .load-spinner{
  display: none;
  width: 20px;
  height: 20px;
  background-color:transparent;
  border:2px solid var(--bd-light);
  border-radius: 50%;
  border-top-color: transparent;
  animation: spinning 0.7s ease-in 0.0s infinite normal; 
}
[btn-state="pending"] .load-spinner{
  display: block;
}
@keyframes spinning {
    0%{ transform: initial;}  
    100%{ transform: rotate(360deg); }
}
</style>