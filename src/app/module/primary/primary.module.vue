<template>
    <div id="primary">

        <div class="header">
            <div class="logo">Diary for students</div>
            <div class="settings-btn" @click="showSettingsDrop">Settings</div> 
            <div class="settings-drop" v-if="settingsDrop">
                <router-link to="/home">Home</router-link>
                <router-link to="/profile">Profile</router-link>
                <router-link to="/about">About</router-link>
                <a>Sign out</a>
            </div>
        </div>

        <div class="container" @click="hideSettingsDrop">
            <router-view></router-view>
        </div>

        <div class="footer" @click="hideSettingsDrop">
            <div>&#169; Julia Strah, 2017</div>    
        </div>

    </div>
</template>

<script src="./primary.module.js"></script>

<style>

    /* HEADER STYLE */

    .header {
        z-index: 4000;
        position: fixed; top: 0; left: 0;
        width: 100%; height: 50px;
        background: #16193B; box-shadow: 0 1px 4px rgba(84, 83, 83, 0.7);
        font-size: 14px;
    }
    .logo, 
    .settings-btn {
        position: absolute; top: 0; height: 50px;
        line-height: 50px;
        color: #ffffff; text-align: center;
    }
    .logo { 
        left: 15px;
        font-weight: bold; font-size: 24px;
    }
    .settings-btn {
        width: 100px;
        right: 100px;
        cursor: pointer;
    }
    .settings-drop {
        z-index: 5000;
        position: fixed; top:60px; right: 75px;
        width: 150px;
        background: #ffffff; box-shadow: 0 1px 4px rgba(84, 83, 83, 0.7);
    }
    .settings-drop a {
        display: block;
        width: 100%; height: 35px; line-height: 35px;
        border-top: 1px solid #eaeaea;
        padding-left: 10px;
        color: #16193B;
    }
    .settings-drop a:first-child { border-top: none; }
    .settings-drop a:hover { text-decoration: none; border-left: 3px solid #16193B; }

    /* CONTAINER STYLE */

    .container {
        z-index: 2000;
        position: fixed; top: 50px; left: 0; right: 0; bottom: 0;
        width: 100%;
        background-color: #eaeaea;
    }

    /* FOOTER STYLE */
    .footer {
        z-index: 4000;
        position: fixed; left: 10px; right: 10px; bottom: 10px;
        height: 50px;
        background: #ffffff;
    }
    .footer div {
        weight: 100%; height: 100%; line-height: 50px;
        padding-left: 10px;
        font-size: 14px; color: #16193B;
    }
</style>