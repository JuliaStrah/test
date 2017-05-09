<template>
    <div id="home">
        
        <div class="left-sidebar">
            <router-link to="/a">Home</router-link>
            <router-link to="/b">Teachers</router-link>
            <!--<router-link to="/section">Sections</router-link>
            <router-link to="/timetable">Timetable</router-link>
            <router-link to="/achievement">My achievements</router-link>
            <router-link to="/instruction">How to fill the diary</router-link>-->
        </div>

        <div class="content">
            <router-view></router-view>
        </div>

    </div>
</template>

<script src="./home.module.js"></script>

<style>

    /* LEFT SIDEBAR STYLE */

    .left-sidebar {
        z-index: 3000;
        position: fixed; top: 60px; left: 10px; bottom: 70px;
        background: #ffffff;
    }
    .left-sidebar a {
        display: block;
        width: 200px; height: 35px; line-height: 35px;
        padding-left: 10px;
        border-top: 1px solid #eaeaea;
        cursor: pointer;
        font-size: 14px; color: #16193B;
    }
    .left-sidebar a:first-child { border-top: none; }
    .left-sidebar a:hover { text-decoration: none; border-left: 3px solid #16193B; }
    
    /* CONTENT STYLE */

    .content {
        z-index: 3000;
        position: fixed; top: 60px; left: 220px; right: 10px; bottom: 70px;
        background: #ffffff;
        overflow-x: auto;
    }
</style>