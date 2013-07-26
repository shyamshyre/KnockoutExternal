$(function () {
    // function helper 
    my.formatCurrency = function (value) {
        return "$" + value.toFixed(2);
    };
    
    // for creating (guitar) Model Models :)
    my.Model = function () {
        this.id = ko.observable();
        this.brand = ko.observable();
        this.name = ko.observable();
    };

    // for creating Product Models
    my.Product = function (selectedItem) {
        var self = this;
        self.id = ko.observable();
        self.model = ko.observable();
        self.salePrice = ko.observable();
        self.description = ko.observable();
        self.isSelected = ko.computed(function () {
            return selectedItem() === self;
        });
        self.shortDesc = ko.computed(function() {
            return this.model() ? this.model().brand() + " " + this.model().name() : "";
        }, self);
    };

    // The ViewModel
    my.vm = function () {
        var metadata = {
            pageTitle: "Knockout: Anonymous and Script Templates",
            personal: {
                link: "http://twitter.com/john_papa",
                text: "@john_papa"
            }
        },
        products = ko.observableArray([]),
        selectedProduct = ko.observable(),
        sortFunction = function (a, b) {
            return a.shortDesc().toLowerCase() > b.shortDesc().toLowerCase() ? 1 : -1;
        },
        selectProduct = function (p) {
            selectedProduct(p);
        };
        loadProducts = function () {
            $.each(my.sampleData.data.Products, function (i, p) {
                products.push(new my.Product(selectedProduct)
                            .id(p.Id)
                            .salePrice(p.SalePrice)
                            .model(new my.Model()
                                .id(p.Model.Id)
                                .name(p.Model.Name)
                                .brand(p.Model.Brand)
                            )
                            .description(p.Description)
                    );
            });
            products().sort(sortFunction);
        };
        return {
            metadata: metadata,
            products: products,
            selectedProduct: selectedProduct,
            selectProduct: selectProduct,
            loadProducts: loadProducts
        };
    } ();

    my.vm.loadProducts();
    ko.applyBindings(my.vm);
});
