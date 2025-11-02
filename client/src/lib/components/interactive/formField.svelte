<script>
    let {label, placeholder, type = 'text', disabled=false} = $props();
    let value = $state('');
</script>

<label>
    {label}:
    <input {type} {placeholder} {value} {disabled}>
</label>

<style>
    label {
        display: flex;
        flex-direction: column;
        font-weight: 600;
        gap: 0.313rem;
    }

    input {
        background: var(--gray-darkest);
        border: 1px solid var(--gray-light);
        border-radius: 0.313rem;
        color: #FFFFFF;
        padding: 0.313rem 0.625rem;
    }

    input::placeholder {
        color: var(--gray-light);
    }

    input:disabled {
        cursor: not-allowed;
        border-color: var(--gray);
    }

    input:disabled::placeholder {
        color: var(--gray);
    }

</style>