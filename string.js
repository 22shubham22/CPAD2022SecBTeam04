var string = "BB ROYAL ORGANIC-KASOORI METHI\nH\n40203917\nPkd On: 19.07.2022 Le No: 102200-L\nUse by: 16.11.2022\nNet Quantity: 200g\nM.R.P: 109.00 (0.545per g)\n(Inclusive of all taxes)\nPacked By: Papas Trading Pvt Ltd.\nNo.77879/8, Narayanareddy Circle, Hommadevanahalli\nVillage, Bannerghatta Road, Gottigere,\nBengaluru-560083 fssai\nLic No. 11220302000926\nADITI ACCREDITATION NUMBER: NPOP/NAB/0017\nFor customer. complaints";
const regEx = /^([0-2][0-9]|(3)[0-1])(\/|.)(((0)[0-9])|((1)[0-2]))(\/|.)\d{4}$/;
var str = "Use by: 16.11.2022"
var data = str.match(regEx);
  console.log(data);