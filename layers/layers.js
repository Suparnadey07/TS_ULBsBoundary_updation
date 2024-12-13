var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Telangana_State_2 = new ol.format.GeoJSON();
var features_Telangana_State_2 = format_Telangana_State_2.readFeatures(json_Telangana_State_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Telangana_State_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Telangana_State_2.addFeatures(features_Telangana_State_2);
var lyr_Telangana_State_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Telangana_State_2, 
                style: style_Telangana_State_2,
                popuplayertitle: ' Telangana_State',
                interactive: true,
                title: '<img src="styles/legend/Telangana_State_2.png" />  Telangana_State'
            });
var format_ExclusionofGPs1_3 = new ol.format.GeoJSON();
var features_ExclusionofGPs1_3 = format_ExclusionofGPs1_3.readFeatures(json_ExclusionofGPs1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExclusionofGPs1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExclusionofGPs1_3.addFeatures(features_ExclusionofGPs1_3);
var lyr_ExclusionofGPs1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExclusionofGPs1_3, 
                style: style_ExclusionofGPs1_3,
                popuplayertitle: 'Exclusion of GPs(1)',
                interactive: true,
                title: '<img src="styles/legend/ExclusionofGPs1_3.png" /> Exclusion of GPs(1)'
            });
var format_UpgradationGreaterCorporation_4 = new ol.format.GeoJSON();
var features_UpgradationGreaterCorporation_4 = format_UpgradationGreaterCorporation_4.readFeatures(json_UpgradationGreaterCorporation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UpgradationGreaterCorporation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UpgradationGreaterCorporation_4.addFeatures(features_UpgradationGreaterCorporation_4);
var lyr_UpgradationGreaterCorporation_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UpgradationGreaterCorporation_4, 
                style: style_UpgradationGreaterCorporation_4,
                popuplayertitle: 'Upgradation-Greater Corporation',
                interactive: true,
                title: '<img src="styles/legend/UpgradationGreaterCorporation_4.png" /> Upgradation-Greater Corporation'
            });
var format_UpgradationMunicipalCorporation3_5 = new ol.format.GeoJSON();
var features_UpgradationMunicipalCorporation3_5 = format_UpgradationMunicipalCorporation3_5.readFeatures(json_UpgradationMunicipalCorporation3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UpgradationMunicipalCorporation3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UpgradationMunicipalCorporation3_5.addFeatures(features_UpgradationMunicipalCorporation3_5);
var lyr_UpgradationMunicipalCorporation3_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UpgradationMunicipalCorporation3_5, 
                style: style_UpgradationMunicipalCorporation3_5,
                popuplayertitle: 'Upgradation-Municipal Corporation(3)',
                interactive: true,
                title: '<img src="styles/legend/UpgradationMunicipalCorporation3_5.png" /> Upgradation-Municipal Corporation(3)'
            });
var format_InclusionofGPs3_6 = new ol.format.GeoJSON();
var features_InclusionofGPs3_6 = format_InclusionofGPs3_6.readFeatures(json_InclusionofGPs3_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InclusionofGPs3_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InclusionofGPs3_6.addFeatures(features_InclusionofGPs3_6);
var lyr_InclusionofGPs3_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InclusionofGPs3_6, 
                style: style_InclusionofGPs3_6,
                popuplayertitle: 'Inclusion of GPs(3)',
                interactive: true,
                title: '<img src="styles/legend/InclusionofGPs3_6.png" /> Inclusion of GPs(3)'
            });
var format_NewULBs16_7 = new ol.format.GeoJSON();
var features_NewULBs16_7 = format_NewULBs16_7.readFeatures(json_NewULBs16_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewULBs16_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewULBs16_7.addFeatures(features_NewULBs16_7);
var lyr_NewULBs16_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewULBs16_7, 
                style: style_NewULBs16_7,
                popuplayertitle: 'New ULBs(16)',
                interactive: true,
                title: '<img src="styles/legend/NewULBs16_7.png" /> New ULBs(16)'
            });
