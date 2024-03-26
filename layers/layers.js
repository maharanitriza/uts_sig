var wms_layers = [];

var format_WilayahAdministrasi_0 = new ol.format.GeoJSON();
var features_WilayahAdministrasi_0 = format_WilayahAdministrasi_0.readFeatures(json_WilayahAdministrasi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahAdministrasi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahAdministrasi_0.addFeatures(features_WilayahAdministrasi_0);
var lyr_WilayahAdministrasi_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WilayahAdministrasi_0, 
                style: style_WilayahAdministrasi_0,
                popuplayertitle: "Wilayah Administrasi",
                interactive: true,
    title: 'Wilayah Administrasi<br />\
    <img src="styles/legend/WilayahAdministrasi_0_0.png" /> ALANG-ALANGLEBAR<br />\
    <img src="styles/legend/WilayahAdministrasi_0_1.png" /> BANYUASIN SATU<br />\
    <img src="styles/legend/WilayahAdministrasi_0_2.png" /> BUKITKECIL<br />\
    <img src="styles/legend/WilayahAdministrasi_0_3.png" /> GANDUS<br />\
    <img src="styles/legend/WilayahAdministrasi_0_4.png" /> ILIRBARAT DUA<br />\
    <img src="styles/legend/WilayahAdministrasi_0_5.png" /> ILIRBARAT SATU<br />\
    <img src="styles/legend/WilayahAdministrasi_0_6.png" /> ILIRTIMUR DUA<br />\
    <img src="styles/legend/WilayahAdministrasi_0_7.png" /> ILIRTIMUR SATU<br />\
    <img src="styles/legend/WilayahAdministrasi_0_8.png" /> INDRALAYA UTARA<br />\
    <img src="styles/legend/WilayahAdministrasi_0_9.png" /> KALIDONI<br />\
    <img src="styles/legend/WilayahAdministrasi_0_10.png" /> KEMUNING<br />\
    <img src="styles/legend/WilayahAdministrasi_0_11.png" /> KERTAPATI<br />\
    <img src="styles/legend/WilayahAdministrasi_0_12.png" /> PEMULUTAN<br />\
    <img src="styles/legend/WilayahAdministrasi_0_13.png" /> PLAJU<br />\
    <img src="styles/legend/WilayahAdministrasi_0_14.png" /> RAMBUTAN<br />\
    <img src="styles/legend/WilayahAdministrasi_0_15.png" /> RANTAUBAYUR<br />\
    <img src="styles/legend/WilayahAdministrasi_0_16.png" /> SAKO<br />\
    <img src="styles/legend/WilayahAdministrasi_0_17.png" /> SEBERANGULU DUA<br />\
    <img src="styles/legend/WilayahAdministrasi_0_18.png" /> SEBERANGULU SATU<br />\
    <img src="styles/legend/WilayahAdministrasi_0_19.png" /> SEMATANGBORANG<br />\
    <img src="styles/legend/WilayahAdministrasi_0_20.png" /> SEMBAWA<br />\
    <img src="styles/legend/WilayahAdministrasi_0_21.png" /> SUKARAMI<br />\
    <img src="styles/legend/WilayahAdministrasi_0_22.png" /> TALANGKELAPA<br />\
    <img src="styles/legend/WilayahAdministrasi_0_23.png" /> <br />'
        });
var format_Sungai_1 = new ol.format.GeoJSON();
var features_Sungai_1 = format_Sungai_1.readFeatures(json_Sungai_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_1.addFeatures(features_Sungai_1);
var lyr_Sungai_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_1, 
                style: style_Sungai_1,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_1.png" /> Sungai'
            });
var format_Pemukiman_2 = new ol.format.GeoJSON();
var features_Pemukiman_2 = format_Pemukiman_2.readFeatures(json_Pemukiman_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_2.addFeatures(features_Pemukiman_2);
var lyr_Pemukiman_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pemukiman_2, 
                style: style_Pemukiman_2,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_2.png" /> Pemukiman'
            });
var format_Danau_3 = new ol.format.GeoJSON();
var features_Danau_3 = format_Danau_3.readFeatures(json_Danau_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Danau_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Danau_3.addFeatures(features_Danau_3);
var lyr_Danau_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Danau_3, 
                style: style_Danau_3,
                popuplayertitle: "Danau",
                interactive: true,
                title: '<img src="styles/legend/Danau_3.png" /> Danau'
            });
