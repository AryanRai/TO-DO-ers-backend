<script>
    export let id = ''
    export let type = ''
    export let value = ''
    export let placeholder = ''
</script>


<style>
    input {
        width: 100%;
    }
</style>

<div>
    <input {id} type="{type}" value="{value}" on:input placeholder="{placeholder}"/>
</div>