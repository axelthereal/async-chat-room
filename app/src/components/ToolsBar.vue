<template>
  <div class="toolbar">
    <!-- Toolbar-Header -->
    <div class="toolbar-header py-2" align="center">
      <img src="../assets/images/logo.png" class="cursor-p" alt="toolbar-logo">
    </div>

    <!-- Toolbar-Menu -->
    <div class="toolbar-menu list-group w-100 mt-4">
      <div @click="setActiveView('home')" :class="{ 'isactive': itemIssActive('home') }"
        class="list-group-item rounded-0 cursor-p txt-dark-light d-flex justify-content-center align-items-center flex-column border-0 my-1">
        <span class="item-icon title-b bi bi-house fs-5"></span>
        <span class="item-label text fw-medium fs-8  mt-1">Home</span>
      </div>
      <div @click="setActiveView('search')" :class="{ 'isactive': itemIssActive('search') }"
        class="list-group-item rounded-0 cursor-p txt-dark-light d-flex justify-content-center align-items-center flex-column border-0 my-1">
        <span class="item-icon title-b bi bi-search fs-5"></span>
        <span class="item-label text fw-medium fs-8  mt-1">Search</span>
      </div>
      <div @click="setActiveView('groups')" :class="{ 'isactive': itemIssActive('groups') }"
        class="list-group-item rounded-0 cursor-p txt-dark-light d-flex justify-content-center align-items-center flex-column border-0 my-1">
        <span class="item-icon title-b bi bi-chat-right-dots fs-5"></span>
        <span class="item-label text fw-medium fs-8  mt-1">Groups</span>
      </div>
      <div @click="setActiveView('contacts')" :class="{ 'isactive': itemIssActive('contacts') }"
        class="list-group-item rounded-0 cursor-p txt-dark-light d-flex justify-content-center align-items-center flex-column border-0 my-1">
        <span class="item-icon title-b bi bi-person-plus fs-5"></span>
        <span class="item-label text fw-medium fs-8  mt-1">Contacts</span>
      </div>
      <div @click="setActiveView('saved')" :class="{ 'isactive': itemIssActive('saved') }"
        class="list-group-item rounded-0 cursor-p txt-dark-light d-flex justify-content-center align-items-center flex-column border-0 my-1">
        <span class="item-icon title-b bi bi-bookmark fs-5"></span>
        <span class="item-label text fw-medium fs-8  mt-1">Saved</span>
      </div>
    </div>

    <!-- Toolbar-foopter -->
    <div class="toolbar-footer list-group w-100 mt-4 py-2">
      <div @click="toggleAppTheme"
        class="list-group-item mx-auto py-2 px-1 list-group-item-toggle rounded-pill cursor-p txt-dark-light d-flex justify-content-center align-items-center flex-column gap-2 border-0 my-1">
        <span
          :class="['item-icon rounded-circle item-icon-btn d-flex justify-content-center align-items-center title-b bi bi-sun fs-6', { 'item-icon-btn-active': getAppTheme('light') }]"></span>
        <span
          :class="['item-icon rounded-circle item-icon-btn d-flex justify-content-center align-items-center title-b bi bi-moon fs-6', { 'item-icon-btn-active': getAppTheme('dark') }]"></span>
      </div>
      <div
        class="list-group-item rounded-0 cursor-p txt-dark-light d-flex justify-content-center align-items-center flex-column border-0 my-3">
        <img src="../assets/images/user1.png" alt="user-profile-img">
      </div>
    </div>

  </div>

  <!-- Toolbar-view -->
  <div class="toolbar-view p-0" v-if="activeView">
    <div class="toolbar-view-header py-2 mb-0 px-4">
      <SearchComponent @set-active-view="setActiveView" :main="itemIssActive('search')" />
    </div>
    <div class="toolbar-view-content pt-3">
      <ToolBarHome v-if="itemIssActive('home')" />
      <ToolBarSearch v-if="itemIssActive('search')" />
      <ToolBarGroups v-if="itemIssActive('groups')" />
      <ToolBarSaved v-if="itemIssActive('saved')" />
      <ToolBarContacts v-if="itemIssActive('contacts')" />
    </div>
  </div>
</template>

<script>
import ToolBarHome from "./ToolBarHome.vue";
import ToolBarSearch from "./ToolBarSearch.vue";
import ToolBarGroups from "./ToolBarGroups.vue";
import ToolBarSaved from "./ToolBarSaved.vue";
import ToolBarContacts from "./ToolBarContacts.vue";
import SearchComponent from "./SearchComponent.vue";

export default {
  name: "ToolBar",
  data() {
    return {
      appTheme: "light",
      activeView: "home",
    }
  },
  components: {
    ToolBarHome,
    ToolBarSearch,
    ToolBarGroups,
    ToolBarSaved,
    ToolBarContacts,
    SearchComponent
  },
  methods: {
    getAppTheme(theme) {
      return this.appTheme == theme ? true : false;
    },
    toggleAppTheme() {
      this.appTheme = this.appTheme == "light" ? "dark" : "light";
    },
    itemIssActive(index) {
      return this.activeView == index ? true : false
    },
    setActiveView(target) {
      this.activeView = target;
    }
  }
}
</script>


<style scoped>
.toolbar {
  position: relative;
  min-width: 78px;
  width: 5%;
  height: 100%;
  background-color: var(--bg-light);
  border-right: 1px solid var(--bd-light);
}

.toolbar .toolbar-header img {
  max-width: 75%;
  height: auto;
}

.toolbar .list-group-item-toggle {
  background-color: var(--bg-light-dark);
}

.toolbar .list-group-item-toggle {
  max-width: 50px;
}

.toolbar .isactive {
  color: var(--tc-active) !important;
  transition: 0.3s ease-out;
}

.toolbar .list-group-item-toggle .item-icon-btn {
  width: 35px;
  height: 35px;
  color: var(--tc-dark-light);
  transition: 0.3s ease-in;
}

.toolbar .list-group-item-toggle .item-icon-btn:not(.item-icon-btn-active):hover {
  color: var(--tc-active);
}

.toolbar .list-group-item-toggle .item-icon-btn-active {
  background-color: var(--bg-light);
  color: var(--tc-active);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  transition: 0.3s ease-out;
}

.toolbar .toolbar-footer {
  position: absolute;
  bottom: 0;
}

.toolbar .toolbar-footer img {
  max-width: 100%;
  height: auto;
  border-radius: 50% !important;
  border: 2px solid var(--bd-light-dark);
}

.toolbar-view {
  position: relative;
  min-width: 78px;
  min-width: 21%;
  width: 21%;
  height: 100%;
  background-color: var(--bg-light);
  border-right: 1px solid var(--bd-light-dark);
}

.toolbar-view .toolbar-view-content {
  height: 100%;
  background-color: var(--bg-light-dark);
}
</style>