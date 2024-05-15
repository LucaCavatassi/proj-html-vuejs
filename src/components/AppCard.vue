<script>
export default {
    props: {
        contactCard: Object,
        nameCard: String,
    },
}
</script>

<template>
    <div class="card ms_card bg-transparent mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4 d-flex justify-content-center align-items-center">
                <div class="icon">
                    <i class="img-fluid rounded-start" :class="`fa-solid ${contactCard.path_icon}`"></i>
                </div>

            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title fw-bold text-white">{{ nameCard }}</h5>
                    <router-link class="card-text d-block text-decoration-none text-white"
                        :to="{ name: contactCard.routeName }">
                        {{ contactCard.title }}
                    </router-link>
                    <router-link v-if="nameCard === 'Phone Number'"
                        class="card-text d-block text-decoration-none text-white" :to="{ name: contactCard.routeName }">
                        {{ contactCard.title }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.icon {
    font-size: 1.5rem;
    padding: 1em;
    border-radius: 50%;
    line-height: 1.5rem;
    color: $green;
    background-color: $violet
}

.ms_card {
    border: 1px solid $green;
}
</style>