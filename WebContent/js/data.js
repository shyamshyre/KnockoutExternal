var my = my || { }; //my namespace
my.dataservice = (function (my) {
    "use strict";
    var getProducts = function () {
        return my.sampleData;
    };
    return {
        getProduct: getProducts
    };
})(my);

my.sampleData = (function (my) {    
    "use strict";
    var data = { Products: [
                        { "ModelId": 1, "SalePrice": 1649.01, "ListPrice": 2199.00, "Rating": 5, "Photo": "Taylor 314-CE Left-Handed Grand Auditorium Acoustic-Electric Guitar.png", "CategoryId": 1, "ItemNumber": "T314CE", "Description": "Taylor 314-CE Left-Handed Grand Auditorium Acoustic-Electric Guitar", "Reviews": [{ "ProductId": 4, "ReviewerName": "guitarhero", "Description": "This guitar has never let me down. I gig 3-6 nights a week and the 314CE just keeps on ticking. Change the battery and the strings regularly and she sounds like a dream everytime. If you want great sound, playability, dependability and just great playing fun get this guitar. You won\u0027t be sorry.", "ReviewDate": "\/Date(1302181440000)\/", "Id": 3 }, { "ProductId": 4, "ReviewerName": "billyjack", "Description": "Best guitar ever!", "ReviewDate": "\/Date(1302218040000)\/", "Id": 4}], "Model": { "Name": "314ce", "Brand": "Taylor", "Id": 1 }, "Category": { "Name": "Acoustic Guitars", "Id": 1 }, "Id": 4 },
                        { "ModelId": 3, "SalePrice": 4775.00, "ListPrice": 7199.00, "Rating": 5, "Photo": "T814ce_tobacco+sunburst.jpg", "CategoryId": 1, "ItemNumber": "T814CE", "Description": "Taylor 814-CE Acoustic Electric Guitar in Tobacco Sunburst",
                            "Reviews": [],
                            "Model": { "Name": "814ce", "Brand": "Taylor", "Id": 3 },
                            "Category": { "Name": "Acoustic Guitars", "Id": 1 }, 
                            "Id": 3 },
                        { "ModelId": 4, "SalePrice": 5899.00, "ListPrice": 7999.00, "Rating": 5, "Photo": "T914CE.jpg", "CategoryId": 1, "ItemNumber": "T914CE", "Description": "Taylor 814-CE Acoustic Electric Guitar", "Reviews": [], "Model": { "Name": "914ce", "Brand": "Taylor", "Id": 4 }, "Category": { "Name": "Acoustic Guitars", "Id": 1 }, "Id": 3 },
                        { "ModelId": 5, "SalePrice": 5898.00, "ListPrice": 7998.00, "Rating": 5, "Photo": "T916ce_tobacco+sunburst.jpg", "CategoryId": 1, "ItemNumber": "T916CE", "Description": "Taylor 916-CE Acoustic Electric Guitar in Tobacco Sunburst", "Reviews": [], "Model": { "Name": "916ce", "Brand": "Taylor", "Id": 5 }, "Category": { "Name": "Acoustic Guitars", "Id": 1 }, "Id": 4 },
                        { "ModelId": 6, "SalePrice": 8999.00, "ListPrice": 10599.00, "Rating": 5, "Photo": "TDMSM_front_print.jpg", "CategoryId": 1, "ItemNumber": "T814CE", "Description": "Taylor DMSM Acoustic Electric Guitar", "Reviews": [], "Model": { "Name": "DMSM", "Brand": "Taylor", "Id": 6 }, "Category": { "Name": "Acoustic Guitars", "Id": 1 }, "Id": 5 },
                        { "ModelId": 8, "SalePrice": 4199.00, "ListPrice": 5199.00, "Rating": 5, "Photo": "Taylor Koa Series K66ce Grand Symphony 12-String Cutaway Acoustic Electric Guitar.png", "CategoryId": 1, "ItemNumber": "TK66CE", "Description": "Taylor Koa Series K66ce Grand Symphony 12-String Cutaway Acoustic Electric Guitar", "Reviews": [], "Model": { "Name": "K66e", "Brand": "Taylor", "Id": 8 }, "Category": { "Name": "Acoustic Guitars", "Id": 1 }, "Id": 11 },
                        { "ModelId": 9, "SalePrice": 299.00, "ListPrice": 399.00, "Rating": 3, "Photo": "Taylor Baby Taylor Left-Handed Acoustic Guitar.png", "CategoryId": 1, "ItemNumber": "TBTL", "Description": "Taylor Baby Taylor Left-Handed Acoustic Guitar", "Reviews": [], "Model": { "Name": "Baby", "Brand": "Taylor", "Id": 9 }, "Category": { "Name": "Acoustic Guitars", "Id": 1 }, "Id": 12 },
                        { "ModelId": 10, "SalePrice": 1999.00, "ListPrice": 2399.00, "Rating": 4, "Photo": "Taylor T5 Standard Acoustic-Electric Guitar with Spruce Top.png", "CategoryId": 1, "ItemNumber": "TT5E", "Description": "Taylor T5 Standard Acoustic-Electric Guitar with Spruce Top", "Reviews": [], "Model": { "Name": "T5", "Brand": "Taylor", "Id": 10 }, "Category": { "Name": "Acoustic Guitars", "Id": 1 }, "Id": 13 },
                        { "ModelId": 2, "SalePrice": 649.00, "ListPrice": 899.00, "Rating": 4, "Photo": "Taylor 314-CE Left-Handed Grand Auditorium Acoustic-Electric Guitar.png", "CategoryId": 1, "ItemNumber": "T110CE", "Description": "Taylor 114-CE Left-Handed Grand Auditorium Acoustic-Electric Guitar", "Reviews": [], "Model": { "Name": "110ce", "Brand": "Taylor", "Id": 2 }, "Category": { "Name": "Acoustic Guitars", "Id": 1 }, "Id": 25 }
    ]
    };
    return {
        data: data
    };
})(my);