var format_Ladang_4 = new ol.format.GeoJSON();
var features_Ladang_4 = format_Ladang_4.readFeatures(json_Ladang_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ladang_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ladang_4.addFeatures(features_Ladang_4);
var lyr_Ladang_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ladang_4, 
                style: style_Ladang_4,
                popuplayertitle: "Ladang",
                interactive: true,
                title: '<img src="styles/legend/Ladang_4.png" /> Ladang'
            });
var format_Sawah_5 = new ol.format.GeoJSON();
var features_Sawah_5 = format_Sawah_5.readFeatures(json_Sawah_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_5.addFeatures(features_Sawah_5);
var lyr_Sawah_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sawah_5, 
                style: style_Sawah_5,
                popuplayertitle: "Sawah",
                interactive: true,
                title: '<img src="styles/legend/Sawah_5.png" /> Sawah'
            });
var format_RumahSakit_6 = new ol.format.GeoJSON();
var features_RumahSakit_6 = format_RumahSakit_6.readFeatures(json_RumahSakit_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_6.addFeatures(features_RumahSakit_6);
var lyr_RumahSakit_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahSakit_6, 
                style: style_RumahSakit_6,
                popuplayertitle: "Rumah Sakit",
                interactive: true,
                title: '<img src="styles/legend/RumahSakit_6.png" /> Rumah Sakit'
            });
var format_Bandara_7 = new ol.format.GeoJSON();
var features_Bandara_7 = format_Bandara_7.readFeatures(json_Bandara_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bandara_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bandara_7.addFeatures(features_Bandara_7);
var lyr_Bandara_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bandara_7, 
                style: style_Bandara_7,
                popuplayertitle: "Bandara",
                interactive: true,
                title: '<img src="styles/legend/Bandara_7.png" /> Bandara'
            });
var format_Dermaga_8 = new ol.format.GeoJSON();
var features_Dermaga_8 = format_Dermaga_8.readFeatures(json_Dermaga_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dermaga_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dermaga_8.addFeatures(features_Dermaga_8);
var lyr_Dermaga_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dermaga_8, 
                style: style_Dermaga_8,
                popuplayertitle: "Dermaga",
                interactive: true,
                title: '<img src="styles/legend/Dermaga_8.png" /> Dermaga'
            });
var format_Pelabuhan_9 = new ol.format.GeoJSON();
var features_Pelabuhan_9 = format_Pelabuhan_9.readFeatures(json_Pelabuhan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pelabuhan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pelabuhan_9.addFeatures(features_Pelabuhan_9);
var lyr_Pelabuhan_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pelabuhan_9, 
                style: style_Pelabuhan_9,
                popuplayertitle: "Pelabuhan",
                interactive: true,
                title: '<img src="styles/legend/Pelabuhan_9.png" /> Pelabuhan'
            });

