const axios = require('axios');
require('dotenv/config');

(async function () {
	const sms = await axios({
		url: 'https://api2.totalvoice.com.br/sms',
		method: 'post',
		headers: {
			'Access-Token': process.env.API_KEY
		},
		data: {
			'numero_destino': process.env.TELEFONE,
			'mensagem': process.env.MENSAGEM 
		}
	});
	console.log(sms.data);
})();