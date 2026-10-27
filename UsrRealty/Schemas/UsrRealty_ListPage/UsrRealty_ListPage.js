define("UsrRealty_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealty"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1
						},
						{
							"id": "c8689d78-80ba-4e71-8cf2-fa478e3be5bc",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "fd4b3485-a46e-4219-b775-adef1210fe51",
							"code": "PDS_CreatedBy",
							"caption": "#ResourceString(PDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "df82fae6-d3af-1037-0abf-f6667ccf9668",
							"code": "PDS_UsrColumn10",
							"caption": "#ResourceString(PDS_UsrColumn10)#",
							"dataValueType": 10
						},
						{
							"id": "1aa76c50-bd61-2d1e-26ad-a7f734517432",
							"code": "PDS_UsrColumn11",
							"caption": "#ResourceString(PDS_UsrColumn11)#",
							"dataValueType": 10
						},
						{
							"id": "ddbdc41b-4d70-6b0f-5ea2-fe154526b8b4",
							"code": "PDS_UsrColumn8",
							"caption": "#ResourceString(PDS_UsrColumn8)#",
							"dataValueType": 32
						},
						{
							"id": "8e971792-211b-5a6e-2097-4ff2abe4f74a",
							"code": "PDS_UsrColumn10",
							"caption": "#ResourceString(PDS_UsrColumn10)#",
							"dataValueType": 10
						},
						{
							"id": "e8c4291c-524d-7c56-96ab-9d2413853887",
							"code": "PDS_UsrColumn8",
							"caption": "#ResourceString(PDS_UsrColumn8)#",
							"dataValueType": 32
						},
						{
							"id": "d1e7bf7b-f1a0-d98e-af60-7d4f1dc10dda",
							"code": "PDS_UsrColumn11",
							"caption": "#ResourceString(PDS_UsrColumn11)#",
							"dataValueType": 10
						},
						{
							"id": "ca126fc3-060a-0980-7d97-b0e20358f7fb",
							"code": "PDS_UsrColumn10",
							"caption": "#ResourceString(PDS_UsrColumn10)#",
							"dataValueType": 10
						},
						{
							"id": "06da5810-d62e-b1ca-86dd-c21dbce2b635",
							"code": "PDS_UsrColumn11",
							"caption": "#ResourceString(PDS_UsrColumn11)#",
							"dataValueType": 10
						},
						{
							"id": "0b3108c1-ab59-faa1-e97c-e29b329b7c6a",
							"code": "PDS_UsrColumn8",
							"caption": "#ResourceString(PDS_UsrColumn8)#",
							"dataValueType": 32
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "UsrRealty",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"PDS_CreatedBy": {
						"modelConfig": {
							"path": "PDS.CreatedBy"
						}
					},
					"PDS_UsrColumn10": {
						"modelConfig": {
							"path": "PDS.UsrColumn10"
						}
					},
					"PDS_UsrColumn11": {
						"modelConfig": {
							"path": "PDS.UsrColumn11"
						}
					},
					"PDS_UsrColumn8": {
						"modelConfig": {
							"path": "PDS.UsrColumn8"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrRealty",
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						},
						"CreatedBy": {
							"path": "CreatedBy"
						},
						"UsrColumn10": {
							"path": "UsrColumn10"
						},
						"UsrColumn11": {
							"path": "UsrColumn11"
						},
						"UsrColumn8": {
							"path": "UsrColumn8"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});