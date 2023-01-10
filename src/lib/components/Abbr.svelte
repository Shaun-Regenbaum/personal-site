<script lang="ts">
	export let abbr: string;
	export let expanded: string;
	export let link: string | undefined = undefined;
	let hideExpanded: boolean = true;
</script>

<span
	><button
		on:click={() => {
			hideExpanded = !hideExpanded;
		}}
		class="inline border-b-2 border-dashed hover:bg-gray-100"
		>{abbr}<span
			hidden={!hideExpanded}
			class="text-xs text-gray-600 align-super">{'(?)'}</span
		>
		<span
			hidden={hideExpanded}
			class={'text-blue-400 '}>{' (' + expanded + ') '}</span
		>
	</button>{#if link}
		<a
			hidden={hideExpanded}
			href={link}
			class="text-xs text-blue-500 align-super"
		>
			{' ' + '|#|'}
		</a>
	{/if}
</span>
