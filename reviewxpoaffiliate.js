$(document).ready(function () {
  // pro plan
  let planProInput = $("#input-pro-plan");
  let planProThumb = $("#pro-plan-thumb");
  let planProThumbText = $("#pro-plan-thumb-text");
  let planProLine = $("#pro-plan-line");

  function showInputValuePro() {
    planProThumbText.html(planProInput.val());
    let bulletPosition = planProInput.val() / planProInput.attr("max");
    let space = planProInput.outerWidth() - planProThumb.outerWidth();

    planProThumb.css("left", bulletPosition * space + "px");
    planProLine.css("width", planProInput.val() + "%");
  }

  showInputValuePro();
  $(window).on("resize", showInputValuePro);
  planProInput.on("input", showInputValuePro);

  // growth plan
  let planGrowthInput = $("#input-growth-plan");
  let planGrowthThumb = $("#growth-plan-thumb");
  let planGrowthThumbText = $("#growth-plan-thumb-text");
  let planGrowthLine = $("#growth-plan-line");

  function showInputValueGrowth() {
    planGrowthThumbText.html(planGrowthInput.val());
    let bulletPosition = planGrowthInput.val() / planGrowthInput.attr("max");
    let space = planGrowthInput.outerWidth() - planGrowthThumb.outerWidth();

    planGrowthThumb.css("left", bulletPosition * space + "px");
    planGrowthLine.css("width", planGrowthInput.val() + "%");
  }

  showInputValueGrowth();
  $(window).on("resize", showInputValueGrowth);
  planGrowthInput.on("input", showInputValueGrowth);

  // power plan
  let planPowerInput = $("#input-power-plan");
  let planPowerThumb = $("#power-plan-thumb");
  let planPowerThumbText = $("#power-plan-thumb-text");
  let planPowerLine = $("#power-plan-line");

  function showInputValuePower() {
    planPowerThumbText.html(planPowerInput.val());
    let bulletPosition = planPowerInput.val() / planPowerInput.attr("max");
    let space = planPowerInput.outerWidth() - planPowerThumb.outerWidth();

    planPowerThumb.css("left", bulletPosition * space + "px");
    planPowerLine.css("width", planPowerInput.val() + "%");
  }

  showInputValuePower();
  $(window).on("resize", showInputValuePower);
  planPowerInput.on("input", showInputValuePower);

  // calculate earn

  let affiliateTotal = $(".affiliate-earn-total");
  let inputProPlan = $("#input-pro-plan");
  let inputGrowthPlan = $("#input-growth-plan");
  let inputPowerPlan = $("#input-power-plan");

  function calculateAffiliateTotal() {
    let inputProValue = parseFloat(inputProPlan.val());
    let inputGrowthValue = parseFloat(inputGrowthPlan.val());
    let inputPowerValue = parseFloat(inputPowerPlan.val());

    if (
      !isNaN(inputProValue) &&
      !isNaN(inputGrowthValue) &&
      !isNaN(inputPowerValue)
    ) {
      let result =
        inputProValue * 0.2 * 49 +
        inputGrowthValue * 0.2 * 09 +
        inputPowerValue * 0.2 * 115;
      affiliateTotal.text("$" + result.toFixed(2));
    }
  }

  // Attach the input event listener to all three input fields
  inputProPlan.on("input", calculateAffiliateTotal);
  inputGrowthPlan.on("input", calculateAffiliateTotal);
  inputPowerPlan.on("input", calculateAffiliateTotal);

  // Initial calculation
  calculateAffiliateTotal();
});