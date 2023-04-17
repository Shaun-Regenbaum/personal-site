<script lang="ts">
	export let data: any;
	data = data;
	console.log('client', data);
</script>

<form method="POST">
	<input type="url" name="url" />
	<button type="submit">Submit</button>
</form>
<!-- Display a table with the fetch response data -->

<table>
	<table>
		<thead>
			<tr>
				{#each Object.keys(data) as key}
					<th>{key}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			<tr>
				{#each Object.values(data) as value}
					<td>{value}</td>
				{/each}
			</tr>
		</tbody>
	</table>
</table>

<!-- Display an error message if there was an error
{#if error}
	<p>An error occurred: {error.message}</p>
{/if}

Display a message if the fetch was successful but the data is empty
{#if status === 200 && data.length === 0}
	<p>No data was returned</p>
{/if}
-->
