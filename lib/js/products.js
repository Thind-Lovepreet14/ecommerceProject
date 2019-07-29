$(document).on("change", ".price-sorting", function() {
    var $sortingMethod = $(this).val();

    if ($sortingMethod == 'priceLowToHigh') {
        sortByAscending();
    }
    else if ($sortingMethod == 'priceHighToLow') {
        sortByDescending();
    }
});

$(document).on("change", ".type-sorting", function() {
    var $sortingMethod = $(this).val();
    
    if ($sortingMethod == 'typeMens') {
        filterByTypeMens();
    }
    else if ($sortingMethod == 'typeWomens') {
        filterByTypeWomens();
    }
});

function sortByAscending() {
    var $products = $('.product-column');
    $products.sort(function(a, b){ return $(a).data("price")-$(b).data("price")});

    $('.product-row').each(function() {
        var $currentRow = $(this);
        $currentRow.html($products);
    });

}

function sortByDescending() {
    var $products = $('.product-column');
    $products.sort(function(a, b){ return $(b).data("price") - $(a).data("price")});

    $('.product-row').each(function() {
        var $currentRow = $(this);
        $currentRow.html($products);
    });
}

function filterByTypeMens() {
    var $products = $('.product-column');
    
    $filteredProducts = $products.filter($('[data-type="mens"]'));
    
    $('.product-row').each(function() {
        var $currentRow = $(this);
        $currentRow.html($filteredProducts);
    });

}

function filterByTypeWomens() {
    var $products = $('.product-column');
    $filteredProducts = $products.filter($('[data-type="womens"]'));

    $('.product-row').each(function() {
        var $currentRow = $(this);
        $currentRow.html($filteredProducts);
    });
}