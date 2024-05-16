<script>
export default {

    data(){
        return{
            videoUrl: ""
        }
    },

    methods: {
        urlOnClick () {
            this.videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?si=pnVeLrpkhMhRVFnX"
        },

        stopOnClick () {
            this.videoUrl = ""
        }
    }
}
</script>

<template>
                
    <!-- OPEN MODAL -->
    <button @click="urlOnClick" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn ms-btn rounded-circle"><i class="fa-solid fa-play"></i></button>
    <!-- /OPEN MODAL -->

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">

                <!-- CLOSE -->
                <div class="modal-header justify-content-between">
                    <span class="fw-bold">Click to close</span>
                    <button id="closeBtn" @click="stopOnClick" type="button" class="btn" data-bs-dismiss="modal">&cross;</button>
                </div>
                <!-- /CLOSE -->

                <!-- MODAL CONTENT -->
                <div class="modal-body d-flex justify-content-center">
                    <iframe width="760" height="415" :src="videoUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <!-- /MODAL CONTENT -->

            </div>
        </div>
    </div>
    <!-- /Modal -->

</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

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


    .ms-btn {
        height: 80px;
        width: 80px;
    }
    
    .modal {
    --bs-modal-width: 600px;
    --bs-modal-bg: black;
    }

    .modal-header {
        border: 0px;
        color: white;
        height: 50px;
    }

    .modal-body {
        padding: 0;
    }

    #closeBtn{
        width: 10%;
        padding: 5px;
    }
</style>