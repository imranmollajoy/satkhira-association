import PublicGoogleSheetsParser from 'public-google-sheets-parser';

export const GET = async () => {
	const parser = new PublicGoogleSheetsParser('1pjtSlyL4JlgoIF4p5T5tQC-PRa5nhNrFOG0QXR8syN8');
	const sheetData = await parser.parse();
	const responseOptions = {
		status: 200,
		headers: {
			'content-type': 'application/json'
		}
	};
	return new Response(JSON.stringify(sheetData), responseOptions);
};
