// gsap.to(".page1",{
//     scrollTrigger:{
//         trigger: ".page1",
//         start: `top 100`,
//         end: `bottom 100`,
//         markers: true,
//         pin: true,
//         scroller: `.main`
//     }
// })

// gsap.to(".page2",{
//     scrollTrigger:{
//         trigger: ".page1",
//         start: `top 100`,
//         end: `bottom 100`,
//         markers: true,
//         pin: true,
//         scroller: `.main`
//     }
// })
 
// gsap.to(".page3",{
//     scrollTrigger:{
//         trigger: ".page1",
//         start: `top 100`,
//         end: `bottom 100`,
//         markers: true,
//         pin: true,
//         scroller: `.main`
//     }
// })

// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


// window.addEventListener("resize", function () {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   render();
// });

// function files(index) {
//   var data = `
//     D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0001.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0002.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0003.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0004.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0005.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0006.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0007.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0008.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0009.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0010.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0011.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0012.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0013.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0014.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0015.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0016.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0017.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0018.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0019.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0020.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0021.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0022.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0023.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0024.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0025.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0026.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0027.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0028.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0029.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0030.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0031.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0032.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0033.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0034.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0035.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0036.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0037.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0038.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0039.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0040.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0041.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0042.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0043.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0044.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0045.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0046.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0047.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0048.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0049.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0050.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0051.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0052.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0053.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0054.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0055.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0056.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0057.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0058.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0059.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0060.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0061.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0062.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0063.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0064.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0065.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0066.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0067.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0068.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0069.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0070.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0071.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0072.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0073.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0074.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0075.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0076.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0077.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0078.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0079.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0080.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0081.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0082.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0083.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0084.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0085.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0086.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0087.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0088.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0089.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0090.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0091.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0092.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0093.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0094.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0095.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0096.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0097.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0098.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0099.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0100.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0101.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0102.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0103.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0104.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0105.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0106.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0107.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0108.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0109.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0110.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0111.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0112.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0113.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0114.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0115.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0116.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0117.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0118.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0119.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0120.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0121.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0122.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0123.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0124.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0125.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0126.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0127.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0128.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0129.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0130.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0131.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0132.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0133.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0134.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0135.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0136.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0137.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0138.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0139.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0140.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0141.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0142.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0143.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0144.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0145.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0146.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0147.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0148.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0149.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0150.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0151.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0152.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0153.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0154.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0155.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0156.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0157.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0158.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0159.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0160.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0161.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0162.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0163.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0164.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0165.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0166.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0167.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0168.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0169.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0170.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0171.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0172.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0173.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0174.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0175.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0176.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0177.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0178.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0179.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0180.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0181.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0182.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0183.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0184.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0185.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0186.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0187.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0188.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0189.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0190.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0191.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0192.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0193.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0194.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0195.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0196.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0197.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0198.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0199.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0200.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0201.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0202.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0203.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0204.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0205.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0206.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0207.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0208.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0209.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0210.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0211.png
// D:\Samarth Files\Random-Code\Projects\Project.1\Project-3\CYBERFICTION-IMAGES\male0212.png

//  `;
//   return data.split("\n")[index];
// }

// const frameCount = 300;

// const images = [];
// const imageSeq = {
//   frame: 1,
// };

// for (let i = 0; i < frameCount; i++) {
//   const img = new Image();
//   img.src = files(i);
//   images.push(img);
// }

// gsap.to(imageSeq, {
//   frame: frameCount - 1,
//   snap: "frame",
//   ease: `none`,
//   scrollTrigger: {
//     scrub: 0.15,
//     trigger: `#page>canvas`,
//     //   set start end according to preference
//     start: `top top`,
//     end: `600% top`,
//     scroller: `#main`,
//   },
//   onUpdate: render,
// });

// images[1].onload = render;

// function render() {
//   scaleImage(images[imageSeq.frame], context);
// }

// function scaleImage(img, ctx) {
//   var canvas = ctx.canvas;
//   var hRatio = canvas.width / img.width;
//   var vRatio = canvas.height / img.height;
//   var ratio = Math.max(hRatio, vRatio);
//   var centerShift_x = (canvas.width - img.width * ratio) / 2;
//   var centerShift_y = (canvas.height - img.height * ratio) / 2;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(
//     img,
//     0,
//     0,
//     img.width,
//     img.height,
//     centerShift_x,
//     centerShift_y,
//     img.width * ratio,
//     img.height * ratio
//   );
// }
// ScrollTrigger.create({

