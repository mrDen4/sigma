$('input[name=price]').nativeMultiple({
    stylesheet: "priceSlider",
    onCreate: function() {
        console.log(this);
    },
    onChange: function(first_value, second_value) {
        console.log('onchange', [first_value, second_value]);
    },
    onSlide: function(first_value, second_value) {
        console.log('onslide', [first_value, second_value]);
    }
  });