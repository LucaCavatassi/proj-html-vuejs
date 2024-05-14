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
        <div class="row overlay">
            <div class="ms_margin col text-center">
                <h1>BENVENUTI</h1>

            </div>
        </div>
    </div>
    <!-- /OVERLAY-HERO -->
</template>

<style scoped lang="scss">
.overlay {
    position: absolute; 
    z-index: 999;
    h1 {
        color: red;
    }
    .ms_margin{
        margin-top: 200px;
    }
}

</style>