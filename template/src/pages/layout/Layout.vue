<template>
    <div>
        <!--引用公共header，在index.html中通过src引入进来-->
        <ops-header></ops-header>
        <div class="main-container">
            <!--菜单栏-->
            <!--<sidebar :menu-tree="menuTree" class="sidebar"></sidebar>-->
            <ops-sidebar  class="sidebar"></ops-sidebar>
            <div class="page">
                <ops-breadcrumb class="breadcrumb"></ops-breadcrumb>
                <div class="main">
                    <router-view></router-view>
                </div>
                <ops-footer class="footer"></ops-footer>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "layout",
	}
</script>

<style scoped>
    .main-container {
        display: flex;
        height: calc(100vh - 50px);
    }
    .sidebar {
        width: 250px;
        flex: 0 0 auto;
        height: 100%;
    }
    .page {
        flex: 1 1 auto;
        overflow: auto;
        display: flex;
        flex-direction: column;
    }
    .page .breadcrumb {
        flex: 0 0 auto;
        height: 40px;
    }
    .page .main {
        flex: 1 1 auto;
    }
    .page .footer {
        flex: 0 0 auto;
        height: 40px;
    }
</style>