<template>
  <header id="header">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
    >
      <b-navbar-brand href="/">
        NavBar
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />


      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <router-link
            class=""
            to="/tab"
          >
            탭
          </router-link>
          <router-link
            class=""
            to="/slider"
          >
            슬라이드
          </router-link>
          <router-link
            class=""
            to="/modal"
          >
            모달
          </router-link>
          <router-link
            class=""
            to="/calendar"
          >
            달력
          </router-link>
          <router-link
            class=""
            to="/calendarFull"
          >
            달력2
          </router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            />
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
            >
              Search
            </b-button>
          </b-nav-form>

          <b-nav-item-dropdown
            text="Lang"
            right
          >
            <b-dropdown-item href="#">
              EN
            </b-dropdown-item>
            <b-dropdown-item href="#">
              ES
            </b-dropdown-item>
            <b-dropdown-item href="#">
              RU
            </b-dropdown-item>
            <b-dropdown-item href="#">
              FA
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">
              Profile
            </b-dropdown-item>
            <b-dropdown-item href="#">
              Sign Out
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
    name: 'HeaderPage'
}
</script>

<style scoped lang="scss">
#header ::v-deep {@import "~bootstrap/dist/css/bootstrap.min"; @import "~bootstrap-vue/dist/bootstrap-vue.min";}
#header {margin-bottom: 80px;}
#header a {padding: 15px;color: #fff !important;}
</style>