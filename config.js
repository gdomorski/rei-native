import { ipAddress } from './generatedConfig'

const Configs = {
	development: {
		devMode: 'development',
		apiHost: `http://${ipAddress}:5000`,
		cdnHost: 'https://s3.amazonaws.com/rei-today/native'
	},
	production: {
		brand: "REI Network",
		apiHost: 'https://forceserver-ggxrtioaew.now.sh',
		cdnHost: 'https://s3.amazonaws.com/rei-today/native'
	}
};

const isDevelopment = process.env.NODE_ENV === 'development'
export default Configs[process.env.NODE_ENV]