var format_ExistingULBs144_8 = new ol.format.GeoJSON();
var features_ExistingULBs144_8 = format_ExistingULBs144_8.readFeatures(json_ExistingULBs144_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingULBs144_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingULBs144_8.addFeatures(features_ExistingULBs144_8);
var lyr_ExistingULBs144_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingULBs144_8, 
                style: style_ExistingULBs144_8,
                popuplayertitle: 'Existing ULBs(144)',
                interactive: true,
                title: '<img src="styles/legend/ExistingULBs144_8.png" /> Existing ULBs(144)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Telangana_State_2.setVisible(true);lyr_ExclusionofGPs1_3.setVisible(true);lyr_UpgradationGreaterCorporation_4.setVisible(true);lyr_UpgradationMunicipalCorporation3_5.setVisible(true);lyr_InclusionofGPs3_6.setVisible(true);lyr_NewULBs16_7.setVisible(true);lyr_ExistingULBs144_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_Telangana_State_2,lyr_ExclusionofGPs1_3,lyr_UpgradationGreaterCorporation_4,lyr_UpgradationMunicipalCorporation3_5,lyr_InclusionofGPs3_6,lyr_NewULBs16_7,lyr_ExistingULBs144_8];
lyr_Telangana_State_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Area_SQ_KM': 'Area_SQ_KM', 'Population': 'Population(2011)', 'Pop_Den': 'Population Density(P/Sq.Km)', 'No_ULBs': 'No_ULBs', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Urban_pop': 'Urban(ULBs Population)', 'Area': 'ULB Area(SQ.KM)', 'ULB_P_Dens': 'ULBs PopDensity(P/SQ.KM)', });
lyr_ExclusionofGPs1_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Ulb_Name': 'Name of ULB', 'Present_Area': 'Present Area(SQ.KM)', 'Present_pop': 'Present Population(2021)', 'Present_Pop_Den': 'Present PopDensity(P/SQ.KM)', 'Proposed_Area': 'Proposed Area(SQ.KM)', 'Proposed_Pop': 'Proposed Population(2021)', 'Proposed_pop_Den': 'Proposed PopDensity(P/SQ.KM)', 'No_Vill_Exclusion': 'No of Village Exclusion', 'Name_Vill_Exclusion': 'Name of Village Exclusion', });
lyr_UpgradationGreaterCorporation_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Ulb_Name': 'Name of ULB', 'Present_Area': 'Present_Area', 'Present_pop': 'Present Population(2021)', 'Present_Pop_Den': 'Present PopDensity(P/SQ.KM)', 'Proposed_Area': 'Proposed Area(SQ.KM)', 'Proposed_Pop': 'Proposed Population(2021)', 'Proposed_pop_Den': 'Proposed PopDensity(P/SQ.KM)', 'No_GPInclude': 'No of GP Included', 'Name_GP_Includ': 'Name of GP Included', });
lyr_UpgradationMunicipalCorporation3_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Ulb_Name': 'Name of ULB', 'Present_Area': 'Present Area(SQ.KM)', 'Present_pop': 'Present Population(2021)', 'Present_Pop_Den': 'Present PopDensity(P/SQ.KM)', 'Proposed_Area': 'Proposed Area(SQ.KM)', 'Proposed_Pop': 'Proposed Population(2021)', 'Proposed_pop_Den': 'Proposed PopDensity(P/SQ.KM)', 'No_GPInclude': 'No of GP Included', 'Name_GP_Includ': 'Name of GP Included', });
lyr_InclusionofGPs3_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Ulb_Name': 'Name of ULB', 'Present_Area': 'Present Area(SQ.KM)', 'Present_pop': 'Present Population(2021)', 'Present_Pop_Den': 'Present PopDensity(P/SQ.KM)', 'Proposed_Area': 'Proposed Area(SQ.KM)', 'Proposed_Pop': 'Proposed Population(2021)', 'Proposed_pop_Den': 'Proposed PopDensity(P/SQ.KM)', 'No_GPInclude': 'No of GP Included', 'Name_GP_Includ': 'Name of GP Included', });
lyr_NewULBs16_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name of ULBs', 'Area': 'Area(SQ.KM)', 'No_Vill': 'No of Villages', 'Name_Vill': 'Name of Villages', 'Population': 'Population(2021)', 'Pop_Den': 'Population Density(P/SQ.KM)', });
lyr_ExistingULBs144_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'Name': 'Name of ULBs', 'Area': 'Area(SQ.KM)', 'Population': 'Population(2011)', 'Pop_Density': 'Population Density(P/Sq.Km)', });
lyr_Telangana_State_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Area_SQ_KM': 'TextEdit', 'Population': 'Range', 'Pop_Den': 'Range', 'No_ULBs': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Urban_pop': 'Range', 'Area': 'TextEdit', 'ULB_P_Dens': 'Range', });
lyr_ExclusionofGPs1_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Ulb_Name': 'TextEdit', 'Present_Area': 'TextEdit', 'Present_pop': 'Range', 'Present_Pop_Den': 'Range', 'Proposed_Area': 'TextEdit', 'Proposed_Pop': 'Range', 'Proposed_pop_Den': 'Range', 'No_Vill_Exclusion': 'Range', 'Name_Vill_Exclusion': 'TextEdit', });
lyr_UpgradationGreaterCorporation_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Ulb_Name': 'TextEdit', 'Present_Area': 'TextEdit', 'Present_pop': 'Range', 'Present_Pop_Den': 'Range', 'Proposed_Area': 'TextEdit', 'Proposed_Pop': 'Range', 'Proposed_pop_Den': 'Range', 'No_GPInclude': 'Range', 'Name_GP_Includ': 'TextEdit', });
lyr_UpgradationMunicipalCorporation3_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Ulb_Name': 'TextEdit', 'Present_Area': 'TextEdit', 'Present_pop': 'Range', 'Present_Pop_Den': 'Range', 'Proposed_Area': 'TextEdit', 'Proposed_Pop': 'Range', 'Proposed_pop_Den': 'Range', 'No_GPInclude': 'Range', 'Name_GP_Includ': 'TextEdit', });
lyr_InclusionofGPs3_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Ulb_Name': 'TextEdit', 'Present_Area': 'TextEdit', 'Present_pop': 'Range', 'Present_Pop_Den': 'Range', 'Proposed_Area': 'TextEdit', 'Proposed_Pop': 'Range', 'Proposed_pop_Den': 'Range', 'No_GPInclude': 'Range', 'Name_GP_Includ': 'TextEdit', });
lyr_NewULBs16_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'No_Vill': 'Range', 'Name_Vill': 'TextEdit', 'Population': 'Range', 'Pop_Den': 'Range', });
lyr_ExistingULBs144_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'Population': 'Range', 'Pop_Density': '', });
lyr_Telangana_State_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'Area_SQ_KM': 'inline label - visible with data', 'Population': 'inline label - visible with data', 'Pop_Den': 'inline label - visible with data', 'No_ULBs': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Urban_pop': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'ULB_P_Dens': 'inline label - visible with data', });
lyr_ExclusionofGPs1_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Ulb_Name': 'inline label - visible with data', 'Present_Area': 'inline label - visible with data', 'Present_pop': 'inline label - visible with data', 'Present_Pop_Den': 'inline label - visible with data', 'Proposed_Area': 'inline label - visible with data', 'Proposed_Pop': 'inline label - visible with data', 'Proposed_pop_Den': 'inline label - visible with data', 'No_Vill_Exclusion': 'inline label - visible with data', 'Name_Vill_Exclusion': 'inline label - visible with data', });
lyr_UpgradationGreaterCorporation_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Ulb_Name': 'inline label - visible with data', 'Present_Area': 'inline label - visible with data', 'Present_pop': 'inline label - visible with data', 'Present_Pop_Den': 'inline label - visible with data', 'Proposed_Area': 'inline label - visible with data', 'Proposed_Pop': 'inline label - visible with data', 'Proposed_pop_Den': 'inline label - visible with data', 'No_GPInclude': 'inline label - visible with data', 'Name_GP_Includ': 'inline label - visible with data', });
lyr_UpgradationMunicipalCorporation3_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Ulb_Name': 'inline label - visible with data', 'Present_Area': 'inline label - visible with data', 'Present_pop': 'inline label - visible with data', 'Present_Pop_Den': 'inline label - visible with data', 'Proposed_Area': 'inline label - visible with data', 'Proposed_Pop': 'inline label - visible with data', 'Proposed_pop_Den': 'inline label - visible with data', 'No_GPInclude': 'inline label - visible with data', 'Name_GP_Includ': 'inline label - visible with data', });
lyr_InclusionofGPs3_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'Ulb_Name': 'inline label - visible with data', 'Present_Area': 'inline label - visible with data', 'Present_pop': 'inline label - visible with data', 'Present_Pop_Den': 'inline label - visible with data', 'Proposed_Area': 'inline label - visible with data', 'Proposed_Pop': 'inline label - visible with data', 'Proposed_pop_Den': 'inline label - visible with data', 'No_GPInclude': 'inline label - visible with data', 'Name_GP_Includ': 'inline label - visible with data', });
lyr_NewULBs16_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'No_Vill': 'inline label - visible with data', 'Name_Vill': 'inline label - visible with data', 'Population': 'inline label - visible with data', 'Pop_Den': 'inline label - visible with data', });
lyr_ExistingULBs144_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Population': 'inline label - visible with data', 'Pop_Density': 'header label - visible with data', });
lyr_ExistingULBs144_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});