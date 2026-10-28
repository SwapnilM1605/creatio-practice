define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "6084203b-6f8a-4629-9e3a-90f975142d80",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_x4kbh9l",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_x4kbh9l_label)#",
					"control": "$PDS_UsrPrice_7jxn51y",
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_2njclzi",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_3h8taua",
					"control": "$PDS_UsrArea_3h8taua",
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_dzo4spx",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrRealtyType_sez7oq8",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrRealtyType_sez7oq8"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_w1n959s",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_w1n959s_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_dzo4spx",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_6z5ur0h",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrRealtyOfferType_dgka3vo",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrRealtyOfferType_dgka3vo"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_dx0gyxt",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_dx0gyxt_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_6z5ur0h",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_rlnb2og",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_oyqxsub",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager_oyqxsub"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_2darzja",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_2darzja_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_rlnb2og",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_i7z41en",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 7,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_av456yq",
					"control": "$PDS_UsrNumber_av456yq",
					"placeholder": "",
					"tooltip": "",
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 8,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrColumn14_sexh8bi",
					"control": "$PDS_UsrColumn14_sexh8bi",
					"placeholder": "",
					"tooltip": "",
					"multiline": false,
					"labelPosition": "auto",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "outline",
					"size": "medium",
					"iconPosition": "only-text",
					"clicked": {
						"request": "UsrPushButtonRequest",
						"params": {}
					},
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 9,
						"rowSpan": 1
					}
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn15_0al8oo8",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrColumn15_0al8oo8",
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_ocjjhoi",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ocjjhoi_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Country",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_duhkg3i",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCity_duhkg3i",
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_kdk9ozr",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_kdk9ozr_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "City",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Percent",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrRealtyOfferTypeUsrCommissionPercent_o8n7j6b",
					"control": "$PDS_UsrRealtyOfferTypeUsrCommissionPercent_o8n7j6b",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_ohv6wt9",
					"control": "$PDS_UsrCommission_ohv6wt9",
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "VisitsPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(VisitsPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_azafkpp",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "VisitsPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_wn4fup7",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_azafkpp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_vudbg6x",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "VisitsPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "VisitsDetail",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$DataGrid_kjrhfzq",
					"activeRow": "$DataGrid_kjrhfzq_ActiveRow",
					"selectionState": "$DataGrid_kjrhfzq_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_kjrhfzq_SelectionState"
					},
					"primaryColumnName": "DataGrid_kjrhfzqDS_Id",
					"columns": [
						{
							"id": "62226d66-770b-6369-ddad-e2edbad09086",
							"code": "DataGrid_kjrhfzqDS_UsrComment",
							"caption": "#ResourceString(DataGrid_kjrhfzqDS_UsrComment)#",
							"dataValueType": 28
						},
						{
							"id": "130e8096-335e-326b-d218-d7ee9895408c",
							"code": "DataGrid_kjrhfzqDS_UsrVisitDateTime",
							"caption": "#ResourceString(DataGrid_kjrhfzqDS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "2f0235ad-db1d-2726-4fa6-ca21a2fdbc0d",
							"code": "DataGrid_kjrhfzqDS_UsrPotentialCustomer",
							"caption": "#ResourceString(DataGrid_kjrhfzqDS_UsrPotentialCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "f0ac97d2-0165-62b2-965b-6ab0acb3a7e4",
							"code": "DataGrid_kjrhfzqDS_UsrManager",
							"caption": "#ResourceString(DataGrid_kjrhfzqDS_UsrManager)#",
							"dataValueType": 10
						},
						{
							"id": "6efae3b8-5c9e-b793-f44f-db400fd5cb79",
							"code": "DataGrid_kjrhfzqDS_UsrComment",
							"caption": "#ResourceString(DataGrid_kjrhfzqDS_UsrComment)#",
							"dataValueType": 28
						},
						{
							"id": "1b4c18e0-d750-b79f-c701-d2927a335351",
							"code": "DataGrid_kjrhfzqDS_CreatedOn",
							"caption": "#ResourceString(DataGrid_kjrhfzqDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_vudbg6x",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_kjrhfzq_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_kjrhfzqDS",
							"filters": "$DataGrid_kjrhfzq | crt.ToCollectionFilters : 'DataGrid_kjrhfzq' : $DataGrid_kjrhfzq_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_kjrhfzq_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "VisitsDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_kjrhfzq_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_kjrhfzqDS",
							"filters": "$DataGrid_kjrhfzq | crt.ToCollectionFilters : 'DataGrid_kjrhfzq' : $DataGrid_kjrhfzq_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_kjrhfzq_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_kjrhfzq_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_kjrhfzq_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "VisitsDetail",
							"filters": "$DataGrid_kjrhfzq | crt.ToCollectionFilters : 'DataGrid_kjrhfzq' : $DataGrid_kjrhfzq_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_kjrhfzq_SelectionState"
						}
					}
				},
				"parentName": "VisitsDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_kjrhfzq_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Merge",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_kjrhfzqDS",
							"selectionState": "$DataGrid_kjrhfzq_SelectionState"
						}
					}
				},
				"parentName": "VisitsDetail",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DataGrid_kjrhfzq_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_kjrhfzqDS",
							"filters": "$DataGrid_kjrhfzq | crt.ToCollectionFilters : 'DataGrid_kjrhfzq' : $DataGrid_kjrhfzq_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_kjrhfzq_SelectionState"
						}
					}
				},
				"parentName": "VisitsDetail",
				"propertyName": "bulkActions",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_7jxn51y": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						}
					},
					"PDS_UsrArea_3h8taua": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						}
					},
					"PDS_UsrRealtyType_sez7oq8": {
						"modelConfig": {
							"path": "PDS.UsrRealtyType"
						}
					},
					"PDS_UsrRealtyType_sez7oq8_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrRealtyOfferType_dgka3vo": {
						"modelConfig": {
							"path": "PDS.UsrRealtyOfferType"
						}
					},
					"PDS_UsrRealtyOfferType_dgka3vo_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrManager_oyqxsub": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_oyqxsub_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrNumber_av456yq": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrColumn14_sexh8bi": {
						"modelConfig": {
							"path": "PDS.UsrColumn14"
						}
					},
					"PDS_UsrColumn15_0al8oo8": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrColumn15_0al8oo8_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrCity_duhkg3i": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCity_duhkg3i_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrRealtyOfferTypeUsrCommissionPercent_o8n7j6b": {
						"modelConfig": {
							"path": "PDS.UsrRealtyOfferTypeUsrCommissionPercent_o8n7j6b"
						}
					},
					"PDS_UsrCommission_ohv6wt9": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"DataGrid_kjrhfzq": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_kjrhfzqDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrVisitDateTime"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_kjrhfzqDS_UsrComment": {
									"modelConfig": {
										"path": "DataGrid_kjrhfzqDS.UsrComment"
									}
								},
								"DataGrid_kjrhfzqDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "DataGrid_kjrhfzqDS.UsrVisitDateTime"
									}
								},
								"DataGrid_kjrhfzqDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "DataGrid_kjrhfzqDS.UsrPotentialCustomer"
									}
								},
								"DataGrid_kjrhfzqDS_UsrManager": {
									"modelConfig": {
										"path": "DataGrid_kjrhfzqDS.UsrManager"
									}
								},
								"DataGrid_kjrhfzqDS_CreatedOn": {
									"modelConfig": {
										"path": "DataGrid_kjrhfzqDS.CreatedOn"
									}
								},
								"DataGrid_kjrhfzqDS_Id": {
									"modelConfig": {
										"path": "DataGrid_kjrhfzqDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"DataGrid_kjrhfzqDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrRealtyOfferTypeUsrCommissionPercent_o8n7j6b": {
									"path": "UsrRealtyOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"DataGrid_kjrhfzqDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrComment": {
									"path": "UsrComment"
								},
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
		    {
		        request: "crt.SaveRecordRequest",
		        handler: async (request, next) => {
		            const price = await request.$context.PDS_UsrPrice_7jxn51y;
		            const area = await request.$context.PDS_UsrArea_3h8taua;
		
		            if (price !== null && price !== undefined && price < 50) {
		                Terrasoft.showInformation("Price can't be less than $50");
		                return false;
		            }
		
		            if (area !== null && area !== undefined && area < 100) {
		                Terrasoft.showInformation("Area can't be less than 100 square feet");
		                return false;
		            }
		
		            return next?.handle(request);
		        }
		    },
		    {
			    request: "UsrPushButtonRequest",
			    handler: async (request, next) => {
			        const price = await request.$context.PDS_UsrPrice_7jxn51y;
			        console.log("Price is:", price);
			        request.$context.PDS_UsrArea_3h8taua = price * 0.2;
			
			        Terrasoft.showInformation("Hello from a localizable string test!");
			
			        return next?.handle(request);
			    }
			},
		    {
		        request: "crt.HandleViewModelAttributeChangeRequest",
		        handler: async (request, next) => {
		            if (request.attributeName === "PDS_UsrPrice_7jxn51y" ||
		                request.attributeName === "PDS_UsrRealtyOfferTypeUsrCommissionPercent_o8n7j6b") {
		                const price = await request.$context.PDS_UsrPrice_7jxn51y;
		                const percent = await request.$context.PDS_UsrRealtyOfferTypeUsrCommissionPercent_o8n7j6b;
		                request.$context.PDS_UsrCommission_ohv6wt9 = (price * percent) / 100;
		            }
		            return next?.handle(request);
		        }
		    }
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});