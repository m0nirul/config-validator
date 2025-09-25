import { validateConfig, lintConfig } from './validator';

const main = () => {
	const args = process.argv.slice(2);
	if (args.length < 2) {
		console.error('Usage: config-validator <command> <config-file>');
		process.exit(1);
	}

	const command = args[0];
	const configFile = args[1];

	if (command === 'validate') {
		validateConfig(configFile).then(result => {
			console.log(result);
		}).catch(err => {
			console.error(err);
		});
	} else if (command === 'lint') {
		lintConfig(configFile).then(result => {
			console.log(result);
		}).catch(err => {
			console.error(err);
		});
	} else {
		console.error('Unknown command: ', command);
		process.exit(1);
	}
};

main();