<script>
export default {
    data() {
        return {
            socials: [
                {
                    name: "Facebook",
                    link: "#",
                    icon: "fa-facebook",
                },
                {
                    name: "Twitter",
                    link: "#",
                    icon: "fa-twitter",
                },
                {
                    name: "Instagram",
                    link: "#",
                    icon: "fa-instagram",
                },
                {
                    name: "Linkedin",
                    link: "#",
                    icon: "fa-linkedin",
                },
            ],
        }
    },
}
</script>

<template>
    <div class="socials-icons">

        <span class="rounded-circle" v-for="curElem in socials">
            <a :href="`${curElem.link}`" class="text-white"><i class="fa-brands" :class="curElem.icon"></i></a>
        </span>

    </div>

</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;


.socials-icons {

    span {
        background-color: $violet;
        padding: .8em;
        margin-right: .5em;

    }
}
</style>