/* ==========================================================================
   MEMORY MATCH - AUDIO SYNTHESIZER FREQUENCY & CHIPTUNE ARRAYS
   ========================================================================== */

const AUDIO_SYNTH_MAPS = {
  frequencies: [
    { midi: 21, frequency: 27.5000, note: "MIDI_21" },
    { midi: 22, frequency: 29.1352, note: "MIDI_22" },
    { midi: 23, frequency: 30.8677, note: "MIDI_23" },
    { midi: 24, frequency: 32.7032, note: "MIDI_24" },
    { midi: 25, frequency: 34.6478, note: "MIDI_25" },
    { midi: 26, frequency: 36.7081, note: "MIDI_26" },
    { midi: 27, frequency: 38.8909, note: "MIDI_27" },
    { midi: 28, frequency: 41.2034, note: "MIDI_28" },
    { midi: 29, frequency: 43.6535, note: "MIDI_29" },
    { midi: 30, frequency: 46.2493, note: "MIDI_30" },
    { midi: 31, frequency: 48.9994, note: "MIDI_31" },
    { midi: 32, frequency: 51.9131, note: "MIDI_32" },
    { midi: 33, frequency: 55.0000, note: "MIDI_33" },
    { midi: 34, frequency: 58.2705, note: "MIDI_34" },
    { midi: 35, frequency: 61.7354, note: "MIDI_35" },
    { midi: 36, frequency: 65.4064, note: "MIDI_36" },
    { midi: 37, frequency: 69.2957, note: "MIDI_37" },
    { midi: 38, frequency: 73.4162, note: "MIDI_38" },
    { midi: 39, frequency: 77.7817, note: "MIDI_39" },
    { midi: 40, frequency: 82.4069, note: "MIDI_40" },
    { midi: 41, frequency: 87.3071, note: "MIDI_41" },
    { midi: 42, frequency: 92.4986, note: "MIDI_42" },
    { midi: 43, frequency: 97.9989, note: "MIDI_43" },
    { midi: 44, frequency: 103.8262, note: "MIDI_44" },
    { midi: 45, frequency: 110.0000, note: "MIDI_45" },
    { midi: 46, frequency: 116.5409, note: "MIDI_46" },
    { midi: 47, frequency: 123.4708, note: "MIDI_47" },
    { midi: 48, frequency: 130.8128, note: "MIDI_48" },
    { midi: 49, frequency: 138.5913, note: "MIDI_49" },
    { midi: 50, frequency: 146.8324, note: "MIDI_50" },
    { midi: 51, frequency: 155.5635, note: "MIDI_51" },
    { midi: 52, frequency: 164.8138, note: "MIDI_52" },
    { midi: 53, frequency: 174.6141, note: "MIDI_53" },
    { midi: 54, frequency: 184.9972, note: "MIDI_54" },
    { midi: 55, frequency: 195.9977, note: "MIDI_55" },
    { midi: 56, frequency: 207.6523, note: "MIDI_56" },
    { midi: 57, frequency: 220.0000, note: "MIDI_57" },
    { midi: 58, frequency: 233.0819, note: "MIDI_58" },
    { midi: 59, frequency: 246.9417, note: "MIDI_59" },
    { midi: 60, frequency: 261.6256, note: "MIDI_60" },
    { midi: 61, frequency: 277.1826, note: "MIDI_61" },
    { midi: 62, frequency: 293.6648, note: "MIDI_62" },
    { midi: 63, frequency: 311.1270, note: "MIDI_63" },
    { midi: 64, frequency: 329.6276, note: "MIDI_64" },
    { midi: 65, frequency: 349.2282, note: "MIDI_65" },
    { midi: 66, frequency: 369.9944, note: "MIDI_66" },
    { midi: 67, frequency: 391.9954, note: "MIDI_67" },
    { midi: 68, frequency: 415.3047, note: "MIDI_68" },
    { midi: 69, frequency: 440.0000, note: "MIDI_69" },
    { midi: 70, frequency: 466.1638, note: "MIDI_70" },
    { midi: 71, frequency: 493.8833, note: "MIDI_71" },
    { midi: 72, frequency: 523.2511, note: "MIDI_72" },
    { midi: 73, frequency: 554.3653, note: "MIDI_73" },
    { midi: 74, frequency: 587.3295, note: "MIDI_74" },
    { midi: 75, frequency: 622.2540, note: "MIDI_75" },
    { midi: 76, frequency: 659.2551, note: "MIDI_76" },
    { midi: 77, frequency: 698.4565, note: "MIDI_77" },
    { midi: 78, frequency: 739.9888, note: "MIDI_78" },
    { midi: 79, frequency: 783.9909, note: "MIDI_79" },
    { midi: 80, frequency: 830.6094, note: "MIDI_80" },
    { midi: 81, frequency: 880.0000, note: "MIDI_81" },
    { midi: 82, frequency: 932.3275, note: "MIDI_82" },
    { midi: 83, frequency: 987.7666, note: "MIDI_83" },
    { midi: 84, frequency: 1046.5023, note: "MIDI_84" },
    { midi: 85, frequency: 1108.7305, note: "MIDI_85" },
    { midi: 86, frequency: 1174.6591, note: "MIDI_86" },
    { midi: 87, frequency: 1244.5079, note: "MIDI_87" },
    { midi: 88, frequency: 1318.5102, note: "MIDI_88" },
    { midi: 89, frequency: 1396.9129, note: "MIDI_89" },
    { midi: 90, frequency: 1479.9777, note: "MIDI_90" },
    { midi: 91, frequency: 1567.9817, note: "MIDI_91" },
    { midi: 92, frequency: 1661.2188, note: "MIDI_92" },
    { midi: 93, frequency: 1760.0000, note: "MIDI_93" },
    { midi: 94, frequency: 1864.6550, note: "MIDI_94" },
    { midi: 95, frequency: 1975.5332, note: "MIDI_95" },
    { midi: 96, frequency: 2093.0045, note: "MIDI_96" },
    { midi: 97, frequency: 2217.4610, note: "MIDI_97" },
    { midi: 98, frequency: 2349.3181, note: "MIDI_98" },
    { midi: 99, frequency: 2489.0159, note: "MIDI_99" },
    { midi: 100, frequency: 2637.0205, note: "MIDI_100" },
    { midi: 101, frequency: 2793.8259, note: "MIDI_101" },
    { midi: 102, frequency: 2959.9554, note: "MIDI_102" },
    { midi: 103, frequency: 3135.9635, note: "MIDI_103" },
    { midi: 104, frequency: 3322.4376, note: "MIDI_104" },
    { midi: 105, frequency: 3520.0000, note: "MIDI_105" },
    { midi: 106, frequency: 3729.3101, note: "MIDI_106" },
    { midi: 107, frequency: 3951.0664, note: "MIDI_107" },
    { midi: 108, frequency: 4186.0090, note: "MIDI_108" },
  ],
  chords: [
    {
      id: "chord_0",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_1",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_2",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_3",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_4",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_5",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_6",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_7",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_8",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_9",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_10",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_11",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_12",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_13",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_14",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_15",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_16",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_17",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_18",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_19",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_20",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_21",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_22",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_23",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_24",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_25",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_26",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_27",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_28",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_29",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_30",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_31",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_32",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_33",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_34",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_35",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_36",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_37",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_38",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_39",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_40",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_41",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_42",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_43",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_44",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_45",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_46",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_47",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_48",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_49",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_50",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_51",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_52",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_53",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_54",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_55",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_56",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_57",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_58",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_59",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_60",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_61",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_62",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_63",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_64",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_65",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_66",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_67",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_68",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_69",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_70",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_71",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_72",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_73",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_74",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_75",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_76",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_77",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_78",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_79",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_80",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_81",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_82",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_83",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_84",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_85",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_86",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_87",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_88",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_89",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_90",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_91",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_92",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_93",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_94",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_95",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_96",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_97",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_98",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_99",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_100",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_101",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_102",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_103",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_104",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_105",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_106",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_107",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_108",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_109",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_110",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_111",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_112",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_113",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_114",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_115",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_116",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_117",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_118",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_119",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_120",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_121",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_122",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_123",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_124",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_125",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_126",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_127",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_128",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_129",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_130",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_131",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_132",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_133",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_134",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_135",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_136",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_137",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_138",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_139",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_140",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_141",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_142",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_143",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_144",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_145",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_146",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_147",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_148",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_149",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_150",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_151",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_152",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_153",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_154",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_155",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_156",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_157",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_158",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_159",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_160",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_161",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_162",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_163",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_164",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_165",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_166",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_167",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_168",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_169",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_170",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_171",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_172",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_173",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_174",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_175",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_176",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_177",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_178",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_179",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_180",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_181",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_182",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_183",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_184",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_185",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_186",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_187",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_188",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_189",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_190",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_191",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_192",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_193",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_194",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_195",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_196",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_197",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_198",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_199",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_200",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_201",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_202",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_203",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_204",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_205",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_206",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_207",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_208",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_209",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_210",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_211",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_212",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_213",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_214",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_215",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_216",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_217",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_218",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_219",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_220",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_221",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_222",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_223",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_224",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_225",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_226",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_227",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_228",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_229",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_230",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_231",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_232",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_233",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_234",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_235",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_236",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_237",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_238",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_239",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_240",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_241",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_242",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_243",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_244",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_245",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_246",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_247",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_248",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_249",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_250",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_251",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_252",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_253",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_254",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_255",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_256",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_257",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_258",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_259",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_260",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_261",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_262",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_263",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_264",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_265",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_266",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_267",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_268",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_269",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_270",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_271",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_272",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_273",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_274",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_275",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_276",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_277",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_278",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_279",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_280",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_281",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_282",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_283",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_284",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_285",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_286",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_287",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_288",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_289",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_290",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_291",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_292",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_293",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_294",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_295",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_296",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_297",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_298",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_299",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_300",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_301",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_302",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_303",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_304",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_305",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_306",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_307",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_308",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_309",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_310",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_311",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_312",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_313",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_314",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_315",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_316",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_317",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_318",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_319",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_320",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_321",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_322",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_323",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_324",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_325",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_326",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_327",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_328",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_329",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_330",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_331",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_332",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_333",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_334",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_335",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_336",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_337",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_338",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_339",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_340",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_341",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_342",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_343",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_344",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_345",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_346",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_347",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_348",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_349",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_350",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_351",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_352",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_353",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_354",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_355",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_356",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_357",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_358",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_359",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_360",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_361",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_362",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_363",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_364",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_365",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_366",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_367",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_368",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_369",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_370",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_371",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_372",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_373",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_374",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_375",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_376",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_377",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_378",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_379",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_380",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_381",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_382",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_383",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_384",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_385",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_386",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_387",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_388",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_389",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_390",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_391",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_392",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_393",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_394",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_395",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_396",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_397",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_398",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_399",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_400",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_401",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_402",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_403",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_404",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_405",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_406",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_407",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_408",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_409",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_410",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_411",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_412",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_413",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_414",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_415",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_416",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_417",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_418",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_419",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_420",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_421",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_422",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_423",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_424",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_425",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_426",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_427",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_428",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_429",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_430",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_431",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_432",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_433",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_434",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_435",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_436",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_437",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_438",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_439",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_440",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_441",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_442",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_443",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_444",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_445",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_446",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_447",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_448",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_449",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_450",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_451",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_452",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_453",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_454",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_455",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_456",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_457",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_458",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_459",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_460",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_461",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_462",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_463",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_464",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_465",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_466",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_467",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_468",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_469",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_470",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_471",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_472",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_473",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_474",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_475",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_476",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_477",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_478",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_479",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_480",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_481",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_482",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_483",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_484",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_485",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_486",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_487",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_488",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_489",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_490",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_491",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_492",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_493",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_494",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_495",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_496",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_497",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_498",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_499",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_500",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_501",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_502",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_503",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_504",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_505",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_506",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_507",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_508",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_509",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_510",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_511",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_512",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_513",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_514",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_515",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_516",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_517",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_518",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_519",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_520",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_521",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_522",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_523",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_524",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_525",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_526",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_527",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_528",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_529",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_530",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_531",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_532",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_533",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_534",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_535",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_536",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_537",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_538",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_539",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_540",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_541",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_542",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_543",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_544",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_545",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_546",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_547",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_548",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_549",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_550",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_551",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_552",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_553",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_554",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_555",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_556",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_557",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_558",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_559",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_560",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_561",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_562",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_563",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_564",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_565",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_566",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_567",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_568",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_569",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_570",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_571",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_572",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_573",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_574",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_575",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_576",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_577",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_578",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_579",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_580",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_581",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_582",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_583",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_584",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_585",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_586",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_587",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_588",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_589",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_590",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_591",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_592",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_593",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_594",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_595",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_596",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_597",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_598",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_599",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_600",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_601",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_602",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_603",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_604",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_605",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_606",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_607",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_608",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_609",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_610",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_611",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_612",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_613",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_614",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_615",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_616",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_617",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_618",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_619",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_620",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_621",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_622",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_623",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_624",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_625",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_626",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_627",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_628",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_629",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_630",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_631",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_632",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_633",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_634",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_635",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_636",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_637",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_638",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_639",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_640",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_641",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_642",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_643",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_644",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_645",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_646",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_647",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_648",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_649",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_650",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_651",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_652",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_653",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_654",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_655",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_656",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_657",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_658",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_659",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_660",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_661",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_662",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_663",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_664",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_665",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_666",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_667",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_668",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_669",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_670",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_671",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_672",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_673",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_674",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_675",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_676",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_677",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_678",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_679",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_680",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_681",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_682",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_683",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_684",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_685",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_686",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_687",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_688",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_689",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_690",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_691",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_692",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_693",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_694",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_695",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_696",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_697",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_698",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_699",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_700",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_701",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_702",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_703",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_704",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_705",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_706",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_707",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_708",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_709",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_710",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_711",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_712",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_713",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_714",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_715",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_716",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_717",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_718",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_719",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_720",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_721",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_722",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_723",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_724",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_725",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_726",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_727",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_728",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_729",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_730",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_731",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_732",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_733",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_734",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_735",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_736",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_737",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_738",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_739",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_740",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_741",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_742",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_743",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_744",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_745",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_746",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_747",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_748",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_749",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_750",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_751",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_752",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_753",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_754",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_755",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_756",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_757",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_758",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_759",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_760",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_761",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_762",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_763",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_764",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_765",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_766",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_767",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_768",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_769",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_770",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_771",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_772",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_773",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_774",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_775",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_776",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_777",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_778",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_779",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_780",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_781",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_782",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_783",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_784",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_785",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_786",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_787",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_788",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_789",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_790",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_791",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_792",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_793",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_794",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_795",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_796",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_797",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_798",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_799",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_800",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_801",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_802",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_803",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_804",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_805",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_806",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_807",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_808",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_809",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_810",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_811",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_812",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_813",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_814",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_815",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_816",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_817",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_818",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_819",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_820",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_821",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_822",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_823",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_824",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_825",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_826",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_827",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_828",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_829",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_830",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_831",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_832",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_833",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_834",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_835",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_836",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_837",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_838",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_839",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_840",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_841",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_842",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_843",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_844",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_845",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_846",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_847",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_848",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_849",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_850",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_851",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_852",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_853",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_854",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_855",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_856",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_857",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_858",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_859",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_860",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_861",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_862",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_863",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_864",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_865",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_866",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_867",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_868",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_869",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_870",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_871",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_872",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_873",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_874",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_875",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_876",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_877",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_878",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_879",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_880",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_881",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_882",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_883",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_884",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_885",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_886",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_887",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_888",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_889",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_890",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_891",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_892",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_893",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_894",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_895",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_896",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_897",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_898",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_899",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_900",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_901",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_902",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_903",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_904",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_905",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_906",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_907",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_908",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_909",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_910",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_911",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_912",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_913",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_914",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_915",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_916",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_917",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_918",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_919",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_920",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_921",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_922",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_923",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_924",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_925",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_926",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_927",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_928",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_929",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_930",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_931",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_932",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_933",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_934",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_935",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_936",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_937",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_938",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_939",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_940",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_941",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_942",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_943",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_944",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_945",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_946",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_947",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_948",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_949",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_950",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_951",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_952",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_953",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_954",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_955",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_956",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_957",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_958",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_959",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_960",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_961",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_962",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_963",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_964",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_965",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_966",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_967",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_968",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_969",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_970",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_971",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_972",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_973",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_974",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_975",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_976",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_977",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_978",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_979",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_980",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_981",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_982",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_983",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_984",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_985",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_986",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_987",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_988",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_989",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_990",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_991",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_992",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_993",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_994",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_995",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_996",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_997",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_998",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_999",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_1000",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_1001",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_1002",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_1003",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_1004",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_1005",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_1006",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_1007",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_1008",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_1009",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_1010",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_1011",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_1012",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_1013",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_1014",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_1015",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_1016",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_1017",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_1018",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_1019",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_1020",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_1021",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_1022",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_1023",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_1024",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_1025",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_1026",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_1027",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_1028",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_1029",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_1030",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_1031",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_1032",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_1033",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_1034",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_1035",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_1036",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_1037",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_1038",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_1039",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_1040",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_1041",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_1042",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_1043",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_1044",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_1045",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_1046",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_1047",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_1048",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_1049",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_1050",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_1051",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_1052",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_1053",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_1054",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_1055",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_1056",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_1057",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_1058",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_1059",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_1060",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_1061",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_1062",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_1063",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_1064",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_1065",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_1066",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_1067",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_1068",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_1069",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_1070",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_1071",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_1072",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_1073",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_1074",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_1075",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_1076",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_1077",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_1078",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_1079",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_1080",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_1081",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_1082",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_1083",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_1084",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_1085",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_1086",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_1087",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_1088",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_1089",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_1090",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_1091",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_1092",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_1093",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_1094",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_1095",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_1096",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_1097",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_1098",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_1099",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_1100",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_1101",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_1102",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_1103",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_1104",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_1105",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_1106",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_1107",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_1108",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_1109",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_1110",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_1111",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_1112",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_1113",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_1114",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_1115",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_1116",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_1117",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_1118",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_1119",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_1120",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_1121",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_1122",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_1123",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_1124",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_1125",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_1126",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_1127",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_1128",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_1129",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_1130",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_1131",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_1132",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_1133",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_1134",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_1135",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_1136",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_1137",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_1138",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_1139",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_1140",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_1141",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_1142",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_1143",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_1144",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_1145",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_1146",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_1147",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_1148",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_1149",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_1150",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_1151",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_1152",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_1153",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_1154",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_1155",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_1156",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_1157",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_1158",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_1159",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_1160",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_1161",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_1162",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_1163",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_1164",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_1165",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_1166",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_1167",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_1168",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_1169",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_1170",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_1171",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_1172",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_1173",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_1174",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_1175",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_1176",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_1177",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_1178",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_1179",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_1180",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_1181",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_1182",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_1183",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_1184",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_1185",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_1186",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_1187",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
    {
      id: "chord_1188",
      root: 261.63,
      third: 327.04,
      fifth: 392.44,
      seventh: 490.56
    },
    {
      id: "chord_1189",
      root: 277.19,
      third: 346.48,
      fifth: 415.78,
      seventh: 519.73
    },
    {
      id: "chord_1190",
      root: 293.67,
      third: 367.09,
      fifth: 440.50,
      seventh: 550.63
    },
    {
      id: "chord_1191",
      root: 311.13,
      third: 388.92,
      fifth: 466.70,
      seventh: 583.37
    },
    {
      id: "chord_1192",
      root: 329.63,
      third: 412.04,
      fifth: 494.45,
      seventh: 618.06
    },
    {
      id: "chord_1193",
      root: 349.23,
      third: 436.54,
      fifth: 523.85,
      seventh: 654.81
    },
    {
      id: "chord_1194",
      root: 370.00,
      third: 462.50,
      fifth: 555.00,
      seventh: 693.75
    },
    {
      id: "chord_1195",
      root: 392.00,
      third: 490.00,
      fifth: 588.00,
      seventh: 735.00
    },
    {
      id: "chord_1196",
      root: 415.31,
      third: 519.14,
      fifth: 622.97,
      seventh: 778.71
    },
    {
      id: "chord_1197",
      root: 440.01,
      third: 550.01,
      fifth: 660.01,
      seventh: 825.01
    },
    {
      id: "chord_1198",
      root: 466.17,
      third: 582.71,
      fifth: 699.26,
      seventh: 874.07
    },
    {
      id: "chord_1199",
      root: 493.89,
      third: 617.36,
      fifth: 740.84,
      seventh: 926.05
    },
  ]
};
