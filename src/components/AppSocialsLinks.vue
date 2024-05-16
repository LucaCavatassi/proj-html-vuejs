<script>
export default {

}
</script>

<template>
    <div class="socials-icons">
        <!-- Link Facebook -->
        <span class="rounded-circle">
            <a href="#" class="text-white"><i class="fa-brands fa-facebook"></i></a>
        </span class="rounded-circle">
        <!-- /Link Facebook -->
        <!-- Link Twitter -->
        <span class="rounded-circle">
            <a href="#" class="text-white"><i class="fa-brands fa-twitter"></i></a>
        </span class="rounded-circle">
        <!-- /Link Twitter -->
        <!-- Link Instagram -->
        <span class="rounded-circle">
            <a href="#" class="text-white"><i class="fa-brands fa-instagram"></i></a>
        </span class="rounded-circle">
        <!-- /Link Instagram -->
        <!-- Link Linkedin -->
        <span class="rounded-circle">
            <a href="#" class="text-white"><i class="fa-brands fa-linkedin"></i></a>
        </span class="rounded-circle">
        <!-- /Link Linkedin -->
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