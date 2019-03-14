/**
 * Config manager class for irieTabes. Create a ConfigManager object to manage the devloper given config object. 
 * 
 * @constructor {...} ...
 * @throws {error} Validation error 
 */
class ConfigManager {
	constructor(metaConfig, config) {
		this.givenConfig = config;
		this.metaConfig = metaConfig;
		if (arguments.length > 0) {
			this.config = this.applyConfig(this.validateConfig(this.givenConfig));
		}
	}

	/**
	 * You better validate the provided configuration object bevore you apply it
	 * 
	 * @throws {Error} Validation error 
	 * @returns {Object} Normalised configuration object
	 */
	validateConfig(config) {

		function generateNoArrayMetaConfig(config){
			function iterateChildren(config){
				config = config.reduce(function(map, obj) {
					map[obj.configPropertyName] = obj;
    				return map;
				}, {});

				for (const element of Object.keys(config)) {
					if(config[element].children){
						return iterateChildren(config[element].children);
					}
				}
			}
			
			return iterateChildren(config);
		}
		var noArrayMetaConfig = generateNoArrayMetaConfig(this.metaConfig);
		console.log(noArrayMetaConfig);

		//console.log(noArrayMetaConfig);

		/**
		 * You better validate the provided configuration object bevore you apply it
		 * 
		 * @returns {Object} Normalised configuration object
		 */
		function validateProperty(metaConfig) {

			var validationStatus = true;

			metaConfig.forEach(function (element) {
				if (element.dependsOn) {
					element.dependsOn.forEach(function (element1) {
						//console.log(metaConfigCopy);
						//console.log(element1);
						//validateProperty(,eval('config.' + element1))
					});
				}
			});
			return validationStatus;
		}

		/**
		 * You better validate the provided configuration object bevore you apply it
		 * 
		 * @returns {Object} Normalised configuration object
		 */
		function validateProperties(metaProperty, configProperty) {
			validateProperty(metaProperty);
			metaProperty.forEach(function (element, index) {
				if (element.children) {
					return validateProperties(element.children, configProperty[metaProperty[index].configPropertyName]);
				}
			});
		}

		validateProperties(this.metaConfig, this.givenConfig);
		return config;
	}

	/**
	 * You better validate the provided configuration object bevore you apply it
	 * 
	 * @returns {Object} Normalised configuration object
	 */
	applyConfig(validatedConfig) {
		return validatedConfig;
	}
}

export { ConfigManager };