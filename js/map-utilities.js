const getUtilitie = new URLSearchParams(window.location.search).get("utilitie");
const getNameMap = new URLSearchParams(window.location.search).get("name");
const getImageMap = new URLSearchParams(window.location.search).get("imgUrl");

const nameMap = document.getElementById("utilities-map-name");
const imgMap = document.getElementById("utilities-map-img");

nameMap.innerHTML = getNameMap;
imgMap.src = getImageMap;

const prefixYoutube = "https://www.youtube.com/embed/";

const colors = {
  white: "#ffffff",
  yellow: "#fabe2d",
  red: "#ff1616",
  purple: "#8c52ff",
  blue: "#5271ff",
  lightBlue: "#5ce1e6",
  green: "#2b5b11",
  lightGreen: "#7ed957",
  orange: "#ff6400",
  pink: "#cb6ce6",
};

const coordsUtilitiesList = [
  {
    utilitie: "smoke",
    mapName: "Mirage",
    coords: [
      {x: 495, y: 884, color:colors.red, video: prefixYoutube + "8jjRCjdgzAM"},
      {x: 579, y: 712, color:colors.orange, video: prefixYoutube + "NPs6gO5pXPw"},
      {x: 527, y: 688, color:colors.yellow, video: prefixYoutube + "LI_9FB2mGPg"},
      {x: 662, y: 450, color:colors.purple, video: prefixYoutube + "pfMxvXXK4IY"},
      {x: 540, y: 512, color:colors.lightBlue, video: prefixYoutube + "SYIwP8Y7Jn8"},
      {x: 429, y: 482, color:colors.blue, video: prefixYoutube + "7fXzacf4VeI"},
      {x: 415, y: 294, color:colors.lightGreen, video: prefixYoutube + "Lgf3MTxMJQw"},
      {x: 237, y: 380, color:colors.green, video: prefixYoutube + "tI5EUpbJbTw"},
    ],
  },
  {
    utilitie: "smoke",
    mapName: "Inferno",
    coords: [
      {x: 874, y: 846, color:colors.orange, video: prefixYoutube + "ULBuAbwq0co"},
      {x: 940, y: 828, color:colors.green, video: prefixYoutube + "r2KpangfskQ"},
      {x: 942, y: 644, color:colors.yellow, video: prefixYoutube + "_a7ZEzWkx6I"},
      {x: 752, y: 728, color:colors.white, video: prefixYoutube + "nRh4h235FDo"},
      {x: 758, y: 674, color:colors.red, video: prefixYoutube + "Mku2GlieDkI"},
      {x: 840, y: 552, color:colors.lightGreen, video: prefixYoutube + "tdFTP36_5oU"},
      {x: 642, y: 238, color:colors.lightBlue, video: prefixYoutube + "6I7ak1eNfFU"},
      {x: 544, y: 146, color:colors.blue, video: prefixYoutube + "yk1gM1-ddmE"},
    ],
  },
  {
    utilitie: "smoke",
    mapName: "Cache",
    coords: [
      { x: 444, y: 780, color: colors.blue, video: prefixYoutube + "iRdHrbOALkA" },
      { x: 486, y: 294, color: colors.red, video: prefixYoutube + "iRdHrbOALkA" },
      { x: 308, y: 624, color: colors.purple, video: prefixYoutube + "iRdHrbOALkA" },
      { x: 284, y: 770, color:colors.lightBlue, video: prefixYoutube + "O6uiAteO-xc"},
      { x: 300, y: 808, color:colors.lightGreen, video: prefixYoutube + "u_ZgQwAq-98"},
      { x: 382, y: 338, color:colors.yellow, video: prefixYoutube + "TTwQiaYNnMs"},
      { x: 364, y: 376, color:colors.orange, video: prefixYoutube + "XN1F6XI_1TE"},
    ],
  },
  {
    utilitie: "smoke",
    mapName: "Dust 2",
    coords: [
      {x: 888, y: 246, color:colors.lightBlue, video: prefixYoutube + "cbLBlkfWppc"},
      {x: 732, y: 244, color:colors.blue, video: prefixYoutube + "Oja2xDc07Ug"},
      {x: 524, y: 410, color:colors.red, video: prefixYoutube + "zMYrfAFkyx0"},
      {x: 530, y: 256, color:colors.orange, video: prefixYoutube + "xoGZsR7EqmQ"},
      {x: 480, y: 384, color:colors.yellow, video: prefixYoutube + "MpEpJq8KfXE"},
      {x: 282, y: 236, color:colors.white, video: prefixYoutube + "XltCK6-Egzw"},
      {x: 288, y: 128, color:colors.lightGreen, video: prefixYoutube + "Qn9hlfKaMeA"},
    ],
  },
  {
    utilitie: "smoke",
    mapName: "Nuke",
    coords: [
      {x: 691, y: 772, color:colors.yellow, video: prefixYoutube + "Drlil9mbzU8"},
      {x: 660, y: 775, color:colors.white, video: prefixYoutube + "Is6oNZnDUTA"},
      {x: 549, y: 766, color:colors.orange, video: prefixYoutube + "jDkjfyCSIR0"},
      {x: 728, y: 729, color:colors.pink, video: prefixYoutube + "cc_WUP-WkZ0"},
      {x: 642, y: 725, color:colors.purple, video: prefixYoutube + "0g0s8zT_wi0"},
      {x: 705, y: 651, color:colors.lightBlue, video: prefixYoutube + "WSKZSabpfR4"},
      {x: 614, y: 665, color:colors.lightGreen, video: prefixYoutube + "c3dSd8e4Ei4"},
      {x: 574, y: 569, color:colors.red, video: prefixYoutube + "dA0gZpJdbsk"},
      {x: 692, y: 503, color:colors.blue, video: prefixYoutube + "HpEmztSZrgk"},
    ],
  },
  {
    utilitie: "smoke",
    mapName: "Overpass",
    coords: [
      {x: 436, y: 570, color:colors.lightGreen, video: prefixYoutube + "SS9cWC_IViQ"},
      {x: 748, y: 406, color:colors.blue, video: prefixYoutube + "60KDwDsg4iA"},
      {x: 738, y: 344, color:colors.lightBlue, video: prefixYoutube + "0YokuokaG9E"},
      {x: 806, y: 310, color:colors.purple, video: prefixYoutube + "2Ml9skx0Mew"},
      {x: 632, y: 254, color:colors.pink, video: prefixYoutube + "K76DZAPqC3k"},
      {x: 538, y: 248, color:colors.red, video: prefixYoutube + "1FqoD0xUOG8"},
      {x: 574, y: 168, color:colors.orange, video: prefixYoutube + "4lelczsP4O8"},
      {x: 474, y: 122, color:colors.yellow, video: prefixYoutube + "3WcgMmZHOL4"},
    ],
  },
  {
    utilitie: "smoke",
    mapName: "Train",
    coords: [
      {x: 594, y: 787, color:colors.purple, video: prefixYoutube + "lQ6t8KgmQ98"},
      {x: 784, y: 712, color:colors.pink, video: prefixYoutube + "DEET-9xJm6E"},
      {x: 622, y: 575, color:colors.lightBlue, video: prefixYoutube + "XcTIY_TM5-4"},
      {x: 634, y: 502, color:colors.blue, video: prefixYoutube + "ojTko_E1s5A"},
      {x: 564, y: 445, color:colors.white, video: prefixYoutube + "RNx56DesioQ"},
      {x: 517, y: 500, color:colors.lightGreen, video: prefixYoutube + "ytKgH_h-7SA"},
      {x: 761, y: 412, color:colors.red, video: prefixYoutube + "tqlGjtIp44s"},
      {x: 442, y: 418, color:colors.yellow, video: prefixYoutube + "GUKFolxYLZ8"},
      {x: 550, y: 387, color:colors.orange, video: prefixYoutube + "RGPFTnIkyLc"},
      {x: 668, y: 598, color:colors.green, video: prefixYoutube + "G1P9M-zF6AU"},
    ],
  },
  {
    utilitie: "smoke",
    mapName: "Vertigo",
    coords: [
      {x: 582, y: 796, color:colors.red, video: prefixYoutube + "Jn9IlCvCBIw"},
      {x: 764, y: 616, color:colors.yellow, video: prefixYoutube + "S7R6tgjleDM"},
      {x: 710, y: 596, color:colors.orange, video: prefixYoutube + "cC4-rhJrzqE"},
      {x: 458, y: 310, color:colors.purple, video: prefixYoutube + "d5O0_u6HMqU", twoPositions: true, secondColor: colors.pink, secondVideo: prefixYoutube + "wOc8MV6MMQg"},
      {x: 220, y: 310, color:colors.blue, video: prefixYoutube + "rUlTGG2Tzsg"},
      {x: 458, y: 214, color:colors.lightBlue, video: prefixYoutube + "l38Bqg-aKKQ"},
    ],
  },
  {
    utilitie: "molotov",
    mapName: "Mirage",
    coords: [
      {x: 722, y: 782, color:colors.pink, video: prefixYoutube + "61GvDNXjOcg"},
      {x: 612, y: 836, color:colors.red, video: prefixYoutube + "HK144cFnY94"},
      {x: 506, y: 812, color:colors.orange, video: prefixYoutube + "kgRo37PZuRI"},
      {x: 666, y: 684, color:colors.lightBlue, video: prefixYoutube + "ZKKqaaYRM04"},
      {x: 640, y: 684, color:colors.blue, video: prefixYoutube + "01PJK207LD4"},
      {x: 606, y: 670, color:colors.purple, video: prefixYoutube + "sXi93X_Vl5o"},
      {x: 578, y: 700, color:colors.yellow, video: prefixYoutube + "cKgyuSfWshk"},
      {x: 428, y: 470, color:colors.lightGreen, video: prefixYoutube + "s1Oa3_eB-Bg"},
      {x: 90, y: 246, color:colors.green, video: prefixYoutube + "qd66CVNx4NM"},
    ],
  },
  {
    utilitie: "molotov",
    mapName: "Inferno",
    coords: [
      {x: 890, y: 870, color:colors.blue, video: prefixYoutube + "VS8kUSg6d6M"},
      {x: 890, y: 774, color:colors.lightGreen, video: prefixYoutube + "sQXLcVVLM8s"},
      {x: 860, y: 700, color:colors.green, video: prefixYoutube + "0o8yv4yQlPg"},
      {x: 464, y: 274, color:colors.purple, video: prefixYoutube + "YFEWNFpvcwM", twoPositions: true, secondColor: colors.pink, secondVideo: prefixYoutube + "PDdhMq8j-Nk"},
      {x: 570, y: 180, color:colors.red, video: prefixYoutube + "4hAMDLG3EeY", twoPositions: true, secondColor: colors.orange, secondVideo: prefixYoutube + "C3t3lt4RwUc"},
      {x: 540, y: 184, color:colors.yellow, video: prefixYoutube + "m_sXm66_XYI"},
      {x: 470, y: 164, color:colors.white, video: prefixYoutube + "YiDrK8BM3ao"},
    ],
  },
  {
    utilitie: "molotov",
    mapName: "Dust 2",
    coords: [
      {x: 230, y: 164, color:colors.pink, video: prefixYoutube + "ODS-7O0RgxQ", twoPositions: true, secondColor: colors.purple, secondVideo: prefixYoutube + "NxKynWL82LA"},
      {x: 278, y: 130, color:colors.lightBlue , video: prefixYoutube + "5i1X2EdkQSw"},
      {x: 114, y: 330, color:colors.blue , video: prefixYoutube + "mvDqGlQMIYY"},
      {x: 210, y: 318, color:colors.white , video: prefixYoutube + "G1HJhcxp028"},
      {x: 514, y: 410, color:colors.lightGreen , video: prefixYoutube + "gS-B9r7wtss"},
      {x: 1014, y: 264, color:colors.red , video: prefixYoutube + "uwP7UXCtGkU"},
      {x: 868, y: 178, color:colors.yellow, video: prefixYoutube + "-enOjcwMqsM", twoPositions: true, secondColor: colors.orange, secondVideo: prefixYoutube + "_Vpy6braWgs"},
    ],
  },
  {
    utilitie: "molotov",
    mapName: "Cache",
    coords: [
      {x: 316, y: 200, color:colors.pink  , video: prefixYoutube + "RnCqL0FMsYM"},
      {x: 386, y: 204, color:colors.lightGreen, video: prefixYoutube + "h5sC9TfJpYE"},
      {x: 362, y: 270, color:colors.green, video: prefixYoutube + "E3Ux5HMU3sw", twoPositions: true, secondColor: colors.purple, secondVideo: prefixYoutube + "Ke24oNFzOi4"},
      {x: 380, y: 538, color:colors.lightBlue, video: prefixYoutube + "WndSfX0tAgY"},
      {x: 560, y: 512, color:colors.blue, video: prefixYoutube + "iWRA91RaZ5M"},
      {x: 446, y: 710, color:colors.yellow, video: prefixYoutube + "7YQoLPmjQaE"},
      {x: 334, y: 864, color:colors.red, video: prefixYoutube + "4ZhttCiHLiM"},
      {x: 406, y: 904, color:colors.orange, video: prefixYoutube + "-0cJd1lbq9g"},
    ],
  },
  {
    utilitie: "molotov",
    mapName: "Nuke",
    coords: [
      {x: 693, y: 495, color:colors.white  , video: prefixYoutube + "uMQmzIKi_h4"},
      {x: 625, y: 520, color:colors.orange  , video: prefixYoutube + "mfBWHhUI550"},
      {x: 644, y: 553, color:colors.red  , video: prefixYoutube + "vWEAmvO7iRk"},
      {x: 578, y: 586, color:colors.yellow  , video: prefixYoutube + "DEW905w6s0s"},
      {x: 654, y: 635, color:colors.lightGreen  , video: prefixYoutube + "C0Zl4rECqwo"},
      {x: 611, y: 782, color:colors.blue  , video: prefixYoutube + "wy2rfx_UJwo"},
      {x: 722, y: 800, color:colors.green  , video: prefixYoutube + "AyX-SIGq55c"},
    ],
  },
  {
    utilitie: "molotov",
    mapName: "Overpass",
    coords: [
      {x: 564, y: 148, color:colors.blue  , video: prefixYoutube + "Y4iOScp8_kM"},
      {x: 462, y: 182, color:colors.lightBlue  , video: prefixYoutube + "w-ldwPRfZes"},
      {x: 458, y: 238, color:colors.purple  , video: prefixYoutube + "Plb_xHdFky0"},
      {x: 554, y: 244, color:colors.lightGreen  , video: prefixYoutube + "d5jIhHJ5kG8"},
      {x: 812, y: 270, color:colors.yellow  , video: prefixYoutube + "7kHy4YiCfsI"},
      {x: 772, y: 366, color:colors.red  , video: prefixYoutube + "cMzeYmPtSQk"},
      {x: 736, y: 560, color:colors.orange  , video: prefixYoutube + "vApjGFAnKyo"},
    ],
  },
  {
    utilitie: "molotov",
    mapName: "Train",
    coords: [
      {x: 596, y: 426, color:colors.green  , video: prefixYoutube + "MjMEmhYdWcA"},
      {x: 534, y: 520, color:colors.white  , video: prefixYoutube + "1rnLUMU-ka4"},
      {x: 678, y: 538, color:colors.yellow  , video: prefixYoutube + "qgF4BJxayZ0", twoPositions: true, secondColor: colors.red, secondVideo: prefixYoutube + "H6blnDzf7Ng"},
      {x: 454, y: 612, color:colors.lightBlue  , video: prefixYoutube + "H8aQvB1r5ak"},
      {x: 604, y: 772, color:colors.lightGreen  , video: prefixYoutube + "NO5pi8ZL3rM"},
      {x: 636, y: 830, color:colors.orange  , video: prefixYoutube + "Djf3lROO-u0"},
    ],
  },
  {
    utilitie: "molotov",
    mapName: "Vertigo",
    coords: [
      {x: 242, y: 248, color:colors.purple  , video: prefixYoutube + "rgZmUSq2AoE"},
      {x: 144, y: 342, color:colors.lightBlue  , video: prefixYoutube + "9kw1Q6ewmlU"},
      {x: 454, y: 320, color:colors.green  , video: prefixYoutube + "nIsXvKq8V5M"},
      {x: 236, y: 404, color:colors.blue  , video: prefixYoutube + "tDRgSjicNbk"},
      {x: 810, y: 574, color:colors.yellow  , video: prefixYoutube + "vEyVCc7UvIA"},
      {x: 750, y: 644, color:colors.lightGreen  , video: prefixYoutube + "mB2A4Jriyzo"},
      {x: 544, y: 762, color:colors.orange  , video: prefixYoutube + "hj0jtFzWkL4"},
      {x: 800, y: 836, color:colors.red  , video: prefixYoutube + "iRTRWxOhU6k"},
    ],
  },
  {
    utilitie: "flash",
    mapName: "Mirage",
    coords: [
      {x: 210, y: 172, color:colors.pink , video: prefixYoutube + "fTX9743k-QQ"},
      {x: 246, y: 166, color:colors.purple , video: prefixYoutube + "nRNtypZXGdQ"},
      {x: 272, y: 220, color:colors.yellow , video: prefixYoutube + "DpFtyO8QRHU"},
      {x: 118, y: 286, color:colors.red , video: prefixYoutube + "DCMuuRKEdY4"},
      {x: 128, y: 398, color:colors.orange , video: prefixYoutube + "uwa0ELnjZEo"},
      {x: 564, y: 476, color:colors.green , video: prefixYoutube + "IyDzyUcAkNk"},
      {x: 518, y: 528, color:colors.lightGreen , video: prefixYoutube + "IwnT_bPXiI0"},
      {x: 558, y: 760, color:colors.lightBlue , video: prefixYoutube + "DeKbyXTMZRw"},
      {x: 668, y: 724, color:colors.blue , video: prefixYoutube + "H0t0z2fFNn8"},
    ],
  },
  {
    utilitie: "flash",
    mapName: "Inferno",
    coords: [
      {x: 500, y: 272, color:colors.orange , video: prefixYoutube + "aCYWyT1qlqQ"},
      {x: 598, y: 272, color:colors.lightGreen , video: prefixYoutube + "B4tbZJJwFok"},
      {x: 532, y: 424, color:colors.green , video: prefixYoutube + "QR6jcFa3Vqw"},
      {x: 492, y: 514, color:colors.yellow , video: prefixYoutube + "jfB26x733tc"},
      {x: 956, y: 596, color:colors.lightBlue , video: prefixYoutube + "gV2rT8HYby8"},
      {x: 840, y: 884, color:colors.white , video: prefixYoutube + "TmItEnpeos4"},
      {x: 884, y: 880, color:colors.pink , video: prefixYoutube + "lF6lnXjW_fE"},
      {x: 956, y: 964, color:colors.purple , video: prefixYoutube + "xD8TT3Q6hAM"},
      {x: 746, y: 740, color:colors.red  , video: prefixYoutube + "Sq8rex5S-lY", twoPositions: true, secondColor: colors.blue, secondVideo: prefixYoutube + "j9IZqq8zfpw"},
    ],
  },
  {
    utilitie: "flash",
    mapName: "Dust 2",
    coords: [
      {x: 902, y: 238, color:colors.orange  , video: prefixYoutube + "2iXXqH_pmSU", twoPositions: true, secondColor: colors.red, secondVideo: prefixYoutube + "6x4kr_ykQ-U"},
      {x: 142, y: 292, color:colors.pink , video: prefixYoutube + "v4XWt8ddBhw"},
      {x: 174, y: 266, color:colors.purple , video: prefixYoutube + "28z6dAmTJcw"},
      {x: 450, y: 250, color:colors.blue , video: prefixYoutube + "taqUQd6Ygjc"},
      {x: 508, y: 242, color:colors.lightBlue , video: prefixYoutube + "F2V9CLjSUzo"},
      {x: 486, y: 364, color:colors.green , video: prefixYoutube + "JdjqLmS_s-4"},
      {x: 476, y: 412, color:colors.lightGreen , video: prefixYoutube + "HBDouUjFecQ"},
      {x: 908, y: 466, color:colors.yellow , video: prefixYoutube + "Jdr11zs3qRU"},
    ],
  },
  {
    utilitie: "flash",
    mapName: "Cache",
    coords: [
      {x: 400, y: 270, color:colors.lightGreen , video: prefixYoutube + "1SUsxmdpfcA"},
      {x: 340, y: 356, color:colors.yellow , video: prefixYoutube + "z-abnaqYHZ8"},
      {x: 490, y: 292, color:colors.green , video: prefixYoutube + "KmW2l8DcbE8"},
      {x: 330, y: 582, color:colors.purple , video: prefixYoutube + "AqePIFaa32I"},
      {x: 444, y: 604, color:colors.blue , video: prefixYoutube + "g6eStLMfzIw"},
      {x: 530, y: 576, color:colors.lightBlue , video: prefixYoutube + "fSGsqATYItA"},
      {x: 306, y: 776, color:colors.red , video: prefixYoutube + "0HJ6xMMcny0"},
      {x: 386, y: 824, color:colors.orange , video: prefixYoutube + "pVMP5v0ZJMU"},
    ],
  },
  {
    utilitie: "flash",
    mapName: "Nuke",
    coords: [
      {x: 577, y: 561, color:colors.lightGreen , video: prefixYoutube + "C10pcCBKOh0"},
      {x: 581, y: 657, color:colors.green , video: prefixYoutube + "nZThfYC32TI"},
      {x: 661, y: 699, color:colors.blue , video: prefixYoutube + "UQTwGlrZQ-A"},
      {x: 713, y: 727, color:colors.lightBlue , video: prefixYoutube + "9XISyta6eOU"},
      {x: 615, y: 580, color:colors.red  , video: prefixYoutube + "Iyhfo5c0mQg", twoPositions: true, secondColor: colors.orange, secondVideo: prefixYoutube + "3GB177_rpOI"},
    ],
  },
  {
    utilitie: "flash",
    mapName: "Overpass",
    coords: [
      {x: 390, y: 126, color:colors.white, video: prefixYoutube + "CJHkKbvy9Ck"},
      {x: 516, y: 160, color:colors.blue, video: prefixYoutube + "fQIrKLRCo2M"},
      {x: 358, y: 256, color:colors.lightGreen, video: prefixYoutube + "ZD0e4dvRs_o"},
      {x: 432, y: 272, color:colors.green, video: prefixYoutube + "u94uzC2sUTg"},
      {x: 768, y: 380, color:colors.lightBlue, video: prefixYoutube + "tHCzFFMOWx8"},
      {x: 522, y: 566, color:colors.red, video: prefixYoutube + "sdFD7TpDYk8"},
      {x: 608, y: 550, color:colors.yellow, video: prefixYoutube + "wgIRKVShZw8"},
      {x: 646, y: 558, color:colors.orange, video: prefixYoutube + "I_UH78R-92I"},
    ],
  },
  {
    utilitie: "flash",
    mapName: "Train",
    coords: [
      {x: 850, y: 222, color:colors.green, video: prefixYoutube + "y6dfImDJVjQ"},
      {x: 748, y: 402, color:colors.yellow, video: prefixYoutube + "1ad1vzqTOao"},
      {x: 862, y: 414, color:colors.lightGreen, video: prefixYoutube + "VzoXXEY_3VY"},
      {x: 518, y: 572, color:colors.pink, video: prefixYoutube + "CM7YY_y-bh8"},
      {x: 394, y: 622, color:colors.purple, video: prefixYoutube + "vTaBmdzY65k"},
      {x: 478, y: 780, color:colors.lightBlue, video: prefixYoutube + "M20xWLp8JzU"},
      {x: 500, y: 872, color:colors.blue, video: prefixYoutube + "LzHjefogawg"},
    ],
  },
  {
    utilitie: "flash",
    mapName: "Vertigo",
    coords: [
      {x: 268, y: 270, color:colors.yellow, video: prefixYoutube + "u-bG9_fEcGc"},
      {x: 218, y: 302, color:colors.orange, video: prefixYoutube + "zVSg9uL6Ikc"},
      {x: 228, y: 454, color:colors.red, video: prefixYoutube + "UU-4gx2xGAk"},
      {x: 350, y: 422, color:colors.pink, video: prefixYoutube + "ZcEhFEqZ-OY"},
      {x: 622, y: 642, color:colors.lightBlue, video: prefixYoutube + "z8C8otcEzhs"},
      {x: 740, y: 612, color:colors.purple, video: prefixYoutube + "GACmeUHOmhQ"},
      {x: 600, y: 798, color:colors.blue, video: prefixYoutube + "d7UGlICkMvk"},
    ],
  },
];

