/* ==========================================================================
   MEMORY MATCH - THEME PALETTE REGISTRY & VISUAL STYLES
   ========================================================================== */

class ThemePaletteRegistry {
  constructor() {
    this.palettes = new Map();
    this.initPalettes();
  }

  initPalettes() {
    this.palettes.set("palette_0", {
      id: "palette_0",
      name: "Dynamic Theme #0",
      bgPrimary: "hsl(0, 40%, 10%)",
      bgSecondary: "hsl(0, 50%, 15%)",
      textMain: "hsl(0, 90%, 85%)",
      accentGlow: "hsl(120, 100%, 50%)",
      matchedGlow: "hsl(240, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1", {
      id: "palette_1",
      name: "Dynamic Theme #1",
      bgPrimary: "hsl(17, 40%, 10%)",
      bgSecondary: "hsl(17, 50%, 15%)",
      textMain: "hsl(17, 90%, 85%)",
      accentGlow: "hsl(137, 100%, 50%)",
      matchedGlow: "hsl(257, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_2", {
      id: "palette_2",
      name: "Dynamic Theme #2",
      bgPrimary: "hsl(34, 40%, 10%)",
      bgSecondary: "hsl(34, 50%, 15%)",
      textMain: "hsl(34, 90%, 85%)",
      accentGlow: "hsl(154, 100%, 50%)",
      matchedGlow: "hsl(274, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_3", {
      id: "palette_3",
      name: "Dynamic Theme #3",
      bgPrimary: "hsl(51, 40%, 10%)",
      bgSecondary: "hsl(51, 50%, 15%)",
      textMain: "hsl(51, 90%, 85%)",
      accentGlow: "hsl(171, 100%, 50%)",
      matchedGlow: "hsl(291, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_4", {
      id: "palette_4",
      name: "Dynamic Theme #4",
      bgPrimary: "hsl(68, 40%, 10%)",
      bgSecondary: "hsl(68, 50%, 15%)",
      textMain: "hsl(68, 90%, 85%)",
      accentGlow: "hsl(188, 100%, 50%)",
      matchedGlow: "hsl(308, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_5", {
      id: "palette_5",
      name: "Dynamic Theme #5",
      bgPrimary: "hsl(85, 40%, 10%)",
      bgSecondary: "hsl(85, 50%, 15%)",
      textMain: "hsl(85, 90%, 85%)",
      accentGlow: "hsl(205, 100%, 50%)",
      matchedGlow: "hsl(325, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_6", {
      id: "palette_6",
      name: "Dynamic Theme #6",
      bgPrimary: "hsl(102, 40%, 10%)",
      bgSecondary: "hsl(102, 50%, 15%)",
      textMain: "hsl(102, 90%, 85%)",
      accentGlow: "hsl(222, 100%, 50%)",
      matchedGlow: "hsl(342, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_7", {
      id: "palette_7",
      name: "Dynamic Theme #7",
      bgPrimary: "hsl(119, 40%, 10%)",
      bgSecondary: "hsl(119, 50%, 15%)",
      textMain: "hsl(119, 90%, 85%)",
      accentGlow: "hsl(239, 100%, 50%)",
      matchedGlow: "hsl(359, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_8", {
      id: "palette_8",
      name: "Dynamic Theme #8",
      bgPrimary: "hsl(136, 40%, 10%)",
      bgSecondary: "hsl(136, 50%, 15%)",
      textMain: "hsl(136, 90%, 85%)",
      accentGlow: "hsl(256, 100%, 50%)",
      matchedGlow: "hsl(16, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_9", {
      id: "palette_9",
      name: "Dynamic Theme #9",
      bgPrimary: "hsl(153, 40%, 10%)",
      bgSecondary: "hsl(153, 50%, 15%)",
      textMain: "hsl(153, 90%, 85%)",
      accentGlow: "hsl(273, 100%, 50%)",
      matchedGlow: "hsl(33, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_10", {
      id: "palette_10",
      name: "Dynamic Theme #10",
      bgPrimary: "hsl(170, 40%, 10%)",
      bgSecondary: "hsl(170, 50%, 15%)",
      textMain: "hsl(170, 90%, 85%)",
      accentGlow: "hsl(290, 100%, 50%)",
      matchedGlow: "hsl(50, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_11", {
      id: "palette_11",
      name: "Dynamic Theme #11",
      bgPrimary: "hsl(187, 40%, 10%)",
      bgSecondary: "hsl(187, 50%, 15%)",
      textMain: "hsl(187, 90%, 85%)",
      accentGlow: "hsl(307, 100%, 50%)",
      matchedGlow: "hsl(67, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_12", {
      id: "palette_12",
      name: "Dynamic Theme #12",
      bgPrimary: "hsl(204, 40%, 10%)",
      bgSecondary: "hsl(204, 50%, 15%)",
      textMain: "hsl(204, 90%, 85%)",
      accentGlow: "hsl(324, 100%, 50%)",
      matchedGlow: "hsl(84, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_13", {
      id: "palette_13",
      name: "Dynamic Theme #13",
      bgPrimary: "hsl(221, 40%, 10%)",
      bgSecondary: "hsl(221, 50%, 15%)",
      textMain: "hsl(221, 90%, 85%)",
      accentGlow: "hsl(341, 100%, 50%)",
      matchedGlow: "hsl(101, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_14", {
      id: "palette_14",
      name: "Dynamic Theme #14",
      bgPrimary: "hsl(238, 40%, 10%)",
      bgSecondary: "hsl(238, 50%, 15%)",
      textMain: "hsl(238, 90%, 85%)",
      accentGlow: "hsl(358, 100%, 50%)",
      matchedGlow: "hsl(118, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_15", {
      id: "palette_15",
      name: "Dynamic Theme #15",
      bgPrimary: "hsl(255, 40%, 10%)",
      bgSecondary: "hsl(255, 50%, 15%)",
      textMain: "hsl(255, 90%, 85%)",
      accentGlow: "hsl(15, 100%, 50%)",
      matchedGlow: "hsl(135, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_16", {
      id: "palette_16",
      name: "Dynamic Theme #16",
      bgPrimary: "hsl(272, 40%, 10%)",
      bgSecondary: "hsl(272, 50%, 15%)",
      textMain: "hsl(272, 90%, 85%)",
      accentGlow: "hsl(32, 100%, 50%)",
      matchedGlow: "hsl(152, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_17", {
      id: "palette_17",
      name: "Dynamic Theme #17",
      bgPrimary: "hsl(289, 40%, 10%)",
      bgSecondary: "hsl(289, 50%, 15%)",
      textMain: "hsl(289, 90%, 85%)",
      accentGlow: "hsl(49, 100%, 50%)",
      matchedGlow: "hsl(169, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_18", {
      id: "palette_18",
      name: "Dynamic Theme #18",
      bgPrimary: "hsl(306, 40%, 10%)",
      bgSecondary: "hsl(306, 50%, 15%)",
      textMain: "hsl(306, 90%, 85%)",
      accentGlow: "hsl(66, 100%, 50%)",
      matchedGlow: "hsl(186, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_19", {
      id: "palette_19",
      name: "Dynamic Theme #19",
      bgPrimary: "hsl(323, 40%, 10%)",
      bgSecondary: "hsl(323, 50%, 15%)",
      textMain: "hsl(323, 90%, 85%)",
      accentGlow: "hsl(83, 100%, 50%)",
      matchedGlow: "hsl(203, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_20", {
      id: "palette_20",
      name: "Dynamic Theme #20",
      bgPrimary: "hsl(340, 40%, 10%)",
      bgSecondary: "hsl(340, 50%, 15%)",
      textMain: "hsl(340, 90%, 85%)",
      accentGlow: "hsl(100, 100%, 50%)",
      matchedGlow: "hsl(220, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_21", {
      id: "palette_21",
      name: "Dynamic Theme #21",
      bgPrimary: "hsl(357, 40%, 10%)",
      bgSecondary: "hsl(357, 50%, 15%)",
      textMain: "hsl(357, 90%, 85%)",
      accentGlow: "hsl(117, 100%, 50%)",
      matchedGlow: "hsl(237, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_22", {
      id: "palette_22",
      name: "Dynamic Theme #22",
      bgPrimary: "hsl(14, 40%, 10%)",
      bgSecondary: "hsl(14, 50%, 15%)",
      textMain: "hsl(14, 90%, 85%)",
      accentGlow: "hsl(134, 100%, 50%)",
      matchedGlow: "hsl(254, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_23", {
      id: "palette_23",
      name: "Dynamic Theme #23",
      bgPrimary: "hsl(31, 40%, 10%)",
      bgSecondary: "hsl(31, 50%, 15%)",
      textMain: "hsl(31, 90%, 85%)",
      accentGlow: "hsl(151, 100%, 50%)",
      matchedGlow: "hsl(271, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_24", {
      id: "palette_24",
      name: "Dynamic Theme #24",
      bgPrimary: "hsl(48, 40%, 10%)",
      bgSecondary: "hsl(48, 50%, 15%)",
      textMain: "hsl(48, 90%, 85%)",
      accentGlow: "hsl(168, 100%, 50%)",
      matchedGlow: "hsl(288, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_25", {
      id: "palette_25",
      name: "Dynamic Theme #25",
      bgPrimary: "hsl(65, 40%, 10%)",
      bgSecondary: "hsl(65, 50%, 15%)",
      textMain: "hsl(65, 90%, 85%)",
      accentGlow: "hsl(185, 100%, 50%)",
      matchedGlow: "hsl(305, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_26", {
      id: "palette_26",
      name: "Dynamic Theme #26",
      bgPrimary: "hsl(82, 40%, 10%)",
      bgSecondary: "hsl(82, 50%, 15%)",
      textMain: "hsl(82, 90%, 85%)",
      accentGlow: "hsl(202, 100%, 50%)",
      matchedGlow: "hsl(322, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_27", {
      id: "palette_27",
      name: "Dynamic Theme #27",
      bgPrimary: "hsl(99, 40%, 10%)",
      bgSecondary: "hsl(99, 50%, 15%)",
      textMain: "hsl(99, 90%, 85%)",
      accentGlow: "hsl(219, 100%, 50%)",
      matchedGlow: "hsl(339, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_28", {
      id: "palette_28",
      name: "Dynamic Theme #28",
      bgPrimary: "hsl(116, 40%, 10%)",
      bgSecondary: "hsl(116, 50%, 15%)",
      textMain: "hsl(116, 90%, 85%)",
      accentGlow: "hsl(236, 100%, 50%)",
      matchedGlow: "hsl(356, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_29", {
      id: "palette_29",
      name: "Dynamic Theme #29",
      bgPrimary: "hsl(133, 40%, 10%)",
      bgSecondary: "hsl(133, 50%, 15%)",
      textMain: "hsl(133, 90%, 85%)",
      accentGlow: "hsl(253, 100%, 50%)",
      matchedGlow: "hsl(13, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_30", {
      id: "palette_30",
      name: "Dynamic Theme #30",
      bgPrimary: "hsl(150, 40%, 10%)",
      bgSecondary: "hsl(150, 50%, 15%)",
      textMain: "hsl(150, 90%, 85%)",
      accentGlow: "hsl(270, 100%, 50%)",
      matchedGlow: "hsl(30, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_31", {
      id: "palette_31",
      name: "Dynamic Theme #31",
      bgPrimary: "hsl(167, 40%, 10%)",
      bgSecondary: "hsl(167, 50%, 15%)",
      textMain: "hsl(167, 90%, 85%)",
      accentGlow: "hsl(287, 100%, 50%)",
      matchedGlow: "hsl(47, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_32", {
      id: "palette_32",
      name: "Dynamic Theme #32",
      bgPrimary: "hsl(184, 40%, 10%)",
      bgSecondary: "hsl(184, 50%, 15%)",
      textMain: "hsl(184, 90%, 85%)",
      accentGlow: "hsl(304, 100%, 50%)",
      matchedGlow: "hsl(64, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_33", {
      id: "palette_33",
      name: "Dynamic Theme #33",
      bgPrimary: "hsl(201, 40%, 10%)",
      bgSecondary: "hsl(201, 50%, 15%)",
      textMain: "hsl(201, 90%, 85%)",
      accentGlow: "hsl(321, 100%, 50%)",
      matchedGlow: "hsl(81, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_34", {
      id: "palette_34",
      name: "Dynamic Theme #34",
      bgPrimary: "hsl(218, 40%, 10%)",
      bgSecondary: "hsl(218, 50%, 15%)",
      textMain: "hsl(218, 90%, 85%)",
      accentGlow: "hsl(338, 100%, 50%)",
      matchedGlow: "hsl(98, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_35", {
      id: "palette_35",
      name: "Dynamic Theme #35",
      bgPrimary: "hsl(235, 40%, 10%)",
      bgSecondary: "hsl(235, 50%, 15%)",
      textMain: "hsl(235, 90%, 85%)",
      accentGlow: "hsl(355, 100%, 50%)",
      matchedGlow: "hsl(115, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_36", {
      id: "palette_36",
      name: "Dynamic Theme #36",
      bgPrimary: "hsl(252, 40%, 10%)",
      bgSecondary: "hsl(252, 50%, 15%)",
      textMain: "hsl(252, 90%, 85%)",
      accentGlow: "hsl(12, 100%, 50%)",
      matchedGlow: "hsl(132, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_37", {
      id: "palette_37",
      name: "Dynamic Theme #37",
      bgPrimary: "hsl(269, 40%, 10%)",
      bgSecondary: "hsl(269, 50%, 15%)",
      textMain: "hsl(269, 90%, 85%)",
      accentGlow: "hsl(29, 100%, 50%)",
      matchedGlow: "hsl(149, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_38", {
      id: "palette_38",
      name: "Dynamic Theme #38",
      bgPrimary: "hsl(286, 40%, 10%)",
      bgSecondary: "hsl(286, 50%, 15%)",
      textMain: "hsl(286, 90%, 85%)",
      accentGlow: "hsl(46, 100%, 50%)",
      matchedGlow: "hsl(166, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_39", {
      id: "palette_39",
      name: "Dynamic Theme #39",
      bgPrimary: "hsl(303, 40%, 10%)",
      bgSecondary: "hsl(303, 50%, 15%)",
      textMain: "hsl(303, 90%, 85%)",
      accentGlow: "hsl(63, 100%, 50%)",
      matchedGlow: "hsl(183, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_40", {
      id: "palette_40",
      name: "Dynamic Theme #40",
      bgPrimary: "hsl(320, 40%, 10%)",
      bgSecondary: "hsl(320, 50%, 15%)",
      textMain: "hsl(320, 90%, 85%)",
      accentGlow: "hsl(80, 100%, 50%)",
      matchedGlow: "hsl(200, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_41", {
      id: "palette_41",
      name: "Dynamic Theme #41",
      bgPrimary: "hsl(337, 40%, 10%)",
      bgSecondary: "hsl(337, 50%, 15%)",
      textMain: "hsl(337, 90%, 85%)",
      accentGlow: "hsl(97, 100%, 50%)",
      matchedGlow: "hsl(217, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_42", {
      id: "palette_42",
      name: "Dynamic Theme #42",
      bgPrimary: "hsl(354, 40%, 10%)",
      bgSecondary: "hsl(354, 50%, 15%)",
      textMain: "hsl(354, 90%, 85%)",
      accentGlow: "hsl(114, 100%, 50%)",
      matchedGlow: "hsl(234, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_43", {
      id: "palette_43",
      name: "Dynamic Theme #43",
      bgPrimary: "hsl(11, 40%, 10%)",
      bgSecondary: "hsl(11, 50%, 15%)",
      textMain: "hsl(11, 90%, 85%)",
      accentGlow: "hsl(131, 100%, 50%)",
      matchedGlow: "hsl(251, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_44", {
      id: "palette_44",
      name: "Dynamic Theme #44",
      bgPrimary: "hsl(28, 40%, 10%)",
      bgSecondary: "hsl(28, 50%, 15%)",
      textMain: "hsl(28, 90%, 85%)",
      accentGlow: "hsl(148, 100%, 50%)",
      matchedGlow: "hsl(268, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_45", {
      id: "palette_45",
      name: "Dynamic Theme #45",
      bgPrimary: "hsl(45, 40%, 10%)",
      bgSecondary: "hsl(45, 50%, 15%)",
      textMain: "hsl(45, 90%, 85%)",
      accentGlow: "hsl(165, 100%, 50%)",
      matchedGlow: "hsl(285, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_46", {
      id: "palette_46",
      name: "Dynamic Theme #46",
      bgPrimary: "hsl(62, 40%, 10%)",
      bgSecondary: "hsl(62, 50%, 15%)",
      textMain: "hsl(62, 90%, 85%)",
      accentGlow: "hsl(182, 100%, 50%)",
      matchedGlow: "hsl(302, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_47", {
      id: "palette_47",
      name: "Dynamic Theme #47",
      bgPrimary: "hsl(79, 40%, 10%)",
      bgSecondary: "hsl(79, 50%, 15%)",
      textMain: "hsl(79, 90%, 85%)",
      accentGlow: "hsl(199, 100%, 50%)",
      matchedGlow: "hsl(319, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_48", {
      id: "palette_48",
      name: "Dynamic Theme #48",
      bgPrimary: "hsl(96, 40%, 10%)",
      bgSecondary: "hsl(96, 50%, 15%)",
      textMain: "hsl(96, 90%, 85%)",
      accentGlow: "hsl(216, 100%, 50%)",
      matchedGlow: "hsl(336, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_49", {
      id: "palette_49",
      name: "Dynamic Theme #49",
      bgPrimary: "hsl(113, 40%, 10%)",
      bgSecondary: "hsl(113, 50%, 15%)",
      textMain: "hsl(113, 90%, 85%)",
      accentGlow: "hsl(233, 100%, 50%)",
      matchedGlow: "hsl(353, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_50", {
      id: "palette_50",
      name: "Dynamic Theme #50",
      bgPrimary: "hsl(130, 40%, 10%)",
      bgSecondary: "hsl(130, 50%, 15%)",
      textMain: "hsl(130, 90%, 85%)",
      accentGlow: "hsl(250, 100%, 50%)",
      matchedGlow: "hsl(10, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_51", {
      id: "palette_51",
      name: "Dynamic Theme #51",
      bgPrimary: "hsl(147, 40%, 10%)",
      bgSecondary: "hsl(147, 50%, 15%)",
      textMain: "hsl(147, 90%, 85%)",
      accentGlow: "hsl(267, 100%, 50%)",
      matchedGlow: "hsl(27, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_52", {
      id: "palette_52",
      name: "Dynamic Theme #52",
      bgPrimary: "hsl(164, 40%, 10%)",
      bgSecondary: "hsl(164, 50%, 15%)",
      textMain: "hsl(164, 90%, 85%)",
      accentGlow: "hsl(284, 100%, 50%)",
      matchedGlow: "hsl(44, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_53", {
      id: "palette_53",
      name: "Dynamic Theme #53",
      bgPrimary: "hsl(181, 40%, 10%)",
      bgSecondary: "hsl(181, 50%, 15%)",
      textMain: "hsl(181, 90%, 85%)",
      accentGlow: "hsl(301, 100%, 50%)",
      matchedGlow: "hsl(61, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_54", {
      id: "palette_54",
      name: "Dynamic Theme #54",
      bgPrimary: "hsl(198, 40%, 10%)",
      bgSecondary: "hsl(198, 50%, 15%)",
      textMain: "hsl(198, 90%, 85%)",
      accentGlow: "hsl(318, 100%, 50%)",
      matchedGlow: "hsl(78, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_55", {
      id: "palette_55",
      name: "Dynamic Theme #55",
      bgPrimary: "hsl(215, 40%, 10%)",
      bgSecondary: "hsl(215, 50%, 15%)",
      textMain: "hsl(215, 90%, 85%)",
      accentGlow: "hsl(335, 100%, 50%)",
      matchedGlow: "hsl(95, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_56", {
      id: "palette_56",
      name: "Dynamic Theme #56",
      bgPrimary: "hsl(232, 40%, 10%)",
      bgSecondary: "hsl(232, 50%, 15%)",
      textMain: "hsl(232, 90%, 85%)",
      accentGlow: "hsl(352, 100%, 50%)",
      matchedGlow: "hsl(112, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_57", {
      id: "palette_57",
      name: "Dynamic Theme #57",
      bgPrimary: "hsl(249, 40%, 10%)",
      bgSecondary: "hsl(249, 50%, 15%)",
      textMain: "hsl(249, 90%, 85%)",
      accentGlow: "hsl(9, 100%, 50%)",
      matchedGlow: "hsl(129, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_58", {
      id: "palette_58",
      name: "Dynamic Theme #58",
      bgPrimary: "hsl(266, 40%, 10%)",
      bgSecondary: "hsl(266, 50%, 15%)",
      textMain: "hsl(266, 90%, 85%)",
      accentGlow: "hsl(26, 100%, 50%)",
      matchedGlow: "hsl(146, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_59", {
      id: "palette_59",
      name: "Dynamic Theme #59",
      bgPrimary: "hsl(283, 40%, 10%)",
      bgSecondary: "hsl(283, 50%, 15%)",
      textMain: "hsl(283, 90%, 85%)",
      accentGlow: "hsl(43, 100%, 50%)",
      matchedGlow: "hsl(163, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_60", {
      id: "palette_60",
      name: "Dynamic Theme #60",
      bgPrimary: "hsl(300, 40%, 10%)",
      bgSecondary: "hsl(300, 50%, 15%)",
      textMain: "hsl(300, 90%, 85%)",
      accentGlow: "hsl(60, 100%, 50%)",
      matchedGlow: "hsl(180, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_61", {
      id: "palette_61",
      name: "Dynamic Theme #61",
      bgPrimary: "hsl(317, 40%, 10%)",
      bgSecondary: "hsl(317, 50%, 15%)",
      textMain: "hsl(317, 90%, 85%)",
      accentGlow: "hsl(77, 100%, 50%)",
      matchedGlow: "hsl(197, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_62", {
      id: "palette_62",
      name: "Dynamic Theme #62",
      bgPrimary: "hsl(334, 40%, 10%)",
      bgSecondary: "hsl(334, 50%, 15%)",
      textMain: "hsl(334, 90%, 85%)",
      accentGlow: "hsl(94, 100%, 50%)",
      matchedGlow: "hsl(214, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_63", {
      id: "palette_63",
      name: "Dynamic Theme #63",
      bgPrimary: "hsl(351, 40%, 10%)",
      bgSecondary: "hsl(351, 50%, 15%)",
      textMain: "hsl(351, 90%, 85%)",
      accentGlow: "hsl(111, 100%, 50%)",
      matchedGlow: "hsl(231, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_64", {
      id: "palette_64",
      name: "Dynamic Theme #64",
      bgPrimary: "hsl(8, 40%, 10%)",
      bgSecondary: "hsl(8, 50%, 15%)",
      textMain: "hsl(8, 90%, 85%)",
      accentGlow: "hsl(128, 100%, 50%)",
      matchedGlow: "hsl(248, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_65", {
      id: "palette_65",
      name: "Dynamic Theme #65",
      bgPrimary: "hsl(25, 40%, 10%)",
      bgSecondary: "hsl(25, 50%, 15%)",
      textMain: "hsl(25, 90%, 85%)",
      accentGlow: "hsl(145, 100%, 50%)",
      matchedGlow: "hsl(265, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_66", {
      id: "palette_66",
      name: "Dynamic Theme #66",
      bgPrimary: "hsl(42, 40%, 10%)",
      bgSecondary: "hsl(42, 50%, 15%)",
      textMain: "hsl(42, 90%, 85%)",
      accentGlow: "hsl(162, 100%, 50%)",
      matchedGlow: "hsl(282, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_67", {
      id: "palette_67",
      name: "Dynamic Theme #67",
      bgPrimary: "hsl(59, 40%, 10%)",
      bgSecondary: "hsl(59, 50%, 15%)",
      textMain: "hsl(59, 90%, 85%)",
      accentGlow: "hsl(179, 100%, 50%)",
      matchedGlow: "hsl(299, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_68", {
      id: "palette_68",
      name: "Dynamic Theme #68",
      bgPrimary: "hsl(76, 40%, 10%)",
      bgSecondary: "hsl(76, 50%, 15%)",
      textMain: "hsl(76, 90%, 85%)",
      accentGlow: "hsl(196, 100%, 50%)",
      matchedGlow: "hsl(316, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_69", {
      id: "palette_69",
      name: "Dynamic Theme #69",
      bgPrimary: "hsl(93, 40%, 10%)",
      bgSecondary: "hsl(93, 50%, 15%)",
      textMain: "hsl(93, 90%, 85%)",
      accentGlow: "hsl(213, 100%, 50%)",
      matchedGlow: "hsl(333, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_70", {
      id: "palette_70",
      name: "Dynamic Theme #70",
      bgPrimary: "hsl(110, 40%, 10%)",
      bgSecondary: "hsl(110, 50%, 15%)",
      textMain: "hsl(110, 90%, 85%)",
      accentGlow: "hsl(230, 100%, 50%)",
      matchedGlow: "hsl(350, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_71", {
      id: "palette_71",
      name: "Dynamic Theme #71",
      bgPrimary: "hsl(127, 40%, 10%)",
      bgSecondary: "hsl(127, 50%, 15%)",
      textMain: "hsl(127, 90%, 85%)",
      accentGlow: "hsl(247, 100%, 50%)",
      matchedGlow: "hsl(7, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_72", {
      id: "palette_72",
      name: "Dynamic Theme #72",
      bgPrimary: "hsl(144, 40%, 10%)",
      bgSecondary: "hsl(144, 50%, 15%)",
      textMain: "hsl(144, 90%, 85%)",
      accentGlow: "hsl(264, 100%, 50%)",
      matchedGlow: "hsl(24, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_73", {
      id: "palette_73",
      name: "Dynamic Theme #73",
      bgPrimary: "hsl(161, 40%, 10%)",
      bgSecondary: "hsl(161, 50%, 15%)",
      textMain: "hsl(161, 90%, 85%)",
      accentGlow: "hsl(281, 100%, 50%)",
      matchedGlow: "hsl(41, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_74", {
      id: "palette_74",
      name: "Dynamic Theme #74",
      bgPrimary: "hsl(178, 40%, 10%)",
      bgSecondary: "hsl(178, 50%, 15%)",
      textMain: "hsl(178, 90%, 85%)",
      accentGlow: "hsl(298, 100%, 50%)",
      matchedGlow: "hsl(58, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_75", {
      id: "palette_75",
      name: "Dynamic Theme #75",
      bgPrimary: "hsl(195, 40%, 10%)",
      bgSecondary: "hsl(195, 50%, 15%)",
      textMain: "hsl(195, 90%, 85%)",
      accentGlow: "hsl(315, 100%, 50%)",
      matchedGlow: "hsl(75, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_76", {
      id: "palette_76",
      name: "Dynamic Theme #76",
      bgPrimary: "hsl(212, 40%, 10%)",
      bgSecondary: "hsl(212, 50%, 15%)",
      textMain: "hsl(212, 90%, 85%)",
      accentGlow: "hsl(332, 100%, 50%)",
      matchedGlow: "hsl(92, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_77", {
      id: "palette_77",
      name: "Dynamic Theme #77",
      bgPrimary: "hsl(229, 40%, 10%)",
      bgSecondary: "hsl(229, 50%, 15%)",
      textMain: "hsl(229, 90%, 85%)",
      accentGlow: "hsl(349, 100%, 50%)",
      matchedGlow: "hsl(109, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_78", {
      id: "palette_78",
      name: "Dynamic Theme #78",
      bgPrimary: "hsl(246, 40%, 10%)",
      bgSecondary: "hsl(246, 50%, 15%)",
      textMain: "hsl(246, 90%, 85%)",
      accentGlow: "hsl(6, 100%, 50%)",
      matchedGlow: "hsl(126, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_79", {
      id: "palette_79",
      name: "Dynamic Theme #79",
      bgPrimary: "hsl(263, 40%, 10%)",
      bgSecondary: "hsl(263, 50%, 15%)",
      textMain: "hsl(263, 90%, 85%)",
      accentGlow: "hsl(23, 100%, 50%)",
      matchedGlow: "hsl(143, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_80", {
      id: "palette_80",
      name: "Dynamic Theme #80",
      bgPrimary: "hsl(280, 40%, 10%)",
      bgSecondary: "hsl(280, 50%, 15%)",
      textMain: "hsl(280, 90%, 85%)",
      accentGlow: "hsl(40, 100%, 50%)",
      matchedGlow: "hsl(160, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_81", {
      id: "palette_81",
      name: "Dynamic Theme #81",
      bgPrimary: "hsl(297, 40%, 10%)",
      bgSecondary: "hsl(297, 50%, 15%)",
      textMain: "hsl(297, 90%, 85%)",
      accentGlow: "hsl(57, 100%, 50%)",
      matchedGlow: "hsl(177, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_82", {
      id: "palette_82",
      name: "Dynamic Theme #82",
      bgPrimary: "hsl(314, 40%, 10%)",
      bgSecondary: "hsl(314, 50%, 15%)",
      textMain: "hsl(314, 90%, 85%)",
      accentGlow: "hsl(74, 100%, 50%)",
      matchedGlow: "hsl(194, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_83", {
      id: "palette_83",
      name: "Dynamic Theme #83",
      bgPrimary: "hsl(331, 40%, 10%)",
      bgSecondary: "hsl(331, 50%, 15%)",
      textMain: "hsl(331, 90%, 85%)",
      accentGlow: "hsl(91, 100%, 50%)",
      matchedGlow: "hsl(211, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_84", {
      id: "palette_84",
      name: "Dynamic Theme #84",
      bgPrimary: "hsl(348, 40%, 10%)",
      bgSecondary: "hsl(348, 50%, 15%)",
      textMain: "hsl(348, 90%, 85%)",
      accentGlow: "hsl(108, 100%, 50%)",
      matchedGlow: "hsl(228, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_85", {
      id: "palette_85",
      name: "Dynamic Theme #85",
      bgPrimary: "hsl(5, 40%, 10%)",
      bgSecondary: "hsl(5, 50%, 15%)",
      textMain: "hsl(5, 90%, 85%)",
      accentGlow: "hsl(125, 100%, 50%)",
      matchedGlow: "hsl(245, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_86", {
      id: "palette_86",
      name: "Dynamic Theme #86",
      bgPrimary: "hsl(22, 40%, 10%)",
      bgSecondary: "hsl(22, 50%, 15%)",
      textMain: "hsl(22, 90%, 85%)",
      accentGlow: "hsl(142, 100%, 50%)",
      matchedGlow: "hsl(262, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_87", {
      id: "palette_87",
      name: "Dynamic Theme #87",
      bgPrimary: "hsl(39, 40%, 10%)",
      bgSecondary: "hsl(39, 50%, 15%)",
      textMain: "hsl(39, 90%, 85%)",
      accentGlow: "hsl(159, 100%, 50%)",
      matchedGlow: "hsl(279, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_88", {
      id: "palette_88",
      name: "Dynamic Theme #88",
      bgPrimary: "hsl(56, 40%, 10%)",
      bgSecondary: "hsl(56, 50%, 15%)",
      textMain: "hsl(56, 90%, 85%)",
      accentGlow: "hsl(176, 100%, 50%)",
      matchedGlow: "hsl(296, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_89", {
      id: "palette_89",
      name: "Dynamic Theme #89",
      bgPrimary: "hsl(73, 40%, 10%)",
      bgSecondary: "hsl(73, 50%, 15%)",
      textMain: "hsl(73, 90%, 85%)",
      accentGlow: "hsl(193, 100%, 50%)",
      matchedGlow: "hsl(313, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_90", {
      id: "palette_90",
      name: "Dynamic Theme #90",
      bgPrimary: "hsl(90, 40%, 10%)",
      bgSecondary: "hsl(90, 50%, 15%)",
      textMain: "hsl(90, 90%, 85%)",
      accentGlow: "hsl(210, 100%, 50%)",
      matchedGlow: "hsl(330, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_91", {
      id: "palette_91",
      name: "Dynamic Theme #91",
      bgPrimary: "hsl(107, 40%, 10%)",
      bgSecondary: "hsl(107, 50%, 15%)",
      textMain: "hsl(107, 90%, 85%)",
      accentGlow: "hsl(227, 100%, 50%)",
      matchedGlow: "hsl(347, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_92", {
      id: "palette_92",
      name: "Dynamic Theme #92",
      bgPrimary: "hsl(124, 40%, 10%)",
      bgSecondary: "hsl(124, 50%, 15%)",
      textMain: "hsl(124, 90%, 85%)",
      accentGlow: "hsl(244, 100%, 50%)",
      matchedGlow: "hsl(4, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_93", {
      id: "palette_93",
      name: "Dynamic Theme #93",
      bgPrimary: "hsl(141, 40%, 10%)",
      bgSecondary: "hsl(141, 50%, 15%)",
      textMain: "hsl(141, 90%, 85%)",
      accentGlow: "hsl(261, 100%, 50%)",
      matchedGlow: "hsl(21, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_94", {
      id: "palette_94",
      name: "Dynamic Theme #94",
      bgPrimary: "hsl(158, 40%, 10%)",
      bgSecondary: "hsl(158, 50%, 15%)",
      textMain: "hsl(158, 90%, 85%)",
      accentGlow: "hsl(278, 100%, 50%)",
      matchedGlow: "hsl(38, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_95", {
      id: "palette_95",
      name: "Dynamic Theme #95",
      bgPrimary: "hsl(175, 40%, 10%)",
      bgSecondary: "hsl(175, 50%, 15%)",
      textMain: "hsl(175, 90%, 85%)",
      accentGlow: "hsl(295, 100%, 50%)",
      matchedGlow: "hsl(55, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_96", {
      id: "palette_96",
      name: "Dynamic Theme #96",
      bgPrimary: "hsl(192, 40%, 10%)",
      bgSecondary: "hsl(192, 50%, 15%)",
      textMain: "hsl(192, 90%, 85%)",
      accentGlow: "hsl(312, 100%, 50%)",
      matchedGlow: "hsl(72, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_97", {
      id: "palette_97",
      name: "Dynamic Theme #97",
      bgPrimary: "hsl(209, 40%, 10%)",
      bgSecondary: "hsl(209, 50%, 15%)",
      textMain: "hsl(209, 90%, 85%)",
      accentGlow: "hsl(329, 100%, 50%)",
      matchedGlow: "hsl(89, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_98", {
      id: "palette_98",
      name: "Dynamic Theme #98",
      bgPrimary: "hsl(226, 40%, 10%)",
      bgSecondary: "hsl(226, 50%, 15%)",
      textMain: "hsl(226, 90%, 85%)",
      accentGlow: "hsl(346, 100%, 50%)",
      matchedGlow: "hsl(106, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_99", {
      id: "palette_99",
      name: "Dynamic Theme #99",
      bgPrimary: "hsl(243, 40%, 10%)",
      bgSecondary: "hsl(243, 50%, 15%)",
      textMain: "hsl(243, 90%, 85%)",
      accentGlow: "hsl(3, 100%, 50%)",
      matchedGlow: "hsl(123, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_100", {
      id: "palette_100",
      name: "Dynamic Theme #100",
      bgPrimary: "hsl(260, 40%, 10%)",
      bgSecondary: "hsl(260, 50%, 15%)",
      textMain: "hsl(260, 90%, 85%)",
      accentGlow: "hsl(20, 100%, 50%)",
      matchedGlow: "hsl(140, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_101", {
      id: "palette_101",
      name: "Dynamic Theme #101",
      bgPrimary: "hsl(277, 40%, 10%)",
      bgSecondary: "hsl(277, 50%, 15%)",
      textMain: "hsl(277, 90%, 85%)",
      accentGlow: "hsl(37, 100%, 50%)",
      matchedGlow: "hsl(157, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_102", {
      id: "palette_102",
      name: "Dynamic Theme #102",
      bgPrimary: "hsl(294, 40%, 10%)",
      bgSecondary: "hsl(294, 50%, 15%)",
      textMain: "hsl(294, 90%, 85%)",
      accentGlow: "hsl(54, 100%, 50%)",
      matchedGlow: "hsl(174, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_103", {
      id: "palette_103",
      name: "Dynamic Theme #103",
      bgPrimary: "hsl(311, 40%, 10%)",
      bgSecondary: "hsl(311, 50%, 15%)",
      textMain: "hsl(311, 90%, 85%)",
      accentGlow: "hsl(71, 100%, 50%)",
      matchedGlow: "hsl(191, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_104", {
      id: "palette_104",
      name: "Dynamic Theme #104",
      bgPrimary: "hsl(328, 40%, 10%)",
      bgSecondary: "hsl(328, 50%, 15%)",
      textMain: "hsl(328, 90%, 85%)",
      accentGlow: "hsl(88, 100%, 50%)",
      matchedGlow: "hsl(208, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_105", {
      id: "palette_105",
      name: "Dynamic Theme #105",
      bgPrimary: "hsl(345, 40%, 10%)",
      bgSecondary: "hsl(345, 50%, 15%)",
      textMain: "hsl(345, 90%, 85%)",
      accentGlow: "hsl(105, 100%, 50%)",
      matchedGlow: "hsl(225, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_106", {
      id: "palette_106",
      name: "Dynamic Theme #106",
      bgPrimary: "hsl(2, 40%, 10%)",
      bgSecondary: "hsl(2, 50%, 15%)",
      textMain: "hsl(2, 90%, 85%)",
      accentGlow: "hsl(122, 100%, 50%)",
      matchedGlow: "hsl(242, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_107", {
      id: "palette_107",
      name: "Dynamic Theme #107",
      bgPrimary: "hsl(19, 40%, 10%)",
      bgSecondary: "hsl(19, 50%, 15%)",
      textMain: "hsl(19, 90%, 85%)",
      accentGlow: "hsl(139, 100%, 50%)",
      matchedGlow: "hsl(259, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_108", {
      id: "palette_108",
      name: "Dynamic Theme #108",
      bgPrimary: "hsl(36, 40%, 10%)",
      bgSecondary: "hsl(36, 50%, 15%)",
      textMain: "hsl(36, 90%, 85%)",
      accentGlow: "hsl(156, 100%, 50%)",
      matchedGlow: "hsl(276, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_109", {
      id: "palette_109",
      name: "Dynamic Theme #109",
      bgPrimary: "hsl(53, 40%, 10%)",
      bgSecondary: "hsl(53, 50%, 15%)",
      textMain: "hsl(53, 90%, 85%)",
      accentGlow: "hsl(173, 100%, 50%)",
      matchedGlow: "hsl(293, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_110", {
      id: "palette_110",
      name: "Dynamic Theme #110",
      bgPrimary: "hsl(70, 40%, 10%)",
      bgSecondary: "hsl(70, 50%, 15%)",
      textMain: "hsl(70, 90%, 85%)",
      accentGlow: "hsl(190, 100%, 50%)",
      matchedGlow: "hsl(310, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_111", {
      id: "palette_111",
      name: "Dynamic Theme #111",
      bgPrimary: "hsl(87, 40%, 10%)",
      bgSecondary: "hsl(87, 50%, 15%)",
      textMain: "hsl(87, 90%, 85%)",
      accentGlow: "hsl(207, 100%, 50%)",
      matchedGlow: "hsl(327, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_112", {
      id: "palette_112",
      name: "Dynamic Theme #112",
      bgPrimary: "hsl(104, 40%, 10%)",
      bgSecondary: "hsl(104, 50%, 15%)",
      textMain: "hsl(104, 90%, 85%)",
      accentGlow: "hsl(224, 100%, 50%)",
      matchedGlow: "hsl(344, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_113", {
      id: "palette_113",
      name: "Dynamic Theme #113",
      bgPrimary: "hsl(121, 40%, 10%)",
      bgSecondary: "hsl(121, 50%, 15%)",
      textMain: "hsl(121, 90%, 85%)",
      accentGlow: "hsl(241, 100%, 50%)",
      matchedGlow: "hsl(1, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_114", {
      id: "palette_114",
      name: "Dynamic Theme #114",
      bgPrimary: "hsl(138, 40%, 10%)",
      bgSecondary: "hsl(138, 50%, 15%)",
      textMain: "hsl(138, 90%, 85%)",
      accentGlow: "hsl(258, 100%, 50%)",
      matchedGlow: "hsl(18, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_115", {
      id: "palette_115",
      name: "Dynamic Theme #115",
      bgPrimary: "hsl(155, 40%, 10%)",
      bgSecondary: "hsl(155, 50%, 15%)",
      textMain: "hsl(155, 90%, 85%)",
      accentGlow: "hsl(275, 100%, 50%)",
      matchedGlow: "hsl(35, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_116", {
      id: "palette_116",
      name: "Dynamic Theme #116",
      bgPrimary: "hsl(172, 40%, 10%)",
      bgSecondary: "hsl(172, 50%, 15%)",
      textMain: "hsl(172, 90%, 85%)",
      accentGlow: "hsl(292, 100%, 50%)",
      matchedGlow: "hsl(52, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_117", {
      id: "palette_117",
      name: "Dynamic Theme #117",
      bgPrimary: "hsl(189, 40%, 10%)",
      bgSecondary: "hsl(189, 50%, 15%)",
      textMain: "hsl(189, 90%, 85%)",
      accentGlow: "hsl(309, 100%, 50%)",
      matchedGlow: "hsl(69, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_118", {
      id: "palette_118",
      name: "Dynamic Theme #118",
      bgPrimary: "hsl(206, 40%, 10%)",
      bgSecondary: "hsl(206, 50%, 15%)",
      textMain: "hsl(206, 90%, 85%)",
      accentGlow: "hsl(326, 100%, 50%)",
      matchedGlow: "hsl(86, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_119", {
      id: "palette_119",
      name: "Dynamic Theme #119",
      bgPrimary: "hsl(223, 40%, 10%)",
      bgSecondary: "hsl(223, 50%, 15%)",
      textMain: "hsl(223, 90%, 85%)",
      accentGlow: "hsl(343, 100%, 50%)",
      matchedGlow: "hsl(103, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_120", {
      id: "palette_120",
      name: "Dynamic Theme #120",
      bgPrimary: "hsl(240, 40%, 10%)",
      bgSecondary: "hsl(240, 50%, 15%)",
      textMain: "hsl(240, 90%, 85%)",
      accentGlow: "hsl(0, 100%, 50%)",
      matchedGlow: "hsl(120, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_121", {
      id: "palette_121",
      name: "Dynamic Theme #121",
      bgPrimary: "hsl(257, 40%, 10%)",
      bgSecondary: "hsl(257, 50%, 15%)",
      textMain: "hsl(257, 90%, 85%)",
      accentGlow: "hsl(17, 100%, 50%)",
      matchedGlow: "hsl(137, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_122", {
      id: "palette_122",
      name: "Dynamic Theme #122",
      bgPrimary: "hsl(274, 40%, 10%)",
      bgSecondary: "hsl(274, 50%, 15%)",
      textMain: "hsl(274, 90%, 85%)",
      accentGlow: "hsl(34, 100%, 50%)",
      matchedGlow: "hsl(154, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_123", {
      id: "palette_123",
      name: "Dynamic Theme #123",
      bgPrimary: "hsl(291, 40%, 10%)",
      bgSecondary: "hsl(291, 50%, 15%)",
      textMain: "hsl(291, 90%, 85%)",
      accentGlow: "hsl(51, 100%, 50%)",
      matchedGlow: "hsl(171, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_124", {
      id: "palette_124",
      name: "Dynamic Theme #124",
      bgPrimary: "hsl(308, 40%, 10%)",
      bgSecondary: "hsl(308, 50%, 15%)",
      textMain: "hsl(308, 90%, 85%)",
      accentGlow: "hsl(68, 100%, 50%)",
      matchedGlow: "hsl(188, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_125", {
      id: "palette_125",
      name: "Dynamic Theme #125",
      bgPrimary: "hsl(325, 40%, 10%)",
      bgSecondary: "hsl(325, 50%, 15%)",
      textMain: "hsl(325, 90%, 85%)",
      accentGlow: "hsl(85, 100%, 50%)",
      matchedGlow: "hsl(205, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_126", {
      id: "palette_126",
      name: "Dynamic Theme #126",
      bgPrimary: "hsl(342, 40%, 10%)",
      bgSecondary: "hsl(342, 50%, 15%)",
      textMain: "hsl(342, 90%, 85%)",
      accentGlow: "hsl(102, 100%, 50%)",
      matchedGlow: "hsl(222, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_127", {
      id: "palette_127",
      name: "Dynamic Theme #127",
      bgPrimary: "hsl(359, 40%, 10%)",
      bgSecondary: "hsl(359, 50%, 15%)",
      textMain: "hsl(359, 90%, 85%)",
      accentGlow: "hsl(119, 100%, 50%)",
      matchedGlow: "hsl(239, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_128", {
      id: "palette_128",
      name: "Dynamic Theme #128",
      bgPrimary: "hsl(16, 40%, 10%)",
      bgSecondary: "hsl(16, 50%, 15%)",
      textMain: "hsl(16, 90%, 85%)",
      accentGlow: "hsl(136, 100%, 50%)",
      matchedGlow: "hsl(256, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_129", {
      id: "palette_129",
      name: "Dynamic Theme #129",
      bgPrimary: "hsl(33, 40%, 10%)",
      bgSecondary: "hsl(33, 50%, 15%)",
      textMain: "hsl(33, 90%, 85%)",
      accentGlow: "hsl(153, 100%, 50%)",
      matchedGlow: "hsl(273, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_130", {
      id: "palette_130",
      name: "Dynamic Theme #130",
      bgPrimary: "hsl(50, 40%, 10%)",
      bgSecondary: "hsl(50, 50%, 15%)",
      textMain: "hsl(50, 90%, 85%)",
      accentGlow: "hsl(170, 100%, 50%)",
      matchedGlow: "hsl(290, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_131", {
      id: "palette_131",
      name: "Dynamic Theme #131",
      bgPrimary: "hsl(67, 40%, 10%)",
      bgSecondary: "hsl(67, 50%, 15%)",
      textMain: "hsl(67, 90%, 85%)",
      accentGlow: "hsl(187, 100%, 50%)",
      matchedGlow: "hsl(307, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_132", {
      id: "palette_132",
      name: "Dynamic Theme #132",
      bgPrimary: "hsl(84, 40%, 10%)",
      bgSecondary: "hsl(84, 50%, 15%)",
      textMain: "hsl(84, 90%, 85%)",
      accentGlow: "hsl(204, 100%, 50%)",
      matchedGlow: "hsl(324, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_133", {
      id: "palette_133",
      name: "Dynamic Theme #133",
      bgPrimary: "hsl(101, 40%, 10%)",
      bgSecondary: "hsl(101, 50%, 15%)",
      textMain: "hsl(101, 90%, 85%)",
      accentGlow: "hsl(221, 100%, 50%)",
      matchedGlow: "hsl(341, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_134", {
      id: "palette_134",
      name: "Dynamic Theme #134",
      bgPrimary: "hsl(118, 40%, 10%)",
      bgSecondary: "hsl(118, 50%, 15%)",
      textMain: "hsl(118, 90%, 85%)",
      accentGlow: "hsl(238, 100%, 50%)",
      matchedGlow: "hsl(358, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_135", {
      id: "palette_135",
      name: "Dynamic Theme #135",
      bgPrimary: "hsl(135, 40%, 10%)",
      bgSecondary: "hsl(135, 50%, 15%)",
      textMain: "hsl(135, 90%, 85%)",
      accentGlow: "hsl(255, 100%, 50%)",
      matchedGlow: "hsl(15, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_136", {
      id: "palette_136",
      name: "Dynamic Theme #136",
      bgPrimary: "hsl(152, 40%, 10%)",
      bgSecondary: "hsl(152, 50%, 15%)",
      textMain: "hsl(152, 90%, 85%)",
      accentGlow: "hsl(272, 100%, 50%)",
      matchedGlow: "hsl(32, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_137", {
      id: "palette_137",
      name: "Dynamic Theme #137",
      bgPrimary: "hsl(169, 40%, 10%)",
      bgSecondary: "hsl(169, 50%, 15%)",
      textMain: "hsl(169, 90%, 85%)",
      accentGlow: "hsl(289, 100%, 50%)",
      matchedGlow: "hsl(49, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_138", {
      id: "palette_138",
      name: "Dynamic Theme #138",
      bgPrimary: "hsl(186, 40%, 10%)",
      bgSecondary: "hsl(186, 50%, 15%)",
      textMain: "hsl(186, 90%, 85%)",
      accentGlow: "hsl(306, 100%, 50%)",
      matchedGlow: "hsl(66, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_139", {
      id: "palette_139",
      name: "Dynamic Theme #139",
      bgPrimary: "hsl(203, 40%, 10%)",
      bgSecondary: "hsl(203, 50%, 15%)",
      textMain: "hsl(203, 90%, 85%)",
      accentGlow: "hsl(323, 100%, 50%)",
      matchedGlow: "hsl(83, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_140", {
      id: "palette_140",
      name: "Dynamic Theme #140",
      bgPrimary: "hsl(220, 40%, 10%)",
      bgSecondary: "hsl(220, 50%, 15%)",
      textMain: "hsl(220, 90%, 85%)",
      accentGlow: "hsl(340, 100%, 50%)",
      matchedGlow: "hsl(100, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_141", {
      id: "palette_141",
      name: "Dynamic Theme #141",
      bgPrimary: "hsl(237, 40%, 10%)",
      bgSecondary: "hsl(237, 50%, 15%)",
      textMain: "hsl(237, 90%, 85%)",
      accentGlow: "hsl(357, 100%, 50%)",
      matchedGlow: "hsl(117, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_142", {
      id: "palette_142",
      name: "Dynamic Theme #142",
      bgPrimary: "hsl(254, 40%, 10%)",
      bgSecondary: "hsl(254, 50%, 15%)",
      textMain: "hsl(254, 90%, 85%)",
      accentGlow: "hsl(14, 100%, 50%)",
      matchedGlow: "hsl(134, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_143", {
      id: "palette_143",
      name: "Dynamic Theme #143",
      bgPrimary: "hsl(271, 40%, 10%)",
      bgSecondary: "hsl(271, 50%, 15%)",
      textMain: "hsl(271, 90%, 85%)",
      accentGlow: "hsl(31, 100%, 50%)",
      matchedGlow: "hsl(151, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_144", {
      id: "palette_144",
      name: "Dynamic Theme #144",
      bgPrimary: "hsl(288, 40%, 10%)",
      bgSecondary: "hsl(288, 50%, 15%)",
      textMain: "hsl(288, 90%, 85%)",
      accentGlow: "hsl(48, 100%, 50%)",
      matchedGlow: "hsl(168, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_145", {
      id: "palette_145",
      name: "Dynamic Theme #145",
      bgPrimary: "hsl(305, 40%, 10%)",
      bgSecondary: "hsl(305, 50%, 15%)",
      textMain: "hsl(305, 90%, 85%)",
      accentGlow: "hsl(65, 100%, 50%)",
      matchedGlow: "hsl(185, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_146", {
      id: "palette_146",
      name: "Dynamic Theme #146",
      bgPrimary: "hsl(322, 40%, 10%)",
      bgSecondary: "hsl(322, 50%, 15%)",
      textMain: "hsl(322, 90%, 85%)",
      accentGlow: "hsl(82, 100%, 50%)",
      matchedGlow: "hsl(202, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_147", {
      id: "palette_147",
      name: "Dynamic Theme #147",
      bgPrimary: "hsl(339, 40%, 10%)",
      bgSecondary: "hsl(339, 50%, 15%)",
      textMain: "hsl(339, 90%, 85%)",
      accentGlow: "hsl(99, 100%, 50%)",
      matchedGlow: "hsl(219, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_148", {
      id: "palette_148",
      name: "Dynamic Theme #148",
      bgPrimary: "hsl(356, 40%, 10%)",
      bgSecondary: "hsl(356, 50%, 15%)",
      textMain: "hsl(356, 90%, 85%)",
      accentGlow: "hsl(116, 100%, 50%)",
      matchedGlow: "hsl(236, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_149", {
      id: "palette_149",
      name: "Dynamic Theme #149",
      bgPrimary: "hsl(13, 40%, 10%)",
      bgSecondary: "hsl(13, 50%, 15%)",
      textMain: "hsl(13, 90%, 85%)",
      accentGlow: "hsl(133, 100%, 50%)",
      matchedGlow: "hsl(253, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_150", {
      id: "palette_150",
      name: "Dynamic Theme #150",
      bgPrimary: "hsl(30, 40%, 10%)",
      bgSecondary: "hsl(30, 50%, 15%)",
      textMain: "hsl(30, 90%, 85%)",
      accentGlow: "hsl(150, 100%, 50%)",
      matchedGlow: "hsl(270, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_151", {
      id: "palette_151",
      name: "Dynamic Theme #151",
      bgPrimary: "hsl(47, 40%, 10%)",
      bgSecondary: "hsl(47, 50%, 15%)",
      textMain: "hsl(47, 90%, 85%)",
      accentGlow: "hsl(167, 100%, 50%)",
      matchedGlow: "hsl(287, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_152", {
      id: "palette_152",
      name: "Dynamic Theme #152",
      bgPrimary: "hsl(64, 40%, 10%)",
      bgSecondary: "hsl(64, 50%, 15%)",
      textMain: "hsl(64, 90%, 85%)",
      accentGlow: "hsl(184, 100%, 50%)",
      matchedGlow: "hsl(304, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_153", {
      id: "palette_153",
      name: "Dynamic Theme #153",
      bgPrimary: "hsl(81, 40%, 10%)",
      bgSecondary: "hsl(81, 50%, 15%)",
      textMain: "hsl(81, 90%, 85%)",
      accentGlow: "hsl(201, 100%, 50%)",
      matchedGlow: "hsl(321, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_154", {
      id: "palette_154",
      name: "Dynamic Theme #154",
      bgPrimary: "hsl(98, 40%, 10%)",
      bgSecondary: "hsl(98, 50%, 15%)",
      textMain: "hsl(98, 90%, 85%)",
      accentGlow: "hsl(218, 100%, 50%)",
      matchedGlow: "hsl(338, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_155", {
      id: "palette_155",
      name: "Dynamic Theme #155",
      bgPrimary: "hsl(115, 40%, 10%)",
      bgSecondary: "hsl(115, 50%, 15%)",
      textMain: "hsl(115, 90%, 85%)",
      accentGlow: "hsl(235, 100%, 50%)",
      matchedGlow: "hsl(355, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_156", {
      id: "palette_156",
      name: "Dynamic Theme #156",
      bgPrimary: "hsl(132, 40%, 10%)",
      bgSecondary: "hsl(132, 50%, 15%)",
      textMain: "hsl(132, 90%, 85%)",
      accentGlow: "hsl(252, 100%, 50%)",
      matchedGlow: "hsl(12, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_157", {
      id: "palette_157",
      name: "Dynamic Theme #157",
      bgPrimary: "hsl(149, 40%, 10%)",
      bgSecondary: "hsl(149, 50%, 15%)",
      textMain: "hsl(149, 90%, 85%)",
      accentGlow: "hsl(269, 100%, 50%)",
      matchedGlow: "hsl(29, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_158", {
      id: "palette_158",
      name: "Dynamic Theme #158",
      bgPrimary: "hsl(166, 40%, 10%)",
      bgSecondary: "hsl(166, 50%, 15%)",
      textMain: "hsl(166, 90%, 85%)",
      accentGlow: "hsl(286, 100%, 50%)",
      matchedGlow: "hsl(46, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_159", {
      id: "palette_159",
      name: "Dynamic Theme #159",
      bgPrimary: "hsl(183, 40%, 10%)",
      bgSecondary: "hsl(183, 50%, 15%)",
      textMain: "hsl(183, 90%, 85%)",
      accentGlow: "hsl(303, 100%, 50%)",
      matchedGlow: "hsl(63, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_160", {
      id: "palette_160",
      name: "Dynamic Theme #160",
      bgPrimary: "hsl(200, 40%, 10%)",
      bgSecondary: "hsl(200, 50%, 15%)",
      textMain: "hsl(200, 90%, 85%)",
      accentGlow: "hsl(320, 100%, 50%)",
      matchedGlow: "hsl(80, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_161", {
      id: "palette_161",
      name: "Dynamic Theme #161",
      bgPrimary: "hsl(217, 40%, 10%)",
      bgSecondary: "hsl(217, 50%, 15%)",
      textMain: "hsl(217, 90%, 85%)",
      accentGlow: "hsl(337, 100%, 50%)",
      matchedGlow: "hsl(97, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_162", {
      id: "palette_162",
      name: "Dynamic Theme #162",
      bgPrimary: "hsl(234, 40%, 10%)",
      bgSecondary: "hsl(234, 50%, 15%)",
      textMain: "hsl(234, 90%, 85%)",
      accentGlow: "hsl(354, 100%, 50%)",
      matchedGlow: "hsl(114, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_163", {
      id: "palette_163",
      name: "Dynamic Theme #163",
      bgPrimary: "hsl(251, 40%, 10%)",
      bgSecondary: "hsl(251, 50%, 15%)",
      textMain: "hsl(251, 90%, 85%)",
      accentGlow: "hsl(11, 100%, 50%)",
      matchedGlow: "hsl(131, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_164", {
      id: "palette_164",
      name: "Dynamic Theme #164",
      bgPrimary: "hsl(268, 40%, 10%)",
      bgSecondary: "hsl(268, 50%, 15%)",
      textMain: "hsl(268, 90%, 85%)",
      accentGlow: "hsl(28, 100%, 50%)",
      matchedGlow: "hsl(148, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_165", {
      id: "palette_165",
      name: "Dynamic Theme #165",
      bgPrimary: "hsl(285, 40%, 10%)",
      bgSecondary: "hsl(285, 50%, 15%)",
      textMain: "hsl(285, 90%, 85%)",
      accentGlow: "hsl(45, 100%, 50%)",
      matchedGlow: "hsl(165, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_166", {
      id: "palette_166",
      name: "Dynamic Theme #166",
      bgPrimary: "hsl(302, 40%, 10%)",
      bgSecondary: "hsl(302, 50%, 15%)",
      textMain: "hsl(302, 90%, 85%)",
      accentGlow: "hsl(62, 100%, 50%)",
      matchedGlow: "hsl(182, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_167", {
      id: "palette_167",
      name: "Dynamic Theme #167",
      bgPrimary: "hsl(319, 40%, 10%)",
      bgSecondary: "hsl(319, 50%, 15%)",
      textMain: "hsl(319, 90%, 85%)",
      accentGlow: "hsl(79, 100%, 50%)",
      matchedGlow: "hsl(199, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_168", {
      id: "palette_168",
      name: "Dynamic Theme #168",
      bgPrimary: "hsl(336, 40%, 10%)",
      bgSecondary: "hsl(336, 50%, 15%)",
      textMain: "hsl(336, 90%, 85%)",
      accentGlow: "hsl(96, 100%, 50%)",
      matchedGlow: "hsl(216, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_169", {
      id: "palette_169",
      name: "Dynamic Theme #169",
      bgPrimary: "hsl(353, 40%, 10%)",
      bgSecondary: "hsl(353, 50%, 15%)",
      textMain: "hsl(353, 90%, 85%)",
      accentGlow: "hsl(113, 100%, 50%)",
      matchedGlow: "hsl(233, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_170", {
      id: "palette_170",
      name: "Dynamic Theme #170",
      bgPrimary: "hsl(10, 40%, 10%)",
      bgSecondary: "hsl(10, 50%, 15%)",
      textMain: "hsl(10, 90%, 85%)",
      accentGlow: "hsl(130, 100%, 50%)",
      matchedGlow: "hsl(250, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_171", {
      id: "palette_171",
      name: "Dynamic Theme #171",
      bgPrimary: "hsl(27, 40%, 10%)",
      bgSecondary: "hsl(27, 50%, 15%)",
      textMain: "hsl(27, 90%, 85%)",
      accentGlow: "hsl(147, 100%, 50%)",
      matchedGlow: "hsl(267, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_172", {
      id: "palette_172",
      name: "Dynamic Theme #172",
      bgPrimary: "hsl(44, 40%, 10%)",
      bgSecondary: "hsl(44, 50%, 15%)",
      textMain: "hsl(44, 90%, 85%)",
      accentGlow: "hsl(164, 100%, 50%)",
      matchedGlow: "hsl(284, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_173", {
      id: "palette_173",
      name: "Dynamic Theme #173",
      bgPrimary: "hsl(61, 40%, 10%)",
      bgSecondary: "hsl(61, 50%, 15%)",
      textMain: "hsl(61, 90%, 85%)",
      accentGlow: "hsl(181, 100%, 50%)",
      matchedGlow: "hsl(301, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_174", {
      id: "palette_174",
      name: "Dynamic Theme #174",
      bgPrimary: "hsl(78, 40%, 10%)",
      bgSecondary: "hsl(78, 50%, 15%)",
      textMain: "hsl(78, 90%, 85%)",
      accentGlow: "hsl(198, 100%, 50%)",
      matchedGlow: "hsl(318, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_175", {
      id: "palette_175",
      name: "Dynamic Theme #175",
      bgPrimary: "hsl(95, 40%, 10%)",
      bgSecondary: "hsl(95, 50%, 15%)",
      textMain: "hsl(95, 90%, 85%)",
      accentGlow: "hsl(215, 100%, 50%)",
      matchedGlow: "hsl(335, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_176", {
      id: "palette_176",
      name: "Dynamic Theme #176",
      bgPrimary: "hsl(112, 40%, 10%)",
      bgSecondary: "hsl(112, 50%, 15%)",
      textMain: "hsl(112, 90%, 85%)",
      accentGlow: "hsl(232, 100%, 50%)",
      matchedGlow: "hsl(352, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_177", {
      id: "palette_177",
      name: "Dynamic Theme #177",
      bgPrimary: "hsl(129, 40%, 10%)",
      bgSecondary: "hsl(129, 50%, 15%)",
      textMain: "hsl(129, 90%, 85%)",
      accentGlow: "hsl(249, 100%, 50%)",
      matchedGlow: "hsl(9, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_178", {
      id: "palette_178",
      name: "Dynamic Theme #178",
      bgPrimary: "hsl(146, 40%, 10%)",
      bgSecondary: "hsl(146, 50%, 15%)",
      textMain: "hsl(146, 90%, 85%)",
      accentGlow: "hsl(266, 100%, 50%)",
      matchedGlow: "hsl(26, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_179", {
      id: "palette_179",
      name: "Dynamic Theme #179",
      bgPrimary: "hsl(163, 40%, 10%)",
      bgSecondary: "hsl(163, 50%, 15%)",
      textMain: "hsl(163, 90%, 85%)",
      accentGlow: "hsl(283, 100%, 50%)",
      matchedGlow: "hsl(43, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_180", {
      id: "palette_180",
      name: "Dynamic Theme #180",
      bgPrimary: "hsl(180, 40%, 10%)",
      bgSecondary: "hsl(180, 50%, 15%)",
      textMain: "hsl(180, 90%, 85%)",
      accentGlow: "hsl(300, 100%, 50%)",
      matchedGlow: "hsl(60, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_181", {
      id: "palette_181",
      name: "Dynamic Theme #181",
      bgPrimary: "hsl(197, 40%, 10%)",
      bgSecondary: "hsl(197, 50%, 15%)",
      textMain: "hsl(197, 90%, 85%)",
      accentGlow: "hsl(317, 100%, 50%)",
      matchedGlow: "hsl(77, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_182", {
      id: "palette_182",
      name: "Dynamic Theme #182",
      bgPrimary: "hsl(214, 40%, 10%)",
      bgSecondary: "hsl(214, 50%, 15%)",
      textMain: "hsl(214, 90%, 85%)",
      accentGlow: "hsl(334, 100%, 50%)",
      matchedGlow: "hsl(94, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_183", {
      id: "palette_183",
      name: "Dynamic Theme #183",
      bgPrimary: "hsl(231, 40%, 10%)",
      bgSecondary: "hsl(231, 50%, 15%)",
      textMain: "hsl(231, 90%, 85%)",
      accentGlow: "hsl(351, 100%, 50%)",
      matchedGlow: "hsl(111, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_184", {
      id: "palette_184",
      name: "Dynamic Theme #184",
      bgPrimary: "hsl(248, 40%, 10%)",
      bgSecondary: "hsl(248, 50%, 15%)",
      textMain: "hsl(248, 90%, 85%)",
      accentGlow: "hsl(8, 100%, 50%)",
      matchedGlow: "hsl(128, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_185", {
      id: "palette_185",
      name: "Dynamic Theme #185",
      bgPrimary: "hsl(265, 40%, 10%)",
      bgSecondary: "hsl(265, 50%, 15%)",
      textMain: "hsl(265, 90%, 85%)",
      accentGlow: "hsl(25, 100%, 50%)",
      matchedGlow: "hsl(145, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_186", {
      id: "palette_186",
      name: "Dynamic Theme #186",
      bgPrimary: "hsl(282, 40%, 10%)",
      bgSecondary: "hsl(282, 50%, 15%)",
      textMain: "hsl(282, 90%, 85%)",
      accentGlow: "hsl(42, 100%, 50%)",
      matchedGlow: "hsl(162, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_187", {
      id: "palette_187",
      name: "Dynamic Theme #187",
      bgPrimary: "hsl(299, 40%, 10%)",
      bgSecondary: "hsl(299, 50%, 15%)",
      textMain: "hsl(299, 90%, 85%)",
      accentGlow: "hsl(59, 100%, 50%)",
      matchedGlow: "hsl(179, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_188", {
      id: "palette_188",
      name: "Dynamic Theme #188",
      bgPrimary: "hsl(316, 40%, 10%)",
      bgSecondary: "hsl(316, 50%, 15%)",
      textMain: "hsl(316, 90%, 85%)",
      accentGlow: "hsl(76, 100%, 50%)",
      matchedGlow: "hsl(196, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_189", {
      id: "palette_189",
      name: "Dynamic Theme #189",
      bgPrimary: "hsl(333, 40%, 10%)",
      bgSecondary: "hsl(333, 50%, 15%)",
      textMain: "hsl(333, 90%, 85%)",
      accentGlow: "hsl(93, 100%, 50%)",
      matchedGlow: "hsl(213, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_190", {
      id: "palette_190",
      name: "Dynamic Theme #190",
      bgPrimary: "hsl(350, 40%, 10%)",
      bgSecondary: "hsl(350, 50%, 15%)",
      textMain: "hsl(350, 90%, 85%)",
      accentGlow: "hsl(110, 100%, 50%)",
      matchedGlow: "hsl(230, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_191", {
      id: "palette_191",
      name: "Dynamic Theme #191",
      bgPrimary: "hsl(7, 40%, 10%)",
      bgSecondary: "hsl(7, 50%, 15%)",
      textMain: "hsl(7, 90%, 85%)",
      accentGlow: "hsl(127, 100%, 50%)",
      matchedGlow: "hsl(247, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_192", {
      id: "palette_192",
      name: "Dynamic Theme #192",
      bgPrimary: "hsl(24, 40%, 10%)",
      bgSecondary: "hsl(24, 50%, 15%)",
      textMain: "hsl(24, 90%, 85%)",
      accentGlow: "hsl(144, 100%, 50%)",
      matchedGlow: "hsl(264, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_193", {
      id: "palette_193",
      name: "Dynamic Theme #193",
      bgPrimary: "hsl(41, 40%, 10%)",
      bgSecondary: "hsl(41, 50%, 15%)",
      textMain: "hsl(41, 90%, 85%)",
      accentGlow: "hsl(161, 100%, 50%)",
      matchedGlow: "hsl(281, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_194", {
      id: "palette_194",
      name: "Dynamic Theme #194",
      bgPrimary: "hsl(58, 40%, 10%)",
      bgSecondary: "hsl(58, 50%, 15%)",
      textMain: "hsl(58, 90%, 85%)",
      accentGlow: "hsl(178, 100%, 50%)",
      matchedGlow: "hsl(298, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_195", {
      id: "palette_195",
      name: "Dynamic Theme #195",
      bgPrimary: "hsl(75, 40%, 10%)",
      bgSecondary: "hsl(75, 50%, 15%)",
      textMain: "hsl(75, 90%, 85%)",
      accentGlow: "hsl(195, 100%, 50%)",
      matchedGlow: "hsl(315, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_196", {
      id: "palette_196",
      name: "Dynamic Theme #196",
      bgPrimary: "hsl(92, 40%, 10%)",
      bgSecondary: "hsl(92, 50%, 15%)",
      textMain: "hsl(92, 90%, 85%)",
      accentGlow: "hsl(212, 100%, 50%)",
      matchedGlow: "hsl(332, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_197", {
      id: "palette_197",
      name: "Dynamic Theme #197",
      bgPrimary: "hsl(109, 40%, 10%)",
      bgSecondary: "hsl(109, 50%, 15%)",
      textMain: "hsl(109, 90%, 85%)",
      accentGlow: "hsl(229, 100%, 50%)",
      matchedGlow: "hsl(349, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_198", {
      id: "palette_198",
      name: "Dynamic Theme #198",
      bgPrimary: "hsl(126, 40%, 10%)",
      bgSecondary: "hsl(126, 50%, 15%)",
      textMain: "hsl(126, 90%, 85%)",
      accentGlow: "hsl(246, 100%, 50%)",
      matchedGlow: "hsl(6, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_199", {
      id: "palette_199",
      name: "Dynamic Theme #199",
      bgPrimary: "hsl(143, 40%, 10%)",
      bgSecondary: "hsl(143, 50%, 15%)",
      textMain: "hsl(143, 90%, 85%)",
      accentGlow: "hsl(263, 100%, 50%)",
      matchedGlow: "hsl(23, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_200", {
      id: "palette_200",
      name: "Dynamic Theme #200",
      bgPrimary: "hsl(160, 40%, 10%)",
      bgSecondary: "hsl(160, 50%, 15%)",
      textMain: "hsl(160, 90%, 85%)",
      accentGlow: "hsl(280, 100%, 50%)",
      matchedGlow: "hsl(40, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_201", {
      id: "palette_201",
      name: "Dynamic Theme #201",
      bgPrimary: "hsl(177, 40%, 10%)",
      bgSecondary: "hsl(177, 50%, 15%)",
      textMain: "hsl(177, 90%, 85%)",
      accentGlow: "hsl(297, 100%, 50%)",
      matchedGlow: "hsl(57, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_202", {
      id: "palette_202",
      name: "Dynamic Theme #202",
      bgPrimary: "hsl(194, 40%, 10%)",
      bgSecondary: "hsl(194, 50%, 15%)",
      textMain: "hsl(194, 90%, 85%)",
      accentGlow: "hsl(314, 100%, 50%)",
      matchedGlow: "hsl(74, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_203", {
      id: "palette_203",
      name: "Dynamic Theme #203",
      bgPrimary: "hsl(211, 40%, 10%)",
      bgSecondary: "hsl(211, 50%, 15%)",
      textMain: "hsl(211, 90%, 85%)",
      accentGlow: "hsl(331, 100%, 50%)",
      matchedGlow: "hsl(91, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_204", {
      id: "palette_204",
      name: "Dynamic Theme #204",
      bgPrimary: "hsl(228, 40%, 10%)",
      bgSecondary: "hsl(228, 50%, 15%)",
      textMain: "hsl(228, 90%, 85%)",
      accentGlow: "hsl(348, 100%, 50%)",
      matchedGlow: "hsl(108, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_205", {
      id: "palette_205",
      name: "Dynamic Theme #205",
      bgPrimary: "hsl(245, 40%, 10%)",
      bgSecondary: "hsl(245, 50%, 15%)",
      textMain: "hsl(245, 90%, 85%)",
      accentGlow: "hsl(5, 100%, 50%)",
      matchedGlow: "hsl(125, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_206", {
      id: "palette_206",
      name: "Dynamic Theme #206",
      bgPrimary: "hsl(262, 40%, 10%)",
      bgSecondary: "hsl(262, 50%, 15%)",
      textMain: "hsl(262, 90%, 85%)",
      accentGlow: "hsl(22, 100%, 50%)",
      matchedGlow: "hsl(142, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_207", {
      id: "palette_207",
      name: "Dynamic Theme #207",
      bgPrimary: "hsl(279, 40%, 10%)",
      bgSecondary: "hsl(279, 50%, 15%)",
      textMain: "hsl(279, 90%, 85%)",
      accentGlow: "hsl(39, 100%, 50%)",
      matchedGlow: "hsl(159, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_208", {
      id: "palette_208",
      name: "Dynamic Theme #208",
      bgPrimary: "hsl(296, 40%, 10%)",
      bgSecondary: "hsl(296, 50%, 15%)",
      textMain: "hsl(296, 90%, 85%)",
      accentGlow: "hsl(56, 100%, 50%)",
      matchedGlow: "hsl(176, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_209", {
      id: "palette_209",
      name: "Dynamic Theme #209",
      bgPrimary: "hsl(313, 40%, 10%)",
      bgSecondary: "hsl(313, 50%, 15%)",
      textMain: "hsl(313, 90%, 85%)",
      accentGlow: "hsl(73, 100%, 50%)",
      matchedGlow: "hsl(193, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_210", {
      id: "palette_210",
      name: "Dynamic Theme #210",
      bgPrimary: "hsl(330, 40%, 10%)",
      bgSecondary: "hsl(330, 50%, 15%)",
      textMain: "hsl(330, 90%, 85%)",
      accentGlow: "hsl(90, 100%, 50%)",
      matchedGlow: "hsl(210, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_211", {
      id: "palette_211",
      name: "Dynamic Theme #211",
      bgPrimary: "hsl(347, 40%, 10%)",
      bgSecondary: "hsl(347, 50%, 15%)",
      textMain: "hsl(347, 90%, 85%)",
      accentGlow: "hsl(107, 100%, 50%)",
      matchedGlow: "hsl(227, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_212", {
      id: "palette_212",
      name: "Dynamic Theme #212",
      bgPrimary: "hsl(4, 40%, 10%)",
      bgSecondary: "hsl(4, 50%, 15%)",
      textMain: "hsl(4, 90%, 85%)",
      accentGlow: "hsl(124, 100%, 50%)",
      matchedGlow: "hsl(244, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_213", {
      id: "palette_213",
      name: "Dynamic Theme #213",
      bgPrimary: "hsl(21, 40%, 10%)",
      bgSecondary: "hsl(21, 50%, 15%)",
      textMain: "hsl(21, 90%, 85%)",
      accentGlow: "hsl(141, 100%, 50%)",
      matchedGlow: "hsl(261, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_214", {
      id: "palette_214",
      name: "Dynamic Theme #214",
      bgPrimary: "hsl(38, 40%, 10%)",
      bgSecondary: "hsl(38, 50%, 15%)",
      textMain: "hsl(38, 90%, 85%)",
      accentGlow: "hsl(158, 100%, 50%)",
      matchedGlow: "hsl(278, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_215", {
      id: "palette_215",
      name: "Dynamic Theme #215",
      bgPrimary: "hsl(55, 40%, 10%)",
      bgSecondary: "hsl(55, 50%, 15%)",
      textMain: "hsl(55, 90%, 85%)",
      accentGlow: "hsl(175, 100%, 50%)",
      matchedGlow: "hsl(295, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_216", {
      id: "palette_216",
      name: "Dynamic Theme #216",
      bgPrimary: "hsl(72, 40%, 10%)",
      bgSecondary: "hsl(72, 50%, 15%)",
      textMain: "hsl(72, 90%, 85%)",
      accentGlow: "hsl(192, 100%, 50%)",
      matchedGlow: "hsl(312, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_217", {
      id: "palette_217",
      name: "Dynamic Theme #217",
      bgPrimary: "hsl(89, 40%, 10%)",
      bgSecondary: "hsl(89, 50%, 15%)",
      textMain: "hsl(89, 90%, 85%)",
      accentGlow: "hsl(209, 100%, 50%)",
      matchedGlow: "hsl(329, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_218", {
      id: "palette_218",
      name: "Dynamic Theme #218",
      bgPrimary: "hsl(106, 40%, 10%)",
      bgSecondary: "hsl(106, 50%, 15%)",
      textMain: "hsl(106, 90%, 85%)",
      accentGlow: "hsl(226, 100%, 50%)",
      matchedGlow: "hsl(346, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_219", {
      id: "palette_219",
      name: "Dynamic Theme #219",
      bgPrimary: "hsl(123, 40%, 10%)",
      bgSecondary: "hsl(123, 50%, 15%)",
      textMain: "hsl(123, 90%, 85%)",
      accentGlow: "hsl(243, 100%, 50%)",
      matchedGlow: "hsl(3, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_220", {
      id: "palette_220",
      name: "Dynamic Theme #220",
      bgPrimary: "hsl(140, 40%, 10%)",
      bgSecondary: "hsl(140, 50%, 15%)",
      textMain: "hsl(140, 90%, 85%)",
      accentGlow: "hsl(260, 100%, 50%)",
      matchedGlow: "hsl(20, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_221", {
      id: "palette_221",
      name: "Dynamic Theme #221",
      bgPrimary: "hsl(157, 40%, 10%)",
      bgSecondary: "hsl(157, 50%, 15%)",
      textMain: "hsl(157, 90%, 85%)",
      accentGlow: "hsl(277, 100%, 50%)",
      matchedGlow: "hsl(37, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_222", {
      id: "palette_222",
      name: "Dynamic Theme #222",
      bgPrimary: "hsl(174, 40%, 10%)",
      bgSecondary: "hsl(174, 50%, 15%)",
      textMain: "hsl(174, 90%, 85%)",
      accentGlow: "hsl(294, 100%, 50%)",
      matchedGlow: "hsl(54, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_223", {
      id: "palette_223",
      name: "Dynamic Theme #223",
      bgPrimary: "hsl(191, 40%, 10%)",
      bgSecondary: "hsl(191, 50%, 15%)",
      textMain: "hsl(191, 90%, 85%)",
      accentGlow: "hsl(311, 100%, 50%)",
      matchedGlow: "hsl(71, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_224", {
      id: "palette_224",
      name: "Dynamic Theme #224",
      bgPrimary: "hsl(208, 40%, 10%)",
      bgSecondary: "hsl(208, 50%, 15%)",
      textMain: "hsl(208, 90%, 85%)",
      accentGlow: "hsl(328, 100%, 50%)",
      matchedGlow: "hsl(88, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_225", {
      id: "palette_225",
      name: "Dynamic Theme #225",
      bgPrimary: "hsl(225, 40%, 10%)",
      bgSecondary: "hsl(225, 50%, 15%)",
      textMain: "hsl(225, 90%, 85%)",
      accentGlow: "hsl(345, 100%, 50%)",
      matchedGlow: "hsl(105, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_226", {
      id: "palette_226",
      name: "Dynamic Theme #226",
      bgPrimary: "hsl(242, 40%, 10%)",
      bgSecondary: "hsl(242, 50%, 15%)",
      textMain: "hsl(242, 90%, 85%)",
      accentGlow: "hsl(2, 100%, 50%)",
      matchedGlow: "hsl(122, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_227", {
      id: "palette_227",
      name: "Dynamic Theme #227",
      bgPrimary: "hsl(259, 40%, 10%)",
      bgSecondary: "hsl(259, 50%, 15%)",
      textMain: "hsl(259, 90%, 85%)",
      accentGlow: "hsl(19, 100%, 50%)",
      matchedGlow: "hsl(139, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_228", {
      id: "palette_228",
      name: "Dynamic Theme #228",
      bgPrimary: "hsl(276, 40%, 10%)",
      bgSecondary: "hsl(276, 50%, 15%)",
      textMain: "hsl(276, 90%, 85%)",
      accentGlow: "hsl(36, 100%, 50%)",
      matchedGlow: "hsl(156, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_229", {
      id: "palette_229",
      name: "Dynamic Theme #229",
      bgPrimary: "hsl(293, 40%, 10%)",
      bgSecondary: "hsl(293, 50%, 15%)",
      textMain: "hsl(293, 90%, 85%)",
      accentGlow: "hsl(53, 100%, 50%)",
      matchedGlow: "hsl(173, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_230", {
      id: "palette_230",
      name: "Dynamic Theme #230",
      bgPrimary: "hsl(310, 40%, 10%)",
      bgSecondary: "hsl(310, 50%, 15%)",
      textMain: "hsl(310, 90%, 85%)",
      accentGlow: "hsl(70, 100%, 50%)",
      matchedGlow: "hsl(190, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_231", {
      id: "palette_231",
      name: "Dynamic Theme #231",
      bgPrimary: "hsl(327, 40%, 10%)",
      bgSecondary: "hsl(327, 50%, 15%)",
      textMain: "hsl(327, 90%, 85%)",
      accentGlow: "hsl(87, 100%, 50%)",
      matchedGlow: "hsl(207, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_232", {
      id: "palette_232",
      name: "Dynamic Theme #232",
      bgPrimary: "hsl(344, 40%, 10%)",
      bgSecondary: "hsl(344, 50%, 15%)",
      textMain: "hsl(344, 90%, 85%)",
      accentGlow: "hsl(104, 100%, 50%)",
      matchedGlow: "hsl(224, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_233", {
      id: "palette_233",
      name: "Dynamic Theme #233",
      bgPrimary: "hsl(1, 40%, 10%)",
      bgSecondary: "hsl(1, 50%, 15%)",
      textMain: "hsl(1, 90%, 85%)",
      accentGlow: "hsl(121, 100%, 50%)",
      matchedGlow: "hsl(241, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_234", {
      id: "palette_234",
      name: "Dynamic Theme #234",
      bgPrimary: "hsl(18, 40%, 10%)",
      bgSecondary: "hsl(18, 50%, 15%)",
      textMain: "hsl(18, 90%, 85%)",
      accentGlow: "hsl(138, 100%, 50%)",
      matchedGlow: "hsl(258, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_235", {
      id: "palette_235",
      name: "Dynamic Theme #235",
      bgPrimary: "hsl(35, 40%, 10%)",
      bgSecondary: "hsl(35, 50%, 15%)",
      textMain: "hsl(35, 90%, 85%)",
      accentGlow: "hsl(155, 100%, 50%)",
      matchedGlow: "hsl(275, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_236", {
      id: "palette_236",
      name: "Dynamic Theme #236",
      bgPrimary: "hsl(52, 40%, 10%)",
      bgSecondary: "hsl(52, 50%, 15%)",
      textMain: "hsl(52, 90%, 85%)",
      accentGlow: "hsl(172, 100%, 50%)",
      matchedGlow: "hsl(292, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_237", {
      id: "palette_237",
      name: "Dynamic Theme #237",
      bgPrimary: "hsl(69, 40%, 10%)",
      bgSecondary: "hsl(69, 50%, 15%)",
      textMain: "hsl(69, 90%, 85%)",
      accentGlow: "hsl(189, 100%, 50%)",
      matchedGlow: "hsl(309, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_238", {
      id: "palette_238",
      name: "Dynamic Theme #238",
      bgPrimary: "hsl(86, 40%, 10%)",
      bgSecondary: "hsl(86, 50%, 15%)",
      textMain: "hsl(86, 90%, 85%)",
      accentGlow: "hsl(206, 100%, 50%)",
      matchedGlow: "hsl(326, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_239", {
      id: "palette_239",
      name: "Dynamic Theme #239",
      bgPrimary: "hsl(103, 40%, 10%)",
      bgSecondary: "hsl(103, 50%, 15%)",
      textMain: "hsl(103, 90%, 85%)",
      accentGlow: "hsl(223, 100%, 50%)",
      matchedGlow: "hsl(343, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_240", {
      id: "palette_240",
      name: "Dynamic Theme #240",
      bgPrimary: "hsl(120, 40%, 10%)",
      bgSecondary: "hsl(120, 50%, 15%)",
      textMain: "hsl(120, 90%, 85%)",
      accentGlow: "hsl(240, 100%, 50%)",
      matchedGlow: "hsl(0, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_241", {
      id: "palette_241",
      name: "Dynamic Theme #241",
      bgPrimary: "hsl(137, 40%, 10%)",
      bgSecondary: "hsl(137, 50%, 15%)",
      textMain: "hsl(137, 90%, 85%)",
      accentGlow: "hsl(257, 100%, 50%)",
      matchedGlow: "hsl(17, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_242", {
      id: "palette_242",
      name: "Dynamic Theme #242",
      bgPrimary: "hsl(154, 40%, 10%)",
      bgSecondary: "hsl(154, 50%, 15%)",
      textMain: "hsl(154, 90%, 85%)",
      accentGlow: "hsl(274, 100%, 50%)",
      matchedGlow: "hsl(34, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_243", {
      id: "palette_243",
      name: "Dynamic Theme #243",
      bgPrimary: "hsl(171, 40%, 10%)",
      bgSecondary: "hsl(171, 50%, 15%)",
      textMain: "hsl(171, 90%, 85%)",
      accentGlow: "hsl(291, 100%, 50%)",
      matchedGlow: "hsl(51, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_244", {
      id: "palette_244",
      name: "Dynamic Theme #244",
      bgPrimary: "hsl(188, 40%, 10%)",
      bgSecondary: "hsl(188, 50%, 15%)",
      textMain: "hsl(188, 90%, 85%)",
      accentGlow: "hsl(308, 100%, 50%)",
      matchedGlow: "hsl(68, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_245", {
      id: "palette_245",
      name: "Dynamic Theme #245",
      bgPrimary: "hsl(205, 40%, 10%)",
      bgSecondary: "hsl(205, 50%, 15%)",
      textMain: "hsl(205, 90%, 85%)",
      accentGlow: "hsl(325, 100%, 50%)",
      matchedGlow: "hsl(85, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_246", {
      id: "palette_246",
      name: "Dynamic Theme #246",
      bgPrimary: "hsl(222, 40%, 10%)",
      bgSecondary: "hsl(222, 50%, 15%)",
      textMain: "hsl(222, 90%, 85%)",
      accentGlow: "hsl(342, 100%, 50%)",
      matchedGlow: "hsl(102, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_247", {
      id: "palette_247",
      name: "Dynamic Theme #247",
      bgPrimary: "hsl(239, 40%, 10%)",
      bgSecondary: "hsl(239, 50%, 15%)",
      textMain: "hsl(239, 90%, 85%)",
      accentGlow: "hsl(359, 100%, 50%)",
      matchedGlow: "hsl(119, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_248", {
      id: "palette_248",
      name: "Dynamic Theme #248",
      bgPrimary: "hsl(256, 40%, 10%)",
      bgSecondary: "hsl(256, 50%, 15%)",
      textMain: "hsl(256, 90%, 85%)",
      accentGlow: "hsl(16, 100%, 50%)",
      matchedGlow: "hsl(136, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_249", {
      id: "palette_249",
      name: "Dynamic Theme #249",
      bgPrimary: "hsl(273, 40%, 10%)",
      bgSecondary: "hsl(273, 50%, 15%)",
      textMain: "hsl(273, 90%, 85%)",
      accentGlow: "hsl(33, 100%, 50%)",
      matchedGlow: "hsl(153, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_250", {
      id: "palette_250",
      name: "Dynamic Theme #250",
      bgPrimary: "hsl(290, 40%, 10%)",
      bgSecondary: "hsl(290, 50%, 15%)",
      textMain: "hsl(290, 90%, 85%)",
      accentGlow: "hsl(50, 100%, 50%)",
      matchedGlow: "hsl(170, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_251", {
      id: "palette_251",
      name: "Dynamic Theme #251",
      bgPrimary: "hsl(307, 40%, 10%)",
      bgSecondary: "hsl(307, 50%, 15%)",
      textMain: "hsl(307, 90%, 85%)",
      accentGlow: "hsl(67, 100%, 50%)",
      matchedGlow: "hsl(187, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_252", {
      id: "palette_252",
      name: "Dynamic Theme #252",
      bgPrimary: "hsl(324, 40%, 10%)",
      bgSecondary: "hsl(324, 50%, 15%)",
      textMain: "hsl(324, 90%, 85%)",
      accentGlow: "hsl(84, 100%, 50%)",
      matchedGlow: "hsl(204, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_253", {
      id: "palette_253",
      name: "Dynamic Theme #253",
      bgPrimary: "hsl(341, 40%, 10%)",
      bgSecondary: "hsl(341, 50%, 15%)",
      textMain: "hsl(341, 90%, 85%)",
      accentGlow: "hsl(101, 100%, 50%)",
      matchedGlow: "hsl(221, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_254", {
      id: "palette_254",
      name: "Dynamic Theme #254",
      bgPrimary: "hsl(358, 40%, 10%)",
      bgSecondary: "hsl(358, 50%, 15%)",
      textMain: "hsl(358, 90%, 85%)",
      accentGlow: "hsl(118, 100%, 50%)",
      matchedGlow: "hsl(238, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_255", {
      id: "palette_255",
      name: "Dynamic Theme #255",
      bgPrimary: "hsl(15, 40%, 10%)",
      bgSecondary: "hsl(15, 50%, 15%)",
      textMain: "hsl(15, 90%, 85%)",
      accentGlow: "hsl(135, 100%, 50%)",
      matchedGlow: "hsl(255, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_256", {
      id: "palette_256",
      name: "Dynamic Theme #256",
      bgPrimary: "hsl(32, 40%, 10%)",
      bgSecondary: "hsl(32, 50%, 15%)",
      textMain: "hsl(32, 90%, 85%)",
      accentGlow: "hsl(152, 100%, 50%)",
      matchedGlow: "hsl(272, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_257", {
      id: "palette_257",
      name: "Dynamic Theme #257",
      bgPrimary: "hsl(49, 40%, 10%)",
      bgSecondary: "hsl(49, 50%, 15%)",
      textMain: "hsl(49, 90%, 85%)",
      accentGlow: "hsl(169, 100%, 50%)",
      matchedGlow: "hsl(289, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_258", {
      id: "palette_258",
      name: "Dynamic Theme #258",
      bgPrimary: "hsl(66, 40%, 10%)",
      bgSecondary: "hsl(66, 50%, 15%)",
      textMain: "hsl(66, 90%, 85%)",
      accentGlow: "hsl(186, 100%, 50%)",
      matchedGlow: "hsl(306, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_259", {
      id: "palette_259",
      name: "Dynamic Theme #259",
      bgPrimary: "hsl(83, 40%, 10%)",
      bgSecondary: "hsl(83, 50%, 15%)",
      textMain: "hsl(83, 90%, 85%)",
      accentGlow: "hsl(203, 100%, 50%)",
      matchedGlow: "hsl(323, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_260", {
      id: "palette_260",
      name: "Dynamic Theme #260",
      bgPrimary: "hsl(100, 40%, 10%)",
      bgSecondary: "hsl(100, 50%, 15%)",
      textMain: "hsl(100, 90%, 85%)",
      accentGlow: "hsl(220, 100%, 50%)",
      matchedGlow: "hsl(340, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_261", {
      id: "palette_261",
      name: "Dynamic Theme #261",
      bgPrimary: "hsl(117, 40%, 10%)",
      bgSecondary: "hsl(117, 50%, 15%)",
      textMain: "hsl(117, 90%, 85%)",
      accentGlow: "hsl(237, 100%, 50%)",
      matchedGlow: "hsl(357, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_262", {
      id: "palette_262",
      name: "Dynamic Theme #262",
      bgPrimary: "hsl(134, 40%, 10%)",
      bgSecondary: "hsl(134, 50%, 15%)",
      textMain: "hsl(134, 90%, 85%)",
      accentGlow: "hsl(254, 100%, 50%)",
      matchedGlow: "hsl(14, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_263", {
      id: "palette_263",
      name: "Dynamic Theme #263",
      bgPrimary: "hsl(151, 40%, 10%)",
      bgSecondary: "hsl(151, 50%, 15%)",
      textMain: "hsl(151, 90%, 85%)",
      accentGlow: "hsl(271, 100%, 50%)",
      matchedGlow: "hsl(31, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_264", {
      id: "palette_264",
      name: "Dynamic Theme #264",
      bgPrimary: "hsl(168, 40%, 10%)",
      bgSecondary: "hsl(168, 50%, 15%)",
      textMain: "hsl(168, 90%, 85%)",
      accentGlow: "hsl(288, 100%, 50%)",
      matchedGlow: "hsl(48, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_265", {
      id: "palette_265",
      name: "Dynamic Theme #265",
      bgPrimary: "hsl(185, 40%, 10%)",
      bgSecondary: "hsl(185, 50%, 15%)",
      textMain: "hsl(185, 90%, 85%)",
      accentGlow: "hsl(305, 100%, 50%)",
      matchedGlow: "hsl(65, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_266", {
      id: "palette_266",
      name: "Dynamic Theme #266",
      bgPrimary: "hsl(202, 40%, 10%)",
      bgSecondary: "hsl(202, 50%, 15%)",
      textMain: "hsl(202, 90%, 85%)",
      accentGlow: "hsl(322, 100%, 50%)",
      matchedGlow: "hsl(82, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_267", {
      id: "palette_267",
      name: "Dynamic Theme #267",
      bgPrimary: "hsl(219, 40%, 10%)",
      bgSecondary: "hsl(219, 50%, 15%)",
      textMain: "hsl(219, 90%, 85%)",
      accentGlow: "hsl(339, 100%, 50%)",
      matchedGlow: "hsl(99, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_268", {
      id: "palette_268",
      name: "Dynamic Theme #268",
      bgPrimary: "hsl(236, 40%, 10%)",
      bgSecondary: "hsl(236, 50%, 15%)",
      textMain: "hsl(236, 90%, 85%)",
      accentGlow: "hsl(356, 100%, 50%)",
      matchedGlow: "hsl(116, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_269", {
      id: "palette_269",
      name: "Dynamic Theme #269",
      bgPrimary: "hsl(253, 40%, 10%)",
      bgSecondary: "hsl(253, 50%, 15%)",
      textMain: "hsl(253, 90%, 85%)",
      accentGlow: "hsl(13, 100%, 50%)",
      matchedGlow: "hsl(133, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_270", {
      id: "palette_270",
      name: "Dynamic Theme #270",
      bgPrimary: "hsl(270, 40%, 10%)",
      bgSecondary: "hsl(270, 50%, 15%)",
      textMain: "hsl(270, 90%, 85%)",
      accentGlow: "hsl(30, 100%, 50%)",
      matchedGlow: "hsl(150, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_271", {
      id: "palette_271",
      name: "Dynamic Theme #271",
      bgPrimary: "hsl(287, 40%, 10%)",
      bgSecondary: "hsl(287, 50%, 15%)",
      textMain: "hsl(287, 90%, 85%)",
      accentGlow: "hsl(47, 100%, 50%)",
      matchedGlow: "hsl(167, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_272", {
      id: "palette_272",
      name: "Dynamic Theme #272",
      bgPrimary: "hsl(304, 40%, 10%)",
      bgSecondary: "hsl(304, 50%, 15%)",
      textMain: "hsl(304, 90%, 85%)",
      accentGlow: "hsl(64, 100%, 50%)",
      matchedGlow: "hsl(184, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_273", {
      id: "palette_273",
      name: "Dynamic Theme #273",
      bgPrimary: "hsl(321, 40%, 10%)",
      bgSecondary: "hsl(321, 50%, 15%)",
      textMain: "hsl(321, 90%, 85%)",
      accentGlow: "hsl(81, 100%, 50%)",
      matchedGlow: "hsl(201, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_274", {
      id: "palette_274",
      name: "Dynamic Theme #274",
      bgPrimary: "hsl(338, 40%, 10%)",
      bgSecondary: "hsl(338, 50%, 15%)",
      textMain: "hsl(338, 90%, 85%)",
      accentGlow: "hsl(98, 100%, 50%)",
      matchedGlow: "hsl(218, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_275", {
      id: "palette_275",
      name: "Dynamic Theme #275",
      bgPrimary: "hsl(355, 40%, 10%)",
      bgSecondary: "hsl(355, 50%, 15%)",
      textMain: "hsl(355, 90%, 85%)",
      accentGlow: "hsl(115, 100%, 50%)",
      matchedGlow: "hsl(235, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_276", {
      id: "palette_276",
      name: "Dynamic Theme #276",
      bgPrimary: "hsl(12, 40%, 10%)",
      bgSecondary: "hsl(12, 50%, 15%)",
      textMain: "hsl(12, 90%, 85%)",
      accentGlow: "hsl(132, 100%, 50%)",
      matchedGlow: "hsl(252, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_277", {
      id: "palette_277",
      name: "Dynamic Theme #277",
      bgPrimary: "hsl(29, 40%, 10%)",
      bgSecondary: "hsl(29, 50%, 15%)",
      textMain: "hsl(29, 90%, 85%)",
      accentGlow: "hsl(149, 100%, 50%)",
      matchedGlow: "hsl(269, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_278", {
      id: "palette_278",
      name: "Dynamic Theme #278",
      bgPrimary: "hsl(46, 40%, 10%)",
      bgSecondary: "hsl(46, 50%, 15%)",
      textMain: "hsl(46, 90%, 85%)",
      accentGlow: "hsl(166, 100%, 50%)",
      matchedGlow: "hsl(286, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_279", {
      id: "palette_279",
      name: "Dynamic Theme #279",
      bgPrimary: "hsl(63, 40%, 10%)",
      bgSecondary: "hsl(63, 50%, 15%)",
      textMain: "hsl(63, 90%, 85%)",
      accentGlow: "hsl(183, 100%, 50%)",
      matchedGlow: "hsl(303, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_280", {
      id: "palette_280",
      name: "Dynamic Theme #280",
      bgPrimary: "hsl(80, 40%, 10%)",
      bgSecondary: "hsl(80, 50%, 15%)",
      textMain: "hsl(80, 90%, 85%)",
      accentGlow: "hsl(200, 100%, 50%)",
      matchedGlow: "hsl(320, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_281", {
      id: "palette_281",
      name: "Dynamic Theme #281",
      bgPrimary: "hsl(97, 40%, 10%)",
      bgSecondary: "hsl(97, 50%, 15%)",
      textMain: "hsl(97, 90%, 85%)",
      accentGlow: "hsl(217, 100%, 50%)",
      matchedGlow: "hsl(337, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_282", {
      id: "palette_282",
      name: "Dynamic Theme #282",
      bgPrimary: "hsl(114, 40%, 10%)",
      bgSecondary: "hsl(114, 50%, 15%)",
      textMain: "hsl(114, 90%, 85%)",
      accentGlow: "hsl(234, 100%, 50%)",
      matchedGlow: "hsl(354, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_283", {
      id: "palette_283",
      name: "Dynamic Theme #283",
      bgPrimary: "hsl(131, 40%, 10%)",
      bgSecondary: "hsl(131, 50%, 15%)",
      textMain: "hsl(131, 90%, 85%)",
      accentGlow: "hsl(251, 100%, 50%)",
      matchedGlow: "hsl(11, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_284", {
      id: "palette_284",
      name: "Dynamic Theme #284",
      bgPrimary: "hsl(148, 40%, 10%)",
      bgSecondary: "hsl(148, 50%, 15%)",
      textMain: "hsl(148, 90%, 85%)",
      accentGlow: "hsl(268, 100%, 50%)",
      matchedGlow: "hsl(28, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_285", {
      id: "palette_285",
      name: "Dynamic Theme #285",
      bgPrimary: "hsl(165, 40%, 10%)",
      bgSecondary: "hsl(165, 50%, 15%)",
      textMain: "hsl(165, 90%, 85%)",
      accentGlow: "hsl(285, 100%, 50%)",
      matchedGlow: "hsl(45, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_286", {
      id: "palette_286",
      name: "Dynamic Theme #286",
      bgPrimary: "hsl(182, 40%, 10%)",
      bgSecondary: "hsl(182, 50%, 15%)",
      textMain: "hsl(182, 90%, 85%)",
      accentGlow: "hsl(302, 100%, 50%)",
      matchedGlow: "hsl(62, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_287", {
      id: "palette_287",
      name: "Dynamic Theme #287",
      bgPrimary: "hsl(199, 40%, 10%)",
      bgSecondary: "hsl(199, 50%, 15%)",
      textMain: "hsl(199, 90%, 85%)",
      accentGlow: "hsl(319, 100%, 50%)",
      matchedGlow: "hsl(79, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_288", {
      id: "palette_288",
      name: "Dynamic Theme #288",
      bgPrimary: "hsl(216, 40%, 10%)",
      bgSecondary: "hsl(216, 50%, 15%)",
      textMain: "hsl(216, 90%, 85%)",
      accentGlow: "hsl(336, 100%, 50%)",
      matchedGlow: "hsl(96, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_289", {
      id: "palette_289",
      name: "Dynamic Theme #289",
      bgPrimary: "hsl(233, 40%, 10%)",
      bgSecondary: "hsl(233, 50%, 15%)",
      textMain: "hsl(233, 90%, 85%)",
      accentGlow: "hsl(353, 100%, 50%)",
      matchedGlow: "hsl(113, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_290", {
      id: "palette_290",
      name: "Dynamic Theme #290",
      bgPrimary: "hsl(250, 40%, 10%)",
      bgSecondary: "hsl(250, 50%, 15%)",
      textMain: "hsl(250, 90%, 85%)",
      accentGlow: "hsl(10, 100%, 50%)",
      matchedGlow: "hsl(130, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_291", {
      id: "palette_291",
      name: "Dynamic Theme #291",
      bgPrimary: "hsl(267, 40%, 10%)",
      bgSecondary: "hsl(267, 50%, 15%)",
      textMain: "hsl(267, 90%, 85%)",
      accentGlow: "hsl(27, 100%, 50%)",
      matchedGlow: "hsl(147, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_292", {
      id: "palette_292",
      name: "Dynamic Theme #292",
      bgPrimary: "hsl(284, 40%, 10%)",
      bgSecondary: "hsl(284, 50%, 15%)",
      textMain: "hsl(284, 90%, 85%)",
      accentGlow: "hsl(44, 100%, 50%)",
      matchedGlow: "hsl(164, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_293", {
      id: "palette_293",
      name: "Dynamic Theme #293",
      bgPrimary: "hsl(301, 40%, 10%)",
      bgSecondary: "hsl(301, 50%, 15%)",
      textMain: "hsl(301, 90%, 85%)",
      accentGlow: "hsl(61, 100%, 50%)",
      matchedGlow: "hsl(181, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_294", {
      id: "palette_294",
      name: "Dynamic Theme #294",
      bgPrimary: "hsl(318, 40%, 10%)",
      bgSecondary: "hsl(318, 50%, 15%)",
      textMain: "hsl(318, 90%, 85%)",
      accentGlow: "hsl(78, 100%, 50%)",
      matchedGlow: "hsl(198, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_295", {
      id: "palette_295",
      name: "Dynamic Theme #295",
      bgPrimary: "hsl(335, 40%, 10%)",
      bgSecondary: "hsl(335, 50%, 15%)",
      textMain: "hsl(335, 90%, 85%)",
      accentGlow: "hsl(95, 100%, 50%)",
      matchedGlow: "hsl(215, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_296", {
      id: "palette_296",
      name: "Dynamic Theme #296",
      bgPrimary: "hsl(352, 40%, 10%)",
      bgSecondary: "hsl(352, 50%, 15%)",
      textMain: "hsl(352, 90%, 85%)",
      accentGlow: "hsl(112, 100%, 50%)",
      matchedGlow: "hsl(232, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_297", {
      id: "palette_297",
      name: "Dynamic Theme #297",
      bgPrimary: "hsl(9, 40%, 10%)",
      bgSecondary: "hsl(9, 50%, 15%)",
      textMain: "hsl(9, 90%, 85%)",
      accentGlow: "hsl(129, 100%, 50%)",
      matchedGlow: "hsl(249, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_298", {
      id: "palette_298",
      name: "Dynamic Theme #298",
      bgPrimary: "hsl(26, 40%, 10%)",
      bgSecondary: "hsl(26, 50%, 15%)",
      textMain: "hsl(26, 90%, 85%)",
      accentGlow: "hsl(146, 100%, 50%)",
      matchedGlow: "hsl(266, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_299", {
      id: "palette_299",
      name: "Dynamic Theme #299",
      bgPrimary: "hsl(43, 40%, 10%)",
      bgSecondary: "hsl(43, 50%, 15%)",
      textMain: "hsl(43, 90%, 85%)",
      accentGlow: "hsl(163, 100%, 50%)",
      matchedGlow: "hsl(283, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_300", {
      id: "palette_300",
      name: "Dynamic Theme #300",
      bgPrimary: "hsl(60, 40%, 10%)",
      bgSecondary: "hsl(60, 50%, 15%)",
      textMain: "hsl(60, 90%, 85%)",
      accentGlow: "hsl(180, 100%, 50%)",
      matchedGlow: "hsl(300, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_301", {
      id: "palette_301",
      name: "Dynamic Theme #301",
      bgPrimary: "hsl(77, 40%, 10%)",
      bgSecondary: "hsl(77, 50%, 15%)",
      textMain: "hsl(77, 90%, 85%)",
      accentGlow: "hsl(197, 100%, 50%)",
      matchedGlow: "hsl(317, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_302", {
      id: "palette_302",
      name: "Dynamic Theme #302",
      bgPrimary: "hsl(94, 40%, 10%)",
      bgSecondary: "hsl(94, 50%, 15%)",
      textMain: "hsl(94, 90%, 85%)",
      accentGlow: "hsl(214, 100%, 50%)",
      matchedGlow: "hsl(334, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_303", {
      id: "palette_303",
      name: "Dynamic Theme #303",
      bgPrimary: "hsl(111, 40%, 10%)",
      bgSecondary: "hsl(111, 50%, 15%)",
      textMain: "hsl(111, 90%, 85%)",
      accentGlow: "hsl(231, 100%, 50%)",
      matchedGlow: "hsl(351, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_304", {
      id: "palette_304",
      name: "Dynamic Theme #304",
      bgPrimary: "hsl(128, 40%, 10%)",
      bgSecondary: "hsl(128, 50%, 15%)",
      textMain: "hsl(128, 90%, 85%)",
      accentGlow: "hsl(248, 100%, 50%)",
      matchedGlow: "hsl(8, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_305", {
      id: "palette_305",
      name: "Dynamic Theme #305",
      bgPrimary: "hsl(145, 40%, 10%)",
      bgSecondary: "hsl(145, 50%, 15%)",
      textMain: "hsl(145, 90%, 85%)",
      accentGlow: "hsl(265, 100%, 50%)",
      matchedGlow: "hsl(25, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_306", {
      id: "palette_306",
      name: "Dynamic Theme #306",
      bgPrimary: "hsl(162, 40%, 10%)",
      bgSecondary: "hsl(162, 50%, 15%)",
      textMain: "hsl(162, 90%, 85%)",
      accentGlow: "hsl(282, 100%, 50%)",
      matchedGlow: "hsl(42, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_307", {
      id: "palette_307",
      name: "Dynamic Theme #307",
      bgPrimary: "hsl(179, 40%, 10%)",
      bgSecondary: "hsl(179, 50%, 15%)",
      textMain: "hsl(179, 90%, 85%)",
      accentGlow: "hsl(299, 100%, 50%)",
      matchedGlow: "hsl(59, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_308", {
      id: "palette_308",
      name: "Dynamic Theme #308",
      bgPrimary: "hsl(196, 40%, 10%)",
      bgSecondary: "hsl(196, 50%, 15%)",
      textMain: "hsl(196, 90%, 85%)",
      accentGlow: "hsl(316, 100%, 50%)",
      matchedGlow: "hsl(76, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_309", {
      id: "palette_309",
      name: "Dynamic Theme #309",
      bgPrimary: "hsl(213, 40%, 10%)",
      bgSecondary: "hsl(213, 50%, 15%)",
      textMain: "hsl(213, 90%, 85%)",
      accentGlow: "hsl(333, 100%, 50%)",
      matchedGlow: "hsl(93, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_310", {
      id: "palette_310",
      name: "Dynamic Theme #310",
      bgPrimary: "hsl(230, 40%, 10%)",
      bgSecondary: "hsl(230, 50%, 15%)",
      textMain: "hsl(230, 90%, 85%)",
      accentGlow: "hsl(350, 100%, 50%)",
      matchedGlow: "hsl(110, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_311", {
      id: "palette_311",
      name: "Dynamic Theme #311",
      bgPrimary: "hsl(247, 40%, 10%)",
      bgSecondary: "hsl(247, 50%, 15%)",
      textMain: "hsl(247, 90%, 85%)",
      accentGlow: "hsl(7, 100%, 50%)",
      matchedGlow: "hsl(127, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_312", {
      id: "palette_312",
      name: "Dynamic Theme #312",
      bgPrimary: "hsl(264, 40%, 10%)",
      bgSecondary: "hsl(264, 50%, 15%)",
      textMain: "hsl(264, 90%, 85%)",
      accentGlow: "hsl(24, 100%, 50%)",
      matchedGlow: "hsl(144, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_313", {
      id: "palette_313",
      name: "Dynamic Theme #313",
      bgPrimary: "hsl(281, 40%, 10%)",
      bgSecondary: "hsl(281, 50%, 15%)",
      textMain: "hsl(281, 90%, 85%)",
      accentGlow: "hsl(41, 100%, 50%)",
      matchedGlow: "hsl(161, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_314", {
      id: "palette_314",
      name: "Dynamic Theme #314",
      bgPrimary: "hsl(298, 40%, 10%)",
      bgSecondary: "hsl(298, 50%, 15%)",
      textMain: "hsl(298, 90%, 85%)",
      accentGlow: "hsl(58, 100%, 50%)",
      matchedGlow: "hsl(178, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_315", {
      id: "palette_315",
      name: "Dynamic Theme #315",
      bgPrimary: "hsl(315, 40%, 10%)",
      bgSecondary: "hsl(315, 50%, 15%)",
      textMain: "hsl(315, 90%, 85%)",
      accentGlow: "hsl(75, 100%, 50%)",
      matchedGlow: "hsl(195, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_316", {
      id: "palette_316",
      name: "Dynamic Theme #316",
      bgPrimary: "hsl(332, 40%, 10%)",
      bgSecondary: "hsl(332, 50%, 15%)",
      textMain: "hsl(332, 90%, 85%)",
      accentGlow: "hsl(92, 100%, 50%)",
      matchedGlow: "hsl(212, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_317", {
      id: "palette_317",
      name: "Dynamic Theme #317",
      bgPrimary: "hsl(349, 40%, 10%)",
      bgSecondary: "hsl(349, 50%, 15%)",
      textMain: "hsl(349, 90%, 85%)",
      accentGlow: "hsl(109, 100%, 50%)",
      matchedGlow: "hsl(229, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_318", {
      id: "palette_318",
      name: "Dynamic Theme #318",
      bgPrimary: "hsl(6, 40%, 10%)",
      bgSecondary: "hsl(6, 50%, 15%)",
      textMain: "hsl(6, 90%, 85%)",
      accentGlow: "hsl(126, 100%, 50%)",
      matchedGlow: "hsl(246, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_319", {
      id: "palette_319",
      name: "Dynamic Theme #319",
      bgPrimary: "hsl(23, 40%, 10%)",
      bgSecondary: "hsl(23, 50%, 15%)",
      textMain: "hsl(23, 90%, 85%)",
      accentGlow: "hsl(143, 100%, 50%)",
      matchedGlow: "hsl(263, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_320", {
      id: "palette_320",
      name: "Dynamic Theme #320",
      bgPrimary: "hsl(40, 40%, 10%)",
      bgSecondary: "hsl(40, 50%, 15%)",
      textMain: "hsl(40, 90%, 85%)",
      accentGlow: "hsl(160, 100%, 50%)",
      matchedGlow: "hsl(280, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_321", {
      id: "palette_321",
      name: "Dynamic Theme #321",
      bgPrimary: "hsl(57, 40%, 10%)",
      bgSecondary: "hsl(57, 50%, 15%)",
      textMain: "hsl(57, 90%, 85%)",
      accentGlow: "hsl(177, 100%, 50%)",
      matchedGlow: "hsl(297, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_322", {
      id: "palette_322",
      name: "Dynamic Theme #322",
      bgPrimary: "hsl(74, 40%, 10%)",
      bgSecondary: "hsl(74, 50%, 15%)",
      textMain: "hsl(74, 90%, 85%)",
      accentGlow: "hsl(194, 100%, 50%)",
      matchedGlow: "hsl(314, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_323", {
      id: "palette_323",
      name: "Dynamic Theme #323",
      bgPrimary: "hsl(91, 40%, 10%)",
      bgSecondary: "hsl(91, 50%, 15%)",
      textMain: "hsl(91, 90%, 85%)",
      accentGlow: "hsl(211, 100%, 50%)",
      matchedGlow: "hsl(331, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_324", {
      id: "palette_324",
      name: "Dynamic Theme #324",
      bgPrimary: "hsl(108, 40%, 10%)",
      bgSecondary: "hsl(108, 50%, 15%)",
      textMain: "hsl(108, 90%, 85%)",
      accentGlow: "hsl(228, 100%, 50%)",
      matchedGlow: "hsl(348, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_325", {
      id: "palette_325",
      name: "Dynamic Theme #325",
      bgPrimary: "hsl(125, 40%, 10%)",
      bgSecondary: "hsl(125, 50%, 15%)",
      textMain: "hsl(125, 90%, 85%)",
      accentGlow: "hsl(245, 100%, 50%)",
      matchedGlow: "hsl(5, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_326", {
      id: "palette_326",
      name: "Dynamic Theme #326",
      bgPrimary: "hsl(142, 40%, 10%)",
      bgSecondary: "hsl(142, 50%, 15%)",
      textMain: "hsl(142, 90%, 85%)",
      accentGlow: "hsl(262, 100%, 50%)",
      matchedGlow: "hsl(22, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_327", {
      id: "palette_327",
      name: "Dynamic Theme #327",
      bgPrimary: "hsl(159, 40%, 10%)",
      bgSecondary: "hsl(159, 50%, 15%)",
      textMain: "hsl(159, 90%, 85%)",
      accentGlow: "hsl(279, 100%, 50%)",
      matchedGlow: "hsl(39, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_328", {
      id: "palette_328",
      name: "Dynamic Theme #328",
      bgPrimary: "hsl(176, 40%, 10%)",
      bgSecondary: "hsl(176, 50%, 15%)",
      textMain: "hsl(176, 90%, 85%)",
      accentGlow: "hsl(296, 100%, 50%)",
      matchedGlow: "hsl(56, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_329", {
      id: "palette_329",
      name: "Dynamic Theme #329",
      bgPrimary: "hsl(193, 40%, 10%)",
      bgSecondary: "hsl(193, 50%, 15%)",
      textMain: "hsl(193, 90%, 85%)",
      accentGlow: "hsl(313, 100%, 50%)",
      matchedGlow: "hsl(73, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_330", {
      id: "palette_330",
      name: "Dynamic Theme #330",
      bgPrimary: "hsl(210, 40%, 10%)",
      bgSecondary: "hsl(210, 50%, 15%)",
      textMain: "hsl(210, 90%, 85%)",
      accentGlow: "hsl(330, 100%, 50%)",
      matchedGlow: "hsl(90, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_331", {
      id: "palette_331",
      name: "Dynamic Theme #331",
      bgPrimary: "hsl(227, 40%, 10%)",
      bgSecondary: "hsl(227, 50%, 15%)",
      textMain: "hsl(227, 90%, 85%)",
      accentGlow: "hsl(347, 100%, 50%)",
      matchedGlow: "hsl(107, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_332", {
      id: "palette_332",
      name: "Dynamic Theme #332",
      bgPrimary: "hsl(244, 40%, 10%)",
      bgSecondary: "hsl(244, 50%, 15%)",
      textMain: "hsl(244, 90%, 85%)",
      accentGlow: "hsl(4, 100%, 50%)",
      matchedGlow: "hsl(124, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_333", {
      id: "palette_333",
      name: "Dynamic Theme #333",
      bgPrimary: "hsl(261, 40%, 10%)",
      bgSecondary: "hsl(261, 50%, 15%)",
      textMain: "hsl(261, 90%, 85%)",
      accentGlow: "hsl(21, 100%, 50%)",
      matchedGlow: "hsl(141, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_334", {
      id: "palette_334",
      name: "Dynamic Theme #334",
      bgPrimary: "hsl(278, 40%, 10%)",
      bgSecondary: "hsl(278, 50%, 15%)",
      textMain: "hsl(278, 90%, 85%)",
      accentGlow: "hsl(38, 100%, 50%)",
      matchedGlow: "hsl(158, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_335", {
      id: "palette_335",
      name: "Dynamic Theme #335",
      bgPrimary: "hsl(295, 40%, 10%)",
      bgSecondary: "hsl(295, 50%, 15%)",
      textMain: "hsl(295, 90%, 85%)",
      accentGlow: "hsl(55, 100%, 50%)",
      matchedGlow: "hsl(175, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_336", {
      id: "palette_336",
      name: "Dynamic Theme #336",
      bgPrimary: "hsl(312, 40%, 10%)",
      bgSecondary: "hsl(312, 50%, 15%)",
      textMain: "hsl(312, 90%, 85%)",
      accentGlow: "hsl(72, 100%, 50%)",
      matchedGlow: "hsl(192, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_337", {
      id: "palette_337",
      name: "Dynamic Theme #337",
      bgPrimary: "hsl(329, 40%, 10%)",
      bgSecondary: "hsl(329, 50%, 15%)",
      textMain: "hsl(329, 90%, 85%)",
      accentGlow: "hsl(89, 100%, 50%)",
      matchedGlow: "hsl(209, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_338", {
      id: "palette_338",
      name: "Dynamic Theme #338",
      bgPrimary: "hsl(346, 40%, 10%)",
      bgSecondary: "hsl(346, 50%, 15%)",
      textMain: "hsl(346, 90%, 85%)",
      accentGlow: "hsl(106, 100%, 50%)",
      matchedGlow: "hsl(226, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_339", {
      id: "palette_339",
      name: "Dynamic Theme #339",
      bgPrimary: "hsl(3, 40%, 10%)",
      bgSecondary: "hsl(3, 50%, 15%)",
      textMain: "hsl(3, 90%, 85%)",
      accentGlow: "hsl(123, 100%, 50%)",
      matchedGlow: "hsl(243, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_340", {
      id: "palette_340",
      name: "Dynamic Theme #340",
      bgPrimary: "hsl(20, 40%, 10%)",
      bgSecondary: "hsl(20, 50%, 15%)",
      textMain: "hsl(20, 90%, 85%)",
      accentGlow: "hsl(140, 100%, 50%)",
      matchedGlow: "hsl(260, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_341", {
      id: "palette_341",
      name: "Dynamic Theme #341",
      bgPrimary: "hsl(37, 40%, 10%)",
      bgSecondary: "hsl(37, 50%, 15%)",
      textMain: "hsl(37, 90%, 85%)",
      accentGlow: "hsl(157, 100%, 50%)",
      matchedGlow: "hsl(277, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_342", {
      id: "palette_342",
      name: "Dynamic Theme #342",
      bgPrimary: "hsl(54, 40%, 10%)",
      bgSecondary: "hsl(54, 50%, 15%)",
      textMain: "hsl(54, 90%, 85%)",
      accentGlow: "hsl(174, 100%, 50%)",
      matchedGlow: "hsl(294, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_343", {
      id: "palette_343",
      name: "Dynamic Theme #343",
      bgPrimary: "hsl(71, 40%, 10%)",
      bgSecondary: "hsl(71, 50%, 15%)",
      textMain: "hsl(71, 90%, 85%)",
      accentGlow: "hsl(191, 100%, 50%)",
      matchedGlow: "hsl(311, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_344", {
      id: "palette_344",
      name: "Dynamic Theme #344",
      bgPrimary: "hsl(88, 40%, 10%)",
      bgSecondary: "hsl(88, 50%, 15%)",
      textMain: "hsl(88, 90%, 85%)",
      accentGlow: "hsl(208, 100%, 50%)",
      matchedGlow: "hsl(328, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_345", {
      id: "palette_345",
      name: "Dynamic Theme #345",
      bgPrimary: "hsl(105, 40%, 10%)",
      bgSecondary: "hsl(105, 50%, 15%)",
      textMain: "hsl(105, 90%, 85%)",
      accentGlow: "hsl(225, 100%, 50%)",
      matchedGlow: "hsl(345, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_346", {
      id: "palette_346",
      name: "Dynamic Theme #346",
      bgPrimary: "hsl(122, 40%, 10%)",
      bgSecondary: "hsl(122, 50%, 15%)",
      textMain: "hsl(122, 90%, 85%)",
      accentGlow: "hsl(242, 100%, 50%)",
      matchedGlow: "hsl(2, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_347", {
      id: "palette_347",
      name: "Dynamic Theme #347",
      bgPrimary: "hsl(139, 40%, 10%)",
      bgSecondary: "hsl(139, 50%, 15%)",
      textMain: "hsl(139, 90%, 85%)",
      accentGlow: "hsl(259, 100%, 50%)",
      matchedGlow: "hsl(19, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_348", {
      id: "palette_348",
      name: "Dynamic Theme #348",
      bgPrimary: "hsl(156, 40%, 10%)",
      bgSecondary: "hsl(156, 50%, 15%)",
      textMain: "hsl(156, 90%, 85%)",
      accentGlow: "hsl(276, 100%, 50%)",
      matchedGlow: "hsl(36, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_349", {
      id: "palette_349",
      name: "Dynamic Theme #349",
      bgPrimary: "hsl(173, 40%, 10%)",
      bgSecondary: "hsl(173, 50%, 15%)",
      textMain: "hsl(173, 90%, 85%)",
      accentGlow: "hsl(293, 100%, 50%)",
      matchedGlow: "hsl(53, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_350", {
      id: "palette_350",
      name: "Dynamic Theme #350",
      bgPrimary: "hsl(190, 40%, 10%)",
      bgSecondary: "hsl(190, 50%, 15%)",
      textMain: "hsl(190, 90%, 85%)",
      accentGlow: "hsl(310, 100%, 50%)",
      matchedGlow: "hsl(70, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_351", {
      id: "palette_351",
      name: "Dynamic Theme #351",
      bgPrimary: "hsl(207, 40%, 10%)",
      bgSecondary: "hsl(207, 50%, 15%)",
      textMain: "hsl(207, 90%, 85%)",
      accentGlow: "hsl(327, 100%, 50%)",
      matchedGlow: "hsl(87, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_352", {
      id: "palette_352",
      name: "Dynamic Theme #352",
      bgPrimary: "hsl(224, 40%, 10%)",
      bgSecondary: "hsl(224, 50%, 15%)",
      textMain: "hsl(224, 90%, 85%)",
      accentGlow: "hsl(344, 100%, 50%)",
      matchedGlow: "hsl(104, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_353", {
      id: "palette_353",
      name: "Dynamic Theme #353",
      bgPrimary: "hsl(241, 40%, 10%)",
      bgSecondary: "hsl(241, 50%, 15%)",
      textMain: "hsl(241, 90%, 85%)",
      accentGlow: "hsl(1, 100%, 50%)",
      matchedGlow: "hsl(121, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_354", {
      id: "palette_354",
      name: "Dynamic Theme #354",
      bgPrimary: "hsl(258, 40%, 10%)",
      bgSecondary: "hsl(258, 50%, 15%)",
      textMain: "hsl(258, 90%, 85%)",
      accentGlow: "hsl(18, 100%, 50%)",
      matchedGlow: "hsl(138, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_355", {
      id: "palette_355",
      name: "Dynamic Theme #355",
      bgPrimary: "hsl(275, 40%, 10%)",
      bgSecondary: "hsl(275, 50%, 15%)",
      textMain: "hsl(275, 90%, 85%)",
      accentGlow: "hsl(35, 100%, 50%)",
      matchedGlow: "hsl(155, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_356", {
      id: "palette_356",
      name: "Dynamic Theme #356",
      bgPrimary: "hsl(292, 40%, 10%)",
      bgSecondary: "hsl(292, 50%, 15%)",
      textMain: "hsl(292, 90%, 85%)",
      accentGlow: "hsl(52, 100%, 50%)",
      matchedGlow: "hsl(172, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_357", {
      id: "palette_357",
      name: "Dynamic Theme #357",
      bgPrimary: "hsl(309, 40%, 10%)",
      bgSecondary: "hsl(309, 50%, 15%)",
      textMain: "hsl(309, 90%, 85%)",
      accentGlow: "hsl(69, 100%, 50%)",
      matchedGlow: "hsl(189, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_358", {
      id: "palette_358",
      name: "Dynamic Theme #358",
      bgPrimary: "hsl(326, 40%, 10%)",
      bgSecondary: "hsl(326, 50%, 15%)",
      textMain: "hsl(326, 90%, 85%)",
      accentGlow: "hsl(86, 100%, 50%)",
      matchedGlow: "hsl(206, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_359", {
      id: "palette_359",
      name: "Dynamic Theme #359",
      bgPrimary: "hsl(343, 40%, 10%)",
      bgSecondary: "hsl(343, 50%, 15%)",
      textMain: "hsl(343, 90%, 85%)",
      accentGlow: "hsl(103, 100%, 50%)",
      matchedGlow: "hsl(223, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_360", {
      id: "palette_360",
      name: "Dynamic Theme #360",
      bgPrimary: "hsl(0, 40%, 10%)",
      bgSecondary: "hsl(0, 50%, 15%)",
      textMain: "hsl(0, 90%, 85%)",
      accentGlow: "hsl(120, 100%, 50%)",
      matchedGlow: "hsl(240, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_361", {
      id: "palette_361",
      name: "Dynamic Theme #361",
      bgPrimary: "hsl(17, 40%, 10%)",
      bgSecondary: "hsl(17, 50%, 15%)",
      textMain: "hsl(17, 90%, 85%)",
      accentGlow: "hsl(137, 100%, 50%)",
      matchedGlow: "hsl(257, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_362", {
      id: "palette_362",
      name: "Dynamic Theme #362",
      bgPrimary: "hsl(34, 40%, 10%)",
      bgSecondary: "hsl(34, 50%, 15%)",
      textMain: "hsl(34, 90%, 85%)",
      accentGlow: "hsl(154, 100%, 50%)",
      matchedGlow: "hsl(274, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_363", {
      id: "palette_363",
      name: "Dynamic Theme #363",
      bgPrimary: "hsl(51, 40%, 10%)",
      bgSecondary: "hsl(51, 50%, 15%)",
      textMain: "hsl(51, 90%, 85%)",
      accentGlow: "hsl(171, 100%, 50%)",
      matchedGlow: "hsl(291, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_364", {
      id: "palette_364",
      name: "Dynamic Theme #364",
      bgPrimary: "hsl(68, 40%, 10%)",
      bgSecondary: "hsl(68, 50%, 15%)",
      textMain: "hsl(68, 90%, 85%)",
      accentGlow: "hsl(188, 100%, 50%)",
      matchedGlow: "hsl(308, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_365", {
      id: "palette_365",
      name: "Dynamic Theme #365",
      bgPrimary: "hsl(85, 40%, 10%)",
      bgSecondary: "hsl(85, 50%, 15%)",
      textMain: "hsl(85, 90%, 85%)",
      accentGlow: "hsl(205, 100%, 50%)",
      matchedGlow: "hsl(325, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_366", {
      id: "palette_366",
      name: "Dynamic Theme #366",
      bgPrimary: "hsl(102, 40%, 10%)",
      bgSecondary: "hsl(102, 50%, 15%)",
      textMain: "hsl(102, 90%, 85%)",
      accentGlow: "hsl(222, 100%, 50%)",
      matchedGlow: "hsl(342, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_367", {
      id: "palette_367",
      name: "Dynamic Theme #367",
      bgPrimary: "hsl(119, 40%, 10%)",
      bgSecondary: "hsl(119, 50%, 15%)",
      textMain: "hsl(119, 90%, 85%)",
      accentGlow: "hsl(239, 100%, 50%)",
      matchedGlow: "hsl(359, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_368", {
      id: "palette_368",
      name: "Dynamic Theme #368",
      bgPrimary: "hsl(136, 40%, 10%)",
      bgSecondary: "hsl(136, 50%, 15%)",
      textMain: "hsl(136, 90%, 85%)",
      accentGlow: "hsl(256, 100%, 50%)",
      matchedGlow: "hsl(16, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_369", {
      id: "palette_369",
      name: "Dynamic Theme #369",
      bgPrimary: "hsl(153, 40%, 10%)",
      bgSecondary: "hsl(153, 50%, 15%)",
      textMain: "hsl(153, 90%, 85%)",
      accentGlow: "hsl(273, 100%, 50%)",
      matchedGlow: "hsl(33, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_370", {
      id: "palette_370",
      name: "Dynamic Theme #370",
      bgPrimary: "hsl(170, 40%, 10%)",
      bgSecondary: "hsl(170, 50%, 15%)",
      textMain: "hsl(170, 90%, 85%)",
      accentGlow: "hsl(290, 100%, 50%)",
      matchedGlow: "hsl(50, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_371", {
      id: "palette_371",
      name: "Dynamic Theme #371",
      bgPrimary: "hsl(187, 40%, 10%)",
      bgSecondary: "hsl(187, 50%, 15%)",
      textMain: "hsl(187, 90%, 85%)",
      accentGlow: "hsl(307, 100%, 50%)",
      matchedGlow: "hsl(67, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_372", {
      id: "palette_372",
      name: "Dynamic Theme #372",
      bgPrimary: "hsl(204, 40%, 10%)",
      bgSecondary: "hsl(204, 50%, 15%)",
      textMain: "hsl(204, 90%, 85%)",
      accentGlow: "hsl(324, 100%, 50%)",
      matchedGlow: "hsl(84, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_373", {
      id: "palette_373",
      name: "Dynamic Theme #373",
      bgPrimary: "hsl(221, 40%, 10%)",
      bgSecondary: "hsl(221, 50%, 15%)",
      textMain: "hsl(221, 90%, 85%)",
      accentGlow: "hsl(341, 100%, 50%)",
      matchedGlow: "hsl(101, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_374", {
      id: "palette_374",
      name: "Dynamic Theme #374",
      bgPrimary: "hsl(238, 40%, 10%)",
      bgSecondary: "hsl(238, 50%, 15%)",
      textMain: "hsl(238, 90%, 85%)",
      accentGlow: "hsl(358, 100%, 50%)",
      matchedGlow: "hsl(118, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_375", {
      id: "palette_375",
      name: "Dynamic Theme #375",
      bgPrimary: "hsl(255, 40%, 10%)",
      bgSecondary: "hsl(255, 50%, 15%)",
      textMain: "hsl(255, 90%, 85%)",
      accentGlow: "hsl(15, 100%, 50%)",
      matchedGlow: "hsl(135, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_376", {
      id: "palette_376",
      name: "Dynamic Theme #376",
      bgPrimary: "hsl(272, 40%, 10%)",
      bgSecondary: "hsl(272, 50%, 15%)",
      textMain: "hsl(272, 90%, 85%)",
      accentGlow: "hsl(32, 100%, 50%)",
      matchedGlow: "hsl(152, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_377", {
      id: "palette_377",
      name: "Dynamic Theme #377",
      bgPrimary: "hsl(289, 40%, 10%)",
      bgSecondary: "hsl(289, 50%, 15%)",
      textMain: "hsl(289, 90%, 85%)",
      accentGlow: "hsl(49, 100%, 50%)",
      matchedGlow: "hsl(169, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_378", {
      id: "palette_378",
      name: "Dynamic Theme #378",
      bgPrimary: "hsl(306, 40%, 10%)",
      bgSecondary: "hsl(306, 50%, 15%)",
      textMain: "hsl(306, 90%, 85%)",
      accentGlow: "hsl(66, 100%, 50%)",
      matchedGlow: "hsl(186, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_379", {
      id: "palette_379",
      name: "Dynamic Theme #379",
      bgPrimary: "hsl(323, 40%, 10%)",
      bgSecondary: "hsl(323, 50%, 15%)",
      textMain: "hsl(323, 90%, 85%)",
      accentGlow: "hsl(83, 100%, 50%)",
      matchedGlow: "hsl(203, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_380", {
      id: "palette_380",
      name: "Dynamic Theme #380",
      bgPrimary: "hsl(340, 40%, 10%)",
      bgSecondary: "hsl(340, 50%, 15%)",
      textMain: "hsl(340, 90%, 85%)",
      accentGlow: "hsl(100, 100%, 50%)",
      matchedGlow: "hsl(220, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_381", {
      id: "palette_381",
      name: "Dynamic Theme #381",
      bgPrimary: "hsl(357, 40%, 10%)",
      bgSecondary: "hsl(357, 50%, 15%)",
      textMain: "hsl(357, 90%, 85%)",
      accentGlow: "hsl(117, 100%, 50%)",
      matchedGlow: "hsl(237, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_382", {
      id: "palette_382",
      name: "Dynamic Theme #382",
      bgPrimary: "hsl(14, 40%, 10%)",
      bgSecondary: "hsl(14, 50%, 15%)",
      textMain: "hsl(14, 90%, 85%)",
      accentGlow: "hsl(134, 100%, 50%)",
      matchedGlow: "hsl(254, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_383", {
      id: "palette_383",
      name: "Dynamic Theme #383",
      bgPrimary: "hsl(31, 40%, 10%)",
      bgSecondary: "hsl(31, 50%, 15%)",
      textMain: "hsl(31, 90%, 85%)",
      accentGlow: "hsl(151, 100%, 50%)",
      matchedGlow: "hsl(271, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_384", {
      id: "palette_384",
      name: "Dynamic Theme #384",
      bgPrimary: "hsl(48, 40%, 10%)",
      bgSecondary: "hsl(48, 50%, 15%)",
      textMain: "hsl(48, 90%, 85%)",
      accentGlow: "hsl(168, 100%, 50%)",
      matchedGlow: "hsl(288, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_385", {
      id: "palette_385",
      name: "Dynamic Theme #385",
      bgPrimary: "hsl(65, 40%, 10%)",
      bgSecondary: "hsl(65, 50%, 15%)",
      textMain: "hsl(65, 90%, 85%)",
      accentGlow: "hsl(185, 100%, 50%)",
      matchedGlow: "hsl(305, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_386", {
      id: "palette_386",
      name: "Dynamic Theme #386",
      bgPrimary: "hsl(82, 40%, 10%)",
      bgSecondary: "hsl(82, 50%, 15%)",
      textMain: "hsl(82, 90%, 85%)",
      accentGlow: "hsl(202, 100%, 50%)",
      matchedGlow: "hsl(322, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_387", {
      id: "palette_387",
      name: "Dynamic Theme #387",
      bgPrimary: "hsl(99, 40%, 10%)",
      bgSecondary: "hsl(99, 50%, 15%)",
      textMain: "hsl(99, 90%, 85%)",
      accentGlow: "hsl(219, 100%, 50%)",
      matchedGlow: "hsl(339, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_388", {
      id: "palette_388",
      name: "Dynamic Theme #388",
      bgPrimary: "hsl(116, 40%, 10%)",
      bgSecondary: "hsl(116, 50%, 15%)",
      textMain: "hsl(116, 90%, 85%)",
      accentGlow: "hsl(236, 100%, 50%)",
      matchedGlow: "hsl(356, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_389", {
      id: "palette_389",
      name: "Dynamic Theme #389",
      bgPrimary: "hsl(133, 40%, 10%)",
      bgSecondary: "hsl(133, 50%, 15%)",
      textMain: "hsl(133, 90%, 85%)",
      accentGlow: "hsl(253, 100%, 50%)",
      matchedGlow: "hsl(13, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_390", {
      id: "palette_390",
      name: "Dynamic Theme #390",
      bgPrimary: "hsl(150, 40%, 10%)",
      bgSecondary: "hsl(150, 50%, 15%)",
      textMain: "hsl(150, 90%, 85%)",
      accentGlow: "hsl(270, 100%, 50%)",
      matchedGlow: "hsl(30, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_391", {
      id: "palette_391",
      name: "Dynamic Theme #391",
      bgPrimary: "hsl(167, 40%, 10%)",
      bgSecondary: "hsl(167, 50%, 15%)",
      textMain: "hsl(167, 90%, 85%)",
      accentGlow: "hsl(287, 100%, 50%)",
      matchedGlow: "hsl(47, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_392", {
      id: "palette_392",
      name: "Dynamic Theme #392",
      bgPrimary: "hsl(184, 40%, 10%)",
      bgSecondary: "hsl(184, 50%, 15%)",
      textMain: "hsl(184, 90%, 85%)",
      accentGlow: "hsl(304, 100%, 50%)",
      matchedGlow: "hsl(64, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_393", {
      id: "palette_393",
      name: "Dynamic Theme #393",
      bgPrimary: "hsl(201, 40%, 10%)",
      bgSecondary: "hsl(201, 50%, 15%)",
      textMain: "hsl(201, 90%, 85%)",
      accentGlow: "hsl(321, 100%, 50%)",
      matchedGlow: "hsl(81, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_394", {
      id: "palette_394",
      name: "Dynamic Theme #394",
      bgPrimary: "hsl(218, 40%, 10%)",
      bgSecondary: "hsl(218, 50%, 15%)",
      textMain: "hsl(218, 90%, 85%)",
      accentGlow: "hsl(338, 100%, 50%)",
      matchedGlow: "hsl(98, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_395", {
      id: "palette_395",
      name: "Dynamic Theme #395",
      bgPrimary: "hsl(235, 40%, 10%)",
      bgSecondary: "hsl(235, 50%, 15%)",
      textMain: "hsl(235, 90%, 85%)",
      accentGlow: "hsl(355, 100%, 50%)",
      matchedGlow: "hsl(115, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_396", {
      id: "palette_396",
      name: "Dynamic Theme #396",
      bgPrimary: "hsl(252, 40%, 10%)",
      bgSecondary: "hsl(252, 50%, 15%)",
      textMain: "hsl(252, 90%, 85%)",
      accentGlow: "hsl(12, 100%, 50%)",
      matchedGlow: "hsl(132, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_397", {
      id: "palette_397",
      name: "Dynamic Theme #397",
      bgPrimary: "hsl(269, 40%, 10%)",
      bgSecondary: "hsl(269, 50%, 15%)",
      textMain: "hsl(269, 90%, 85%)",
      accentGlow: "hsl(29, 100%, 50%)",
      matchedGlow: "hsl(149, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_398", {
      id: "palette_398",
      name: "Dynamic Theme #398",
      bgPrimary: "hsl(286, 40%, 10%)",
      bgSecondary: "hsl(286, 50%, 15%)",
      textMain: "hsl(286, 90%, 85%)",
      accentGlow: "hsl(46, 100%, 50%)",
      matchedGlow: "hsl(166, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_399", {
      id: "palette_399",
      name: "Dynamic Theme #399",
      bgPrimary: "hsl(303, 40%, 10%)",
      bgSecondary: "hsl(303, 50%, 15%)",
      textMain: "hsl(303, 90%, 85%)",
      accentGlow: "hsl(63, 100%, 50%)",
      matchedGlow: "hsl(183, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_400", {
      id: "palette_400",
      name: "Dynamic Theme #400",
      bgPrimary: "hsl(320, 40%, 10%)",
      bgSecondary: "hsl(320, 50%, 15%)",
      textMain: "hsl(320, 90%, 85%)",
      accentGlow: "hsl(80, 100%, 50%)",
      matchedGlow: "hsl(200, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_401", {
      id: "palette_401",
      name: "Dynamic Theme #401",
      bgPrimary: "hsl(337, 40%, 10%)",
      bgSecondary: "hsl(337, 50%, 15%)",
      textMain: "hsl(337, 90%, 85%)",
      accentGlow: "hsl(97, 100%, 50%)",
      matchedGlow: "hsl(217, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_402", {
      id: "palette_402",
      name: "Dynamic Theme #402",
      bgPrimary: "hsl(354, 40%, 10%)",
      bgSecondary: "hsl(354, 50%, 15%)",
      textMain: "hsl(354, 90%, 85%)",
      accentGlow: "hsl(114, 100%, 50%)",
      matchedGlow: "hsl(234, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_403", {
      id: "palette_403",
      name: "Dynamic Theme #403",
      bgPrimary: "hsl(11, 40%, 10%)",
      bgSecondary: "hsl(11, 50%, 15%)",
      textMain: "hsl(11, 90%, 85%)",
      accentGlow: "hsl(131, 100%, 50%)",
      matchedGlow: "hsl(251, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_404", {
      id: "palette_404",
      name: "Dynamic Theme #404",
      bgPrimary: "hsl(28, 40%, 10%)",
      bgSecondary: "hsl(28, 50%, 15%)",
      textMain: "hsl(28, 90%, 85%)",
      accentGlow: "hsl(148, 100%, 50%)",
      matchedGlow: "hsl(268, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_405", {
      id: "palette_405",
      name: "Dynamic Theme #405",
      bgPrimary: "hsl(45, 40%, 10%)",
      bgSecondary: "hsl(45, 50%, 15%)",
      textMain: "hsl(45, 90%, 85%)",
      accentGlow: "hsl(165, 100%, 50%)",
      matchedGlow: "hsl(285, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_406", {
      id: "palette_406",
      name: "Dynamic Theme #406",
      bgPrimary: "hsl(62, 40%, 10%)",
      bgSecondary: "hsl(62, 50%, 15%)",
      textMain: "hsl(62, 90%, 85%)",
      accentGlow: "hsl(182, 100%, 50%)",
      matchedGlow: "hsl(302, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_407", {
      id: "palette_407",
      name: "Dynamic Theme #407",
      bgPrimary: "hsl(79, 40%, 10%)",
      bgSecondary: "hsl(79, 50%, 15%)",
      textMain: "hsl(79, 90%, 85%)",
      accentGlow: "hsl(199, 100%, 50%)",
      matchedGlow: "hsl(319, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_408", {
      id: "palette_408",
      name: "Dynamic Theme #408",
      bgPrimary: "hsl(96, 40%, 10%)",
      bgSecondary: "hsl(96, 50%, 15%)",
      textMain: "hsl(96, 90%, 85%)",
      accentGlow: "hsl(216, 100%, 50%)",
      matchedGlow: "hsl(336, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_409", {
      id: "palette_409",
      name: "Dynamic Theme #409",
      bgPrimary: "hsl(113, 40%, 10%)",
      bgSecondary: "hsl(113, 50%, 15%)",
      textMain: "hsl(113, 90%, 85%)",
      accentGlow: "hsl(233, 100%, 50%)",
      matchedGlow: "hsl(353, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_410", {
      id: "palette_410",
      name: "Dynamic Theme #410",
      bgPrimary: "hsl(130, 40%, 10%)",
      bgSecondary: "hsl(130, 50%, 15%)",
      textMain: "hsl(130, 90%, 85%)",
      accentGlow: "hsl(250, 100%, 50%)",
      matchedGlow: "hsl(10, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_411", {
      id: "palette_411",
      name: "Dynamic Theme #411",
      bgPrimary: "hsl(147, 40%, 10%)",
      bgSecondary: "hsl(147, 50%, 15%)",
      textMain: "hsl(147, 90%, 85%)",
      accentGlow: "hsl(267, 100%, 50%)",
      matchedGlow: "hsl(27, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_412", {
      id: "palette_412",
      name: "Dynamic Theme #412",
      bgPrimary: "hsl(164, 40%, 10%)",
      bgSecondary: "hsl(164, 50%, 15%)",
      textMain: "hsl(164, 90%, 85%)",
      accentGlow: "hsl(284, 100%, 50%)",
      matchedGlow: "hsl(44, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_413", {
      id: "palette_413",
      name: "Dynamic Theme #413",
      bgPrimary: "hsl(181, 40%, 10%)",
      bgSecondary: "hsl(181, 50%, 15%)",
      textMain: "hsl(181, 90%, 85%)",
      accentGlow: "hsl(301, 100%, 50%)",
      matchedGlow: "hsl(61, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_414", {
      id: "palette_414",
      name: "Dynamic Theme #414",
      bgPrimary: "hsl(198, 40%, 10%)",
      bgSecondary: "hsl(198, 50%, 15%)",
      textMain: "hsl(198, 90%, 85%)",
      accentGlow: "hsl(318, 100%, 50%)",
      matchedGlow: "hsl(78, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_415", {
      id: "palette_415",
      name: "Dynamic Theme #415",
      bgPrimary: "hsl(215, 40%, 10%)",
      bgSecondary: "hsl(215, 50%, 15%)",
      textMain: "hsl(215, 90%, 85%)",
      accentGlow: "hsl(335, 100%, 50%)",
      matchedGlow: "hsl(95, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_416", {
      id: "palette_416",
      name: "Dynamic Theme #416",
      bgPrimary: "hsl(232, 40%, 10%)",
      bgSecondary: "hsl(232, 50%, 15%)",
      textMain: "hsl(232, 90%, 85%)",
      accentGlow: "hsl(352, 100%, 50%)",
      matchedGlow: "hsl(112, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_417", {
      id: "palette_417",
      name: "Dynamic Theme #417",
      bgPrimary: "hsl(249, 40%, 10%)",
      bgSecondary: "hsl(249, 50%, 15%)",
      textMain: "hsl(249, 90%, 85%)",
      accentGlow: "hsl(9, 100%, 50%)",
      matchedGlow: "hsl(129, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_418", {
      id: "palette_418",
      name: "Dynamic Theme #418",
      bgPrimary: "hsl(266, 40%, 10%)",
      bgSecondary: "hsl(266, 50%, 15%)",
      textMain: "hsl(266, 90%, 85%)",
      accentGlow: "hsl(26, 100%, 50%)",
      matchedGlow: "hsl(146, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_419", {
      id: "palette_419",
      name: "Dynamic Theme #419",
      bgPrimary: "hsl(283, 40%, 10%)",
      bgSecondary: "hsl(283, 50%, 15%)",
      textMain: "hsl(283, 90%, 85%)",
      accentGlow: "hsl(43, 100%, 50%)",
      matchedGlow: "hsl(163, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_420", {
      id: "palette_420",
      name: "Dynamic Theme #420",
      bgPrimary: "hsl(300, 40%, 10%)",
      bgSecondary: "hsl(300, 50%, 15%)",
      textMain: "hsl(300, 90%, 85%)",
      accentGlow: "hsl(60, 100%, 50%)",
      matchedGlow: "hsl(180, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_421", {
      id: "palette_421",
      name: "Dynamic Theme #421",
      bgPrimary: "hsl(317, 40%, 10%)",
      bgSecondary: "hsl(317, 50%, 15%)",
      textMain: "hsl(317, 90%, 85%)",
      accentGlow: "hsl(77, 100%, 50%)",
      matchedGlow: "hsl(197, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_422", {
      id: "palette_422",
      name: "Dynamic Theme #422",
      bgPrimary: "hsl(334, 40%, 10%)",
      bgSecondary: "hsl(334, 50%, 15%)",
      textMain: "hsl(334, 90%, 85%)",
      accentGlow: "hsl(94, 100%, 50%)",
      matchedGlow: "hsl(214, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_423", {
      id: "palette_423",
      name: "Dynamic Theme #423",
      bgPrimary: "hsl(351, 40%, 10%)",
      bgSecondary: "hsl(351, 50%, 15%)",
      textMain: "hsl(351, 90%, 85%)",
      accentGlow: "hsl(111, 100%, 50%)",
      matchedGlow: "hsl(231, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_424", {
      id: "palette_424",
      name: "Dynamic Theme #424",
      bgPrimary: "hsl(8, 40%, 10%)",
      bgSecondary: "hsl(8, 50%, 15%)",
      textMain: "hsl(8, 90%, 85%)",
      accentGlow: "hsl(128, 100%, 50%)",
      matchedGlow: "hsl(248, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_425", {
      id: "palette_425",
      name: "Dynamic Theme #425",
      bgPrimary: "hsl(25, 40%, 10%)",
      bgSecondary: "hsl(25, 50%, 15%)",
      textMain: "hsl(25, 90%, 85%)",
      accentGlow: "hsl(145, 100%, 50%)",
      matchedGlow: "hsl(265, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_426", {
      id: "palette_426",
      name: "Dynamic Theme #426",
      bgPrimary: "hsl(42, 40%, 10%)",
      bgSecondary: "hsl(42, 50%, 15%)",
      textMain: "hsl(42, 90%, 85%)",
      accentGlow: "hsl(162, 100%, 50%)",
      matchedGlow: "hsl(282, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_427", {
      id: "palette_427",
      name: "Dynamic Theme #427",
      bgPrimary: "hsl(59, 40%, 10%)",
      bgSecondary: "hsl(59, 50%, 15%)",
      textMain: "hsl(59, 90%, 85%)",
      accentGlow: "hsl(179, 100%, 50%)",
      matchedGlow: "hsl(299, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_428", {
      id: "palette_428",
      name: "Dynamic Theme #428",
      bgPrimary: "hsl(76, 40%, 10%)",
      bgSecondary: "hsl(76, 50%, 15%)",
      textMain: "hsl(76, 90%, 85%)",
      accentGlow: "hsl(196, 100%, 50%)",
      matchedGlow: "hsl(316, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_429", {
      id: "palette_429",
      name: "Dynamic Theme #429",
      bgPrimary: "hsl(93, 40%, 10%)",
      bgSecondary: "hsl(93, 50%, 15%)",
      textMain: "hsl(93, 90%, 85%)",
      accentGlow: "hsl(213, 100%, 50%)",
      matchedGlow: "hsl(333, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_430", {
      id: "palette_430",
      name: "Dynamic Theme #430",
      bgPrimary: "hsl(110, 40%, 10%)",
      bgSecondary: "hsl(110, 50%, 15%)",
      textMain: "hsl(110, 90%, 85%)",
      accentGlow: "hsl(230, 100%, 50%)",
      matchedGlow: "hsl(350, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_431", {
      id: "palette_431",
      name: "Dynamic Theme #431",
      bgPrimary: "hsl(127, 40%, 10%)",
      bgSecondary: "hsl(127, 50%, 15%)",
      textMain: "hsl(127, 90%, 85%)",
      accentGlow: "hsl(247, 100%, 50%)",
      matchedGlow: "hsl(7, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_432", {
      id: "palette_432",
      name: "Dynamic Theme #432",
      bgPrimary: "hsl(144, 40%, 10%)",
      bgSecondary: "hsl(144, 50%, 15%)",
      textMain: "hsl(144, 90%, 85%)",
      accentGlow: "hsl(264, 100%, 50%)",
      matchedGlow: "hsl(24, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_433", {
      id: "palette_433",
      name: "Dynamic Theme #433",
      bgPrimary: "hsl(161, 40%, 10%)",
      bgSecondary: "hsl(161, 50%, 15%)",
      textMain: "hsl(161, 90%, 85%)",
      accentGlow: "hsl(281, 100%, 50%)",
      matchedGlow: "hsl(41, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_434", {
      id: "palette_434",
      name: "Dynamic Theme #434",
      bgPrimary: "hsl(178, 40%, 10%)",
      bgSecondary: "hsl(178, 50%, 15%)",
      textMain: "hsl(178, 90%, 85%)",
      accentGlow: "hsl(298, 100%, 50%)",
      matchedGlow: "hsl(58, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_435", {
      id: "palette_435",
      name: "Dynamic Theme #435",
      bgPrimary: "hsl(195, 40%, 10%)",
      bgSecondary: "hsl(195, 50%, 15%)",
      textMain: "hsl(195, 90%, 85%)",
      accentGlow: "hsl(315, 100%, 50%)",
      matchedGlow: "hsl(75, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_436", {
      id: "palette_436",
      name: "Dynamic Theme #436",
      bgPrimary: "hsl(212, 40%, 10%)",
      bgSecondary: "hsl(212, 50%, 15%)",
      textMain: "hsl(212, 90%, 85%)",
      accentGlow: "hsl(332, 100%, 50%)",
      matchedGlow: "hsl(92, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_437", {
      id: "palette_437",
      name: "Dynamic Theme #437",
      bgPrimary: "hsl(229, 40%, 10%)",
      bgSecondary: "hsl(229, 50%, 15%)",
      textMain: "hsl(229, 90%, 85%)",
      accentGlow: "hsl(349, 100%, 50%)",
      matchedGlow: "hsl(109, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_438", {
      id: "palette_438",
      name: "Dynamic Theme #438",
      bgPrimary: "hsl(246, 40%, 10%)",
      bgSecondary: "hsl(246, 50%, 15%)",
      textMain: "hsl(246, 90%, 85%)",
      accentGlow: "hsl(6, 100%, 50%)",
      matchedGlow: "hsl(126, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_439", {
      id: "palette_439",
      name: "Dynamic Theme #439",
      bgPrimary: "hsl(263, 40%, 10%)",
      bgSecondary: "hsl(263, 50%, 15%)",
      textMain: "hsl(263, 90%, 85%)",
      accentGlow: "hsl(23, 100%, 50%)",
      matchedGlow: "hsl(143, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_440", {
      id: "palette_440",
      name: "Dynamic Theme #440",
      bgPrimary: "hsl(280, 40%, 10%)",
      bgSecondary: "hsl(280, 50%, 15%)",
      textMain: "hsl(280, 90%, 85%)",
      accentGlow: "hsl(40, 100%, 50%)",
      matchedGlow: "hsl(160, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_441", {
      id: "palette_441",
      name: "Dynamic Theme #441",
      bgPrimary: "hsl(297, 40%, 10%)",
      bgSecondary: "hsl(297, 50%, 15%)",
      textMain: "hsl(297, 90%, 85%)",
      accentGlow: "hsl(57, 100%, 50%)",
      matchedGlow: "hsl(177, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_442", {
      id: "palette_442",
      name: "Dynamic Theme #442",
      bgPrimary: "hsl(314, 40%, 10%)",
      bgSecondary: "hsl(314, 50%, 15%)",
      textMain: "hsl(314, 90%, 85%)",
      accentGlow: "hsl(74, 100%, 50%)",
      matchedGlow: "hsl(194, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_443", {
      id: "palette_443",
      name: "Dynamic Theme #443",
      bgPrimary: "hsl(331, 40%, 10%)",
      bgSecondary: "hsl(331, 50%, 15%)",
      textMain: "hsl(331, 90%, 85%)",
      accentGlow: "hsl(91, 100%, 50%)",
      matchedGlow: "hsl(211, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_444", {
      id: "palette_444",
      name: "Dynamic Theme #444",
      bgPrimary: "hsl(348, 40%, 10%)",
      bgSecondary: "hsl(348, 50%, 15%)",
      textMain: "hsl(348, 90%, 85%)",
      accentGlow: "hsl(108, 100%, 50%)",
      matchedGlow: "hsl(228, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_445", {
      id: "palette_445",
      name: "Dynamic Theme #445",
      bgPrimary: "hsl(5, 40%, 10%)",
      bgSecondary: "hsl(5, 50%, 15%)",
      textMain: "hsl(5, 90%, 85%)",
      accentGlow: "hsl(125, 100%, 50%)",
      matchedGlow: "hsl(245, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_446", {
      id: "palette_446",
      name: "Dynamic Theme #446",
      bgPrimary: "hsl(22, 40%, 10%)",
      bgSecondary: "hsl(22, 50%, 15%)",
      textMain: "hsl(22, 90%, 85%)",
      accentGlow: "hsl(142, 100%, 50%)",
      matchedGlow: "hsl(262, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_447", {
      id: "palette_447",
      name: "Dynamic Theme #447",
      bgPrimary: "hsl(39, 40%, 10%)",
      bgSecondary: "hsl(39, 50%, 15%)",
      textMain: "hsl(39, 90%, 85%)",
      accentGlow: "hsl(159, 100%, 50%)",
      matchedGlow: "hsl(279, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_448", {
      id: "palette_448",
      name: "Dynamic Theme #448",
      bgPrimary: "hsl(56, 40%, 10%)",
      bgSecondary: "hsl(56, 50%, 15%)",
      textMain: "hsl(56, 90%, 85%)",
      accentGlow: "hsl(176, 100%, 50%)",
      matchedGlow: "hsl(296, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_449", {
      id: "palette_449",
      name: "Dynamic Theme #449",
      bgPrimary: "hsl(73, 40%, 10%)",
      bgSecondary: "hsl(73, 50%, 15%)",
      textMain: "hsl(73, 90%, 85%)",
      accentGlow: "hsl(193, 100%, 50%)",
      matchedGlow: "hsl(313, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_450", {
      id: "palette_450",
      name: "Dynamic Theme #450",
      bgPrimary: "hsl(90, 40%, 10%)",
      bgSecondary: "hsl(90, 50%, 15%)",
      textMain: "hsl(90, 90%, 85%)",
      accentGlow: "hsl(210, 100%, 50%)",
      matchedGlow: "hsl(330, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_451", {
      id: "palette_451",
      name: "Dynamic Theme #451",
      bgPrimary: "hsl(107, 40%, 10%)",
      bgSecondary: "hsl(107, 50%, 15%)",
      textMain: "hsl(107, 90%, 85%)",
      accentGlow: "hsl(227, 100%, 50%)",
      matchedGlow: "hsl(347, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_452", {
      id: "palette_452",
      name: "Dynamic Theme #452",
      bgPrimary: "hsl(124, 40%, 10%)",
      bgSecondary: "hsl(124, 50%, 15%)",
      textMain: "hsl(124, 90%, 85%)",
      accentGlow: "hsl(244, 100%, 50%)",
      matchedGlow: "hsl(4, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_453", {
      id: "palette_453",
      name: "Dynamic Theme #453",
      bgPrimary: "hsl(141, 40%, 10%)",
      bgSecondary: "hsl(141, 50%, 15%)",
      textMain: "hsl(141, 90%, 85%)",
      accentGlow: "hsl(261, 100%, 50%)",
      matchedGlow: "hsl(21, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_454", {
      id: "palette_454",
      name: "Dynamic Theme #454",
      bgPrimary: "hsl(158, 40%, 10%)",
      bgSecondary: "hsl(158, 50%, 15%)",
      textMain: "hsl(158, 90%, 85%)",
      accentGlow: "hsl(278, 100%, 50%)",
      matchedGlow: "hsl(38, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_455", {
      id: "palette_455",
      name: "Dynamic Theme #455",
      bgPrimary: "hsl(175, 40%, 10%)",
      bgSecondary: "hsl(175, 50%, 15%)",
      textMain: "hsl(175, 90%, 85%)",
      accentGlow: "hsl(295, 100%, 50%)",
      matchedGlow: "hsl(55, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_456", {
      id: "palette_456",
      name: "Dynamic Theme #456",
      bgPrimary: "hsl(192, 40%, 10%)",
      bgSecondary: "hsl(192, 50%, 15%)",
      textMain: "hsl(192, 90%, 85%)",
      accentGlow: "hsl(312, 100%, 50%)",
      matchedGlow: "hsl(72, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_457", {
      id: "palette_457",
      name: "Dynamic Theme #457",
      bgPrimary: "hsl(209, 40%, 10%)",
      bgSecondary: "hsl(209, 50%, 15%)",
      textMain: "hsl(209, 90%, 85%)",
      accentGlow: "hsl(329, 100%, 50%)",
      matchedGlow: "hsl(89, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_458", {
      id: "palette_458",
      name: "Dynamic Theme #458",
      bgPrimary: "hsl(226, 40%, 10%)",
      bgSecondary: "hsl(226, 50%, 15%)",
      textMain: "hsl(226, 90%, 85%)",
      accentGlow: "hsl(346, 100%, 50%)",
      matchedGlow: "hsl(106, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_459", {
      id: "palette_459",
      name: "Dynamic Theme #459",
      bgPrimary: "hsl(243, 40%, 10%)",
      bgSecondary: "hsl(243, 50%, 15%)",
      textMain: "hsl(243, 90%, 85%)",
      accentGlow: "hsl(3, 100%, 50%)",
      matchedGlow: "hsl(123, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_460", {
      id: "palette_460",
      name: "Dynamic Theme #460",
      bgPrimary: "hsl(260, 40%, 10%)",
      bgSecondary: "hsl(260, 50%, 15%)",
      textMain: "hsl(260, 90%, 85%)",
      accentGlow: "hsl(20, 100%, 50%)",
      matchedGlow: "hsl(140, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_461", {
      id: "palette_461",
      name: "Dynamic Theme #461",
      bgPrimary: "hsl(277, 40%, 10%)",
      bgSecondary: "hsl(277, 50%, 15%)",
      textMain: "hsl(277, 90%, 85%)",
      accentGlow: "hsl(37, 100%, 50%)",
      matchedGlow: "hsl(157, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_462", {
      id: "palette_462",
      name: "Dynamic Theme #462",
      bgPrimary: "hsl(294, 40%, 10%)",
      bgSecondary: "hsl(294, 50%, 15%)",
      textMain: "hsl(294, 90%, 85%)",
      accentGlow: "hsl(54, 100%, 50%)",
      matchedGlow: "hsl(174, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_463", {
      id: "palette_463",
      name: "Dynamic Theme #463",
      bgPrimary: "hsl(311, 40%, 10%)",
      bgSecondary: "hsl(311, 50%, 15%)",
      textMain: "hsl(311, 90%, 85%)",
      accentGlow: "hsl(71, 100%, 50%)",
      matchedGlow: "hsl(191, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_464", {
      id: "palette_464",
      name: "Dynamic Theme #464",
      bgPrimary: "hsl(328, 40%, 10%)",
      bgSecondary: "hsl(328, 50%, 15%)",
      textMain: "hsl(328, 90%, 85%)",
      accentGlow: "hsl(88, 100%, 50%)",
      matchedGlow: "hsl(208, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_465", {
      id: "palette_465",
      name: "Dynamic Theme #465",
      bgPrimary: "hsl(345, 40%, 10%)",
      bgSecondary: "hsl(345, 50%, 15%)",
      textMain: "hsl(345, 90%, 85%)",
      accentGlow: "hsl(105, 100%, 50%)",
      matchedGlow: "hsl(225, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_466", {
      id: "palette_466",
      name: "Dynamic Theme #466",
      bgPrimary: "hsl(2, 40%, 10%)",
      bgSecondary: "hsl(2, 50%, 15%)",
      textMain: "hsl(2, 90%, 85%)",
      accentGlow: "hsl(122, 100%, 50%)",
      matchedGlow: "hsl(242, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_467", {
      id: "palette_467",
      name: "Dynamic Theme #467",
      bgPrimary: "hsl(19, 40%, 10%)",
      bgSecondary: "hsl(19, 50%, 15%)",
      textMain: "hsl(19, 90%, 85%)",
      accentGlow: "hsl(139, 100%, 50%)",
      matchedGlow: "hsl(259, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_468", {
      id: "palette_468",
      name: "Dynamic Theme #468",
      bgPrimary: "hsl(36, 40%, 10%)",
      bgSecondary: "hsl(36, 50%, 15%)",
      textMain: "hsl(36, 90%, 85%)",
      accentGlow: "hsl(156, 100%, 50%)",
      matchedGlow: "hsl(276, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_469", {
      id: "palette_469",
      name: "Dynamic Theme #469",
      bgPrimary: "hsl(53, 40%, 10%)",
      bgSecondary: "hsl(53, 50%, 15%)",
      textMain: "hsl(53, 90%, 85%)",
      accentGlow: "hsl(173, 100%, 50%)",
      matchedGlow: "hsl(293, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_470", {
      id: "palette_470",
      name: "Dynamic Theme #470",
      bgPrimary: "hsl(70, 40%, 10%)",
      bgSecondary: "hsl(70, 50%, 15%)",
      textMain: "hsl(70, 90%, 85%)",
      accentGlow: "hsl(190, 100%, 50%)",
      matchedGlow: "hsl(310, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_471", {
      id: "palette_471",
      name: "Dynamic Theme #471",
      bgPrimary: "hsl(87, 40%, 10%)",
      bgSecondary: "hsl(87, 50%, 15%)",
      textMain: "hsl(87, 90%, 85%)",
      accentGlow: "hsl(207, 100%, 50%)",
      matchedGlow: "hsl(327, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_472", {
      id: "palette_472",
      name: "Dynamic Theme #472",
      bgPrimary: "hsl(104, 40%, 10%)",
      bgSecondary: "hsl(104, 50%, 15%)",
      textMain: "hsl(104, 90%, 85%)",
      accentGlow: "hsl(224, 100%, 50%)",
      matchedGlow: "hsl(344, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_473", {
      id: "palette_473",
      name: "Dynamic Theme #473",
      bgPrimary: "hsl(121, 40%, 10%)",
      bgSecondary: "hsl(121, 50%, 15%)",
      textMain: "hsl(121, 90%, 85%)",
      accentGlow: "hsl(241, 100%, 50%)",
      matchedGlow: "hsl(1, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_474", {
      id: "palette_474",
      name: "Dynamic Theme #474",
      bgPrimary: "hsl(138, 40%, 10%)",
      bgSecondary: "hsl(138, 50%, 15%)",
      textMain: "hsl(138, 90%, 85%)",
      accentGlow: "hsl(258, 100%, 50%)",
      matchedGlow: "hsl(18, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_475", {
      id: "palette_475",
      name: "Dynamic Theme #475",
      bgPrimary: "hsl(155, 40%, 10%)",
      bgSecondary: "hsl(155, 50%, 15%)",
      textMain: "hsl(155, 90%, 85%)",
      accentGlow: "hsl(275, 100%, 50%)",
      matchedGlow: "hsl(35, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_476", {
      id: "palette_476",
      name: "Dynamic Theme #476",
      bgPrimary: "hsl(172, 40%, 10%)",
      bgSecondary: "hsl(172, 50%, 15%)",
      textMain: "hsl(172, 90%, 85%)",
      accentGlow: "hsl(292, 100%, 50%)",
      matchedGlow: "hsl(52, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_477", {
      id: "palette_477",
      name: "Dynamic Theme #477",
      bgPrimary: "hsl(189, 40%, 10%)",
      bgSecondary: "hsl(189, 50%, 15%)",
      textMain: "hsl(189, 90%, 85%)",
      accentGlow: "hsl(309, 100%, 50%)",
      matchedGlow: "hsl(69, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_478", {
      id: "palette_478",
      name: "Dynamic Theme #478",
      bgPrimary: "hsl(206, 40%, 10%)",
      bgSecondary: "hsl(206, 50%, 15%)",
      textMain: "hsl(206, 90%, 85%)",
      accentGlow: "hsl(326, 100%, 50%)",
      matchedGlow: "hsl(86, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_479", {
      id: "palette_479",
      name: "Dynamic Theme #479",
      bgPrimary: "hsl(223, 40%, 10%)",
      bgSecondary: "hsl(223, 50%, 15%)",
      textMain: "hsl(223, 90%, 85%)",
      accentGlow: "hsl(343, 100%, 50%)",
      matchedGlow: "hsl(103, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_480", {
      id: "palette_480",
      name: "Dynamic Theme #480",
      bgPrimary: "hsl(240, 40%, 10%)",
      bgSecondary: "hsl(240, 50%, 15%)",
      textMain: "hsl(240, 90%, 85%)",
      accentGlow: "hsl(0, 100%, 50%)",
      matchedGlow: "hsl(120, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_481", {
      id: "palette_481",
      name: "Dynamic Theme #481",
      bgPrimary: "hsl(257, 40%, 10%)",
      bgSecondary: "hsl(257, 50%, 15%)",
      textMain: "hsl(257, 90%, 85%)",
      accentGlow: "hsl(17, 100%, 50%)",
      matchedGlow: "hsl(137, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_482", {
      id: "palette_482",
      name: "Dynamic Theme #482",
      bgPrimary: "hsl(274, 40%, 10%)",
      bgSecondary: "hsl(274, 50%, 15%)",
      textMain: "hsl(274, 90%, 85%)",
      accentGlow: "hsl(34, 100%, 50%)",
      matchedGlow: "hsl(154, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_483", {
      id: "palette_483",
      name: "Dynamic Theme #483",
      bgPrimary: "hsl(291, 40%, 10%)",
      bgSecondary: "hsl(291, 50%, 15%)",
      textMain: "hsl(291, 90%, 85%)",
      accentGlow: "hsl(51, 100%, 50%)",
      matchedGlow: "hsl(171, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_484", {
      id: "palette_484",
      name: "Dynamic Theme #484",
      bgPrimary: "hsl(308, 40%, 10%)",
      bgSecondary: "hsl(308, 50%, 15%)",
      textMain: "hsl(308, 90%, 85%)",
      accentGlow: "hsl(68, 100%, 50%)",
      matchedGlow: "hsl(188, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_485", {
      id: "palette_485",
      name: "Dynamic Theme #485",
      bgPrimary: "hsl(325, 40%, 10%)",
      bgSecondary: "hsl(325, 50%, 15%)",
      textMain: "hsl(325, 90%, 85%)",
      accentGlow: "hsl(85, 100%, 50%)",
      matchedGlow: "hsl(205, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_486", {
      id: "palette_486",
      name: "Dynamic Theme #486",
      bgPrimary: "hsl(342, 40%, 10%)",
      bgSecondary: "hsl(342, 50%, 15%)",
      textMain: "hsl(342, 90%, 85%)",
      accentGlow: "hsl(102, 100%, 50%)",
      matchedGlow: "hsl(222, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_487", {
      id: "palette_487",
      name: "Dynamic Theme #487",
      bgPrimary: "hsl(359, 40%, 10%)",
      bgSecondary: "hsl(359, 50%, 15%)",
      textMain: "hsl(359, 90%, 85%)",
      accentGlow: "hsl(119, 100%, 50%)",
      matchedGlow: "hsl(239, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_488", {
      id: "palette_488",
      name: "Dynamic Theme #488",
      bgPrimary: "hsl(16, 40%, 10%)",
      bgSecondary: "hsl(16, 50%, 15%)",
      textMain: "hsl(16, 90%, 85%)",
      accentGlow: "hsl(136, 100%, 50%)",
      matchedGlow: "hsl(256, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_489", {
      id: "palette_489",
      name: "Dynamic Theme #489",
      bgPrimary: "hsl(33, 40%, 10%)",
      bgSecondary: "hsl(33, 50%, 15%)",
      textMain: "hsl(33, 90%, 85%)",
      accentGlow: "hsl(153, 100%, 50%)",
      matchedGlow: "hsl(273, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_490", {
      id: "palette_490",
      name: "Dynamic Theme #490",
      bgPrimary: "hsl(50, 40%, 10%)",
      bgSecondary: "hsl(50, 50%, 15%)",
      textMain: "hsl(50, 90%, 85%)",
      accentGlow: "hsl(170, 100%, 50%)",
      matchedGlow: "hsl(290, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_491", {
      id: "palette_491",
      name: "Dynamic Theme #491",
      bgPrimary: "hsl(67, 40%, 10%)",
      bgSecondary: "hsl(67, 50%, 15%)",
      textMain: "hsl(67, 90%, 85%)",
      accentGlow: "hsl(187, 100%, 50%)",
      matchedGlow: "hsl(307, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_492", {
      id: "palette_492",
      name: "Dynamic Theme #492",
      bgPrimary: "hsl(84, 40%, 10%)",
      bgSecondary: "hsl(84, 50%, 15%)",
      textMain: "hsl(84, 90%, 85%)",
      accentGlow: "hsl(204, 100%, 50%)",
      matchedGlow: "hsl(324, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_493", {
      id: "palette_493",
      name: "Dynamic Theme #493",
      bgPrimary: "hsl(101, 40%, 10%)",
      bgSecondary: "hsl(101, 50%, 15%)",
      textMain: "hsl(101, 90%, 85%)",
      accentGlow: "hsl(221, 100%, 50%)",
      matchedGlow: "hsl(341, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_494", {
      id: "palette_494",
      name: "Dynamic Theme #494",
      bgPrimary: "hsl(118, 40%, 10%)",
      bgSecondary: "hsl(118, 50%, 15%)",
      textMain: "hsl(118, 90%, 85%)",
      accentGlow: "hsl(238, 100%, 50%)",
      matchedGlow: "hsl(358, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_495", {
      id: "palette_495",
      name: "Dynamic Theme #495",
      bgPrimary: "hsl(135, 40%, 10%)",
      bgSecondary: "hsl(135, 50%, 15%)",
      textMain: "hsl(135, 90%, 85%)",
      accentGlow: "hsl(255, 100%, 50%)",
      matchedGlow: "hsl(15, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_496", {
      id: "palette_496",
      name: "Dynamic Theme #496",
      bgPrimary: "hsl(152, 40%, 10%)",
      bgSecondary: "hsl(152, 50%, 15%)",
      textMain: "hsl(152, 90%, 85%)",
      accentGlow: "hsl(272, 100%, 50%)",
      matchedGlow: "hsl(32, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_497", {
      id: "palette_497",
      name: "Dynamic Theme #497",
      bgPrimary: "hsl(169, 40%, 10%)",
      bgSecondary: "hsl(169, 50%, 15%)",
      textMain: "hsl(169, 90%, 85%)",
      accentGlow: "hsl(289, 100%, 50%)",
      matchedGlow: "hsl(49, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_498", {
      id: "palette_498",
      name: "Dynamic Theme #498",
      bgPrimary: "hsl(186, 40%, 10%)",
      bgSecondary: "hsl(186, 50%, 15%)",
      textMain: "hsl(186, 90%, 85%)",
      accentGlow: "hsl(306, 100%, 50%)",
      matchedGlow: "hsl(66, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_499", {
      id: "palette_499",
      name: "Dynamic Theme #499",
      bgPrimary: "hsl(203, 40%, 10%)",
      bgSecondary: "hsl(203, 50%, 15%)",
      textMain: "hsl(203, 90%, 85%)",
      accentGlow: "hsl(323, 100%, 50%)",
      matchedGlow: "hsl(83, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_500", {
      id: "palette_500",
      name: "Dynamic Theme #500",
      bgPrimary: "hsl(220, 40%, 10%)",
      bgSecondary: "hsl(220, 50%, 15%)",
      textMain: "hsl(220, 90%, 85%)",
      accentGlow: "hsl(340, 100%, 50%)",
      matchedGlow: "hsl(100, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_501", {
      id: "palette_501",
      name: "Dynamic Theme #501",
      bgPrimary: "hsl(237, 40%, 10%)",
      bgSecondary: "hsl(237, 50%, 15%)",
      textMain: "hsl(237, 90%, 85%)",
      accentGlow: "hsl(357, 100%, 50%)",
      matchedGlow: "hsl(117, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_502", {
      id: "palette_502",
      name: "Dynamic Theme #502",
      bgPrimary: "hsl(254, 40%, 10%)",
      bgSecondary: "hsl(254, 50%, 15%)",
      textMain: "hsl(254, 90%, 85%)",
      accentGlow: "hsl(14, 100%, 50%)",
      matchedGlow: "hsl(134, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_503", {
      id: "palette_503",
      name: "Dynamic Theme #503",
      bgPrimary: "hsl(271, 40%, 10%)",
      bgSecondary: "hsl(271, 50%, 15%)",
      textMain: "hsl(271, 90%, 85%)",
      accentGlow: "hsl(31, 100%, 50%)",
      matchedGlow: "hsl(151, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_504", {
      id: "palette_504",
      name: "Dynamic Theme #504",
      bgPrimary: "hsl(288, 40%, 10%)",
      bgSecondary: "hsl(288, 50%, 15%)",
      textMain: "hsl(288, 90%, 85%)",
      accentGlow: "hsl(48, 100%, 50%)",
      matchedGlow: "hsl(168, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_505", {
      id: "palette_505",
      name: "Dynamic Theme #505",
      bgPrimary: "hsl(305, 40%, 10%)",
      bgSecondary: "hsl(305, 50%, 15%)",
      textMain: "hsl(305, 90%, 85%)",
      accentGlow: "hsl(65, 100%, 50%)",
      matchedGlow: "hsl(185, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_506", {
      id: "palette_506",
      name: "Dynamic Theme #506",
      bgPrimary: "hsl(322, 40%, 10%)",
      bgSecondary: "hsl(322, 50%, 15%)",
      textMain: "hsl(322, 90%, 85%)",
      accentGlow: "hsl(82, 100%, 50%)",
      matchedGlow: "hsl(202, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_507", {
      id: "palette_507",
      name: "Dynamic Theme #507",
      bgPrimary: "hsl(339, 40%, 10%)",
      bgSecondary: "hsl(339, 50%, 15%)",
      textMain: "hsl(339, 90%, 85%)",
      accentGlow: "hsl(99, 100%, 50%)",
      matchedGlow: "hsl(219, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_508", {
      id: "palette_508",
      name: "Dynamic Theme #508",
      bgPrimary: "hsl(356, 40%, 10%)",
      bgSecondary: "hsl(356, 50%, 15%)",
      textMain: "hsl(356, 90%, 85%)",
      accentGlow: "hsl(116, 100%, 50%)",
      matchedGlow: "hsl(236, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_509", {
      id: "palette_509",
      name: "Dynamic Theme #509",
      bgPrimary: "hsl(13, 40%, 10%)",
      bgSecondary: "hsl(13, 50%, 15%)",
      textMain: "hsl(13, 90%, 85%)",
      accentGlow: "hsl(133, 100%, 50%)",
      matchedGlow: "hsl(253, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_510", {
      id: "palette_510",
      name: "Dynamic Theme #510",
      bgPrimary: "hsl(30, 40%, 10%)",
      bgSecondary: "hsl(30, 50%, 15%)",
      textMain: "hsl(30, 90%, 85%)",
      accentGlow: "hsl(150, 100%, 50%)",
      matchedGlow: "hsl(270, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_511", {
      id: "palette_511",
      name: "Dynamic Theme #511",
      bgPrimary: "hsl(47, 40%, 10%)",
      bgSecondary: "hsl(47, 50%, 15%)",
      textMain: "hsl(47, 90%, 85%)",
      accentGlow: "hsl(167, 100%, 50%)",
      matchedGlow: "hsl(287, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_512", {
      id: "palette_512",
      name: "Dynamic Theme #512",
      bgPrimary: "hsl(64, 40%, 10%)",
      bgSecondary: "hsl(64, 50%, 15%)",
      textMain: "hsl(64, 90%, 85%)",
      accentGlow: "hsl(184, 100%, 50%)",
      matchedGlow: "hsl(304, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_513", {
      id: "palette_513",
      name: "Dynamic Theme #513",
      bgPrimary: "hsl(81, 40%, 10%)",
      bgSecondary: "hsl(81, 50%, 15%)",
      textMain: "hsl(81, 90%, 85%)",
      accentGlow: "hsl(201, 100%, 50%)",
      matchedGlow: "hsl(321, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_514", {
      id: "palette_514",
      name: "Dynamic Theme #514",
      bgPrimary: "hsl(98, 40%, 10%)",
      bgSecondary: "hsl(98, 50%, 15%)",
      textMain: "hsl(98, 90%, 85%)",
      accentGlow: "hsl(218, 100%, 50%)",
      matchedGlow: "hsl(338, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_515", {
      id: "palette_515",
      name: "Dynamic Theme #515",
      bgPrimary: "hsl(115, 40%, 10%)",
      bgSecondary: "hsl(115, 50%, 15%)",
      textMain: "hsl(115, 90%, 85%)",
      accentGlow: "hsl(235, 100%, 50%)",
      matchedGlow: "hsl(355, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_516", {
      id: "palette_516",
      name: "Dynamic Theme #516",
      bgPrimary: "hsl(132, 40%, 10%)",
      bgSecondary: "hsl(132, 50%, 15%)",
      textMain: "hsl(132, 90%, 85%)",
      accentGlow: "hsl(252, 100%, 50%)",
      matchedGlow: "hsl(12, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_517", {
      id: "palette_517",
      name: "Dynamic Theme #517",
      bgPrimary: "hsl(149, 40%, 10%)",
      bgSecondary: "hsl(149, 50%, 15%)",
      textMain: "hsl(149, 90%, 85%)",
      accentGlow: "hsl(269, 100%, 50%)",
      matchedGlow: "hsl(29, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_518", {
      id: "palette_518",
      name: "Dynamic Theme #518",
      bgPrimary: "hsl(166, 40%, 10%)",
      bgSecondary: "hsl(166, 50%, 15%)",
      textMain: "hsl(166, 90%, 85%)",
      accentGlow: "hsl(286, 100%, 50%)",
      matchedGlow: "hsl(46, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_519", {
      id: "palette_519",
      name: "Dynamic Theme #519",
      bgPrimary: "hsl(183, 40%, 10%)",
      bgSecondary: "hsl(183, 50%, 15%)",
      textMain: "hsl(183, 90%, 85%)",
      accentGlow: "hsl(303, 100%, 50%)",
      matchedGlow: "hsl(63, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_520", {
      id: "palette_520",
      name: "Dynamic Theme #520",
      bgPrimary: "hsl(200, 40%, 10%)",
      bgSecondary: "hsl(200, 50%, 15%)",
      textMain: "hsl(200, 90%, 85%)",
      accentGlow: "hsl(320, 100%, 50%)",
      matchedGlow: "hsl(80, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_521", {
      id: "palette_521",
      name: "Dynamic Theme #521",
      bgPrimary: "hsl(217, 40%, 10%)",
      bgSecondary: "hsl(217, 50%, 15%)",
      textMain: "hsl(217, 90%, 85%)",
      accentGlow: "hsl(337, 100%, 50%)",
      matchedGlow: "hsl(97, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_522", {
      id: "palette_522",
      name: "Dynamic Theme #522",
      bgPrimary: "hsl(234, 40%, 10%)",
      bgSecondary: "hsl(234, 50%, 15%)",
      textMain: "hsl(234, 90%, 85%)",
      accentGlow: "hsl(354, 100%, 50%)",
      matchedGlow: "hsl(114, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_523", {
      id: "palette_523",
      name: "Dynamic Theme #523",
      bgPrimary: "hsl(251, 40%, 10%)",
      bgSecondary: "hsl(251, 50%, 15%)",
      textMain: "hsl(251, 90%, 85%)",
      accentGlow: "hsl(11, 100%, 50%)",
      matchedGlow: "hsl(131, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_524", {
      id: "palette_524",
      name: "Dynamic Theme #524",
      bgPrimary: "hsl(268, 40%, 10%)",
      bgSecondary: "hsl(268, 50%, 15%)",
      textMain: "hsl(268, 90%, 85%)",
      accentGlow: "hsl(28, 100%, 50%)",
      matchedGlow: "hsl(148, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_525", {
      id: "palette_525",
      name: "Dynamic Theme #525",
      bgPrimary: "hsl(285, 40%, 10%)",
      bgSecondary: "hsl(285, 50%, 15%)",
      textMain: "hsl(285, 90%, 85%)",
      accentGlow: "hsl(45, 100%, 50%)",
      matchedGlow: "hsl(165, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_526", {
      id: "palette_526",
      name: "Dynamic Theme #526",
      bgPrimary: "hsl(302, 40%, 10%)",
      bgSecondary: "hsl(302, 50%, 15%)",
      textMain: "hsl(302, 90%, 85%)",
      accentGlow: "hsl(62, 100%, 50%)",
      matchedGlow: "hsl(182, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_527", {
      id: "palette_527",
      name: "Dynamic Theme #527",
      bgPrimary: "hsl(319, 40%, 10%)",
      bgSecondary: "hsl(319, 50%, 15%)",
      textMain: "hsl(319, 90%, 85%)",
      accentGlow: "hsl(79, 100%, 50%)",
      matchedGlow: "hsl(199, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_528", {
      id: "palette_528",
      name: "Dynamic Theme #528",
      bgPrimary: "hsl(336, 40%, 10%)",
      bgSecondary: "hsl(336, 50%, 15%)",
      textMain: "hsl(336, 90%, 85%)",
      accentGlow: "hsl(96, 100%, 50%)",
      matchedGlow: "hsl(216, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_529", {
      id: "palette_529",
      name: "Dynamic Theme #529",
      bgPrimary: "hsl(353, 40%, 10%)",
      bgSecondary: "hsl(353, 50%, 15%)",
      textMain: "hsl(353, 90%, 85%)",
      accentGlow: "hsl(113, 100%, 50%)",
      matchedGlow: "hsl(233, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_530", {
      id: "palette_530",
      name: "Dynamic Theme #530",
      bgPrimary: "hsl(10, 40%, 10%)",
      bgSecondary: "hsl(10, 50%, 15%)",
      textMain: "hsl(10, 90%, 85%)",
      accentGlow: "hsl(130, 100%, 50%)",
      matchedGlow: "hsl(250, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_531", {
      id: "palette_531",
      name: "Dynamic Theme #531",
      bgPrimary: "hsl(27, 40%, 10%)",
      bgSecondary: "hsl(27, 50%, 15%)",
      textMain: "hsl(27, 90%, 85%)",
      accentGlow: "hsl(147, 100%, 50%)",
      matchedGlow: "hsl(267, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_532", {
      id: "palette_532",
      name: "Dynamic Theme #532",
      bgPrimary: "hsl(44, 40%, 10%)",
      bgSecondary: "hsl(44, 50%, 15%)",
      textMain: "hsl(44, 90%, 85%)",
      accentGlow: "hsl(164, 100%, 50%)",
      matchedGlow: "hsl(284, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_533", {
      id: "palette_533",
      name: "Dynamic Theme #533",
      bgPrimary: "hsl(61, 40%, 10%)",
      bgSecondary: "hsl(61, 50%, 15%)",
      textMain: "hsl(61, 90%, 85%)",
      accentGlow: "hsl(181, 100%, 50%)",
      matchedGlow: "hsl(301, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_534", {
      id: "palette_534",
      name: "Dynamic Theme #534",
      bgPrimary: "hsl(78, 40%, 10%)",
      bgSecondary: "hsl(78, 50%, 15%)",
      textMain: "hsl(78, 90%, 85%)",
      accentGlow: "hsl(198, 100%, 50%)",
      matchedGlow: "hsl(318, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_535", {
      id: "palette_535",
      name: "Dynamic Theme #535",
      bgPrimary: "hsl(95, 40%, 10%)",
      bgSecondary: "hsl(95, 50%, 15%)",
      textMain: "hsl(95, 90%, 85%)",
      accentGlow: "hsl(215, 100%, 50%)",
      matchedGlow: "hsl(335, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_536", {
      id: "palette_536",
      name: "Dynamic Theme #536",
      bgPrimary: "hsl(112, 40%, 10%)",
      bgSecondary: "hsl(112, 50%, 15%)",
      textMain: "hsl(112, 90%, 85%)",
      accentGlow: "hsl(232, 100%, 50%)",
      matchedGlow: "hsl(352, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_537", {
      id: "palette_537",
      name: "Dynamic Theme #537",
      bgPrimary: "hsl(129, 40%, 10%)",
      bgSecondary: "hsl(129, 50%, 15%)",
      textMain: "hsl(129, 90%, 85%)",
      accentGlow: "hsl(249, 100%, 50%)",
      matchedGlow: "hsl(9, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_538", {
      id: "palette_538",
      name: "Dynamic Theme #538",
      bgPrimary: "hsl(146, 40%, 10%)",
      bgSecondary: "hsl(146, 50%, 15%)",
      textMain: "hsl(146, 90%, 85%)",
      accentGlow: "hsl(266, 100%, 50%)",
      matchedGlow: "hsl(26, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_539", {
      id: "palette_539",
      name: "Dynamic Theme #539",
      bgPrimary: "hsl(163, 40%, 10%)",
      bgSecondary: "hsl(163, 50%, 15%)",
      textMain: "hsl(163, 90%, 85%)",
      accentGlow: "hsl(283, 100%, 50%)",
      matchedGlow: "hsl(43, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_540", {
      id: "palette_540",
      name: "Dynamic Theme #540",
      bgPrimary: "hsl(180, 40%, 10%)",
      bgSecondary: "hsl(180, 50%, 15%)",
      textMain: "hsl(180, 90%, 85%)",
      accentGlow: "hsl(300, 100%, 50%)",
      matchedGlow: "hsl(60, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_541", {
      id: "palette_541",
      name: "Dynamic Theme #541",
      bgPrimary: "hsl(197, 40%, 10%)",
      bgSecondary: "hsl(197, 50%, 15%)",
      textMain: "hsl(197, 90%, 85%)",
      accentGlow: "hsl(317, 100%, 50%)",
      matchedGlow: "hsl(77, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_542", {
      id: "palette_542",
      name: "Dynamic Theme #542",
      bgPrimary: "hsl(214, 40%, 10%)",
      bgSecondary: "hsl(214, 50%, 15%)",
      textMain: "hsl(214, 90%, 85%)",
      accentGlow: "hsl(334, 100%, 50%)",
      matchedGlow: "hsl(94, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_543", {
      id: "palette_543",
      name: "Dynamic Theme #543",
      bgPrimary: "hsl(231, 40%, 10%)",
      bgSecondary: "hsl(231, 50%, 15%)",
      textMain: "hsl(231, 90%, 85%)",
      accentGlow: "hsl(351, 100%, 50%)",
      matchedGlow: "hsl(111, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_544", {
      id: "palette_544",
      name: "Dynamic Theme #544",
      bgPrimary: "hsl(248, 40%, 10%)",
      bgSecondary: "hsl(248, 50%, 15%)",
      textMain: "hsl(248, 90%, 85%)",
      accentGlow: "hsl(8, 100%, 50%)",
      matchedGlow: "hsl(128, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_545", {
      id: "palette_545",
      name: "Dynamic Theme #545",
      bgPrimary: "hsl(265, 40%, 10%)",
      bgSecondary: "hsl(265, 50%, 15%)",
      textMain: "hsl(265, 90%, 85%)",
      accentGlow: "hsl(25, 100%, 50%)",
      matchedGlow: "hsl(145, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_546", {
      id: "palette_546",
      name: "Dynamic Theme #546",
      bgPrimary: "hsl(282, 40%, 10%)",
      bgSecondary: "hsl(282, 50%, 15%)",
      textMain: "hsl(282, 90%, 85%)",
      accentGlow: "hsl(42, 100%, 50%)",
      matchedGlow: "hsl(162, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_547", {
      id: "palette_547",
      name: "Dynamic Theme #547",
      bgPrimary: "hsl(299, 40%, 10%)",
      bgSecondary: "hsl(299, 50%, 15%)",
      textMain: "hsl(299, 90%, 85%)",
      accentGlow: "hsl(59, 100%, 50%)",
      matchedGlow: "hsl(179, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_548", {
      id: "palette_548",
      name: "Dynamic Theme #548",
      bgPrimary: "hsl(316, 40%, 10%)",
      bgSecondary: "hsl(316, 50%, 15%)",
      textMain: "hsl(316, 90%, 85%)",
      accentGlow: "hsl(76, 100%, 50%)",
      matchedGlow: "hsl(196, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_549", {
      id: "palette_549",
      name: "Dynamic Theme #549",
      bgPrimary: "hsl(333, 40%, 10%)",
      bgSecondary: "hsl(333, 50%, 15%)",
      textMain: "hsl(333, 90%, 85%)",
      accentGlow: "hsl(93, 100%, 50%)",
      matchedGlow: "hsl(213, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_550", {
      id: "palette_550",
      name: "Dynamic Theme #550",
      bgPrimary: "hsl(350, 40%, 10%)",
      bgSecondary: "hsl(350, 50%, 15%)",
      textMain: "hsl(350, 90%, 85%)",
      accentGlow: "hsl(110, 100%, 50%)",
      matchedGlow: "hsl(230, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_551", {
      id: "palette_551",
      name: "Dynamic Theme #551",
      bgPrimary: "hsl(7, 40%, 10%)",
      bgSecondary: "hsl(7, 50%, 15%)",
      textMain: "hsl(7, 90%, 85%)",
      accentGlow: "hsl(127, 100%, 50%)",
      matchedGlow: "hsl(247, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_552", {
      id: "palette_552",
      name: "Dynamic Theme #552",
      bgPrimary: "hsl(24, 40%, 10%)",
      bgSecondary: "hsl(24, 50%, 15%)",
      textMain: "hsl(24, 90%, 85%)",
      accentGlow: "hsl(144, 100%, 50%)",
      matchedGlow: "hsl(264, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_553", {
      id: "palette_553",
      name: "Dynamic Theme #553",
      bgPrimary: "hsl(41, 40%, 10%)",
      bgSecondary: "hsl(41, 50%, 15%)",
      textMain: "hsl(41, 90%, 85%)",
      accentGlow: "hsl(161, 100%, 50%)",
      matchedGlow: "hsl(281, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_554", {
      id: "palette_554",
      name: "Dynamic Theme #554",
      bgPrimary: "hsl(58, 40%, 10%)",
      bgSecondary: "hsl(58, 50%, 15%)",
      textMain: "hsl(58, 90%, 85%)",
      accentGlow: "hsl(178, 100%, 50%)",
      matchedGlow: "hsl(298, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_555", {
      id: "palette_555",
      name: "Dynamic Theme #555",
      bgPrimary: "hsl(75, 40%, 10%)",
      bgSecondary: "hsl(75, 50%, 15%)",
      textMain: "hsl(75, 90%, 85%)",
      accentGlow: "hsl(195, 100%, 50%)",
      matchedGlow: "hsl(315, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_556", {
      id: "palette_556",
      name: "Dynamic Theme #556",
      bgPrimary: "hsl(92, 40%, 10%)",
      bgSecondary: "hsl(92, 50%, 15%)",
      textMain: "hsl(92, 90%, 85%)",
      accentGlow: "hsl(212, 100%, 50%)",
      matchedGlow: "hsl(332, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_557", {
      id: "palette_557",
      name: "Dynamic Theme #557",
      bgPrimary: "hsl(109, 40%, 10%)",
      bgSecondary: "hsl(109, 50%, 15%)",
      textMain: "hsl(109, 90%, 85%)",
      accentGlow: "hsl(229, 100%, 50%)",
      matchedGlow: "hsl(349, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_558", {
      id: "palette_558",
      name: "Dynamic Theme #558",
      bgPrimary: "hsl(126, 40%, 10%)",
      bgSecondary: "hsl(126, 50%, 15%)",
      textMain: "hsl(126, 90%, 85%)",
      accentGlow: "hsl(246, 100%, 50%)",
      matchedGlow: "hsl(6, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_559", {
      id: "palette_559",
      name: "Dynamic Theme #559",
      bgPrimary: "hsl(143, 40%, 10%)",
      bgSecondary: "hsl(143, 50%, 15%)",
      textMain: "hsl(143, 90%, 85%)",
      accentGlow: "hsl(263, 100%, 50%)",
      matchedGlow: "hsl(23, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_560", {
      id: "palette_560",
      name: "Dynamic Theme #560",
      bgPrimary: "hsl(160, 40%, 10%)",
      bgSecondary: "hsl(160, 50%, 15%)",
      textMain: "hsl(160, 90%, 85%)",
      accentGlow: "hsl(280, 100%, 50%)",
      matchedGlow: "hsl(40, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_561", {
      id: "palette_561",
      name: "Dynamic Theme #561",
      bgPrimary: "hsl(177, 40%, 10%)",
      bgSecondary: "hsl(177, 50%, 15%)",
      textMain: "hsl(177, 90%, 85%)",
      accentGlow: "hsl(297, 100%, 50%)",
      matchedGlow: "hsl(57, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_562", {
      id: "palette_562",
      name: "Dynamic Theme #562",
      bgPrimary: "hsl(194, 40%, 10%)",
      bgSecondary: "hsl(194, 50%, 15%)",
      textMain: "hsl(194, 90%, 85%)",
      accentGlow: "hsl(314, 100%, 50%)",
      matchedGlow: "hsl(74, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_563", {
      id: "palette_563",
      name: "Dynamic Theme #563",
      bgPrimary: "hsl(211, 40%, 10%)",
      bgSecondary: "hsl(211, 50%, 15%)",
      textMain: "hsl(211, 90%, 85%)",
      accentGlow: "hsl(331, 100%, 50%)",
      matchedGlow: "hsl(91, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_564", {
      id: "palette_564",
      name: "Dynamic Theme #564",
      bgPrimary: "hsl(228, 40%, 10%)",
      bgSecondary: "hsl(228, 50%, 15%)",
      textMain: "hsl(228, 90%, 85%)",
      accentGlow: "hsl(348, 100%, 50%)",
      matchedGlow: "hsl(108, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_565", {
      id: "palette_565",
      name: "Dynamic Theme #565",
      bgPrimary: "hsl(245, 40%, 10%)",
      bgSecondary: "hsl(245, 50%, 15%)",
      textMain: "hsl(245, 90%, 85%)",
      accentGlow: "hsl(5, 100%, 50%)",
      matchedGlow: "hsl(125, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_566", {
      id: "palette_566",
      name: "Dynamic Theme #566",
      bgPrimary: "hsl(262, 40%, 10%)",
      bgSecondary: "hsl(262, 50%, 15%)",
      textMain: "hsl(262, 90%, 85%)",
      accentGlow: "hsl(22, 100%, 50%)",
      matchedGlow: "hsl(142, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_567", {
      id: "palette_567",
      name: "Dynamic Theme #567",
      bgPrimary: "hsl(279, 40%, 10%)",
      bgSecondary: "hsl(279, 50%, 15%)",
      textMain: "hsl(279, 90%, 85%)",
      accentGlow: "hsl(39, 100%, 50%)",
      matchedGlow: "hsl(159, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_568", {
      id: "palette_568",
      name: "Dynamic Theme #568",
      bgPrimary: "hsl(296, 40%, 10%)",
      bgSecondary: "hsl(296, 50%, 15%)",
      textMain: "hsl(296, 90%, 85%)",
      accentGlow: "hsl(56, 100%, 50%)",
      matchedGlow: "hsl(176, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_569", {
      id: "palette_569",
      name: "Dynamic Theme #569",
      bgPrimary: "hsl(313, 40%, 10%)",
      bgSecondary: "hsl(313, 50%, 15%)",
      textMain: "hsl(313, 90%, 85%)",
      accentGlow: "hsl(73, 100%, 50%)",
      matchedGlow: "hsl(193, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_570", {
      id: "palette_570",
      name: "Dynamic Theme #570",
      bgPrimary: "hsl(330, 40%, 10%)",
      bgSecondary: "hsl(330, 50%, 15%)",
      textMain: "hsl(330, 90%, 85%)",
      accentGlow: "hsl(90, 100%, 50%)",
      matchedGlow: "hsl(210, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_571", {
      id: "palette_571",
      name: "Dynamic Theme #571",
      bgPrimary: "hsl(347, 40%, 10%)",
      bgSecondary: "hsl(347, 50%, 15%)",
      textMain: "hsl(347, 90%, 85%)",
      accentGlow: "hsl(107, 100%, 50%)",
      matchedGlow: "hsl(227, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_572", {
      id: "palette_572",
      name: "Dynamic Theme #572",
      bgPrimary: "hsl(4, 40%, 10%)",
      bgSecondary: "hsl(4, 50%, 15%)",
      textMain: "hsl(4, 90%, 85%)",
      accentGlow: "hsl(124, 100%, 50%)",
      matchedGlow: "hsl(244, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_573", {
      id: "palette_573",
      name: "Dynamic Theme #573",
      bgPrimary: "hsl(21, 40%, 10%)",
      bgSecondary: "hsl(21, 50%, 15%)",
      textMain: "hsl(21, 90%, 85%)",
      accentGlow: "hsl(141, 100%, 50%)",
      matchedGlow: "hsl(261, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_574", {
      id: "palette_574",
      name: "Dynamic Theme #574",
      bgPrimary: "hsl(38, 40%, 10%)",
      bgSecondary: "hsl(38, 50%, 15%)",
      textMain: "hsl(38, 90%, 85%)",
      accentGlow: "hsl(158, 100%, 50%)",
      matchedGlow: "hsl(278, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_575", {
      id: "palette_575",
      name: "Dynamic Theme #575",
      bgPrimary: "hsl(55, 40%, 10%)",
      bgSecondary: "hsl(55, 50%, 15%)",
      textMain: "hsl(55, 90%, 85%)",
      accentGlow: "hsl(175, 100%, 50%)",
      matchedGlow: "hsl(295, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_576", {
      id: "palette_576",
      name: "Dynamic Theme #576",
      bgPrimary: "hsl(72, 40%, 10%)",
      bgSecondary: "hsl(72, 50%, 15%)",
      textMain: "hsl(72, 90%, 85%)",
      accentGlow: "hsl(192, 100%, 50%)",
      matchedGlow: "hsl(312, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_577", {
      id: "palette_577",
      name: "Dynamic Theme #577",
      bgPrimary: "hsl(89, 40%, 10%)",
      bgSecondary: "hsl(89, 50%, 15%)",
      textMain: "hsl(89, 90%, 85%)",
      accentGlow: "hsl(209, 100%, 50%)",
      matchedGlow: "hsl(329, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_578", {
      id: "palette_578",
      name: "Dynamic Theme #578",
      bgPrimary: "hsl(106, 40%, 10%)",
      bgSecondary: "hsl(106, 50%, 15%)",
      textMain: "hsl(106, 90%, 85%)",
      accentGlow: "hsl(226, 100%, 50%)",
      matchedGlow: "hsl(346, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_579", {
      id: "palette_579",
      name: "Dynamic Theme #579",
      bgPrimary: "hsl(123, 40%, 10%)",
      bgSecondary: "hsl(123, 50%, 15%)",
      textMain: "hsl(123, 90%, 85%)",
      accentGlow: "hsl(243, 100%, 50%)",
      matchedGlow: "hsl(3, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_580", {
      id: "palette_580",
      name: "Dynamic Theme #580",
      bgPrimary: "hsl(140, 40%, 10%)",
      bgSecondary: "hsl(140, 50%, 15%)",
      textMain: "hsl(140, 90%, 85%)",
      accentGlow: "hsl(260, 100%, 50%)",
      matchedGlow: "hsl(20, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_581", {
      id: "palette_581",
      name: "Dynamic Theme #581",
      bgPrimary: "hsl(157, 40%, 10%)",
      bgSecondary: "hsl(157, 50%, 15%)",
      textMain: "hsl(157, 90%, 85%)",
      accentGlow: "hsl(277, 100%, 50%)",
      matchedGlow: "hsl(37, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_582", {
      id: "palette_582",
      name: "Dynamic Theme #582",
      bgPrimary: "hsl(174, 40%, 10%)",
      bgSecondary: "hsl(174, 50%, 15%)",
      textMain: "hsl(174, 90%, 85%)",
      accentGlow: "hsl(294, 100%, 50%)",
      matchedGlow: "hsl(54, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_583", {
      id: "palette_583",
      name: "Dynamic Theme #583",
      bgPrimary: "hsl(191, 40%, 10%)",
      bgSecondary: "hsl(191, 50%, 15%)",
      textMain: "hsl(191, 90%, 85%)",
      accentGlow: "hsl(311, 100%, 50%)",
      matchedGlow: "hsl(71, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_584", {
      id: "palette_584",
      name: "Dynamic Theme #584",
      bgPrimary: "hsl(208, 40%, 10%)",
      bgSecondary: "hsl(208, 50%, 15%)",
      textMain: "hsl(208, 90%, 85%)",
      accentGlow: "hsl(328, 100%, 50%)",
      matchedGlow: "hsl(88, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_585", {
      id: "palette_585",
      name: "Dynamic Theme #585",
      bgPrimary: "hsl(225, 40%, 10%)",
      bgSecondary: "hsl(225, 50%, 15%)",
      textMain: "hsl(225, 90%, 85%)",
      accentGlow: "hsl(345, 100%, 50%)",
      matchedGlow: "hsl(105, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_586", {
      id: "palette_586",
      name: "Dynamic Theme #586",
      bgPrimary: "hsl(242, 40%, 10%)",
      bgSecondary: "hsl(242, 50%, 15%)",
      textMain: "hsl(242, 90%, 85%)",
      accentGlow: "hsl(2, 100%, 50%)",
      matchedGlow: "hsl(122, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_587", {
      id: "palette_587",
      name: "Dynamic Theme #587",
      bgPrimary: "hsl(259, 40%, 10%)",
      bgSecondary: "hsl(259, 50%, 15%)",
      textMain: "hsl(259, 90%, 85%)",
      accentGlow: "hsl(19, 100%, 50%)",
      matchedGlow: "hsl(139, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_588", {
      id: "palette_588",
      name: "Dynamic Theme #588",
      bgPrimary: "hsl(276, 40%, 10%)",
      bgSecondary: "hsl(276, 50%, 15%)",
      textMain: "hsl(276, 90%, 85%)",
      accentGlow: "hsl(36, 100%, 50%)",
      matchedGlow: "hsl(156, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_589", {
      id: "palette_589",
      name: "Dynamic Theme #589",
      bgPrimary: "hsl(293, 40%, 10%)",
      bgSecondary: "hsl(293, 50%, 15%)",
      textMain: "hsl(293, 90%, 85%)",
      accentGlow: "hsl(53, 100%, 50%)",
      matchedGlow: "hsl(173, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_590", {
      id: "palette_590",
      name: "Dynamic Theme #590",
      bgPrimary: "hsl(310, 40%, 10%)",
      bgSecondary: "hsl(310, 50%, 15%)",
      textMain: "hsl(310, 90%, 85%)",
      accentGlow: "hsl(70, 100%, 50%)",
      matchedGlow: "hsl(190, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_591", {
      id: "palette_591",
      name: "Dynamic Theme #591",
      bgPrimary: "hsl(327, 40%, 10%)",
      bgSecondary: "hsl(327, 50%, 15%)",
      textMain: "hsl(327, 90%, 85%)",
      accentGlow: "hsl(87, 100%, 50%)",
      matchedGlow: "hsl(207, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_592", {
      id: "palette_592",
      name: "Dynamic Theme #592",
      bgPrimary: "hsl(344, 40%, 10%)",
      bgSecondary: "hsl(344, 50%, 15%)",
      textMain: "hsl(344, 90%, 85%)",
      accentGlow: "hsl(104, 100%, 50%)",
      matchedGlow: "hsl(224, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_593", {
      id: "palette_593",
      name: "Dynamic Theme #593",
      bgPrimary: "hsl(1, 40%, 10%)",
      bgSecondary: "hsl(1, 50%, 15%)",
      textMain: "hsl(1, 90%, 85%)",
      accentGlow: "hsl(121, 100%, 50%)",
      matchedGlow: "hsl(241, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_594", {
      id: "palette_594",
      name: "Dynamic Theme #594",
      bgPrimary: "hsl(18, 40%, 10%)",
      bgSecondary: "hsl(18, 50%, 15%)",
      textMain: "hsl(18, 90%, 85%)",
      accentGlow: "hsl(138, 100%, 50%)",
      matchedGlow: "hsl(258, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_595", {
      id: "palette_595",
      name: "Dynamic Theme #595",
      bgPrimary: "hsl(35, 40%, 10%)",
      bgSecondary: "hsl(35, 50%, 15%)",
      textMain: "hsl(35, 90%, 85%)",
      accentGlow: "hsl(155, 100%, 50%)",
      matchedGlow: "hsl(275, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_596", {
      id: "palette_596",
      name: "Dynamic Theme #596",
      bgPrimary: "hsl(52, 40%, 10%)",
      bgSecondary: "hsl(52, 50%, 15%)",
      textMain: "hsl(52, 90%, 85%)",
      accentGlow: "hsl(172, 100%, 50%)",
      matchedGlow: "hsl(292, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_597", {
      id: "palette_597",
      name: "Dynamic Theme #597",
      bgPrimary: "hsl(69, 40%, 10%)",
      bgSecondary: "hsl(69, 50%, 15%)",
      textMain: "hsl(69, 90%, 85%)",
      accentGlow: "hsl(189, 100%, 50%)",
      matchedGlow: "hsl(309, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_598", {
      id: "palette_598",
      name: "Dynamic Theme #598",
      bgPrimary: "hsl(86, 40%, 10%)",
      bgSecondary: "hsl(86, 50%, 15%)",
      textMain: "hsl(86, 90%, 85%)",
      accentGlow: "hsl(206, 100%, 50%)",
      matchedGlow: "hsl(326, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_599", {
      id: "palette_599",
      name: "Dynamic Theme #599",
      bgPrimary: "hsl(103, 40%, 10%)",
      bgSecondary: "hsl(103, 50%, 15%)",
      textMain: "hsl(103, 90%, 85%)",
      accentGlow: "hsl(223, 100%, 50%)",
      matchedGlow: "hsl(343, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_600", {
      id: "palette_600",
      name: "Dynamic Theme #600",
      bgPrimary: "hsl(120, 40%, 10%)",
      bgSecondary: "hsl(120, 50%, 15%)",
      textMain: "hsl(120, 90%, 85%)",
      accentGlow: "hsl(240, 100%, 50%)",
      matchedGlow: "hsl(0, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_601", {
      id: "palette_601",
      name: "Dynamic Theme #601",
      bgPrimary: "hsl(137, 40%, 10%)",
      bgSecondary: "hsl(137, 50%, 15%)",
      textMain: "hsl(137, 90%, 85%)",
      accentGlow: "hsl(257, 100%, 50%)",
      matchedGlow: "hsl(17, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_602", {
      id: "palette_602",
      name: "Dynamic Theme #602",
      bgPrimary: "hsl(154, 40%, 10%)",
      bgSecondary: "hsl(154, 50%, 15%)",
      textMain: "hsl(154, 90%, 85%)",
      accentGlow: "hsl(274, 100%, 50%)",
      matchedGlow: "hsl(34, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_603", {
      id: "palette_603",
      name: "Dynamic Theme #603",
      bgPrimary: "hsl(171, 40%, 10%)",
      bgSecondary: "hsl(171, 50%, 15%)",
      textMain: "hsl(171, 90%, 85%)",
      accentGlow: "hsl(291, 100%, 50%)",
      matchedGlow: "hsl(51, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_604", {
      id: "palette_604",
      name: "Dynamic Theme #604",
      bgPrimary: "hsl(188, 40%, 10%)",
      bgSecondary: "hsl(188, 50%, 15%)",
      textMain: "hsl(188, 90%, 85%)",
      accentGlow: "hsl(308, 100%, 50%)",
      matchedGlow: "hsl(68, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_605", {
      id: "palette_605",
      name: "Dynamic Theme #605",
      bgPrimary: "hsl(205, 40%, 10%)",
      bgSecondary: "hsl(205, 50%, 15%)",
      textMain: "hsl(205, 90%, 85%)",
      accentGlow: "hsl(325, 100%, 50%)",
      matchedGlow: "hsl(85, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_606", {
      id: "palette_606",
      name: "Dynamic Theme #606",
      bgPrimary: "hsl(222, 40%, 10%)",
      bgSecondary: "hsl(222, 50%, 15%)",
      textMain: "hsl(222, 90%, 85%)",
      accentGlow: "hsl(342, 100%, 50%)",
      matchedGlow: "hsl(102, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_607", {
      id: "palette_607",
      name: "Dynamic Theme #607",
      bgPrimary: "hsl(239, 40%, 10%)",
      bgSecondary: "hsl(239, 50%, 15%)",
      textMain: "hsl(239, 90%, 85%)",
      accentGlow: "hsl(359, 100%, 50%)",
      matchedGlow: "hsl(119, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_608", {
      id: "palette_608",
      name: "Dynamic Theme #608",
      bgPrimary: "hsl(256, 40%, 10%)",
      bgSecondary: "hsl(256, 50%, 15%)",
      textMain: "hsl(256, 90%, 85%)",
      accentGlow: "hsl(16, 100%, 50%)",
      matchedGlow: "hsl(136, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_609", {
      id: "palette_609",
      name: "Dynamic Theme #609",
      bgPrimary: "hsl(273, 40%, 10%)",
      bgSecondary: "hsl(273, 50%, 15%)",
      textMain: "hsl(273, 90%, 85%)",
      accentGlow: "hsl(33, 100%, 50%)",
      matchedGlow: "hsl(153, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_610", {
      id: "palette_610",
      name: "Dynamic Theme #610",
      bgPrimary: "hsl(290, 40%, 10%)",
      bgSecondary: "hsl(290, 50%, 15%)",
      textMain: "hsl(290, 90%, 85%)",
      accentGlow: "hsl(50, 100%, 50%)",
      matchedGlow: "hsl(170, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_611", {
      id: "palette_611",
      name: "Dynamic Theme #611",
      bgPrimary: "hsl(307, 40%, 10%)",
      bgSecondary: "hsl(307, 50%, 15%)",
      textMain: "hsl(307, 90%, 85%)",
      accentGlow: "hsl(67, 100%, 50%)",
      matchedGlow: "hsl(187, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_612", {
      id: "palette_612",
      name: "Dynamic Theme #612",
      bgPrimary: "hsl(324, 40%, 10%)",
      bgSecondary: "hsl(324, 50%, 15%)",
      textMain: "hsl(324, 90%, 85%)",
      accentGlow: "hsl(84, 100%, 50%)",
      matchedGlow: "hsl(204, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_613", {
      id: "palette_613",
      name: "Dynamic Theme #613",
      bgPrimary: "hsl(341, 40%, 10%)",
      bgSecondary: "hsl(341, 50%, 15%)",
      textMain: "hsl(341, 90%, 85%)",
      accentGlow: "hsl(101, 100%, 50%)",
      matchedGlow: "hsl(221, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_614", {
      id: "palette_614",
      name: "Dynamic Theme #614",
      bgPrimary: "hsl(358, 40%, 10%)",
      bgSecondary: "hsl(358, 50%, 15%)",
      textMain: "hsl(358, 90%, 85%)",
      accentGlow: "hsl(118, 100%, 50%)",
      matchedGlow: "hsl(238, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_615", {
      id: "palette_615",
      name: "Dynamic Theme #615",
      bgPrimary: "hsl(15, 40%, 10%)",
      bgSecondary: "hsl(15, 50%, 15%)",
      textMain: "hsl(15, 90%, 85%)",
      accentGlow: "hsl(135, 100%, 50%)",
      matchedGlow: "hsl(255, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_616", {
      id: "palette_616",
      name: "Dynamic Theme #616",
      bgPrimary: "hsl(32, 40%, 10%)",
      bgSecondary: "hsl(32, 50%, 15%)",
      textMain: "hsl(32, 90%, 85%)",
      accentGlow: "hsl(152, 100%, 50%)",
      matchedGlow: "hsl(272, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_617", {
      id: "palette_617",
      name: "Dynamic Theme #617",
      bgPrimary: "hsl(49, 40%, 10%)",
      bgSecondary: "hsl(49, 50%, 15%)",
      textMain: "hsl(49, 90%, 85%)",
      accentGlow: "hsl(169, 100%, 50%)",
      matchedGlow: "hsl(289, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_618", {
      id: "palette_618",
      name: "Dynamic Theme #618",
      bgPrimary: "hsl(66, 40%, 10%)",
      bgSecondary: "hsl(66, 50%, 15%)",
      textMain: "hsl(66, 90%, 85%)",
      accentGlow: "hsl(186, 100%, 50%)",
      matchedGlow: "hsl(306, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_619", {
      id: "palette_619",
      name: "Dynamic Theme #619",
      bgPrimary: "hsl(83, 40%, 10%)",
      bgSecondary: "hsl(83, 50%, 15%)",
      textMain: "hsl(83, 90%, 85%)",
      accentGlow: "hsl(203, 100%, 50%)",
      matchedGlow: "hsl(323, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_620", {
      id: "palette_620",
      name: "Dynamic Theme #620",
      bgPrimary: "hsl(100, 40%, 10%)",
      bgSecondary: "hsl(100, 50%, 15%)",
      textMain: "hsl(100, 90%, 85%)",
      accentGlow: "hsl(220, 100%, 50%)",
      matchedGlow: "hsl(340, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_621", {
      id: "palette_621",
      name: "Dynamic Theme #621",
      bgPrimary: "hsl(117, 40%, 10%)",
      bgSecondary: "hsl(117, 50%, 15%)",
      textMain: "hsl(117, 90%, 85%)",
      accentGlow: "hsl(237, 100%, 50%)",
      matchedGlow: "hsl(357, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_622", {
      id: "palette_622",
      name: "Dynamic Theme #622",
      bgPrimary: "hsl(134, 40%, 10%)",
      bgSecondary: "hsl(134, 50%, 15%)",
      textMain: "hsl(134, 90%, 85%)",
      accentGlow: "hsl(254, 100%, 50%)",
      matchedGlow: "hsl(14, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_623", {
      id: "palette_623",
      name: "Dynamic Theme #623",
      bgPrimary: "hsl(151, 40%, 10%)",
      bgSecondary: "hsl(151, 50%, 15%)",
      textMain: "hsl(151, 90%, 85%)",
      accentGlow: "hsl(271, 100%, 50%)",
      matchedGlow: "hsl(31, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_624", {
      id: "palette_624",
      name: "Dynamic Theme #624",
      bgPrimary: "hsl(168, 40%, 10%)",
      bgSecondary: "hsl(168, 50%, 15%)",
      textMain: "hsl(168, 90%, 85%)",
      accentGlow: "hsl(288, 100%, 50%)",
      matchedGlow: "hsl(48, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_625", {
      id: "palette_625",
      name: "Dynamic Theme #625",
      bgPrimary: "hsl(185, 40%, 10%)",
      bgSecondary: "hsl(185, 50%, 15%)",
      textMain: "hsl(185, 90%, 85%)",
      accentGlow: "hsl(305, 100%, 50%)",
      matchedGlow: "hsl(65, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_626", {
      id: "palette_626",
      name: "Dynamic Theme #626",
      bgPrimary: "hsl(202, 40%, 10%)",
      bgSecondary: "hsl(202, 50%, 15%)",
      textMain: "hsl(202, 90%, 85%)",
      accentGlow: "hsl(322, 100%, 50%)",
      matchedGlow: "hsl(82, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_627", {
      id: "palette_627",
      name: "Dynamic Theme #627",
      bgPrimary: "hsl(219, 40%, 10%)",
      bgSecondary: "hsl(219, 50%, 15%)",
      textMain: "hsl(219, 90%, 85%)",
      accentGlow: "hsl(339, 100%, 50%)",
      matchedGlow: "hsl(99, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_628", {
      id: "palette_628",
      name: "Dynamic Theme #628",
      bgPrimary: "hsl(236, 40%, 10%)",
      bgSecondary: "hsl(236, 50%, 15%)",
      textMain: "hsl(236, 90%, 85%)",
      accentGlow: "hsl(356, 100%, 50%)",
      matchedGlow: "hsl(116, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_629", {
      id: "palette_629",
      name: "Dynamic Theme #629",
      bgPrimary: "hsl(253, 40%, 10%)",
      bgSecondary: "hsl(253, 50%, 15%)",
      textMain: "hsl(253, 90%, 85%)",
      accentGlow: "hsl(13, 100%, 50%)",
      matchedGlow: "hsl(133, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_630", {
      id: "palette_630",
      name: "Dynamic Theme #630",
      bgPrimary: "hsl(270, 40%, 10%)",
      bgSecondary: "hsl(270, 50%, 15%)",
      textMain: "hsl(270, 90%, 85%)",
      accentGlow: "hsl(30, 100%, 50%)",
      matchedGlow: "hsl(150, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_631", {
      id: "palette_631",
      name: "Dynamic Theme #631",
      bgPrimary: "hsl(287, 40%, 10%)",
      bgSecondary: "hsl(287, 50%, 15%)",
      textMain: "hsl(287, 90%, 85%)",
      accentGlow: "hsl(47, 100%, 50%)",
      matchedGlow: "hsl(167, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_632", {
      id: "palette_632",
      name: "Dynamic Theme #632",
      bgPrimary: "hsl(304, 40%, 10%)",
      bgSecondary: "hsl(304, 50%, 15%)",
      textMain: "hsl(304, 90%, 85%)",
      accentGlow: "hsl(64, 100%, 50%)",
      matchedGlow: "hsl(184, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_633", {
      id: "palette_633",
      name: "Dynamic Theme #633",
      bgPrimary: "hsl(321, 40%, 10%)",
      bgSecondary: "hsl(321, 50%, 15%)",
      textMain: "hsl(321, 90%, 85%)",
      accentGlow: "hsl(81, 100%, 50%)",
      matchedGlow: "hsl(201, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_634", {
      id: "palette_634",
      name: "Dynamic Theme #634",
      bgPrimary: "hsl(338, 40%, 10%)",
      bgSecondary: "hsl(338, 50%, 15%)",
      textMain: "hsl(338, 90%, 85%)",
      accentGlow: "hsl(98, 100%, 50%)",
      matchedGlow: "hsl(218, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_635", {
      id: "palette_635",
      name: "Dynamic Theme #635",
      bgPrimary: "hsl(355, 40%, 10%)",
      bgSecondary: "hsl(355, 50%, 15%)",
      textMain: "hsl(355, 90%, 85%)",
      accentGlow: "hsl(115, 100%, 50%)",
      matchedGlow: "hsl(235, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_636", {
      id: "palette_636",
      name: "Dynamic Theme #636",
      bgPrimary: "hsl(12, 40%, 10%)",
      bgSecondary: "hsl(12, 50%, 15%)",
      textMain: "hsl(12, 90%, 85%)",
      accentGlow: "hsl(132, 100%, 50%)",
      matchedGlow: "hsl(252, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_637", {
      id: "palette_637",
      name: "Dynamic Theme #637",
      bgPrimary: "hsl(29, 40%, 10%)",
      bgSecondary: "hsl(29, 50%, 15%)",
      textMain: "hsl(29, 90%, 85%)",
      accentGlow: "hsl(149, 100%, 50%)",
      matchedGlow: "hsl(269, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_638", {
      id: "palette_638",
      name: "Dynamic Theme #638",
      bgPrimary: "hsl(46, 40%, 10%)",
      bgSecondary: "hsl(46, 50%, 15%)",
      textMain: "hsl(46, 90%, 85%)",
      accentGlow: "hsl(166, 100%, 50%)",
      matchedGlow: "hsl(286, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_639", {
      id: "palette_639",
      name: "Dynamic Theme #639",
      bgPrimary: "hsl(63, 40%, 10%)",
      bgSecondary: "hsl(63, 50%, 15%)",
      textMain: "hsl(63, 90%, 85%)",
      accentGlow: "hsl(183, 100%, 50%)",
      matchedGlow: "hsl(303, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_640", {
      id: "palette_640",
      name: "Dynamic Theme #640",
      bgPrimary: "hsl(80, 40%, 10%)",
      bgSecondary: "hsl(80, 50%, 15%)",
      textMain: "hsl(80, 90%, 85%)",
      accentGlow: "hsl(200, 100%, 50%)",
      matchedGlow: "hsl(320, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_641", {
      id: "palette_641",
      name: "Dynamic Theme #641",
      bgPrimary: "hsl(97, 40%, 10%)",
      bgSecondary: "hsl(97, 50%, 15%)",
      textMain: "hsl(97, 90%, 85%)",
      accentGlow: "hsl(217, 100%, 50%)",
      matchedGlow: "hsl(337, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_642", {
      id: "palette_642",
      name: "Dynamic Theme #642",
      bgPrimary: "hsl(114, 40%, 10%)",
      bgSecondary: "hsl(114, 50%, 15%)",
      textMain: "hsl(114, 90%, 85%)",
      accentGlow: "hsl(234, 100%, 50%)",
      matchedGlow: "hsl(354, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_643", {
      id: "palette_643",
      name: "Dynamic Theme #643",
      bgPrimary: "hsl(131, 40%, 10%)",
      bgSecondary: "hsl(131, 50%, 15%)",
      textMain: "hsl(131, 90%, 85%)",
      accentGlow: "hsl(251, 100%, 50%)",
      matchedGlow: "hsl(11, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_644", {
      id: "palette_644",
      name: "Dynamic Theme #644",
      bgPrimary: "hsl(148, 40%, 10%)",
      bgSecondary: "hsl(148, 50%, 15%)",
      textMain: "hsl(148, 90%, 85%)",
      accentGlow: "hsl(268, 100%, 50%)",
      matchedGlow: "hsl(28, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_645", {
      id: "palette_645",
      name: "Dynamic Theme #645",
      bgPrimary: "hsl(165, 40%, 10%)",
      bgSecondary: "hsl(165, 50%, 15%)",
      textMain: "hsl(165, 90%, 85%)",
      accentGlow: "hsl(285, 100%, 50%)",
      matchedGlow: "hsl(45, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_646", {
      id: "palette_646",
      name: "Dynamic Theme #646",
      bgPrimary: "hsl(182, 40%, 10%)",
      bgSecondary: "hsl(182, 50%, 15%)",
      textMain: "hsl(182, 90%, 85%)",
      accentGlow: "hsl(302, 100%, 50%)",
      matchedGlow: "hsl(62, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_647", {
      id: "palette_647",
      name: "Dynamic Theme #647",
      bgPrimary: "hsl(199, 40%, 10%)",
      bgSecondary: "hsl(199, 50%, 15%)",
      textMain: "hsl(199, 90%, 85%)",
      accentGlow: "hsl(319, 100%, 50%)",
      matchedGlow: "hsl(79, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_648", {
      id: "palette_648",
      name: "Dynamic Theme #648",
      bgPrimary: "hsl(216, 40%, 10%)",
      bgSecondary: "hsl(216, 50%, 15%)",
      textMain: "hsl(216, 90%, 85%)",
      accentGlow: "hsl(336, 100%, 50%)",
      matchedGlow: "hsl(96, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_649", {
      id: "palette_649",
      name: "Dynamic Theme #649",
      bgPrimary: "hsl(233, 40%, 10%)",
      bgSecondary: "hsl(233, 50%, 15%)",
      textMain: "hsl(233, 90%, 85%)",
      accentGlow: "hsl(353, 100%, 50%)",
      matchedGlow: "hsl(113, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_650", {
      id: "palette_650",
      name: "Dynamic Theme #650",
      bgPrimary: "hsl(250, 40%, 10%)",
      bgSecondary: "hsl(250, 50%, 15%)",
      textMain: "hsl(250, 90%, 85%)",
      accentGlow: "hsl(10, 100%, 50%)",
      matchedGlow: "hsl(130, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_651", {
      id: "palette_651",
      name: "Dynamic Theme #651",
      bgPrimary: "hsl(267, 40%, 10%)",
      bgSecondary: "hsl(267, 50%, 15%)",
      textMain: "hsl(267, 90%, 85%)",
      accentGlow: "hsl(27, 100%, 50%)",
      matchedGlow: "hsl(147, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_652", {
      id: "palette_652",
      name: "Dynamic Theme #652",
      bgPrimary: "hsl(284, 40%, 10%)",
      bgSecondary: "hsl(284, 50%, 15%)",
      textMain: "hsl(284, 90%, 85%)",
      accentGlow: "hsl(44, 100%, 50%)",
      matchedGlow: "hsl(164, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_653", {
      id: "palette_653",
      name: "Dynamic Theme #653",
      bgPrimary: "hsl(301, 40%, 10%)",
      bgSecondary: "hsl(301, 50%, 15%)",
      textMain: "hsl(301, 90%, 85%)",
      accentGlow: "hsl(61, 100%, 50%)",
      matchedGlow: "hsl(181, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_654", {
      id: "palette_654",
      name: "Dynamic Theme #654",
      bgPrimary: "hsl(318, 40%, 10%)",
      bgSecondary: "hsl(318, 50%, 15%)",
      textMain: "hsl(318, 90%, 85%)",
      accentGlow: "hsl(78, 100%, 50%)",
      matchedGlow: "hsl(198, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_655", {
      id: "palette_655",
      name: "Dynamic Theme #655",
      bgPrimary: "hsl(335, 40%, 10%)",
      bgSecondary: "hsl(335, 50%, 15%)",
      textMain: "hsl(335, 90%, 85%)",
      accentGlow: "hsl(95, 100%, 50%)",
      matchedGlow: "hsl(215, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_656", {
      id: "palette_656",
      name: "Dynamic Theme #656",
      bgPrimary: "hsl(352, 40%, 10%)",
      bgSecondary: "hsl(352, 50%, 15%)",
      textMain: "hsl(352, 90%, 85%)",
      accentGlow: "hsl(112, 100%, 50%)",
      matchedGlow: "hsl(232, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_657", {
      id: "palette_657",
      name: "Dynamic Theme #657",
      bgPrimary: "hsl(9, 40%, 10%)",
      bgSecondary: "hsl(9, 50%, 15%)",
      textMain: "hsl(9, 90%, 85%)",
      accentGlow: "hsl(129, 100%, 50%)",
      matchedGlow: "hsl(249, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_658", {
      id: "palette_658",
      name: "Dynamic Theme #658",
      bgPrimary: "hsl(26, 40%, 10%)",
      bgSecondary: "hsl(26, 50%, 15%)",
      textMain: "hsl(26, 90%, 85%)",
      accentGlow: "hsl(146, 100%, 50%)",
      matchedGlow: "hsl(266, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_659", {
      id: "palette_659",
      name: "Dynamic Theme #659",
      bgPrimary: "hsl(43, 40%, 10%)",
      bgSecondary: "hsl(43, 50%, 15%)",
      textMain: "hsl(43, 90%, 85%)",
      accentGlow: "hsl(163, 100%, 50%)",
      matchedGlow: "hsl(283, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_660", {
      id: "palette_660",
      name: "Dynamic Theme #660",
      bgPrimary: "hsl(60, 40%, 10%)",
      bgSecondary: "hsl(60, 50%, 15%)",
      textMain: "hsl(60, 90%, 85%)",
      accentGlow: "hsl(180, 100%, 50%)",
      matchedGlow: "hsl(300, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_661", {
      id: "palette_661",
      name: "Dynamic Theme #661",
      bgPrimary: "hsl(77, 40%, 10%)",
      bgSecondary: "hsl(77, 50%, 15%)",
      textMain: "hsl(77, 90%, 85%)",
      accentGlow: "hsl(197, 100%, 50%)",
      matchedGlow: "hsl(317, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_662", {
      id: "palette_662",
      name: "Dynamic Theme #662",
      bgPrimary: "hsl(94, 40%, 10%)",
      bgSecondary: "hsl(94, 50%, 15%)",
      textMain: "hsl(94, 90%, 85%)",
      accentGlow: "hsl(214, 100%, 50%)",
      matchedGlow: "hsl(334, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_663", {
      id: "palette_663",
      name: "Dynamic Theme #663",
      bgPrimary: "hsl(111, 40%, 10%)",
      bgSecondary: "hsl(111, 50%, 15%)",
      textMain: "hsl(111, 90%, 85%)",
      accentGlow: "hsl(231, 100%, 50%)",
      matchedGlow: "hsl(351, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_664", {
      id: "palette_664",
      name: "Dynamic Theme #664",
      bgPrimary: "hsl(128, 40%, 10%)",
      bgSecondary: "hsl(128, 50%, 15%)",
      textMain: "hsl(128, 90%, 85%)",
      accentGlow: "hsl(248, 100%, 50%)",
      matchedGlow: "hsl(8, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_665", {
      id: "palette_665",
      name: "Dynamic Theme #665",
      bgPrimary: "hsl(145, 40%, 10%)",
      bgSecondary: "hsl(145, 50%, 15%)",
      textMain: "hsl(145, 90%, 85%)",
      accentGlow: "hsl(265, 100%, 50%)",
      matchedGlow: "hsl(25, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_666", {
      id: "palette_666",
      name: "Dynamic Theme #666",
      bgPrimary: "hsl(162, 40%, 10%)",
      bgSecondary: "hsl(162, 50%, 15%)",
      textMain: "hsl(162, 90%, 85%)",
      accentGlow: "hsl(282, 100%, 50%)",
      matchedGlow: "hsl(42, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_667", {
      id: "palette_667",
      name: "Dynamic Theme #667",
      bgPrimary: "hsl(179, 40%, 10%)",
      bgSecondary: "hsl(179, 50%, 15%)",
      textMain: "hsl(179, 90%, 85%)",
      accentGlow: "hsl(299, 100%, 50%)",
      matchedGlow: "hsl(59, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_668", {
      id: "palette_668",
      name: "Dynamic Theme #668",
      bgPrimary: "hsl(196, 40%, 10%)",
      bgSecondary: "hsl(196, 50%, 15%)",
      textMain: "hsl(196, 90%, 85%)",
      accentGlow: "hsl(316, 100%, 50%)",
      matchedGlow: "hsl(76, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_669", {
      id: "palette_669",
      name: "Dynamic Theme #669",
      bgPrimary: "hsl(213, 40%, 10%)",
      bgSecondary: "hsl(213, 50%, 15%)",
      textMain: "hsl(213, 90%, 85%)",
      accentGlow: "hsl(333, 100%, 50%)",
      matchedGlow: "hsl(93, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_670", {
      id: "palette_670",
      name: "Dynamic Theme #670",
      bgPrimary: "hsl(230, 40%, 10%)",
      bgSecondary: "hsl(230, 50%, 15%)",
      textMain: "hsl(230, 90%, 85%)",
      accentGlow: "hsl(350, 100%, 50%)",
      matchedGlow: "hsl(110, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_671", {
      id: "palette_671",
      name: "Dynamic Theme #671",
      bgPrimary: "hsl(247, 40%, 10%)",
      bgSecondary: "hsl(247, 50%, 15%)",
      textMain: "hsl(247, 90%, 85%)",
      accentGlow: "hsl(7, 100%, 50%)",
      matchedGlow: "hsl(127, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_672", {
      id: "palette_672",
      name: "Dynamic Theme #672",
      bgPrimary: "hsl(264, 40%, 10%)",
      bgSecondary: "hsl(264, 50%, 15%)",
      textMain: "hsl(264, 90%, 85%)",
      accentGlow: "hsl(24, 100%, 50%)",
      matchedGlow: "hsl(144, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_673", {
      id: "palette_673",
      name: "Dynamic Theme #673",
      bgPrimary: "hsl(281, 40%, 10%)",
      bgSecondary: "hsl(281, 50%, 15%)",
      textMain: "hsl(281, 90%, 85%)",
      accentGlow: "hsl(41, 100%, 50%)",
      matchedGlow: "hsl(161, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_674", {
      id: "palette_674",
      name: "Dynamic Theme #674",
      bgPrimary: "hsl(298, 40%, 10%)",
      bgSecondary: "hsl(298, 50%, 15%)",
      textMain: "hsl(298, 90%, 85%)",
      accentGlow: "hsl(58, 100%, 50%)",
      matchedGlow: "hsl(178, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_675", {
      id: "palette_675",
      name: "Dynamic Theme #675",
      bgPrimary: "hsl(315, 40%, 10%)",
      bgSecondary: "hsl(315, 50%, 15%)",
      textMain: "hsl(315, 90%, 85%)",
      accentGlow: "hsl(75, 100%, 50%)",
      matchedGlow: "hsl(195, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_676", {
      id: "palette_676",
      name: "Dynamic Theme #676",
      bgPrimary: "hsl(332, 40%, 10%)",
      bgSecondary: "hsl(332, 50%, 15%)",
      textMain: "hsl(332, 90%, 85%)",
      accentGlow: "hsl(92, 100%, 50%)",
      matchedGlow: "hsl(212, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_677", {
      id: "palette_677",
      name: "Dynamic Theme #677",
      bgPrimary: "hsl(349, 40%, 10%)",
      bgSecondary: "hsl(349, 50%, 15%)",
      textMain: "hsl(349, 90%, 85%)",
      accentGlow: "hsl(109, 100%, 50%)",
      matchedGlow: "hsl(229, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_678", {
      id: "palette_678",
      name: "Dynamic Theme #678",
      bgPrimary: "hsl(6, 40%, 10%)",
      bgSecondary: "hsl(6, 50%, 15%)",
      textMain: "hsl(6, 90%, 85%)",
      accentGlow: "hsl(126, 100%, 50%)",
      matchedGlow: "hsl(246, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_679", {
      id: "palette_679",
      name: "Dynamic Theme #679",
      bgPrimary: "hsl(23, 40%, 10%)",
      bgSecondary: "hsl(23, 50%, 15%)",
      textMain: "hsl(23, 90%, 85%)",
      accentGlow: "hsl(143, 100%, 50%)",
      matchedGlow: "hsl(263, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_680", {
      id: "palette_680",
      name: "Dynamic Theme #680",
      bgPrimary: "hsl(40, 40%, 10%)",
      bgSecondary: "hsl(40, 50%, 15%)",
      textMain: "hsl(40, 90%, 85%)",
      accentGlow: "hsl(160, 100%, 50%)",
      matchedGlow: "hsl(280, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_681", {
      id: "palette_681",
      name: "Dynamic Theme #681",
      bgPrimary: "hsl(57, 40%, 10%)",
      bgSecondary: "hsl(57, 50%, 15%)",
      textMain: "hsl(57, 90%, 85%)",
      accentGlow: "hsl(177, 100%, 50%)",
      matchedGlow: "hsl(297, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_682", {
      id: "palette_682",
      name: "Dynamic Theme #682",
      bgPrimary: "hsl(74, 40%, 10%)",
      bgSecondary: "hsl(74, 50%, 15%)",
      textMain: "hsl(74, 90%, 85%)",
      accentGlow: "hsl(194, 100%, 50%)",
      matchedGlow: "hsl(314, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_683", {
      id: "palette_683",
      name: "Dynamic Theme #683",
      bgPrimary: "hsl(91, 40%, 10%)",
      bgSecondary: "hsl(91, 50%, 15%)",
      textMain: "hsl(91, 90%, 85%)",
      accentGlow: "hsl(211, 100%, 50%)",
      matchedGlow: "hsl(331, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_684", {
      id: "palette_684",
      name: "Dynamic Theme #684",
      bgPrimary: "hsl(108, 40%, 10%)",
      bgSecondary: "hsl(108, 50%, 15%)",
      textMain: "hsl(108, 90%, 85%)",
      accentGlow: "hsl(228, 100%, 50%)",
      matchedGlow: "hsl(348, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_685", {
      id: "palette_685",
      name: "Dynamic Theme #685",
      bgPrimary: "hsl(125, 40%, 10%)",
      bgSecondary: "hsl(125, 50%, 15%)",
      textMain: "hsl(125, 90%, 85%)",
      accentGlow: "hsl(245, 100%, 50%)",
      matchedGlow: "hsl(5, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_686", {
      id: "palette_686",
      name: "Dynamic Theme #686",
      bgPrimary: "hsl(142, 40%, 10%)",
      bgSecondary: "hsl(142, 50%, 15%)",
      textMain: "hsl(142, 90%, 85%)",
      accentGlow: "hsl(262, 100%, 50%)",
      matchedGlow: "hsl(22, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_687", {
      id: "palette_687",
      name: "Dynamic Theme #687",
      bgPrimary: "hsl(159, 40%, 10%)",
      bgSecondary: "hsl(159, 50%, 15%)",
      textMain: "hsl(159, 90%, 85%)",
      accentGlow: "hsl(279, 100%, 50%)",
      matchedGlow: "hsl(39, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_688", {
      id: "palette_688",
      name: "Dynamic Theme #688",
      bgPrimary: "hsl(176, 40%, 10%)",
      bgSecondary: "hsl(176, 50%, 15%)",
      textMain: "hsl(176, 90%, 85%)",
      accentGlow: "hsl(296, 100%, 50%)",
      matchedGlow: "hsl(56, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_689", {
      id: "palette_689",
      name: "Dynamic Theme #689",
      bgPrimary: "hsl(193, 40%, 10%)",
      bgSecondary: "hsl(193, 50%, 15%)",
      textMain: "hsl(193, 90%, 85%)",
      accentGlow: "hsl(313, 100%, 50%)",
      matchedGlow: "hsl(73, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_690", {
      id: "palette_690",
      name: "Dynamic Theme #690",
      bgPrimary: "hsl(210, 40%, 10%)",
      bgSecondary: "hsl(210, 50%, 15%)",
      textMain: "hsl(210, 90%, 85%)",
      accentGlow: "hsl(330, 100%, 50%)",
      matchedGlow: "hsl(90, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_691", {
      id: "palette_691",
      name: "Dynamic Theme #691",
      bgPrimary: "hsl(227, 40%, 10%)",
      bgSecondary: "hsl(227, 50%, 15%)",
      textMain: "hsl(227, 90%, 85%)",
      accentGlow: "hsl(347, 100%, 50%)",
      matchedGlow: "hsl(107, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_692", {
      id: "palette_692",
      name: "Dynamic Theme #692",
      bgPrimary: "hsl(244, 40%, 10%)",
      bgSecondary: "hsl(244, 50%, 15%)",
      textMain: "hsl(244, 90%, 85%)",
      accentGlow: "hsl(4, 100%, 50%)",
      matchedGlow: "hsl(124, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_693", {
      id: "palette_693",
      name: "Dynamic Theme #693",
      bgPrimary: "hsl(261, 40%, 10%)",
      bgSecondary: "hsl(261, 50%, 15%)",
      textMain: "hsl(261, 90%, 85%)",
      accentGlow: "hsl(21, 100%, 50%)",
      matchedGlow: "hsl(141, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_694", {
      id: "palette_694",
      name: "Dynamic Theme #694",
      bgPrimary: "hsl(278, 40%, 10%)",
      bgSecondary: "hsl(278, 50%, 15%)",
      textMain: "hsl(278, 90%, 85%)",
      accentGlow: "hsl(38, 100%, 50%)",
      matchedGlow: "hsl(158, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_695", {
      id: "palette_695",
      name: "Dynamic Theme #695",
      bgPrimary: "hsl(295, 40%, 10%)",
      bgSecondary: "hsl(295, 50%, 15%)",
      textMain: "hsl(295, 90%, 85%)",
      accentGlow: "hsl(55, 100%, 50%)",
      matchedGlow: "hsl(175, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_696", {
      id: "palette_696",
      name: "Dynamic Theme #696",
      bgPrimary: "hsl(312, 40%, 10%)",
      bgSecondary: "hsl(312, 50%, 15%)",
      textMain: "hsl(312, 90%, 85%)",
      accentGlow: "hsl(72, 100%, 50%)",
      matchedGlow: "hsl(192, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_697", {
      id: "palette_697",
      name: "Dynamic Theme #697",
      bgPrimary: "hsl(329, 40%, 10%)",
      bgSecondary: "hsl(329, 50%, 15%)",
      textMain: "hsl(329, 90%, 85%)",
      accentGlow: "hsl(89, 100%, 50%)",
      matchedGlow: "hsl(209, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_698", {
      id: "palette_698",
      name: "Dynamic Theme #698",
      bgPrimary: "hsl(346, 40%, 10%)",
      bgSecondary: "hsl(346, 50%, 15%)",
      textMain: "hsl(346, 90%, 85%)",
      accentGlow: "hsl(106, 100%, 50%)",
      matchedGlow: "hsl(226, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_699", {
      id: "palette_699",
      name: "Dynamic Theme #699",
      bgPrimary: "hsl(3, 40%, 10%)",
      bgSecondary: "hsl(3, 50%, 15%)",
      textMain: "hsl(3, 90%, 85%)",
      accentGlow: "hsl(123, 100%, 50%)",
      matchedGlow: "hsl(243, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_700", {
      id: "palette_700",
      name: "Dynamic Theme #700",
      bgPrimary: "hsl(20, 40%, 10%)",
      bgSecondary: "hsl(20, 50%, 15%)",
      textMain: "hsl(20, 90%, 85%)",
      accentGlow: "hsl(140, 100%, 50%)",
      matchedGlow: "hsl(260, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_701", {
      id: "palette_701",
      name: "Dynamic Theme #701",
      bgPrimary: "hsl(37, 40%, 10%)",
      bgSecondary: "hsl(37, 50%, 15%)",
      textMain: "hsl(37, 90%, 85%)",
      accentGlow: "hsl(157, 100%, 50%)",
      matchedGlow: "hsl(277, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_702", {
      id: "palette_702",
      name: "Dynamic Theme #702",
      bgPrimary: "hsl(54, 40%, 10%)",
      bgSecondary: "hsl(54, 50%, 15%)",
      textMain: "hsl(54, 90%, 85%)",
      accentGlow: "hsl(174, 100%, 50%)",
      matchedGlow: "hsl(294, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_703", {
      id: "palette_703",
      name: "Dynamic Theme #703",
      bgPrimary: "hsl(71, 40%, 10%)",
      bgSecondary: "hsl(71, 50%, 15%)",
      textMain: "hsl(71, 90%, 85%)",
      accentGlow: "hsl(191, 100%, 50%)",
      matchedGlow: "hsl(311, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_704", {
      id: "palette_704",
      name: "Dynamic Theme #704",
      bgPrimary: "hsl(88, 40%, 10%)",
      bgSecondary: "hsl(88, 50%, 15%)",
      textMain: "hsl(88, 90%, 85%)",
      accentGlow: "hsl(208, 100%, 50%)",
      matchedGlow: "hsl(328, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_705", {
      id: "palette_705",
      name: "Dynamic Theme #705",
      bgPrimary: "hsl(105, 40%, 10%)",
      bgSecondary: "hsl(105, 50%, 15%)",
      textMain: "hsl(105, 90%, 85%)",
      accentGlow: "hsl(225, 100%, 50%)",
      matchedGlow: "hsl(345, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_706", {
      id: "palette_706",
      name: "Dynamic Theme #706",
      bgPrimary: "hsl(122, 40%, 10%)",
      bgSecondary: "hsl(122, 50%, 15%)",
      textMain: "hsl(122, 90%, 85%)",
      accentGlow: "hsl(242, 100%, 50%)",
      matchedGlow: "hsl(2, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_707", {
      id: "palette_707",
      name: "Dynamic Theme #707",
      bgPrimary: "hsl(139, 40%, 10%)",
      bgSecondary: "hsl(139, 50%, 15%)",
      textMain: "hsl(139, 90%, 85%)",
      accentGlow: "hsl(259, 100%, 50%)",
      matchedGlow: "hsl(19, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_708", {
      id: "palette_708",
      name: "Dynamic Theme #708",
      bgPrimary: "hsl(156, 40%, 10%)",
      bgSecondary: "hsl(156, 50%, 15%)",
      textMain: "hsl(156, 90%, 85%)",
      accentGlow: "hsl(276, 100%, 50%)",
      matchedGlow: "hsl(36, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_709", {
      id: "palette_709",
      name: "Dynamic Theme #709",
      bgPrimary: "hsl(173, 40%, 10%)",
      bgSecondary: "hsl(173, 50%, 15%)",
      textMain: "hsl(173, 90%, 85%)",
      accentGlow: "hsl(293, 100%, 50%)",
      matchedGlow: "hsl(53, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_710", {
      id: "palette_710",
      name: "Dynamic Theme #710",
      bgPrimary: "hsl(190, 40%, 10%)",
      bgSecondary: "hsl(190, 50%, 15%)",
      textMain: "hsl(190, 90%, 85%)",
      accentGlow: "hsl(310, 100%, 50%)",
      matchedGlow: "hsl(70, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_711", {
      id: "palette_711",
      name: "Dynamic Theme #711",
      bgPrimary: "hsl(207, 40%, 10%)",
      bgSecondary: "hsl(207, 50%, 15%)",
      textMain: "hsl(207, 90%, 85%)",
      accentGlow: "hsl(327, 100%, 50%)",
      matchedGlow: "hsl(87, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_712", {
      id: "palette_712",
      name: "Dynamic Theme #712",
      bgPrimary: "hsl(224, 40%, 10%)",
      bgSecondary: "hsl(224, 50%, 15%)",
      textMain: "hsl(224, 90%, 85%)",
      accentGlow: "hsl(344, 100%, 50%)",
      matchedGlow: "hsl(104, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_713", {
      id: "palette_713",
      name: "Dynamic Theme #713",
      bgPrimary: "hsl(241, 40%, 10%)",
      bgSecondary: "hsl(241, 50%, 15%)",
      textMain: "hsl(241, 90%, 85%)",
      accentGlow: "hsl(1, 100%, 50%)",
      matchedGlow: "hsl(121, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_714", {
      id: "palette_714",
      name: "Dynamic Theme #714",
      bgPrimary: "hsl(258, 40%, 10%)",
      bgSecondary: "hsl(258, 50%, 15%)",
      textMain: "hsl(258, 90%, 85%)",
      accentGlow: "hsl(18, 100%, 50%)",
      matchedGlow: "hsl(138, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_715", {
      id: "palette_715",
      name: "Dynamic Theme #715",
      bgPrimary: "hsl(275, 40%, 10%)",
      bgSecondary: "hsl(275, 50%, 15%)",
      textMain: "hsl(275, 90%, 85%)",
      accentGlow: "hsl(35, 100%, 50%)",
      matchedGlow: "hsl(155, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_716", {
      id: "palette_716",
      name: "Dynamic Theme #716",
      bgPrimary: "hsl(292, 40%, 10%)",
      bgSecondary: "hsl(292, 50%, 15%)",
      textMain: "hsl(292, 90%, 85%)",
      accentGlow: "hsl(52, 100%, 50%)",
      matchedGlow: "hsl(172, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_717", {
      id: "palette_717",
      name: "Dynamic Theme #717",
      bgPrimary: "hsl(309, 40%, 10%)",
      bgSecondary: "hsl(309, 50%, 15%)",
      textMain: "hsl(309, 90%, 85%)",
      accentGlow: "hsl(69, 100%, 50%)",
      matchedGlow: "hsl(189, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_718", {
      id: "palette_718",
      name: "Dynamic Theme #718",
      bgPrimary: "hsl(326, 40%, 10%)",
      bgSecondary: "hsl(326, 50%, 15%)",
      textMain: "hsl(326, 90%, 85%)",
      accentGlow: "hsl(86, 100%, 50%)",
      matchedGlow: "hsl(206, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_719", {
      id: "palette_719",
      name: "Dynamic Theme #719",
      bgPrimary: "hsl(343, 40%, 10%)",
      bgSecondary: "hsl(343, 50%, 15%)",
      textMain: "hsl(343, 90%, 85%)",
      accentGlow: "hsl(103, 100%, 50%)",
      matchedGlow: "hsl(223, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_720", {
      id: "palette_720",
      name: "Dynamic Theme #720",
      bgPrimary: "hsl(0, 40%, 10%)",
      bgSecondary: "hsl(0, 50%, 15%)",
      textMain: "hsl(0, 90%, 85%)",
      accentGlow: "hsl(120, 100%, 50%)",
      matchedGlow: "hsl(240, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_721", {
      id: "palette_721",
      name: "Dynamic Theme #721",
      bgPrimary: "hsl(17, 40%, 10%)",
      bgSecondary: "hsl(17, 50%, 15%)",
      textMain: "hsl(17, 90%, 85%)",
      accentGlow: "hsl(137, 100%, 50%)",
      matchedGlow: "hsl(257, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_722", {
      id: "palette_722",
      name: "Dynamic Theme #722",
      bgPrimary: "hsl(34, 40%, 10%)",
      bgSecondary: "hsl(34, 50%, 15%)",
      textMain: "hsl(34, 90%, 85%)",
      accentGlow: "hsl(154, 100%, 50%)",
      matchedGlow: "hsl(274, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_723", {
      id: "palette_723",
      name: "Dynamic Theme #723",
      bgPrimary: "hsl(51, 40%, 10%)",
      bgSecondary: "hsl(51, 50%, 15%)",
      textMain: "hsl(51, 90%, 85%)",
      accentGlow: "hsl(171, 100%, 50%)",
      matchedGlow: "hsl(291, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_724", {
      id: "palette_724",
      name: "Dynamic Theme #724",
      bgPrimary: "hsl(68, 40%, 10%)",
      bgSecondary: "hsl(68, 50%, 15%)",
      textMain: "hsl(68, 90%, 85%)",
      accentGlow: "hsl(188, 100%, 50%)",
      matchedGlow: "hsl(308, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_725", {
      id: "palette_725",
      name: "Dynamic Theme #725",
      bgPrimary: "hsl(85, 40%, 10%)",
      bgSecondary: "hsl(85, 50%, 15%)",
      textMain: "hsl(85, 90%, 85%)",
      accentGlow: "hsl(205, 100%, 50%)",
      matchedGlow: "hsl(325, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_726", {
      id: "palette_726",
      name: "Dynamic Theme #726",
      bgPrimary: "hsl(102, 40%, 10%)",
      bgSecondary: "hsl(102, 50%, 15%)",
      textMain: "hsl(102, 90%, 85%)",
      accentGlow: "hsl(222, 100%, 50%)",
      matchedGlow: "hsl(342, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_727", {
      id: "palette_727",
      name: "Dynamic Theme #727",
      bgPrimary: "hsl(119, 40%, 10%)",
      bgSecondary: "hsl(119, 50%, 15%)",
      textMain: "hsl(119, 90%, 85%)",
      accentGlow: "hsl(239, 100%, 50%)",
      matchedGlow: "hsl(359, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_728", {
      id: "palette_728",
      name: "Dynamic Theme #728",
      bgPrimary: "hsl(136, 40%, 10%)",
      bgSecondary: "hsl(136, 50%, 15%)",
      textMain: "hsl(136, 90%, 85%)",
      accentGlow: "hsl(256, 100%, 50%)",
      matchedGlow: "hsl(16, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_729", {
      id: "palette_729",
      name: "Dynamic Theme #729",
      bgPrimary: "hsl(153, 40%, 10%)",
      bgSecondary: "hsl(153, 50%, 15%)",
      textMain: "hsl(153, 90%, 85%)",
      accentGlow: "hsl(273, 100%, 50%)",
      matchedGlow: "hsl(33, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_730", {
      id: "palette_730",
      name: "Dynamic Theme #730",
      bgPrimary: "hsl(170, 40%, 10%)",
      bgSecondary: "hsl(170, 50%, 15%)",
      textMain: "hsl(170, 90%, 85%)",
      accentGlow: "hsl(290, 100%, 50%)",
      matchedGlow: "hsl(50, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_731", {
      id: "palette_731",
      name: "Dynamic Theme #731",
      bgPrimary: "hsl(187, 40%, 10%)",
      bgSecondary: "hsl(187, 50%, 15%)",
      textMain: "hsl(187, 90%, 85%)",
      accentGlow: "hsl(307, 100%, 50%)",
      matchedGlow: "hsl(67, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_732", {
      id: "palette_732",
      name: "Dynamic Theme #732",
      bgPrimary: "hsl(204, 40%, 10%)",
      bgSecondary: "hsl(204, 50%, 15%)",
      textMain: "hsl(204, 90%, 85%)",
      accentGlow: "hsl(324, 100%, 50%)",
      matchedGlow: "hsl(84, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_733", {
      id: "palette_733",
      name: "Dynamic Theme #733",
      bgPrimary: "hsl(221, 40%, 10%)",
      bgSecondary: "hsl(221, 50%, 15%)",
      textMain: "hsl(221, 90%, 85%)",
      accentGlow: "hsl(341, 100%, 50%)",
      matchedGlow: "hsl(101, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_734", {
      id: "palette_734",
      name: "Dynamic Theme #734",
      bgPrimary: "hsl(238, 40%, 10%)",
      bgSecondary: "hsl(238, 50%, 15%)",
      textMain: "hsl(238, 90%, 85%)",
      accentGlow: "hsl(358, 100%, 50%)",
      matchedGlow: "hsl(118, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_735", {
      id: "palette_735",
      name: "Dynamic Theme #735",
      bgPrimary: "hsl(255, 40%, 10%)",
      bgSecondary: "hsl(255, 50%, 15%)",
      textMain: "hsl(255, 90%, 85%)",
      accentGlow: "hsl(15, 100%, 50%)",
      matchedGlow: "hsl(135, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_736", {
      id: "palette_736",
      name: "Dynamic Theme #736",
      bgPrimary: "hsl(272, 40%, 10%)",
      bgSecondary: "hsl(272, 50%, 15%)",
      textMain: "hsl(272, 90%, 85%)",
      accentGlow: "hsl(32, 100%, 50%)",
      matchedGlow: "hsl(152, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_737", {
      id: "palette_737",
      name: "Dynamic Theme #737",
      bgPrimary: "hsl(289, 40%, 10%)",
      bgSecondary: "hsl(289, 50%, 15%)",
      textMain: "hsl(289, 90%, 85%)",
      accentGlow: "hsl(49, 100%, 50%)",
      matchedGlow: "hsl(169, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_738", {
      id: "palette_738",
      name: "Dynamic Theme #738",
      bgPrimary: "hsl(306, 40%, 10%)",
      bgSecondary: "hsl(306, 50%, 15%)",
      textMain: "hsl(306, 90%, 85%)",
      accentGlow: "hsl(66, 100%, 50%)",
      matchedGlow: "hsl(186, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_739", {
      id: "palette_739",
      name: "Dynamic Theme #739",
      bgPrimary: "hsl(323, 40%, 10%)",
      bgSecondary: "hsl(323, 50%, 15%)",
      textMain: "hsl(323, 90%, 85%)",
      accentGlow: "hsl(83, 100%, 50%)",
      matchedGlow: "hsl(203, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_740", {
      id: "palette_740",
      name: "Dynamic Theme #740",
      bgPrimary: "hsl(340, 40%, 10%)",
      bgSecondary: "hsl(340, 50%, 15%)",
      textMain: "hsl(340, 90%, 85%)",
      accentGlow: "hsl(100, 100%, 50%)",
      matchedGlow: "hsl(220, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_741", {
      id: "palette_741",
      name: "Dynamic Theme #741",
      bgPrimary: "hsl(357, 40%, 10%)",
      bgSecondary: "hsl(357, 50%, 15%)",
      textMain: "hsl(357, 90%, 85%)",
      accentGlow: "hsl(117, 100%, 50%)",
      matchedGlow: "hsl(237, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_742", {
      id: "palette_742",
      name: "Dynamic Theme #742",
      bgPrimary: "hsl(14, 40%, 10%)",
      bgSecondary: "hsl(14, 50%, 15%)",
      textMain: "hsl(14, 90%, 85%)",
      accentGlow: "hsl(134, 100%, 50%)",
      matchedGlow: "hsl(254, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_743", {
      id: "palette_743",
      name: "Dynamic Theme #743",
      bgPrimary: "hsl(31, 40%, 10%)",
      bgSecondary: "hsl(31, 50%, 15%)",
      textMain: "hsl(31, 90%, 85%)",
      accentGlow: "hsl(151, 100%, 50%)",
      matchedGlow: "hsl(271, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_744", {
      id: "palette_744",
      name: "Dynamic Theme #744",
      bgPrimary: "hsl(48, 40%, 10%)",
      bgSecondary: "hsl(48, 50%, 15%)",
      textMain: "hsl(48, 90%, 85%)",
      accentGlow: "hsl(168, 100%, 50%)",
      matchedGlow: "hsl(288, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_745", {
      id: "palette_745",
      name: "Dynamic Theme #745",
      bgPrimary: "hsl(65, 40%, 10%)",
      bgSecondary: "hsl(65, 50%, 15%)",
      textMain: "hsl(65, 90%, 85%)",
      accentGlow: "hsl(185, 100%, 50%)",
      matchedGlow: "hsl(305, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_746", {
      id: "palette_746",
      name: "Dynamic Theme #746",
      bgPrimary: "hsl(82, 40%, 10%)",
      bgSecondary: "hsl(82, 50%, 15%)",
      textMain: "hsl(82, 90%, 85%)",
      accentGlow: "hsl(202, 100%, 50%)",
      matchedGlow: "hsl(322, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_747", {
      id: "palette_747",
      name: "Dynamic Theme #747",
      bgPrimary: "hsl(99, 40%, 10%)",
      bgSecondary: "hsl(99, 50%, 15%)",
      textMain: "hsl(99, 90%, 85%)",
      accentGlow: "hsl(219, 100%, 50%)",
      matchedGlow: "hsl(339, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_748", {
      id: "palette_748",
      name: "Dynamic Theme #748",
      bgPrimary: "hsl(116, 40%, 10%)",
      bgSecondary: "hsl(116, 50%, 15%)",
      textMain: "hsl(116, 90%, 85%)",
      accentGlow: "hsl(236, 100%, 50%)",
      matchedGlow: "hsl(356, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_749", {
      id: "palette_749",
      name: "Dynamic Theme #749",
      bgPrimary: "hsl(133, 40%, 10%)",
      bgSecondary: "hsl(133, 50%, 15%)",
      textMain: "hsl(133, 90%, 85%)",
      accentGlow: "hsl(253, 100%, 50%)",
      matchedGlow: "hsl(13, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_750", {
      id: "palette_750",
      name: "Dynamic Theme #750",
      bgPrimary: "hsl(150, 40%, 10%)",
      bgSecondary: "hsl(150, 50%, 15%)",
      textMain: "hsl(150, 90%, 85%)",
      accentGlow: "hsl(270, 100%, 50%)",
      matchedGlow: "hsl(30, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_751", {
      id: "palette_751",
      name: "Dynamic Theme #751",
      bgPrimary: "hsl(167, 40%, 10%)",
      bgSecondary: "hsl(167, 50%, 15%)",
      textMain: "hsl(167, 90%, 85%)",
      accentGlow: "hsl(287, 100%, 50%)",
      matchedGlow: "hsl(47, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_752", {
      id: "palette_752",
      name: "Dynamic Theme #752",
      bgPrimary: "hsl(184, 40%, 10%)",
      bgSecondary: "hsl(184, 50%, 15%)",
      textMain: "hsl(184, 90%, 85%)",
      accentGlow: "hsl(304, 100%, 50%)",
      matchedGlow: "hsl(64, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_753", {
      id: "palette_753",
      name: "Dynamic Theme #753",
      bgPrimary: "hsl(201, 40%, 10%)",
      bgSecondary: "hsl(201, 50%, 15%)",
      textMain: "hsl(201, 90%, 85%)",
      accentGlow: "hsl(321, 100%, 50%)",
      matchedGlow: "hsl(81, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_754", {
      id: "palette_754",
      name: "Dynamic Theme #754",
      bgPrimary: "hsl(218, 40%, 10%)",
      bgSecondary: "hsl(218, 50%, 15%)",
      textMain: "hsl(218, 90%, 85%)",
      accentGlow: "hsl(338, 100%, 50%)",
      matchedGlow: "hsl(98, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_755", {
      id: "palette_755",
      name: "Dynamic Theme #755",
      bgPrimary: "hsl(235, 40%, 10%)",
      bgSecondary: "hsl(235, 50%, 15%)",
      textMain: "hsl(235, 90%, 85%)",
      accentGlow: "hsl(355, 100%, 50%)",
      matchedGlow: "hsl(115, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_756", {
      id: "palette_756",
      name: "Dynamic Theme #756",
      bgPrimary: "hsl(252, 40%, 10%)",
      bgSecondary: "hsl(252, 50%, 15%)",
      textMain: "hsl(252, 90%, 85%)",
      accentGlow: "hsl(12, 100%, 50%)",
      matchedGlow: "hsl(132, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_757", {
      id: "palette_757",
      name: "Dynamic Theme #757",
      bgPrimary: "hsl(269, 40%, 10%)",
      bgSecondary: "hsl(269, 50%, 15%)",
      textMain: "hsl(269, 90%, 85%)",
      accentGlow: "hsl(29, 100%, 50%)",
      matchedGlow: "hsl(149, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_758", {
      id: "palette_758",
      name: "Dynamic Theme #758",
      bgPrimary: "hsl(286, 40%, 10%)",
      bgSecondary: "hsl(286, 50%, 15%)",
      textMain: "hsl(286, 90%, 85%)",
      accentGlow: "hsl(46, 100%, 50%)",
      matchedGlow: "hsl(166, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_759", {
      id: "palette_759",
      name: "Dynamic Theme #759",
      bgPrimary: "hsl(303, 40%, 10%)",
      bgSecondary: "hsl(303, 50%, 15%)",
      textMain: "hsl(303, 90%, 85%)",
      accentGlow: "hsl(63, 100%, 50%)",
      matchedGlow: "hsl(183, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_760", {
      id: "palette_760",
      name: "Dynamic Theme #760",
      bgPrimary: "hsl(320, 40%, 10%)",
      bgSecondary: "hsl(320, 50%, 15%)",
      textMain: "hsl(320, 90%, 85%)",
      accentGlow: "hsl(80, 100%, 50%)",
      matchedGlow: "hsl(200, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_761", {
      id: "palette_761",
      name: "Dynamic Theme #761",
      bgPrimary: "hsl(337, 40%, 10%)",
      bgSecondary: "hsl(337, 50%, 15%)",
      textMain: "hsl(337, 90%, 85%)",
      accentGlow: "hsl(97, 100%, 50%)",
      matchedGlow: "hsl(217, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_762", {
      id: "palette_762",
      name: "Dynamic Theme #762",
      bgPrimary: "hsl(354, 40%, 10%)",
      bgSecondary: "hsl(354, 50%, 15%)",
      textMain: "hsl(354, 90%, 85%)",
      accentGlow: "hsl(114, 100%, 50%)",
      matchedGlow: "hsl(234, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_763", {
      id: "palette_763",
      name: "Dynamic Theme #763",
      bgPrimary: "hsl(11, 40%, 10%)",
      bgSecondary: "hsl(11, 50%, 15%)",
      textMain: "hsl(11, 90%, 85%)",
      accentGlow: "hsl(131, 100%, 50%)",
      matchedGlow: "hsl(251, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_764", {
      id: "palette_764",
      name: "Dynamic Theme #764",
      bgPrimary: "hsl(28, 40%, 10%)",
      bgSecondary: "hsl(28, 50%, 15%)",
      textMain: "hsl(28, 90%, 85%)",
      accentGlow: "hsl(148, 100%, 50%)",
      matchedGlow: "hsl(268, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_765", {
      id: "palette_765",
      name: "Dynamic Theme #765",
      bgPrimary: "hsl(45, 40%, 10%)",
      bgSecondary: "hsl(45, 50%, 15%)",
      textMain: "hsl(45, 90%, 85%)",
      accentGlow: "hsl(165, 100%, 50%)",
      matchedGlow: "hsl(285, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_766", {
      id: "palette_766",
      name: "Dynamic Theme #766",
      bgPrimary: "hsl(62, 40%, 10%)",
      bgSecondary: "hsl(62, 50%, 15%)",
      textMain: "hsl(62, 90%, 85%)",
      accentGlow: "hsl(182, 100%, 50%)",
      matchedGlow: "hsl(302, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_767", {
      id: "palette_767",
      name: "Dynamic Theme #767",
      bgPrimary: "hsl(79, 40%, 10%)",
      bgSecondary: "hsl(79, 50%, 15%)",
      textMain: "hsl(79, 90%, 85%)",
      accentGlow: "hsl(199, 100%, 50%)",
      matchedGlow: "hsl(319, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_768", {
      id: "palette_768",
      name: "Dynamic Theme #768",
      bgPrimary: "hsl(96, 40%, 10%)",
      bgSecondary: "hsl(96, 50%, 15%)",
      textMain: "hsl(96, 90%, 85%)",
      accentGlow: "hsl(216, 100%, 50%)",
      matchedGlow: "hsl(336, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_769", {
      id: "palette_769",
      name: "Dynamic Theme #769",
      bgPrimary: "hsl(113, 40%, 10%)",
      bgSecondary: "hsl(113, 50%, 15%)",
      textMain: "hsl(113, 90%, 85%)",
      accentGlow: "hsl(233, 100%, 50%)",
      matchedGlow: "hsl(353, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_770", {
      id: "palette_770",
      name: "Dynamic Theme #770",
      bgPrimary: "hsl(130, 40%, 10%)",
      bgSecondary: "hsl(130, 50%, 15%)",
      textMain: "hsl(130, 90%, 85%)",
      accentGlow: "hsl(250, 100%, 50%)",
      matchedGlow: "hsl(10, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_771", {
      id: "palette_771",
      name: "Dynamic Theme #771",
      bgPrimary: "hsl(147, 40%, 10%)",
      bgSecondary: "hsl(147, 50%, 15%)",
      textMain: "hsl(147, 90%, 85%)",
      accentGlow: "hsl(267, 100%, 50%)",
      matchedGlow: "hsl(27, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_772", {
      id: "palette_772",
      name: "Dynamic Theme #772",
      bgPrimary: "hsl(164, 40%, 10%)",
      bgSecondary: "hsl(164, 50%, 15%)",
      textMain: "hsl(164, 90%, 85%)",
      accentGlow: "hsl(284, 100%, 50%)",
      matchedGlow: "hsl(44, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_773", {
      id: "palette_773",
      name: "Dynamic Theme #773",
      bgPrimary: "hsl(181, 40%, 10%)",
      bgSecondary: "hsl(181, 50%, 15%)",
      textMain: "hsl(181, 90%, 85%)",
      accentGlow: "hsl(301, 100%, 50%)",
      matchedGlow: "hsl(61, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_774", {
      id: "palette_774",
      name: "Dynamic Theme #774",
      bgPrimary: "hsl(198, 40%, 10%)",
      bgSecondary: "hsl(198, 50%, 15%)",
      textMain: "hsl(198, 90%, 85%)",
      accentGlow: "hsl(318, 100%, 50%)",
      matchedGlow: "hsl(78, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_775", {
      id: "palette_775",
      name: "Dynamic Theme #775",
      bgPrimary: "hsl(215, 40%, 10%)",
      bgSecondary: "hsl(215, 50%, 15%)",
      textMain: "hsl(215, 90%, 85%)",
      accentGlow: "hsl(335, 100%, 50%)",
      matchedGlow: "hsl(95, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_776", {
      id: "palette_776",
      name: "Dynamic Theme #776",
      bgPrimary: "hsl(232, 40%, 10%)",
      bgSecondary: "hsl(232, 50%, 15%)",
      textMain: "hsl(232, 90%, 85%)",
      accentGlow: "hsl(352, 100%, 50%)",
      matchedGlow: "hsl(112, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_777", {
      id: "palette_777",
      name: "Dynamic Theme #777",
      bgPrimary: "hsl(249, 40%, 10%)",
      bgSecondary: "hsl(249, 50%, 15%)",
      textMain: "hsl(249, 90%, 85%)",
      accentGlow: "hsl(9, 100%, 50%)",
      matchedGlow: "hsl(129, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_778", {
      id: "palette_778",
      name: "Dynamic Theme #778",
      bgPrimary: "hsl(266, 40%, 10%)",
      bgSecondary: "hsl(266, 50%, 15%)",
      textMain: "hsl(266, 90%, 85%)",
      accentGlow: "hsl(26, 100%, 50%)",
      matchedGlow: "hsl(146, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_779", {
      id: "palette_779",
      name: "Dynamic Theme #779",
      bgPrimary: "hsl(283, 40%, 10%)",
      bgSecondary: "hsl(283, 50%, 15%)",
      textMain: "hsl(283, 90%, 85%)",
      accentGlow: "hsl(43, 100%, 50%)",
      matchedGlow: "hsl(163, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_780", {
      id: "palette_780",
      name: "Dynamic Theme #780",
      bgPrimary: "hsl(300, 40%, 10%)",
      bgSecondary: "hsl(300, 50%, 15%)",
      textMain: "hsl(300, 90%, 85%)",
      accentGlow: "hsl(60, 100%, 50%)",
      matchedGlow: "hsl(180, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_781", {
      id: "palette_781",
      name: "Dynamic Theme #781",
      bgPrimary: "hsl(317, 40%, 10%)",
      bgSecondary: "hsl(317, 50%, 15%)",
      textMain: "hsl(317, 90%, 85%)",
      accentGlow: "hsl(77, 100%, 50%)",
      matchedGlow: "hsl(197, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_782", {
      id: "palette_782",
      name: "Dynamic Theme #782",
      bgPrimary: "hsl(334, 40%, 10%)",
      bgSecondary: "hsl(334, 50%, 15%)",
      textMain: "hsl(334, 90%, 85%)",
      accentGlow: "hsl(94, 100%, 50%)",
      matchedGlow: "hsl(214, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_783", {
      id: "palette_783",
      name: "Dynamic Theme #783",
      bgPrimary: "hsl(351, 40%, 10%)",
      bgSecondary: "hsl(351, 50%, 15%)",
      textMain: "hsl(351, 90%, 85%)",
      accentGlow: "hsl(111, 100%, 50%)",
      matchedGlow: "hsl(231, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_784", {
      id: "palette_784",
      name: "Dynamic Theme #784",
      bgPrimary: "hsl(8, 40%, 10%)",
      bgSecondary: "hsl(8, 50%, 15%)",
      textMain: "hsl(8, 90%, 85%)",
      accentGlow: "hsl(128, 100%, 50%)",
      matchedGlow: "hsl(248, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_785", {
      id: "palette_785",
      name: "Dynamic Theme #785",
      bgPrimary: "hsl(25, 40%, 10%)",
      bgSecondary: "hsl(25, 50%, 15%)",
      textMain: "hsl(25, 90%, 85%)",
      accentGlow: "hsl(145, 100%, 50%)",
      matchedGlow: "hsl(265, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_786", {
      id: "palette_786",
      name: "Dynamic Theme #786",
      bgPrimary: "hsl(42, 40%, 10%)",
      bgSecondary: "hsl(42, 50%, 15%)",
      textMain: "hsl(42, 90%, 85%)",
      accentGlow: "hsl(162, 100%, 50%)",
      matchedGlow: "hsl(282, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_787", {
      id: "palette_787",
      name: "Dynamic Theme #787",
      bgPrimary: "hsl(59, 40%, 10%)",
      bgSecondary: "hsl(59, 50%, 15%)",
      textMain: "hsl(59, 90%, 85%)",
      accentGlow: "hsl(179, 100%, 50%)",
      matchedGlow: "hsl(299, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_788", {
      id: "palette_788",
      name: "Dynamic Theme #788",
      bgPrimary: "hsl(76, 40%, 10%)",
      bgSecondary: "hsl(76, 50%, 15%)",
      textMain: "hsl(76, 90%, 85%)",
      accentGlow: "hsl(196, 100%, 50%)",
      matchedGlow: "hsl(316, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_789", {
      id: "palette_789",
      name: "Dynamic Theme #789",
      bgPrimary: "hsl(93, 40%, 10%)",
      bgSecondary: "hsl(93, 50%, 15%)",
      textMain: "hsl(93, 90%, 85%)",
      accentGlow: "hsl(213, 100%, 50%)",
      matchedGlow: "hsl(333, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_790", {
      id: "palette_790",
      name: "Dynamic Theme #790",
      bgPrimary: "hsl(110, 40%, 10%)",
      bgSecondary: "hsl(110, 50%, 15%)",
      textMain: "hsl(110, 90%, 85%)",
      accentGlow: "hsl(230, 100%, 50%)",
      matchedGlow: "hsl(350, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_791", {
      id: "palette_791",
      name: "Dynamic Theme #791",
      bgPrimary: "hsl(127, 40%, 10%)",
      bgSecondary: "hsl(127, 50%, 15%)",
      textMain: "hsl(127, 90%, 85%)",
      accentGlow: "hsl(247, 100%, 50%)",
      matchedGlow: "hsl(7, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_792", {
      id: "palette_792",
      name: "Dynamic Theme #792",
      bgPrimary: "hsl(144, 40%, 10%)",
      bgSecondary: "hsl(144, 50%, 15%)",
      textMain: "hsl(144, 90%, 85%)",
      accentGlow: "hsl(264, 100%, 50%)",
      matchedGlow: "hsl(24, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_793", {
      id: "palette_793",
      name: "Dynamic Theme #793",
      bgPrimary: "hsl(161, 40%, 10%)",
      bgSecondary: "hsl(161, 50%, 15%)",
      textMain: "hsl(161, 90%, 85%)",
      accentGlow: "hsl(281, 100%, 50%)",
      matchedGlow: "hsl(41, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_794", {
      id: "palette_794",
      name: "Dynamic Theme #794",
      bgPrimary: "hsl(178, 40%, 10%)",
      bgSecondary: "hsl(178, 50%, 15%)",
      textMain: "hsl(178, 90%, 85%)",
      accentGlow: "hsl(298, 100%, 50%)",
      matchedGlow: "hsl(58, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_795", {
      id: "palette_795",
      name: "Dynamic Theme #795",
      bgPrimary: "hsl(195, 40%, 10%)",
      bgSecondary: "hsl(195, 50%, 15%)",
      textMain: "hsl(195, 90%, 85%)",
      accentGlow: "hsl(315, 100%, 50%)",
      matchedGlow: "hsl(75, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_796", {
      id: "palette_796",
      name: "Dynamic Theme #796",
      bgPrimary: "hsl(212, 40%, 10%)",
      bgSecondary: "hsl(212, 50%, 15%)",
      textMain: "hsl(212, 90%, 85%)",
      accentGlow: "hsl(332, 100%, 50%)",
      matchedGlow: "hsl(92, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_797", {
      id: "palette_797",
      name: "Dynamic Theme #797",
      bgPrimary: "hsl(229, 40%, 10%)",
      bgSecondary: "hsl(229, 50%, 15%)",
      textMain: "hsl(229, 90%, 85%)",
      accentGlow: "hsl(349, 100%, 50%)",
      matchedGlow: "hsl(109, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_798", {
      id: "palette_798",
      name: "Dynamic Theme #798",
      bgPrimary: "hsl(246, 40%, 10%)",
      bgSecondary: "hsl(246, 50%, 15%)",
      textMain: "hsl(246, 90%, 85%)",
      accentGlow: "hsl(6, 100%, 50%)",
      matchedGlow: "hsl(126, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_799", {
      id: "palette_799",
      name: "Dynamic Theme #799",
      bgPrimary: "hsl(263, 40%, 10%)",
      bgSecondary: "hsl(263, 50%, 15%)",
      textMain: "hsl(263, 90%, 85%)",
      accentGlow: "hsl(23, 100%, 50%)",
      matchedGlow: "hsl(143, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_800", {
      id: "palette_800",
      name: "Dynamic Theme #800",
      bgPrimary: "hsl(280, 40%, 10%)",
      bgSecondary: "hsl(280, 50%, 15%)",
      textMain: "hsl(280, 90%, 85%)",
      accentGlow: "hsl(40, 100%, 50%)",
      matchedGlow: "hsl(160, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_801", {
      id: "palette_801",
      name: "Dynamic Theme #801",
      bgPrimary: "hsl(297, 40%, 10%)",
      bgSecondary: "hsl(297, 50%, 15%)",
      textMain: "hsl(297, 90%, 85%)",
      accentGlow: "hsl(57, 100%, 50%)",
      matchedGlow: "hsl(177, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_802", {
      id: "palette_802",
      name: "Dynamic Theme #802",
      bgPrimary: "hsl(314, 40%, 10%)",
      bgSecondary: "hsl(314, 50%, 15%)",
      textMain: "hsl(314, 90%, 85%)",
      accentGlow: "hsl(74, 100%, 50%)",
      matchedGlow: "hsl(194, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_803", {
      id: "palette_803",
      name: "Dynamic Theme #803",
      bgPrimary: "hsl(331, 40%, 10%)",
      bgSecondary: "hsl(331, 50%, 15%)",
      textMain: "hsl(331, 90%, 85%)",
      accentGlow: "hsl(91, 100%, 50%)",
      matchedGlow: "hsl(211, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_804", {
      id: "palette_804",
      name: "Dynamic Theme #804",
      bgPrimary: "hsl(348, 40%, 10%)",
      bgSecondary: "hsl(348, 50%, 15%)",
      textMain: "hsl(348, 90%, 85%)",
      accentGlow: "hsl(108, 100%, 50%)",
      matchedGlow: "hsl(228, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_805", {
      id: "palette_805",
      name: "Dynamic Theme #805",
      bgPrimary: "hsl(5, 40%, 10%)",
      bgSecondary: "hsl(5, 50%, 15%)",
      textMain: "hsl(5, 90%, 85%)",
      accentGlow: "hsl(125, 100%, 50%)",
      matchedGlow: "hsl(245, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_806", {
      id: "palette_806",
      name: "Dynamic Theme #806",
      bgPrimary: "hsl(22, 40%, 10%)",
      bgSecondary: "hsl(22, 50%, 15%)",
      textMain: "hsl(22, 90%, 85%)",
      accentGlow: "hsl(142, 100%, 50%)",
      matchedGlow: "hsl(262, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_807", {
      id: "palette_807",
      name: "Dynamic Theme #807",
      bgPrimary: "hsl(39, 40%, 10%)",
      bgSecondary: "hsl(39, 50%, 15%)",
      textMain: "hsl(39, 90%, 85%)",
      accentGlow: "hsl(159, 100%, 50%)",
      matchedGlow: "hsl(279, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_808", {
      id: "palette_808",
      name: "Dynamic Theme #808",
      bgPrimary: "hsl(56, 40%, 10%)",
      bgSecondary: "hsl(56, 50%, 15%)",
      textMain: "hsl(56, 90%, 85%)",
      accentGlow: "hsl(176, 100%, 50%)",
      matchedGlow: "hsl(296, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_809", {
      id: "palette_809",
      name: "Dynamic Theme #809",
      bgPrimary: "hsl(73, 40%, 10%)",
      bgSecondary: "hsl(73, 50%, 15%)",
      textMain: "hsl(73, 90%, 85%)",
      accentGlow: "hsl(193, 100%, 50%)",
      matchedGlow: "hsl(313, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_810", {
      id: "palette_810",
      name: "Dynamic Theme #810",
      bgPrimary: "hsl(90, 40%, 10%)",
      bgSecondary: "hsl(90, 50%, 15%)",
      textMain: "hsl(90, 90%, 85%)",
      accentGlow: "hsl(210, 100%, 50%)",
      matchedGlow: "hsl(330, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_811", {
      id: "palette_811",
      name: "Dynamic Theme #811",
      bgPrimary: "hsl(107, 40%, 10%)",
      bgSecondary: "hsl(107, 50%, 15%)",
      textMain: "hsl(107, 90%, 85%)",
      accentGlow: "hsl(227, 100%, 50%)",
      matchedGlow: "hsl(347, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_812", {
      id: "palette_812",
      name: "Dynamic Theme #812",
      bgPrimary: "hsl(124, 40%, 10%)",
      bgSecondary: "hsl(124, 50%, 15%)",
      textMain: "hsl(124, 90%, 85%)",
      accentGlow: "hsl(244, 100%, 50%)",
      matchedGlow: "hsl(4, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_813", {
      id: "palette_813",
      name: "Dynamic Theme #813",
      bgPrimary: "hsl(141, 40%, 10%)",
      bgSecondary: "hsl(141, 50%, 15%)",
      textMain: "hsl(141, 90%, 85%)",
      accentGlow: "hsl(261, 100%, 50%)",
      matchedGlow: "hsl(21, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_814", {
      id: "palette_814",
      name: "Dynamic Theme #814",
      bgPrimary: "hsl(158, 40%, 10%)",
      bgSecondary: "hsl(158, 50%, 15%)",
      textMain: "hsl(158, 90%, 85%)",
      accentGlow: "hsl(278, 100%, 50%)",
      matchedGlow: "hsl(38, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_815", {
      id: "palette_815",
      name: "Dynamic Theme #815",
      bgPrimary: "hsl(175, 40%, 10%)",
      bgSecondary: "hsl(175, 50%, 15%)",
      textMain: "hsl(175, 90%, 85%)",
      accentGlow: "hsl(295, 100%, 50%)",
      matchedGlow: "hsl(55, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_816", {
      id: "palette_816",
      name: "Dynamic Theme #816",
      bgPrimary: "hsl(192, 40%, 10%)",
      bgSecondary: "hsl(192, 50%, 15%)",
      textMain: "hsl(192, 90%, 85%)",
      accentGlow: "hsl(312, 100%, 50%)",
      matchedGlow: "hsl(72, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_817", {
      id: "palette_817",
      name: "Dynamic Theme #817",
      bgPrimary: "hsl(209, 40%, 10%)",
      bgSecondary: "hsl(209, 50%, 15%)",
      textMain: "hsl(209, 90%, 85%)",
      accentGlow: "hsl(329, 100%, 50%)",
      matchedGlow: "hsl(89, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_818", {
      id: "palette_818",
      name: "Dynamic Theme #818",
      bgPrimary: "hsl(226, 40%, 10%)",
      bgSecondary: "hsl(226, 50%, 15%)",
      textMain: "hsl(226, 90%, 85%)",
      accentGlow: "hsl(346, 100%, 50%)",
      matchedGlow: "hsl(106, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_819", {
      id: "palette_819",
      name: "Dynamic Theme #819",
      bgPrimary: "hsl(243, 40%, 10%)",
      bgSecondary: "hsl(243, 50%, 15%)",
      textMain: "hsl(243, 90%, 85%)",
      accentGlow: "hsl(3, 100%, 50%)",
      matchedGlow: "hsl(123, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_820", {
      id: "palette_820",
      name: "Dynamic Theme #820",
      bgPrimary: "hsl(260, 40%, 10%)",
      bgSecondary: "hsl(260, 50%, 15%)",
      textMain: "hsl(260, 90%, 85%)",
      accentGlow: "hsl(20, 100%, 50%)",
      matchedGlow: "hsl(140, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_821", {
      id: "palette_821",
      name: "Dynamic Theme #821",
      bgPrimary: "hsl(277, 40%, 10%)",
      bgSecondary: "hsl(277, 50%, 15%)",
      textMain: "hsl(277, 90%, 85%)",
      accentGlow: "hsl(37, 100%, 50%)",
      matchedGlow: "hsl(157, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_822", {
      id: "palette_822",
      name: "Dynamic Theme #822",
      bgPrimary: "hsl(294, 40%, 10%)",
      bgSecondary: "hsl(294, 50%, 15%)",
      textMain: "hsl(294, 90%, 85%)",
      accentGlow: "hsl(54, 100%, 50%)",
      matchedGlow: "hsl(174, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_823", {
      id: "palette_823",
      name: "Dynamic Theme #823",
      bgPrimary: "hsl(311, 40%, 10%)",
      bgSecondary: "hsl(311, 50%, 15%)",
      textMain: "hsl(311, 90%, 85%)",
      accentGlow: "hsl(71, 100%, 50%)",
      matchedGlow: "hsl(191, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_824", {
      id: "palette_824",
      name: "Dynamic Theme #824",
      bgPrimary: "hsl(328, 40%, 10%)",
      bgSecondary: "hsl(328, 50%, 15%)",
      textMain: "hsl(328, 90%, 85%)",
      accentGlow: "hsl(88, 100%, 50%)",
      matchedGlow: "hsl(208, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_825", {
      id: "palette_825",
      name: "Dynamic Theme #825",
      bgPrimary: "hsl(345, 40%, 10%)",
      bgSecondary: "hsl(345, 50%, 15%)",
      textMain: "hsl(345, 90%, 85%)",
      accentGlow: "hsl(105, 100%, 50%)",
      matchedGlow: "hsl(225, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_826", {
      id: "palette_826",
      name: "Dynamic Theme #826",
      bgPrimary: "hsl(2, 40%, 10%)",
      bgSecondary: "hsl(2, 50%, 15%)",
      textMain: "hsl(2, 90%, 85%)",
      accentGlow: "hsl(122, 100%, 50%)",
      matchedGlow: "hsl(242, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_827", {
      id: "palette_827",
      name: "Dynamic Theme #827",
      bgPrimary: "hsl(19, 40%, 10%)",
      bgSecondary: "hsl(19, 50%, 15%)",
      textMain: "hsl(19, 90%, 85%)",
      accentGlow: "hsl(139, 100%, 50%)",
      matchedGlow: "hsl(259, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_828", {
      id: "palette_828",
      name: "Dynamic Theme #828",
      bgPrimary: "hsl(36, 40%, 10%)",
      bgSecondary: "hsl(36, 50%, 15%)",
      textMain: "hsl(36, 90%, 85%)",
      accentGlow: "hsl(156, 100%, 50%)",
      matchedGlow: "hsl(276, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_829", {
      id: "palette_829",
      name: "Dynamic Theme #829",
      bgPrimary: "hsl(53, 40%, 10%)",
      bgSecondary: "hsl(53, 50%, 15%)",
      textMain: "hsl(53, 90%, 85%)",
      accentGlow: "hsl(173, 100%, 50%)",
      matchedGlow: "hsl(293, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_830", {
      id: "palette_830",
      name: "Dynamic Theme #830",
      bgPrimary: "hsl(70, 40%, 10%)",
      bgSecondary: "hsl(70, 50%, 15%)",
      textMain: "hsl(70, 90%, 85%)",
      accentGlow: "hsl(190, 100%, 50%)",
      matchedGlow: "hsl(310, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_831", {
      id: "palette_831",
      name: "Dynamic Theme #831",
      bgPrimary: "hsl(87, 40%, 10%)",
      bgSecondary: "hsl(87, 50%, 15%)",
      textMain: "hsl(87, 90%, 85%)",
      accentGlow: "hsl(207, 100%, 50%)",
      matchedGlow: "hsl(327, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_832", {
      id: "palette_832",
      name: "Dynamic Theme #832",
      bgPrimary: "hsl(104, 40%, 10%)",
      bgSecondary: "hsl(104, 50%, 15%)",
      textMain: "hsl(104, 90%, 85%)",
      accentGlow: "hsl(224, 100%, 50%)",
      matchedGlow: "hsl(344, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_833", {
      id: "palette_833",
      name: "Dynamic Theme #833",
      bgPrimary: "hsl(121, 40%, 10%)",
      bgSecondary: "hsl(121, 50%, 15%)",
      textMain: "hsl(121, 90%, 85%)",
      accentGlow: "hsl(241, 100%, 50%)",
      matchedGlow: "hsl(1, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_834", {
      id: "palette_834",
      name: "Dynamic Theme #834",
      bgPrimary: "hsl(138, 40%, 10%)",
      bgSecondary: "hsl(138, 50%, 15%)",
      textMain: "hsl(138, 90%, 85%)",
      accentGlow: "hsl(258, 100%, 50%)",
      matchedGlow: "hsl(18, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_835", {
      id: "palette_835",
      name: "Dynamic Theme #835",
      bgPrimary: "hsl(155, 40%, 10%)",
      bgSecondary: "hsl(155, 50%, 15%)",
      textMain: "hsl(155, 90%, 85%)",
      accentGlow: "hsl(275, 100%, 50%)",
      matchedGlow: "hsl(35, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_836", {
      id: "palette_836",
      name: "Dynamic Theme #836",
      bgPrimary: "hsl(172, 40%, 10%)",
      bgSecondary: "hsl(172, 50%, 15%)",
      textMain: "hsl(172, 90%, 85%)",
      accentGlow: "hsl(292, 100%, 50%)",
      matchedGlow: "hsl(52, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_837", {
      id: "palette_837",
      name: "Dynamic Theme #837",
      bgPrimary: "hsl(189, 40%, 10%)",
      bgSecondary: "hsl(189, 50%, 15%)",
      textMain: "hsl(189, 90%, 85%)",
      accentGlow: "hsl(309, 100%, 50%)",
      matchedGlow: "hsl(69, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_838", {
      id: "palette_838",
      name: "Dynamic Theme #838",
      bgPrimary: "hsl(206, 40%, 10%)",
      bgSecondary: "hsl(206, 50%, 15%)",
      textMain: "hsl(206, 90%, 85%)",
      accentGlow: "hsl(326, 100%, 50%)",
      matchedGlow: "hsl(86, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_839", {
      id: "palette_839",
      name: "Dynamic Theme #839",
      bgPrimary: "hsl(223, 40%, 10%)",
      bgSecondary: "hsl(223, 50%, 15%)",
      textMain: "hsl(223, 90%, 85%)",
      accentGlow: "hsl(343, 100%, 50%)",
      matchedGlow: "hsl(103, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_840", {
      id: "palette_840",
      name: "Dynamic Theme #840",
      bgPrimary: "hsl(240, 40%, 10%)",
      bgSecondary: "hsl(240, 50%, 15%)",
      textMain: "hsl(240, 90%, 85%)",
      accentGlow: "hsl(0, 100%, 50%)",
      matchedGlow: "hsl(120, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_841", {
      id: "palette_841",
      name: "Dynamic Theme #841",
      bgPrimary: "hsl(257, 40%, 10%)",
      bgSecondary: "hsl(257, 50%, 15%)",
      textMain: "hsl(257, 90%, 85%)",
      accentGlow: "hsl(17, 100%, 50%)",
      matchedGlow: "hsl(137, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_842", {
      id: "palette_842",
      name: "Dynamic Theme #842",
      bgPrimary: "hsl(274, 40%, 10%)",
      bgSecondary: "hsl(274, 50%, 15%)",
      textMain: "hsl(274, 90%, 85%)",
      accentGlow: "hsl(34, 100%, 50%)",
      matchedGlow: "hsl(154, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_843", {
      id: "palette_843",
      name: "Dynamic Theme #843",
      bgPrimary: "hsl(291, 40%, 10%)",
      bgSecondary: "hsl(291, 50%, 15%)",
      textMain: "hsl(291, 90%, 85%)",
      accentGlow: "hsl(51, 100%, 50%)",
      matchedGlow: "hsl(171, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_844", {
      id: "palette_844",
      name: "Dynamic Theme #844",
      bgPrimary: "hsl(308, 40%, 10%)",
      bgSecondary: "hsl(308, 50%, 15%)",
      textMain: "hsl(308, 90%, 85%)",
      accentGlow: "hsl(68, 100%, 50%)",
      matchedGlow: "hsl(188, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_845", {
      id: "palette_845",
      name: "Dynamic Theme #845",
      bgPrimary: "hsl(325, 40%, 10%)",
      bgSecondary: "hsl(325, 50%, 15%)",
      textMain: "hsl(325, 90%, 85%)",
      accentGlow: "hsl(85, 100%, 50%)",
      matchedGlow: "hsl(205, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_846", {
      id: "palette_846",
      name: "Dynamic Theme #846",
      bgPrimary: "hsl(342, 40%, 10%)",
      bgSecondary: "hsl(342, 50%, 15%)",
      textMain: "hsl(342, 90%, 85%)",
      accentGlow: "hsl(102, 100%, 50%)",
      matchedGlow: "hsl(222, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_847", {
      id: "palette_847",
      name: "Dynamic Theme #847",
      bgPrimary: "hsl(359, 40%, 10%)",
      bgSecondary: "hsl(359, 50%, 15%)",
      textMain: "hsl(359, 90%, 85%)",
      accentGlow: "hsl(119, 100%, 50%)",
      matchedGlow: "hsl(239, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_848", {
      id: "palette_848",
      name: "Dynamic Theme #848",
      bgPrimary: "hsl(16, 40%, 10%)",
      bgSecondary: "hsl(16, 50%, 15%)",
      textMain: "hsl(16, 90%, 85%)",
      accentGlow: "hsl(136, 100%, 50%)",
      matchedGlow: "hsl(256, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_849", {
      id: "palette_849",
      name: "Dynamic Theme #849",
      bgPrimary: "hsl(33, 40%, 10%)",
      bgSecondary: "hsl(33, 50%, 15%)",
      textMain: "hsl(33, 90%, 85%)",
      accentGlow: "hsl(153, 100%, 50%)",
      matchedGlow: "hsl(273, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_850", {
      id: "palette_850",
      name: "Dynamic Theme #850",
      bgPrimary: "hsl(50, 40%, 10%)",
      bgSecondary: "hsl(50, 50%, 15%)",
      textMain: "hsl(50, 90%, 85%)",
      accentGlow: "hsl(170, 100%, 50%)",
      matchedGlow: "hsl(290, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_851", {
      id: "palette_851",
      name: "Dynamic Theme #851",
      bgPrimary: "hsl(67, 40%, 10%)",
      bgSecondary: "hsl(67, 50%, 15%)",
      textMain: "hsl(67, 90%, 85%)",
      accentGlow: "hsl(187, 100%, 50%)",
      matchedGlow: "hsl(307, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_852", {
      id: "palette_852",
      name: "Dynamic Theme #852",
      bgPrimary: "hsl(84, 40%, 10%)",
      bgSecondary: "hsl(84, 50%, 15%)",
      textMain: "hsl(84, 90%, 85%)",
      accentGlow: "hsl(204, 100%, 50%)",
      matchedGlow: "hsl(324, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_853", {
      id: "palette_853",
      name: "Dynamic Theme #853",
      bgPrimary: "hsl(101, 40%, 10%)",
      bgSecondary: "hsl(101, 50%, 15%)",
      textMain: "hsl(101, 90%, 85%)",
      accentGlow: "hsl(221, 100%, 50%)",
      matchedGlow: "hsl(341, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_854", {
      id: "palette_854",
      name: "Dynamic Theme #854",
      bgPrimary: "hsl(118, 40%, 10%)",
      bgSecondary: "hsl(118, 50%, 15%)",
      textMain: "hsl(118, 90%, 85%)",
      accentGlow: "hsl(238, 100%, 50%)",
      matchedGlow: "hsl(358, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_855", {
      id: "palette_855",
      name: "Dynamic Theme #855",
      bgPrimary: "hsl(135, 40%, 10%)",
      bgSecondary: "hsl(135, 50%, 15%)",
      textMain: "hsl(135, 90%, 85%)",
      accentGlow: "hsl(255, 100%, 50%)",
      matchedGlow: "hsl(15, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_856", {
      id: "palette_856",
      name: "Dynamic Theme #856",
      bgPrimary: "hsl(152, 40%, 10%)",
      bgSecondary: "hsl(152, 50%, 15%)",
      textMain: "hsl(152, 90%, 85%)",
      accentGlow: "hsl(272, 100%, 50%)",
      matchedGlow: "hsl(32, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_857", {
      id: "palette_857",
      name: "Dynamic Theme #857",
      bgPrimary: "hsl(169, 40%, 10%)",
      bgSecondary: "hsl(169, 50%, 15%)",
      textMain: "hsl(169, 90%, 85%)",
      accentGlow: "hsl(289, 100%, 50%)",
      matchedGlow: "hsl(49, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_858", {
      id: "palette_858",
      name: "Dynamic Theme #858",
      bgPrimary: "hsl(186, 40%, 10%)",
      bgSecondary: "hsl(186, 50%, 15%)",
      textMain: "hsl(186, 90%, 85%)",
      accentGlow: "hsl(306, 100%, 50%)",
      matchedGlow: "hsl(66, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_859", {
      id: "palette_859",
      name: "Dynamic Theme #859",
      bgPrimary: "hsl(203, 40%, 10%)",
      bgSecondary: "hsl(203, 50%, 15%)",
      textMain: "hsl(203, 90%, 85%)",
      accentGlow: "hsl(323, 100%, 50%)",
      matchedGlow: "hsl(83, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_860", {
      id: "palette_860",
      name: "Dynamic Theme #860",
      bgPrimary: "hsl(220, 40%, 10%)",
      bgSecondary: "hsl(220, 50%, 15%)",
      textMain: "hsl(220, 90%, 85%)",
      accentGlow: "hsl(340, 100%, 50%)",
      matchedGlow: "hsl(100, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_861", {
      id: "palette_861",
      name: "Dynamic Theme #861",
      bgPrimary: "hsl(237, 40%, 10%)",
      bgSecondary: "hsl(237, 50%, 15%)",
      textMain: "hsl(237, 90%, 85%)",
      accentGlow: "hsl(357, 100%, 50%)",
      matchedGlow: "hsl(117, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_862", {
      id: "palette_862",
      name: "Dynamic Theme #862",
      bgPrimary: "hsl(254, 40%, 10%)",
      bgSecondary: "hsl(254, 50%, 15%)",
      textMain: "hsl(254, 90%, 85%)",
      accentGlow: "hsl(14, 100%, 50%)",
      matchedGlow: "hsl(134, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_863", {
      id: "palette_863",
      name: "Dynamic Theme #863",
      bgPrimary: "hsl(271, 40%, 10%)",
      bgSecondary: "hsl(271, 50%, 15%)",
      textMain: "hsl(271, 90%, 85%)",
      accentGlow: "hsl(31, 100%, 50%)",
      matchedGlow: "hsl(151, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_864", {
      id: "palette_864",
      name: "Dynamic Theme #864",
      bgPrimary: "hsl(288, 40%, 10%)",
      bgSecondary: "hsl(288, 50%, 15%)",
      textMain: "hsl(288, 90%, 85%)",
      accentGlow: "hsl(48, 100%, 50%)",
      matchedGlow: "hsl(168, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_865", {
      id: "palette_865",
      name: "Dynamic Theme #865",
      bgPrimary: "hsl(305, 40%, 10%)",
      bgSecondary: "hsl(305, 50%, 15%)",
      textMain: "hsl(305, 90%, 85%)",
      accentGlow: "hsl(65, 100%, 50%)",
      matchedGlow: "hsl(185, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_866", {
      id: "palette_866",
      name: "Dynamic Theme #866",
      bgPrimary: "hsl(322, 40%, 10%)",
      bgSecondary: "hsl(322, 50%, 15%)",
      textMain: "hsl(322, 90%, 85%)",
      accentGlow: "hsl(82, 100%, 50%)",
      matchedGlow: "hsl(202, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_867", {
      id: "palette_867",
      name: "Dynamic Theme #867",
      bgPrimary: "hsl(339, 40%, 10%)",
      bgSecondary: "hsl(339, 50%, 15%)",
      textMain: "hsl(339, 90%, 85%)",
      accentGlow: "hsl(99, 100%, 50%)",
      matchedGlow: "hsl(219, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_868", {
      id: "palette_868",
      name: "Dynamic Theme #868",
      bgPrimary: "hsl(356, 40%, 10%)",
      bgSecondary: "hsl(356, 50%, 15%)",
      textMain: "hsl(356, 90%, 85%)",
      accentGlow: "hsl(116, 100%, 50%)",
      matchedGlow: "hsl(236, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_869", {
      id: "palette_869",
      name: "Dynamic Theme #869",
      bgPrimary: "hsl(13, 40%, 10%)",
      bgSecondary: "hsl(13, 50%, 15%)",
      textMain: "hsl(13, 90%, 85%)",
      accentGlow: "hsl(133, 100%, 50%)",
      matchedGlow: "hsl(253, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_870", {
      id: "palette_870",
      name: "Dynamic Theme #870",
      bgPrimary: "hsl(30, 40%, 10%)",
      bgSecondary: "hsl(30, 50%, 15%)",
      textMain: "hsl(30, 90%, 85%)",
      accentGlow: "hsl(150, 100%, 50%)",
      matchedGlow: "hsl(270, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_871", {
      id: "palette_871",
      name: "Dynamic Theme #871",
      bgPrimary: "hsl(47, 40%, 10%)",
      bgSecondary: "hsl(47, 50%, 15%)",
      textMain: "hsl(47, 90%, 85%)",
      accentGlow: "hsl(167, 100%, 50%)",
      matchedGlow: "hsl(287, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_872", {
      id: "palette_872",
      name: "Dynamic Theme #872",
      bgPrimary: "hsl(64, 40%, 10%)",
      bgSecondary: "hsl(64, 50%, 15%)",
      textMain: "hsl(64, 90%, 85%)",
      accentGlow: "hsl(184, 100%, 50%)",
      matchedGlow: "hsl(304, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_873", {
      id: "palette_873",
      name: "Dynamic Theme #873",
      bgPrimary: "hsl(81, 40%, 10%)",
      bgSecondary: "hsl(81, 50%, 15%)",
      textMain: "hsl(81, 90%, 85%)",
      accentGlow: "hsl(201, 100%, 50%)",
      matchedGlow: "hsl(321, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_874", {
      id: "palette_874",
      name: "Dynamic Theme #874",
      bgPrimary: "hsl(98, 40%, 10%)",
      bgSecondary: "hsl(98, 50%, 15%)",
      textMain: "hsl(98, 90%, 85%)",
      accentGlow: "hsl(218, 100%, 50%)",
      matchedGlow: "hsl(338, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_875", {
      id: "palette_875",
      name: "Dynamic Theme #875",
      bgPrimary: "hsl(115, 40%, 10%)",
      bgSecondary: "hsl(115, 50%, 15%)",
      textMain: "hsl(115, 90%, 85%)",
      accentGlow: "hsl(235, 100%, 50%)",
      matchedGlow: "hsl(355, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_876", {
      id: "palette_876",
      name: "Dynamic Theme #876",
      bgPrimary: "hsl(132, 40%, 10%)",
      bgSecondary: "hsl(132, 50%, 15%)",
      textMain: "hsl(132, 90%, 85%)",
      accentGlow: "hsl(252, 100%, 50%)",
      matchedGlow: "hsl(12, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_877", {
      id: "palette_877",
      name: "Dynamic Theme #877",
      bgPrimary: "hsl(149, 40%, 10%)",
      bgSecondary: "hsl(149, 50%, 15%)",
      textMain: "hsl(149, 90%, 85%)",
      accentGlow: "hsl(269, 100%, 50%)",
      matchedGlow: "hsl(29, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_878", {
      id: "palette_878",
      name: "Dynamic Theme #878",
      bgPrimary: "hsl(166, 40%, 10%)",
      bgSecondary: "hsl(166, 50%, 15%)",
      textMain: "hsl(166, 90%, 85%)",
      accentGlow: "hsl(286, 100%, 50%)",
      matchedGlow: "hsl(46, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_879", {
      id: "palette_879",
      name: "Dynamic Theme #879",
      bgPrimary: "hsl(183, 40%, 10%)",
      bgSecondary: "hsl(183, 50%, 15%)",
      textMain: "hsl(183, 90%, 85%)",
      accentGlow: "hsl(303, 100%, 50%)",
      matchedGlow: "hsl(63, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_880", {
      id: "palette_880",
      name: "Dynamic Theme #880",
      bgPrimary: "hsl(200, 40%, 10%)",
      bgSecondary: "hsl(200, 50%, 15%)",
      textMain: "hsl(200, 90%, 85%)",
      accentGlow: "hsl(320, 100%, 50%)",
      matchedGlow: "hsl(80, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_881", {
      id: "palette_881",
      name: "Dynamic Theme #881",
      bgPrimary: "hsl(217, 40%, 10%)",
      bgSecondary: "hsl(217, 50%, 15%)",
      textMain: "hsl(217, 90%, 85%)",
      accentGlow: "hsl(337, 100%, 50%)",
      matchedGlow: "hsl(97, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_882", {
      id: "palette_882",
      name: "Dynamic Theme #882",
      bgPrimary: "hsl(234, 40%, 10%)",
      bgSecondary: "hsl(234, 50%, 15%)",
      textMain: "hsl(234, 90%, 85%)",
      accentGlow: "hsl(354, 100%, 50%)",
      matchedGlow: "hsl(114, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_883", {
      id: "palette_883",
      name: "Dynamic Theme #883",
      bgPrimary: "hsl(251, 40%, 10%)",
      bgSecondary: "hsl(251, 50%, 15%)",
      textMain: "hsl(251, 90%, 85%)",
      accentGlow: "hsl(11, 100%, 50%)",
      matchedGlow: "hsl(131, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_884", {
      id: "palette_884",
      name: "Dynamic Theme #884",
      bgPrimary: "hsl(268, 40%, 10%)",
      bgSecondary: "hsl(268, 50%, 15%)",
      textMain: "hsl(268, 90%, 85%)",
      accentGlow: "hsl(28, 100%, 50%)",
      matchedGlow: "hsl(148, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_885", {
      id: "palette_885",
      name: "Dynamic Theme #885",
      bgPrimary: "hsl(285, 40%, 10%)",
      bgSecondary: "hsl(285, 50%, 15%)",
      textMain: "hsl(285, 90%, 85%)",
      accentGlow: "hsl(45, 100%, 50%)",
      matchedGlow: "hsl(165, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_886", {
      id: "palette_886",
      name: "Dynamic Theme #886",
      bgPrimary: "hsl(302, 40%, 10%)",
      bgSecondary: "hsl(302, 50%, 15%)",
      textMain: "hsl(302, 90%, 85%)",
      accentGlow: "hsl(62, 100%, 50%)",
      matchedGlow: "hsl(182, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_887", {
      id: "palette_887",
      name: "Dynamic Theme #887",
      bgPrimary: "hsl(319, 40%, 10%)",
      bgSecondary: "hsl(319, 50%, 15%)",
      textMain: "hsl(319, 90%, 85%)",
      accentGlow: "hsl(79, 100%, 50%)",
      matchedGlow: "hsl(199, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_888", {
      id: "palette_888",
      name: "Dynamic Theme #888",
      bgPrimary: "hsl(336, 40%, 10%)",
      bgSecondary: "hsl(336, 50%, 15%)",
      textMain: "hsl(336, 90%, 85%)",
      accentGlow: "hsl(96, 100%, 50%)",
      matchedGlow: "hsl(216, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_889", {
      id: "palette_889",
      name: "Dynamic Theme #889",
      bgPrimary: "hsl(353, 40%, 10%)",
      bgSecondary: "hsl(353, 50%, 15%)",
      textMain: "hsl(353, 90%, 85%)",
      accentGlow: "hsl(113, 100%, 50%)",
      matchedGlow: "hsl(233, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_890", {
      id: "palette_890",
      name: "Dynamic Theme #890",
      bgPrimary: "hsl(10, 40%, 10%)",
      bgSecondary: "hsl(10, 50%, 15%)",
      textMain: "hsl(10, 90%, 85%)",
      accentGlow: "hsl(130, 100%, 50%)",
      matchedGlow: "hsl(250, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_891", {
      id: "palette_891",
      name: "Dynamic Theme #891",
      bgPrimary: "hsl(27, 40%, 10%)",
      bgSecondary: "hsl(27, 50%, 15%)",
      textMain: "hsl(27, 90%, 85%)",
      accentGlow: "hsl(147, 100%, 50%)",
      matchedGlow: "hsl(267, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_892", {
      id: "palette_892",
      name: "Dynamic Theme #892",
      bgPrimary: "hsl(44, 40%, 10%)",
      bgSecondary: "hsl(44, 50%, 15%)",
      textMain: "hsl(44, 90%, 85%)",
      accentGlow: "hsl(164, 100%, 50%)",
      matchedGlow: "hsl(284, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_893", {
      id: "palette_893",
      name: "Dynamic Theme #893",
      bgPrimary: "hsl(61, 40%, 10%)",
      bgSecondary: "hsl(61, 50%, 15%)",
      textMain: "hsl(61, 90%, 85%)",
      accentGlow: "hsl(181, 100%, 50%)",
      matchedGlow: "hsl(301, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_894", {
      id: "palette_894",
      name: "Dynamic Theme #894",
      bgPrimary: "hsl(78, 40%, 10%)",
      bgSecondary: "hsl(78, 50%, 15%)",
      textMain: "hsl(78, 90%, 85%)",
      accentGlow: "hsl(198, 100%, 50%)",
      matchedGlow: "hsl(318, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_895", {
      id: "palette_895",
      name: "Dynamic Theme #895",
      bgPrimary: "hsl(95, 40%, 10%)",
      bgSecondary: "hsl(95, 50%, 15%)",
      textMain: "hsl(95, 90%, 85%)",
      accentGlow: "hsl(215, 100%, 50%)",
      matchedGlow: "hsl(335, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_896", {
      id: "palette_896",
      name: "Dynamic Theme #896",
      bgPrimary: "hsl(112, 40%, 10%)",
      bgSecondary: "hsl(112, 50%, 15%)",
      textMain: "hsl(112, 90%, 85%)",
      accentGlow: "hsl(232, 100%, 50%)",
      matchedGlow: "hsl(352, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_897", {
      id: "palette_897",
      name: "Dynamic Theme #897",
      bgPrimary: "hsl(129, 40%, 10%)",
      bgSecondary: "hsl(129, 50%, 15%)",
      textMain: "hsl(129, 90%, 85%)",
      accentGlow: "hsl(249, 100%, 50%)",
      matchedGlow: "hsl(9, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_898", {
      id: "palette_898",
      name: "Dynamic Theme #898",
      bgPrimary: "hsl(146, 40%, 10%)",
      bgSecondary: "hsl(146, 50%, 15%)",
      textMain: "hsl(146, 90%, 85%)",
      accentGlow: "hsl(266, 100%, 50%)",
      matchedGlow: "hsl(26, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_899", {
      id: "palette_899",
      name: "Dynamic Theme #899",
      bgPrimary: "hsl(163, 40%, 10%)",
      bgSecondary: "hsl(163, 50%, 15%)",
      textMain: "hsl(163, 90%, 85%)",
      accentGlow: "hsl(283, 100%, 50%)",
      matchedGlow: "hsl(43, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_900", {
      id: "palette_900",
      name: "Dynamic Theme #900",
      bgPrimary: "hsl(180, 40%, 10%)",
      bgSecondary: "hsl(180, 50%, 15%)",
      textMain: "hsl(180, 90%, 85%)",
      accentGlow: "hsl(300, 100%, 50%)",
      matchedGlow: "hsl(60, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_901", {
      id: "palette_901",
      name: "Dynamic Theme #901",
      bgPrimary: "hsl(197, 40%, 10%)",
      bgSecondary: "hsl(197, 50%, 15%)",
      textMain: "hsl(197, 90%, 85%)",
      accentGlow: "hsl(317, 100%, 50%)",
      matchedGlow: "hsl(77, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_902", {
      id: "palette_902",
      name: "Dynamic Theme #902",
      bgPrimary: "hsl(214, 40%, 10%)",
      bgSecondary: "hsl(214, 50%, 15%)",
      textMain: "hsl(214, 90%, 85%)",
      accentGlow: "hsl(334, 100%, 50%)",
      matchedGlow: "hsl(94, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_903", {
      id: "palette_903",
      name: "Dynamic Theme #903",
      bgPrimary: "hsl(231, 40%, 10%)",
      bgSecondary: "hsl(231, 50%, 15%)",
      textMain: "hsl(231, 90%, 85%)",
      accentGlow: "hsl(351, 100%, 50%)",
      matchedGlow: "hsl(111, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_904", {
      id: "palette_904",
      name: "Dynamic Theme #904",
      bgPrimary: "hsl(248, 40%, 10%)",
      bgSecondary: "hsl(248, 50%, 15%)",
      textMain: "hsl(248, 90%, 85%)",
      accentGlow: "hsl(8, 100%, 50%)",
      matchedGlow: "hsl(128, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_905", {
      id: "palette_905",
      name: "Dynamic Theme #905",
      bgPrimary: "hsl(265, 40%, 10%)",
      bgSecondary: "hsl(265, 50%, 15%)",
      textMain: "hsl(265, 90%, 85%)",
      accentGlow: "hsl(25, 100%, 50%)",
      matchedGlow: "hsl(145, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_906", {
      id: "palette_906",
      name: "Dynamic Theme #906",
      bgPrimary: "hsl(282, 40%, 10%)",
      bgSecondary: "hsl(282, 50%, 15%)",
      textMain: "hsl(282, 90%, 85%)",
      accentGlow: "hsl(42, 100%, 50%)",
      matchedGlow: "hsl(162, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_907", {
      id: "palette_907",
      name: "Dynamic Theme #907",
      bgPrimary: "hsl(299, 40%, 10%)",
      bgSecondary: "hsl(299, 50%, 15%)",
      textMain: "hsl(299, 90%, 85%)",
      accentGlow: "hsl(59, 100%, 50%)",
      matchedGlow: "hsl(179, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_908", {
      id: "palette_908",
      name: "Dynamic Theme #908",
      bgPrimary: "hsl(316, 40%, 10%)",
      bgSecondary: "hsl(316, 50%, 15%)",
      textMain: "hsl(316, 90%, 85%)",
      accentGlow: "hsl(76, 100%, 50%)",
      matchedGlow: "hsl(196, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_909", {
      id: "palette_909",
      name: "Dynamic Theme #909",
      bgPrimary: "hsl(333, 40%, 10%)",
      bgSecondary: "hsl(333, 50%, 15%)",
      textMain: "hsl(333, 90%, 85%)",
      accentGlow: "hsl(93, 100%, 50%)",
      matchedGlow: "hsl(213, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_910", {
      id: "palette_910",
      name: "Dynamic Theme #910",
      bgPrimary: "hsl(350, 40%, 10%)",
      bgSecondary: "hsl(350, 50%, 15%)",
      textMain: "hsl(350, 90%, 85%)",
      accentGlow: "hsl(110, 100%, 50%)",
      matchedGlow: "hsl(230, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_911", {
      id: "palette_911",
      name: "Dynamic Theme #911",
      bgPrimary: "hsl(7, 40%, 10%)",
      bgSecondary: "hsl(7, 50%, 15%)",
      textMain: "hsl(7, 90%, 85%)",
      accentGlow: "hsl(127, 100%, 50%)",
      matchedGlow: "hsl(247, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_912", {
      id: "palette_912",
      name: "Dynamic Theme #912",
      bgPrimary: "hsl(24, 40%, 10%)",
      bgSecondary: "hsl(24, 50%, 15%)",
      textMain: "hsl(24, 90%, 85%)",
      accentGlow: "hsl(144, 100%, 50%)",
      matchedGlow: "hsl(264, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_913", {
      id: "palette_913",
      name: "Dynamic Theme #913",
      bgPrimary: "hsl(41, 40%, 10%)",
      bgSecondary: "hsl(41, 50%, 15%)",
      textMain: "hsl(41, 90%, 85%)",
      accentGlow: "hsl(161, 100%, 50%)",
      matchedGlow: "hsl(281, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_914", {
      id: "palette_914",
      name: "Dynamic Theme #914",
      bgPrimary: "hsl(58, 40%, 10%)",
      bgSecondary: "hsl(58, 50%, 15%)",
      textMain: "hsl(58, 90%, 85%)",
      accentGlow: "hsl(178, 100%, 50%)",
      matchedGlow: "hsl(298, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_915", {
      id: "palette_915",
      name: "Dynamic Theme #915",
      bgPrimary: "hsl(75, 40%, 10%)",
      bgSecondary: "hsl(75, 50%, 15%)",
      textMain: "hsl(75, 90%, 85%)",
      accentGlow: "hsl(195, 100%, 50%)",
      matchedGlow: "hsl(315, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_916", {
      id: "palette_916",
      name: "Dynamic Theme #916",
      bgPrimary: "hsl(92, 40%, 10%)",
      bgSecondary: "hsl(92, 50%, 15%)",
      textMain: "hsl(92, 90%, 85%)",
      accentGlow: "hsl(212, 100%, 50%)",
      matchedGlow: "hsl(332, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_917", {
      id: "palette_917",
      name: "Dynamic Theme #917",
      bgPrimary: "hsl(109, 40%, 10%)",
      bgSecondary: "hsl(109, 50%, 15%)",
      textMain: "hsl(109, 90%, 85%)",
      accentGlow: "hsl(229, 100%, 50%)",
      matchedGlow: "hsl(349, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_918", {
      id: "palette_918",
      name: "Dynamic Theme #918",
      bgPrimary: "hsl(126, 40%, 10%)",
      bgSecondary: "hsl(126, 50%, 15%)",
      textMain: "hsl(126, 90%, 85%)",
      accentGlow: "hsl(246, 100%, 50%)",
      matchedGlow: "hsl(6, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_919", {
      id: "palette_919",
      name: "Dynamic Theme #919",
      bgPrimary: "hsl(143, 40%, 10%)",
      bgSecondary: "hsl(143, 50%, 15%)",
      textMain: "hsl(143, 90%, 85%)",
      accentGlow: "hsl(263, 100%, 50%)",
      matchedGlow: "hsl(23, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_920", {
      id: "palette_920",
      name: "Dynamic Theme #920",
      bgPrimary: "hsl(160, 40%, 10%)",
      bgSecondary: "hsl(160, 50%, 15%)",
      textMain: "hsl(160, 90%, 85%)",
      accentGlow: "hsl(280, 100%, 50%)",
      matchedGlow: "hsl(40, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_921", {
      id: "palette_921",
      name: "Dynamic Theme #921",
      bgPrimary: "hsl(177, 40%, 10%)",
      bgSecondary: "hsl(177, 50%, 15%)",
      textMain: "hsl(177, 90%, 85%)",
      accentGlow: "hsl(297, 100%, 50%)",
      matchedGlow: "hsl(57, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_922", {
      id: "palette_922",
      name: "Dynamic Theme #922",
      bgPrimary: "hsl(194, 40%, 10%)",
      bgSecondary: "hsl(194, 50%, 15%)",
      textMain: "hsl(194, 90%, 85%)",
      accentGlow: "hsl(314, 100%, 50%)",
      matchedGlow: "hsl(74, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_923", {
      id: "palette_923",
      name: "Dynamic Theme #923",
      bgPrimary: "hsl(211, 40%, 10%)",
      bgSecondary: "hsl(211, 50%, 15%)",
      textMain: "hsl(211, 90%, 85%)",
      accentGlow: "hsl(331, 100%, 50%)",
      matchedGlow: "hsl(91, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_924", {
      id: "palette_924",
      name: "Dynamic Theme #924",
      bgPrimary: "hsl(228, 40%, 10%)",
      bgSecondary: "hsl(228, 50%, 15%)",
      textMain: "hsl(228, 90%, 85%)",
      accentGlow: "hsl(348, 100%, 50%)",
      matchedGlow: "hsl(108, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_925", {
      id: "palette_925",
      name: "Dynamic Theme #925",
      bgPrimary: "hsl(245, 40%, 10%)",
      bgSecondary: "hsl(245, 50%, 15%)",
      textMain: "hsl(245, 90%, 85%)",
      accentGlow: "hsl(5, 100%, 50%)",
      matchedGlow: "hsl(125, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_926", {
      id: "palette_926",
      name: "Dynamic Theme #926",
      bgPrimary: "hsl(262, 40%, 10%)",
      bgSecondary: "hsl(262, 50%, 15%)",
      textMain: "hsl(262, 90%, 85%)",
      accentGlow: "hsl(22, 100%, 50%)",
      matchedGlow: "hsl(142, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_927", {
      id: "palette_927",
      name: "Dynamic Theme #927",
      bgPrimary: "hsl(279, 40%, 10%)",
      bgSecondary: "hsl(279, 50%, 15%)",
      textMain: "hsl(279, 90%, 85%)",
      accentGlow: "hsl(39, 100%, 50%)",
      matchedGlow: "hsl(159, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_928", {
      id: "palette_928",
      name: "Dynamic Theme #928",
      bgPrimary: "hsl(296, 40%, 10%)",
      bgSecondary: "hsl(296, 50%, 15%)",
      textMain: "hsl(296, 90%, 85%)",
      accentGlow: "hsl(56, 100%, 50%)",
      matchedGlow: "hsl(176, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_929", {
      id: "palette_929",
      name: "Dynamic Theme #929",
      bgPrimary: "hsl(313, 40%, 10%)",
      bgSecondary: "hsl(313, 50%, 15%)",
      textMain: "hsl(313, 90%, 85%)",
      accentGlow: "hsl(73, 100%, 50%)",
      matchedGlow: "hsl(193, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_930", {
      id: "palette_930",
      name: "Dynamic Theme #930",
      bgPrimary: "hsl(330, 40%, 10%)",
      bgSecondary: "hsl(330, 50%, 15%)",
      textMain: "hsl(330, 90%, 85%)",
      accentGlow: "hsl(90, 100%, 50%)",
      matchedGlow: "hsl(210, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_931", {
      id: "palette_931",
      name: "Dynamic Theme #931",
      bgPrimary: "hsl(347, 40%, 10%)",
      bgSecondary: "hsl(347, 50%, 15%)",
      textMain: "hsl(347, 90%, 85%)",
      accentGlow: "hsl(107, 100%, 50%)",
      matchedGlow: "hsl(227, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_932", {
      id: "palette_932",
      name: "Dynamic Theme #932",
      bgPrimary: "hsl(4, 40%, 10%)",
      bgSecondary: "hsl(4, 50%, 15%)",
      textMain: "hsl(4, 90%, 85%)",
      accentGlow: "hsl(124, 100%, 50%)",
      matchedGlow: "hsl(244, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_933", {
      id: "palette_933",
      name: "Dynamic Theme #933",
      bgPrimary: "hsl(21, 40%, 10%)",
      bgSecondary: "hsl(21, 50%, 15%)",
      textMain: "hsl(21, 90%, 85%)",
      accentGlow: "hsl(141, 100%, 50%)",
      matchedGlow: "hsl(261, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_934", {
      id: "palette_934",
      name: "Dynamic Theme #934",
      bgPrimary: "hsl(38, 40%, 10%)",
      bgSecondary: "hsl(38, 50%, 15%)",
      textMain: "hsl(38, 90%, 85%)",
      accentGlow: "hsl(158, 100%, 50%)",
      matchedGlow: "hsl(278, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_935", {
      id: "palette_935",
      name: "Dynamic Theme #935",
      bgPrimary: "hsl(55, 40%, 10%)",
      bgSecondary: "hsl(55, 50%, 15%)",
      textMain: "hsl(55, 90%, 85%)",
      accentGlow: "hsl(175, 100%, 50%)",
      matchedGlow: "hsl(295, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_936", {
      id: "palette_936",
      name: "Dynamic Theme #936",
      bgPrimary: "hsl(72, 40%, 10%)",
      bgSecondary: "hsl(72, 50%, 15%)",
      textMain: "hsl(72, 90%, 85%)",
      accentGlow: "hsl(192, 100%, 50%)",
      matchedGlow: "hsl(312, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_937", {
      id: "palette_937",
      name: "Dynamic Theme #937",
      bgPrimary: "hsl(89, 40%, 10%)",
      bgSecondary: "hsl(89, 50%, 15%)",
      textMain: "hsl(89, 90%, 85%)",
      accentGlow: "hsl(209, 100%, 50%)",
      matchedGlow: "hsl(329, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_938", {
      id: "palette_938",
      name: "Dynamic Theme #938",
      bgPrimary: "hsl(106, 40%, 10%)",
      bgSecondary: "hsl(106, 50%, 15%)",
      textMain: "hsl(106, 90%, 85%)",
      accentGlow: "hsl(226, 100%, 50%)",
      matchedGlow: "hsl(346, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_939", {
      id: "palette_939",
      name: "Dynamic Theme #939",
      bgPrimary: "hsl(123, 40%, 10%)",
      bgSecondary: "hsl(123, 50%, 15%)",
      textMain: "hsl(123, 90%, 85%)",
      accentGlow: "hsl(243, 100%, 50%)",
      matchedGlow: "hsl(3, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_940", {
      id: "palette_940",
      name: "Dynamic Theme #940",
      bgPrimary: "hsl(140, 40%, 10%)",
      bgSecondary: "hsl(140, 50%, 15%)",
      textMain: "hsl(140, 90%, 85%)",
      accentGlow: "hsl(260, 100%, 50%)",
      matchedGlow: "hsl(20, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_941", {
      id: "palette_941",
      name: "Dynamic Theme #941",
      bgPrimary: "hsl(157, 40%, 10%)",
      bgSecondary: "hsl(157, 50%, 15%)",
      textMain: "hsl(157, 90%, 85%)",
      accentGlow: "hsl(277, 100%, 50%)",
      matchedGlow: "hsl(37, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_942", {
      id: "palette_942",
      name: "Dynamic Theme #942",
      bgPrimary: "hsl(174, 40%, 10%)",
      bgSecondary: "hsl(174, 50%, 15%)",
      textMain: "hsl(174, 90%, 85%)",
      accentGlow: "hsl(294, 100%, 50%)",
      matchedGlow: "hsl(54, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_943", {
      id: "palette_943",
      name: "Dynamic Theme #943",
      bgPrimary: "hsl(191, 40%, 10%)",
      bgSecondary: "hsl(191, 50%, 15%)",
      textMain: "hsl(191, 90%, 85%)",
      accentGlow: "hsl(311, 100%, 50%)",
      matchedGlow: "hsl(71, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_944", {
      id: "palette_944",
      name: "Dynamic Theme #944",
      bgPrimary: "hsl(208, 40%, 10%)",
      bgSecondary: "hsl(208, 50%, 15%)",
      textMain: "hsl(208, 90%, 85%)",
      accentGlow: "hsl(328, 100%, 50%)",
      matchedGlow: "hsl(88, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_945", {
      id: "palette_945",
      name: "Dynamic Theme #945",
      bgPrimary: "hsl(225, 40%, 10%)",
      bgSecondary: "hsl(225, 50%, 15%)",
      textMain: "hsl(225, 90%, 85%)",
      accentGlow: "hsl(345, 100%, 50%)",
      matchedGlow: "hsl(105, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_946", {
      id: "palette_946",
      name: "Dynamic Theme #946",
      bgPrimary: "hsl(242, 40%, 10%)",
      bgSecondary: "hsl(242, 50%, 15%)",
      textMain: "hsl(242, 90%, 85%)",
      accentGlow: "hsl(2, 100%, 50%)",
      matchedGlow: "hsl(122, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_947", {
      id: "palette_947",
      name: "Dynamic Theme #947",
      bgPrimary: "hsl(259, 40%, 10%)",
      bgSecondary: "hsl(259, 50%, 15%)",
      textMain: "hsl(259, 90%, 85%)",
      accentGlow: "hsl(19, 100%, 50%)",
      matchedGlow: "hsl(139, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_948", {
      id: "palette_948",
      name: "Dynamic Theme #948",
      bgPrimary: "hsl(276, 40%, 10%)",
      bgSecondary: "hsl(276, 50%, 15%)",
      textMain: "hsl(276, 90%, 85%)",
      accentGlow: "hsl(36, 100%, 50%)",
      matchedGlow: "hsl(156, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_949", {
      id: "palette_949",
      name: "Dynamic Theme #949",
      bgPrimary: "hsl(293, 40%, 10%)",
      bgSecondary: "hsl(293, 50%, 15%)",
      textMain: "hsl(293, 90%, 85%)",
      accentGlow: "hsl(53, 100%, 50%)",
      matchedGlow: "hsl(173, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_950", {
      id: "palette_950",
      name: "Dynamic Theme #950",
      bgPrimary: "hsl(310, 40%, 10%)",
      bgSecondary: "hsl(310, 50%, 15%)",
      textMain: "hsl(310, 90%, 85%)",
      accentGlow: "hsl(70, 100%, 50%)",
      matchedGlow: "hsl(190, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_951", {
      id: "palette_951",
      name: "Dynamic Theme #951",
      bgPrimary: "hsl(327, 40%, 10%)",
      bgSecondary: "hsl(327, 50%, 15%)",
      textMain: "hsl(327, 90%, 85%)",
      accentGlow: "hsl(87, 100%, 50%)",
      matchedGlow: "hsl(207, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_952", {
      id: "palette_952",
      name: "Dynamic Theme #952",
      bgPrimary: "hsl(344, 40%, 10%)",
      bgSecondary: "hsl(344, 50%, 15%)",
      textMain: "hsl(344, 90%, 85%)",
      accentGlow: "hsl(104, 100%, 50%)",
      matchedGlow: "hsl(224, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_953", {
      id: "palette_953",
      name: "Dynamic Theme #953",
      bgPrimary: "hsl(1, 40%, 10%)",
      bgSecondary: "hsl(1, 50%, 15%)",
      textMain: "hsl(1, 90%, 85%)",
      accentGlow: "hsl(121, 100%, 50%)",
      matchedGlow: "hsl(241, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_954", {
      id: "palette_954",
      name: "Dynamic Theme #954",
      bgPrimary: "hsl(18, 40%, 10%)",
      bgSecondary: "hsl(18, 50%, 15%)",
      textMain: "hsl(18, 90%, 85%)",
      accentGlow: "hsl(138, 100%, 50%)",
      matchedGlow: "hsl(258, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_955", {
      id: "palette_955",
      name: "Dynamic Theme #955",
      bgPrimary: "hsl(35, 40%, 10%)",
      bgSecondary: "hsl(35, 50%, 15%)",
      textMain: "hsl(35, 90%, 85%)",
      accentGlow: "hsl(155, 100%, 50%)",
      matchedGlow: "hsl(275, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_956", {
      id: "palette_956",
      name: "Dynamic Theme #956",
      bgPrimary: "hsl(52, 40%, 10%)",
      bgSecondary: "hsl(52, 50%, 15%)",
      textMain: "hsl(52, 90%, 85%)",
      accentGlow: "hsl(172, 100%, 50%)",
      matchedGlow: "hsl(292, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_957", {
      id: "palette_957",
      name: "Dynamic Theme #957",
      bgPrimary: "hsl(69, 40%, 10%)",
      bgSecondary: "hsl(69, 50%, 15%)",
      textMain: "hsl(69, 90%, 85%)",
      accentGlow: "hsl(189, 100%, 50%)",
      matchedGlow: "hsl(309, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_958", {
      id: "palette_958",
      name: "Dynamic Theme #958",
      bgPrimary: "hsl(86, 40%, 10%)",
      bgSecondary: "hsl(86, 50%, 15%)",
      textMain: "hsl(86, 90%, 85%)",
      accentGlow: "hsl(206, 100%, 50%)",
      matchedGlow: "hsl(326, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_959", {
      id: "palette_959",
      name: "Dynamic Theme #959",
      bgPrimary: "hsl(103, 40%, 10%)",
      bgSecondary: "hsl(103, 50%, 15%)",
      textMain: "hsl(103, 90%, 85%)",
      accentGlow: "hsl(223, 100%, 50%)",
      matchedGlow: "hsl(343, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_960", {
      id: "palette_960",
      name: "Dynamic Theme #960",
      bgPrimary: "hsl(120, 40%, 10%)",
      bgSecondary: "hsl(120, 50%, 15%)",
      textMain: "hsl(120, 90%, 85%)",
      accentGlow: "hsl(240, 100%, 50%)",
      matchedGlow: "hsl(0, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_961", {
      id: "palette_961",
      name: "Dynamic Theme #961",
      bgPrimary: "hsl(137, 40%, 10%)",
      bgSecondary: "hsl(137, 50%, 15%)",
      textMain: "hsl(137, 90%, 85%)",
      accentGlow: "hsl(257, 100%, 50%)",
      matchedGlow: "hsl(17, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_962", {
      id: "palette_962",
      name: "Dynamic Theme #962",
      bgPrimary: "hsl(154, 40%, 10%)",
      bgSecondary: "hsl(154, 50%, 15%)",
      textMain: "hsl(154, 90%, 85%)",
      accentGlow: "hsl(274, 100%, 50%)",
      matchedGlow: "hsl(34, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_963", {
      id: "palette_963",
      name: "Dynamic Theme #963",
      bgPrimary: "hsl(171, 40%, 10%)",
      bgSecondary: "hsl(171, 50%, 15%)",
      textMain: "hsl(171, 90%, 85%)",
      accentGlow: "hsl(291, 100%, 50%)",
      matchedGlow: "hsl(51, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_964", {
      id: "palette_964",
      name: "Dynamic Theme #964",
      bgPrimary: "hsl(188, 40%, 10%)",
      bgSecondary: "hsl(188, 50%, 15%)",
      textMain: "hsl(188, 90%, 85%)",
      accentGlow: "hsl(308, 100%, 50%)",
      matchedGlow: "hsl(68, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_965", {
      id: "palette_965",
      name: "Dynamic Theme #965",
      bgPrimary: "hsl(205, 40%, 10%)",
      bgSecondary: "hsl(205, 50%, 15%)",
      textMain: "hsl(205, 90%, 85%)",
      accentGlow: "hsl(325, 100%, 50%)",
      matchedGlow: "hsl(85, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_966", {
      id: "palette_966",
      name: "Dynamic Theme #966",
      bgPrimary: "hsl(222, 40%, 10%)",
      bgSecondary: "hsl(222, 50%, 15%)",
      textMain: "hsl(222, 90%, 85%)",
      accentGlow: "hsl(342, 100%, 50%)",
      matchedGlow: "hsl(102, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_967", {
      id: "palette_967",
      name: "Dynamic Theme #967",
      bgPrimary: "hsl(239, 40%, 10%)",
      bgSecondary: "hsl(239, 50%, 15%)",
      textMain: "hsl(239, 90%, 85%)",
      accentGlow: "hsl(359, 100%, 50%)",
      matchedGlow: "hsl(119, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_968", {
      id: "palette_968",
      name: "Dynamic Theme #968",
      bgPrimary: "hsl(256, 40%, 10%)",
      bgSecondary: "hsl(256, 50%, 15%)",
      textMain: "hsl(256, 90%, 85%)",
      accentGlow: "hsl(16, 100%, 50%)",
      matchedGlow: "hsl(136, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_969", {
      id: "palette_969",
      name: "Dynamic Theme #969",
      bgPrimary: "hsl(273, 40%, 10%)",
      bgSecondary: "hsl(273, 50%, 15%)",
      textMain: "hsl(273, 90%, 85%)",
      accentGlow: "hsl(33, 100%, 50%)",
      matchedGlow: "hsl(153, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_970", {
      id: "palette_970",
      name: "Dynamic Theme #970",
      bgPrimary: "hsl(290, 40%, 10%)",
      bgSecondary: "hsl(290, 50%, 15%)",
      textMain: "hsl(290, 90%, 85%)",
      accentGlow: "hsl(50, 100%, 50%)",
      matchedGlow: "hsl(170, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_971", {
      id: "palette_971",
      name: "Dynamic Theme #971",
      bgPrimary: "hsl(307, 40%, 10%)",
      bgSecondary: "hsl(307, 50%, 15%)",
      textMain: "hsl(307, 90%, 85%)",
      accentGlow: "hsl(67, 100%, 50%)",
      matchedGlow: "hsl(187, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_972", {
      id: "palette_972",
      name: "Dynamic Theme #972",
      bgPrimary: "hsl(324, 40%, 10%)",
      bgSecondary: "hsl(324, 50%, 15%)",
      textMain: "hsl(324, 90%, 85%)",
      accentGlow: "hsl(84, 100%, 50%)",
      matchedGlow: "hsl(204, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_973", {
      id: "palette_973",
      name: "Dynamic Theme #973",
      bgPrimary: "hsl(341, 40%, 10%)",
      bgSecondary: "hsl(341, 50%, 15%)",
      textMain: "hsl(341, 90%, 85%)",
      accentGlow: "hsl(101, 100%, 50%)",
      matchedGlow: "hsl(221, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_974", {
      id: "palette_974",
      name: "Dynamic Theme #974",
      bgPrimary: "hsl(358, 40%, 10%)",
      bgSecondary: "hsl(358, 50%, 15%)",
      textMain: "hsl(358, 90%, 85%)",
      accentGlow: "hsl(118, 100%, 50%)",
      matchedGlow: "hsl(238, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_975", {
      id: "palette_975",
      name: "Dynamic Theme #975",
      bgPrimary: "hsl(15, 40%, 10%)",
      bgSecondary: "hsl(15, 50%, 15%)",
      textMain: "hsl(15, 90%, 85%)",
      accentGlow: "hsl(135, 100%, 50%)",
      matchedGlow: "hsl(255, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_976", {
      id: "palette_976",
      name: "Dynamic Theme #976",
      bgPrimary: "hsl(32, 40%, 10%)",
      bgSecondary: "hsl(32, 50%, 15%)",
      textMain: "hsl(32, 90%, 85%)",
      accentGlow: "hsl(152, 100%, 50%)",
      matchedGlow: "hsl(272, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_977", {
      id: "palette_977",
      name: "Dynamic Theme #977",
      bgPrimary: "hsl(49, 40%, 10%)",
      bgSecondary: "hsl(49, 50%, 15%)",
      textMain: "hsl(49, 90%, 85%)",
      accentGlow: "hsl(169, 100%, 50%)",
      matchedGlow: "hsl(289, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_978", {
      id: "palette_978",
      name: "Dynamic Theme #978",
      bgPrimary: "hsl(66, 40%, 10%)",
      bgSecondary: "hsl(66, 50%, 15%)",
      textMain: "hsl(66, 90%, 85%)",
      accentGlow: "hsl(186, 100%, 50%)",
      matchedGlow: "hsl(306, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_979", {
      id: "palette_979",
      name: "Dynamic Theme #979",
      bgPrimary: "hsl(83, 40%, 10%)",
      bgSecondary: "hsl(83, 50%, 15%)",
      textMain: "hsl(83, 90%, 85%)",
      accentGlow: "hsl(203, 100%, 50%)",
      matchedGlow: "hsl(323, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_980", {
      id: "palette_980",
      name: "Dynamic Theme #980",
      bgPrimary: "hsl(100, 40%, 10%)",
      bgSecondary: "hsl(100, 50%, 15%)",
      textMain: "hsl(100, 90%, 85%)",
      accentGlow: "hsl(220, 100%, 50%)",
      matchedGlow: "hsl(340, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_981", {
      id: "palette_981",
      name: "Dynamic Theme #981",
      bgPrimary: "hsl(117, 40%, 10%)",
      bgSecondary: "hsl(117, 50%, 15%)",
      textMain: "hsl(117, 90%, 85%)",
      accentGlow: "hsl(237, 100%, 50%)",
      matchedGlow: "hsl(357, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_982", {
      id: "palette_982",
      name: "Dynamic Theme #982",
      bgPrimary: "hsl(134, 40%, 10%)",
      bgSecondary: "hsl(134, 50%, 15%)",
      textMain: "hsl(134, 90%, 85%)",
      accentGlow: "hsl(254, 100%, 50%)",
      matchedGlow: "hsl(14, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_983", {
      id: "palette_983",
      name: "Dynamic Theme #983",
      bgPrimary: "hsl(151, 40%, 10%)",
      bgSecondary: "hsl(151, 50%, 15%)",
      textMain: "hsl(151, 90%, 85%)",
      accentGlow: "hsl(271, 100%, 50%)",
      matchedGlow: "hsl(31, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_984", {
      id: "palette_984",
      name: "Dynamic Theme #984",
      bgPrimary: "hsl(168, 40%, 10%)",
      bgSecondary: "hsl(168, 50%, 15%)",
      textMain: "hsl(168, 90%, 85%)",
      accentGlow: "hsl(288, 100%, 50%)",
      matchedGlow: "hsl(48, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_985", {
      id: "palette_985",
      name: "Dynamic Theme #985",
      bgPrimary: "hsl(185, 40%, 10%)",
      bgSecondary: "hsl(185, 50%, 15%)",
      textMain: "hsl(185, 90%, 85%)",
      accentGlow: "hsl(305, 100%, 50%)",
      matchedGlow: "hsl(65, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_986", {
      id: "palette_986",
      name: "Dynamic Theme #986",
      bgPrimary: "hsl(202, 40%, 10%)",
      bgSecondary: "hsl(202, 50%, 15%)",
      textMain: "hsl(202, 90%, 85%)",
      accentGlow: "hsl(322, 100%, 50%)",
      matchedGlow: "hsl(82, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_987", {
      id: "palette_987",
      name: "Dynamic Theme #987",
      bgPrimary: "hsl(219, 40%, 10%)",
      bgSecondary: "hsl(219, 50%, 15%)",
      textMain: "hsl(219, 90%, 85%)",
      accentGlow: "hsl(339, 100%, 50%)",
      matchedGlow: "hsl(99, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_988", {
      id: "palette_988",
      name: "Dynamic Theme #988",
      bgPrimary: "hsl(236, 40%, 10%)",
      bgSecondary: "hsl(236, 50%, 15%)",
      textMain: "hsl(236, 90%, 85%)",
      accentGlow: "hsl(356, 100%, 50%)",
      matchedGlow: "hsl(116, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_989", {
      id: "palette_989",
      name: "Dynamic Theme #989",
      bgPrimary: "hsl(253, 40%, 10%)",
      bgSecondary: "hsl(253, 50%, 15%)",
      textMain: "hsl(253, 90%, 85%)",
      accentGlow: "hsl(13, 100%, 50%)",
      matchedGlow: "hsl(133, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_990", {
      id: "palette_990",
      name: "Dynamic Theme #990",
      bgPrimary: "hsl(270, 40%, 10%)",
      bgSecondary: "hsl(270, 50%, 15%)",
      textMain: "hsl(270, 90%, 85%)",
      accentGlow: "hsl(30, 100%, 50%)",
      matchedGlow: "hsl(150, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_991", {
      id: "palette_991",
      name: "Dynamic Theme #991",
      bgPrimary: "hsl(287, 40%, 10%)",
      bgSecondary: "hsl(287, 50%, 15%)",
      textMain: "hsl(287, 90%, 85%)",
      accentGlow: "hsl(47, 100%, 50%)",
      matchedGlow: "hsl(167, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_992", {
      id: "palette_992",
      name: "Dynamic Theme #992",
      bgPrimary: "hsl(304, 40%, 10%)",
      bgSecondary: "hsl(304, 50%, 15%)",
      textMain: "hsl(304, 90%, 85%)",
      accentGlow: "hsl(64, 100%, 50%)",
      matchedGlow: "hsl(184, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_993", {
      id: "palette_993",
      name: "Dynamic Theme #993",
      bgPrimary: "hsl(321, 40%, 10%)",
      bgSecondary: "hsl(321, 50%, 15%)",
      textMain: "hsl(321, 90%, 85%)",
      accentGlow: "hsl(81, 100%, 50%)",
      matchedGlow: "hsl(201, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_994", {
      id: "palette_994",
      name: "Dynamic Theme #994",
      bgPrimary: "hsl(338, 40%, 10%)",
      bgSecondary: "hsl(338, 50%, 15%)",
      textMain: "hsl(338, 90%, 85%)",
      accentGlow: "hsl(98, 100%, 50%)",
      matchedGlow: "hsl(218, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_995", {
      id: "palette_995",
      name: "Dynamic Theme #995",
      bgPrimary: "hsl(355, 40%, 10%)",
      bgSecondary: "hsl(355, 50%, 15%)",
      textMain: "hsl(355, 90%, 85%)",
      accentGlow: "hsl(115, 100%, 50%)",
      matchedGlow: "hsl(235, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_996", {
      id: "palette_996",
      name: "Dynamic Theme #996",
      bgPrimary: "hsl(12, 40%, 10%)",
      bgSecondary: "hsl(12, 50%, 15%)",
      textMain: "hsl(12, 90%, 85%)",
      accentGlow: "hsl(132, 100%, 50%)",
      matchedGlow: "hsl(252, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_997", {
      id: "palette_997",
      name: "Dynamic Theme #997",
      bgPrimary: "hsl(29, 40%, 10%)",
      bgSecondary: "hsl(29, 50%, 15%)",
      textMain: "hsl(29, 90%, 85%)",
      accentGlow: "hsl(149, 100%, 50%)",
      matchedGlow: "hsl(269, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_998", {
      id: "palette_998",
      name: "Dynamic Theme #998",
      bgPrimary: "hsl(46, 40%, 10%)",
      bgSecondary: "hsl(46, 50%, 15%)",
      textMain: "hsl(46, 90%, 85%)",
      accentGlow: "hsl(166, 100%, 50%)",
      matchedGlow: "hsl(286, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_999", {
      id: "palette_999",
      name: "Dynamic Theme #999",
      bgPrimary: "hsl(63, 40%, 10%)",
      bgSecondary: "hsl(63, 50%, 15%)",
      textMain: "hsl(63, 90%, 85%)",
      accentGlow: "hsl(183, 100%, 50%)",
      matchedGlow: "hsl(303, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1000", {
      id: "palette_1000",
      name: "Dynamic Theme #1000",
      bgPrimary: "hsl(80, 40%, 10%)",
      bgSecondary: "hsl(80, 50%, 15%)",
      textMain: "hsl(80, 90%, 85%)",
      accentGlow: "hsl(200, 100%, 50%)",
      matchedGlow: "hsl(320, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1001", {
      id: "palette_1001",
      name: "Dynamic Theme #1001",
      bgPrimary: "hsl(97, 40%, 10%)",
      bgSecondary: "hsl(97, 50%, 15%)",
      textMain: "hsl(97, 90%, 85%)",
      accentGlow: "hsl(217, 100%, 50%)",
      matchedGlow: "hsl(337, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1002", {
      id: "palette_1002",
      name: "Dynamic Theme #1002",
      bgPrimary: "hsl(114, 40%, 10%)",
      bgSecondary: "hsl(114, 50%, 15%)",
      textMain: "hsl(114, 90%, 85%)",
      accentGlow: "hsl(234, 100%, 50%)",
      matchedGlow: "hsl(354, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1003", {
      id: "palette_1003",
      name: "Dynamic Theme #1003",
      bgPrimary: "hsl(131, 40%, 10%)",
      bgSecondary: "hsl(131, 50%, 15%)",
      textMain: "hsl(131, 90%, 85%)",
      accentGlow: "hsl(251, 100%, 50%)",
      matchedGlow: "hsl(11, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1004", {
      id: "palette_1004",
      name: "Dynamic Theme #1004",
      bgPrimary: "hsl(148, 40%, 10%)",
      bgSecondary: "hsl(148, 50%, 15%)",
      textMain: "hsl(148, 90%, 85%)",
      accentGlow: "hsl(268, 100%, 50%)",
      matchedGlow: "hsl(28, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1005", {
      id: "palette_1005",
      name: "Dynamic Theme #1005",
      bgPrimary: "hsl(165, 40%, 10%)",
      bgSecondary: "hsl(165, 50%, 15%)",
      textMain: "hsl(165, 90%, 85%)",
      accentGlow: "hsl(285, 100%, 50%)",
      matchedGlow: "hsl(45, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1006", {
      id: "palette_1006",
      name: "Dynamic Theme #1006",
      bgPrimary: "hsl(182, 40%, 10%)",
      bgSecondary: "hsl(182, 50%, 15%)",
      textMain: "hsl(182, 90%, 85%)",
      accentGlow: "hsl(302, 100%, 50%)",
      matchedGlow: "hsl(62, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1007", {
      id: "palette_1007",
      name: "Dynamic Theme #1007",
      bgPrimary: "hsl(199, 40%, 10%)",
      bgSecondary: "hsl(199, 50%, 15%)",
      textMain: "hsl(199, 90%, 85%)",
      accentGlow: "hsl(319, 100%, 50%)",
      matchedGlow: "hsl(79, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1008", {
      id: "palette_1008",
      name: "Dynamic Theme #1008",
      bgPrimary: "hsl(216, 40%, 10%)",
      bgSecondary: "hsl(216, 50%, 15%)",
      textMain: "hsl(216, 90%, 85%)",
      accentGlow: "hsl(336, 100%, 50%)",
      matchedGlow: "hsl(96, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1009", {
      id: "palette_1009",
      name: "Dynamic Theme #1009",
      bgPrimary: "hsl(233, 40%, 10%)",
      bgSecondary: "hsl(233, 50%, 15%)",
      textMain: "hsl(233, 90%, 85%)",
      accentGlow: "hsl(353, 100%, 50%)",
      matchedGlow: "hsl(113, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1010", {
      id: "palette_1010",
      name: "Dynamic Theme #1010",
      bgPrimary: "hsl(250, 40%, 10%)",
      bgSecondary: "hsl(250, 50%, 15%)",
      textMain: "hsl(250, 90%, 85%)",
      accentGlow: "hsl(10, 100%, 50%)",
      matchedGlow: "hsl(130, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1011", {
      id: "palette_1011",
      name: "Dynamic Theme #1011",
      bgPrimary: "hsl(267, 40%, 10%)",
      bgSecondary: "hsl(267, 50%, 15%)",
      textMain: "hsl(267, 90%, 85%)",
      accentGlow: "hsl(27, 100%, 50%)",
      matchedGlow: "hsl(147, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1012", {
      id: "palette_1012",
      name: "Dynamic Theme #1012",
      bgPrimary: "hsl(284, 40%, 10%)",
      bgSecondary: "hsl(284, 50%, 15%)",
      textMain: "hsl(284, 90%, 85%)",
      accentGlow: "hsl(44, 100%, 50%)",
      matchedGlow: "hsl(164, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1013", {
      id: "palette_1013",
      name: "Dynamic Theme #1013",
      bgPrimary: "hsl(301, 40%, 10%)",
      bgSecondary: "hsl(301, 50%, 15%)",
      textMain: "hsl(301, 90%, 85%)",
      accentGlow: "hsl(61, 100%, 50%)",
      matchedGlow: "hsl(181, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1014", {
      id: "palette_1014",
      name: "Dynamic Theme #1014",
      bgPrimary: "hsl(318, 40%, 10%)",
      bgSecondary: "hsl(318, 50%, 15%)",
      textMain: "hsl(318, 90%, 85%)",
      accentGlow: "hsl(78, 100%, 50%)",
      matchedGlow: "hsl(198, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1015", {
      id: "palette_1015",
      name: "Dynamic Theme #1015",
      bgPrimary: "hsl(335, 40%, 10%)",
      bgSecondary: "hsl(335, 50%, 15%)",
      textMain: "hsl(335, 90%, 85%)",
      accentGlow: "hsl(95, 100%, 50%)",
      matchedGlow: "hsl(215, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1016", {
      id: "palette_1016",
      name: "Dynamic Theme #1016",
      bgPrimary: "hsl(352, 40%, 10%)",
      bgSecondary: "hsl(352, 50%, 15%)",
      textMain: "hsl(352, 90%, 85%)",
      accentGlow: "hsl(112, 100%, 50%)",
      matchedGlow: "hsl(232, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1017", {
      id: "palette_1017",
      name: "Dynamic Theme #1017",
      bgPrimary: "hsl(9, 40%, 10%)",
      bgSecondary: "hsl(9, 50%, 15%)",
      textMain: "hsl(9, 90%, 85%)",
      accentGlow: "hsl(129, 100%, 50%)",
      matchedGlow: "hsl(249, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1018", {
      id: "palette_1018",
      name: "Dynamic Theme #1018",
      bgPrimary: "hsl(26, 40%, 10%)",
      bgSecondary: "hsl(26, 50%, 15%)",
      textMain: "hsl(26, 90%, 85%)",
      accentGlow: "hsl(146, 100%, 50%)",
      matchedGlow: "hsl(266, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1019", {
      id: "palette_1019",
      name: "Dynamic Theme #1019",
      bgPrimary: "hsl(43, 40%, 10%)",
      bgSecondary: "hsl(43, 50%, 15%)",
      textMain: "hsl(43, 90%, 85%)",
      accentGlow: "hsl(163, 100%, 50%)",
      matchedGlow: "hsl(283, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1020", {
      id: "palette_1020",
      name: "Dynamic Theme #1020",
      bgPrimary: "hsl(60, 40%, 10%)",
      bgSecondary: "hsl(60, 50%, 15%)",
      textMain: "hsl(60, 90%, 85%)",
      accentGlow: "hsl(180, 100%, 50%)",
      matchedGlow: "hsl(300, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1021", {
      id: "palette_1021",
      name: "Dynamic Theme #1021",
      bgPrimary: "hsl(77, 40%, 10%)",
      bgSecondary: "hsl(77, 50%, 15%)",
      textMain: "hsl(77, 90%, 85%)",
      accentGlow: "hsl(197, 100%, 50%)",
      matchedGlow: "hsl(317, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1022", {
      id: "palette_1022",
      name: "Dynamic Theme #1022",
      bgPrimary: "hsl(94, 40%, 10%)",
      bgSecondary: "hsl(94, 50%, 15%)",
      textMain: "hsl(94, 90%, 85%)",
      accentGlow: "hsl(214, 100%, 50%)",
      matchedGlow: "hsl(334, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1023", {
      id: "palette_1023",
      name: "Dynamic Theme #1023",
      bgPrimary: "hsl(111, 40%, 10%)",
      bgSecondary: "hsl(111, 50%, 15%)",
      textMain: "hsl(111, 90%, 85%)",
      accentGlow: "hsl(231, 100%, 50%)",
      matchedGlow: "hsl(351, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1024", {
      id: "palette_1024",
      name: "Dynamic Theme #1024",
      bgPrimary: "hsl(128, 40%, 10%)",
      bgSecondary: "hsl(128, 50%, 15%)",
      textMain: "hsl(128, 90%, 85%)",
      accentGlow: "hsl(248, 100%, 50%)",
      matchedGlow: "hsl(8, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1025", {
      id: "palette_1025",
      name: "Dynamic Theme #1025",
      bgPrimary: "hsl(145, 40%, 10%)",
      bgSecondary: "hsl(145, 50%, 15%)",
      textMain: "hsl(145, 90%, 85%)",
      accentGlow: "hsl(265, 100%, 50%)",
      matchedGlow: "hsl(25, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1026", {
      id: "palette_1026",
      name: "Dynamic Theme #1026",
      bgPrimary: "hsl(162, 40%, 10%)",
      bgSecondary: "hsl(162, 50%, 15%)",
      textMain: "hsl(162, 90%, 85%)",
      accentGlow: "hsl(282, 100%, 50%)",
      matchedGlow: "hsl(42, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1027", {
      id: "palette_1027",
      name: "Dynamic Theme #1027",
      bgPrimary: "hsl(179, 40%, 10%)",
      bgSecondary: "hsl(179, 50%, 15%)",
      textMain: "hsl(179, 90%, 85%)",
      accentGlow: "hsl(299, 100%, 50%)",
      matchedGlow: "hsl(59, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1028", {
      id: "palette_1028",
      name: "Dynamic Theme #1028",
      bgPrimary: "hsl(196, 40%, 10%)",
      bgSecondary: "hsl(196, 50%, 15%)",
      textMain: "hsl(196, 90%, 85%)",
      accentGlow: "hsl(316, 100%, 50%)",
      matchedGlow: "hsl(76, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1029", {
      id: "palette_1029",
      name: "Dynamic Theme #1029",
      bgPrimary: "hsl(213, 40%, 10%)",
      bgSecondary: "hsl(213, 50%, 15%)",
      textMain: "hsl(213, 90%, 85%)",
      accentGlow: "hsl(333, 100%, 50%)",
      matchedGlow: "hsl(93, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1030", {
      id: "palette_1030",
      name: "Dynamic Theme #1030",
      bgPrimary: "hsl(230, 40%, 10%)",
      bgSecondary: "hsl(230, 50%, 15%)",
      textMain: "hsl(230, 90%, 85%)",
      accentGlow: "hsl(350, 100%, 50%)",
      matchedGlow: "hsl(110, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1031", {
      id: "palette_1031",
      name: "Dynamic Theme #1031",
      bgPrimary: "hsl(247, 40%, 10%)",
      bgSecondary: "hsl(247, 50%, 15%)",
      textMain: "hsl(247, 90%, 85%)",
      accentGlow: "hsl(7, 100%, 50%)",
      matchedGlow: "hsl(127, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1032", {
      id: "palette_1032",
      name: "Dynamic Theme #1032",
      bgPrimary: "hsl(264, 40%, 10%)",
      bgSecondary: "hsl(264, 50%, 15%)",
      textMain: "hsl(264, 90%, 85%)",
      accentGlow: "hsl(24, 100%, 50%)",
      matchedGlow: "hsl(144, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1033", {
      id: "palette_1033",
      name: "Dynamic Theme #1033",
      bgPrimary: "hsl(281, 40%, 10%)",
      bgSecondary: "hsl(281, 50%, 15%)",
      textMain: "hsl(281, 90%, 85%)",
      accentGlow: "hsl(41, 100%, 50%)",
      matchedGlow: "hsl(161, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1034", {
      id: "palette_1034",
      name: "Dynamic Theme #1034",
      bgPrimary: "hsl(298, 40%, 10%)",
      bgSecondary: "hsl(298, 50%, 15%)",
      textMain: "hsl(298, 90%, 85%)",
      accentGlow: "hsl(58, 100%, 50%)",
      matchedGlow: "hsl(178, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1035", {
      id: "palette_1035",
      name: "Dynamic Theme #1035",
      bgPrimary: "hsl(315, 40%, 10%)",
      bgSecondary: "hsl(315, 50%, 15%)",
      textMain: "hsl(315, 90%, 85%)",
      accentGlow: "hsl(75, 100%, 50%)",
      matchedGlow: "hsl(195, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1036", {
      id: "palette_1036",
      name: "Dynamic Theme #1036",
      bgPrimary: "hsl(332, 40%, 10%)",
      bgSecondary: "hsl(332, 50%, 15%)",
      textMain: "hsl(332, 90%, 85%)",
      accentGlow: "hsl(92, 100%, 50%)",
      matchedGlow: "hsl(212, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1037", {
      id: "palette_1037",
      name: "Dynamic Theme #1037",
      bgPrimary: "hsl(349, 40%, 10%)",
      bgSecondary: "hsl(349, 50%, 15%)",
      textMain: "hsl(349, 90%, 85%)",
      accentGlow: "hsl(109, 100%, 50%)",
      matchedGlow: "hsl(229, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1038", {
      id: "palette_1038",
      name: "Dynamic Theme #1038",
      bgPrimary: "hsl(6, 40%, 10%)",
      bgSecondary: "hsl(6, 50%, 15%)",
      textMain: "hsl(6, 90%, 85%)",
      accentGlow: "hsl(126, 100%, 50%)",
      matchedGlow: "hsl(246, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1039", {
      id: "palette_1039",
      name: "Dynamic Theme #1039",
      bgPrimary: "hsl(23, 40%, 10%)",
      bgSecondary: "hsl(23, 50%, 15%)",
      textMain: "hsl(23, 90%, 85%)",
      accentGlow: "hsl(143, 100%, 50%)",
      matchedGlow: "hsl(263, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1040", {
      id: "palette_1040",
      name: "Dynamic Theme #1040",
      bgPrimary: "hsl(40, 40%, 10%)",
      bgSecondary: "hsl(40, 50%, 15%)",
      textMain: "hsl(40, 90%, 85%)",
      accentGlow: "hsl(160, 100%, 50%)",
      matchedGlow: "hsl(280, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1041", {
      id: "palette_1041",
      name: "Dynamic Theme #1041",
      bgPrimary: "hsl(57, 40%, 10%)",
      bgSecondary: "hsl(57, 50%, 15%)",
      textMain: "hsl(57, 90%, 85%)",
      accentGlow: "hsl(177, 100%, 50%)",
      matchedGlow: "hsl(297, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1042", {
      id: "palette_1042",
      name: "Dynamic Theme #1042",
      bgPrimary: "hsl(74, 40%, 10%)",
      bgSecondary: "hsl(74, 50%, 15%)",
      textMain: "hsl(74, 90%, 85%)",
      accentGlow: "hsl(194, 100%, 50%)",
      matchedGlow: "hsl(314, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1043", {
      id: "palette_1043",
      name: "Dynamic Theme #1043",
      bgPrimary: "hsl(91, 40%, 10%)",
      bgSecondary: "hsl(91, 50%, 15%)",
      textMain: "hsl(91, 90%, 85%)",
      accentGlow: "hsl(211, 100%, 50%)",
      matchedGlow: "hsl(331, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1044", {
      id: "palette_1044",
      name: "Dynamic Theme #1044",
      bgPrimary: "hsl(108, 40%, 10%)",
      bgSecondary: "hsl(108, 50%, 15%)",
      textMain: "hsl(108, 90%, 85%)",
      accentGlow: "hsl(228, 100%, 50%)",
      matchedGlow: "hsl(348, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1045", {
      id: "palette_1045",
      name: "Dynamic Theme #1045",
      bgPrimary: "hsl(125, 40%, 10%)",
      bgSecondary: "hsl(125, 50%, 15%)",
      textMain: "hsl(125, 90%, 85%)",
      accentGlow: "hsl(245, 100%, 50%)",
      matchedGlow: "hsl(5, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1046", {
      id: "palette_1046",
      name: "Dynamic Theme #1046",
      bgPrimary: "hsl(142, 40%, 10%)",
      bgSecondary: "hsl(142, 50%, 15%)",
      textMain: "hsl(142, 90%, 85%)",
      accentGlow: "hsl(262, 100%, 50%)",
      matchedGlow: "hsl(22, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1047", {
      id: "palette_1047",
      name: "Dynamic Theme #1047",
      bgPrimary: "hsl(159, 40%, 10%)",
      bgSecondary: "hsl(159, 50%, 15%)",
      textMain: "hsl(159, 90%, 85%)",
      accentGlow: "hsl(279, 100%, 50%)",
      matchedGlow: "hsl(39, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1048", {
      id: "palette_1048",
      name: "Dynamic Theme #1048",
      bgPrimary: "hsl(176, 40%, 10%)",
      bgSecondary: "hsl(176, 50%, 15%)",
      textMain: "hsl(176, 90%, 85%)",
      accentGlow: "hsl(296, 100%, 50%)",
      matchedGlow: "hsl(56, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1049", {
      id: "palette_1049",
      name: "Dynamic Theme #1049",
      bgPrimary: "hsl(193, 40%, 10%)",
      bgSecondary: "hsl(193, 50%, 15%)",
      textMain: "hsl(193, 90%, 85%)",
      accentGlow: "hsl(313, 100%, 50%)",
      matchedGlow: "hsl(73, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1050", {
      id: "palette_1050",
      name: "Dynamic Theme #1050",
      bgPrimary: "hsl(210, 40%, 10%)",
      bgSecondary: "hsl(210, 50%, 15%)",
      textMain: "hsl(210, 90%, 85%)",
      accentGlow: "hsl(330, 100%, 50%)",
      matchedGlow: "hsl(90, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1051", {
      id: "palette_1051",
      name: "Dynamic Theme #1051",
      bgPrimary: "hsl(227, 40%, 10%)",
      bgSecondary: "hsl(227, 50%, 15%)",
      textMain: "hsl(227, 90%, 85%)",
      accentGlow: "hsl(347, 100%, 50%)",
      matchedGlow: "hsl(107, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1052", {
      id: "palette_1052",
      name: "Dynamic Theme #1052",
      bgPrimary: "hsl(244, 40%, 10%)",
      bgSecondary: "hsl(244, 50%, 15%)",
      textMain: "hsl(244, 90%, 85%)",
      accentGlow: "hsl(4, 100%, 50%)",
      matchedGlow: "hsl(124, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1053", {
      id: "palette_1053",
      name: "Dynamic Theme #1053",
      bgPrimary: "hsl(261, 40%, 10%)",
      bgSecondary: "hsl(261, 50%, 15%)",
      textMain: "hsl(261, 90%, 85%)",
      accentGlow: "hsl(21, 100%, 50%)",
      matchedGlow: "hsl(141, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1054", {
      id: "palette_1054",
      name: "Dynamic Theme #1054",
      bgPrimary: "hsl(278, 40%, 10%)",
      bgSecondary: "hsl(278, 50%, 15%)",
      textMain: "hsl(278, 90%, 85%)",
      accentGlow: "hsl(38, 100%, 50%)",
      matchedGlow: "hsl(158, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1055", {
      id: "palette_1055",
      name: "Dynamic Theme #1055",
      bgPrimary: "hsl(295, 40%, 10%)",
      bgSecondary: "hsl(295, 50%, 15%)",
      textMain: "hsl(295, 90%, 85%)",
      accentGlow: "hsl(55, 100%, 50%)",
      matchedGlow: "hsl(175, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1056", {
      id: "palette_1056",
      name: "Dynamic Theme #1056",
      bgPrimary: "hsl(312, 40%, 10%)",
      bgSecondary: "hsl(312, 50%, 15%)",
      textMain: "hsl(312, 90%, 85%)",
      accentGlow: "hsl(72, 100%, 50%)",
      matchedGlow: "hsl(192, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1057", {
      id: "palette_1057",
      name: "Dynamic Theme #1057",
      bgPrimary: "hsl(329, 40%, 10%)",
      bgSecondary: "hsl(329, 50%, 15%)",
      textMain: "hsl(329, 90%, 85%)",
      accentGlow: "hsl(89, 100%, 50%)",
      matchedGlow: "hsl(209, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1058", {
      id: "palette_1058",
      name: "Dynamic Theme #1058",
      bgPrimary: "hsl(346, 40%, 10%)",
      bgSecondary: "hsl(346, 50%, 15%)",
      textMain: "hsl(346, 90%, 85%)",
      accentGlow: "hsl(106, 100%, 50%)",
      matchedGlow: "hsl(226, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1059", {
      id: "palette_1059",
      name: "Dynamic Theme #1059",
      bgPrimary: "hsl(3, 40%, 10%)",
      bgSecondary: "hsl(3, 50%, 15%)",
      textMain: "hsl(3, 90%, 85%)",
      accentGlow: "hsl(123, 100%, 50%)",
      matchedGlow: "hsl(243, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1060", {
      id: "palette_1060",
      name: "Dynamic Theme #1060",
      bgPrimary: "hsl(20, 40%, 10%)",
      bgSecondary: "hsl(20, 50%, 15%)",
      textMain: "hsl(20, 90%, 85%)",
      accentGlow: "hsl(140, 100%, 50%)",
      matchedGlow: "hsl(260, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1061", {
      id: "palette_1061",
      name: "Dynamic Theme #1061",
      bgPrimary: "hsl(37, 40%, 10%)",
      bgSecondary: "hsl(37, 50%, 15%)",
      textMain: "hsl(37, 90%, 85%)",
      accentGlow: "hsl(157, 100%, 50%)",
      matchedGlow: "hsl(277, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1062", {
      id: "palette_1062",
      name: "Dynamic Theme #1062",
      bgPrimary: "hsl(54, 40%, 10%)",
      bgSecondary: "hsl(54, 50%, 15%)",
      textMain: "hsl(54, 90%, 85%)",
      accentGlow: "hsl(174, 100%, 50%)",
      matchedGlow: "hsl(294, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1063", {
      id: "palette_1063",
      name: "Dynamic Theme #1063",
      bgPrimary: "hsl(71, 40%, 10%)",
      bgSecondary: "hsl(71, 50%, 15%)",
      textMain: "hsl(71, 90%, 85%)",
      accentGlow: "hsl(191, 100%, 50%)",
      matchedGlow: "hsl(311, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1064", {
      id: "palette_1064",
      name: "Dynamic Theme #1064",
      bgPrimary: "hsl(88, 40%, 10%)",
      bgSecondary: "hsl(88, 50%, 15%)",
      textMain: "hsl(88, 90%, 85%)",
      accentGlow: "hsl(208, 100%, 50%)",
      matchedGlow: "hsl(328, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1065", {
      id: "palette_1065",
      name: "Dynamic Theme #1065",
      bgPrimary: "hsl(105, 40%, 10%)",
      bgSecondary: "hsl(105, 50%, 15%)",
      textMain: "hsl(105, 90%, 85%)",
      accentGlow: "hsl(225, 100%, 50%)",
      matchedGlow: "hsl(345, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1066", {
      id: "palette_1066",
      name: "Dynamic Theme #1066",
      bgPrimary: "hsl(122, 40%, 10%)",
      bgSecondary: "hsl(122, 50%, 15%)",
      textMain: "hsl(122, 90%, 85%)",
      accentGlow: "hsl(242, 100%, 50%)",
      matchedGlow: "hsl(2, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1067", {
      id: "palette_1067",
      name: "Dynamic Theme #1067",
      bgPrimary: "hsl(139, 40%, 10%)",
      bgSecondary: "hsl(139, 50%, 15%)",
      textMain: "hsl(139, 90%, 85%)",
      accentGlow: "hsl(259, 100%, 50%)",
      matchedGlow: "hsl(19, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1068", {
      id: "palette_1068",
      name: "Dynamic Theme #1068",
      bgPrimary: "hsl(156, 40%, 10%)",
      bgSecondary: "hsl(156, 50%, 15%)",
      textMain: "hsl(156, 90%, 85%)",
      accentGlow: "hsl(276, 100%, 50%)",
      matchedGlow: "hsl(36, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1069", {
      id: "palette_1069",
      name: "Dynamic Theme #1069",
      bgPrimary: "hsl(173, 40%, 10%)",
      bgSecondary: "hsl(173, 50%, 15%)",
      textMain: "hsl(173, 90%, 85%)",
      accentGlow: "hsl(293, 100%, 50%)",
      matchedGlow: "hsl(53, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1070", {
      id: "palette_1070",
      name: "Dynamic Theme #1070",
      bgPrimary: "hsl(190, 40%, 10%)",
      bgSecondary: "hsl(190, 50%, 15%)",
      textMain: "hsl(190, 90%, 85%)",
      accentGlow: "hsl(310, 100%, 50%)",
      matchedGlow: "hsl(70, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1071", {
      id: "palette_1071",
      name: "Dynamic Theme #1071",
      bgPrimary: "hsl(207, 40%, 10%)",
      bgSecondary: "hsl(207, 50%, 15%)",
      textMain: "hsl(207, 90%, 85%)",
      accentGlow: "hsl(327, 100%, 50%)",
      matchedGlow: "hsl(87, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1072", {
      id: "palette_1072",
      name: "Dynamic Theme #1072",
      bgPrimary: "hsl(224, 40%, 10%)",
      bgSecondary: "hsl(224, 50%, 15%)",
      textMain: "hsl(224, 90%, 85%)",
      accentGlow: "hsl(344, 100%, 50%)",
      matchedGlow: "hsl(104, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1073", {
      id: "palette_1073",
      name: "Dynamic Theme #1073",
      bgPrimary: "hsl(241, 40%, 10%)",
      bgSecondary: "hsl(241, 50%, 15%)",
      textMain: "hsl(241, 90%, 85%)",
      accentGlow: "hsl(1, 100%, 50%)",
      matchedGlow: "hsl(121, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1074", {
      id: "palette_1074",
      name: "Dynamic Theme #1074",
      bgPrimary: "hsl(258, 40%, 10%)",
      bgSecondary: "hsl(258, 50%, 15%)",
      textMain: "hsl(258, 90%, 85%)",
      accentGlow: "hsl(18, 100%, 50%)",
      matchedGlow: "hsl(138, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1075", {
      id: "palette_1075",
      name: "Dynamic Theme #1075",
      bgPrimary: "hsl(275, 40%, 10%)",
      bgSecondary: "hsl(275, 50%, 15%)",
      textMain: "hsl(275, 90%, 85%)",
      accentGlow: "hsl(35, 100%, 50%)",
      matchedGlow: "hsl(155, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1076", {
      id: "palette_1076",
      name: "Dynamic Theme #1076",
      bgPrimary: "hsl(292, 40%, 10%)",
      bgSecondary: "hsl(292, 50%, 15%)",
      textMain: "hsl(292, 90%, 85%)",
      accentGlow: "hsl(52, 100%, 50%)",
      matchedGlow: "hsl(172, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1077", {
      id: "palette_1077",
      name: "Dynamic Theme #1077",
      bgPrimary: "hsl(309, 40%, 10%)",
      bgSecondary: "hsl(309, 50%, 15%)",
      textMain: "hsl(309, 90%, 85%)",
      accentGlow: "hsl(69, 100%, 50%)",
      matchedGlow: "hsl(189, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1078", {
      id: "palette_1078",
      name: "Dynamic Theme #1078",
      bgPrimary: "hsl(326, 40%, 10%)",
      bgSecondary: "hsl(326, 50%, 15%)",
      textMain: "hsl(326, 90%, 85%)",
      accentGlow: "hsl(86, 100%, 50%)",
      matchedGlow: "hsl(206, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1079", {
      id: "palette_1079",
      name: "Dynamic Theme #1079",
      bgPrimary: "hsl(343, 40%, 10%)",
      bgSecondary: "hsl(343, 50%, 15%)",
      textMain: "hsl(343, 90%, 85%)",
      accentGlow: "hsl(103, 100%, 50%)",
      matchedGlow: "hsl(223, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1080", {
      id: "palette_1080",
      name: "Dynamic Theme #1080",
      bgPrimary: "hsl(0, 40%, 10%)",
      bgSecondary: "hsl(0, 50%, 15%)",
      textMain: "hsl(0, 90%, 85%)",
      accentGlow: "hsl(120, 100%, 50%)",
      matchedGlow: "hsl(240, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1081", {
      id: "palette_1081",
      name: "Dynamic Theme #1081",
      bgPrimary: "hsl(17, 40%, 10%)",
      bgSecondary: "hsl(17, 50%, 15%)",
      textMain: "hsl(17, 90%, 85%)",
      accentGlow: "hsl(137, 100%, 50%)",
      matchedGlow: "hsl(257, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1082", {
      id: "palette_1082",
      name: "Dynamic Theme #1082",
      bgPrimary: "hsl(34, 40%, 10%)",
      bgSecondary: "hsl(34, 50%, 15%)",
      textMain: "hsl(34, 90%, 85%)",
      accentGlow: "hsl(154, 100%, 50%)",
      matchedGlow: "hsl(274, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1083", {
      id: "palette_1083",
      name: "Dynamic Theme #1083",
      bgPrimary: "hsl(51, 40%, 10%)",
      bgSecondary: "hsl(51, 50%, 15%)",
      textMain: "hsl(51, 90%, 85%)",
      accentGlow: "hsl(171, 100%, 50%)",
      matchedGlow: "hsl(291, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1084", {
      id: "palette_1084",
      name: "Dynamic Theme #1084",
      bgPrimary: "hsl(68, 40%, 10%)",
      bgSecondary: "hsl(68, 50%, 15%)",
      textMain: "hsl(68, 90%, 85%)",
      accentGlow: "hsl(188, 100%, 50%)",
      matchedGlow: "hsl(308, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1085", {
      id: "palette_1085",
      name: "Dynamic Theme #1085",
      bgPrimary: "hsl(85, 40%, 10%)",
      bgSecondary: "hsl(85, 50%, 15%)",
      textMain: "hsl(85, 90%, 85%)",
      accentGlow: "hsl(205, 100%, 50%)",
      matchedGlow: "hsl(325, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1086", {
      id: "palette_1086",
      name: "Dynamic Theme #1086",
      bgPrimary: "hsl(102, 40%, 10%)",
      bgSecondary: "hsl(102, 50%, 15%)",
      textMain: "hsl(102, 90%, 85%)",
      accentGlow: "hsl(222, 100%, 50%)",
      matchedGlow: "hsl(342, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1087", {
      id: "palette_1087",
      name: "Dynamic Theme #1087",
      bgPrimary: "hsl(119, 40%, 10%)",
      bgSecondary: "hsl(119, 50%, 15%)",
      textMain: "hsl(119, 90%, 85%)",
      accentGlow: "hsl(239, 100%, 50%)",
      matchedGlow: "hsl(359, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1088", {
      id: "palette_1088",
      name: "Dynamic Theme #1088",
      bgPrimary: "hsl(136, 40%, 10%)",
      bgSecondary: "hsl(136, 50%, 15%)",
      textMain: "hsl(136, 90%, 85%)",
      accentGlow: "hsl(256, 100%, 50%)",
      matchedGlow: "hsl(16, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1089", {
      id: "palette_1089",
      name: "Dynamic Theme #1089",
      bgPrimary: "hsl(153, 40%, 10%)",
      bgSecondary: "hsl(153, 50%, 15%)",
      textMain: "hsl(153, 90%, 85%)",
      accentGlow: "hsl(273, 100%, 50%)",
      matchedGlow: "hsl(33, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1090", {
      id: "palette_1090",
      name: "Dynamic Theme #1090",
      bgPrimary: "hsl(170, 40%, 10%)",
      bgSecondary: "hsl(170, 50%, 15%)",
      textMain: "hsl(170, 90%, 85%)",
      accentGlow: "hsl(290, 100%, 50%)",
      matchedGlow: "hsl(50, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1091", {
      id: "palette_1091",
      name: "Dynamic Theme #1091",
      bgPrimary: "hsl(187, 40%, 10%)",
      bgSecondary: "hsl(187, 50%, 15%)",
      textMain: "hsl(187, 90%, 85%)",
      accentGlow: "hsl(307, 100%, 50%)",
      matchedGlow: "hsl(67, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1092", {
      id: "palette_1092",
      name: "Dynamic Theme #1092",
      bgPrimary: "hsl(204, 40%, 10%)",
      bgSecondary: "hsl(204, 50%, 15%)",
      textMain: "hsl(204, 90%, 85%)",
      accentGlow: "hsl(324, 100%, 50%)",
      matchedGlow: "hsl(84, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1093", {
      id: "palette_1093",
      name: "Dynamic Theme #1093",
      bgPrimary: "hsl(221, 40%, 10%)",
      bgSecondary: "hsl(221, 50%, 15%)",
      textMain: "hsl(221, 90%, 85%)",
      accentGlow: "hsl(341, 100%, 50%)",
      matchedGlow: "hsl(101, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1094", {
      id: "palette_1094",
      name: "Dynamic Theme #1094",
      bgPrimary: "hsl(238, 40%, 10%)",
      bgSecondary: "hsl(238, 50%, 15%)",
      textMain: "hsl(238, 90%, 85%)",
      accentGlow: "hsl(358, 100%, 50%)",
      matchedGlow: "hsl(118, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1095", {
      id: "palette_1095",
      name: "Dynamic Theme #1095",
      bgPrimary: "hsl(255, 40%, 10%)",
      bgSecondary: "hsl(255, 50%, 15%)",
      textMain: "hsl(255, 90%, 85%)",
      accentGlow: "hsl(15, 100%, 50%)",
      matchedGlow: "hsl(135, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1096", {
      id: "palette_1096",
      name: "Dynamic Theme #1096",
      bgPrimary: "hsl(272, 40%, 10%)",
      bgSecondary: "hsl(272, 50%, 15%)",
      textMain: "hsl(272, 90%, 85%)",
      accentGlow: "hsl(32, 100%, 50%)",
      matchedGlow: "hsl(152, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1097", {
      id: "palette_1097",
      name: "Dynamic Theme #1097",
      bgPrimary: "hsl(289, 40%, 10%)",
      bgSecondary: "hsl(289, 50%, 15%)",
      textMain: "hsl(289, 90%, 85%)",
      accentGlow: "hsl(49, 100%, 50%)",
      matchedGlow: "hsl(169, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1098", {
      id: "palette_1098",
      name: "Dynamic Theme #1098",
      bgPrimary: "hsl(306, 40%, 10%)",
      bgSecondary: "hsl(306, 50%, 15%)",
      textMain: "hsl(306, 90%, 85%)",
      accentGlow: "hsl(66, 100%, 50%)",
      matchedGlow: "hsl(186, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1099", {
      id: "palette_1099",
      name: "Dynamic Theme #1099",
      bgPrimary: "hsl(323, 40%, 10%)",
      bgSecondary: "hsl(323, 50%, 15%)",
      textMain: "hsl(323, 90%, 85%)",
      accentGlow: "hsl(83, 100%, 50%)",
      matchedGlow: "hsl(203, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1100", {
      id: "palette_1100",
      name: "Dynamic Theme #1100",
      bgPrimary: "hsl(340, 40%, 10%)",
      bgSecondary: "hsl(340, 50%, 15%)",
      textMain: "hsl(340, 90%, 85%)",
      accentGlow: "hsl(100, 100%, 50%)",
      matchedGlow: "hsl(220, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1101", {
      id: "palette_1101",
      name: "Dynamic Theme #1101",
      bgPrimary: "hsl(357, 40%, 10%)",
      bgSecondary: "hsl(357, 50%, 15%)",
      textMain: "hsl(357, 90%, 85%)",
      accentGlow: "hsl(117, 100%, 50%)",
      matchedGlow: "hsl(237, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1102", {
      id: "palette_1102",
      name: "Dynamic Theme #1102",
      bgPrimary: "hsl(14, 40%, 10%)",
      bgSecondary: "hsl(14, 50%, 15%)",
      textMain: "hsl(14, 90%, 85%)",
      accentGlow: "hsl(134, 100%, 50%)",
      matchedGlow: "hsl(254, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1103", {
      id: "palette_1103",
      name: "Dynamic Theme #1103",
      bgPrimary: "hsl(31, 40%, 10%)",
      bgSecondary: "hsl(31, 50%, 15%)",
      textMain: "hsl(31, 90%, 85%)",
      accentGlow: "hsl(151, 100%, 50%)",
      matchedGlow: "hsl(271, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1104", {
      id: "palette_1104",
      name: "Dynamic Theme #1104",
      bgPrimary: "hsl(48, 40%, 10%)",
      bgSecondary: "hsl(48, 50%, 15%)",
      textMain: "hsl(48, 90%, 85%)",
      accentGlow: "hsl(168, 100%, 50%)",
      matchedGlow: "hsl(288, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1105", {
      id: "palette_1105",
      name: "Dynamic Theme #1105",
      bgPrimary: "hsl(65, 40%, 10%)",
      bgSecondary: "hsl(65, 50%, 15%)",
      textMain: "hsl(65, 90%, 85%)",
      accentGlow: "hsl(185, 100%, 50%)",
      matchedGlow: "hsl(305, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1106", {
      id: "palette_1106",
      name: "Dynamic Theme #1106",
      bgPrimary: "hsl(82, 40%, 10%)",
      bgSecondary: "hsl(82, 50%, 15%)",
      textMain: "hsl(82, 90%, 85%)",
      accentGlow: "hsl(202, 100%, 50%)",
      matchedGlow: "hsl(322, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1107", {
      id: "palette_1107",
      name: "Dynamic Theme #1107",
      bgPrimary: "hsl(99, 40%, 10%)",
      bgSecondary: "hsl(99, 50%, 15%)",
      textMain: "hsl(99, 90%, 85%)",
      accentGlow: "hsl(219, 100%, 50%)",
      matchedGlow: "hsl(339, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1108", {
      id: "palette_1108",
      name: "Dynamic Theme #1108",
      bgPrimary: "hsl(116, 40%, 10%)",
      bgSecondary: "hsl(116, 50%, 15%)",
      textMain: "hsl(116, 90%, 85%)",
      accentGlow: "hsl(236, 100%, 50%)",
      matchedGlow: "hsl(356, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1109", {
      id: "palette_1109",
      name: "Dynamic Theme #1109",
      bgPrimary: "hsl(133, 40%, 10%)",
      bgSecondary: "hsl(133, 50%, 15%)",
      textMain: "hsl(133, 90%, 85%)",
      accentGlow: "hsl(253, 100%, 50%)",
      matchedGlow: "hsl(13, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1110", {
      id: "palette_1110",
      name: "Dynamic Theme #1110",
      bgPrimary: "hsl(150, 40%, 10%)",
      bgSecondary: "hsl(150, 50%, 15%)",
      textMain: "hsl(150, 90%, 85%)",
      accentGlow: "hsl(270, 100%, 50%)",
      matchedGlow: "hsl(30, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1111", {
      id: "palette_1111",
      name: "Dynamic Theme #1111",
      bgPrimary: "hsl(167, 40%, 10%)",
      bgSecondary: "hsl(167, 50%, 15%)",
      textMain: "hsl(167, 90%, 85%)",
      accentGlow: "hsl(287, 100%, 50%)",
      matchedGlow: "hsl(47, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1112", {
      id: "palette_1112",
      name: "Dynamic Theme #1112",
      bgPrimary: "hsl(184, 40%, 10%)",
      bgSecondary: "hsl(184, 50%, 15%)",
      textMain: "hsl(184, 90%, 85%)",
      accentGlow: "hsl(304, 100%, 50%)",
      matchedGlow: "hsl(64, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1113", {
      id: "palette_1113",
      name: "Dynamic Theme #1113",
      bgPrimary: "hsl(201, 40%, 10%)",
      bgSecondary: "hsl(201, 50%, 15%)",
      textMain: "hsl(201, 90%, 85%)",
      accentGlow: "hsl(321, 100%, 50%)",
      matchedGlow: "hsl(81, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1114", {
      id: "palette_1114",
      name: "Dynamic Theme #1114",
      bgPrimary: "hsl(218, 40%, 10%)",
      bgSecondary: "hsl(218, 50%, 15%)",
      textMain: "hsl(218, 90%, 85%)",
      accentGlow: "hsl(338, 100%, 50%)",
      matchedGlow: "hsl(98, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1115", {
      id: "palette_1115",
      name: "Dynamic Theme #1115",
      bgPrimary: "hsl(235, 40%, 10%)",
      bgSecondary: "hsl(235, 50%, 15%)",
      textMain: "hsl(235, 90%, 85%)",
      accentGlow: "hsl(355, 100%, 50%)",
      matchedGlow: "hsl(115, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1116", {
      id: "palette_1116",
      name: "Dynamic Theme #1116",
      bgPrimary: "hsl(252, 40%, 10%)",
      bgSecondary: "hsl(252, 50%, 15%)",
      textMain: "hsl(252, 90%, 85%)",
      accentGlow: "hsl(12, 100%, 50%)",
      matchedGlow: "hsl(132, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1117", {
      id: "palette_1117",
      name: "Dynamic Theme #1117",
      bgPrimary: "hsl(269, 40%, 10%)",
      bgSecondary: "hsl(269, 50%, 15%)",
      textMain: "hsl(269, 90%, 85%)",
      accentGlow: "hsl(29, 100%, 50%)",
      matchedGlow: "hsl(149, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1118", {
      id: "palette_1118",
      name: "Dynamic Theme #1118",
      bgPrimary: "hsl(286, 40%, 10%)",
      bgSecondary: "hsl(286, 50%, 15%)",
      textMain: "hsl(286, 90%, 85%)",
      accentGlow: "hsl(46, 100%, 50%)",
      matchedGlow: "hsl(166, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1119", {
      id: "palette_1119",
      name: "Dynamic Theme #1119",
      bgPrimary: "hsl(303, 40%, 10%)",
      bgSecondary: "hsl(303, 50%, 15%)",
      textMain: "hsl(303, 90%, 85%)",
      accentGlow: "hsl(63, 100%, 50%)",
      matchedGlow: "hsl(183, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1120", {
      id: "palette_1120",
      name: "Dynamic Theme #1120",
      bgPrimary: "hsl(320, 40%, 10%)",
      bgSecondary: "hsl(320, 50%, 15%)",
      textMain: "hsl(320, 90%, 85%)",
      accentGlow: "hsl(80, 100%, 50%)",
      matchedGlow: "hsl(200, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1121", {
      id: "palette_1121",
      name: "Dynamic Theme #1121",
      bgPrimary: "hsl(337, 40%, 10%)",
      bgSecondary: "hsl(337, 50%, 15%)",
      textMain: "hsl(337, 90%, 85%)",
      accentGlow: "hsl(97, 100%, 50%)",
      matchedGlow: "hsl(217, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1122", {
      id: "palette_1122",
      name: "Dynamic Theme #1122",
      bgPrimary: "hsl(354, 40%, 10%)",
      bgSecondary: "hsl(354, 50%, 15%)",
      textMain: "hsl(354, 90%, 85%)",
      accentGlow: "hsl(114, 100%, 50%)",
      matchedGlow: "hsl(234, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1123", {
      id: "palette_1123",
      name: "Dynamic Theme #1123",
      bgPrimary: "hsl(11, 40%, 10%)",
      bgSecondary: "hsl(11, 50%, 15%)",
      textMain: "hsl(11, 90%, 85%)",
      accentGlow: "hsl(131, 100%, 50%)",
      matchedGlow: "hsl(251, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1124", {
      id: "palette_1124",
      name: "Dynamic Theme #1124",
      bgPrimary: "hsl(28, 40%, 10%)",
      bgSecondary: "hsl(28, 50%, 15%)",
      textMain: "hsl(28, 90%, 85%)",
      accentGlow: "hsl(148, 100%, 50%)",
      matchedGlow: "hsl(268, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1125", {
      id: "palette_1125",
      name: "Dynamic Theme #1125",
      bgPrimary: "hsl(45, 40%, 10%)",
      bgSecondary: "hsl(45, 50%, 15%)",
      textMain: "hsl(45, 90%, 85%)",
      accentGlow: "hsl(165, 100%, 50%)",
      matchedGlow: "hsl(285, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1126", {
      id: "palette_1126",
      name: "Dynamic Theme #1126",
      bgPrimary: "hsl(62, 40%, 10%)",
      bgSecondary: "hsl(62, 50%, 15%)",
      textMain: "hsl(62, 90%, 85%)",
      accentGlow: "hsl(182, 100%, 50%)",
      matchedGlow: "hsl(302, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1127", {
      id: "palette_1127",
      name: "Dynamic Theme #1127",
      bgPrimary: "hsl(79, 40%, 10%)",
      bgSecondary: "hsl(79, 50%, 15%)",
      textMain: "hsl(79, 90%, 85%)",
      accentGlow: "hsl(199, 100%, 50%)",
      matchedGlow: "hsl(319, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1128", {
      id: "palette_1128",
      name: "Dynamic Theme #1128",
      bgPrimary: "hsl(96, 40%, 10%)",
      bgSecondary: "hsl(96, 50%, 15%)",
      textMain: "hsl(96, 90%, 85%)",
      accentGlow: "hsl(216, 100%, 50%)",
      matchedGlow: "hsl(336, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1129", {
      id: "palette_1129",
      name: "Dynamic Theme #1129",
      bgPrimary: "hsl(113, 40%, 10%)",
      bgSecondary: "hsl(113, 50%, 15%)",
      textMain: "hsl(113, 90%, 85%)",
      accentGlow: "hsl(233, 100%, 50%)",
      matchedGlow: "hsl(353, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1130", {
      id: "palette_1130",
      name: "Dynamic Theme #1130",
      bgPrimary: "hsl(130, 40%, 10%)",
      bgSecondary: "hsl(130, 50%, 15%)",
      textMain: "hsl(130, 90%, 85%)",
      accentGlow: "hsl(250, 100%, 50%)",
      matchedGlow: "hsl(10, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1131", {
      id: "palette_1131",
      name: "Dynamic Theme #1131",
      bgPrimary: "hsl(147, 40%, 10%)",
      bgSecondary: "hsl(147, 50%, 15%)",
      textMain: "hsl(147, 90%, 85%)",
      accentGlow: "hsl(267, 100%, 50%)",
      matchedGlow: "hsl(27, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1132", {
      id: "palette_1132",
      name: "Dynamic Theme #1132",
      bgPrimary: "hsl(164, 40%, 10%)",
      bgSecondary: "hsl(164, 50%, 15%)",
      textMain: "hsl(164, 90%, 85%)",
      accentGlow: "hsl(284, 100%, 50%)",
      matchedGlow: "hsl(44, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1133", {
      id: "palette_1133",
      name: "Dynamic Theme #1133",
      bgPrimary: "hsl(181, 40%, 10%)",
      bgSecondary: "hsl(181, 50%, 15%)",
      textMain: "hsl(181, 90%, 85%)",
      accentGlow: "hsl(301, 100%, 50%)",
      matchedGlow: "hsl(61, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1134", {
      id: "palette_1134",
      name: "Dynamic Theme #1134",
      bgPrimary: "hsl(198, 40%, 10%)",
      bgSecondary: "hsl(198, 50%, 15%)",
      textMain: "hsl(198, 90%, 85%)",
      accentGlow: "hsl(318, 100%, 50%)",
      matchedGlow: "hsl(78, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1135", {
      id: "palette_1135",
      name: "Dynamic Theme #1135",
      bgPrimary: "hsl(215, 40%, 10%)",
      bgSecondary: "hsl(215, 50%, 15%)",
      textMain: "hsl(215, 90%, 85%)",
      accentGlow: "hsl(335, 100%, 50%)",
      matchedGlow: "hsl(95, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1136", {
      id: "palette_1136",
      name: "Dynamic Theme #1136",
      bgPrimary: "hsl(232, 40%, 10%)",
      bgSecondary: "hsl(232, 50%, 15%)",
      textMain: "hsl(232, 90%, 85%)",
      accentGlow: "hsl(352, 100%, 50%)",
      matchedGlow: "hsl(112, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1137", {
      id: "palette_1137",
      name: "Dynamic Theme #1137",
      bgPrimary: "hsl(249, 40%, 10%)",
      bgSecondary: "hsl(249, 50%, 15%)",
      textMain: "hsl(249, 90%, 85%)",
      accentGlow: "hsl(9, 100%, 50%)",
      matchedGlow: "hsl(129, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1138", {
      id: "palette_1138",
      name: "Dynamic Theme #1138",
      bgPrimary: "hsl(266, 40%, 10%)",
      bgSecondary: "hsl(266, 50%, 15%)",
      textMain: "hsl(266, 90%, 85%)",
      accentGlow: "hsl(26, 100%, 50%)",
      matchedGlow: "hsl(146, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1139", {
      id: "palette_1139",
      name: "Dynamic Theme #1139",
      bgPrimary: "hsl(283, 40%, 10%)",
      bgSecondary: "hsl(283, 50%, 15%)",
      textMain: "hsl(283, 90%, 85%)",
      accentGlow: "hsl(43, 100%, 50%)",
      matchedGlow: "hsl(163, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1140", {
      id: "palette_1140",
      name: "Dynamic Theme #1140",
      bgPrimary: "hsl(300, 40%, 10%)",
      bgSecondary: "hsl(300, 50%, 15%)",
      textMain: "hsl(300, 90%, 85%)",
      accentGlow: "hsl(60, 100%, 50%)",
      matchedGlow: "hsl(180, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1141", {
      id: "palette_1141",
      name: "Dynamic Theme #1141",
      bgPrimary: "hsl(317, 40%, 10%)",
      bgSecondary: "hsl(317, 50%, 15%)",
      textMain: "hsl(317, 90%, 85%)",
      accentGlow: "hsl(77, 100%, 50%)",
      matchedGlow: "hsl(197, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1142", {
      id: "palette_1142",
      name: "Dynamic Theme #1142",
      bgPrimary: "hsl(334, 40%, 10%)",
      bgSecondary: "hsl(334, 50%, 15%)",
      textMain: "hsl(334, 90%, 85%)",
      accentGlow: "hsl(94, 100%, 50%)",
      matchedGlow: "hsl(214, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1143", {
      id: "palette_1143",
      name: "Dynamic Theme #1143",
      bgPrimary: "hsl(351, 40%, 10%)",
      bgSecondary: "hsl(351, 50%, 15%)",
      textMain: "hsl(351, 90%, 85%)",
      accentGlow: "hsl(111, 100%, 50%)",
      matchedGlow: "hsl(231, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1144", {
      id: "palette_1144",
      name: "Dynamic Theme #1144",
      bgPrimary: "hsl(8, 40%, 10%)",
      bgSecondary: "hsl(8, 50%, 15%)",
      textMain: "hsl(8, 90%, 85%)",
      accentGlow: "hsl(128, 100%, 50%)",
      matchedGlow: "hsl(248, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1145", {
      id: "palette_1145",
      name: "Dynamic Theme #1145",
      bgPrimary: "hsl(25, 40%, 10%)",
      bgSecondary: "hsl(25, 50%, 15%)",
      textMain: "hsl(25, 90%, 85%)",
      accentGlow: "hsl(145, 100%, 50%)",
      matchedGlow: "hsl(265, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1146", {
      id: "palette_1146",
      name: "Dynamic Theme #1146",
      bgPrimary: "hsl(42, 40%, 10%)",
      bgSecondary: "hsl(42, 50%, 15%)",
      textMain: "hsl(42, 90%, 85%)",
      accentGlow: "hsl(162, 100%, 50%)",
      matchedGlow: "hsl(282, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1147", {
      id: "palette_1147",
      name: "Dynamic Theme #1147",
      bgPrimary: "hsl(59, 40%, 10%)",
      bgSecondary: "hsl(59, 50%, 15%)",
      textMain: "hsl(59, 90%, 85%)",
      accentGlow: "hsl(179, 100%, 50%)",
      matchedGlow: "hsl(299, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1148", {
      id: "palette_1148",
      name: "Dynamic Theme #1148",
      bgPrimary: "hsl(76, 40%, 10%)",
      bgSecondary: "hsl(76, 50%, 15%)",
      textMain: "hsl(76, 90%, 85%)",
      accentGlow: "hsl(196, 100%, 50%)",
      matchedGlow: "hsl(316, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1149", {
      id: "palette_1149",
      name: "Dynamic Theme #1149",
      bgPrimary: "hsl(93, 40%, 10%)",
      bgSecondary: "hsl(93, 50%, 15%)",
      textMain: "hsl(93, 90%, 85%)",
      accentGlow: "hsl(213, 100%, 50%)",
      matchedGlow: "hsl(333, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1150", {
      id: "palette_1150",
      name: "Dynamic Theme #1150",
      bgPrimary: "hsl(110, 40%, 10%)",
      bgSecondary: "hsl(110, 50%, 15%)",
      textMain: "hsl(110, 90%, 85%)",
      accentGlow: "hsl(230, 100%, 50%)",
      matchedGlow: "hsl(350, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1151", {
      id: "palette_1151",
      name: "Dynamic Theme #1151",
      bgPrimary: "hsl(127, 40%, 10%)",
      bgSecondary: "hsl(127, 50%, 15%)",
      textMain: "hsl(127, 90%, 85%)",
      accentGlow: "hsl(247, 100%, 50%)",
      matchedGlow: "hsl(7, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1152", {
      id: "palette_1152",
      name: "Dynamic Theme #1152",
      bgPrimary: "hsl(144, 40%, 10%)",
      bgSecondary: "hsl(144, 50%, 15%)",
      textMain: "hsl(144, 90%, 85%)",
      accentGlow: "hsl(264, 100%, 50%)",
      matchedGlow: "hsl(24, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1153", {
      id: "palette_1153",
      name: "Dynamic Theme #1153",
      bgPrimary: "hsl(161, 40%, 10%)",
      bgSecondary: "hsl(161, 50%, 15%)",
      textMain: "hsl(161, 90%, 85%)",
      accentGlow: "hsl(281, 100%, 50%)",
      matchedGlow: "hsl(41, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1154", {
      id: "palette_1154",
      name: "Dynamic Theme #1154",
      bgPrimary: "hsl(178, 40%, 10%)",
      bgSecondary: "hsl(178, 50%, 15%)",
      textMain: "hsl(178, 90%, 85%)",
      accentGlow: "hsl(298, 100%, 50%)",
      matchedGlow: "hsl(58, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1155", {
      id: "palette_1155",
      name: "Dynamic Theme #1155",
      bgPrimary: "hsl(195, 40%, 10%)",
      bgSecondary: "hsl(195, 50%, 15%)",
      textMain: "hsl(195, 90%, 85%)",
      accentGlow: "hsl(315, 100%, 50%)",
      matchedGlow: "hsl(75, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1156", {
      id: "palette_1156",
      name: "Dynamic Theme #1156",
      bgPrimary: "hsl(212, 40%, 10%)",
      bgSecondary: "hsl(212, 50%, 15%)",
      textMain: "hsl(212, 90%, 85%)",
      accentGlow: "hsl(332, 100%, 50%)",
      matchedGlow: "hsl(92, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1157", {
      id: "palette_1157",
      name: "Dynamic Theme #1157",
      bgPrimary: "hsl(229, 40%, 10%)",
      bgSecondary: "hsl(229, 50%, 15%)",
      textMain: "hsl(229, 90%, 85%)",
      accentGlow: "hsl(349, 100%, 50%)",
      matchedGlow: "hsl(109, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1158", {
      id: "palette_1158",
      name: "Dynamic Theme #1158",
      bgPrimary: "hsl(246, 40%, 10%)",
      bgSecondary: "hsl(246, 50%, 15%)",
      textMain: "hsl(246, 90%, 85%)",
      accentGlow: "hsl(6, 100%, 50%)",
      matchedGlow: "hsl(126, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1159", {
      id: "palette_1159",
      name: "Dynamic Theme #1159",
      bgPrimary: "hsl(263, 40%, 10%)",
      bgSecondary: "hsl(263, 50%, 15%)",
      textMain: "hsl(263, 90%, 85%)",
      accentGlow: "hsl(23, 100%, 50%)",
      matchedGlow: "hsl(143, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1160", {
      id: "palette_1160",
      name: "Dynamic Theme #1160",
      bgPrimary: "hsl(280, 40%, 10%)",
      bgSecondary: "hsl(280, 50%, 15%)",
      textMain: "hsl(280, 90%, 85%)",
      accentGlow: "hsl(40, 100%, 50%)",
      matchedGlow: "hsl(160, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1161", {
      id: "palette_1161",
      name: "Dynamic Theme #1161",
      bgPrimary: "hsl(297, 40%, 10%)",
      bgSecondary: "hsl(297, 50%, 15%)",
      textMain: "hsl(297, 90%, 85%)",
      accentGlow: "hsl(57, 100%, 50%)",
      matchedGlow: "hsl(177, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1162", {
      id: "palette_1162",
      name: "Dynamic Theme #1162",
      bgPrimary: "hsl(314, 40%, 10%)",
      bgSecondary: "hsl(314, 50%, 15%)",
      textMain: "hsl(314, 90%, 85%)",
      accentGlow: "hsl(74, 100%, 50%)",
      matchedGlow: "hsl(194, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1163", {
      id: "palette_1163",
      name: "Dynamic Theme #1163",
      bgPrimary: "hsl(331, 40%, 10%)",
      bgSecondary: "hsl(331, 50%, 15%)",
      textMain: "hsl(331, 90%, 85%)",
      accentGlow: "hsl(91, 100%, 50%)",
      matchedGlow: "hsl(211, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1164", {
      id: "palette_1164",
      name: "Dynamic Theme #1164",
      bgPrimary: "hsl(348, 40%, 10%)",
      bgSecondary: "hsl(348, 50%, 15%)",
      textMain: "hsl(348, 90%, 85%)",
      accentGlow: "hsl(108, 100%, 50%)",
      matchedGlow: "hsl(228, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1165", {
      id: "palette_1165",
      name: "Dynamic Theme #1165",
      bgPrimary: "hsl(5, 40%, 10%)",
      bgSecondary: "hsl(5, 50%, 15%)",
      textMain: "hsl(5, 90%, 85%)",
      accentGlow: "hsl(125, 100%, 50%)",
      matchedGlow: "hsl(245, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1166", {
      id: "palette_1166",
      name: "Dynamic Theme #1166",
      bgPrimary: "hsl(22, 40%, 10%)",
      bgSecondary: "hsl(22, 50%, 15%)",
      textMain: "hsl(22, 90%, 85%)",
      accentGlow: "hsl(142, 100%, 50%)",
      matchedGlow: "hsl(262, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1167", {
      id: "palette_1167",
      name: "Dynamic Theme #1167",
      bgPrimary: "hsl(39, 40%, 10%)",
      bgSecondary: "hsl(39, 50%, 15%)",
      textMain: "hsl(39, 90%, 85%)",
      accentGlow: "hsl(159, 100%, 50%)",
      matchedGlow: "hsl(279, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1168", {
      id: "palette_1168",
      name: "Dynamic Theme #1168",
      bgPrimary: "hsl(56, 40%, 10%)",
      bgSecondary: "hsl(56, 50%, 15%)",
      textMain: "hsl(56, 90%, 85%)",
      accentGlow: "hsl(176, 100%, 50%)",
      matchedGlow: "hsl(296, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1169", {
      id: "palette_1169",
      name: "Dynamic Theme #1169",
      bgPrimary: "hsl(73, 40%, 10%)",
      bgSecondary: "hsl(73, 50%, 15%)",
      textMain: "hsl(73, 90%, 85%)",
      accentGlow: "hsl(193, 100%, 50%)",
      matchedGlow: "hsl(313, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1170", {
      id: "palette_1170",
      name: "Dynamic Theme #1170",
      bgPrimary: "hsl(90, 40%, 10%)",
      bgSecondary: "hsl(90, 50%, 15%)",
      textMain: "hsl(90, 90%, 85%)",
      accentGlow: "hsl(210, 100%, 50%)",
      matchedGlow: "hsl(330, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1171", {
      id: "palette_1171",
      name: "Dynamic Theme #1171",
      bgPrimary: "hsl(107, 40%, 10%)",
      bgSecondary: "hsl(107, 50%, 15%)",
      textMain: "hsl(107, 90%, 85%)",
      accentGlow: "hsl(227, 100%, 50%)",
      matchedGlow: "hsl(347, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1172", {
      id: "palette_1172",
      name: "Dynamic Theme #1172",
      bgPrimary: "hsl(124, 40%, 10%)",
      bgSecondary: "hsl(124, 50%, 15%)",
      textMain: "hsl(124, 90%, 85%)",
      accentGlow: "hsl(244, 100%, 50%)",
      matchedGlow: "hsl(4, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1173", {
      id: "palette_1173",
      name: "Dynamic Theme #1173",
      bgPrimary: "hsl(141, 40%, 10%)",
      bgSecondary: "hsl(141, 50%, 15%)",
      textMain: "hsl(141, 90%, 85%)",
      accentGlow: "hsl(261, 100%, 50%)",
      matchedGlow: "hsl(21, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1174", {
      id: "palette_1174",
      name: "Dynamic Theme #1174",
      bgPrimary: "hsl(158, 40%, 10%)",
      bgSecondary: "hsl(158, 50%, 15%)",
      textMain: "hsl(158, 90%, 85%)",
      accentGlow: "hsl(278, 100%, 50%)",
      matchedGlow: "hsl(38, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1175", {
      id: "palette_1175",
      name: "Dynamic Theme #1175",
      bgPrimary: "hsl(175, 40%, 10%)",
      bgSecondary: "hsl(175, 50%, 15%)",
      textMain: "hsl(175, 90%, 85%)",
      accentGlow: "hsl(295, 100%, 50%)",
      matchedGlow: "hsl(55, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1176", {
      id: "palette_1176",
      name: "Dynamic Theme #1176",
      bgPrimary: "hsl(192, 40%, 10%)",
      bgSecondary: "hsl(192, 50%, 15%)",
      textMain: "hsl(192, 90%, 85%)",
      accentGlow: "hsl(312, 100%, 50%)",
      matchedGlow: "hsl(72, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1177", {
      id: "palette_1177",
      name: "Dynamic Theme #1177",
      bgPrimary: "hsl(209, 40%, 10%)",
      bgSecondary: "hsl(209, 50%, 15%)",
      textMain: "hsl(209, 90%, 85%)",
      accentGlow: "hsl(329, 100%, 50%)",
      matchedGlow: "hsl(89, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1178", {
      id: "palette_1178",
      name: "Dynamic Theme #1178",
      bgPrimary: "hsl(226, 40%, 10%)",
      bgSecondary: "hsl(226, 50%, 15%)",
      textMain: "hsl(226, 90%, 85%)",
      accentGlow: "hsl(346, 100%, 50%)",
      matchedGlow: "hsl(106, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1179", {
      id: "palette_1179",
      name: "Dynamic Theme #1179",
      bgPrimary: "hsl(243, 40%, 10%)",
      bgSecondary: "hsl(243, 50%, 15%)",
      textMain: "hsl(243, 90%, 85%)",
      accentGlow: "hsl(3, 100%, 50%)",
      matchedGlow: "hsl(123, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1180", {
      id: "palette_1180",
      name: "Dynamic Theme #1180",
      bgPrimary: "hsl(260, 40%, 10%)",
      bgSecondary: "hsl(260, 50%, 15%)",
      textMain: "hsl(260, 90%, 85%)",
      accentGlow: "hsl(20, 100%, 50%)",
      matchedGlow: "hsl(140, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1181", {
      id: "palette_1181",
      name: "Dynamic Theme #1181",
      bgPrimary: "hsl(277, 40%, 10%)",
      bgSecondary: "hsl(277, 50%, 15%)",
      textMain: "hsl(277, 90%, 85%)",
      accentGlow: "hsl(37, 100%, 50%)",
      matchedGlow: "hsl(157, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1182", {
      id: "palette_1182",
      name: "Dynamic Theme #1182",
      bgPrimary: "hsl(294, 40%, 10%)",
      bgSecondary: "hsl(294, 50%, 15%)",
      textMain: "hsl(294, 90%, 85%)",
      accentGlow: "hsl(54, 100%, 50%)",
      matchedGlow: "hsl(174, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1183", {
      id: "palette_1183",
      name: "Dynamic Theme #1183",
      bgPrimary: "hsl(311, 40%, 10%)",
      bgSecondary: "hsl(311, 50%, 15%)",
      textMain: "hsl(311, 90%, 85%)",
      accentGlow: "hsl(71, 100%, 50%)",
      matchedGlow: "hsl(191, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1184", {
      id: "palette_1184",
      name: "Dynamic Theme #1184",
      bgPrimary: "hsl(328, 40%, 10%)",
      bgSecondary: "hsl(328, 50%, 15%)",
      textMain: "hsl(328, 90%, 85%)",
      accentGlow: "hsl(88, 100%, 50%)",
      matchedGlow: "hsl(208, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1185", {
      id: "palette_1185",
      name: "Dynamic Theme #1185",
      bgPrimary: "hsl(345, 40%, 10%)",
      bgSecondary: "hsl(345, 50%, 15%)",
      textMain: "hsl(345, 90%, 85%)",
      accentGlow: "hsl(105, 100%, 50%)",
      matchedGlow: "hsl(225, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1186", {
      id: "palette_1186",
      name: "Dynamic Theme #1186",
      bgPrimary: "hsl(2, 40%, 10%)",
      bgSecondary: "hsl(2, 50%, 15%)",
      textMain: "hsl(2, 90%, 85%)",
      accentGlow: "hsl(122, 100%, 50%)",
      matchedGlow: "hsl(242, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1187", {
      id: "palette_1187",
      name: "Dynamic Theme #1187",
      bgPrimary: "hsl(19, 40%, 10%)",
      bgSecondary: "hsl(19, 50%, 15%)",
      textMain: "hsl(19, 90%, 85%)",
      accentGlow: "hsl(139, 100%, 50%)",
      matchedGlow: "hsl(259, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1188", {
      id: "palette_1188",
      name: "Dynamic Theme #1188",
      bgPrimary: "hsl(36, 40%, 10%)",
      bgSecondary: "hsl(36, 50%, 15%)",
      textMain: "hsl(36, 90%, 85%)",
      accentGlow: "hsl(156, 100%, 50%)",
      matchedGlow: "hsl(276, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1189", {
      id: "palette_1189",
      name: "Dynamic Theme #1189",
      bgPrimary: "hsl(53, 40%, 10%)",
      bgSecondary: "hsl(53, 50%, 15%)",
      textMain: "hsl(53, 90%, 85%)",
      accentGlow: "hsl(173, 100%, 50%)",
      matchedGlow: "hsl(293, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1190", {
      id: "palette_1190",
      name: "Dynamic Theme #1190",
      bgPrimary: "hsl(70, 40%, 10%)",
      bgSecondary: "hsl(70, 50%, 15%)",
      textMain: "hsl(70, 90%, 85%)",
      accentGlow: "hsl(190, 100%, 50%)",
      matchedGlow: "hsl(310, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1191", {
      id: "palette_1191",
      name: "Dynamic Theme #1191",
      bgPrimary: "hsl(87, 40%, 10%)",
      bgSecondary: "hsl(87, 50%, 15%)",
      textMain: "hsl(87, 90%, 85%)",
      accentGlow: "hsl(207, 100%, 50%)",
      matchedGlow: "hsl(327, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1192", {
      id: "palette_1192",
      name: "Dynamic Theme #1192",
      bgPrimary: "hsl(104, 40%, 10%)",
      bgSecondary: "hsl(104, 50%, 15%)",
      textMain: "hsl(104, 90%, 85%)",
      accentGlow: "hsl(224, 100%, 50%)",
      matchedGlow: "hsl(344, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1193", {
      id: "palette_1193",
      name: "Dynamic Theme #1193",
      bgPrimary: "hsl(121, 40%, 10%)",
      bgSecondary: "hsl(121, 50%, 15%)",
      textMain: "hsl(121, 90%, 85%)",
      accentGlow: "hsl(241, 100%, 50%)",
      matchedGlow: "hsl(1, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1194", {
      id: "palette_1194",
      name: "Dynamic Theme #1194",
      bgPrimary: "hsl(138, 40%, 10%)",
      bgSecondary: "hsl(138, 50%, 15%)",
      textMain: "hsl(138, 90%, 85%)",
      accentGlow: "hsl(258, 100%, 50%)",
      matchedGlow: "hsl(18, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1195", {
      id: "palette_1195",
      name: "Dynamic Theme #1195",
      bgPrimary: "hsl(155, 40%, 10%)",
      bgSecondary: "hsl(155, 50%, 15%)",
      textMain: "hsl(155, 90%, 85%)",
      accentGlow: "hsl(275, 100%, 50%)",
      matchedGlow: "hsl(35, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1196", {
      id: "palette_1196",
      name: "Dynamic Theme #1196",
      bgPrimary: "hsl(172, 40%, 10%)",
      bgSecondary: "hsl(172, 50%, 15%)",
      textMain: "hsl(172, 90%, 85%)",
      accentGlow: "hsl(292, 100%, 50%)",
      matchedGlow: "hsl(52, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1197", {
      id: "palette_1197",
      name: "Dynamic Theme #1197",
      bgPrimary: "hsl(189, 40%, 10%)",
      bgSecondary: "hsl(189, 50%, 15%)",
      textMain: "hsl(189, 90%, 85%)",
      accentGlow: "hsl(309, 100%, 50%)",
      matchedGlow: "hsl(69, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1198", {
      id: "palette_1198",
      name: "Dynamic Theme #1198",
      bgPrimary: "hsl(206, 40%, 10%)",
      bgSecondary: "hsl(206, 50%, 15%)",
      textMain: "hsl(206, 90%, 85%)",
      accentGlow: "hsl(326, 100%, 50%)",
      matchedGlow: "hsl(86, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
    this.palettes.set("palette_1199", {
      id: "palette_1199",
      name: "Dynamic Theme #1199",
      bgPrimary: "hsl(223, 40%, 10%)",
      bgSecondary: "hsl(223, 50%, 15%)",
      textMain: "hsl(223, 90%, 85%)",
      accentGlow: "hsl(343, 100%, 50%)",
      matchedGlow: "hsl(103, 100%, 50%)",
      cardBorder: "rgba(255,255,255,0.2)"
    });
  }
}

const themePaletteRegistry = new ThemePaletteRegistry();
