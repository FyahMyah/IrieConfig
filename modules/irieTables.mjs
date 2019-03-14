import { ConfigManager } from './ConfigManager.mjs';
function irieTable (config) {
var metaConfig =[
			{
				configPropertyName: 'pagination',
				mustBeTypeOf: ['bool', 'object'],
				defaultValue: false,
				children: [
					{
						configPropertyName: 'server',
						mustBeTypeOf: ['bool', 'object'],
						defaultValue: false,
						dependsOn: ['pagination.server.offsetUrlParameter', 'pagination.server.maxValueUrlParameter', 'pagination.server.responseCountProperty'],
						children: [
							{
								configPropertyName: 'offsetUrlParameter',
								mustBeTypeOf: ['string'],
								notNull: true
							},
							{
								configPropertyName: 'maxValueUrlParameter',
								mustBeTypeOf: ['string'],
								notNull: true
							},
							{
								configPropertyName: 'responseCountProperty',
								mustBeTypeOf: ['string'],
								notNull: true
							}
						]
					},
					{
						configPropertyName: 'page',
						mustBeTypeOf: ['number'],
						defaultValue: 1
					},
					{
						configPropertyName: 'maxValues',
						mustBeTypeOf: ['number'],
						defaultValue: 10
					},
					{
						configPropertyName: 'maxValueSelect',
						mustBeTypeOf: ['object'],
						defaultValue: [10, 25, 50]
					},
					{
						configPropertyName: 'morePagesIndicators',
						mustBeTypeOf: ['bool'],
						defaultValue: true
					}
				]
			}
		];


    new ConfigManager(metaConfig, config);
    return this;
}

export {irieTable};