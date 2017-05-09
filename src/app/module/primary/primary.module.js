export default {
    name: "PrimaryModule",
    data: function() {
        return {
            settingsDrop: false
        }
    },
    beforeRouteEnter (to, from, next) {
        next(true);
    },
    methods: {
        showSettingsDrop: function () {
            this.settingsDrop = !this.settingsDrop;
        },
        hideSettingsDrop: function() {
            this.settingsDrop = false;
        }
    }
};