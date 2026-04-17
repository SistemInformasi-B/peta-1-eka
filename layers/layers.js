var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Batas_Wilayah_KelurahanDesa_10K_AR_1 = new ol.format.GeoJSON();
var features_Batas_Wilayah_KelurahanDesa_10K_AR_1 = format_Batas_Wilayah_KelurahanDesa_10K_AR_1.readFeatures(json_Batas_Wilayah_KelurahanDesa_10K_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Wilayah_KelurahanDesa_10K_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Wilayah_KelurahanDesa_10K_AR_1.addFeatures(features_Batas_Wilayah_KelurahanDesa_10K_AR_1);
var lyr_Batas_Wilayah_KelurahanDesa_10K_AR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Wilayah_KelurahanDesa_10K_AR_1, 
                style: style_Batas_Wilayah_KelurahanDesa_10K_AR_1,
                popuplayertitle: 'Batas_Wilayah_KelurahanDesa_10K_AR',
                interactive: true,
                title: '<img src="styles/legend/Batas_Wilayah_KelurahanDesa_10K_AR_1.png" /> Batas_Wilayah_KelurahanDesa_10K_AR'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Batas_Wilayah_KelurahanDesa_10K_AR_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Batas_Wilayah_KelurahanDesa_10K_AR_1];
lyr_Batas_Wilayah_KelurahanDesa_10K_AR_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_Batas_Wilayah_KelurahanDesa_10K_AR_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_Batas_Wilayah_KelurahanDesa_10K_AR_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'header label - visible with data', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_Batas_Wilayah_KelurahanDesa_10K_AR_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});