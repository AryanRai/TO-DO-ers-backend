<script>
    export let type = 'button'
</script>



<style>
    button {
        cursor: pointer;
    }
    .primary-btn {
        border: none;
        background-color: #039be5;
        color: white
    }
</style>


<button class="primary-btn" {type}><slot /></button>