lyr_WilayahAdministrasi_0.setVisible(true);lyr_Sungai_1.setVisible(true);lyr_Pemukiman_2.setVisible(true);lyr_Danau_3.setVisible(true);lyr_Ladang_4.setVisible(true);lyr_Sawah_5.setVisible(true);lyr_RumahSakit_6.setVisible(true);lyr_Bandara_7.setVisible(true);lyr_Dermaga_8.setVisible(true);lyr_Pelabuhan_9.setVisible(true);
var layersList = [lyr_WilayahAdministrasi_0,lyr_Sungai_1,lyr_Pemukiman_2,lyr_Danau_3,lyr_Ladang_4,lyr_Sawah_5,lyr_RumahSakit_6,lyr_Bandara_7,lyr_Dermaga_8,lyr_Pelabuhan_9];
lyr_WilayahAdministrasi_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Sungai_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Pemukiman_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Danau_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Ladang_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Sawah_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RumahSakit_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_Bandara_7.set('fieldAliases', {'KOBDMI': 'KOBDMI', 'KDICAO': 'KDICAO', 'KDIATA': 'KDIATA', 'ELEVAS': 'ELEVAS', 'MAVBMI': 'MAVBMI', 'LGTBMI': 'LGTBMI', 'KLSBMI': 'KLSBMI', 'ADABMI': 'ADABMI', 'ADRBMI': 'ADRBMI', 'REMARK': 'REMARK', 'TIPAIP': 'TIPAIP', 'TIPLOK': 'TIPLOK', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'KATKBM': 'KATKBM', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_Dermaga_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'PMLDRM': 'PMLDRM', 'OPRDRM': 'OPRDRM', 'LGTDRM': 'LGTDRM', 'LBRDRM': 'LBRDRM', 'LUAS': 'LUAS', 'KDLDRM': 'KDLDRM', 'KSTDRM': 'KSTDRM', 'STRDRM': 'STRDRM', 'REMARK': 'REMARK', 'FGSDRM': 'FGSDRM', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_Pelabuhan_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'ADMPEL': 'ADMPEL', 'JNSPEL': 'JNSPEL', 'FGSPEL': 'FGSPEL', 'PJAPEL': 'PJAPEL', 'LAMPEL': 'LAMPEL', 'STUPEL': 'STUPEL', 'KONKON': 'KONKON', 'LUAS': 'LUAS', 'KMXPEL': 'KMXPEL', 'KMNPEL': 'KMNPEL', 'STPPEL': 'STPPEL', 'SRPPEL': 'SRPPEL', 'ALJPEL': 'ALJPEL', 'REMARK': 'REMARK', 'KLSPEL': 'KLSPEL', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KODPEL': 'KODPEL', });
lyr_WilayahAdministrasi_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sungai_1.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_Pemukiman_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Danau_3.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Ladang_4.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSLDG': '', 'TNMLDG': '', 'TIPLDG': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Sawah_5.set('fieldImages', {'NAMOBJ': '', 'JNSSWH': '', 'FCODE': '', 'AQDATE': '', 'PUDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TNMSWH': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_RumahSakit_6.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'TIPRST': '', 'JPLYRS': '', 'ALAMAT': '', });
lyr_Bandara_7.set('fieldImages', {'KOBDMI': '', 'KDICAO': '', 'KDIATA': '', 'ELEVAS': '', 'MAVBMI': '', 'LGTBMI': '', 'KLSBMI': '', 'ADABMI': '', 'ADRBMI': '', 'REMARK': '', 'TIPAIP': '', 'TIPLOK': '', 'NAMOBJ': '', 'FCODE': '', 'KATKBM': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_Dermaga_8.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'PMLDRM': '', 'OPRDRM': '', 'LGTDRM': '', 'LBRDRM': '', 'LUAS': '', 'KDLDRM': '', 'KSTDRM': '', 'STRDRM': '', 'REMARK': '', 'FGSDRM': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_Pelabuhan_9.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'ADMPEL': '', 'JNSPEL': '', 'FGSPEL': '', 'PJAPEL': '', 'LAMPEL': '', 'STUPEL': '', 'KONKON': '', 'LUAS': '', 'KMXPEL': '', 'KMNPEL': '', 'STPPEL': '', 'SRPPEL': '', 'ALJPEL': '', 'REMARK': '', 'KLSPEL': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KODPEL': '', });
lyr_WilayahAdministrasi_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - visible with data', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Sungai_1.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Pemukiman_2.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Danau_3.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'OTODAN': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'SEDIMN': 'no label', 'VLCSDN': 'no label', 'QUAAR': 'no label', 'CRH': 'no label', 'KPTS': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'LOKASI': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Ladang_4.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Sawah_5.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_RumahSakit_6.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', });
lyr_Bandara_7.set('fieldLabels', {'KOBDMI': 'no label', 'KDICAO': 'no label', 'KDIATA': 'no label', 'ELEVAS': 'no label', 'MAVBMI': 'no label', 'LGTBMI': 'no label', 'KLSBMI': 'no label', 'ADABMI': 'no label', 'ADRBMI': 'no label', 'REMARK': 'no label', 'TIPAIP': 'no label', 'TIPLOK': 'no label', 'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'KATKBM': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_Dermaga_8.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'PMLDRM': 'no label', 'OPRDRM': 'no label', 'LGTDRM': 'no label', 'LBRDRM': 'no label', 'LUAS': 'no label', 'KDLDRM': 'no label', 'KSTDRM': 'no label', 'STRDRM': 'no label', 'REMARK': 'no label', 'FGSDRM': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_Pelabuhan_9.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'ADMPEL': 'no label', 'JNSPEL': 'no label', 'FGSPEL': 'no label', 'PJAPEL': 'no label', 'LAMPEL': 'no label', 'STUPEL': 'no label', 'KONKON': 'no label', 'LUAS': 'no label', 'KMXPEL': 'no label', 'KMNPEL': 'no label', 'STPPEL': 'no label', 'SRPPEL': 'no label', 'ALJPEL': 'no label', 'REMARK': 'no label', 'KLSPEL': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KODPEL': 'no label', });
lyr_Pelabuhan_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});