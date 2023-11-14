const input_element = document.getElementById("inp");
const output_element = document.querySelector(".output");
const input_select= document.getElementById("input");
const output_select= document.getElementById("output");


input_element.addEventListener("input", function() {
    const input_value = input_select.value;
    const output_value = output_select.value;
    let temp_value = Number(input_element.value);
    let another_temp_value = 0;
    if(input_value === "celsius" && output_value === "fahrenheit"){
      another_temp_value=temp_value;
        temp_value = (temp_value * 9/5) + 32;
        
    }
    else if(input_value === "fahrenheit" && output_value === "celsius")
    {
        temp_value = (5*temp_value -160)/9;
        another_temp_value=temp_value;
    }
    else if(input_value === "celsius" && output_value === "kelvin")
    {
      another_temp_value=temp_value;
        temp_value = temp_value+273.15;
    }
    else if(input_value === "kelvin" && output_value === "celsius")
    {
        temp_value = temp_value-273.15;
        another_temp_value=temp_value;
    }
    else if(input_value === "fahrenheit" && output_value === "kelvin")
    {
        temp_value = (temp_value-32)*5/9+273.15;
        another_temp_value=temp_value-273.15;
    }
    else if(input_value === "kelvin" && output_value === "fahrenheit")
    {
        temp_value = (temp_value-273.15)*9/5+32;
        another_temp_value=(5*temp_value-160)/9;
    }
  output_element.textContent =temp_value.toFixed(2);
});

