export const load = async ({ setHeaders, url, fetch }) => {
	const response = await fetch(`${url.origin}/api/sheet`);

	if (!response.ok) {
		throw new Error('💩 Could not fetch posts');
	}

	const sheetData: Array = await response.json();
	// Sorting by session
	sheetData.sort((a, b) => {
		const yearAString = (a['Session'] + '').split('-');
		const yearBString = (b['Session'] + '').split('-');

		const yearA = parseInt(yearAString[0], 10);
		const yearB = parseInt(yearBString[0], 10);

		return yearA - yearB;
	});

	sheetData.forEach((element) => {
		const wp = element['WhatsApp Number']?.replace(/[^0-9]/g, '');
		if (wp && wp.startsWith('0')) {
			element['WhatsApp Number'] = `+88${wp}`;
		}
		// now i want to save the element to sheetData
		sheetData.push(element);
	});
	const kritiStudent = sheetData.filter(
		(f: { [x: string]: string }) => f['Are you a_____?'] === 'Job Holder'
	);

	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});
	return { sheetData, kritiStudent };
};
