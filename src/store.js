import { reactive } from "vue";

export const store = reactive({
menu: [
    {
        title: "Home",
        routeName: "home",
    },
    {
        title: "About",
        routeName: "about",
    },
    {
        title: "Contact",
        routeName: "contact",
    }
]
});
