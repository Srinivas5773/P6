/* ==========================================================================
   MEMORY MATCH - AUDIO SYNTHESIZER SOUND ARRAYS & HARMONIC SCALES
   ========================================================================== */

class AudioSynthTableRegistry {
  constructor() {
    this.scales = [];
    this.chords = [];
    this.initSynthTables();
  }

  initSynthTables() {
    this.chords.push({
      id: "chord_table_0",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_2",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_3",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_4",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_5",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_6",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_7",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_8",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_9",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_10",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_11",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_12",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_13",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_14",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_15",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_16",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_17",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_18",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_19",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_20",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_21",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_22",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_23",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_24",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_25",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_26",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_27",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_28",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_29",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_30",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_31",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_32",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_33",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_34",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_35",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_36",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_37",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_38",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_39",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_40",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_41",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_42",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_43",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_44",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_45",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_46",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_47",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_48",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_49",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_50",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_51",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_52",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_53",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_54",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_55",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_56",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_57",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_58",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_59",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_60",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_61",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_62",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_63",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_64",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_65",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_66",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_67",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_68",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_69",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_70",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_71",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_72",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_73",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_74",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_75",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_76",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_77",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_78",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_79",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_80",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_81",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_82",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_83",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_84",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_85",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_86",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_87",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_88",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_89",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_90",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_91",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_92",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_93",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_94",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_95",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_96",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_97",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_98",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_99",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_100",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_101",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_102",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_103",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_104",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_105",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_106",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_107",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_108",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_109",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_110",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_111",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_112",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_113",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_114",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_115",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_116",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_117",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_118",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_119",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_120",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_121",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_122",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_123",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_124",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_125",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_126",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_127",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_128",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_129",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_130",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_131",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_132",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_133",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_134",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_135",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_136",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_137",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_138",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_139",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_140",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_141",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_142",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_143",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_144",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_145",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_146",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_147",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_148",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_149",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_150",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_151",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_152",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_153",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_154",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_155",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_156",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_157",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_158",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_159",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_160",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_161",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_162",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_163",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_164",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_165",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_166",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_167",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_168",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_169",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_170",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_171",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_172",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_173",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_174",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_175",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_176",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_177",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_178",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_179",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_180",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_181",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_182",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_183",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_184",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_185",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_186",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_187",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_188",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_189",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_190",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_191",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_192",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_193",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_194",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_195",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_196",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_197",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_198",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_199",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_200",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_201",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_202",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_203",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_204",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_205",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_206",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_207",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_208",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_209",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_210",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_211",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_212",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_213",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_214",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_215",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_216",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_217",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_218",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_219",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_220",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_221",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_222",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_223",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_224",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_225",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_226",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_227",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_228",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_229",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_230",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_231",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_232",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_233",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_234",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_235",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_236",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_237",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_238",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_239",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_240",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_241",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_242",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_243",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_244",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_245",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_246",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_247",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_248",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_249",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_250",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_251",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_252",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_253",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_254",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_255",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_256",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_257",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_258",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_259",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_260",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_261",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_262",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_263",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_264",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_265",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_266",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_267",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_268",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_269",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_270",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_271",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_272",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_273",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_274",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_275",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_276",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_277",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_278",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_279",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_280",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_281",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_282",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_283",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_284",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_285",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_286",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_287",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_288",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_289",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_290",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_291",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_292",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_293",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_294",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_295",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_296",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_297",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_298",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_299",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_300",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_301",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_302",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_303",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_304",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_305",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_306",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_307",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_308",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_309",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_310",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_311",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_312",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_313",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_314",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_315",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_316",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_317",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_318",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_319",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_320",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_321",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_322",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_323",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_324",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_325",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_326",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_327",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_328",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_329",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_330",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_331",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_332",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_333",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_334",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_335",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_336",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_337",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_338",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_339",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_340",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_341",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_342",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_343",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_344",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_345",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_346",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_347",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_348",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_349",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_350",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_351",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_352",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_353",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_354",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_355",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_356",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_357",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_358",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_359",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_360",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_361",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_362",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_363",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_364",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_365",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_366",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_367",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_368",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_369",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_370",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_371",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_372",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_373",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_374",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_375",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_376",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_377",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_378",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_379",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_380",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_381",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_382",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_383",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_384",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_385",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_386",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_387",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_388",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_389",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_390",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_391",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_392",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_393",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_394",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_395",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_396",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_397",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_398",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_399",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_400",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_401",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_402",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_403",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_404",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_405",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_406",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_407",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_408",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_409",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_410",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_411",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_412",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_413",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_414",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_415",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_416",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_417",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_418",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_419",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_420",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_421",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_422",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_423",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_424",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_425",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_426",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_427",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_428",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_429",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_430",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_431",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_432",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_433",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_434",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_435",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_436",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_437",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_438",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_439",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_440",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_441",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_442",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_443",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_444",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_445",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_446",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_447",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_448",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_449",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_450",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_451",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_452",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_453",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_454",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_455",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_456",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_457",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_458",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_459",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_460",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_461",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_462",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_463",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_464",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_465",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_466",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_467",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_468",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_469",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_470",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_471",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_472",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_473",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_474",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_475",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_476",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_477",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_478",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_479",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_480",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_481",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_482",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_483",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_484",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_485",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_486",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_487",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_488",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_489",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_490",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_491",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_492",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_493",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_494",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_495",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_496",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_497",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_498",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_499",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_500",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_501",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_502",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_503",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_504",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_505",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_506",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_507",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_508",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_509",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_510",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_511",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_512",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_513",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_514",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_515",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_516",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_517",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_518",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_519",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_520",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_521",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_522",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_523",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_524",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_525",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_526",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_527",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_528",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_529",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_530",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_531",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_532",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_533",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_534",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_535",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_536",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_537",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_538",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_539",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_540",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_541",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_542",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_543",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_544",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_545",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_546",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_547",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_548",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_549",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_550",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_551",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_552",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_553",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_554",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_555",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_556",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_557",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_558",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_559",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_560",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_561",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_562",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_563",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_564",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_565",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_566",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_567",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_568",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_569",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_570",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_571",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_572",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_573",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_574",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_575",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_576",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_577",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_578",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_579",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_580",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_581",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_582",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_583",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_584",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_585",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_586",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_587",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_588",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_589",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_590",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_591",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_592",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_593",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_594",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_595",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_596",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_597",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_598",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_599",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_600",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_601",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_602",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_603",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_604",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_605",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_606",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_607",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_608",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_609",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_610",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_611",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_612",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_613",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_614",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_615",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_616",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_617",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_618",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_619",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_620",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_621",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_622",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_623",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_624",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_625",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_626",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_627",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_628",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_629",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_630",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_631",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_632",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_633",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_634",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_635",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_636",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_637",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_638",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_639",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_640",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_641",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_642",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_643",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_644",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_645",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_646",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_647",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_648",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_649",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_650",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_651",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_652",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_653",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_654",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_655",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_656",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_657",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_658",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_659",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_660",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_661",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_662",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_663",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_664",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_665",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_666",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_667",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_668",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_669",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_670",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_671",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_672",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_673",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_674",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_675",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_676",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_677",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_678",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_679",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_680",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_681",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_682",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_683",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_684",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_685",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_686",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_687",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_688",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_689",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_690",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_691",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_692",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_693",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_694",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_695",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_696",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_697",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_698",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_699",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_700",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_701",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_702",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_703",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_704",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_705",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_706",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_707",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_708",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_709",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_710",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_711",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_712",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_713",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_714",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_715",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_716",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_717",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_718",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_719",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_720",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_721",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_722",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_723",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_724",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_725",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_726",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_727",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_728",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_729",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_730",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_731",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_732",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_733",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_734",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_735",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_736",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_737",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_738",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_739",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_740",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_741",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_742",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_743",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_744",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_745",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_746",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_747",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_748",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_749",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_750",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_751",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_752",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_753",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_754",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_755",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_756",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_757",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_758",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_759",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_760",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_761",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_762",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_763",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_764",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_765",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_766",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_767",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_768",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_769",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_770",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_771",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_772",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_773",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_774",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_775",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_776",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_777",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_778",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_779",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_780",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_781",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_782",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_783",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_784",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_785",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_786",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_787",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_788",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_789",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_790",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_791",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_792",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_793",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_794",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_795",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_796",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_797",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_798",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_799",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_800",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_801",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_802",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_803",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_804",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_805",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_806",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_807",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_808",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_809",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_810",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_811",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_812",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_813",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_814",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_815",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_816",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_817",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_818",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_819",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_820",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_821",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_822",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_823",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_824",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_825",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_826",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_827",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_828",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_829",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_830",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_831",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_832",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_833",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_834",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_835",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_836",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_837",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_838",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_839",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_840",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_841",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_842",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_843",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_844",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_845",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_846",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_847",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_848",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_849",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_850",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_851",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_852",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_853",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_854",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_855",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_856",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_857",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_858",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_859",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_860",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_861",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_862",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_863",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_864",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_865",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_866",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_867",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_868",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_869",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_870",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_871",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_872",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_873",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_874",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_875",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_876",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_877",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_878",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_879",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_880",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_881",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_882",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_883",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_884",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_885",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_886",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_887",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_888",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_889",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_890",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_891",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_892",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_893",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_894",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_895",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_896",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_897",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_898",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_899",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_900",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_901",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_902",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_903",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_904",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_905",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_906",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_907",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_908",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_909",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_910",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_911",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_912",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_913",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_914",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_915",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_916",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_917",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_918",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_919",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_920",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_921",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_922",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_923",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_924",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_925",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_926",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_927",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_928",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_929",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_930",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_931",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_932",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_933",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_934",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_935",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_936",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_937",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_938",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_939",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_940",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_941",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_942",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_943",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_944",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_945",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_946",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_947",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_948",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_949",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_950",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_951",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_952",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_953",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_954",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_955",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_956",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_957",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_958",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_959",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_960",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_961",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_962",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_963",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_964",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_965",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_966",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_967",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_968",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_969",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_970",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_971",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_972",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_973",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_974",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_975",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_976",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_977",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_978",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_979",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_980",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_981",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_982",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_983",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_984",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_985",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_986",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_987",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_988",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_989",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_990",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_991",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_992",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_993",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_994",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_995",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_996",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_997",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_998",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_999",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1000",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1001",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1002",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1003",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1004",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1005",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1006",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1007",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1008",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1009",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1010",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1011",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1012",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1013",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1014",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1015",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1016",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1017",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1018",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1019",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1020",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1021",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1022",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1023",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1024",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1025",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1026",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1027",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1028",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1029",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1030",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1031",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1032",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1033",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1034",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1035",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1036",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1037",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1038",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1039",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1040",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1041",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1042",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1043",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1044",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1045",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1046",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1047",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1048",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1049",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1050",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1051",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1052",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1053",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1054",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1055",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1056",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1057",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1058",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1059",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1060",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1061",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1062",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1063",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1064",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1065",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1066",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1067",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1068",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1069",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1070",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1071",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1072",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1073",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1074",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1075",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1076",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1077",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1078",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1079",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1080",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1081",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1082",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1083",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1084",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1085",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1086",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1087",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1088",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1089",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1090",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1091",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1092",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1093",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1094",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1095",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1096",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1097",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1098",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1099",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1100",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1101",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1102",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1103",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1104",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1105",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1106",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1107",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1108",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1109",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1110",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1111",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1112",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1113",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1114",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1115",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1116",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1117",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1118",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1119",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1120",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1121",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1122",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1123",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1124",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1125",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1126",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1127",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1128",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1129",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1130",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1131",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1132",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1133",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1134",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1135",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1136",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1137",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1138",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1139",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1140",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1141",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1142",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1143",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1144",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1145",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1146",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1147",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1148",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1149",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1150",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1151",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1152",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1153",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1154",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1155",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1156",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1157",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1158",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1159",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1160",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1161",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1162",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1163",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1164",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1165",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1166",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1167",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1168",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1169",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1170",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1171",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1172",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1173",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1174",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1175",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1176",
      root: 220.0000,
      third: 275.0000,
      fifth: 330.0000,
      octave: 440.0000,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1177",
      root: 233.0819,
      third: 291.3523,
      fifth: 349.6228,
      octave: 466.1637,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1178",
      root: 246.9416,
      third: 308.6770,
      fifth: 370.4124,
      octave: 493.8832,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1179",
      root: 261.6255,
      third: 327.0319,
      fifth: 392.4382,
      octave: 523.2510,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1180",
      root: 277.1825,
      third: 346.4782,
      fifth: 415.7738,
      octave: 554.3651,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1181",
      root: 293.6646,
      third: 367.0808,
      fifth: 440.4970,
      octave: 587.3293,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1182",
      root: 311.1268,
      third: 388.9085,
      fifth: 466.6902,
      octave: 622.2536,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1183",
      root: 329.6274,
      third: 412.0342,
      fifth: 494.4410,
      octave: 659.2547,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1184",
      root: 349.2280,
      third: 436.5350,
      fifth: 523.8420,
      octave: 698.4560,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1185",
      root: 369.9941,
      third: 462.4927,
      fifth: 554.9912,
      octave: 739.9883,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1186",
      root: 391.9951,
      third: 489.9939,
      fifth: 587.9926,
      octave: 783.9902,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1187",
      root: 415.3043,
      third: 519.1304,
      fifth: 622.9564,
      octave: 830.6086,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1188",
      root: 439.9995,
      third: 549.9994,
      fifth: 659.9993,
      octave: 879.9991,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1189",
      root: 466.1632,
      third: 582.7040,
      fifth: 699.2448,
      octave: 932.3264,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1190",
      root: 493.8827,
      third: 617.3534,
      fifth: 740.8240,
      octave: 987.7654,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1191",
      root: 523.2504,
      third: 654.0630,
      fifth: 784.8756,
      octave: 1046.5009,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1192",
      root: 554.3645,
      third: 692.9556,
      fifth: 831.5467,
      octave: 1108.7289,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1193",
      root: 587.3286,
      third: 734.1608,
      fifth: 880.9930,
      octave: 1174.6573,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1194",
      root: 622.2530,
      third: 777.8162,
      fifth: 933.3795,
      octave: 1244.5059,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1195",
      root: 659.2540,
      third: 824.0675,
      fifth: 988.8810,
      octave: 1318.5080,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1196",
      root: 698.4552,
      third: 873.0690,
      fifth: 1047.6828,
      octave: 1396.9104,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1197",
      root: 739.9875,
      third: 924.9843,
      fifth: 1109.9812,
      octave: 1479.9749,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1198",
      root: 783.9893,
      third: 979.9867,
      fifth: 1175.9840,
      octave: 1567.9787,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
    this.chords.push({
      id: "chord_table_1199",
      root: 830.6077,
      third: 1038.2596,
      fifth: 1245.9115,
      octave: 1661.2154,
      waveform: "triangle",
      envelopeGain: 0.35,
      decayDuration: 0.45
    });
  }
}

const audioSynthTables = new AudioSynthTableRegistry();
