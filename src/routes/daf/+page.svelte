<!-- 
	
<main class='mx-auto text-gray-700 p-4'>
			<h1>Daf</h1>
			<form class='flex'>
				<Dropdown
					options={masechtot}
					option={masechta}
					setOption={setMasechta}
				></Dropdown>
				<button
					type='submit'
					on:click={() => {
						setSearchParams({ masechta: masechta() });
						newData(masechta());
					}}
				>
					Get Daf
				</button>
			</form>

			<div class='pl-50 w-[660px]'>
				<div
					class='select-auto block'
					id='daf-container'
				></div>
			</div>
		</main>

        import dafRenderer from 'daf-renderer';





<script>
const masechtot = [
    'Brachot',
    'Shabbat',
    'Eruvin',
    'Pesachim',
    'Shekalim',
    'Yoma',
    'Sukkah',
    'Beitzah',
    'RoshHashana',
    'Taanit',
    'megillah',
    'moed katan',
    'chagigah',
    'yevamot',
    'ketubot',
    'nedarim',
    'nazir',
    'sotah',
    'gitin',
    'kidushin',
    'bava kamma',
    'bava metzia',
    'bava batra',
    'sanhedrin',
    'makkot',
    'shevuot',
    'avodah zarah',
    'horayot',
    'zevachim',
    'menachot',
    'chullin',
    'bechorot',
    'arachin',
    'temurah',
    'keritot',
    'meilah',
    'tamid',
    'middot',
    'kinot',
    'niddah',
];

    const response = await fetch(
        `http://127.0.0.1:3000/api/getDaf?masechta=${masechta}&daf=1`
    );
    const newD = (await response.json()) as Daf;



      const options =   {contentWidth: '600px',
        fontSize: {
            side: '10.5px',
        },
        padding: {
            vertical: '10px',
        },
        lineHeight: {
            main: '16px',
        },
        mainWidth: '42%',
        lineBreaks: 'br',
    }
   
</script> -->
