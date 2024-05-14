<script>

export default {
    data(){
        return{
            
        }
    },
    
}
</script>

<template>
    <!-- OPEN MODAL -->
    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn ms-btn rounded-circle"><i class="fa-solid fa-play"></i></button>
    <!-- /OPEN MODAL -->

    <!-- MODAL -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">          
                <!-- BODY -->
                <div class="modal-body">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=jJhzjlokHY9dKjaR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <!-- BODY -->
            </div>
        </div>
    </div>
    <!-- /MODAL -->
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
</style>