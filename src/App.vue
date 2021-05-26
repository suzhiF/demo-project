<template>
    <div id="app">
        <div class="container px-8">
            <main class="flex">
                <!-- 侧边栏（导航菜单） -->
                <!-- 侧边栏（导航菜单） -->
                <Menus></Menus>

                <!-- 主体内容 -->
                <div class="primary pt-12">
                    <!-- 路由匹配到的组件将渲染在这里 -->
                    <router-view></router-view>
                </div>

                <!-- 底部内容 -->
                <footer></footer>
            </main>
        </div>
    </div>
</template>

<script>
    // import DsForm from './components/DsForm'
    //
    // const ModalExample = () => ({
    //     // 需要加载的组件 (应该是一个 `Promise` 对象)
    //     component: import('./components/ModalExample.vue'),
    //     // 异步组件加载时使用的组件
    //     loading: '',
    //     // 加载失败时使用的组件
    //     error: '',
    //     // 展示加载时组件的延时时间。默认值是 200 (毫秒)
    //     delay: 20000,
    //     // 如果提供了超时时间且组件加载也超时了，
    //     // 则使用加载失败时使用的组件。默认值是：`Infinity`
    //     timeout: 3000
    // });
    import Menus from './components/Menus'

    export default {
        name: 'App',
        components: {
            Menus
        },
    }
</script>