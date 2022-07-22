<script>
//todo: fix/redo this. . . . ?
import { useCookies } from 'vue3-cookies'

export default ({
    name: "cookie",

    setup() {
        const { cookies } = useCookies();
        return { cookies };
    },

    // <data, methods...>
    data() {
        return {
            key: '',
        }
    },

    mounted() {
        let cookie_value = this.cookies.get("myCookie");
        console.log(cookie_value);
        //set cookie to never expire
        this.cookies.set("myCookie", "GH1.1.1689020474.1484362313", Infinity);
        console.log(cookie_value);
    }
});
</script>