//   trigger: "// object you want to pin it.",
//   pin: true,
//   // markers:true,
//   scroller: `#main`,
// //   set start end according to preference
//   start: `top top`,
//   end: `600% top`,
// });


function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();

  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  img.src = `images/male000${i + 1}.png`;
  
  function files(index) {
    var data = `
      https://cyberfiction-frontend.netlify.app/images/male0001.png
https://cyberfiction-frontend.netlify.app/images/male0002.png
https://cyberfiction-frontend.netlify.app/images/male0003.png
https://cyberfiction-frontend.netlify.app/images/male0004.png
https://cyberfiction-frontend.netlify.app/images/male0005.png
https://cyberfiction-frontend.netlify.app/images/male0006.png
https://cyberfiction-frontend.netlify.app/images/male0007.png
https://cyberfiction-frontend.netlify.app/images/male0008.png
https://cyberfiction-frontend.netlify.app/images/male0009.png
https://cyberfiction-frontend.netlify.app/images/male0010.png
https://cyberfiction-frontend.netlify.app/images/male0011.png
https://cyberfiction-frontend.netlify.app/images/male0012.png
https://cyberfiction-frontend.netlify.app/images/male0013.png
https://cyberfiction-frontend.netlify.app/images/male0014.png
https://cyberfiction-frontend.netlify.app/images/male0015.png
https://cyberfiction-frontend.netlify.app/images/male0016.png
https://cyberfiction-frontend.netlify.app/images/male0017.png
https://cyberfiction-frontend.netlify.app/images/male0018.png
https://cyberfiction-frontend.netlify.app/images/male0019.png
https://cyberfiction-frontend.netlify.app/images/male0020.png
https://cyberfiction-frontend.netlify.app/images/male0021.png
https://cyberfiction-frontend.netlify.app/images/male0022.png
https://cyberfiction-frontend.netlify.app/images/male0023.png
https://cyberfiction-frontend.netlify.app/images/male0024.png
https://cyberfiction-frontend.netlify.app/images/male0025.png
https://cyberfiction-frontend.netlify.app/images/male0026.png
https://cyberfiction-frontend.netlify.app/images/male0027.png
https://cyberfiction-frontend.netlify.app/images/male0028.png
https://cyberfiction-frontend.netlify.app/images/male0029.png
https://cyberfiction-frontend.netlify.app/images/male0030.png
https://cyberfiction-frontend.netlify.app/images/male0031.png
https://cyberfiction-frontend.netlify.app/images/male0032.png
https://cyberfiction-frontend.netlify.app/images/male0033.png
https://cyberfiction-frontend.netlify.app/images/male0034.png
https://cyberfiction-frontend.netlify.app/images/male0035.png
https://cyberfiction-frontend.netlify.app/images/male0036.png
https://cyberfiction-frontend.netlify.app/images/male0037.png
https://cyberfiction-frontend.netlify.app/images/male0038.png
https://cyberfiction-frontend.netlify.app/images/male0039.png
https://cyberfiction-frontend.netlify.app/images/male0040.png
https://cyberfiction-frontend.netlify.app/images/male0041.png
https://cyberfiction-frontend.netlify.app/images/male0042.png
https://cyberfiction-frontend.netlify.app/images/male0043.png
https://cyberfiction-frontend.netlify.app/images/male0044.png
https://cyberfiction-frontend.netlify.app/images/male0045.png
https://cyberfiction-frontend.netlify.app/images/male0046.png
https://cyberfiction-frontend.netlify.app/images/male0047.png
https://cyberfiction-frontend.netlify.app/images/male0048.png
https://cyberfiction-frontend.netlify.app/images/male0049.png
https://cyberfiction-frontend.netlify.app/images/male0050.png
https://cyberfiction-frontend.netlify.app/images/male0051.png
https://cyberfiction-frontend.netlify.app/images/male0052.png
https://cyberfiction-frontend.netlify.app/images/male0053.png
https://cyberfiction-frontend.netlify.app/images/male0054.png
https://cyberfiction-frontend.netlify.app/images/male0055.png
https://cyberfiction-frontend.netlify.app/images/male0056.png
https://cyberfiction-frontend.netlify.app/images/male0057.png
https://cyberfiction-frontend.netlify.app/images/male0058.png
https://cyberfiction-frontend.netlify.app/images/male0059.png
https://cyberfiction-frontend.netlify.app/images/male0060.png
https://cyberfiction-frontend.netlify.app/images/male0061.png
https://cyberfiction-frontend.netlify.app/images/male0062.png
https://cyberfiction-frontend.netlify.app/images/male0063.png
https://cyberfiction-frontend.netlify.app/images/male0064.png
https://cyberfiction-frontend.netlify.app/images/male0065.png
https://cyberfiction-frontend.netlify.app/images/male0066.png
https://cyberfiction-frontend.netlify.app/images/male0067.png
https://cyberfiction-frontend.netlify.app/images/male0068.png
https://cyberfiction-frontend.netlify.app/images/male0069.png
https://cyberfiction-frontend.netlify.app/images/male0070.png
https://cyberfiction-frontend.netlify.app/images/male0071.png
https://cyberfiction-frontend.netlify.app/images/male0072.png
https://cyberfiction-frontend.netlify.app/images/male0073.png
https://cyberfiction-frontend.netlify.app/images/male0074.png
https://cyberfiction-frontend.netlify.app/images/male0075.png
https://cyberfiction-frontend.netlify.app/images/male0076.png
https://cyberfiction-frontend.netlify.app/images/male0077.png
https://cyberfiction-frontend.netlify.app/images/male0078.png
https://cyberfiction-frontend.netlify.app/images/male0079.png
https://cyberfiction-frontend.netlify.app/images/male0080.png
https://cyberfiction-frontend.netlify.app/images/male0081.png
https://cyberfiction-frontend.netlify.app/images/male0082.png
https://cyberfiction-frontend.netlify.app/images/male0083.png
https://cyberfiction-frontend.netlify.app/images/male0084.png
https://cyberfiction-frontend.netlify.app/images/male0085.png
https://cyberfiction-frontend.netlify.app/images/male0086.png
https://cyberfiction-frontend.netlify.app/images/male0087.png
https://cyberfiction-frontend.netlify.app/images/male0088.png
https://cyberfiction-frontend.netlify.app/images/male0089.png
https://cyberfiction-frontend.netlify.app/images/male0090.png
https://cyberfiction-frontend.netlify.app/images/male0091.png
https://cyberfiction-frontend.netlify.app/images/male0092.png
https://cyberfiction-frontend.netlify.app/images/male0093.png
https://cyberfiction-frontend.netlify.app/images/male0094.png
https://cyberfiction-frontend.netlify.app/images/male0095.png
https://cyberfiction-frontend.netlify.app/images/male0096.png
https://cyberfiction-frontend.netlify.app/images/male0097.png
https://cyberfiction-frontend.netlify.app/images/male0098.png
https://cyberfiction-frontend.netlify.app/images/male0099.png
https://cyberfiction-frontend.netlify.app/images/male0100.png
https://cyberfiction-frontend.netlify.app/images/male0101.png
https://cyberfiction-frontend.netlify.app/images/male0102.png
https://cyberfiction-frontend.netlify.app/images/male0103.png
https://cyberfiction-frontend.netlify.app/images/male0104.png
https://cyberfiction-frontend.netlify.app/images/male0105.png
https://cyberfiction-frontend.netlify.app/images/male0106.png
https://cyberfiction-frontend.netlify.app/images/male0107.png
https://cyberfiction-frontend.netlify.app/images/male0108.png
https://cyberfiction-frontend.netlify.app/images/male0109.png
https://cyberfiction-frontend.netlify.app/images/male0110.png
https://cyberfiction-frontend.netlify.app/images/male0111.png
https://cyberfiction-frontend.netlify.app/images/male0112.png
https://cyberfiction-frontend.netlify.app/images/male0113.png
https://cyberfiction-frontend.netlify.app/images/male0114.png
https://cyberfiction-frontend.netlify.app/images/male0115.png
https://cyberfiction-frontend.netlify.app/images/male0116.png
https://cyberfiction-frontend.netlify.app/images/male0117.png
https://cyberfiction-frontend.netlify.app/images/male0118.png
https://cyberfiction-frontend.netlify.app/images/male0119.png
https://cyberfiction-frontend.netlify.app/images/male0120.png
https://cyberfiction-frontend.netlify.app/images/male0121.png
https://cyberfiction-frontend.netlify.app/images/male0122.png
https://cyberfiction-frontend.netlify.app/images/male0123.png
https://cyberfiction-frontend.netlify.app/images/male0124.png
https://cyberfiction-frontend.netlify.app/images/male0125.png
https://cyberfiction-frontend.netlify.app/images/male0126.png
https://cyberfiction-frontend.netlify.app/images/male0127.png
https://cyberfiction-frontend.netlify.app/images/male0128.png
https://cyberfiction-frontend.netlify.app/images/male0129.png
https://cyberfiction-frontend.netlify.app/images/male0130.png
https://cyberfiction-frontend.netlify.app/images/male0131.png
https://cyberfiction-frontend.netlify.app/images/male0132.png
https://cyberfiction-frontend.netlify.app/images/male0133.png
https://cyberfiction-frontend.netlify.app/images/male0134.png
https://cyberfiction-frontend.netlify.app/images/male0135.png
https://cyberfiction-frontend.netlify.app/images/male0136.png
https://cyberfiction-frontend.netlify.app/images/male0137.png
https://cyberfiction-frontend.netlify.app/images/male0138.png
https://cyberfiction-frontend.netlify.app/images/male0139.png
https://cyberfiction-frontend.netlify.app/images/male0140.png
https://cyberfiction-frontend.netlify.app/images/male0141.png
https://cyberfiction-frontend.netlify.app/images/male0142.png
https://cyberfiction-frontend.netlify.app/images/male0143.png
https://cyberfiction-frontend.netlify.app/images/male0144.png
https://cyberfiction-frontend.netlify.app/images/male0145.png
https://cyberfiction-frontend.netlify.app/images/male0146.png
https://cyberfiction-frontend.netlify.app/images/male0147.png
https://cyberfiction-frontend.netlify.app/images/male0148.png
https://cyberfiction-frontend.netlify.app/images/male0149.png
https://cyberfiction-frontend.netlify.app/images/male0150.png
https://cyberfiction-frontend.netlify.app/images/male0151.png
https://cyberfiction-frontend.netlify.app/images/male0152.png
https://cyberfiction-frontend.netlify.app/images/male0153.png
https://cyberfiction-frontend.netlify.app/images/male0154.png
https://cyberfiction-frontend.netlify.app/images/male0155.png
https://cyberfiction-frontend.netlify.app/images/male0156.png
https://cyberfiction-frontend.netlify.app/images/male0157.png
https://cyberfiction-frontend.netlify.app/images/male0158.png
https://cyberfiction-frontend.netlify.app/images/male0159.png
https://cyberfiction-frontend.netlify.app/images/male0160.png
https://cyberfiction-frontend.netlify.app/images/male0161.png
https://cyberfiction-frontend.netlify.app/images/male0162.png
https://cyberfiction-frontend.netlify.app/images/male0163.png
https://cyberfiction-frontend.netlify.app/images/male0164.png
https://cyberfiction-frontend.netlify.app/images/male0165.png
https://cyberfiction-frontend.netlify.app/images/male0166.png
https://cyberfiction-frontend.netlify.app/images/male0167.png
https://cyberfiction-frontend.netlify.app/images/male0168.png
https://cyberfiction-frontend.netlify.app/images/male0169.png
https://cyberfiction-frontend.netlify.app/images/male0170.png
https://cyberfiction-frontend.netlify.app/images/male0171.png
https://cyberfiction-frontend.netlify.app/images/male0172.png
https://cyberfiction-frontend.netlify.app/images/male0173.png
https://cyberfiction-frontend.netlify.app/images/male0174.png
https://cyberfiction-frontend.netlify.app/images/male0175.png
https://cyberfiction-frontend.netlify.app/images/male0176.png
https://cyberfiction-frontend.netlify.app/images/male0177.png
https://cyberfiction-frontend.netlify.app/images/male0178.png
https://cyberfiction-frontend.netlify.app/images/male0179.png
https://cyberfiction-frontend.netlify.app/images/male0180.png
https://cyberfiction-frontend.netlify.app/images/male0181.png
https://cyberfiction-frontend.netlify.app/images/male0182.png
https://cyberfiction-frontend.netlify.app/images/male0183.png
https://cyberfiction-frontend.netlify.app/images/male0184.png
https://cyberfiction-frontend.netlify.app/images/male0185.png
https://cyberfiction-frontend.netlify.app/images/male0186.png
https://cyberfiction-frontend.netlify.app/images/male0187.png
https://cyberfiction-frontend.netlify.app/images/male0188.png
https://cyberfiction-frontend.netlify.app/images/male0189.png
https://cyberfiction-frontend.netlify.app/images/male0190.png
https://cyberfiction-frontend.netlify.app/images/male0191.png
https://cyberfiction-frontend.netlify.app/images/male0192.png
https://cyberfiction-frontend.netlify.app/images/male0193.png
https://cyberfiction-frontend.netlify.app/images/male0194.png
https://cyberfiction-frontend.netlify.app/images/male0195.png
https://cyberfiction-frontend.netlify.app/images/male0196.png
https://cyberfiction-frontend.netlify.app/images/male0197.png
https://cyberfiction-frontend.netlify.app/images/male0198.png
https://cyberfiction-frontend.netlify.app/images/male0199.png
https://cyberfiction-frontend.netlify.app/images/male0200.png
https://cyberfiction-frontend.netlify.app/images/male0201.png
https://cyberfiction-frontend.netlify.app/images/male0202.png
https://cyberfiction-frontend.netlify.app/images/male0203.png
https://cyberfiction-frontend.netlify.app/images/male0204.png
https://cyberfiction-frontend.netlify.app/images/male0205.png
https://cyberfiction-frontend.netlify.app/images/male0206.png
https://cyberfiction-frontend.netlify.app/images/male0207.png
https://cyberfiction-frontend.netlify.app/images/male0208.png
https://cyberfiction-frontend.netlify.app/images/male0209.png
https://cyberfiction-frontend.netlify.app/images/male0210.png
https://cyberfiction-frontend.netlify.app/images/male0211.png
https://cyberfiction-frontend.netlify.app/images/male0212.png
https://cyberfiction-frontend.netlify.app/images/male0213.png
https://cyberfiction-frontend.netlify.app/images/male0214.png
https://cyberfiction-frontend.netlify.app/images/male0215.png
https://cyberfiction-frontend.netlify.app/images/male0216.png
https://cyberfiction-frontend.netlify.app/images/male0217.png
https://cyberfiction-frontend.netlify.app/images/male0218.png
https://cyberfiction-frontend.netlify.app/images/male0219.png
https://cyberfiction-frontend.netlify.app/images/male0220.png
https://cyberfiction-frontend.netlify.app/images/male0221.png
https://cyberfiction-frontend.netlify.app/images/male0222.png
https://cyberfiction-frontend.netlify.app/images/male0223.png
https://cyberfiction-frontend.netlify.app/images/male0224.png
https://cyberfiction-frontend.netlify.app/images/male0225.png
https://cyberfiction-frontend.netlify.app/images/male0226.png
https://cyberfiction-frontend.netlify.app/images/male0227.png
https://cyberfiction-frontend.netlify.app/images/male0228.png
https://cyberfiction-frontend.netlify.app/images/male0229.png
https://cyberfiction-frontend.netlify.app/images/male0230.png
https://cyberfiction-frontend.netlify.app/images/male0231.png
https://cyberfiction-frontend.netlify.app/images/male0232.png
https://cyberfiction-frontend.netlify.app/images/male0233.png
https://cyberfiction-frontend.netlify.app/images/male0234.png
https://cyberfiction-frontend.netlify.app/images/male0235.png
https://cyberfiction-frontend.netlify.app/images/male0236.png
https://cyberfiction-frontend.netlify.app/images/male0237.png
https://cyberfiction-frontend.netlify.app/images/male0238.png
https://cyberfiction-frontend.netlify.app/images/male0239.png
https://cyberfiction-frontend.netlify.app/images/male0240.png
https://cyberfiction-frontend.netlify.app/images/male0241.png
https://cyberfiction-frontend.netlify.app/images/male0242.png
https://cyberfiction-frontend.netlify.app/images/male0243.png
https://cyberfiction-frontend.netlify.app/images/male0244.png
https://cyberfiction-frontend.netlify.app/images/male0245.png
https://cyberfiction-frontend.netlify.app/images/male0246.png
https://cyberfiction-frontend.netlify.app/images/male0247.png
https://cyberfiction-frontend.netlify.app/images/male0248.png
https://cyberfiction-frontend.netlify.app/images/male0249.png
https://cyberfiction-frontend.netlify.app/images/male0250.png
https://cyberfiction-frontend.netlify.app/images/male0251.png
https://cyberfiction-frontend.netlify.app/images/male0252.png
https://cyberfiction-frontend.netlify.app/images/male0253.png
https://cyberfiction-frontend.netlify.app/images/male0254.png
https://cyberfiction-frontend.netlify.app/images/male0255.png
https://cyberfiction-frontend.netlify.app/images/male0256.png
https://cyberfiction-frontend.netlify.app/images/male0257.png
https://cyberfiction-frontend.netlify.app/images/male0258.png
https://cyberfiction-frontend.netlify.app/images/male0259.png
https://cyberfiction-frontend.netlify.app/images/male0260.png
https://cyberfiction-frontend.netlify.app/images/male0261.png
https://cyberfiction-frontend.netlify.app/images/male0262.png
https://cyberfiction-frontend.netlify.app/images/male0263.png
https://cyberfiction-frontend.netlify.app/images/male0264.png
https://cyberfiction-frontend.netlify.app/images/male0265.png
https://cyberfiction-frontend.netlify.app/images/male0266.png
https://cyberfiction-frontend.netlify.app/images/male0267.png
https://cyberfiction-frontend.netlify.app/images/male0268.png
https://cyberfiction-frontend.netlify.app/images/male0269.png
https://cyberfiction-frontend.netlify.app/images/male0270.png
https://cyberfiction-frontend.netlify.app/images/male0271.png
https://cyberfiction-frontend.netlify.app/images/male0272.png
https://cyberfiction-frontend.netlify.app/images/male0273.png
https://cyberfiction-frontend.netlify.app/images/male0274.png
https://cyberfiction-frontend.netlify.app/images/male0275.png
https://cyberfiction-frontend.netlify.app/images/male0276.png
https://cyberfiction-frontend.netlify.app/images/male0277.png
https://cyberfiction-frontend.netlify.app/images/male0278.png
https://cyberfiction-frontend.netlify.app/images/male0279.png
https://cyberfiction-frontend.netlify.app/images/male0280.png
https://cyberfiction-frontend.netlify.app/images/male0281.png
https://cyberfiction-frontend.netlify.app/images/male0282.png
https://cyberfiction-frontend.netlify.app/images/male0283.png
https://cyberfiction-frontend.netlify.app/images/male0284.png
https://cyberfiction-frontend.netlify.app/images/male0285.png
https://cyberfiction-frontend.netlify.app/images/male0286.png
https://cyberfiction-frontend.netlify.app/images/male0287.png
https://cyberfiction-frontend.netlify.app/images/male0288.png
https://cyberfiction-frontend.netlify.app/images/male0289.png
https://cyberfiction-frontend.netlify.app/images/male0290.png
https://cyberfiction-frontend.netlify.app/images/male0291.png
https://cyberfiction-frontend.netlify.app/images/male0292.png
https://cyberfiction-frontend.netlify.app/images/male0293.png
https://cyberfiction-frontend.netlify.app/images/male0294.png
https://cyberfiction-frontend.netlify.app/images/male0295.png
https://cyberfiction-frontend.netlify.app/images/male0296.png
https://cyberfiction-frontend.netlify.app/images/male0297.png
https://cyberfiction-frontend.netlify.app/images/male0298.png
https://cyberfiction-frontend.netlify.app/images/male0299.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = `Project-3/images/male000${i + 1}.png`;
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })