<script>
    let {label, placeholder, type = 'text'} = $props();
    let value = $state('');
</script>

<label>
    {label}:
    <input {type} {placeholder} {value}>
</label>

<style>
    label {
        display: flex;
        flex-direction: column;
        font-weight: 600;
    }

    input {
        background: var(--gray-dark);
        border: 1px solid var(--gray-light);
        border-radius: 0.313rem;
        color: #FFFFFF;
        padding: 0.313rem 0.625rem;
    }

    input::placeholder {
        color: var(--gray-light);
    }

</style>