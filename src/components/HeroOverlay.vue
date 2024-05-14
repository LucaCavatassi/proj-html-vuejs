<script>

export default {
    data(){
        return{
            
        }
    },

    methods:{
    
    }
}
</script>

<template>
    <!-- OVERLAY-HERO -->
    <div class="container">
        <div class="row overlay h-100 w-50">
            <div class="col ms_margin h-100 d-flex flex-column justify-content-center">
                <h5 class="ms-green">WELCOME TO RAGX</h5>
                <h1 class="text-white fw-bold my-hero-fs">WE FALL. THEN <br> WE RISE.</h1>
                <div>
                    <button class="btn p-3 fs-5">Read More &RightArrow;</button>
                    
                </div>  

            </div>
        </div>
    </div>
    <!-- /OVERLAY-HERO -->
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.overlay {
    position: absolute; 
    z-index: 999;
    .ms_margin{
        padding-top: 100px;
    }
    .ms-green{
        color: $green
    }
    .my-hero-fs{
        font-size: 6rem;
    }
    .btn {
        background-color: $light-green;
        font-weight: bold;
        width: 30%;
    }
    .btn:hover {
    background: transparent;
    border: 1px solid $light-green;
    color: $light-green;
}
}


</style>