const getMapCoords = document.getElementById("map-coords");

const filterCoords = coordsUtilitiesList.filter(
  (item) => item.mapName == getNameMap && item.utilitie == getUtilitie
);

const youtubeVideo = document.getElementById("iframe-youtube");
const youtubeVideoDiv = document.getElementById("youtube-video-div");

const activeVideo = (color, link, twoPositions, secondColor, secondLink) => {
  youtubeVideoDiv.innerHTML = "";

  const createVideoAreaAndStyling = () => {
    const createIframe = document.createElement("iframe");
    youtubeVideoDiv.appendChild(createIframe);
    createIframe.style.border = `2px solid ${color}`;
    createIframe.src = link;
  }

  const createTwoVideosAreasAndStyling = () => {
    const createIframe = document.createElement("iframe");
    const createIframeSecondVideo = document.createElement("iframe");
    youtubeVideoDiv.appendChild(createIframe);
    youtubeVideoDiv.appendChild(createIframeSecondVideo);
  
    createIframe.style.border = `2px solid ${color}`;
    createIframe.src = link;
  
    createIframeSecondVideo.style.border = `2px solid ${secondColor}`;
    createIframeSecondVideo.src = secondLink;
  }

  if(!twoPositions){
    createVideoAreaAndStyling()
  }else{
    createTwoVideosAreasAndStyling()
  }


};

const listCoords = filterCoords.map(item => {
  const elementCoords = item.coords.reduce((accumulator, current) => {
    accumulator += `<area shape="circle" coords="${current.x},${current.y},30" alt="${item.mapName}" onclick="activeVideo('${current.color}', '${current.video}', ${current.twoPositions}, '${current.secondColor}', '${current.secondVideo}')">`
    return accumulator
  }, "")
  return elementCoords
})

getMapCoords.innerHTML = listCoords;

$(document).ready(function (e) {
  $("img[usemap]").rwdImageMaps();
});
