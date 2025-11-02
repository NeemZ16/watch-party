<script>
	/** @type {'button' | 'submit' | 'reset'} */
	export let type = 'button';
	
    /** @type {'primary' | 'secondary' | 'neutral' | 'delete'} */
    export let variant = 'primary';
	export let disabled = false;
</script>

<button {type} class={`btn ${variant}`} {disabled}>
	<slot />
</button>

<style>
	.btn {
		padding: 0.313rem 0.625rem;
		border: none;
		border-radius: 0.313rem;
		cursor: pointer;
        font-size: 1rem;
        color: #000;
	}

	.btn.primary {
		background: var(--primary);
		color: #FFF;
	}

	.btn.secondary {
		background: var(--secondary);
	}
	
    .btn.neutral {
		background: var(--neutral);
	}
    
    .btn.delete {
		background: var(--delete);
	}
    
    .btn.primary:hover {
		background: var(--primary-hov);
	}

    .btn.secondary:hover {
		background: var(--secondary-hov);
	}

    .btn.neutral:hover {
		background: var(--neutral-hov);
	}

    .btn.delete:hover {
		background: var(--delete-hov);
	}

    .btn:disabled {
        cursor: not-allowed;
        color: var(--gray-dark);
    }

    .btn.primary:disabled {
		background: var(--primary-hov);
        color: var(--gray-light);
	}

    .btn.secondary:disabled {
		background: var(--secondary-hov);
	}

    .btn.neutral:disabled {
		background: var(--neutral-hov);
	}

    .btn.delete:disabled {
		background: var(--delete-hov);
	}
</style>
