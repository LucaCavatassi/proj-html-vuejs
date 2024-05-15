<script>
export default {
    props: {
        contactCard: Object,
        nameCard: String,
    },
}
</script>

<template>
    <div class="card ms_card mb-4">
        <div class=" row g-0">
            <div class="col-md-4 d-flex justify-content-center align-items-center">
                <div class="icon">
                    <i class="img-fluid rounded-start" :class="`fa-solid ${contactCard.path_icon}`"></i>
                </div>

            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title fw-bold">{{ nameCard }}</h5>
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

.card {
    background-color: $dark-purple;
    transition: all 0.3s;

    &:hover {
        background-color: $purple;

        .icon {
            background-color: $green;
            color: $purple;
        }

        &.ms_card {
            border: 1px solid $purple;
        }

        h5.card-title {
            color: $green;
        }
    }

    .card-title {
        color: #FFF;
    }

    .icon {
        font-size: 25px;
        padding: 25px;
        border-radius: 50%;
        line-height: 25px;
        color: $green;
        background-color: $purple
    }

    &.ms_card {
        border: 1px solid $green;
        padding: .5em 0;
    }
}
</style>
